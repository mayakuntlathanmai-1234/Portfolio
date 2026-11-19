"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { Mail, Phone, FileText, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <div className="card-editorial p-8 sm:p-14 rounded-3xl bg-[#ffffff] border border-[#e2dfd7] shadow-xl relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">
              06 / Get In Touch
            </span>
            
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-[#0d0d0d] leading-[1.08]">
              Let&apos;s build something <span className="font-serif-accent font-normal text-[#44433e]">meaningful</span> together.
            </h2>

            <p className="text-base sm:text-lg text-[#77756f] leading-relaxed">
              I am actively seeking software engineering opportunities, full-stack developer roles, and Generative AI project collaborations. Reach out directly via email or phone.
            </p>

            {/* Action Cards & Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              {/* Direct Mailto Button */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-4 rounded-full bg-[#0d0d0d] text-[#ffffff] font-semibold text-sm flex items-center gap-2.5 hover:bg-[#222222] transition-all shadow-md group"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email directly</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="px-6 py-4 rounded-full bg-[#f4f2ee] text-[#0d0d0d] font-semibold text-sm border border-[#e2dfd7] hover:bg-[#0d0d0d] hover:text-[#ffffff] hover:border-[#0d0d0d] transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Email Copied to Clipboard!" : "Copy Email Address"}</span>
              </button>
            </div>

            {/* Verified Contact Details Grid */}
            <div className="pt-10 border-t border-[#e2dfd7] grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#77756f]">Email Address</span>
                <div>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-bold text-[#0d0d0d] hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#77756f]">Phone Contact</span>
                <div>
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="font-bold text-[#0d0d0d] hover:underline"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#77756f]">GitHub Profile</span>
                <div>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0d0d0d] hover:underline flex items-center gap-1"
                  >
                    <span>github.com/{PROFILE.githubUsername}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#77756f]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
