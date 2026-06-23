/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Sun, Moon, Terminal, Briefcase, GitBranch, MessageSquare, Shield, FolderGit2 } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [activeCommand, setActiveCommand] = useState<string>("cd ~/");
  const [systemTime, setSystemTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string, cmd: string) => {
    setActiveCommand(cmd);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-md transition-colors dark:border-neutral-800/60 dark:bg-[#0a0a0c]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        
        {/* Terminal path selector */}
        <div id="nav-terminal-path" className="flex items-center gap-2 font-mono text-xs sm:text-sm">
          <Terminal className="h-4 w-4 text-emerald-500" />
          <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
            <button
              onClick={() => scrollToSection("hero", "cd ~/")}
              className={`hover:text-emerald-500 transition-colors ${activeCommand === "cd ~/" ? "text-emerald-500 font-semibold" : ""}`}
            >
              cd ~/
            </button>
            <span>|</span>
            <button
              onClick={() => scrollToSection("journey", "cd ~/journey")}
              className={`hover:text-emerald-500 transition-colors ${activeCommand === "cd ~/journey" ? "text-emerald-500 font-semibold" : ""}`}
            >
              cd ~/journey
            </button>
            <span className="hidden sm:inline">|</span>
            <button
              onClick={() => scrollToSection("projects", "cd ~/projects")}
              className={`hidden sm:inline hover:text-emerald-500 transition-colors ${activeCommand === "cd ~/projects" ? "text-emerald-500 font-semibold" : ""}`}
            >
              cd ~/projects
            </button>
            <span className="hidden md:inline">|</span>
            <button
              onClick={() => scrollToSection("security", "cd ~/cybersecurity")}
              className={`hidden md:inline hover:text-emerald-500 transition-colors ${activeCommand === "cd ~/cybersecurity" ? "text-emerald-500 font-semibold" : ""}`}
            >
              cd ~/cybersec
            </button>
          </div>
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-4">
          
          {/* Quick anchor icons */}
          <nav className="flex items-center gap-3">
            <button
              id="nav-btn-work"
              onClick={() => scrollToSection("work", "cd ~/work")}
              title="Work History"
              className="group rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-emerald-500 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <Briefcase className="h-4 w-4" />
            </button>

            <button
              id="nav-btn-projects"
              onClick={() => scrollToSection("projects", "cd ~/projects")}
              title="Projects"
              className="group rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-emerald-500 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <FolderGit2 className="h-4 w-4" />
            </button>
            <button
              id="nav-btn-cyber"
              onClick={() => scrollToSection("security", "cd ~/cybersecurity")}
              title="Cybersecurity"
              className="group rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-emerald-500 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <Shield className="h-4 w-4" />
            </button>

            <button
              id="nav-btn-contact"
              onClick={() => scrollToSection("contact", "cd ~/contact")}
              title="Contact"
              className="group rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-emerald-500 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <MessageSquare className="h-4 w-4" />
            </button>
          </nav>

          {/* Desktop UTC clock widget */}
          <div className="hidden border-l border-neutral-200 pl-3 font-mono text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500 min-w-[70px] lg:block">
            {systemTime}
          </div>

          {/* Dark Mode Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg border border-neutral-200 p-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

      </div>
    </header>
  );
}
