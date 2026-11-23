"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BrandGuideModal from "@/components/BrandGuideModal";
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function PortofolioPage() {
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
            <span className="text-[#0066FF] font-bold">Portofolio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contoh Desain & Demo Sistem Siap Pakai</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight max-w-4xl mx-auto">
            Portofolio Website Bisnis & <br />
            <span className="text-[#0066FF]">Sistem WhatsApp Otomatis</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi contoh website live siap pakai untuk bisnis oleh-oleh kuliner, klinik kesehatan, dan kafe modern. Klik tombol <strong>'Lihat Live Demo'</strong> untuk menguji alur pemesanan dan booking interaktif.
          </p>
        </div>
      </section>

      {/* Main Portfolio Showcase with Live Demos */}
      <Portfolio />

      {/* 4-Step Process Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Alur Kerja Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              Bagaimana 3Biru Membangun Website Anda?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              4 langkah praktis dari diskusi ide hingga website bisnis online siap menerima pesanan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Konsultasi & Pengumpulan Materi",
                desc: "Diskusi kebutuhan bisnis, pemilihan nama domain, serta pengumpulan foto produk dan daftar harga yang dipandu tim 3Biru.",
              },
              {
                step: "02",
                title: "Desain Kustom & Penataan Navigasi",
                desc: "Pembuatan antarmuka modern yang cepat, elegan, dan dirancang khusus memudahkan calon pembeli menekan tombol beli.",
              },
              {
                step: "03",
                title: "Integrasi WhatsApp & Google SEO",
                desc: "Pemasangan sistem format order/booking otomatis ke nomor WhatsApp bisnis Anda serta pendaftaran ke Google Search & Maps.",
              },
              {
                step: "04",
                title: "Peluncuran Resmi & Garansi",
                desc: "Website online aktif di domain resmi, video panduan penggunaan dikirimkan, dan garansi pemeliharaan teknis aktif.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#0066FF] mb-3">
                    {st.step}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

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
