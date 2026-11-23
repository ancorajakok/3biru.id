"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ServicesOverview from "@/components/ServicesOverview";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CostEstimator from "@/components/CostEstimator";
import Comparison from "@/components/Comparison";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BrandGuideModal from "@/components/BrandGuideModal";
import { blogArticles } from "@/data/blogArticles";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0B192C]">
      {/* Sticky Header with Navigation & Promo Banner */}
      <Navbar onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* 1. Hero Section: Headline tegas, CTA WhatsApp & Portofolio, Live Preview Dual Mockup */}
      <Hero />

      {/* 2. Filosofi 3 Pilar 3Biru: Pengerjaan Cepat, Harga Terjangkau UMKM, Fokus Konversi Penjualan */}
      <Pillars />

      {/* Layanan Inti: Website Bisnis, Katalog Produk Online, Sistem Booking WhatsApp */}
      <ServicesOverview />

      {/* 3. Portofolio Karya: Galeri Proyek Kuliner/Oleh-oleh, Klinik Medis, dengan 'Lihat Live Demo' */}
      <div className="relative">
        <Portfolio />
        {/* Banner Link to Full Portfolio Page */}
        <div className="pb-16 bg-white text-center">
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-[#0066FF] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 group"
          >
            <span>Buka Halaman Portofolio Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 4. Paket Layanan Terima Beres: Promo Harga Lengkap Domain, Hosting, Google */}
      <div className="relative">
        <Pricing />
        {/* Banner Link to Full Paket Page */}
        <div className="pb-16 bg-slate-50 text-center">
          <Link
            href="/paket"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 group"
          >
            <span>Buka Halaman Rincian Paket & Simulasi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Fitur Tambahan: Kalkulator Estimasi Kebutuhan & WhatsApp Generator */}
      <CostEstimator />

      {/* Tabel Komparasi: Mengapa 3Biru vs Jasa Lainnya */}
      <Comparison />

      {/* Section Khusus Cuplikan Blog / Artikel Bisnis Terbaru */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Edukasi & Wawasan Bisnis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                Artikel & Strategi Digital Terbaru
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Panduan praktis seputar SEO Google, sistem order WhatsApp, dan digitalisasi usaha.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066FF] hover:text-blue-700 transition-colors group"
            >
              <span>Buka Halaman Blog Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${art.categoryColor}`}
                    >
                      {art.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {art.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${art.slug}`}>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{art.date}</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-bold text-[#0066FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner High-Converting */}
      <CtaBanner />

      {/* 5. FAQ & Footer */}
      <FAQ />

      {/* Footer Lengkap */}
      <Footer onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Brand Identity & Vector Logo Modal */}
      <BrandGuideModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </main>
  );
}
