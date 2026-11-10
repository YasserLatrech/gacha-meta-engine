'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import type { GameWikiDataset, CharacterEntity } from '@/domain/schemas';
import {
  AppMediaH2,
  AppMediaH3,
  AppMediaH4,
  AppMediaTierBadge,
  AppMediaTableLink,
  AppMediaIconCell,
  TIER_COLOR_STYLES,
} from '@/components/micro/AppMediaHeadings';
import { AppMediaTocBox, AppMediaCommunityPoll } from '@/components/medium/AppMediaTocAndWidgets';
import {
  AppMediaDetailedCharEvalTable,
  AppMediaDetailedArcanaEvalTable,
  AppMediaStrategyFooter,
} from '@/components/medium/AppMediaStrategyBlocks';

const REROLL_TOC = [
  {
    id: 'reroll-ranking-section',
    label: 'Reroll Tier List (Characters & Arcana)',
    subItems: [
      { id: 'reroll-char-criteria', label: 'Character Evaluation Criteria Table' },
      { id: 'reroll-supporters-first', label: 'Secure Supporter Units First' },
      { id: 'reroll-bride-carmen', label: 'Highest Priority is Bride Carmen' },
      { id: 'reroll-dress-asherah', label: 'Dress Asherah Priority Adjusted' },
      { id: 'reroll-amora', label: 'Among Attackers, Amora Stands Above the Rest' },
      { id: 'reroll-bunny-charles', label: 'Bunny Charles Has High Single-Target Damage' },
      { id: 'reroll-swimsuit-smile', label: 'Swimsuit Smile is Exceptional Against Bosses' },
      { id: 'reroll-arcana-matrix', label: 'Reroll Tier List (Arcana Cards)' },
      { id: 'reroll-power-tag', label: 'Power Tag Arcana Are Recommended for Rerolling!' },
      { id: 'reroll-endurance-tag', label: 'Strong Endurance Tag Arcana Have Increased' },
      { id: 'reroll-savior-assist', label: 'Savior Assist Arcana Are Paired With Characters' },
    ],
  },
  { id: 'reroll-poll-section', label: 'Which Character or Arcana Are You Starting With?' },
  {
    id: 'reroll-detailed-intro',
    label: 'Overview of Top Reroll Target Characters & Arcana',
    subItems: [
      { id: 'reroll-ss-rank', label: 'SS Rank (Characters & Arcana)' },
      { id: 'reroll-s-rank', label: 'S Rank (Characters & Arcana)' },
    ],
  },
  { id: 'should-you-reroll', label: 'Should You Reroll in Star Savior?' },
  { id: 'how-to-reroll', label: 'How to Reroll Step-by-Step (~10 Minutes)' },
  { id: 'reroll-stopping-line', label: 'Reroll Stopping Line' },
  { id: 'char-vs-arcana-priority', label: 'Should You Prioritize Characters or Arcana?' },
  { id: 'reroll-eval-criteria', label: 'Reroll Evaluation Criteria' },
];

