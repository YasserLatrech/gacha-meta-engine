'use client';

import React, { useState, useEffect } from 'react';
import { AppMediaH2 } from '@/components/micro/AppMediaHeadings';

interface ReaderComment {
  id: string;
  author: string;
  body: string;
  createdAt: string;
  likes: number;
}

/**
 * Interactive community comments box isolated as a tiny Client Component so parent strategy footers
 * and character/eval tables stay pure Server Components with zero serialized dataset bloat.
 */
export function CommunityCommentsWidget() {
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<ReaderComment[]>([]);
  const [likedCommentIds, setLikedCommentIds] = useState<Record<string, boolean>>({});
  const [serverCommentLikes, setServerCommentLikes] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const key = `ascalon_comments_${typeof window !== 'undefined' ? window.location.pathname : 'default'}`;
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) {
          setComments(parsed as ReaderComment[]);
        }
      }
    } catch {
      // ignore storage errors
    }

    let cancelled = false;
    fetch('/api/votes?scope=comment-likes', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { counts?: Record<string, number>; myVotes?: unknown[] } | null) => {
        if (cancelled || !data) return;
        if (data.counts && typeof data.counts === 'object') {
          setServerCommentLikes(data.counts);
        }
        if (Array.isArray(data.myVotes)) {
          const map: Record<string, boolean> = {};
          for (const id of data.myVotes) map[String(id)] = true;
          setLikedCommentIds(map);
        }
      })
      .catch(() => {
        // ignore offline
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newEntry: ReaderComment = {
      id: `cmt-${Date.now()}`,
      author: commentAuthor.trim() || 'Reader',
      body: commentText.trim(),
      createdAt: 'Just now',
      likes: 0,
    };
    const next = [newEntry, ...comments];
    setComments(next);
    setCommentText('');
    try {
      const key = `ascalon_comments_${typeof window !== 'undefined' ? window.location.pathname : 'default'}`;
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const handleLikeComment = async (id: string) => {
    if (likedCommentIds[id]) return;
    setLikedCommentIds((prev) => ({ ...prev, [id]: true }));
    setServerCommentLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scope: 'comment-likes',
          targetId: id,
          mode: 'per-item',
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        counts?: Record<string, number>;
        myVotes?: unknown[];
      } | null;
      if ((res.ok || res.status === 409) && data) {
        if (data.counts && typeof data.counts === 'object') {
          setServerCommentLikes(data.counts);
        }
        if (Array.isArray(data.myVotes)) {
          const map: Record<string, boolean> = {};
          for (const vid of data.myVotes) map[String(vid)] = true;
          map[id] = true;
          setLikedCommentIds(map);
        }
      }
    } catch {
      // Keep optimistic single-session lock
    }
  };

  return (
    <section id="reader-comments" className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3.5">
      <AppMediaH2>Reader Comments & Strategy Discussion ({comments.length})</AppMediaH2>

      <form onSubmit={handlePostComment} className="space-y-2.5 rounded-lg border border-[#243049] bg-[#0f1626] p-3.5">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
            placeholder="Name (optional, default: Reader)"
            className="w-full sm:w-56 rounded border border-[#243049] bg-[#090d16] px-3 py-1.5 text-[12.5px] text-white placeholder-[#8c9db8] focus:border-[#3b82f6] focus:outline-none"
          />
          <span className="text-[12.5px] text-[#c8d4e6] self-center">
            Share party setups, boss clear tips, or questions regarding this guide.
          </span>
        </div>
        <textarea
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your strategy comment or question..."
          className="w-full rounded border border-[#243049] bg-[#090d16] p-2.5 text-[13.5px] text-white placeholder-[#8c9db8] focus:border-[#3b82f6] focus:outline-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-1.5 text-[12.5px] font-black text-white transition-colors"
          >
            Post Comment
          </button>
        </div>
      </form>

      {comments.length > 0 ? (
        <div className="space-y-2">
          {comments.map((c) => (
            <div key={c.id} className="rounded-lg border border-[#1e293b] bg-[#0f1626] p-3 space-y-1">
              <div className="flex items-center justify-between text-[12.5px] text-[#a8b8d0]">
                <span className="font-bold text-[#93c5fd]">{c.author}</span>
                <div className="flex items-center gap-2">
                  <span>{c.createdAt}</span>
                  <button
                    type="button"
                    disabled={Boolean(likedCommentIds[c.id])}
                    onClick={() => handleLikeComment(c.id)}
                    className={`rounded border px-2 py-0.5 text-[11.5px] font-bold transition-colors ${
                      likedCommentIds[c.id]
                        ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300 cursor-default'
                        : 'border-[#243049] bg-[#161f33] hover:border-[#3b82f6] text-[#e8eff8]'
                    }`}
                  >
                    {likedCommentIds[c.id] ? '✓ ' : ''}Good ({Math.max(c.likes, serverCommentLikes[c.id] || 0)})
                  </button>
                </div>
              </div>
              <p className="text-[13.5px] text-[#e2e8f0] whitespace-pre-line">{c.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-[#1e293b] bg-[#0f1626] p-3 text-center text-[12.5px] text-[#c8d4e6]">
          No comments posted on this article yet. Be the first to share a strategy tip or question above.
        </div>
      )}
    </section>
  );
}
