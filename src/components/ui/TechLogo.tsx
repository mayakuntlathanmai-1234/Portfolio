"use client";

import React from "react";

const BRAND_LOGOS: Record<string, { svg: React.ReactNode; glowColor: string }> = {
  Java: {
    glowColor: "rgba(224, 45, 45, 0.25)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#E02D2D]">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.87.189 4.872-.218 0 0 .611.393 1.503.682-2.316.812-6.529.626-7.028-.178zm.24-2.327s-1.22.673.49.816c2.091.175 3.738.163 6.136-.29 0 0 .428.373 1.05.58-3.08.797-7.94.614-7.676-1.106zm7.202-3.136c.725.707.391 1.488-.135 2.164.88-.707.781-1.393.135-2.164zm-5.744.116s-2.02.668-3.238 1.485c.677-.282 2.152-.779 3.238-1.485z" />
      </svg>
    ),
  },
  Python: {
    glowColor: "rgba(55, 118, 171, 0.25)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#3776AB]">
        <path d="M11.898 0C5.88 0 6.27 2.618 6.27 2.618l.006 2.71h5.753v.822H3.945s-3.945.444-3.945 6.012c0 5.568 3.441 5.37 3.441 5.37h2.056v-2.888s-.111-3.441 3.386-3.441h5.811s3.275.05 3.275-3.163V2.618S18.528 0 11.898 0zm-2.4 1.745a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12.1 24c6.018 0 5.628-2.618 5.628-2.618l-.006-2.71h-5.753v-.822h8.083s3.945-.444 3.945-6.012c0-5.568-3.441-5.37-3.441-5.37h-2.056v2.888s.111 3.441-3.386 3.441H9.303s-3.275-.05-3.275 3.163v6.082S5.472 24 12.1 24zm2.4-1.745a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" />
      </svg>
    ),
  },
  React: {
    glowColor: "rgba(97, 218, 251, 0.3)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#61DAFB]">
        <circle cx="12" cy="12" r="2.05" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  "Spring Boot": {
    glowColor: "rgba(109, 179, 63, 0.3)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#6DB33F]">
        <path d="M11.968 0a11.968 11.968 0 0 0-11.968 11.968A11.968 11.968 0 0 0 11.968 24a11.968 11.968 0 0 0 11.968-11.968A11.968 11.968 0 0 0 11.968 0zm-1.84 4.887h3.68v2.453h-3.68V4.887zm-.92 4.09h5.52v2.453h-5.52V8.977zm-1.84 4.088h9.2v2.453h-9.2v-2.453z" />
      </svg>
    ),
  },
  FastAPI: {
    glowColor: "rgba(5, 153, 139, 0.3)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#05998B]">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.09 17.5l-1.09.91v-4.91h-2.18l3.27-6.55v4.91h2.18l-2.18 5.64z" />
      </svg>
    ),
  },
  MySQL: {
    glowColor: "rgba(68, 121, 161, 0.3)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#4479A1]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    ),
  },
};

const CONCEPT_LOGOS: Record<string, React.ReactNode> = {
  "Data Structures & Algorithms": (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z" />
    </svg>
  ),
  "Generative AI": (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  "RAG Architecture": (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
};

export function isBrand(name: string): boolean {
  return name in BRAND_LOGOS;
}

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechLogo({ name, className = "w-6 h-6", size }: TechLogoProps) {
  if (name in BRAND_LOGOS) {
    const brand = BRAND_LOGOS[name];
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div
          className="absolute inset-0 rounded-full blur-md opacity-40 transition-opacity"
          style={{ backgroundColor: brand.glowColor }}
        />
        <div className="relative z-10 w-full h-full">{brand.svg}</div>
      </div>
    );
  }

  if (name in CONCEPT_LOGOS) {
    return <div className={`text-[#0d0d0d] ${className}`}>{CONCEPT_LOGOS[name]}</div>;
  }

  // Default fallback code icon
  return (
    <svg viewBox="0 0 24 24" className={`stroke-current fill-none ${className}`} strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}
