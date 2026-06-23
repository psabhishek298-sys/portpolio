/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Terminal, Code, Cpu, Target, Network, Layers } from "lucide-react";
import { TimelineItem } from "../types";

export default function Timeline() {
  const timelineData: TimelineItem[] = [
    {
      year: "2024",
      title: "Started Programming",
      role: "Initiated Software Fundamentals",
      description: "Dived headfirst into syntax basics. Learned core algorithmic planning, variable scoping, and logical workflows with Python and C. Configured first local terminal configurations.",
      technologies: ["Python", "C Programming", "CLI", "Linux Shell"]
    },
    {
      year: "2024",
      title: "Started Web Development",
      role: "Frontend Ecosystem Integration",
      description: "Transitioned to building interactive UIs. Engineered various websites using modern HTML/CSS, responsive media configurations, vanilla JavaScript, and utility Tailwind classes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"]
    },
    {
      year: "2025",
      title: "Started Cybersecurity Learning",
      role: "Network Reconnaissance & Hacking Fundamentals",
      description: "Explored security fields. Mastered standard system scanning procedures, web penetration frameworks (OWASP Top 10), command automation scripts, and network traffic sniffing using Kali Linux.",
      technologies: ["Linux OS", "Nmap", "Wireshark", "Web Application Security", "Ethical Hacking"]
    },
    {
      year: "2025",
      title: "Built Multiple Real World Projects",
      role: "Cross-Platform Application Architecting",
      description: "Co-authored college platforms and security programs. Designed responsive layouts in React, set up state persistence with local-databases, and published Flutter mobile clients.",
      technologies: ["React", "Flutter", "Supabase", "PostgreSQL", "Firebase"]
    },
    {
      year: "2026",
      title: "Building Full Stack Applications",
      role: "Advanced Scalability & Threat Intelligence",
      description: "Integrating complex relational database schemas with high-fidelity frontends. Designing automated vulnerability scanners in Python, building custom secure API backends, and refining devops structures.",
      technologies: ["Full Stack", "TypeScript", "Drizzle / Prisma", "API Security", "Defense in Depth"]
    }
  ];

  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold">
            // 02. EXPERIENCE PATH
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Professional Journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-mono text-neutral-400 dark:text-neutral-500">
            A chronological command history of technical skill progression
          </p>
        </div>

        {/* Outer Terminal Container (Simulates Reference Windows) */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200/70 bg-white shadow-lg dark:border-neutral-800/80 dark:bg-[#0b0b0e] overflow-hidden">
          
          {/* OS Title Bar */}
          <div className="flex items-center justify-between border-b border-neutral-200/70 bg-neutral-50/50 px-4 py-3 dark:border-neutral-800/80 dark:bg-[#0c0c11]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              &gt;_ career_timeline.sh
            </div>
            <div className="w-14" /> {/* Spacer */}
          </div>

          {/* Terminal Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-xs sm:text-sm">
            
            {/* Input command line */}
            <div className="mb-10 flex items-center gap-2 text-emerald-500 font-bold">
              <span>—&gt;</span>
              <span className="text-neutral-400 dark:text-neutral-500">~/career</span>
              <span className="text-indigo-600 dark:text-indigo-400">cat career_timeline.txt</span>
            </div>

            {/* Vertical Timeline Pipeline */}
            <div className="relative border-l-2 border-neutral-100 pl-6 dark:border-neutral-800/80 ml-3 md:ml-6 flex flex-col gap-12">
              
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline circular node decorator */}
                  <div className="absolute -left-[31px] md:-left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-500 bg-white dark:bg-[#0b0b0e] group-hover:scale-110 transition-transform shadow-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>

                  {/* Card Block */}
                  <div className="rounded-xl border border-neutral-100 hover:border-emerald-500/30 bg-neutral-50/20 p-5 md:p-6 transition-all hover:bg-neutral-50/50 dark:border-neutral-900 dark:hover:border-emerald-500/20 dark:bg-black/10 select-none">
                    
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-500 dark:bg-amber-500/15">
                          {item.year}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-emerald-500 transition-colors dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-neutral-400 dark:text-neutral-500 font-sans italic text-xs">
                        {item.role}
                      </span>
                    </div>

                    {/* Paragraph description body */}
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-sans mb-4">
                      <span className="text-emerald-500/70 font-mono font-bold mr-1.5">$</span>
                      {item.description}
                    </p>

                    {/* Chips tech stack section block inside */}
                    {item.technologies && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-900">
                        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold mr-1">
                          # Tech:
                        </span>
                        {item.technologies.map((t, tIdx) => (
                          <span 
                            key={tIdx}
                            className="rounded-full bg-indigo-500/5 px-2.5 py-0.5 text-[11px] text-indigo-500 border border-indigo-500/10 dark:bg-indigo-500/10 dark:text-indigo-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
