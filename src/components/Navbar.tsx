"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { MessageCircle, Menu, X, ArrowRight, Sparkles, PhoneCall, Mail } from "lucide-react";

export default function Navbar({
  onOpenBrandModal,
}: {
  onOpenBrandModal?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket", href: "/paket" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Blog / Artikel", href: "/blog" },
  ];

  return (
    <>
      {/* Top Banner Promo Bar */}
      <div className="bg-[#070F1E] text-white text-xs py-2 px-4 border-b border-blue-900/40 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0066FF] text-[10px] font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-cyan-300" /> Promo Spesial
            </span>
            <span className="text-slate-300">
              Gratis Domain .com + Integrasi Google Bisnisku untuk 10 UMKM Pertama Bulan Ini!
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <a
              href="mailto:3birudigital@gmail.com"
              className="hover:text-cyan-300 transition-colors hidden md:flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>3birudigital@gmail.com</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="https://instagram.com/3biru.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors flex items-center gap-1 font-medium"
            >
              <span>IG: @3biru.id</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="https://tiktok.com/@3biru.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors hidden sm:flex items-center gap-1 font-medium"
            >
              <span>TikTok: @3biru.id</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20tertarik%20dengan%20promo%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium text-emerald-400"
            >
              <PhoneCall className="w-3 h-3" />
              <span>0882-7678-4058</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size="md" variant="dark" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all px-3.5 py-2 rounded-xl flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#0066FF] bg-blue-50 border border-blue-200/80 shadow-2xs"
                      : "text-slate-700 hover:text-[#0066FF] hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenBrandModal && (
              <button
                onClick={onOpenBrandModal}
                className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#0066FF] hover:bg-blue-50 rounded-lg transition-colors border border-slate-200"
                title="Lihat Makna Logo 3Biru"
              >
                Lihat Logo
              </button>
            )}

            <a
              href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20bisnis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#0066FF] text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MessageCircle className="w-4 h-4 text-[#00D2FF] group-hover:text-white transition-colors" />
              <span>Konsultasi WA</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-50 text-emerald-600 rounded-lg sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50 text-[#0066FF] border border-blue-200"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {onOpenBrandModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandModal();
                  }}
                  className="w-full text-center py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-xl"
                >
                  Detail Makna & Download Logo 3Biru
                </button>
              )}

              <a
                href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20bisnis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0066FF] text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Chat WhatsApp: 0882-7678-4058</span>
              </a>

              <div className="text-center text-xs text-slate-500 mt-1 space-y-0.5">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:3birudigital@gmail.com"
                    className="font-semibold text-slate-800 hover:text-[#0066FF]"
                  >
                    3birudigital@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>IG: <a href="https://instagram.com/3biru.id" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0066FF]">@3biru.id</a></span>
                  <span>•</span>
                  <span>TikTok: <a href="https://tiktok.com/@3biru.id" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0066FF]">@3biru.id</a></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