export function RerollTierListMacro({ dataset }: { dataset: GameWikiDataset }) {
  const { game, characters, arcana } = dataset;

  const ssrArcana = arcana.filter((a) => a.rarity === 'SSR');

  const charByRerollTier = (tier: 'SS' | 'S' | 'A' | 'B') =>
    characters.filter((c) => c.rerollTier === tier);

  const arcanaByTier = (tier: 'SS' | 'S' | 'A' | 'B') =>
    ssrArcana.filter((a) => a.tier === tier);

  const supporterTriad = characters.filter((c) =>
    ['dress-asherah', 'bride-carmen', 'maid-ceres'].includes(c.slug)
  );

  const pollOptions = useMemo(() => {
    const list = [
      { slug: 'bunny-charles', name: 'Bunny Charles', votes: 13, percent: 12.2 },
      { slug: 'bell-lease', name: 'Bell Lease', votes: 12, percent: 11.3 },
      { slug: 'bride-carmen', name: 'Bride Carmen', votes: 7, percent: 6.6 },
      { slug: 'bunny-frey', name: 'Bunny Frey', votes: 6, percent: 5.6 },
      { slug: 'tanya', name: 'Tanya', votes: 5, percent: 4.7 },
      { slug: 'dress-asherah', name: 'Dress Asherah', votes: 5, percent: 4.7 },
      { slug: 'rin', name: 'Rin', votes: 4, percent: 3.7 },
      { slug: 'bride-epindel', name: 'Bride Epindel', votes: 4, percent: 3.7 },
      { slug: 'professor-m', name: 'Professor M', votes: 4, percent: 3.7 },
      { slug: 'amora', name: 'Amora', votes: 4, percent: 3.7 },
    ];
    return list.map((item, idx) => {
      const found = characters.find((c) => c.slug === item.slug);
      return {
        rank: idx + 1,
        slug: item.slug,
        name: found?.name || item.name,
        imageUrl: found?.imageUrl || 'https://appmedia.jp/wp-content/themes/appmedia/lib/starsavior/img/VOYAGER_AMORA_icon.webp',
        votes: item.votes,
        percent: item.percent,
      };
    });
  }, [characters]);

  return (
    <div className="space-y-6">
      {/* H1 Header */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-3.5">
          <img
            src="https://appmedia.jp/wp-content/uploads/2026/05/121623_3y1g7.webp"
            alt="Reroll Tier List"
            className="h-14 w-14 rounded-lg border border-[#10b981]/50 object-cover shrink-0"
            loading="eager"
          />
          <div>
            <div className="text-[11px] font-bold text-[#93c5fd]">
              Updated: 2026/11/10 · {game.patchVersion} · Synced with Neon DB
            </div>
            <h1 className="mt-0.5 text-lg sm:text-xl font-black text-white">
              [Star Savior] Reroll Tier List & Stopping Line Guide
            </h1>
          </div>
        </div>

        <p className="text-[12px] text-[#cbd5e1] leading-relaxed">
          This is the Star Savior Reroll Tier List. It covers the ideal reroll stopping line, recommended gacha banners, and detailed evaluations of the best starting SSR Characters and SSR Arcana cards.
        </p>

        {/* Early Game Recommended Articles Table (序盤おすすめ記事) */}
        <div className="overflow-hidden rounded-lg border border-[#243049] bg-[#0f1626]">
          <div className="border-b border-[#243049] bg-[#161f33] px-3 py-1.5 text-center text-[11px] font-extrabold text-[#f8fafc]">
            Early-Game Recommended Strategy Guides
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-[#1e293b] text-center text-[11px] font-bold">
            <a href="#reroll-ranking-section" className="bg-[#2563eb]/20 py-2 text-white">Reroll Tier List</a>
            <a href="#how-to-reroll" className="py-2 text-[#60a5fa] hover:bg-[#17223b]">How to Reroll</a>
            <Link href="/starsavior#beginner-guides" className="py-2 text-[#60a5fa] hover:bg-[#17223b]">Early-Game Guide</Link>
            <Link href="/starsavior#beginner-guides" className="py-2 text-[#60a5fa] hover:bg-[#17223b]">Daily Checklist</Link>
            <Link href="/starsavior#rescue-journey" className="py-2 text-[#60a5fa] hover:bg-[#17223b]">Rescue Journey Guide</Link>
            <Link href="/starsavior/tier-list" className="py-2 text-[#60a5fa] hover:bg-[#17223b]">Best Party Formations</Link>
          </div>
        </div>

        <AppMediaTocBox items={REROLL_TOC} />
      </section>

      {/* H2: リセマラ当たりランキング (Character Reroll Tier Matrix) */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="reroll-ranking-section" badge="CHARACTERS & ARCANA">
          Reroll Tier List (Characters)
        </AppMediaH2>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0b101b]">
          <table className="w-full border-collapse">
            <tbody>
              {(['SS', 'S', 'A', 'B'] as const).map((tierKey, idx) => {
                const list = charByRerollTier(tierKey);
                const tStyle = TIER_COLOR_STYLES[tierKey];
                return (
                  <tr key={tierKey} className="border-b last:border-b-0 border-[#1e293b]">
                    <td className={`w-28 p-3 text-center align-middle border-r border-[#243049] ${tStyle.bg}`}>
                      <div className="text-lg font-black text-white">{tierKey}</div>
                      <div className="text-[10px] font-bold text-white/90">Tier {idx + 1}</div>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-2.5">
                        {list.map((c) => (
                          <AppMediaIconCell
                            key={c.slug}
                            href={`/starsavior/characters/${c.slug}`}
                            name={c.name}
                            imageUrl={c.imageUrl}
                            rarity={c.rarity}
                            topLeftIconUrl={c.staticData?.attributeIconUrl}
                            topRightIconUrl={c.staticData?.classIconUrl}
                            size="md"
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* H3: 評価基準表 */}
        <AppMediaH3 id="reroll-char-criteria">Character Reroll Evaluation Criteria Table</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <td className="w-24 p-2.5 text-center border-r border-[#1e293b]"><AppMediaTierBadge tier="SS" /></td>
                <td className="p-2.5">• Finish rerolling immediately once pulled</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]"><AppMediaTierBadge tier="S" /></td>
                <td className="p-2.5">
                  <div>• Safe to finish if pulled alongside multiple SSRs</div>
                  <div className="pl-3 text-[11px] text-[#94a3b8]">↳ Prioritize SS-Rank characters whenever possible</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]"><AppMediaTierBadge tier="A" /></td>
                <td className="p-2.5">
                  <div>• Great secondary pull alongside an SS-Rank unit</div>
                  <div className="pl-3 text-[11px] text-[#94a3b8]">↳ Keep rerolling if you only pulled an A-Rank unit alone</div>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-center border-r border-[#1e293b]"><AppMediaTierBadge tier="B" /></td>
                <td className="p-2.5">
                  <div>• Situational strength (e.g., strong in PvP but slower in early PvE) — continue rerolling</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H3: まずはサポーターを確保 */}
        <AppMediaH3 id="reroll-supporters-first">Secure Supporter Units First</AppMediaH3>
        <div className="flex flex-wrap gap-3 rounded-lg border border-[#243049] bg-[#0f1626] p-3">
          {supporterTriad.map((c) => (
            <AppMediaIconCell
              key={c.slug}
              href={`/starsavior/characters/${c.slug}`}
              name={c.name}
              imageUrl={c.imageUrl}
              rarity="SSR"
              topLeftIconUrl={c.staticData?.attributeIconUrl}
              topRightIconUrl={c.staticData?.classIconUrl}
            />
          ))}
        </div>
        <p>
          While Star Savior features an abundance of strong Attackers, top-tier Supporters are scarce—meaning you will inevitably rely on Dress Asherah, Bride Carmen, and Maid Ceres across every endgame mode. Whenever any of these three Supporters is on Rate-Up Pickup, securing them is the highest priority.
        </p>

        <AppMediaH3 id="reroll-bride-carmen">Highest Priority is Bride Carmen</AppMediaH3>
        <p>
          Among Supporters, <strong className="text-white">Bride Carmen</strong> is the #1 priority: her off-turn trigger skill protects allies and absorbs single-target damage, while her Basic Skill provides AoE healing and her Ultimate cleanses debuffs. This allows fragile Attackers (such as Counterattack carries like Fei) to operate safely on the frontline.
        </p>

        <AppMediaH3 id="reroll-dress-asherah">Dress Asherah Priority Adjusted</AppMediaH3>
        <p>
          <strong className="text-white">Dress Asherah</strong> provides AoE healing and debuff cleansing, and from Limit Break +1 (LB1) her Unique Passive unlocks Pincer Dual-Attack follow-ups with single-target healing.
        </p>
        <AppMediaH4>Slightly Reduced Usage With Maid Ceres & Professor M</AppMediaH4>
        <p>
          Because Pincer Dual-Attacks can only trigger once per turn, pairing Dress Asherah with Professor M prevents Dress Asherah&apos;s Pincer healing from triggering. Coupled with Maid Ceres offering stronger pure AoE healing, Dress Asherah&apos;s priority has shifted slightly down—though she remains top-tier in teams without Professor M.
        </p>

        <AppMediaH3 id="reroll-amora">Among Attackers, Amora Stands Above the Rest</AppMediaH3>
        <p>
          If you are rerolling for an Attacker, <strong className="text-white">Amora</strong> is the #1 recommendation. Her Special Skill has a 100% base multiplier on a 3-turn cooldown, inflicts Hit Rate Down, and advances her own Action Gauge by 30% (50% on Nova Burst), while her Ultimate grants an Extra Turn and her passive cleanses debuffs.
        </p>

        <AppMediaH3 id="reroll-bunny-charles">Bunny Charles Has High Single-Target Damage</AppMediaH3>
        <p>
          While holding her Special Skill&apos;s &quot;Lucky Token&quot;, <strong className="text-white">Bunny Charles</strong> fires her Basic Skill twice in a row, delivering top-class single-target DPS alongside Ultimate cooldown resets, team-wide ATK buffs, and Nova Burst self-healing—even at LB0.
        </p>

        <AppMediaH3 id="reroll-swimsuit-smile">Swimsuit Smile is Exceptional Against Bosses</AppMediaH3>
        <p>
          <strong className="text-white">Swimsuit Smile</strong> consumes 2 Leap Stacks to unleash high-frequency follow-up Special Skills whenever allies attack, shredding single-target boss Toughness bars.
        </p>
        <AppMediaH4>Her Signature Arcana is Practically Mandatory</AppMediaH4>
        <p>
          Note that Swimsuit Smile relies heavily on her signature SSR Arcana &quot;Preparing for Vacation Starts With Shopping!&quot; to maintain Leap Stack uptime.
        </p>

        {/* Arcana Reroll Tier Matrix */}
        <AppMediaH3 id="reroll-arcana-matrix">Reroll Tier List (Arcana Cards)</AppMediaH3>
        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0b101b]">
          <table className="w-full border-collapse">
            <tbody>
              {(['SS', 'S', 'A', 'B'] as const).map((tierKey, idx) => {
                const list = arcanaByTier(tierKey);
                const tStyle = TIER_COLOR_STYLES[tierKey];
                return (
                  <tr key={tierKey} className="border-b last:border-b-0 border-[#1e293b]">
                    <td className={`w-28 p-3 text-center align-middle border-r border-[#243049] ${tStyle.bg}`}>
                      <div className="text-lg font-black text-white">{tierKey}</div>
                      <div className="text-[10px] font-bold text-white/90">Tier {idx + 1}</div>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-2.5">
                        {list.map((a) => (
                          <AppMediaIconCell
                            key={a.slug}
                            href={`/starsavior/arcana#${a.slug}`}
                            name={a.name}
                            imageUrl={a.imageUrl}
                            rarity="SSR"
                            topLeftIconUrl={a.staticData?.statTagIconUrl}
                            badgeText="SSR"
                            size="md"
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <AppMediaH3 id="reroll-power-tag">Power Tag Arcana Are Recommended for Rerolling!</AppMediaH3>
        <p>
          The top Arcana reroll targets are <strong className="text-white">&quot;Weakness Correction Custom Training&quot;</strong> (Tilia) and <strong className="text-white">&quot;Indomitable Masterpiece&quot;</strong> (Frey). Both carry the Power Tag required by every Attacker and provide Universal Class Bonuses (+6% ATK & +6% Crit Rate, and +12% Crit DMG & +4% Max HP respectively).
        </p>

        <AppMediaH3 id="reroll-endurance-tag">Strong Endurance Tag Arcana Have Increased</AppMediaH3>
        <p>
          Endurance Tag SSR Arcana—specifically <strong className="text-white">&quot;Death to Flowers&quot;</strong> (Carnelia, granting [Stigmata of Insight] +18% Crit Rate) and <strong className="text-white">&quot;The Warmth of the White Moon Is Like Sunlight&quot;</strong> (Rin, granting [Stigmata of Speed] +8 Speed)—are mandatory across almost every Rescue Journey build.
        </p>

        <AppMediaH3 id="reroll-savior-assist">Savior Assist Arcana Must Be Paired With Their Character</AppMediaH3>
        <p>
          Some SSR Arcana feature a <strong className="text-[#fbbf24]">Savior-Exclusive Unique Potential</strong> that can only be unlocked when training that specific featured Savior. If you target a Savior-Exclusive Arcana during rerolling, make sure to pull the corresponding character as well.
        </p>
      </section>

      {/* H2: どのキャラ・アルカナで始める？ */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3">
        <AppMediaH2 id="reroll-poll-section">Which Character or Arcana Are You Starting With?</AppMediaH2>
        <AppMediaCommunityPoll
          title="Reader Vote: Best Reroll Starter Savior"
          subtitle="Vote for the Savior you chose to start your Star Savior account with!"
          initialOptions={pollOptions}
        />
      </section>

      {/* H2: リセマラ当たりキャラ・アルカナの紹介 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-4">
        <AppMediaH2 id="reroll-detailed-intro">Overview of Top Reroll Target Characters & Arcana</AppMediaH2>

        <AppMediaH3 id="reroll-ss-rank">SS Rank — Immediate Reroll Stop Targets</AppMediaH3>
        <AppMediaDetailedCharEvalTable characters={charByRerollTier('SS')} />
        <AppMediaDetailedArcanaEvalTable arcanaList={arcanaByTier('SS')} />

        <AppMediaH3 id="reroll-s-rank">S Rank — High-Value Reroll Targets</AppMediaH3>
        <AppMediaDetailedCharEvalTable characters={charByRerollTier('S')} />
      </section>

      {/* H2: リセマラはするべき？ */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="should-you-reroll">Should You Reroll in Star Savior?</AppMediaH2>
        <AppMediaH3>Rerolling is Recommended!</AppMediaH3>
        <p>
          Clearing Star Savior&apos;s core endgame modes—Rescue Journey Hard, Cosmo Gate, and Operations—requires both strong Saviors and SSR Arcana cards. Although one reroll cycle takes roughly 10 minutes, securing top-tier units upfront makes progression dramatically smoother.
        </p>
        <AppMediaH3>Aim for Both Characters and Arcana</AppMediaH3>
        <p>
          Because Star Savior has separate Character Observation and Arcana Observation banners, starting with a balanced foundation in both is ideal—or secure your core Saviors during rerolling and invest your early story Starlight Stones into SSR Arcana.
        </p>
        <AppMediaH3>Generous Free Distributions Mean Starting Immediately is Also Fine</AppMediaH3>
        <p>
          Star Savior distributes a generous volume of free Observation Tickets, SSR selector tickets, and starter Saviors (such as Asherah), so players who prefer not to reroll can still progress smoothly.
        </p>
      </section>

      {/* H2: リセマラのやり方 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="how-to-reroll">How to Reroll Step-by-Step (~10 Minutes)</AppMediaH2>
        <AppMediaH3>7-Step Fast Reroll Procedure</AppMediaH3>
        <ol className="list-decimal pl-5 space-y-1.5 text-[#e2e8f0]">
          <li>Download and launch Star Savior.</li>
          <li>Select your server (<strong className="text-white">&quot;Global&quot;</strong> is recommended).</li>
          <li>Complete the initial Rescue Journey tutorial run.</li>
          <li>When prompted twice in a row for Tutorial Skip (NOA Support Funds & Operation Tutorial), select <strong className="text-white">&quot;Skip Tutorial&quot;</strong> on both.</li>
          <li>Claim <strong className="text-[#fbbf24]">10,000 Starlight Stones</strong> from Challenge Missions (&quot;First Rescue Journey Clear&quot; & &quot;First Observation&quot;).</li>
          <li>Claim all Mailbox and Login Bonus tickets and pull on the Rate-Up Pickup Gacha banners.</li>
          <li>If unsatisfied with your pulls, open Settings → <strong className="text-white">&quot;Reset Server Account&quot;</strong> and repeat from Step 3.</li>
        </ol>

        <div className="overflow-x-auto rounded-lg border border-[#243049] bg-[#0f1626]">
          <table className="w-full border-collapse text-left text-[12px]">
            <tbody className="divide-y divide-[#1e293b]">
              <tr>
                <th className="w-44 bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">Time Required</th>
                <td className="px-3.5 py-2.5 font-bold text-white">Approx. 10 Minutes per Cycle</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">SSR Base Rate</th>
                <td className="px-3.5 py-2.5 text-[#fbbf24] font-bold">Base SSR Rate: 4.0% (Pickup Rate-Up: 2.0%)</td>
              </tr>
              <tr>
                <th className="bg-[#161f33] px-3.5 py-2.5 font-extrabold text-[#93c5fd] border-r border-[#243049]">SR / R Rates</th>
                <td className="px-3.5 py-2.5 text-[#cbd5e1]">SR: 43.0% · R: 53.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: リセマラ終了ライン & キャラとアルカナはどっち優先？ & 評価基準 */}
      <section className="rounded-lg border border-[#243049] bg-[#111726] p-4 space-y-3 text-[12px] text-[#cbd5e1] leading-relaxed">
        <AppMediaH2 id="reroll-stopping-line">Reroll Stopping Line & Banner Priority</AppMediaH2>
        <AppMediaH3>Aim for Multiple SS-Rank Characters & Arcana</AppMediaH3>
        <p>
          The ideal stopping line is securing <strong className="text-white">2 or more SS-Rank Characters/Arcana</strong> (for example, an SS-Rank Attacker like Amora or Bunny Charles paired with a Supporter like Bride Carmen or Maid Ceres, or a Universal Power SSR Arcana).
        </p>
        <AppMediaH3>Focus on Assembling a Full 4-Unit Party (Including Free SSRs)</AppMediaH3>
        <p>
          Because combat in Star Savior uses a 4-unit party and level synchronization caps require focusing resources on 4 core characters until Lv.200, assemble 4 strong SSR characters first (counting free Asherah and selector tickets) before switching all pulls to SSR Arcana banners.
        </p>
        <AppMediaH4 id="char-vs-arcana-priority">Prioritize Quantity Over Limit Breaks for Arcana (LB0 is Fine)</AppMediaH4>
        <p>
          An Arcana card&apos;s Special Potential accounts for 80% of its value and is unlocked at base copy (LB0) without needing dupes. Focus on collecting a wide variety of SSR Arcana cards rather than chasing Arcana limit breaks.
        </p>

        <AppMediaH2 id="reroll-eval-criteria">Reroll Evaluation Criteria</AppMediaH2>
        <ul className="space-y-1.5 list-disc pl-5">
          <li><strong className="text-white">Characters Evaluated on Versatility:</strong> Units that excel across Operations, Cosmo Gate, and Gauntlet without requiring hyper-specific teammates score highest.</li>
          <li><strong className="text-white">Irreplaceable Kits Scored Higher:</strong> Supporters with off-turn healing/damage sharing (Bride Carmen, Maid Ceres) and unique Evasion/Counter units (Fei) receive premium ratings.</li>
          <li><strong className="text-white">Arcana Evaluated on Special Potentials:</strong> Universal Class Bonus cards with Crit Rate, Crit DMG, ATK, and Speed Special Potentials rank at the top.</li>
        </ul>
      </section>

      <AppMediaStrategyFooter characters={characters} />
    </div>
  );
}
