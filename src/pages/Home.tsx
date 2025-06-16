import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import cloveLogo from '../assets/images/Clove Digital Logo.png';
import bnrLogo from '../assets/images/BNR Logo.png';
import projectImage from '../assets/images/About this project Image.png';
import groupChatImage from '../assets/images/Group Chat Prototype top.png';
const Home = () => {
  return <main className="flex-grow">
      {/* Hero Banner */}
      <section id="home" className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] w-full py-16 md:py-24 relative overflow-hidden">
        {/* Aurora effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
              Ariela Baron
            </h1>
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-white">
                Product Manager |{' '}
                <span className="font-normal">
                  Turning sharp user insights into products that launch, scale,
                  and stick
                </span>
              </h2>
            </div>
            <p className="text-lg mb-8 text-white">
              ⚡ Builder, optimizer, launcher—customer-led, data-fed,
              strategy-bred
            </p>
            <a href="mailto:arielasweiner@gmail.com" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1a2a3d] transition-colors">
              Let's Talk →
            </a>
          </div>
        </div>
      </section>
      {/* About Me */}
      <section id="about" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-[#2C2C2C]">
              About Me
            </h2>
            <p className="text-lg">
              I build products that turn real user needs into measurable impact.
              I've led an internal business-ops suite and a SaaS reimbursement
              platform—partnering daily with design and engineering and driven
              by insights from interviews and rapid prototypes. Highlights: I
              shipped an AI assistant that slashed claim time by 90 % and
              redesigned onboarding to cut drop-off by 35 %. I'm eager to apply
              this research-driven rigor to B2B or consumer products next.
            </p>
          </div>
        </div>
      </section>
      {/* Notable Achievements */}
      <section className="w-full py-16 bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] border-t border-[rgba(255,255,255,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10 text-white">
              Notable Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <img src={cloveLogo} alt="Clove Digital Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Clove Digital — Reimbursement Tool
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    Led discovery → launch of hybrid SaaS + internal
                    Amazon‑claims tool.
                  </li>
                  <li>
                    Shipped AI assistant cutting claim time 90%, human errors
                    20%.
                  </li>
                  <li>Redesigned onboarding ↓ drop‑off 35%.</li>
                </ul>
                <p className="text-sm text-gray-600 pl-5">
                  <a href="https://clovedigital.ai" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1f4d4d] underline hover:opacity-80">
                    Visit clovedigital.ai
                  </a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <img src={bnrLogo} alt="BNR Consulting Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  BNR Consulting — Internal Biz-Ops Platform
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    Led build of AI data assistant surfacing cross-source
                    insights
                  </li>
                  <li>
                    Added real-time alerts for abnormal sales & inventory
                    signals
                  </li>
                  <li>
                    Created a coordination dashboard adopted across marketing,
                    logistics & ads teams
                  </li>
                </ul>
                <p className="text-sm text-gray-600 pl-5">
                  <a href="https://bnrconsulting.co.il" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1f4d4d] underline hover:opacity-80">
                    Visit bnrconsulting.co.il
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Study Snapshot */}
      <section id="project" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-[#2C2C2C]">
              Striveminds: Small-Squad Accountability, Big-Team Results
            </h2>
            {/* Project Intro & Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  About This Project
                </h3>
                <p className="mb-6">
                  I researched and prototyped Striveminds solo to test one
                  hypothesis: small squads (up to 8 peers) help people stick to
                  goals better than going solo. Built after hours with zero
                  budget.
                </p>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p>
                  Most self-improvement apps shed users by Day 30. Research
                  showed the missing ingredient is small social accountability
                  groups that don't feel performative. Striveminds lets users
                  create squads of up to 8 peers, turning individual goals into
                  shared commitments.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={projectImage} alt="Striveminds Project Overview" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Problem Flow - Removed top row arrows */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mb-16 px-4 relative">
              {/* First row - No arrows */}
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  <span className="font-semibold block mb-2">The Problem</span>
                  As active members of several online productivity and
                  discipline communities, we noticed a consistent pattern:
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  Most people set personal goals—but{' '}
                  <span className="font-semibold">
                    very few follow through.
                  </span>
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  Members kept asking:{' '}
                  <span className="font-semibold">
                    "Are there any tools that actually help with consistency?"
                  </span>
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  Despite the shared struggle, no one could recommend a tool
                  that sustained follow through.
                </p>
              </div>
              {/* Updated Arrow 4 (down) with arrow head - keeping vertical arrow */}
              <div className="absolute right-[12%] top-[20%] h-[25%] hidden md:block">
                <svg className="h-full" width="30" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
              </div>
              {/* Second row - Keeping existing arrows and content unchanged */}
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  <span className="font-semibold block mb-2">Key Result</span>
                  Week-4 active-squad retention ≥ 30%
                </p>
              </div>
              {/* Arrow 5 (left) - Keeping unchanged */}
              <div className="absolute left-[23%] top-[60%] w-[10%] hidden md:block transform rotate-180">
                <svg className="w-full" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15 H90 M90 15 L75 5 M90 15 L75 25" stroke="#1a2a3d" strokeWidth="2" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  <span className="font-semibold block mb-2">
                    Our Hypothesis
                  </span>
                  When users make shared commitments within a{' '}
                  <span className="font-semibold">
                    small accountability group
                  </span>
                  , they are{' '}
                  <span className="font-semibold">
                    less likely to abandon their goals
                  </span>{' '}
                  and more likely to{' '}
                  <span className="font-semibold">
                    maintain weekly engagement.
                  </span>
                </p>
              </div>
              {/* Arrow 6 (left) - Keeping unchanged */}
              <div className="absolute left-[48%] top-[60%] w-[10%] hidden md:block transform rotate-180">
                <svg className="w-full" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15 H90 M90 15 L75 5 M90 15 L75 25" stroke="#1a2a3d" strokeWidth="2" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  <span className="font-semibold">Social accountability</span>{' '}
                  in small groups with shared progress tracking significantly{' '}
                  <span className="font-semibold">
                    improves follow-through —up to 76%.
                  </span>{' '}
                  (Matthews, 2007; Stewart et al., 2021)
                </p>
              </div>
              {/* Arrow 7 (left) - Keeping unchanged */}
              <div className="absolute left-[73%] top-[60%] w-[10%] hidden md:block transform rotate-180">
                <svg className="w-full" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15 H90 M90 15 L75 5 M90 15 L75 25" stroke="#1a2a3d" strokeWidth="2" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
                <p className="text-sm text-white relative z-10 text-center">
                  <span className="font-semibold block mb-2">
                    What We Found
                  </span>
                  We turned to academic research. The findings were clear:
                </p>
              </div>
            </div>
            {/* Problem Flow - Update box styles */}

            {/* Prototype Highlights */}
            <h3 className="text-xl font-semibold mb-6">Prototype Highlights</h3>
            {/* Block A */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col justify-center">
                <p>
                  The Process (AI‑assisted) Built a mobile‑first prototype using
                  MagicPatterns (AI code generation) and Figma. The output is
                  clickable React front‑end, letting stakeholders explore flows
                  before any back‑end work. (Due to existing limitations pages
                  are not connected between one another)
                </p>
              </div>
              <div className="relative flex flex-col items-center">
                <h4 className="text-sm font-medium mb-6 text-center">
                  Group Chat
                </h4>
                <div className="bg-gray-100 rounded-lg w-56 h-96 flex items-center justify-center">
                  <img src={groupChatImage} alt="Group Chat Prototype" className="w-full h-full object-contain" />
                </div>
                <a href="https://www.magicpatterns.com/s/wDFZEJpT2ksnCs1yctyx22/p/ae3ebf8f-5e4f-40a3-8b94-cea5842e8414" target="_blank" rel="noopener noreferrer" className="text-xs text-[#1f4d4d] underline font-bold hover:opacity-80 text-center mt-8">
                  Play with interactive prototype (better on mobile)
                </a>
              </div>
            </div>
            {/* Block B */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative order-2 md:order-1 flex flex-col items-center">
                <h4 className="text-sm font-medium mb-6 text-center">
                  Find a Squad
                </h4>
                <div className="bg-gray-100 rounded-lg h-80 w-full flex items-center justify-center mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-96 border-4 border-gray-300 rounded-3xl bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Phone Image Placeholder</p>
                    </div>
                  </div>
                </div>
                <a href="https://www.magicpatterns.com/s/wDFZEJpT2ksnCs1yctyx22/p/c9fd7390-1cb3-4000-ab6e-001f25f0ce11" target="_blank" rel="noopener noreferrer" className="text-xs text-[#1f4d4d] underline font-bold hover:opacity-80 text-center mt-8">
                  Play with interactive prototype (better on mobile)
                </a>
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <p>
                  Results So Far → ⚡ Built 8-screen prototype solo in ~36 hrs;
                  26 % of survey targets joined wait-list with zero marketing.
                </p>
              </div>
            </div>
            {/* Block C */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col justify-center">
                <p>
                  <strong>Key MVP Trade-offs</strong>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Prioritised basic task create / edit, personal streak ring
                    and excluded rollover, scheduled reminders (handled by
                    manual peer nudges).
                  </li>
                  <li>
                    Prioritised simple squad target bar, one-tap "Clap" reaction
                    and excluded automated check-ins, detailed profiles.
                  </li>
                </ul>
              </div>
              <div className="relative flex flex-col items-center">
                <h4 className="text-sm font-medium mb-6 text-center">
                  Task List
                </h4>
                <div className="bg-gray-100 rounded-lg h-80 w-full flex items-center justify-center mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-96 border-4 border-gray-300 rounded-3xl bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Phone Image Placeholder</p>
                    </div>
                  </div>
                </div>
                <a href="https://www.magicpatterns.com/s/wDFZEJpT2ksnCs1yctyx22/p/704e7c4d-25a1-4bb6-bf17-2594571e9937" target="_blank" rel="noopener noreferrer" className="text-xs text-[#1f4d4d] underline font-bold hover:opacity-80 text-center mt-8">
                  Play with interactive prototype (better on mobile)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dive Deeper CTA - Updated to navigate to top of page 2 */}
      <section className="w-full py-12 bg-gradient-to-br from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] border-t border-[rgba(255,255,255,0.3)] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#43c6a3] to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg mb-6 text-white">
              Explore the research, strategies and KPIs that back this MVP
            </p>
            <Link to="/deep-dive" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#1a2a3d] transition-colors">
              Dive Deeper
            </Link>
          </div>
        </div>
      </section>
      {/* Recommendations & Contact */}
      <section id="contact" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Recommendations */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#2C2C2C]">
                Recommendations
              </h2>
              <p className="mb-4">
                <a href="https://www.linkedin.com/in/ariela-baron-85267b224/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1f4d4d] underline hover:opacity-80">
                  See my LinkedIn Recommendations
                </a>
              </p>
            </div>
            {/* Contact Me */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#2C2C2C]">
                Contact Me
              </h2>
              <p className="mb-6">
                Let's talk about building strategic products, that delight our
                users.
              </p>
              <a href="mailto:arielasweiner@gmail.com" className="inline-block bg-[#2C2C2C] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Home;