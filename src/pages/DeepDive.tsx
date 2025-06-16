import React from 'react';
import { CheckIcon, XIcon, AlertTriangleIcon } from 'lucide-react';
const DeepDive = () => {
  return <main className="flex-grow">
      {/* Deep Dive Intro with added title - Changed to gradient background */}
      <section className="w-full py-16 bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] border-t border-[rgba(255,255,255,0.3)] relative overflow-hidden">
        {/* Aurora effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Deep Dive
            </h2>
            <p className="text-lg mb-8 text-white">
              Explore the evidence and frameworks that shaped every MVP
              decision.
            </p>
            <p className="text-lg font-medium mb-4 text-white">
              Questions on Strategy & Metrics?
            </p>
            <a href="mailto:arielasweiner@gmail.com" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1a2a3d] transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
      </section>
      {/* Discovery - Removed container */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-[#2C2C2C]">
              Discovery
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Research Snapshot</h3>
              <div className="mb-6">
                <p className="font-bold mb-2">Academic Research:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Social commitment increases effort, trust, and
                    follow-through (up to 75%) compared to private intent
                    (Stewart et al., 2021).
                  </li>
                  <li>
                    Small group size ( 10 people) enhances visibility and
                    engagement, and reduces social loafing compared to larger
                    groups (Karau & Williams, 2013).
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <p className="font-bold mb-2">User Interviews – Key Quotes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    "I work much better when I'm sitting next to someone who's
                    also working—peer pressure makes me productive."
                  </li>
                  <li>
                    "I had to call someone at 7 a.m. every morning; just knowing
                    she was waiting got me out of bed."
                  </li>
                  <li>
                    "Being with people who do the things I want to do really
                    motivates me."
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <p className="font-bold mb-2">Quantitative Survey (n = 48):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    60% matched the target persona (goal‑oriented + socially
                    active).
                  </li>
                  <li>
                    26% of target respondents joined the wait‑list
                  </li>
                  <li>
                    60% said they would be at least somewhat likely to try a
                    social accountability app.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Competitive Landscape:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Product</th>
                        <th className="border p-2 text-center">
                          Individual Goals, Team Outcomes
                        </th>
                        <th className="border p-2 text-center">
                          Small Accountability Groups
                        </th>
                        <th className="border p-2 text-center">
                          Public & Private Groups
                        </th>
                        <th className="border p-2 text-center">
                          Automated Progress Monitoring
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Our Product</td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">
                          Squad: Habit Accountability
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">Semi-manual</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">Discord</td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">
                              Difficult setup
                            </span>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">Manual setup</span>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">HabitShare</td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">Supporti</td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">
                              Manual check-ins
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">
                          Public Platforms (e.g. Reddit, FB)
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                        <td className="border p-2 text-center">
                          <XIcon size={18} className="mx-auto text-red-600" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">
                          Automated Tools (e.g. GoalsWon, Coach.me)
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">Limited</span>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <AlertTriangleIcon size={18} className="text-yellow-600" />
                            <span className="text-xs mt-1">Mostly 1-on-1</span>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          <div className="flex flex-col items-center">
                            <CheckIcon size={18} className="mx-auto text-green-600" />
                            <span className="text-xs mt-1">(some)</span>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          <CheckIcon size={18} className="mx-auto text-green-600" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Strategy - Changed to gradient background */}
      <section className="w-full py-16 bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] border-t border-[rgba(255,255,255,0.3)] relative overflow-hidden">
        {/* Aurora effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Product Strategy
            </h2>
            <div className="mb-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-bold mb-2">Vision:</p>
              <p className="mb-4">
                Imagine waking up — not to an alarm you dread, but to a message
                from your accountability group cheering you on. You check your
                dashboard and see today's commitments — and your teammates' too.
                You're working on different goals — but showing up for the same
                challenge. A focus session's about to start — and you're
                thinking about joining to get a head start. You check in — and
                give your team the boost they need to lead this week's
                challenge.
              </p>
              <p className="font-semibold">
                That's our vision: a daily sense of purpose powered by shared
                momentum and small‑team accountability.
              </p>
            </div>
            <div className="mb-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-bold mb-2">Target Market:</p>
              <div className="overflow-x-auto mb-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1f4d4d] text-white">
                      <th className="border p-2">Persona</th>
                      <th className="border p-2">Age</th>
                      <th className="border p-2">Motivation</th>
                      <th className="border p-2">Key Pains</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        Growth-minded
                        <br />
                        Engages in social platforms
                      </td>
                      <td className="border p-2">18+</td>
                      <td className="border p-2">Level up skills/health</td>
                      <td className="border p-2">
                        Poor goal follow through
                        <br />
                        Goal pursuit feels lonely
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                Future Personas: Solo creators, college students, work teams
              </p>
            </div>
            <div className="mb-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-bold mb-2">What It Will Take to Win:</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1f4d4d] text-white">
                      <th className="border p-2">Differentiators</th>
                      <th className="border p-2">Retention & Engagement</th>
                      <th className="border p-2">Product Led Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        Small accountability groups
                      </td>
                      <td className="border p-2">Emotional safety</td>
                      <td className="border p-2">
                        Incentivize referrals and sharing → Viral loop
                      </td>
                    </tr>
                    <tr className="border-t-4 border-[#1f4d4d]">
                      <td className="border p-2">
                        Individual goals, shared outcomes
                      </td>
                      <td className="border p-2">
                        Peer encouragement, Team accountability
                      </td>
                      <td className="border p-2">
                        Invites direct to group (push sign up) → Reduce bounce
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-bold mb-4">Strategic Pillars:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2 text-center">
                    Personal agency, squad visibility
                  </h4>
                  <p className="text-sm text-center">
                    Users own their individual goals while their squad sees
                    daily check‑ins, creating gentle peer pressure without
                    losing autonomy.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2 text-center">
                    Shared outcomes, friendly rivalry
                  </h4>
                  <p className="text-sm text-center">
                    Weekly squad challenges and collective streaks create a "we
                    win together" dynamic that sustains motivation.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2 text-center">
                    Emotional safety first
                  </h4>
                  <p className="text-sm text-center">
                    Private squads, positive‑only nudges, small groups, and
                    anonymity remove fear of public failure and reduce
                    likelihood of abuse/spam.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-bold mb-2">Strategic Bets:</p>
              <div className="overflow-x-auto mb-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1f4d4d] text-white">
                      <th className="border p-2">Strategic Bet (assumption)</th>
                      <th className="border p-2">Core risk it addresses</th>
                      <th className="border p-2">Success signals</th>
                      <th className="border p-2">Design mitigations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        Positioned as social-first accountability will attract
                        users seeking more than solo tracking
                      </td>
                      <td className="border p-2">
                        Users sign up expecting a personal habit tracker, feel
                        confused, and churn
                      </td>
                      <td className="border p-2">
                        ≥60% of new users join a squad during onboarding and
                        ≥40% post or react in squad within first 3 days
                      </td>
                      <td className="border p-2">
                        Message 'up to 8 person squads' in landing & onboarding
                        screens; squad preview before account creation;
                        highlight social value on dashboard
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        MVP habit loop (encourage → complete → share →
                        reinforce) drives early retention
                      </td>
                      <td className="border p-2">
                        Users complete tasks but don't feel socially
                        accountable, return rate drops
                      </td>
                      <td className="border p-2">Day-7 retention ≥25%</td>
                      <td className="border p-2">
                        Auto-route user to squad target visual after check-in;
                        show visual progress toward team target; one-tap 'Clap'
                        reaction
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        Pre-defined squads by goal & intensity help users find a
                        quick fit
                      </td>
                      <td className="border p-2">
                        Users quit because they can't find 'people like me' fast
                        enough
                      </td>
                      <td className="border p-2">
                        ≥80% of sign-ups join a pre-defined squad 3 days; squad
                        churn ≤20% in first 72h
                      </td>
                      <td className="border p-2">
                        Seed a single vertical first (e.g., university study
                        squads); list top three goal-based squads in onboarding
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        Opt-in squad visibility & tone tags preserve emotional
                        safety
                      </td>
                      <td className="border p-2">
                        Fear of judgement leads to silent churn
                      </td>
                      <td className="border p-2">
                        ≥90% of users remain in their first squad through Day 3
                      </td>
                      <td className="border p-2">
                        No DMs; tone badge before joining (casual /
                        competitive); private by default outside squad
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        Small-group structure sustains motivation past week 4
                      </td>
                      <td className="border p-2">
                        Users quietly quit after initial burst of motivation
                      </td>
                      <td className="border p-2">
                        ≥30% of users log at least one check-in during Week 2
                      </td>
                      <td className="border p-2">
                        Vacation toggle that preserves squad streak; weekly
                        'squad target' recap message
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                Targets sized for a 100-user alpha cohort. If any KPI is missed by week 6, iterate once, sunset the bet by week 8.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Monetization Strategy - Changed to white background */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-[#2C2C2C]">
              Monetization Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50/80 p-6 rounded-lg">
                <p className="font-bold mb-4">MVP: Freemium With Ads</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    Free tier with full core functionality, supported by:
                    <ul className="list-disc pl-5 mt-2">
                      <li>
                        Minimal timed ads with optional exit after 5 seconds
                      </li>
                      <li>
                        Subscription option to remove ads, enable task
                        rollovers, unlock unlimited squads and unlimited tasks
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="font-bold">Why this model?</p>
                <p className="text-sm">
                  Generates small income to fund hosting and allows focus on
                  validating PMF while keeping adoption friction low.
                </p>
              </div>
              <div className="bg-gray-50/80 p-6 rounded-lg">
                <p className="font-bold mb-4">
                  Post-MVP: Premium + Microtransactions
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    Subscription: removes ads, unlocks premium analytics and
                    advanced squad management tools
                  </li>
                  <li>
                    Microtransactions: E.g. Vacation days, cosmetic upgrades.
                  </li>
                  <li>
                    Squad Boosts: One-off or subscription unlocking squad wide
                    perks.
                  </li>
                </ul>
                <p className="font-bold">Why this model?</p>
                <p className="text-sm">
                  Keeps revenue diversified and strategies optimize retention by
                  reducing friction and allowing users to stay more immersed in
                  the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Acquisition Strategy - Keeping as is */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-[#2C2C2C]">
              User Acquisition Strategy
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2">Channel</th>
                    <th className="border p-2">Activity</th>
                    <th className="border p-2">KPI</th>
                    <th className="border p-2">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Personal outreach</td>
                    <td className="border p-2">
                      DM productivity communities & university clubs, seed 5
                      squads
                    </td>
                    <td className="border p-2">10 active squads by Week 4</td>
                    <td className="border p-2">Time only</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Wait-list email</td>
                    <td className="border p-2">
                      Convert 26% opt-ins → beta users
                    </td>
                    <td className="border p-2">
                      50 beta installs, 80% squad join
                    </td>
                    <td className="border p-2">$0</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Referral link</td>
                    <td className="border p-2">
                      1-tap share + 1-mo premium perk
                    </td>
                    <td className="border p-2">≥5 inviters, 3 accepted</td>
                    <td className="border p-2">$0</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Social posts</td>
                    <td className="border p-2">
                      Weekly build-in-public thread on LinkedIn & Twitter
                    </td>
                    <td className="border p-2">
                      ≥200 impressions, 20 sign-ups
                    </td>
                    <td className="border p-2">Time only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Measuring Success - Restructured into 4 containers */}
      <section className="w-full py-16 bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] border-t border-[rgba(255,255,255,0.3)] relative overflow-hidden">
        {/* Aurora effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Measuring Success
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Box - Objective 1 */}
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-bold mb-4">MVP OKRs (Months 0–3):</p>
                <ul className="list-disc pl-5">
                  <li className="mb-4">
                    <span className="font-bold">Objective 1:</span> Validate
                    squad retention
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>KR1: 5–10 active squads</li>
                      <li>KR2: Week‑4 squad retention ≥ 30%</li>
                      <li>KR3: ≥ 50 DAU</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Second Box - Objective 2 */}
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-bold mb-4">MVP OKRs (Months 0–3):</p>
                <ul className="list-disc pl-5">
                  <li className="mb-4">
                    <span className="font-bold">Objective 2:</span> Drive
                    learning for next phase
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>KR1: 10 qualitative squad interviews</li>
                      <li>
                        KR2: Identify top 3 retention drivers & drop‑off reasons
                        from 'Somewhat disappointed' group in Seal Ellis Test
                      </li>
                      <li>
                        KR3: Pilot 3 acquisition channels, log retention by
                        source.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Third Box - Product-Market Fit */}
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-bold mb-4">Assessing Product-Market Fit:</p>
                <p className="mb-2">Phase‑1 PMF proxy = Week‑4 retention.</p>
                <p>Phase‑2 = Sean Ellis "Very disappointed" survey ≥ 40%.</p>
              </div>
              {/* Fourth Box - Strategic Focus */}
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-bold mb-4">Strategic Focus:</p>
                <p>Retention → Growth → Monetisation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Me - Keeping as is */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#2C2C2C]">
              Contact Me
            </h2>
            <p className="text-lg mb-8">
              Let's talk about building strategic products that delight our
              users.
            </p>
            <a href="mailto:arielasweiner@gmail.com" className="inline-block bg-[#2C2C2C] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </main>;
};
export default DeepDive;