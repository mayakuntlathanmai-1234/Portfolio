



"use client";


import React, { useRef, useState } from "react";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";
import { Download, ArrowDown, Mail, Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] w-full overflow-hidden bg-black text-white"
    >
      {/* FULL SCREEN BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={PROFILE.posterSrc}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero/hero.webm" type="video/webm" />
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">

        <div className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/70">
          Portfolio — 2026
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          THANMAI
          <br />
          MAYAKUNTLA
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-2xl">
          Full Stack Developer
          <span className="text-white/60"> & </span>
          AI Specialist.
        </p>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Building intelligent applications and meaningful digital
          experiences through modern web technologies and AI.
        </p>

        {/* BUTTONS */}
        <div className="mt-9 flex flex-wrap gap-4">

          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#work");
            }}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white/80"
          >
            Explore Work
            <ArrowDown size={16} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#contact");
            }}
            className="flex items-center gap-2 rounded-full border border-white/70 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
          >
            <Mail size={16} />
            Let's Talk
          </a>

          <a
            href={PROFILE.resumePdf}
            download="Mayakuntla_Thanmai_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-white/70 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/70 sm:flex">
          Scroll to explore
          <ArrowDown size={16} />
        </div>

      </div>

      {/* SOUND BUTTON */}
      <button
        onClick={toggleSound}
        className="absolute right-7 top-28 z-30 rounded-full border border-white/40 bg-black/30 p-4 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        aria-label={isMuted ? "Enable sound" : "Mute sound"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

    </section>
  );
}
