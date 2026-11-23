"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CostEstimator from "@/components/CostEstimator";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BrandGuideModal from "@/components/BrandGuideModal";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  Server,
  Lock,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function PaketPage() {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0B192C]">
      {/* Sticky Header */}
      <Navbar onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Page Header / Breadcrumb Hero */}
      <section className="pt-10 pb-14 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0066FF] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#0066FF] font-bold">Paket Terima Beres</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investasi Transparan UMKM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight max-w-4xl mx-auto">
            Pilihan Paket Website Terima Beres <br />
            <span className="text-[#0066FF]">Tanpa Biaya Tersembunyi</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dapatkan website bisnis berkecepatan tinggi dengan sistem order & booking WhatsApp otomatis. Sudah termasuk domain resmi 1 tahun, cloud SSD fast server, dan SSL keamanan gratis.
          </p>

          {/* Quick value badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#0066FF]" /> Free Domain .com / .id
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Pengerjaan Cepat 7-14 Hari
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garansi Bebas Error
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Section */}
      <Pricing />

      {/* Detailed Comparison Matrix */}
      <Comparison />

      {/* Interactive Custom Calculator */}
      <CostEstimator />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Footer */}
      <Footer onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Brand Guide Modal */}
      <BrandGuideModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </main>
  );
}
