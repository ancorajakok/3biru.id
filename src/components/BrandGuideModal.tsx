"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import {
  X,
  Download,
  Copy,
  Check,
  Sparkles,
  Palette,
  Layers,
  Award,
} from "lucide-react";

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandGuideModal({
  isOpen,
  onClose,
}: BrandGuideModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const colorPalette = [
    {
      name: "Biru Tua (Navy Blue)",
      hex: "#0B192C",
      role: "Warna Utama / Fondasi Kepercayaan & Profesionalisme",
      class: "bg-[#0B192C] text-white",
    },
    {
      name: "Biru Royal (Vibrant Blue)",
      hex: "#2563EB",
      role: "Warna Sekunder / Kecepatan Eksekusi & Skalabilitas",
      class: "bg-[#2563EB] text-white",
    },
    {
      name: "Biru Elektrik (Bright Cyan)",
      hex: "#00D2FF",
      role: "Aksen Konversi / Inovasi & Hasil Penjualan",
      class: "bg-[#00D2FF] text-[#0B192C]",
    },
    {
      name: "Putih Bersih (Clean White)",
      hex: "#FFFFFF",
      role: "Latar Belakang / Kejernihan, Kerapian, & Kemudahan Baca",
      class: "bg-white text-slate-800 border border-slate-200",
    },
  ];

  const handleCopySVG = () => {
    const svgCode = `<svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="navy" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0B192C"/><stop offset="100%" stopColor="#1E3E62"/></linearGradient>
    <linearGradient id="royal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1D4ED8"/><stop offset="100%" stopColor="#2563EB"/></linearGradient>
    <linearGradient id="electric" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0066FF"/><stop offset="100%" stopColor="#00D2FF"/></linearGradient>
  </defs>
  <g transform="translate(10, 10)">
    <path d="M 22 18 C 22 14 26 12 29 14 L 68 34 C 71 36 71 40 68 42 L 35 60 C 26 65 14 58 14 48 L 14 28 C 14 22 18 18 22 18 Z" fill="url(#navy)"/>
    <path d="M 38 35 C 41 33 45 35 45 38 L 45 68 C 45 78 57 84 66 79 L 78 72 C 82 70 86 73 86 77 L 86 80 C 86 86 79 90 73 87 L 34 68 C 30 66 28 62 28 58 L 28 42 C 28 38 32 35 38 35 Z" fill="url(#royal)" opacity="0.95"/>
    <path d="M 34 26 L 68 42 C 73 44 76 50 74 55 L 68 68 C 66 72 61 74 57 72 L 40 63 C 35 60 32 55 33 50 L 36 34 C 36 30 31 27 28 29 L 26 30 C 23 31 22 28 24 26 L 30 20 C 31 19 33 19 34 26 Z" fill="url(#electric)"/>
  </g>
  <text x="125" y="70" font-family="sans-serif" font-weight="900" font-size="52" fill="#0066FF">3</text>
  <text x="156" y="70" font-family="sans-serif" font-weight="800" font-size="52" fill="#0B192C">Biru</text>
  <circle cx="272" cy="65" r="4.5" fill="#00D2FF"/>
  <text x="127" y="94" font-family="sans-serif" font-weight="700" font-size="13" letter-spacing="4" fill="#4B6282">DIGITAL STUDIO</text>
</svg>`;

    navigator.clipboard.writeText(svgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#070F1E] text-white p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base">
                Identitas Brand & Logo 3Biru Digital Studio
              </h3>
              <p className="text-[11px] text-cyan-300">
                Spesifikasi Resmi, Palet Warna & Filosofi Desain
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-8 bg-slate-50 flex-1 text-left">
          
          {/* Logo Showcase Variants */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0066FF]" />
              <span>Varian Logo 3Biru</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Variant 1: Light Background */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center min-h-[140px] text-center">
                <Logo size="lg" variant="dark" />
                <span className="text-[10px] text-slate-400 mt-4 uppercase tracking-wider font-semibold">
                  Versi Utama (Latar Putih Bersih)
                </span>
              </div>

              {/* Variant 2: Dark Background */}
              <div className="bg-[#0B192C] p-6 rounded-2xl border border-slate-800 shadow-2xs flex flex-col items-center justify-center min-h-[140px] text-center">
                <Logo size="lg" variant="light" />
                <span className="text-[10px] text-cyan-300/70 mt-4 uppercase tracking-wider font-semibold">
                  Versi Dark (Latar Biru Tua Navy)
                </span>
              </div>
            </div>
          </div>

          {/* Color Palette Guide */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#0066FF]" />
              <span>Palet Warna Resmi (3 Nuansa Biru & Putih)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {colorPalette.map((col, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-2xs flex flex-col justify-between"
                >
                  <div
                    className={`h-16 rounded-xl mb-3 flex items-center justify-center font-mono font-bold text-xs ${col.class}`}
                  >
                    {col.hex}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">{col.name}</h5>
                    <p className="text-[10px] text-slate-500 mt-1 leading-snug">{col.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meaning & Philosophy */}
          <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200 text-xs text-slate-700 space-y-2">
            <h5 className="font-bold text-[#0B192C] flex items-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              <span>Filosofi Logo & Lambang 3 Pilar 3Biru</span>
            </h5>
            <p className="leading-relaxed">
              Bentuk lambang monogram geometris 3 lapis melambangkan 3 pilar utama: <strong>Lapisan Pertama (Biru Tua)</strong> sebagai fondasi keamanan dan keandalan sistem bisnis; <strong>Lapisan Kedua (Biru Royal)</strong> sebagai kecepatan pengerjaan dan efisiensi teknologi; serta <strong>Lapisan Ketiga (Biru Elektrik Bercahaya)</strong> sebagai daya ungkit konversi penjualan dan pertumbuhan omset UMKM di era digital.
            </p>
          </div>

          {/* Official Channel Info */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">Instagram:</span>
              <strong className="text-slate-900 font-bold">@3biru.id</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">TikTok:</span>
              <strong className="text-slate-900 font-bold">@3biru.id</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">WhatsApp:</span>
              <strong className="text-slate-900 font-bold">0882-7678-4058</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Email Resmi:</span>
              <a href="mailto:3birudigital@gmail.com" className="text-[#0066FF] font-bold hover:underline truncate block">
                3birudigital@gmail.com
              </a>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Domain:</span>
              <strong className="text-[#0066FF] font-bold">3biru.id</strong>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Format Vektor SVG siap digunakan untuk keperluan cetak, banner, dan kartu nama.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopySVG}
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">SVG Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Kode SVG</span>
                </>
              )}
            </button>

            <a
              href="/logo.svg"
              download="3biru-logo.svg"
              className="flex-1 sm:flex-none px-4 py-2 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File logo.svg</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
