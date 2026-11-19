"use client";

import React, { useState } from "react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import { ChevronDown, ChevronUp, Layers, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import IllustrativeUiMockup from "./IllustrativeUiMockup";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string>(PROJECTS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">03 / Featured Work</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mt-2">
              Engineered <span className="font-serif-accent font-normal text-[#44433e]">Projects</span>.
            </h2>
          </div>
          <p className="text-sm text-[#77756f] max-w-md mt-4 md:mt-0 leading-relaxed">
            Real projects extracted from resume records spanning enterprise full-stack healthcare platforms, microservices architecture, and local agentic AI systems.
          </p>
        </div>
      </ScrollReveal>

      {/* Accordion / Project Cards List */}
      <div className="space-y-6">
        {PROJECTS.map((project, index) => {
          const isExpanded = expandedId === project.id;
          return (
            <ScrollReveal key={project.id} delay={`${(index % 4) * 100 + 100}` as any}>
              <div
                className={`card-editorial rounded-2xl transition-all duration-300 ${
                  isExpanded ? "border-2 border-[#0d0d0d] shadow-md" : ""
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] border border-[#e2dfd7]">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#77756f]">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0d0d0d] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#77756f] font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-full bg-[#f4f2ee] hover:bg-[#0d0d0d] hover:text-[#ffffff] text-[#0d0d0d] transition-colors flex items-center justify-center"
                        title="View Verified GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    <div className="p-2.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] transition-transform duration-200">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 pt-2 border-t border-[#e2dfd7] space-y-6 animate-in fade-in duration-300">
                    {/* Grid: Details & Tech Stack */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-1">
                            Problem Addressed
                          </h4>
                          <p className="text-sm text-[#0d0d0d] leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-1">
                            Overview &amp; Implementation
                          </h4>
                          <p className="text-sm text-[#77756f] leading-relaxed">
                            {project.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-1">
                            My Contribution
                          </h4>
                          <p className="text-sm text-[#77756f] leading-relaxed">
                            {project.contribution}
                          </p>
                        </div>

                        {/* Key Features List */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-2">
                            Key Capabilities &amp; Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#0d0d0d]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech Stack & Illustrative UI Column */}
                      <div className="lg:col-span-5 space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-2">
                            Verified Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded bg-[#f4f2ee] text-[#0d0d0d] text-xs font-mono border border-[#e2dfd7]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Illustrative UI Preview Box */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#77756f] mb-2">
                            Interactive Architecture Preview
                          </h4>
                          <IllustrativeUiMockup type={project.illustrativeUiType} />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-[#e2dfd7] flex flex-wrap items-center justify-between gap-4 text-xs">
                      <div className="text-[#77756f]">
                        {project.deployment ? (
                          <span>Deployment Target: <strong className="text-[#0d0d0d] font-semibold">{project.deployment}</strong></span>
                        ) : (
                          <span>Source Verified in Resume</span>
                        )}
                      </div>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-[#0d0d0d] text-[#ffffff] font-semibold flex items-center gap-2 hover:bg-[#222222] transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Verified GitHub Repository</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-[#77756f] italic">
                          Internal / Private Repository Project
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
