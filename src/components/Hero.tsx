/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] w-full items-center justify-center py-10 md:py-16" aria-label="Hero section — Abhishek P S Portfolio">

      {/* Background image */}
      <img
        src="/heroimg/hbg.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
    

      {/* Decorative cyber grid layers */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-80" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12 md:px-8">

        {/* Left Side: Modern Interactive Info Pane */}
        <div id="hero-profile-info" className="flex flex-col justify-center gap-6 md:col-span-12">

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 tracking-wider" aria-hidden="true">
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

            <motion.p
              className="flex flex-wrap items-center gap-2 font-mono text-sm font-medium text-emerald-500 sm:text-base lg:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="animate-pulse font-bold" aria-hidden="true">&gt;</span>
              <span className="border-r-2 border-emerald-500 pr-1 cursor-blink">
                Founder of Truquen | Full Stack Developer | Cybersecurity Enthusiast
              </span>
            </motion.p>
          </div>

          {/* Profile Terminal block */}
          <motion.div
            className="flex flex-col gap-1 font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">$ user.description_</span>
            <div className="overflow-hidden" role="presentation">
              <pre className="text-neutral-700 dark:text-neutral-300 overflow-x-auto" aria-label="Developer profile object">
                <code className="text-blue-600 dark:text-emerald-400">const</code>{" "}
                <code className="text-indigo-600 dark:text-indigo-300">profile</code> = {"{"}
                {"\n"}  name : <code className="text-yellow-600 dark:text-amber-200">"Abhishek P S"</code>,
                {"\n"}  role : <code className="text-yellow-600 dark:text-amber-200">"Web Developer & Cybersecurity Enthusiast"</code>,
                {"\n"}  college : <code className="text-yellow-600 dark:text-amber-200">"Sree Gokulam Arts & Science College, Balussery"</code>,
                {"\n"}  education : <code className="text-yellow-600 dark:text-amber-200">"BCA — University of Calicut"</code>,
                {"\n"}  location : <code className="text-yellow-600 dark:text-amber-200">"Kozhikode, Kerala, India"</code>,
                {"\n"}  expertise : [<code className="text-red-500 dark:text-pink-300">"React"</code>, <code className="text-yellow-600 dark:text-emerald-400">"Flutter"</code>, <code className="text-teal-600 dark:text-teal-300">"Python"</code>, <code className="text-indigo-500 dark:text-indigo-300">"Linux"</code>]
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
            <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">$ cat user.summary_</span>
            <div className="pl-4 border-l-2 border-emerald-500/30 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-sans">
              <p className="mb-1 text-neutral-500 dark:text-neutral-500 text-xs font-mono" aria-hidden="true"># output:</p>
              <ul className="list-none space-y-1">
                <li>🎓 BCA Student at <strong className="text-neutral-800 dark:text-neutral-200">Sree Gokulam Arts and Science College, Balussery</strong></li>
                <li>🛡️ Passionate about Cybersecurity, Ethical Hacking & Linux</li>
                <li>💻 Building modern web apps, cross-platform mobile apps & security tools</li>
                <li>📍 Based in <strong className="text-neutral-800 dark:text-neutral-200">Kozhikode (Calicut), Kerala, India</strong></li>
              </ul>
            </div>
          </motion.div>

          {/* Social Icons row */}
          <motion.nav
            className="flex flex-col gap-2 font-mono text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            aria-label="Social media links"
          >
            <span className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">$ user.socials_</span>
            <div className="flex items-center gap-4 pl-1">
              <a
                href="https://github.com/psabhishek298-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="Abhishek P S on GitHub"
                aria-label="Visit Abhishek P S GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-ps-788431415/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="Abhishek P S on LinkedIn"
                aria-label="Visit Abhishek P S LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/abhiiyeee.__/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-100 p-2.5 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-all cursor-pointer shadow-sm"
                title="Abhishek P S on Instagram"
                aria-label="Visit Abhishek P S Instagram profile"
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
          </motion.nav>

        </div>

      </div>

    </section>
  );
}
