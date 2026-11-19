"use client";

import React, { useRef, useState, useEffect } from "react";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/lib/data";
import TechLogo from "../ui/TechLogo";

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const cards = [
    {
      index: "01 / 05",
      logoName: "AWS",
      label: "Cloud Credential",
      caption: "AWS Certified Developer – Associate",
      detail: "August 2026 • Amazon Web Services",
      countTarget: 2026,
      countSuffix: "",
    },
    {
      index: "02 / 05",
      logoName: "Python",
      label: "Internship Credential",
      caption: "AI/ML Technical Internship",
      detail: "KODACY in association with SPACE • XGBoost & Data Evaluation",
      countTarget: 30,
      countSuffix: " Days",
    },
    {
      index: "03 / 05",
      logoName: "Generative AI",
      label: "Sports Representation",
      caption: "State-Level Volleyball Player",
      detail: "25th IPSGM (2022–23) • University Season 3 Runner-up",
      countTarget: 25,
      countSuffix: "th IPSGM",
    },
    {
      index: "04 / 05",
      logoName: "Java",
      label: "National Service",
      caption: "NCC Cadet",
      detail: "National Cadet Corps • Community Service & Leadership",
      countTarget: 1,
      countSuffix: " Cadet",
    },
    {
      index: "05 / 05",
      logoName: "React",
      label: "Technical Speed",
      caption: "English Typewriting Specialist",
      detail: "State Technical Board • Higher Grade (45 WPM) & Lower (30 WPM)",
      countTarget: 45,
      countSuffix: " WPM",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const totalScroll = container.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
      setScrollProgress(progress);

      const maxTranslateX = track.scrollWidth - window.innerWidth + 100;
      track.style.transform = `translateX(${-progress * maxTranslateX}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} id="achievements" className="relative h-[300vh] bg-[#f4f2ee]">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-between py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#77756f]">
              07 — Achievements
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d]">
              Honors &amp; <span className="font-serif-accent text-[#77756f]">recognition.</span>
            </h2>
          </div>

          {/* Thin Progress Bar */}
          <div className="w-32 h-[2px] bg-[#e9e6e0] hidden sm:block">
            <div
              className="h-full bg-[#0d0d0d] transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-8 px-8 sm:px-16 transition-transform duration-100 ease-out"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[clamp(340px,40vw,540px)] h-[clamp(260px,36vh,310px)] rounded-[28px] bg-[#ffffff] p-8 flex flex-col justify-between shrink-0 shadow-lg hover:-translate-y-3 transition-transform duration-300"
            >
              {/* Top: 72px logo tile + index */}
              <div className="flex items-center justify-between">
                <div className="w-[72px] h-[72px] rounded-2xl bg-[#f4f2ee] p-3 flex items-center justify-center border border-[#e9e6e0] shadow-xs">
                  <TechLogo name={card.logoName} className="w-10 h-10" />
                </div>
                <span className="font-mono text-xs text-[#77756f]">{card.index}</span>
              </div>

              {/* Bottom Info & Huge Count */}
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase text-[#77756f]">
                    {card.label}
                  </div>
                  <h3 className="text-lg font-bold text-[#0d0d0d]">{card.caption}</h3>
                  <p className="text-xs text-[#77756f] max-w-[240px]">{card.detail}</p>
                </div>

                <div className="text-4xl font-bold text-[#0d0d0d] font-mono">
                  {card.countTarget}
                  <span className="text-xs text-[#77756f] font-normal">{card.countSuffix}</span>
                </div>
              </div>
            </div>
          ))}

          {/* End of Track Tile */}
          <div className="w-[240px] h-[clamp(260px,36vh,310px)] rounded-[28px] bg-transparent border-2 border-dashed border-[#0d0d0d] p-8 flex items-center justify-center shrink-0">
            <span className="font-bold text-lg text-[#0d0d0d]">and counting →</span>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="text-center font-mono text-xs text-[#77756f]">
          Scroll down to slide achievements
        </div>
      </div>
    </div>
  );
}
