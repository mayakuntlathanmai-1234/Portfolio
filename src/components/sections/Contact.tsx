"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";
import { GithubIcon } from "../Icons";
import { Copy, Check, ArrowUpRight, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const textHeading = "Let's build something ";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e9e6e0]">
      {/* Section Tag */}
      <div className="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-3">
        08 — Contact &amp; Footer
      </div>

      {/* Huge Heading with Letter Hop Effect */}
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-[#0d0d0d] leading-tight mb-12 flex flex-wrap items-center">
        {textHeading.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        <span className="font-serif-accent text-[#77756f] hover:-translate-y-2 transition-transform duration-200 inline-block cursor-pointer">
          together.
        </span>
      </h2>

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Left Column: Email & Copy Chip */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="font-mono text-xs text-[#77756f] uppercase mb-1">
              Direct Communication Channel
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-2xl sm:text-4xl font-bold text-[#0d0d0d] underline decoration-1 underline-offset-8 hover:text-[#77756f] transition-colors break-all"
            >
              {PROFILE.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={copyEmail}
              className="px-6 py-3 rounded-full bg-[#0d0d0d] text-[#ffffff] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#222222] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied ✓" : "Copy Email"}</span>
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>

          {/* Phone & GitHub Links */}
          <div className="pt-6 border-t border-[#e9e6e0] flex flex-wrap gap-6 text-sm font-mono">
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-[#0d0d0d] hover:underline"
            >
              <Phone className="w-4 h-4 text-[#77756f]" />
              <span>{PROFILE.phone}</span>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0d0d0d] hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/{PROFILE.githubUsername} ↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Spinning Badge */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#0d0d0d] animate-spin-slow" />
            <div className="text-center space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0d0d0d] block">
                SAY HELLO
              </span>
              <span className="text-[10px] text-[#77756f] block">✦ 2026 ✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="pt-12 border-t border-[#e9e6e0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77756f]">
        <div>
          © 2026 {PROFILE.name} • All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToTarget("#hero")}
            className="hover:text-[#0d0d0d] transition-colors"
          >
            Back to top ↑
          </button>
          <span>Built with Next.js 15</span>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
