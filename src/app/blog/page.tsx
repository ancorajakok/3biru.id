"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BrandGuideModal from "@/components/BrandGuideModal";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Tag,
} from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  const categories = [
    "all",
    "Strategi Digital",
    "WhatsApp & Penjualan",
    "Klinik & Medis",
    "Google SEO",
  ];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogArticles.find((a) => a.featured) || blogArticles[0];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0B192C]">
      {/* Sticky Header */}
      <Navbar onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Header Hero */}
      <section className="pt-10 pb-14 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0066FF] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#0066FF] font-bold">Blog & Artikel</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pusat Edukasi & Strategi Digital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight max-w-3xl mx-auto">
            Wawasan Praktis Meningkatkan <br />
            <span className="text-[#0066FF]">Penjualan & Reputasi Bisnis</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kumpulan artikel, tips optimasi Google Search, trik sistem order WhatsApp otomatis, dan panduan digitalisasi khusus untuk UMKM dan pemilik usaha di Indonesia.
          </p>

          {/* Search bar & filter pills */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari topik artikel (misal: WhatsApp, SEO, Toko Kuliner)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0B192C] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "Semua Topik" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="py-16 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Featured Article Card */}
          {selectedCategory === "all" && searchQuery === "" && featuredArticle && (
            <div className="bg-white rounded-3xl border-2 border-blue-200/90 shadow-md p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-xl transition-all">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0066FF] text-white">
                    ⭐ Artikel Pilihan
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${featuredArticle.categoryColor}`}
                  >
                    {featuredArticle.category}
                  </span>
                </div>

                <Link href={`/blog/${featuredArticle.slug}`}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B192C] hover:text-[#0066FF] transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
                  >
                    <span>Baca Artikel Lengkap</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Visual Badge */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0B192C] via-[#102A45] to-[#1E3E62] text-white p-7 rounded-2xl flex flex-col justify-between min-h-[220px]">
                <div className="space-y-2">
                  <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Rekomendasi Ahli 3Biru</span>
                  </span>
                  <h3 className="font-bold text-base sm:text-lg">
                    Pelajari Mengapa Website Menjadi Investasi Terbaik Bisnis Anda
                  </h3>
                  <p className="text-xs text-slate-300">
                    Bukan cuma soal keren, tapi tentang mendatangkan calon pembeli nyata dari Google.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Ditulis oleh: {featuredArticle.author}</span>
                  <span className="font-bold text-cyan-300">{featuredArticle.authorRole}</span>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {selectedCategory === "all"
                  ? "Semua Artikel Terbaru"
                  : `Artikel Kategori: ${selectedCategory}`}
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Menampilkan {filteredArticles.length} Artikel
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-slate-800">
                  Tidak ada artikel yang cocok
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Coba kata kunci lain atau pilih kategori Semua Topik.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#0066FF] shadow-2xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${article.categoryColor}`}
                        >
                          {article.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500">
                        <span className="block font-semibold text-slate-700">
                          {article.author}
                        </span>
                        <span>{article.date}</span>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0066FF] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Baca</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Consultation Box */}
          <div className="rounded-3xl bg-gradient-to-r from-[#070F1E] via-[#0B192C] to-[#102A45] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Konsultasi Strategi Gratis</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Ingin Menerapkan Tips di Atas untuk Bisnis Anda?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Diskusikan langsung bersama tim konsultan 3Biru Digital Studio melalui WhatsApp di <strong>0882-7678-4058</strong>. Tanpa komitmen, 100% gratis.
              </p>
            </div>

            <a
              href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20membaca%20artikel%20blog%20dan%20ingin%20konsultasi%20strategi%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 bg-[#0066FF] hover:bg-white hover:text-[#0B192C] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>

        </div>
      </section>

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
