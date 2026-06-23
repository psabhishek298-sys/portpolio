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
      
      {/* Decorative Cyber Grid Background Layer across entire layout */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-80 z-0" />

      {/* Premium custom mouse-pointer */}
      <CustomCursor />

      {/* Main sticky navigation panel */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Container wrapper */}
      <main className="relative z-10">
        
        {/* Sections stacked sequentially */}
        <Hero />
        
        <About />
        
        <Timeline />
        
        <Work />
        
        <Projects />
        
        <Cybersecurity />
        
        
        <Contact />

      </main>

      {/* Minimalist premium cyber footer */}
      <footer className="relative z-10 border-t border-neutral-200/50 py-10 dark:border-neutral-900/60 transition-colors">
        <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-10" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 font-mono text-xs text-neutral-400 sm:flex-row sm:px-6 md:px-8">
          <span className="text-left text-neutral-500 dark:text-neutral-500">
            &copy; 2026 Abhishek P S. All security vectors protected.
          </span>
          <span className="text-emerald-500 font-medium">
            $ status_check // system_active // build_complete
          </span>
        </div>
      </footer>

    </div>
  );
}
