"use client";

import React, { useRef } from "react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/data";
import { Award, Trophy, Shield, Keyboard, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Combine certifications and achievements for the horizontal reel
  const allRecognitions = [
    {
      type: "Certification",
      title: "AWS Certified Developer – Associate",
      subtitle: "Amazon Web Services (AWS)",
      detail: "August 2026 • Professional Cloud Development Certification",
      badge: "AWS Certified",
      accent: "bg-[#0d0d0d] text-[#ffffff]"
    },
    {
      type: "Internship Certificate",
      title: "AI/ML Technical Internship",
      subtitle: "KODACY in association with SPACE",
      detail: "July 2026 • XGBoost, Model Evaluation & Data Preprocessing",
      badge: "AI/ML Credential",
      accent: "bg-emerald-800 text-[#ffffff]"
    },
    {
      type: "Sports Achievement",
      title: "State-Level Volleyball Player",
      subtitle: "25th IPSGM (2022–23) & University Volleyball",
      detail: "Represented State Level • University Volleyball Season 3 Runner-up",
      badge: "State Level Athlete",
      accent: "bg-[#0d0d0d] text-[#ffffff]"
    },
    {
      type: "Leadership Service",
      title: "National Cadet Corps (NCC) Cadet",
      subtitle: "National Cadet Corps",
      detail: "Active Cadet • Community Service, Drill & Disciplined Leadership",
      badge: "NCC Cadet",
      accent: "bg-[#222222] text-[#ffffff]"
    },
    {
      type: "State Technical Board",
      title: "English Typewriting Specialist",
      subtitle: "State Board of Technical Education",
      detail: "Qualified Higher Grade (45 WPM) & Lower Grade (30 WPM)",
      badge: "45 WPM Higher",
      accent: "bg-[#0d0d0d] text-[#ffffff]"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">05 / Recognitions &amp; Honors</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mt-2">
              Certifications &amp; <span className="font-serif-accent font-normal text-[#44433e]">Sideways Reel</span>.
            </h2>
          </div>
          
          {/* Scroll Control Arrows */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-xs font-mono text-[#77756f] hidden sm:inline">Scroll Sideways →</span>
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-[#ffffff] border border-[#e2dfd7] hover:bg-[#0d0d0d] hover:text-[#ffffff] text-[#0d0d0d] transition-all shadow-2xs"
              aria-label="Scroll left through achievements"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-[#ffffff] border border-[#e2dfd7] hover:bg-[#0d0d0d] hover:text-[#ffffff] text-[#0d0d0d] transition-all shadow-2xs"
              aria-label="Scroll right through achievements"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Horizontal Sideways Scrolling Reel */}
      <ScrollReveal delay="100">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
        >
          {allRecognitions.map((item, index) => (
            <div
              key={index}
              className="min-w-[290px] sm:min-w-[340px] max-w-[360px] snap-start card-editorial p-6 sm:p-7 rounded-2xl flex flex-col justify-between shrink-0 shadow-md group hover:-translate-y-1 transition-all duration-300 bg-[#ffffff]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.accent}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#77756f]">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0d0d0d] tracking-tight group-hover:underline">
                  {item.title}
                </h3>
                
                <div className="text-xs font-semibold text-[#77756f]">{item.subtitle}</div>
                <p className="text-xs text-[#77756f] leading-relaxed pt-1">{item.detail}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#e2dfd7] flex items-center justify-between text-[11px] font-mono text-[#0d0d0d]">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Credential
                </span>
                <span className="text-[#77756f] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Static Grid Details Backup */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal delay="200">
          <div className="card-editorial p-6 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold text-[#0d0d0d] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0d0d0d]" />
              <span>AWS Certified Developer – Associate</span>
            </h4>
            <p className="text-xs text-[#77756f] leading-relaxed">
              Industry cloud certification validating expertise in enterprise application deployment, security, and AWS service integrations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="300">
          <div className="card-editorial p-6 rounded-2xl space-y-3">
            <h4 className="text-sm font-bold text-[#0d0d0d] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#0d0d0d]" />
              <span>State Volleyball &amp; NCC Leadership</span>
            </h4>
            <p className="text-xs text-[#77756f] leading-relaxed">
              State-level athletic discipline (25th IPSGM) and active NCC Cadet service instilling leadership, resilience, and team collaboration.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
