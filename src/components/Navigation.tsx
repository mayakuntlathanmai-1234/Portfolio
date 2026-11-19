
"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";
import { useScrollProgress } from "@/lib/hooks";
import { scrollToTarget } from "@/lib/scroll";
import { X, Menu } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollProgress = useScrollProgress();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "work",
      "certifications",
      "experience",
      "achievements",
      "contact",
    ];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        {
          rootMargin: "-45% 0px -50% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Mobile scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navigation click
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Scroll Progress */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10">
        <div
          className="h-full bg-white transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navigation */}
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 py-5 transition-all duration-300 ${
          scrolled
            ? "mt-2 rounded-2xl border border-white/10 bg-black/85 shadow-xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
        aria-label="Main Navigation"
      >

        {/* Logo and Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-3"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-xs font-bold transition-all duration-300 group-hover:rotate-180 ${
              scrolled
                ? "border-white bg-white text-black"
                : "border-white/60 bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            TM
          </span>

          <span
            className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
              scrolled
                ? "text-white"
                : "text-white"
            }`}
          >
            {PROFILE.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden items-center gap-1 rounded-full p-1.5 backdrop-blur-xl transition-all duration-300 md:flex ${
            scrolled
              ? "border border-white/10 bg-white/5"
              : "border border-white/20 bg-black/20"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative z-10 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/75 hover:bg-white/15 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xl transition hover:bg-white hover:text-black md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#090909] p-7 text-white animate-in fade-in duration-300">

          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm font-bold tracking-wider">
              TM — NAVIGATION
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-black"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="my-auto space-y-5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-3xl font-bold tracking-tight transition-all duration-300 sm:text-5xl ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  <span className="mr-4 font-mono text-xs text-white/40">
                    0{index + 1}
                  </span>

                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Footer */}
          <div className="flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/50">
            <span>Explore my portfolio</span>

            <a
              href={PROFILE.resumePdf}
              download
              className="font-semibold text-white underline underline-offset-4"
            >
              Download Résumé
            </a>
          </div>

        </div>
      )}
    </header>
  );
}