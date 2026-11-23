"use client";

import React from "react";
import { MessageCircle, Sparkles, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#070F1E] via-[#0B192C] to-[#102A45] text-white relative overflow-hidden">
      {/* Decorative blurred glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Wujudkan Website Impian Bisnis Anda Sekarang</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Siap Tampil Lebih Kredibel di Google &{" "}
          <span className="text-[#00D2FF]">Kebanjiran Pesanan via WhatsApp?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
          Jangan biarkan calon pelanggan lari ke kompetitor hanya karena usaha Anda belum punya website resmi. Dapatkan website modern terima beres berkecepatan tinggi dari <strong>3Biru Digital Studio</strong> hari ini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20siap%20membuat%20website%20bisnis%20dan%20ingin%20konsultasi%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-4 rounded-xl font-black text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all duration-200 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
            <span>Chat WhatsApp: 0882-7678-4058</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="https://instagram.com/3biru.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-4 rounded-xl font-bold text-sm sm:text-base backdrop-blur-sm transition-all"
          >
            <span>IG: @3biru.id</span>
          </a>

          <a
            href="https://tiktok.com/@3biru.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/20 px-5 py-4 rounded-xl font-bold text-sm sm:text-base backdrop-blur-sm transition-all"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67a6.34 6.34 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.33V8.87a8.21 8.21 0 0 0 3.93 1.25V6.69z"/>
            </svg>
            <span>TikTok: @3biru.id</span>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Konsultasi Teknis 100% Gratis</span>
          </span>
          <span>•</span>
          <span>Garansi Pengerjaan Tepat Waktu</span>
          <span>•</span>
          <span>Melayani Seluruh Indonesia</span>
        </div>

      </div>
    </section>
  );
}
