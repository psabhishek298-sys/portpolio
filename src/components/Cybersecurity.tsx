/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Shield, ShieldAlert, Cpu, Network, Skull, Terminal, Play, CheckCircle2 } from "lucide-react";

interface TerminalHistoryItem {
  command: string;
  output: string;
}

export default function Cybersecurity() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryItem[]>([
    {
      command: "whoami",
      output: "abhishek_ps @ sree_gokulam_college // Security_Enthusiast"
    },
    {
      command: "cat security_manifest.json",
      output: `{\n  "target": "Infrastructure Protection",\n  "interests": ["Ethical Hacking", "WAPT", "Defense", "Linux"],\n  "status": "Online",\n  "rehearsals": "Ongoing learning & research"\n}`
    }
  ]);

  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  const securityGuides = [
    {
      title: "Linux Experience",
      icon: <Cpu className="h-4.5 w-4.5 text-emerald-500" />,
      desc: "Comprehensive terminal mastery on distributions including Kali, Debian, and Ubuntu. Daily workflows involving shell automation scripts, background processes management, and secure SSH tunnels management.",
      details: ["Bash scripting", "Crontab automation", "Kernel parameters tweaking", "File permissions (chmod/chown)"]
    },
    {
      title: "Networking Dynamics",
      icon: <Network className="h-4.5 w-4.5 text-indigo-500" />,
      desc: "Working familiarity with network structures ranging from standard OSI layers to subnet slicing. Experience sniffing real-world frame packet sequences to capture network issues.",
      details: ["Layer 2/3 packet analysis", "TCP/IP socket patterns", "Wireshark traffic filtering", "DNS/DHCP diagnostics"]
    },
    {
      title: "Web Security Concepts",
      icon: <ShieldAlert className="h-4.5 w-4.5 text-red-500" />,
      desc: "Evaluating web architectures against standard critical security risks. Resolving vulnerabilities and securing endpoint REST requests.",
      details: ["OWASP Top 10 standard testing", "XSS injection vetting", "SQL Injection prevention", "Session hijack protection"]
    }
  ];

  const roadmapSteps = [
    { title: "Stage 01: Foundations", desc: "Linux architecture, TCP/IP layouts, Python scripting, systems security parameters." },
    { title: "Stage 02: Reconnaissance", desc: "Target discovery, subdomains scanning (via Python), active scanning through nmap, port mappings." },
    { title: "Stage 03: Vulnerability Analysis", desc: "Assessing target frameworks, OWASP audit scripts, CVE checks database, payload validations." },
    { title: "Stage 04: Penetration & Review", desc: "Exploiting system gaps, sanitizing user inputs, compiling remedial security patching logs." }
  ];

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = `Command not recognized. Type "help" to see available instructions.`;

    if (cmd === "help") {
      response = `Available security instructions:\n  help        - Displays list of security utilities\n  nmap        - Mimic scanning an unencrypted development port\n  subdomains  - Active query of sortex subdomain intelligence scanner\n  clear       - Resets the shell history buffer\n  whoami      - Verifies active profile metrics`;
    } else if (cmd === "nmap") {
      response = `Starting Nmap 7.94 ( https://nmap.org ) at 2026-06-23 UTC\nNmap scan report for scanme.nmap.org (45.33.32.156)\nHost is up (0.082s latency).\n\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n9929/tcp open  nping-echo\n\nNmap done: 1 IP address scanned in 1.45 seconds`;
    } else if (cmd === "subdomains") {
      response = `[+] Initiating Domain Leak Recon on: sortex.io\n[+] Loading passive API endpoints...\n[+] Identified 4 active leakage records:\n    - api.sortex.io  --> IP: 104.22.45.19 (Cloudflare Protected)\n    - db.sortex.io   --> IP: 135.10.224.2  (Postgres expose warning)\n    - admin.sortex.io--> IP: 104.22.46.19 (Strict MFA Required)\n[+] Scan finished. Summary report generated.`;
    } else if (cmd === "whoami") {
      response = "abhishek_ps @ sree_gokulam_college // Security_Enthusiast";
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }

    setTerminalHistory(prev => [...prev, { command: terminalInput, output: response }]);
    setTerminalInput("");
  };

  const autofillCommand = (cmd: string) => {
    setTerminalInput(cmd);
  };

  return (
    <section id="security" className="relative py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-100/10 dark:bg-black/20 transition-colors" aria-label="Cybersecurity Skills and Knowledge">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-semibold block mb-2">
            // 05. SEC OPS & DEFENSE
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Cybersecurity & Systems
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Terminal Command Console (Matches Terminal styling) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-neutral-200/50 bg-black/90 p-5 font-mono shadow-md dark:border-neutral-800/80">
            
            <div>
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5 text-red-500">
                  <Terminal className="h-4.5 w-4.5 text-emerald-500" />
                  <span>abhishek_ps@calicut:pwd_sec</span>
                </div>
                <span className="text-neutral-500">shell:bash</span>
              </div>

              {/* Instructions box */}
              <div className="mb-6 rounded bg-neutral-900/60 p-3 text-[11px] text-emerald-500/85 border border-emerald-500/10 leading-relaxed select-none">
                <span>[SYSTEM ALERT] Try executing security diagnostic queries directly. Click command shortcuts to trigger:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button onClick={() => autofillCommand("help")} className="rounded bg-neutral-800 hover:bg-emerald-500/25 border border-emerald-500/15 text-neutral-300 hover:text-emerald-400 px-2.5 py-0.5 text-[10px] cursor-pointer">
                    help
                  </button>
                  <button onClick={() => autofillCommand("nmap")} className="rounded bg-neutral-800 hover:bg-emerald-500/25 border border-emerald-500/15 text-neutral-300 hover:text-emerald-400 px-2.5 py-0.5 text-[10px] cursor-pointer">
                    nmap
                  </button>
                  <button onClick={() => autofillCommand("subdomains")} className="rounded bg-neutral-800 hover:bg-emerald-500/25 border border-emerald-500/15 text-neutral-300 hover:text-emerald-400 px-2.5 py-0.5 text-[10px] cursor-pointer">
                    subdomains
                  </button>
                </div>
              </div>

              {/* Log/History Output list */}
              <div className="flex flex-col gap-4 text-xs max-h-[300px] overflow-y-auto pr-1">
                {terminalHistory.map((hist, hIdx) => (
                  <div key={hIdx} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 font-bold text-indigo-400">
                      <span>$</span>
                      <span>{hist.command}</span>
                    </div>
                    <pre className="text-neutral-300 bg-neutral-900/40 p-2.5 rounded leading-relaxed border border-neutral-900 overflow-x-auto whitespace-pre-wrap select-text">
                      {hist.output}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Input form shell */}
            <form onSubmit={handleCommandSubmit} className="mt-6 flex items-center gap-2 border-t border-neutral-900 pt-4">
              <span className="text-emerald-500 font-bold">$</span>
              <input 
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type security instruction here... (e.g. nmap, help)"
                className="flex-1 overflow-hidden bg-transparent font-mono text-xs text-white focus:outline-none placeholder-neutral-700 placeholder:text-xs"
              />
              <button 
                type="submit"
                className="rounded-lg bg-emerald-500 p-1.5 text-black hover:bg-emerald-600 transition-colors cursor-pointer"
                title="Run Instruction"
              >
                <Play className="h-3 w-3 fill-current" />
              </button>
            </form>

          </div>

          {/* Right panel: Core Subject Guides */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1">
              $ cat modules.config
            </h3>
            
            <div className="flex flex-col gap-4">
              {securityGuides.map((guide, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-neutral-200/60 bg-white/50 p-5 transition-all hover:border-emerald-500/20 dark:border-neutral-800/80 dark:bg-black/15 glass-panel"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="rounded-lg bg-neutral-100 p-1.5 text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300">
                      {guide.icon}
                    </span>
                    <h4 className="font-display text-sm font-bold text-neutral-900 dark:text-white">
                      {guide.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-3.5">
                    {guide.desc}
                  </p>
                  
                  {/* Miniature sub-tags of subjects */}
                  <div className="flex flex-wrap gap-1.5">
                    {guide.details.map((det, dIdx) => (
                      <span key={dIdx} className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500 dark:bg-neutral-800/50 dark:text-neutral-400">
                        {det}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Outer Section: Interactive Ethical Hacking Roadmap Tracker */}
        <div className="mt-16 rounded-xl border border-neutral-200/65 bg-white p-6 dark:border-neutral-800/80 dark:bg-black/20 glass-panel">
          <div className="flex items-center gap-2 mb-6">
            <Skull className="h-5 w-5 text-red-500" />
            <h3 className="font-display text-base font-bold text-neutral-900 dark:text-white">
              Ethical Hacking Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {roadmapSteps.map((step, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveRoadmapStep(idx)}
                className={`group flex flex-col gap-2 rounded-lg p-4 text-left border transition-all cursor-pointer ${
                  activeRoadmapStep === idx 
                    ? "bg-emerald-500/10 border-emerald-500/45 dark:bg-emerald-500/5" 
                    : "bg-neutral-50/50 border-neutral-100 dark:bg-neutral-900/10 dark:border-neutral-900 hover:border-neutral-200/55 dark:hover:border-neutral-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] font-bold ${activeRoadmapStep === idx ? "text-emerald-500" : "text-neutral-400"}`}>
                    STAGE_0{idx + 1}
                  </span>
                  {activeRoadmapStep === idx && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />}
                </div>
                <h4 className="font-display text-xs.1 font-bold text-neutral-900 dark:text-white">
                  {step.title.split(":")[1] || step.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-neutral-400 group-hover:text-neutral-500 transition-colors">
                  {step.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
