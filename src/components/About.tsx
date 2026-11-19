"use client";

import React, { useState } from "react";
import { PROFILE, EDUCATION } from "@/lib/data";
import { GraduationCap, Award, MapPin, Mail, Phone, FileText, CheckCircle2, RotateCw, QrCode, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e2dfd7]">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">01 / About Me</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mt-2">
              Engineering with <span className="font-serif-accent font-normal text-[#44433e]">purpose</span> &amp; precision.
            </h2>
          </div>
          <p className="text-sm text-[#77756f] max-w-md mt-4 md:mt-0 leading-relaxed">
            Combining enterprise full-stack web architecture with local agentic AI capabilities to create reliable software.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive 3D Flipping ID Card */}
        <ScrollReveal className="lg:col-span-4" delay="100">
          <div className="perspective-1000 w-full min-h-[460px]">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* --- FRONT SIDE --- */}
              <div className="card-editorial p-6 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#f4f2ee]/50 backface-hidden shadow-lg flex flex-col justify-between h-full">
                <div>
                  {/* ID Header Tag */}
                  <div className="flex items-center justify-between border-b border-[#e2dfd7] pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#0d0d0d] uppercase">
                        Developer ID Card
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-[10px] font-mono text-[#77756f] uppercase flex items-center gap-1 hover:text-[#0d0d0d] transition-colors"
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>Flip</span>
                    </button>
                  </div>

                  {/* Portrait Image Frame */}
                  <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-4 border border-[#e2dfd7] bg-[#f4f2ee]">
                    <img
                      src={PROFILE.posterSrc}
                      alt="Mayakuntla Thanmai Portrait"
                      className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[#0d0d0d]/85 text-[#ffffff] text-[10px] font-mono backdrop-blur-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{PROFILE.name}</span>
                    </div>
                  </div>

                  {/* Identity Specs */}
                  <div className="space-y-2.5 text-xs text-[#77756f]">
                    <div className="flex justify-between py-1 border-b border-[#e2dfd7]/60">
                      <span className="font-medium text-[#0d0d0d]">Specialization:</span>
                      <span className="text-right">Gen AI &amp; Agentic Systems</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#e2dfd7]/60">
                      <span className="font-medium text-[#0d0d0d]">Location:</span>
                      <span>{PROFILE.location}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#e2dfd7]/60">
                      <span className="font-medium text-[#0d0d0d]">Primary Stack:</span>
                      <span>React, Spring Boot, Python</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-[#0d0d0d]">Academic Standout:</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        SGPA 9.01 / 10
                      </span>
                    </div>
                  </div>
                </div>

                {/* Flip Prompt Footer */}
                <div className="mt-4 pt-3 border-t border-[#e2dfd7] flex items-center justify-between text-[11px] font-mono text-[#77756f]">
                  <span>Click card to flip</span>
                  <RotateCw className="w-3.5 h-3.5 text-[#0d0d0d] animate-spin-slow" />
                </div>
              </div>

              {/* --- BACK SIDE --- */}
              <div className="absolute inset-0 card-editorial p-6 rounded-2xl bg-[#0d0d0d] text-[#ffffff] rotate-y-180 backface-hidden shadow-2xl flex flex-col justify-between border border-[#333333]">
                <div>
                  <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#ffffff] uppercase">
                        Credential Matrix
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-[10px] font-mono text-gray-400 uppercase flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>Back</span>
                    </button>
                  </div>

                  {/* QR & Barcode Simulation */}
                  <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#333333] mb-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-gray-400">STUDENT ID REGISTRATION</div>
                        <div className="text-xs font-mono font-bold text-emerald-400">K L UNIVERSITY • B.TECH CSE</div>
                      </div>
                      <QrCode className="w-8 h-8 text-[#ffffff]" />
                    </div>

                    <div className="h-6 w-full bg-repeating-barcode opacity-70 rounded" />
                  </div>

                  <div className="space-y-3 text-xs text-gray-300">
                    <div className="p-2.5 rounded bg-[#1a1a1a] border border-[#333333] flex justify-between items-center">
                      <span className="text-gray-400">Current Standing:</span>
                      <span className="font-bold text-white">3rd Year B.Tech CSE</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#1a1a1a] border border-[#333333] flex justify-between items-center">
                      <span className="text-gray-400">Academic Score:</span>
                      <span className="font-bold text-emerald-400">9.01 / 10.0 SGPA</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#1a1a1a] border border-[#333333] flex justify-between items-center">
                      <span className="text-gray-400">Key Domain:</span>
                      <span className="font-bold text-white">Agentic &amp; Multimodal Gen AI</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links on Back */}
                <div className="pt-4 border-t border-[#333333] flex items-center gap-2">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#ffffff] text-[#0d0d0d] text-xs font-bold transition-all flex items-center justify-center gap-1.5 hover:bg-gray-200"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#222222] text-[#ffffff] text-xs font-medium border border-[#444444] transition-all flex items-center justify-center gap-1.5 hover:bg-[#333333]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Bio & Quick Facts */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Bio Paragraph */}
          <ScrollReveal delay="200">
            <div className="card-editorial p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-[#0d0d0d] tracking-tight">
                About My Background &amp; Engineering Focus
              </h3>
              <p className="text-base text-[#77756f] leading-relaxed">
                {PROFILE.summary}
              </p>
              <p className="text-base text-[#77756f] leading-relaxed">
                My technical philosophy centers on building <strong className="text-[#0d0d0d]">decoupled, secure architectures</strong>. From building RESTful microservices with Spring Boot to prototyping on-premise Retrieval-Augmented Generation (RAG) agentic pipelines with FastAPI and ChromaDB, I prioritize reliability, clear data flow, and practical problem solving.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Facts Grid */}
          <ScrollReveal delay="300">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#77756f] mb-4">
              Quick Facts &amp; Key Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="card-editorial p-4 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0d0d0d] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-[#77756f] font-medium">{fact.label}</div>
                    <div className="text-sm font-bold text-[#0d0d0d] mt-0.5">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Education Overview */}
          <ScrollReveal delay="400">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#77756f] mb-4">
              Academic Qualifications
            </h4>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="card-editorial p-6 rounded-xl space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#0d0d0d]" />
                      <h5 className="text-base font-bold text-[#0d0d0d]">{edu.institution}</h5>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#f4f2ee] text-[#0d0d0d] font-semibold border border-[#e2dfd7]">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#0d0d0d]">{edu.degree}</div>
                  {edu.specialization && (
                    <div className="text-xs text-[#77756f] font-mono">{edu.specialization}</div>
                  )}
                  {edu.score && (
                    <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 inline-block px-2 py-0.5 rounded border border-emerald-200">
                      {edu.score}
                    </div>
                  )}
                  <p className="text-xs text-[#77756f] leading-relaxed pt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .bg-repeating-barcode {
          background-image: repeating-linear-gradient(
            90deg,
            #ffffff,
            #ffffff 2px,
            #1a1a1a 2px,
            #1a1a1a 5px
          );
        }
      `}</style>
    </section>
  );
}
