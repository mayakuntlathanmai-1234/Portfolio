"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { GithubIcon } from "../Icons";
import IllustrativeUiMockup from "../IllustrativeUiMockup";
import { Plus, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function WorkSection() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e9e6e0]">
      {/* Section Tag */}
      <div className="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-3">
        04 — Selected work
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-12">
        Things I&apos;ve <span className="font-serif-accent text-[#77756f]">built.</span>
      </h2>

      {/* Desktop Layout: Side-by-side expanding panels (height: min(78svh, 600px)) */}
      <div className="hidden lg:flex items-stretch gap-4 h-[min(78svh,600px)] w-full">
        {PROJECTS.map((project, idx) => {
          const isOpen = activeId === project.id;
          return (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              onFocus={() => setActiveId(project.id)}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              style={{ flex: isOpen ? 8 : 1 }}
              className={`card-editorial rounded-3xl p-6 transition-all duration-500 ease-out cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isOpen ? "bg-[#ffffff] border border-[#0d0d0d] shadow-xl" : "bg-[#f4f2ee] hover:bg-[#ffffff]"
              }`}
            >
              {!isOpen ? (
                /* Collapsed Slim Spine */
                <div className="h-full flex flex-col justify-between items-center py-4">
                  <span className="font-mono text-xs text-[#77756f]">0{idx + 1}</span>

                  <div className="writing-mode-vertical rotate-180 font-bold text-sm text-[#0d0d0d] tracking-wider uppercase whitespace-nowrap">
                    {project.title}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#0d0d0d] text-[#ffffff] flex items-center justify-center transition-transform group-hover:rotate-45">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              ) : (
                /* Open Panel Details */
                <div className="h-full grid grid-cols-12 gap-6 items-stretch animate-in fade-in duration-500">
                  {/* Left Side Details */}
                  <div className="col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] border border-[#e9e6e0]">
                          0{idx + 1}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#77756f]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#0d0d0d] tracking-tight mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#3a3a3a] leading-relaxed line-clamp-3 mb-4">
                        {project.overview}
                      </p>

                      {/* 2-column Feature List */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#0d0d0d]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Tech Chips & GitHub Link */}
                    <div className="pt-3 border-t border-[#e9e6e0] space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[#f4f2ee] text-[#0d0d0d] text-[10px] font-mono border border-[#e9e6e0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0d0d] text-[#ffffff] text-xs font-semibold uppercase tracking-wider hover:bg-[#222222] transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View on GitHub ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side Illustrative Mini-UI */}
                  <div className="col-span-5 flex flex-col justify-center clip-wipe">
                    <IllustrativeUiMockup type={project.illustrativeUiType} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Layout: Vertical Accordion */}
      <div className="lg:hidden space-y-4">
        {PROJECTS.map((project, idx) => {
          const isOpen = activeId === project.id;
          return (
            <div
              key={project.id}
              onClick={() => setActiveId(isOpen ? "" : project.id)}
              className="card-editorial rounded-2xl p-6 bg-[#ffffff] border border-[#e9e6e0]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#77756f] mr-2">0{idx + 1}</span>
                  <span className="font-bold text-lg text-[#0d0d0d]">{project.title}</span>
                </div>
                <Plus className={`w-5 h-5 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </div>

              {isOpen && (
                <div className="mt-4 pt-4 border-t border-[#e9e6e0] space-y-4 animate-in fade-in">
                  <p className="text-xs text-[#3a3a3a] leading-relaxed">{project.overview}</p>
                  <IllustrativeUiMockup type={project.illustrativeUiType} />
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0d0d] text-[#ffffff] text-xs font-semibold uppercase"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View on GitHub ↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
        .clip-wipe {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
    </section>
  );
}
