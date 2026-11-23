"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  Heart,
  Globe,
  ArrowUp,
} from "lucide-react";

export default function Footer({
  onOpenBrandModal,
}: {
  onOpenBrandModal?: () => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070F1E] text-white pt-16 pb-12 border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <Logo size="lg" variant="light" />
            </a>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-white">3Biru Digital Studio</strong> (3biru.id) adalah mitra agensi digital terpercaya yang berfokus membantu UMKM dan korporasi di seluruh Indonesia memiliki website modern, katalog produk interaktif, dan sistem pemesanan otomatis via WhatsApp.
            </p>

            {/* Pill Highlights */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-cyan-300">
              <span className="bg-blue-900/40 border border-blue-700/50 px-2.5 py-1 rounded-md">
                ⚡ Pengerjaan 7-14 Hari
              </span>
              <span className="bg-blue-900/40 border border-blue-700/50 px-2.5 py-1 rounded-md">
                💰 Harga Terjangkau UMKM
              </span>
              <span className="bg-blue-900/40 border border-blue-700/50 px-2.5 py-1 rounded-md">
                📈 Fokus Konversi
              </span>
            </div>

            {onOpenBrandModal && (
              <div className="pt-2">
                <button
                  onClick={onOpenBrandModal}
                  className="text-xs text-blue-400 hover:text-cyan-300 underline font-medium"
                >
                  Lihat Filosofi Warna & Download Logo Vektor 3Biru →
                </button>
              </div>
            )}
          </div>

          {/* Col 2: Navigation & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2FF]">›</span>
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2FF]">›</span>
                  <span>Paket Terima Beres</span>
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2FF]">›</span>
                  <span>Portofolio & Live Demo</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2FF]">›</span>
                  <span>Blog & Artikel Bisnis</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Resmi 3Biru
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20konsultasi%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">WhatsApp Resmi (Chat & Call):</div>
                  <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                    0882-7678-4058
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/3biru.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Akun Instagram Resmi:</div>
                  <div className="font-bold text-white group-hover:text-pink-300 transition-colors">
                    @3biru.id
                  </div>
                </div>
              </a>

              {/* TikTok Resmi */}
              <a
                href="https://tiktok.com/@3biru.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border border-slate-700 shadow-sm">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67a6.34 6.34 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.33V8.87a8.21 8.21 0 0 0 3.93 1.25V6.69z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Akun TikTok Resmi:</div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    @3biru.id
                  </div>
                </div>
              </a>

              {/* Email Resmi */}
              <a
                href="mailto:3birudigital@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/80 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#00D2FF] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Email Resmi:</div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    3birudigital@gmail.com
                  </div>
                </div>
              </a>

              {/* Location info */}
              <div className="flex items-start gap-2 text-slate-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>
                  Melayani Bisnis & UMKM Seluruh Indonesia (Jakarta, Surabaya, Medan, Bandung, Semarang, Bali, Makassar & Seluruh Kota)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Security Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong>3Biru Digital Studio</strong> (3biru.id). Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Aman & Terpercaya</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-[#0066FF] text-white transition-colors"
              title="Kembali ke Atas"
              aria-label="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
