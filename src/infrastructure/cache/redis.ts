import Redis from 'ioredis';

const globalForRedis = globalThis as unknown as {
  redisClient: Redis | undefined;
};

function createRedisClient(): Redis {
  const url = process.env.REDIS_URL ?? 'redis://localhost:6389';
  const client = new Redis(url, {
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false,
    lazyConnect: true,
  });
  client.on('error', () => {
    // Graceful fallback to PostgreSQL when Redis is offline
  });
  return client;
}

export const redis = globalForRedis.redisClient ?? createRedisClient();

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redisClient = redis;
}

export async function getCachedOrFetch<T>(
  cacheKey: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>
): Promise<T> {
  try {
    if (redis.status === 'wait') {
      await redis.connect();
    }
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached) as T;
    }
  } catch {
    // Continue to PostgreSQL query
  }

  const freshData = await fetcher();

  try {
    if (redis.status === 'ready') {
      await redis.setex(cacheKey, ttlSeconds, JSON.stringify(freshData));
    }
  } catch {
    // Ignore cache write errors
  }

  return freshData;
}
