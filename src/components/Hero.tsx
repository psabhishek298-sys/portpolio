/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, ArrowRight, ShieldCheck, FileCode, Landmark } from "lucide-react";

export default function Hero() {
  const profileObjectCode = `const profile = {
  name: "Abhishek P S",
  role: "Cybersecurity Enthusiast",
  location: "Calicut, Kerala",
  education: "BCA - University of Calicut",
  skills: ["React", "Flutter", "Python", "Linux"]
}`;

  return (
    <section id="hero" className="relative flex min-h-[92vh] w-full items-center justify-center py-10 md:py-16">
      
      {/* Decorative cyber grid layers */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-80" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12 md:px-8">
        
        {/* Left Side: Modern Interactive Info Pane */}
        <div id="hero-profile-info" className="flex flex-col justify-center gap-6 md:col-span-12">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 tracking-wider">
              $ user.role
            </span>
            <motion.h1 
              className="font-display text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl dark:text-white"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Abhishek P S
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap items-center gap-2 font-mono text-sm font-medium text-emerald-500 sm:text-base lg:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="animate-pulse font-bold">&gt;</span>
              <span className="border-r-2 border-emerald-500 pr-1 cursor-blink">
                Cybersecurity Enthusiast / Web Developer
              </span>
            </motion.div>
          </div>

          {/* Profile Terminal block (Matches Mockup Code style) */}
          <motion.div 
            className="flex flex-col gap-1 font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-neutral-400 dark:text-neutral-500">$ user.description_</span>
            <div className="overflow-hidden">
              <pre className="text-neutral-700 dark:text-neutral-300 overflow-x-auto">
                <code className="text-blue-600 dark:text-emerald-400">const</code>{" "}
                <code className="text-indigo-600 dark:text-indigo-300">profile</code> = {"{"}
                {"\n"}  role : <code className="text-yellow-600 dark:text-amber-200">"Cybersecurity Enthusiast"</code>,
                {"\n"}  focus : <code className="text-yellow-600 dark:text-amber-200">"Security testing & Web-Mobile Dev"</code>,
                {"\n"}  expertise : [<code className="text-red-500 dark:text-pink-300">"Pentesting"</code>, <code className="text-yellow-600 dark:text-emerald-400">"React"</code>, <code className="text-teal-600 dark:text-teal-300">"Flutter"</code>],
                {"\n"}  education : <code className="text-yellow-600 dark:text-amber-200">"BCA student"</code>
                {"\n"}{"}"}
              </pre>
            </div>
          </motion.div>

          {/* About Summary command block */}
          <motion.div 
            className="flex flex-col gap-1.5 font-mono text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-neutral-400 dark:text-neutral-500">$ cat user.summary_</span>
            <p className="pl-4 border-l-2 border-emerald-500/30 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-sans">
              # output:
              <br />
              BCA Student with a severe passion for Cybersecurity, Web Development, Linux and Ethical Hacking. Focused on building modern web systems, secure mobile apps and cybersecurity reconnaissance tools.
            </p>
          </motion.div>

          {/* Social Icons row */}
          <motion.div 
            className="flex flex-col gap-2 font-mono text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-neutral-400 dark:text-neutral-500">$ user.socials_</span>
            <div className="flex items-center gap-4 pl-1">
              <a 
                href="https://github.com/sortex911" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <button 
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-2 font-mono text-xs transition-all cursor-pointer ml-2"
              >
                Initiate Secure Comm <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>

        </div>



      </div>

    </section>
  );
}
