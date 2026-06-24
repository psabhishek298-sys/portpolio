/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Github, ChevronRight, Laptop, Music, ShieldAlert, Leaf, Wallet, GraduationCap, Terminal } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const projectsData: Project[] = [
    {
      id: "panappetty",
      title: "Panappetty — Personal Finance Tracker",
      description: "Panappetty is a modern personal finance management application designed to help users take full control of their finances. Built with React and Firebase, it enables users to track income, expenses, savings, and budgets through an intuitive real-time analytics dashboard. Features include detailed transaction history, visual spending reports, goal-based financial planning, and secure authentication — making it a complete tool for smarter financial decisions.",
      features: [
        "Income and Expense Tracking with categorized records",
        "Smart Budget Planning and Monthly Monitoring",
        "Savings Goals and Financial Target Management",
        "Real-Time Financial Analytics Dashboard with visual charts",
        "Transaction History with Advanced Filtering",
        "Monthly and Yearly Expense Reports",
        "Secure User Authentication and Data Protection",
        "Fully Responsive Design for Mobile and Desktop"
      ],
      tech: ["React", "Firebase", "Supabase", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/psabhishek298-sys"
    },
    {
      id: "music-corner",
      title: "Music Corner — Music Streaming Application",
      description: "Music Corner is an elegant, lightweight music streaming and storage application built with Flutter and Dart. It supports playlist configuration, dynamic cloud storage feeds, smooth audio rendering, and seamless YouTube integration for online search. Designed for both casual listeners and music enthusiasts who want a clean, fast music experience on mobile.",
      features: [
        "In-App Music Streaming with precise playback controls",
        "Custom Playlist Creation and favorite listings",
        "Seamless YouTube Integration for online music search",
        "Cloud-Based Music Storage and synchronization",
        "Smooth Audio Rendering with background playback support"
      ],
      tech: ["Flutter", "Dart", "Supabase", "Audio Core API", "YouTube API"],
      githubUrl: "https://github.com/psabhishek298-sys"
    },
    {
      id: "domain-leak",
      title: "Domain Leak Intelligence Scanner — Cybersecurity Tool",
      description: "Domain Leak Intelligence Scanner is a robust terminal-based cybersecurity reconnaissance tool engineered for information security professionals and learners. It automates the discovery of exposed subdomains, public DNS configurations, and open ports to identify potential credential leaks and security vulnerabilities. Built with Python and Linux shell scripting, it leverages OWASP security APIs for comprehensive threat assessment.",
      features: [
        "Active & Passive Subdomain Discovery using public APIs",
        "Target Security Port Reconnaissance and service detection",
        "Exposed Credentials Threat Assessment and log generation",
        "DNS Configuration Analysis and vulnerability mapping",
        "Automated Report Generation for security auditing"
      ],
      tech: ["Python", "Linux", "Shell Scripting", "Nmap", "OWASP APIs"],
      githubUrl: "https://github.com/psabhishek298-sys"
    },
    {
      id: "student-performance",
      title: "Student Performance Management System",
      description: "A comprehensive academic management platform designed for educational institutions. It integrates attendance tracking, assignment submission, CE (Continuous Evaluation) mark calculation, and exam analytics into a unified system. Built with React for the admin portal and Flutter for mobile access, it automates heavy administrative overhead and provides real-time academic performance insights for students and faculty.",
      features: [
        "Interactive Class Attendance Tracking with roll logs",
        "CE Mark Calculation using precise algorithms",
        "Digital Assignment Submission and grade boards",
        "Real-Time Student Performance Analytics Dashboard",
        "Exam Score Analysis with graphical reports",
        "Multi-Role Access: Admin, Faculty, and Student portals"
      ],
      tech: ["React", "Flutter", "PostgreSQL", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/psabhishek298-sys"
    }
  ];

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "panappetty": return <Wallet className="h-5 w-5 text-amber-500" />;
      case "green-realm": return <Leaf className="h-5 w-5 text-teal-500" />;
      case "music-corner": return <Music className="h-5 w-5 text-indigo-500" />;
      case "domain-leak": return <ShieldAlert className="h-5 w-5 text-red-500" />;
      case "student-performance": return <GraduationCap className="h-5 w-5 text-emerald-500" />;
      default: return <Terminal className="h-5 w-5 text-neutral-500" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32" aria-label="Featured Projects by Abhishek P S">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold" aria-hidden="true">
            // 04. PROJECTS DIRECTORY
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-mono text-neutral-400 dark:text-neutral-500">
            Real-world software projects built by Abhishek P S — from finance apps and business websites to cybersecurity tools and academic management systems
          </p>
        </div>

        {/* Projects List */}
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          
          {projectsData.map((project) => (
            <article 
              key={project.id}
              className="group relative rounded-2xl border border-neutral-200/70 bg-white p-6 md:p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-lg dark:border-neutral-800/80 dark:bg-[#0b0b0e] glass-panel"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <meta itemProp="author" content="Abhishek P S" />
              <meta itemProp="operatingSystem" content="Web, Android, Linux" />
              
              {/* Project Icon / Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-neutral-100/45 p-2.5 dark:bg-neutral-800/20 group-hover:bg-emerald-500/5 transition-colors" aria-hidden="true">
                    {getProjectIcon(project.id)}
                  </div>
                  
                  <h3 className="font-mono text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-1" itemProp="name">
                    <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&gt;_</span> {project.title}
                  </h3>
                </div>

                {/* GitHub button */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-emerald-500 dark:hover:bg-neutral-800/55 dark:text-neutral-500 transition-colors cursor-pointer"
                      title={`View ${project.title} source code on GitHub`}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-6" itemProp="description">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6 rounded-lg bg-neutral-50/50 p-4 border border-neutral-100/50 dark:bg-black/20 dark:border-neutral-900">
                <h4 className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                  &gt; features_list_log:
                </h4>
                <ul className="flex flex-col gap-2 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[11px] sm:text-xs">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
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

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
