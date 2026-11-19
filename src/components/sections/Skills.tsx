"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES, Skill } from "@/lib/data";
import TechLogo, { isBrand } from "../ui/TechLogo";

export default function SkillsSection() {
  const [selectedFamily, setSelectedFamily] = useState<string>("all");

  // Flatten skills and assign atomic index & 2-letter symbol
  const allSkills = SKILL_CATEGORIES.flatMap((cat, catIdx) =>
    cat.skills.map((skill, skillIdx) => ({
      ...skill,
      atomicNumber: catIdx * 10 + skillIdx + 1,
      familyId: cat.id,
      familyName: cat.name,
    }))
  );

  const [activeSkill, setActiveSkill] = useState(allSkills[0]);

  const families = [
    { id: "all", name: "All Families" },
    ...SKILL_CATEGORIES.map((cat) => ({ id: cat.id, name: cat.name })),
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e9e6e0]">
      {/* Section Tag */}
      <div className="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-3">
        03 — Skill Matrix
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-8">
        The periodic table of my <span className="font-serif-accent text-[#77756f]">stack.</span>
      </h2>

      {/* Family Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {families.map((fam) => (
          <button
            key={fam.id}
            onClick={() => setSelectedFamily(fam.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedFamily === fam.id
                ? "bg-[#0d0d0d] text-[#ffffff]"
                : "bg-[#ffffff] text-[#77756f] border border-[#e9e6e0] hover:text-[#0d0d0d]"
            }`}
          >
            {fam.name}
          </button>
        ))}
      </div>

      {/* Main Container: Grid + Sticky Inspector Panel */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Periodic Grid: 8 columns desktop, 4 columns mobile */}
        <div className="flex-1 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2.5 w-full">
          {allSkills.map((skill, idx) => {
            const row = Math.floor(idx / 8);
            const col = idx % 8;
            const delayMs = (row + col) * 40;
            const isMatch = selectedFamily === "all" || skill.familyId === selectedFamily;
            const isSelected = activeSkill.name === skill.name;

            return (
              <button
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                onMouseEnter={() => setActiveSkill(skill)}
                onFocus={() => setActiveSkill(skill)}
                style={{ animationDelay: `${delayMs}ms` }}
                className={`card-editorial p-2.5 rounded-xl text-left relative transition-all duration-300 ${
                  isMatch ? "opacity-100 scale-100" : "opacity-35 scale-95"
                } ${
                  isSelected
                    ? "ring-2 ring-[#0d0d0d] bg-[#ffffff] shadow-md -translate-y-1"
                    : "hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-[#77756f] mb-1">
                  <span>{skill.atomicNumber}</span>
                  <span className="truncate max-w-[35px]">{skill.shortCode}</span>
                </div>

                <div className="text-base font-bold font-mono text-[#0d0d0d] leading-none mb-1">
                  {skill.shortCode}
                </div>

                <div className="text-[10px] font-semibold text-[#3a3a3a] truncate">
                  {skill.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Inspector Panel: Sticky 320px wide */}
        <div className="w-full lg:w-[320px] lg:sticky lg:top-24 card-editorial p-6 rounded-3xl bg-[#ffffff] border border-[#e9e6e0] shadow-xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#77756f]">
            SKILL INSPECTOR
          </div>

          {/* Logo Pop Animation Container (150px) */}
          <div className="w-full aspect-square max-w-[150px] mx-auto rounded-2xl bg-[#f4f2ee] p-6 flex items-center justify-center border border-[#e9e6e0] shadow-inner transition-transform duration-300 animate-in zoom-in-95">
            <TechLogo name={activeSkill.name} className="w-24 h-24" />
          </div>

          {/* Info Details */}
          <div className="space-y-3">
            <div>
              <div className="text-xl font-bold text-[#0d0d0d]">{activeSkill.name}</div>
              <div className="text-xs font-mono text-[#77756f]">{activeSkill.familyName}</div>
            </div>

            <p className="text-xs text-[#3a3a3a] leading-relaxed">
              {activeSkill.description}
            </p>

            {activeSkill.relatedProjects && activeSkill.relatedProjects.length > 0 && (
              <div className="pt-3 border-t border-[#e9e6e0] space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#77756f]">
                  Projects utilizing this skill:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.relatedProjects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded bg-[#f4f2ee] text-[#0d0d0d] text-[10px] font-mono border border-[#e9e6e0]"
                    >
                      #{proj}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
