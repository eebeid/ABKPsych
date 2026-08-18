"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { practiceConfig } from "@/config/practiceConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who I Work With", href: "/who-i-work-with" },
    { name: "Approach", href: "/approach" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#253344]/95 backdrop-blur-md border-b border-[#3B4C61] shadow-md py-3 text-[#FAFAFA]"
          : "bg-[#253344] py-4 border-b border-[#3B4C61]/80 text-[#FAFAFA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Practice Logo / Branding */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none"
          aria-label="abk psychological services, pllc Homepage"
        >
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#FAFAFA] lowercase group-hover:text-[#9BB1CB] transition-colors">
            {practiceConfig.practiceName}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#B8C5D6] font-semibold">
            {practiceConfig.doctorTitle} · Telehealth
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#9BB1CB] relative py-1 ${
                  isActive ? "text-[#9BB1CB]" : "text-[#FAFAFA]"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9BB1CB] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#4C607A] border border-[#7A8DA6]/50 rounded-sm transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#9BB1CB]"
          >
            Begin a Conversation
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-3">
          <Link
            href="/contact"
            className="md:hidden inline-flex items-center justify-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] rounded-sm"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAFAFA] hover:text-[#9BB1CB] rounded-md transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E2938] border-b border-[#3B4C61] px-4 pt-3 pb-5 space-y-2 animate-fade-in text-[#FAFAFA]">
          <div className="flex flex-col space-y-1 pb-3 border-b border-[#3B4C61]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-[#3B4C61] text-[#FAFAFA] font-semibold"
                      : "text-[#D5E0ED] hover:bg-[#253344]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#4C607A] rounded-sm transition-colors"
            >
              Begin a Conversation
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
