import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const DEFAULT_NEON_URL =
  'postgresql://neondb_owner:npg_9bsHgo3wViNG@ep-noisy-bar-b9mvdsuu-pooler.c-7.eu-central-1.aws.neon.tech/neondb?sslmode=require';

const connectionString = process.env.DATABASE_URL || DEFAULT_NEON_URL;
export const sqlClient = neon(connectionString);
export const db = drizzle(sqlClient, { schema });
