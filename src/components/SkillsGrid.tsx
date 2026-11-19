"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES, Skill } from "@/lib/data";
import { Layers, Sparkles, X, Code, CheckCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  // Flatten all skills with category meta
  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.categoryId === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">02 / Technical Stack</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mt-2">
              Interactive <span className="font-serif-accent font-normal text-[#44433e]">Skill Matrix</span>.
            </h2>
          </div>
          <p className="text-sm text-[#77756f] max-w-md mt-4 md:mt-0 leading-relaxed">
            Organized periodic-style grid of languages, frameworks, vector databases, and AI engineering skills extracted from real project experience.
          </p>
        </div>
      </ScrollReveal>

      {/* Category Filter Tabs */}
      <ScrollReveal delay="100">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-[#0d0d0d] text-[#ffffff] shadow-xs"
                : "bg-[#ffffff] text-[#77756f] border border-[#e2dfd7] hover:text-[#0d0d0d] hover:bg-[#f4f2ee]"
            }`}
          >
            All Skills ({allSkills.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#0d0d0d] text-[#ffffff] shadow-xs"
                  : "bg-[#ffffff] text-[#77756f] border border-[#e2dfd7] hover:text-[#0d0d0d] hover:bg-[#f4f2ee]"
              }`}
            >
              {cat.name} ({cat.skills.length})
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Periodic Table Inspired Grid */}
      <ScrollReveal delay="200">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredSkills.map((skill, index) => {
            const isSelected = activeSkill?.name === skill.name;
            return (
              <button
                key={`${skill.name}-${index}`}
                onClick={() => setActiveSkill(skill)}
                className={`card-editorial p-4 rounded-xl text-left relative group cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "ring-2 ring-[#0d0d0d] bg-[#ffffff] shadow-md -translate-y-1"
                    : "hover:-translate-y-0.5"
                }`}
              >
                {/* Top Row: Shortcode & Level Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="w-9 h-9 rounded-lg bg-[#f4f2ee] text-[#0d0d0d] font-mono font-bold text-sm flex items-center justify-center border border-[#e2dfd7] group-hover:bg-[#0d0d0d] group-hover:text-[#ffffff] transition-colors">
                    {skill.shortCode}
                  </span>
                  <span className="text-[10px] font-mono text-[#77756f] uppercase px-1.5 py-0.5 rounded bg-[#f4f2ee]">
                    {skill.level ? skill.level.split(" ")[0] : "Core"}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-bold text-[#0d0d0d] tracking-tight group-hover:underline">
                  {skill.name}
                </h3>

                {/* Category Subtitle */}
                <p className="text-[11px] text-[#77756f] mt-1 line-clamp-1">
                  {skill.category}
                </p>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Detail Modal / Panel for Active Skill */}
      {activeSkill && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="card-editorial p-6 sm:p-8 rounded-2xl bg-[#ffffff] border-2 border-[#0d0d0d] relative shadow-lg">
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-4 right-4 p-2 text-[#77756f] hover:text-[#0d0d0d] hover:bg-[#f4f2ee] rounded-full transition-colors"
              aria-label="Close skill detail panel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Element Box Large */}
              <div className="w-20 h-20 rounded-2xl bg-[#0d0d0d] text-[#ffffff] font-mono font-bold text-3xl flex flex-col items-center justify-center shrink-0 shadow-md">
                <span>{activeSkill.shortCode}</span>
                <span className="text-[9px] font-normal tracking-widest uppercase opacity-75 mt-0.5">
                  ELEMENT
                </span>
              </div>

              {/* Details Content */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-[#0d0d0d]">{activeSkill.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-[#f4f2ee] text-[#0d0d0d] text-xs font-semibold uppercase tracking-wider border border-[#e2dfd7]">
                    {activeSkill.category}
                  </span>
                  {activeSkill.level && (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                      {activeSkill.level}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#77756f] leading-relaxed max-w-3xl">
                  {activeSkill.description}
                </p>

                {/* Related Projects */}
                {activeSkill.relatedProjects && activeSkill.relatedProjects.length > 0 && (
                  <div className="pt-3 border-t border-[#e2dfd7] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[#0d0d0d]">Used In Projects:</span>
                    {activeSkill.relatedProjects.map((projId) => (
                      <a
                        key={projId}
                        href="#projects"
                        className="px-2.5 py-1 rounded bg-[#f4f2ee] hover:bg-[#0d0d0d] hover:text-[#ffffff] text-[#0d0d0d] text-xs font-mono transition-colors border border-[#e2dfd7]"
                      >
                        #{projId}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
