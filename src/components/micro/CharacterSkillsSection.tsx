'use client';

import React, { useState } from 'react';
import type { CharacterSkill } from '@/domain/schemas';
import { AppMediaH2 } from '@/components/micro/AppMediaHeadings';

/**
 * Isolated Client Component for the Post/Pre-Awakening skill tab toggle on Character detail pages,
 * keeping the parent CharacterDetailMacro a pure Server Component with zero dataset serialization.
 */
export function CharacterSkillsSection({
  characterName,
  postSkills,
  preSkills,
}: {
  characterName: string;
  postSkills: CharacterSkill[];
  preSkills?: CharacterSkill[];
}) {
  const hasPreAwakening = Boolean(preSkills && preSkills.length > 0);
  const [skillTab, setSkillTab] = useState<'post' | 'pre'>('post');

  const displayedSkills =
    skillTab === 'pre' && preSkills && preSkills.length > 0 ? preSkills : postSkills;

  return (
    <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AppMediaH2 id="character-skills">{characterName}&apos;s Skills & Nova Burst</AppMediaH2>
        {hasPreAwakening && (
          <div className="inline-flex rounded-lg border border-[#243049] bg-[#0b101b] p-1 text-[12.5px] font-extrabold">
            <button
              type="button"
              onClick={() => setSkillTab('post')}
              className={`rounded-md px-3 py-1 transition-colors ${
                skillTab === 'post' ? 'bg-[#2563eb] text-white' : 'text-[#c8d4e6] hover:text-white'
              }`}
            >
              Post-Awakening
            </button>
            <button
              type="button"
              onClick={() => setSkillTab('pre')}
              className={`rounded-md px-3 py-1 transition-colors ${
                skillTab === 'pre' ? 'bg-[#2563eb] text-white' : 'text-[#c8d4e6] hover:text-white'
              }`}
            >
              Pre-Awakening
            </button>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {displayedSkills.map((sk, idx) => (
          <div key={idx} className="rounded-lg border border-[#243049] bg-[#0f1626] p-3.5 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-2.5">
              <div className="flex items-center gap-3">
                {sk.iconUrl && (
                  <img
                    src={sk.iconUrl}
                    alt={sk.name}
                    className="h-14 w-14 rounded-lg border border-[#334155] bg-[#090d16] p-1 object-contain shrink-0"
                    loading="eager"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#2563eb]/25 border border-[#3b82f6]/50 px-2 py-0.5 text-[11.5px] font-extrabold text-[#93c5fd]">
                      {sk.type}
                    </span>
                    <span className="text-[14px] font-black text-white">{sk.name}</span>
                  </div>
                  <div className="mt-1 text-[12.5px] font-semibold text-[#60a5fa]">
                    {sk.target || 'Active Skill'}
                  </div>
                </div>
              </div>
              <div className="text-[12.5px] font-bold text-[#e8eff8]">
                {sk.spOrEnergyCost} · <span className="text-[#fbbf24]">{sk.multiplierSummary}</span>
              </div>
            </div>

            {sk.scalingRows && sk.scalingRows.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {sk.scalingRows.map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="inline-flex flex-wrap items-center gap-2 rounded border border-[#243049] bg-[#141c2e] px-2.5 py-1 text-[12.5px]"
                  >
                    {row.category && <span className="font-bold text-[#93c5fd]">{row.category}:</span>}
                    {row.items.map((item, iIdx) => (
                      <span key={iIdx} className="inline-flex items-center gap-1 font-extrabold text-[#f8fafc]">
                        {item.iconUrl && (
                          <img src={item.iconUrl} alt="" className="h-4 w-4 object-contain shrink-0" loading="eager" />
                        )}
                        <span>{item.value}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <p className="text-[13.5px] text-[#e2e8f0] whitespace-pre-line leading-relaxed">
              {sk.exactDescription}
            </p>

            {sk.novaBurst && (
              <div className="rounded border border-[#eab308]/40 bg-[#eab308]/10 px-3 py-2 text-[12.5px] text-[#fde047]">
                <strong className="font-extrabold">Nova Burst:</strong> {sk.novaBurst}
              </div>
            )}

            {sk.tooltips && sk.tooltips.length > 0 && (
              <div className="rounded-lg border border-[#1e293b] bg-[#0b101b] p-2.5 space-y-1.5">
                <div className="text-[11.5px] font-extrabold uppercase tracking-wider text-[#c8d4e6]">
                  Skill Buff / Debuff Definitions
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sk.tooltips.map((tt, tIdx) => (
                    <div key={tIdx} className="rounded border border-[#1e293b] bg-[#111726] px-2.5 py-1.5 text-[12.5px]">
                      <div className="font-extrabold text-[#60a5fa]">{tt.title}</div>
                      <div className="text-[#e8eff8] leading-snug">{tt.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
