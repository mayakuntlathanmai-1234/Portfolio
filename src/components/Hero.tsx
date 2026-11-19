"use client";

import React, { useRef, useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { Volume2, VolumeX, ArrowDown, Download, Mail, Play, Pause } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check reduced motion setting
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // IntersectionObserver to pause video when hero is out of view
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hero is in view: play video if permitted
            if (!reducedMotion) {
              video.play().catch(() => {
                // Autoplay policy fallback
                setIsPlaying(false);
              });
              setIsPlaying(true);
            }
          } else {
            // Hero is out of view: pause video to save battery and resources
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-editorial-grid overflow-hidden"
    >
      {/* Background Large Outlined Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-10 font-bold tracking-tighter text-center"
        aria-hidden="true"
      >
        <span className="text-[15vw] sm:text-[18vw] leading-none uppercase stroke-text font-sans">
          THANMAI
        </span>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px #0d0d0d;
          color: transparent;
        }
      `}</style>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        {/* Specialization Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#e2dfd7] shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0d0d0d] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#77756f]">
              Full Stack Developer & AI Specialist
            </span>
          </div>
        </ScrollReveal>

        {/* Main Hero Title */}
        <ScrollReveal delay="100">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0d0d0d] max-w-4xl leading-[1.08] mb-6">
            Hi, I&apos;m <span className="underline decoration-1 underline-offset-8 decoration-[#c8c5bc]">Thanmai Mayakuntla</span>.
            <br />
            Building <span className="font-serif-accent font-normal text-[#44433e]">reliable</span> full-stack &amp; AI systems.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay="200">
          <p className="text-base sm:text-lg text-[#77756f] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Computer Science student specializing in <strong className="text-[#0d0d0d] font-semibold">Generative AI for Agentic &amp; Multimodal Intelligence</strong>. Engineering production-ready React apps, Spring Boot microservices, and local AI document workflows.
          </p>
        </ScrollReveal>

        {/* Talking Video Container - Centerpiece */}
        <ScrollReveal delay="300" className="w-full max-w-3xl my-4">
          <div className="relative group rounded-2xl bg-[#ffffff] p-2 sm:p-3 border border-[#e2dfd7] shadow-xl overflow-hidden transition-all duration-300">
            {/* Video Frame */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#f4f2ee] flex items-center justify-center">
              <video
                ref={videoRef}
                src={PROFILE.videoSrc}
                poster={PROFILE.posterSrc}
                playsInline
                autoPlay
                muted={isMuted}
                loop
                onLoadedData={() => setVideoLoaded(true)}
                className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-500"
                aria-label="Thanmai Mayakuntla introduction video"
              />

              {/* Mute / Audio Toggle Overlay Button */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={togglePlayPause}
                  className="p-2.5 rounded-full bg-[#0d0d0d]/80 text-[#ffffff] hover:bg-[#0d0d0d] backdrop-blur-md transition-all shadow-md flex items-center justify-center"
                  aria-label={isPlaying ? "Pause introduction video" : "Play introduction video"}
                  title={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0d0d0d]/80 text-[#ffffff] hover:bg-[#0d0d0d] backdrop-blur-md transition-all shadow-md text-xs font-medium"
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-red-300" />
                      <span>Unmute Intro</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span className="flex items-center gap-1">
                        <span>Audio On</span>
                        <span className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 bg-emerald-400 animate-soundwave-1" />
                          <span className="w-0.5 bg-emerald-400 animate-soundwave-2" />
                          <span className="w-0.5 bg-emerald-400 animate-soundwave-3" />
                        </span>
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Video Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#ffffff]/90 text-[#0d0d0d] text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-[#e2dfd7] shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Interactive Intro</span>
              </div>
            </div>

            {/* Sub-caption below video */}
            <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#77756f]">
              <span>Original Video Presentation</span>
              <span>Aspect Ratio: 16:9 • 1080p HD</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay="400" className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-full bg-[#0d0d0d] text-[#ffffff] text-sm font-semibold tracking-wide hover:bg-[#222222] transition-all shadow-md flex items-center gap-2 group"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-[#ffffff] text-[#0d0d0d] text-sm font-semibold tracking-wide border border-[#e2dfd7] hover:border-[#0d0d0d] transition-all shadow-2xs flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#77756f]" />
            <span>Let&apos;s Talk</span>
          </a>

          <a
            href={PROFILE.resumePdf}
            download="Mayakuntla_Thanmai_Resume.pdf"
            className="px-6 py-3.5 rounded-full bg-[#ffffff] text-[#0d0d0d] text-sm font-semibold tracking-wide border border-[#e2dfd7] hover:bg-[#f4f2ee] transition-all shadow-2xs flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-[#77756f]" />
            <span>Download Resume</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
