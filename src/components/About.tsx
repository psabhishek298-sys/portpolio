/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Shield, Code, Server, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5 text-emerald-500" />,
      label: "BCA Student",
      desc: "Sree Gokulam Arts & Science College, Balussery (University of Calicut)"
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-500" />,
      label: "Security Fanatic",
      desc: "Deeply interested in penetration testing, reconnaissance, and network defense theory"
    },
    {
      icon: <Code className="h-5 w-5 text-emerald-500" />,
      label: "Full Stack Builder",
      desc: "Engineering applications using React, Flutter, Python, and PostgreSQL"
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-900 transition-colors">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Editorial style Section header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-emerald-500 tracking-wider font-semibold uppercase block mb-2">
            // 01. PROFILE INFO
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Large Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main big bio text */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-neutral-700 dark:text-neutral-300">
            <p className="font-display text-xl sm:text-2xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200">
              Abhishek P S is a <span className="font-semibold text-neutral-900 dark:text-white border-b-2 border-emerald-500/40 pb-0.5">BCA student</span> at <span className="italic">Sree Gokulam Arts and Science College, Balussery</span> under the University of Calicut.
            </p>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              Passionate about <span className="font-medium text-emerald-500">Cybersecurity</span>, Web Development, Flutter Development, Linux, and Ethical Hacking. He is obsessed with digging deep into system architectures, probing network configurations, and patching code vulnerabilities.
            </p>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              Focused on building modern, performant web applications, responsive cross-platform mobile apps, and automated cybersecurity intelligence scanners.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {["Cybersecurity", "React", "Flutter", "Python", "Linux", "Ethical Hacking"].map((badge, idx) => (
                <span 
                  key={idx}
                  className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-mono font-medium text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800/60 shadow-xs"
                >
                  #{badge}
                </span>
              ))}
            </div>
          </div>

          {/* Side card detail list */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1">
              $ cat highlights.log
            </h3>
            
            <div className="flex flex-col gap-4">
              {highlights.map((h, idx) => (
                <div 
                  key={idx}
                  className="group flex flex-col gap-3 rounded-xl border border-neutral-200/65 bg-white/70 p-5 shadow-xs transition-all hover:border-emerald-500/40 hover:shadow-md dark:border-neutral-800/80 dark:bg-black/30 glass-panel"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-500/5 p-2 group-hover:bg-emerald-500/10 transition-colors">
                      {h.icon}
                    </div>
                    <span className="font-display text-base font-semibold text-neutral-900 dark:text-white">
                      {h.label}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
