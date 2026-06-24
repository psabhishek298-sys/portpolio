/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, Github, Linkedin, ShieldCheck, Instagram, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorText("Required transmission fields are missing.");
      return;
    }

    try {
      const url = "https://docs.google.com/forms/d/e/1FAIpQLSezBNqBS9hW_x9BPt_TUrL6sGPSWigIyqhiv-HwjnEyvUFR0g/formResponse";
      const submitData = new URLSearchParams();
      submitData.append("entry.791010536", formData.name);
      submitData.append("entry.92207286", formData.email);
      submitData.append("entry.120803320", formData.subject);
      submitData.append("entry.1441589256", formData.message);

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: submitData.toString()
      });

      setSubmitted(true);
    } catch (err) {
      setErrorText("Transmission failed. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-neutral-100 dark:border-neutral-900 transition-colors" aria-label="Contact Abhishek P S">
      <div className="pointer-events-none absolute inset-0 cyber-grid-dense opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Title */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-semibold block mb-2">
            // 07. SECURE CHANNELS
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 font-sans max-w-xl">
            Have a project idea, freelance opportunity, or just want to connect? Reach out to Abhishek P S — Web Developer and Cybersecurity Enthusiast based in Kozhikode, Kerala.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" aria-hidden="true" />
        </div>

        {/* Form and info row split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1">
              $ cat contacts.config
            </h3>

            {/* Location card */}
            <div className="rounded-xl border border-neutral-200/50 bg-white/60 p-5 dark:border-neutral-800/80 dark:bg-black/15 glass-panel flex flex-col gap-3">
              <div className="flex items-center gap-3 text-neutral-950 dark:text-white font-medium">
                <span className="rounded-lg bg-emerald-500/5 p-2 text-emerald-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-display text-sm tracking-wide">Location Coordinates</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed pl-12">
                Calicut, Kerala, India — Asia/Kolkata (GMT+5:30)
              </p>
            </div>

            {/* Email communication */}
            <div className="rounded-xl border border-neutral-200/50 bg-white/60 p-5 dark:border-neutral-800/80 dark:bg-black/15 glass-panel flex flex-col gap-3">
              <div className="flex items-center gap-3 text-neutral-950 dark:text-white font-medium">
                <span className="rounded-lg bg-indigo-500/5 p-2 text-indigo-500">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-display text-sm tracking-wide">Secure Communication Hub</span>
              </div>
              <div className="pl-12">
                <a 
                  href="mailto:psabhishek298@gmail.com" 
                  className="font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 transition-colors"
                >
                  psabhishek298@gmail.com
                </a>
              </div>
            </div>

            {/* Grid references */}
            <div className="rounded-xl border border-neutral-200/50 bg-white/60 p-5 dark:border-neutral-800/80 dark:bg-black/15 glass-panel flex flex-col gap-3">
              <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase pl-1">Grid reference logs</span>
              <div className="flex items-center gap-4 pl-1">
                <a 
                  href="https://github.com/psabhishek298-sys" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-colors cursor-pointer"
                  title="GitHub Source"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abhishek-ps-788431415/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="rounded-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-colors cursor-pointer"
                  title="Linkedin"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="https://www.instagram.com/abhiiyeee.__/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="rounded-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/40 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:text-emerald-500 transition-colors cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right panel: Live Message form (Terminal styled) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-200/50 bg-white p-6 dark:border-neutral-800/80 dark:bg-[#0b0b0e] glass-panel">
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4 font-mono">
                <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/20 mb-4 animate-bounce">
                  <ShieldCheck className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="font-display text-base font-bold text-neutral-900 dark:text-white mb-2">
                  TRANSMISSION ENCRYPTED
                </h3>
                <p className="max-w-xs text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mb-6">
                  Message successfully parameterized & packaged into secure SSH headers. Abhishek will review response metrics.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="rounded-lg bg-neutral-100 px-4 py-2 text-xs font-mono font-medium hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 cursor-pointer"
                >
                  $ reset_terminal_buffer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs sm:text-sm">
                
                <h3 className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1 mb-2">
                  $ input_message_form
                </h3>

                {errorText && (
                  <div className="rounded-lg bg-red-150 p-3 text-[11px] font-mono text-red-500 border border-red-500/10 dark:bg-red-950/20 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0" /> Error: {errorText}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 font-mono">
                    <label className="text-[11px] text-neutral-400 dark:text-neutral-500 pl-1 uppercase font-semibold">Name:</label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your Name"
                      className="rounded-lg border border-neutral-200 p-2.5 bg-neutral-50/50 dark:border-neutral-800 dark:bg-black/40 text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 font-mono">
                    <label className="text-[11px] text-neutral-400 dark:text-neutral-500 pl-1 uppercase font-semibold">Email:</label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="Your Email"
                      className="rounded-lg border border-neutral-200 p-2.5 bg-neutral-50/50 dark:border-neutral-800 dark:bg-black/40 text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 font-mono">
                  <label className="text-[11px] text-neutral-400 dark:text-neutral-500 pl-1 uppercase font-semibold">Subject:</label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="rounded-lg border border-neutral-200 p-2.5 bg-neutral-50/50 dark:border-neutral-800 dark:bg-black/40 text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5 font-mono">
                  <label className="text-[11px] text-neutral-400 dark:text-neutral-500 pl-1 uppercase font-semibold">Message:</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Message"
                    className="rounded-lg border border-neutral-200 p-2.5 bg-neutral-50/50 dark:border-neutral-800 dark:bg-black/40 text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500/50 font-sans"
                  />
                </div>

                <button 
                  type="submit"
                  className="rounded-lg bg-emerald-500 font-mono text-xs text-black hover:bg-emerald-600 transition-all font-semibold py-3 px-4 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:translate-y-[-1px]"
                >
                  <Send className="h-3.5 w-3.5" /> transmits_payload.enc
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
