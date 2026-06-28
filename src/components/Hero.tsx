/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] w-full items-center justify-center py-10 md:py-16"
      aria-label="Hero section — Abhishek P S Portfolio"
    >
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

      {/* ═══════════════════════════════
          MOBILE LAYOUT  (< md)
      ════════════════════════════════ */}
      <div className="md:hidden relative w-full px-4 py-6 flex flex-col gap-5">

        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 -left-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" aria-hidden="true" />

        {/* ── Name & role ── */}
        <motion.div
          className="flex flex-col gap-1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[10px] tracking-[0.18em] text-emerald-500/70 uppercase">
            $ user.role
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white leading-[1.1]">
            Abhishek<br />P S
          </h1>
          <p className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-emerald-400 mt-0.5">
            <span className="animate-pulse font-bold" aria-hidden="true">&gt;</span>
            <span className="border-r-2 border-emerald-500 pr-1 cursor-blink leading-relaxed">
              Founder of Truquen | Full Stack Developer | Cybersecurity Enthusiast
            </span>
          </p>
        </motion.div>

        {/* ── Profile description ── */}
        <motion.div
          className="flex flex-col gap-1 font-mono text-[10px]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-neutral-500">$ user.description_</span>
          <pre className="text-neutral-300 text-[10px] leading-[1.7] whitespace-pre-wrap break-words">
            <code className="text-emerald-400">const</code>{" "}
            <code className="text-indigo-300">profile</code> = {"{\n"}
            {"  "}name : <code className="text-amber-300">"Abhishek P S"</code>,{"\n"}
            {"  "}role : <code className="text-amber-300">"Web Dev & Cybersecurity"</code>,{"\n"}
            {"  "}college : <code className="text-amber-300">"Sree Gokulam, Balussery"</code>,{"\n"}
            {"  "}location : <code className="text-amber-300">"Kozhikode, Kerala"</code>,{"\n"}
            {"  "}stack : [<code className="text-pink-300">"React"</code>, <code className="text-emerald-400">"Flutter"</code>, <code className="text-teal-300">"Python"</code>]{"\n"}
            {"}"}
          </pre>
        </motion.div>

        {/* ── Summary ── */}
        <motion.div
          className="flex flex-col gap-1 font-mono text-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-neutral-500">$ cat user.summary_</span>
          <div className="border-l-2 border-emerald-500/40 pl-3 flex flex-col gap-1 font-sans text-[11px] text-neutral-400 leading-relaxed">
            <span className="text-neutral-600 font-mono text-[9px]"># output:</span>
            <p>🎓 BCA Student at <strong className="text-neutral-200">Sree Gokulam Arts & Science College</strong></p>
            <p>🛡️ Passionate about Cybersecurity, Ethical Hacking & Linux</p>
            <p>💻 Building web apps, mobile apps & security tools</p>
            <p>📍 <strong className="text-neutral-200">Kozhikode (Calicut), Kerala, India</strong></p>
          </div>
        </motion.div>

        {/* ── Social links + CTA ── */}
        <motion.nav
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          aria-label="Social media links"
        >
          <span className="font-mono text-[10px] text-neutral-500">$ user.socials_</span>
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/psabhishek298-sys", label: "GitHub", icon: <Github className="h-5 w-5" /> },
              { href: "https://www.linkedin.com/in/abhishek-ps-788431415/", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
              { href: "https://www.instagram.com/abhiiyeee.__/", label: "Instagram", icon: <Instagram className="h-5 w-5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abhishek P S on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-black/50 text-neutral-300 backdrop-blur-md transition-all hover:border-emerald-500/60 hover:text-emerald-400 hover:shadow-[0_0_14px_rgba(16,185,129,0.3)] active:scale-95"
              >
                {icon}
              </a>
            ))}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="ml-auto flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2.5 font-mono text-[11px] font-semibold text-emerald-400 backdrop-blur-md transition-all hover:bg-emerald-500/25 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-95"
            >
              Initiate Secure Comm
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ═══════════════════════════════
          DESKTOP LAYOUT  (≥ md)
          Original layout — untouched
      ════════════════════════════════ */}
      <div className="hidden md:grid relative mx-auto max-w-7xl w-full grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12 md:px-8">

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
