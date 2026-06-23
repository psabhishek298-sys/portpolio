/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Github, ChevronRight, Laptop, Music, ShieldAlert, Leaf, Keyboard, Terminal } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const projectsData: Project[] = [
    {
      id: "cms-college",
      title: "CMS College Management System",
      description: "A complete unified management platform integrating a responsive React-based admin portal, centralized Postgres storage, and native Flutter apps for mobile analytics. Automates heavy administrative overhead.",
      features: [
        "Interactive Class Attendance Tracking with roll logs",
        "CE Mark Calculation utilizing precise algorithms",
        "Digital Student Assignment Submission & grade boards",
        "Real-time Academic Student Performance Analytics"
      ],
      tech: ["React", "Flutter", "PostgreSQL", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/sortex911"
    },
    {
      id: "music-corner",
      title: "Music Corner",
      description: "An elegant, lightweight music streaming and storage app. Supports playlist configuration, dynamic cloud storage feeds, and smooth audio rendering streams.",
      features: [
        "In-app Music Streaming with precise scrubber controls",
        "User Custom Playlist Creation & favorite listings",
        "Seamless YouTube Integration for online search feeds"
      ],
      tech: ["Flutter", "Supabase", "Dart", "Audio Core API"],
      githubUrl: "https://github.com/sortex911"
    },
    {
      id: "domain-leak",
      title: "Domain Leak Intelligence Scanner",
      description: "A robust terminal security utility engineered for information reconnaissance. Automates the sniffing of exposed subdomain directories and public DNS configurations to mitigate credential leaking.",
      features: [
        "Active & Passive Subdomain Discovery using public APIs",
        "Target Security Port Reconnaissance and service detection",
        "Exposed Credentials threat assessment logs generation"
      ],
      tech: ["Python", "Linux OS", "Shell Scripting", "OWASP Security APIs"],
      githubUrl: "https://github.com/sortex911"
    },
    {
      id: "panappetty",
      title: "Panappetty",
      description: "Panappetty is a modern personal finance management application designed to help users take control of their money with ease. It enables users to track income, expenses, savings, and budgets through an intuitive dashboard. With real-time analytics, detailed transaction history, visual spending reports, and goal-based financial planning, Panappetty provides valuable insights that support smarter financial decisions and long-term financial growth.",
      features: [
        "Income and Expense Tracking System",
        "Smart Budget Planning and Monitoring",
        "Savings Goals and Financial Target Management",
        "Real-Time Financial Analytics Dashboard",
        "Transaction History with Advanced Filtering",
        "Monthly and Yearly Expense Reports",
        "Secure User Authentication and Data Protection",
        "Responsive Design for Mobile and Desktop"
      ],
      tech: ["React", "Firebase", "Supabase"],
      githubUrl: "https://github.com/sortex911"
    },
    {
      id: "typing-challenge",
      title: "Typing Challenge",
      description: "A highly interactive web-based mechanical typing speed assessor. Calculates real-time word-per-minute (WPM) speeds and raw accuracy on paragraphs.",
      features: [
        "Real-Time Typing Speed (WPM) dynamic calculator",
        "Per-Characters Typing Performance Error tracking",
        "Interactive accuracy charts and leaderboards"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "LocalState Tracker"],
      githubUrl: "https://github.com/sortex911"
    }
  ];

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "cms-college": return <Laptop className="h-5 w-5 text-emerald-500" />;
      case "music-corner": return <Music className="h-5 w-5 text-indigo-500" />;
      case "domain-leak": return <ShieldAlert className="h-5 w-5 text-red-500" />;
      case "green-realm": return <Leaf className="h-5 w-5 text-teal-500" />;
      case "typing-challenge": return <Keyboard className="h-5 w-5 text-amber-500" />;
      default: return <Terminal className="h-5 w-5 text-neutral-500" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold">
            // 04. PROJECTS DIRECTORY
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-mono text-neutral-400 dark:text-neutral-500">
            A gallery of built software systems, showcasing client, terminal and mobile skills
          </p>
        </div>

        {/* Column Layout of Projects (Matches Third Screenshot card layout) */}
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          
          {projectsData.map((project, idx) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl border border-neutral-200/70 bg-white p-6 md:p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-lg dark:border-neutral-800/80 dark:bg-[#0b0b0e] glass-panel"
            >
              
              {/* Project Icon / Terminal title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-neutral-100/45 p-2.5 dark:bg-neutral-800/20 group-hover:bg-emerald-500/5 transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                  
                  <h3 className="font-mono text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                    <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&gt;_</span> {project.title}
                  </h3>
                </div>

                {/* External GitHub buttons */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-emerald-500 dark:hover:bg-neutral-800/55 dark:text-neutral-500 transition-colors cursor-pointer"
                      title="Source Code"
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main textual description */}
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-6">
                {project.description}
              </p>

              {/* Features subset box */}
              <div className="mb-6 rounded-lg bg-neutral-50/50 p-4 border border-neutral-100/50 dark:bg-black/20 dark:border-neutral-900">
                <h4 className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                  &gt; features_list_log:
                </h4>
                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[11px] sm:text-xs">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chip-tags footer */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 mr-2 uppercase tracking-widest">
                  $ stack:
                </span>
                {project.tech.map((tag, tIdx) => (
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
