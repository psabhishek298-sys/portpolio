/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Shield, Code, Globe, Smartphone } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5 text-emerald-500" />,
      label: "BCA Student",
      desc: "Pursuing Bachelor of Computer Applications at Sree Gokulam Arts and Science College, Balussery, affiliated to the University of Calicut, Kerala."
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-500" />,
      label: "Cybersecurity Enthusiast",
      desc: "Deeply passionate about ethical hacking, penetration testing, network reconnaissance, and building security intelligence tools."
    },
    {
      icon: <Code className="h-5 w-5 text-emerald-500" />,
      label: "Web Developer",
      desc: "Building modern, responsive web applications using React, Vite, TypeScript, Tailwind CSS, and full-stack technologies."
    },
    {
      icon: <Smartphone className="h-5 w-5 text-emerald-500" />,
      label: "App Developer",
      desc: "Developing cross-platform mobile applications using Flutter, Dart, Firebase, and Supabase for real-world use cases."
    }
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python"],
    database: ["Firebase", "Supabase", "PostgreSQL", "MongoDB"],
    cybersecurity: ["Linux", "Networking", "Web Security", "Ethical Hacking", "Nmap", "Wireshark"],
    tools: ["Git", "Burp Suite", "Claude Code", "Wireshark", "Postman", "Antigravity"]
  };

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-900 transition-colors" aria-label="About Abhishek P S">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-emerald-500 tracking-wider font-semibold uppercase block mb-2" aria-hidden="true">
            // 01. PROFILE INFO
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" aria-hidden="true" />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SEO-rich biography */}
          <article className="lg:col-span-7 flex flex-col gap-8 text-neutral-700 dark:text-neutral-300">
            <p className="font-display text-xl sm:text-2xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200">
              <strong className="font-semibold text-neutral-900 dark:text-white border-b-2 border-emerald-500/40 pb-0.5">Abhishek P S</strong> is a passionate <span className="font-semibold">BCA student</span> at <em>Sree Gokulam Arts and Science College, Balussery</em>, affiliated to the <strong>University of Calicut</strong>, Kerala, India.
            </p>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              As a dedicated <strong className="font-medium text-emerald-500">Web Developer</strong>, <strong className="font-medium text-emerald-500">React Developer</strong>, and <strong className="font-medium text-emerald-500">App Developer</strong> from <strong>Kozhikode (Calicut), Kerala</strong>, Abhishek specializes in building high-performance web applications, cross-platform mobile apps, and automated cybersecurity reconnaissance tools.
            </p>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              With a growing expertise in <strong className="font-medium text-emerald-500">Cybersecurity</strong> and <strong className="font-medium text-emerald-500">Ethical Hacking</strong>, he combines frontend development skills with security awareness — probing network configurations, auditing web vulnerabilities (OWASP Top 10), and automating subdomain intelligence scanners using Python and Linux.
            </p>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              His project portfolio includes finance tracking apps, business websites, music streaming platforms, academic management systems, and domain leak intelligence scanners — all built while pursuing his BCA degree at Sree Gokulam College Balussery.
            </p>
            
            {/* Skills badges */}
            <div className="flex flex-col gap-4 pt-4">
              <h3 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">$ cat skills.config</h3>
              
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-wider font-bold">// {category}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-mono font-medium text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800/60 shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Side card detail list */}
          <aside className="lg:col-span-5 flex flex-col gap-6" aria-label="Highlights">
            <h3 className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1">
              $ cat highlights.log
            </h3>
            
            <div className="flex flex-col gap-4">
              {highlights.map((h, idx) => (
                <motion.div 
                  key={idx}
                  className="group flex flex-col gap-3 rounded-xl border border-neutral-200/65 bg-white/70 p-5 shadow-xs transition-all hover:border-emerald-500/40 hover:shadow-md dark:border-neutral-800/80 dark:bg-black/30 glass-panel"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
