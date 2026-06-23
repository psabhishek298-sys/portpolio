/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, Building, ChevronRight, ExternalLink } from "lucide-react";

interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  tech: string[];
  url?: string;
}

export default function Work() {
  const workData: WorkExperience[] = [
    {
      id: "freelance",
      role: "green realm landscape architecture",
      company: "green realm landscape architecture",
      duration: "2026 - Present",
      description: "Green Realm Landscape is a leading landscaping and design firm dedicated to crafting stunning outdoor environments that inspire and connect people with nature. We specialize in landscape architecture, garden design, terrace gardens, sustainable ecosystems, and premium outdoor living spaces. Our passion for innovation, quality, and environmental harmony allows us to transform ordinary spaces into extraordinary landscapes tailored to each client's vision",
      achievements: [
        "Designed and developed premium landscape solutions across Kerala",
        "Delivered customized outdoor spaces for residential and commercial clients",
        "Enhanced environmental sustainability through eco-friendly landscaping practices",
        "Created aesthetically pleasing and functional green environments",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase","Firebase"],
    },
    
  ];

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold">
            // 03. WORK HISTORY
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            freelance works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-mono text-neutral-400 dark:text-neutral-500">
            A track record of my professional roles, internships, and freelance projects.
          </p>
        </div>

        {/* Column Layout of Work (Matches Projects card layout) */}
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          
          {workData.map((job) => (
            <div 
              key={job.id}
              className="group relative rounded-2xl border border-neutral-200/70 bg-white p-6 md:p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-lg dark:border-neutral-800/80 dark:bg-[#0b0b0e] glass-panel"
            >
              
              {/* Job Icon / Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-neutral-100/45 p-2.5 dark:bg-neutral-800/20 group-hover:bg-emerald-500/5 transition-colors">
                    <Briefcase className="h-5 w-5 text-emerald-500" />
                  </div>
                  
                  <div>
                    <h3 className="font-mono text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                      <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&gt;_</span> {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                      <Building className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                      <span className="text-neutral-300 dark:text-neutral-600">|</span>
                      <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400/80">{job.duration}</span>
                    </div>
                  </div>
                </div>

                {/* External links */}
                <div className="flex items-center gap-2">
                  {job.url && (
                    <a 
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-emerald-500 dark:hover:bg-neutral-800/55 dark:text-neutral-500 transition-colors cursor-pointer"
                      title="Company Website"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main textual description */}
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-6">
                {job.description}
              </p>

              {/* Achievements subset box */}
              <div className="mb-6 rounded-lg bg-neutral-50/50 p-4 border border-neutral-100/50 dark:bg-black/20 dark:border-neutral-900">
                <h4 className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                  &gt; impact_metrics:
                </h4>
                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  {job.achievements.map((achieve, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-[11px] sm:text-xs">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chip-tags footer */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 mr-2 uppercase tracking-widest">
                  $ stack:
                </span>
                {job.tech.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs text-neutral-600 border border-neutral-200/50 dark:bg-neutral-800/30 dark:text-neutral-400 dark:border-neutral-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
