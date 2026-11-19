"use client";

import React from "react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceTimeline() {
  // Combine education and experience items into a chronological list
  const timelineItems = [
    {
      type: "education" as const,
      title: "B.Tech, Computer Science & Engineering",
      subtitle: "K L University, Vijayawada",
      period: "2025 – 2027",
      highlight: "SGPA: 9.01 / 10 • Specialization in Gen AI for Agentic & Multimodal Intelligence",
      bullets: [
        "Specializing in Generative AI architectures, agentic pipelines, and multimodal models.",
        "Developing enterprise full-stack web applications with React, Java, Spring Boot, and relational databases."
      ]
    },
    {
      type: "experience" as const,
      title: "AI/ML Technical Intern",
      subtitle: "KODACY in association with SPACE",
      period: "30-Day Virtual Program | 2026",
      highlight: "AI/ML Workflows & XGBoost Evaluation",
      bullets: [
        "Learned core AI/ML workflows, data preprocessing, model evaluation, cross-validation techniques, and XGBoost implementation.",
        "Studied data leakage prevention strategies and best practices for reliable machine learning model evaluation."
      ]
    },
    {
      type: "experience" as const,
      title: "Web Development Intern",
      subtitle: "CODEON TECHNOLOGIES PVT. LTD.",
      period: "6 Months Duration",
      highlight: "Web Development & MySQL Integration",
      bullets: [
        "Worked with HTML, CSS, JavaScript, PHP, and MySQL to develop, maintain, and enhance web application features.",
        "Practiced database integration, debugging, testing, Git-based collaboration, and full software development lifecycle (SDLC) workflows."
      ]
    },
    {
      type: "education" as const,
      title: "Diploma, Computer Engineering",
      subtitle: "S.V. Government Polytechnic",
      period: "2022 – 2025",
      highlight: "Percentage: 82%",
      bullets: [
        "Built solid foundations in computer engineering, system programming, database management, and web design."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">04 / Career Timeline</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mt-2">
              Experience &amp; <span className="font-serif-accent font-normal text-[#44433e]">Education</span>.
            </h2>
          </div>
          <p className="text-sm text-[#77756f] max-w-md mt-4 md:mt-0 leading-relaxed">
            Chronological journey combining industry technical internships and academic engineering qualifications.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-[#e2dfd7] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {timelineItems.map((item, index) => (
          <ScrollReveal key={index} delay={`${(index + 1) * 100}` as any}>
            <div className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#ffffff] border-2 border-[#0d0d0d] flex items-center justify-center text-[#0d0d0d] group-hover:bg-[#0d0d0d] group-hover:text-[#ffffff] transition-colors shadow-xs">
                {item.type === "experience" ? (
                  <Briefcase className="w-3.5 h-3.5" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="card-editorial p-6 sm:p-8 rounded-2xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] text-xs font-mono font-semibold uppercase tracking-wider border border-[#e2dfd7]">
                      {item.type === "experience" ? "Industry Experience" : "Academic Education"}
                    </span>
                    <span className="text-xs font-mono text-[#77756f] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d0d0d]">{item.title}</h3>
                  <div className="text-sm font-semibold text-[#77756f] mt-0.5">{item.subtitle}</div>
                </div>

                <ul className="space-y-2 pt-2 border-t border-[#e2dfd7]/60">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0d0d0d] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
