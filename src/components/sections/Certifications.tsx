"use client";

import React from "react";
import { CERTIFICATIONS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-[#ffffff] border-y border-[#e9e6e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#77756f]">
              05 — Certifications
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d]">
              Always <span className="font-serif-accent text-[#77756f]">learning.</span>
            </h2>

            <p className="font-mono text-xs text-[#77756f]">
              0{CERTIFICATIONS.length} Verified Credentials
            </p>
          </div>

          {/* Right Column: Ink-Flood Index Rows */}
          <div className="lg:col-span-7 space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={cert.title}
                tabIndex={0}
                className="relative group p-6 sm:p-8 rounded-2xl border border-[#e9e6e0] cursor-pointer overflow-hidden transition-colors duration-300"
              >
                {/* Ink-flood background effect */}
                <div className="absolute inset-0 bg-[#0d0d0d] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100 -z-0" />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between group-hover:text-[#ffffff] group-focus:text-[#ffffff] transition-colors duration-300">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#77756f] group-hover:text-gray-300 transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#77756f] group-hover:text-gray-300 transition-colors">
                        {cert.type} • {cert.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0d0d0d] group-hover:text-[#ffffff] group-focus:text-[#ffffff] transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[#77756f] group-hover:text-gray-300 transition-colors">
                      {cert.issuer}
                    </p>
                  </div>

                  <ArrowUpRight className="w-6 h-6 text-[#0d0d0d] transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#ffffff] transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
