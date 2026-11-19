"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
      }

      // Check scroll threshold for navbar background
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer for active state
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Keyboard accessibility for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-[#e2dfd7]">
        <div
          className="h-full bg-[#0d0d0d] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#ffffff]/85 backdrop-blur-md border-b border-[#e2dfd7] py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Name Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-[#0d0d0d] font-semibold text-lg tracking-tight"
          >
            <span className="w-8 h-8 rounded-full bg-[#0d0d0d] text-[#ffffff] flex items-center justify-center font-bold text-xs tracking-wider">
              TM
            </span>
            <span className="group-hover:opacity-75 transition-opacity">
              Thanmai <span className="font-serif-accent font-normal text-[#77756f]">M.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "bg-[#0d0d0d] text-[#ffffff]"
                      : "text-[#77756f] hover:text-[#0d0d0d] hover:bg-[#e2dfd7]/50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PROFILE.resumePdf}
              download="Mayakuntla_Thanmai_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] bg-[#ffffff] border border-[#e2dfd7] rounded-full hover:bg-[#0d0d0d] hover:text-[#ffffff] hover:border-[#0d0d0d] transition-all shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0d0d0d] hover:bg-[#e2dfd7]/50 rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[50px] bg-[#ffffff] border-b border-[#e2dfd7] shadow-lg p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#0d0d0d] hover:bg-[#f4f2ee] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#77756f]" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e2dfd7] flex flex-col gap-2">
            <a
              href={PROFILE.resumePdf}
              download="Mayakuntla_Thanmai_Resume.pdf"
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#ffffff] bg-[#0d0d0d] rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
