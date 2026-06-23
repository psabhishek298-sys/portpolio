/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, Code2, Pocket, Database, Sliders, ChevronRight } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity & Pentesting",
      icon: <ShieldAlert className="h-5 w-5 text-red-500" />,
      skills: [
        { name: "Linux Administration", level: 85 },
        { name: "Networking Fundamentals", level: 80 },
        { name: "Information Reconnaissance", level: 78 },
        { name: "Web Application Security", level: 75 },
        { name: "Pentesting Basics", level: 68 }
      ],
      comment: "// security penetration index: high"
    },
    {
      title: "Frontend Engineering",
      icon: <Code2 className="h-5 w-5 text-emerald-500" />,
      skills: [
        { name: "React.js / TS", level: 85 },
        { name: "JavaScript (ES6+)", level: 82 },
        { name: "CSS Grid & Flexbox", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 Semantic Standards", level: 90 }
      ],
      comment: "// rendering core engine: optimized"
    },
    {
      title: "Mobile Development",
      icon: <Pocket className="h-5 w-5 text-indigo-500" />,
      skills: [
        { name: "Flutter Client Architecture", level: 80 },
        { name: "Dart", level: 76 }
      ],
      comment: "// cross_platform_state: active"
    },
    {
      title: "Backend / Storage Systems",
      icon: <Database className="h-5 w-5 text-yellow-500" />,
      skills: [
        { name: "Supabase Integration", level: 80 },
        { name: "Firebase Solutions", level: 82 },
        { name: "PostgreSQL Database Design", level: 75 }
      ],
      comment: "// structured data stream: synchronized"
    },
    {
      title: "Development Tools",
      icon: <Sliders className="h-5 w-5 text-blue-500" />,
      skills: [
        { name: "Git Workflow Control", level: 88 },
        { name: "GitHub Platform", level: 90 },
        { name: "VS Code Custom Configs", level: 92 }
      ],
      comment: "// productivity core: stable"
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-900 transition-colors">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Editorial Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-semibold block mb-2">
              // 03. CAPABILITIES INDEX
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Core Expertise
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" />
          </div>
          <p className="max-w-md font-mono text-xs text-neutral-400 dark:text-neutral-500 font-light text-left leading-relaxed">
            /* Systematic inventory of web-based, mobile-app, and server-reconnaissance technology arrays built into production-ready platforms. */
          </p>
        </div>

        {/* Matrix Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col justify-between rounded-xl border border-neutral-200/65 bg-white p-6 shadow-xs transition-all hover:border-emerald-500/30 hover:shadow-lg dark:border-emerald-500/10 dark:bg-black/35 glass-panel"
            >
              <div>
                
                {/* Header Category with icons */}
                <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-4 dark:border-neutral-900">
                  <div className="rounded-lg bg-neutral-100/30 p-2 text-neutral-600 dark:bg-neutral-800/20 group-hover:bg-emerald-500/5 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills levels meters */}
                <div className="flex flex-col gap-4 font-mono text-xs text-neutral-500">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                        <span className="flex items-center gap-1">
                          <ChevronRight className="h-3 w-3 text-emerald-500" />
                          {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      
                      {/* Technical Bar */}
                      <div className="h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-emerald-500/80 group-hover:bg-emerald-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Terminal comment line footer decoration */}
              <div className="mt-6 border-t border-neutral-50/50 pt-3 text-[10px] font-mono text-neutral-400 dark:border-neutral-900/60 dark:text-neutral-500">
                {cat.comment}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
