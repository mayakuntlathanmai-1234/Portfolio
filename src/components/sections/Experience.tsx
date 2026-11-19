"use client";

import React, { useRef, useState, useEffect } from "react";
import { CheckCircle2, Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [spineHeight, setSpineHeight] = useState(0);

  const timeline = [
    {
      type: "education",
      year: "2025 – 2027",
      title: "B.Tech, Computer Science and Engineering",
      place: "K L University, Vijayawada",
      detail: "SGPA: 9.01 / 10 • Specialization in Generative AI for Agentic and Multimodal Intelligence.",
    },
    {
      type: "experience",
      year: "2026",
      title: "AI/ML Technical Intern",
      place: "KODACY in association with SPACE",
      detail: "30-day virtual program • XGBoost, model evaluation, cross-validation, and data leakage prevention.",
    },
    {
      type: "experience",
      year: "2022 – 2025",
      title: "Web Development Intern",
      place: "CODEON TECHNOLOGIES PVT. LTD.",
      detail: "6 months duration • Developed web features with HTML, CSS, JavaScript, PHP, MySQL, and SDLC workflows.",
    },
    {
      type: "education",
      year: "2022 – 2025",
      title: "Diploma, Computer Engineering",
      place: "S.V. Government Polytechnic",
      detail: "Percentage: 82% • Computer engineering fundamentals, systems, database management.",
    },
    {
      type: "education",
      year: "2022",
      title: "Secondary School Certificate (Class X)",
      place: "Class X",
      detail: "Percentage: 74% • Foundations in science and mathematics.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Compute progress 0 to 1
      const total = rect.height;
      const current = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, current / total));
      setSpineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e9e6e0]"
    >
      {/* Section Tag */}
      <div className="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-3">
        06 — Experience &amp; Education
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-12">
        My single <span className="font-serif-accent text-[#77756f]">path.</span>
      </h2>

      {/* Timeline Spine */}
      <div className="relative border-l-2 border-[#e9e6e0] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {/* Active Animated Spine Fill */}
        <div
          className="absolute left-[-2px] top-0 bg-[#0d0d0d] w-[2px] transition-all duration-150 ease-out"
          style={{ height: `${spineHeight}%` }}
        />

        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Stop */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#ffffff] border-2 border-[#0d0d0d] flex items-center justify-center text-[#0d0d0d] shadow-sm transition-colors group-hover:bg-[#0d0d0d] group-hover:text-[#ffffff]">
              {item.type === "experience" ? (
                <Briefcase className="w-3.5 h-3.5" />
              ) : (
                <GraduationCap className="w-3.5 h-3.5" />
              )}
            </div>

            {/* Card */}
            <div className="card-editorial p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e9e6e0] space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] border border-[#e9e6e0]">
                  {item.year}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#77756f]">
                  {item.type}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0d0d0d]">{item.title}</h3>
                <div className="text-xs font-semibold text-[#77756f] mt-0.5">{item.place}</div>
              </div>

              <p className="text-xs text-[#3a3a3a] leading-relaxed pt-1 border-t border-[#e9e6e0]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}

        {/* Ending Dashed Card */}
        <div className="relative">
          <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-8 h-8 rounded-full bg-[#f4f2ee] border-2 border-dashed border-[#0d0d0d] flex items-center justify-center text-[#0d0d0d]">
            ?
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border-2 border-dashed border-[#0d0d0d] bg-[#f4f2ee] text-center space-y-2">
            <h3 className="text-xl font-bold text-[#0d0d0d]">Next — Your team?</h3>
            <p className="text-xs text-[#77756f]">
              Open for full-stack and AI engineering opportunities. Let&apos;s build together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
