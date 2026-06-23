/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Cybersecurity from "./components/Cybersecurity";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Read cached mode
    const cached = localStorage.getItem("dev-portfolio-theme");
    if (cached) {
      return cached === "dark";
    }
    // Default to true (cybersec dark mode)
    return true;
  });

  useEffect(() => {
    // Sync class list with tailwind structure
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("dev-portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("dev-portfolio-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-[#0a0a0c] dark:text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-500 overflow-x-hidden">
      
      {/* Decorative Cyber Grid Background Layer */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-80 z-0" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Skip to content link for accessibility */}
      <a 
        href="#hero" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-emerald-500 focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-mono focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <main className="relative z-10" role="main">
        <Hero />
        <About />
        <Timeline />
        <Work />
        <Projects />
        <Cybersecurity />
        <Contact />
      </main>

      {/* SEO-Rich Footer with Internal Links */}
      <footer className="relative z-10 border-t border-neutral-200/50 py-12 dark:border-neutral-900/60 transition-colors" role="contentinfo">
        <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          
          {/* Footer navigation grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            
            {/* Brand column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-base font-bold text-neutral-900 dark:text-white">Abhishek P S</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                Web Developer, App Developer & Cybersecurity Enthusiast from Kozhikode, Kerala. BCA Student at Sree Gokulam Arts and Science College, Balussery.
              </p>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <h4 className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest font-bold mb-1">Navigation</h4>
              <a href="#hero" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Home</a>
              <a href="#about" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">About</a>
              <a href="#journey" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Journey</a>
              <a href="#work" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Work</a>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Projects</a>
              <a href="#security" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Cybersecurity</a>
              <a href="#contact" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Contact</a>
            </nav>

            {/* Projects links */}
            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest font-bold mb-1">Projects</h4>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Panappetty — Finance Tracker</a>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Green Realm Landscape</a>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Music Corner</a>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Domain Leak Scanner</a>
              <a href="#projects" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Student Performance System</a>
            </div>

            {/* Social & contact */}
            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest font-bold mb-1">Connect</h4>
              <a href="https://github.com/psabhishek298-sys" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">GitHub</a>
              <a href="https://www.linkedin.com/in/abhishek-ps-788431415/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">LinkedIn</a>
              <a href="https://www.instagram.com/abhiiyeee.__/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">Instagram</a>
              <a href="mailto:psabhishek298@gmail.com" className="text-xs text-neutral-500 hover:text-emerald-500 transition-colors dark:text-neutral-400">psabhishek298@gmail.com</a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-neutral-200/40 dark:border-neutral-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <span className="text-neutral-500 dark:text-neutral-500">
              &copy; {new Date().getFullYear()} Abhishek P S. All rights reserved. Built with React + Vite from Kerala, India.
            </span>
            <span className="text-emerald-500 font-medium">
              $ status_check // system_active // build_complete
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
