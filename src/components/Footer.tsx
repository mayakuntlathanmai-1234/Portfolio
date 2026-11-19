"use client";

import React from "react";
import { PROFILE } from "@/lib/data";
import { ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 border-t border-[#e2dfd7] bg-[#ffffff] text-xs text-[#77756f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#0d0d0d] text-[#ffffff] font-bold text-[10px] flex items-center justify-center">
            TM
          </span>
          <span className="font-semibold text-[#0d0d0d]">{PROFILE.name}</span>
          <span>© 2026 • All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#0d0d0d]" />
            <span>{PROFILE.location}</span>
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#f4f2ee] hover:bg-[#0d0d0d] hover:text-[#ffffff] text-[#0d0d0d] transition-colors flex items-center gap-1 font-semibold"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
