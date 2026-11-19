"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROFILE, EDUCATION } from "@/lib/data";
import { GithubIcon } from "../Icons";
import { Download, RotateCw, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Pendulum swing physics
  const [angle, setAngle] = useState(0);
  const velocityRef = useRef(0);
  const positionRef = useRef(0);
  const targetAngleRef = useRef(0);

  useEffect(() => {
    let animFrame: number;

    const updatePhysics = () => {
      // Damped spring physics
      const springK = 0.05;
      const damping = 0.85;

      const force = (targetAngleRef.current - positionRef.current) * springK;
      velocityRef.current = (velocityRef.current + force) * damping;
      positionRef.current += velocityRef.current;

      // Add soft idle sway if resting
      if (Math.abs(positionRef.current) < 0.1 && Math.abs(velocityRef.current) < 0.01) {
        positionRef.current = Math.sin(Date.now() * 0.002) * 1.5;
      }

      setAngle(positionRef.current);
      animFrame = requestAnimationFrame(updatePhysics);
    };

    animFrame = requestAnimationFrame(updatePhysics);

    const handlePointerMove = (e: PointerEvent) => {
      const deltaX = (e.clientX - window.innerWidth / 2) / 100;
      targetAngleRef.current = Math.max(-12, Math.min(12, deltaX));
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#e9e6e0]">
      {/* Section Tag */}
      <div className="font-mono text-xs uppercase tracking-widest text-[#77756f] mb-3">
        02 — About me
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-12">
        Engineering with <span className="font-serif-accent text-[#77756f]">purpose.</span>
      </h2>

      {/* Three Column Grid: Equal Height */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] gap-8 items-stretch">
        {/* Left Column */}
        <div className="card-editorial p-8 rounded-3xl bg-[#ffffff] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0d0d0d]">Hi, I&apos;m {PROFILE.firstName}.</h3>
            <p className="text-sm text-[#77756f] leading-relaxed">
              {PROFILE.summary}
            </p>
            <p className="text-sm text-[#3a3a3a] leading-relaxed font-medium">
              Focused on developing reliable, secure applications and practical AI-powered systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#e9e6e0]">
            <a
              href={PROFILE.resumePdf}
              download="Mayakuntla_Thanmai_Resume.pdf"
              className="px-5 py-2.5 rounded-full bg-[#0d0d0d] text-[#ffffff] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#222222] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé ↓</span>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-transparent border border-[#0d0d0d] text-[#0d0d0d] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#0d0d0d] hover:text-[#ffffff] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>

        {/* Center Column: Hanging Lanyard ID Card */}
        <div className="flex flex-col items-center justify-start min-h-[460px]">
          {/* Lanyard Strap */}
          <div className="w-[30px] h-[56px] bg-[#0d0d0d] text-[#ffffff] overflow-hidden relative rounded-t-sm flex flex-col items-center justify-center shadow-md">
            <div className="animate-vertical-scroll text-[8px] font-mono whitespace-nowrap uppercase tracking-widest opacity-80">
              {PROFILE.name} • {PROFILE.title} •
            </div>
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full mt-1 bg-gray-200" />
          </div>

          {/* Card Frame with Pendulum Swing & 3D Flip */}
          <div
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: "top center",
              transition: "transform 0.1s ease-out",
            }}
            className="perspective-1000 w-[300px] h-[404px] cursor-pointer mt-1"
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsFlipped(!isFlipped);
              }
            }}
            tabIndex={0}
            aria-label="Developer ID Card. Click or press Enter to flip."
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 card-editorial rounded-[26px] bg-[#ffffff] border border-[#e9e6e0] p-5 shadow-xl backface-hidden flex flex-col justify-between">
                <div>
                  {/* Black top band */}
                  <div className="bg-[#0d0d0d] text-[#ffffff] text-[10px] font-mono font-bold tracking-widest uppercase py-1.5 px-3 rounded-t-xl text-center mb-4">
                    DEVELOPER ID
                  </div>

                  {/* Portrait 128x156 frame with gradient ring */}
                  <div className="w-[128px] h-[156px] mx-auto rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-gray-300 via-gray-100 to-gray-400 shadow-md mb-3 group">
                    <img
                      src="/portrait-bust.webp"
                      alt={PROFILE.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 filter grayscale"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center space-y-0.5">
                    <div className="text-base font-bold text-[#0d0d0d]">{PROFILE.name}</div>
                    <div className="text-[11px] text-[#77756f] font-mono">{PROFILE.title}</div>
                  </div>

                  {/* Specs Table */}
                  <div className="mt-3 space-y-1 text-[10px] font-mono text-[#3a3a3a]">
                    <div className="flex justify-between border-b border-[#e9e6e0] py-0.5">
                      <span>ID NO:</span>
                      <span className="font-bold">TM-2025-CSE</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e9e6e0] py-0.5">
                      <span>DEPT:</span>
                      <span>Computer Science</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span>VALID TILL:</span>
                      <span className="font-bold text-emerald-700">2028 (Graduation)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Barcode & Holographic Sticker */}
                <div className="pt-2 border-t border-[#e9e6e0] flex items-center justify-between">
                  <div className="h-4 w-32 bg-repeating-barcode opacity-75 rounded" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-200 to-cyan-200 opacity-80 border border-gray-300" />
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 card-editorial rounded-[26px] bg-[#0d0d0d] text-[#ffffff] p-6 shadow-2xl rotate-y-180 backface-hidden flex flex-col justify-between border border-[#333333]">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 border-b border-[#333333] pb-2 mb-4 flex items-center justify-between">
                    <span>WHAT I AM</span>
                    <RotateCw className="w-3.5 h-3.5 text-gray-400" />
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-300 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">►</span>
                      <span>{PROFILE.title}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">►</span>
                      <span>B.Tech CSE (SGPA 9.01 / 10)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">►</span>
                      <span>CareStream, GreenLoop, Urban Mobility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">►</span>
                      <span>AWS Certified Developer &amp; AI/ML Intern</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#333333] space-y-2 text-[10px] font-mono text-gray-400">
                  <div className="italic">Signature: M. Thanmai</div>
                  <div>If found, say hello · {PROFILE.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Facts */}
        <div className="card-editorial p-8 rounded-3xl bg-[#ffffff] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#77756f]">
              QUICK FACTS
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#f4f2ee] space-y-0.5">
                <span className="text-[#77756f] font-mono">Location</span>
                <div className="font-bold text-[#0d0d0d]">{PROFILE.location}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#f4f2ee] space-y-0.5">
                <span className="text-[#77756f] font-mono">Education</span>
                <div className="font-bold text-[#0d0d0d]">K L University (SGPA 9.01/10)</div>
              </div>

              <div className="p-3 rounded-xl bg-[#f4f2ee] space-y-0.5">
                <span className="text-[#77756f] font-mono">Specialization</span>
                <div className="font-bold text-[#0d0d0d]">Gen AI for Agentic Systems</div>
              </div>

              <div className="p-3 rounded-xl bg-[#f4f2ee] space-y-0.5">
                <span className="text-[#77756f] font-mono">Direct Email</span>
                <div className="font-bold text-[#0d0d0d]">{PROFILE.email}</div>
              </div>
            </div>
          </div>

          {/* Short Quote Paraphrasing Resume */}
          <blockquote className="pt-4 border-t border-[#e9e6e0] text-xs italic text-[#77756f] leading-relaxed">
            &ldquo;Building reliable, secure applications and practical AI-powered systems.&rdquo;
          </blockquote>
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
            #0d0d0d,
            #0d0d0d 2px,
            #ffffff 2px,
            #ffffff 5px
          );
        }
        @keyframes verticalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: verticalScroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
