"use client";

import React, { useState } from "react";
import {
  Check,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Zap,
  Globe,
  Server,
  Lock,
  Search,
  HelpCircle,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"promo">("promo");

  const packages = [
    {
      id: "starter",
      name: "Starter UMKM",
      badge: "Hemat & Cepat",
      badgeColor: "bg-slate-100 text-slate-800",
      target: "Cocok untuk usaha rumahan, f&b lokal, jasa personal, & promosi produk tunggal",
      promoPrice: "799.000",
      normalPrice: "1.500.000",
      savePercent: "Hemat 47%",
      deliveryDays: "3 - 5 Hari Kerja",
      isPopular: false,
      whatsappText: "Halo 3Biru Digital Studio, saya ingin pesan Paket Starter UMKM (Rp 799.000)",
      features: [
        { text: "1 Halaman Landing Page High-Converting", highlight: true },
        { text: "Gratis Domain (.com / .my.id) 1 Tahun", highlight: true },
        { text: "Cloud SSD Hosting Kecepatan Tinggi (Included)", highlight: true },
        { text: "Sertifikat Keamanan SSL (HTTPS Resmi)", highlight: false },
        { text: "Tombol WhatsApp Order Mengambang (Floating)", highlight: false },
        { text: "Integrasi Google Maps & Alamat Bisnis", highlight: false },
        { text: "Tampilan 100% Responsif di HP & Laptop", highlight: false },
        { text: "Panduan Video Cara Update Konten", highlight: false },
        { text: "Garansi Teknis & Maintenance 30 Hari", highlight: false },
      ],
    },
    {
      id: "bisnis",
      name: "Bisnis Katalog & WhatsApp",
      badge: "Paling Banyak Dipilih ⭐",
      badgeColor: "bg-[#0066FF] text-white",
      target: "Cocok untuk toko oleh-oleh, fashion, kuliner, retail, & katalog puluhan produk",
      promoPrice: "1.499.000",
      normalPrice: "2.800.000",
      savePercent: "Hemat 46%",
      deliveryDays: "7 - 10 Hari Kerja",
      isPopular: true,
      whatsappText: "Halo 3Biru Digital Studio, saya ingin pesan Paket Bisnis Katalog WhatsApp (Rp 1.499.000)",
      features: [
        { text: "Website Multi-Halaman (Hingga 5-8 Halaman)", highlight: true },
        { text: "Sistem Katalog Produk & Keranjang Belanja WA", highlight: true },
        { text: "Checkout Otomatis Format Pesanan Rapi ke WA", highlight: true },
        { text: "Gratis Domain (.com / .id) Resmi 1 Tahun", highlight: true },
        { text: "Cloud Hosting Ultra Fast NVMe Unlimited Traffic", highlight: false },
        { text: "Integrasi Google Search Console & Google Bisnisku", highlight: true },
        { text: "1 Alamat Email Bisnis Resmi (nama@usaha.com)", highlight: false },
        { text: "Optimasi SEO Lokal untuk Toko Sekitar", highlight: false },
        { text: "Garansi & Pemeliharaan Teknis 6 Bulan", highlight: false },
      ],
    },
    {
      id: "corporate",
      name: "Pro Corporate & Booking",
      badge: "Solusi Terlengkap",
      badgeColor: "bg-emerald-100 text-emerald-800",
      target: "Cocok untuk klinik kesehatan, dokter spesialis, perusahaan kontraktor B2B, & konsultan",
      promoPrice: "2.999.000",
      normalPrice: "5.500.000",
      savePercent: "Hemat 45%",
      deliveryDays: "10 - 14 Hari Kerja",
      isPopular: false,
      whatsappText: "Halo 3Biru Digital Studio, saya ingin pesan Paket Pro Corporate & Booking Medis (Rp 2.999.000)",
      features: [
        { text: "Sistem Booking Jadwal / Reservasi Tiket WA", highlight: true },
        { text: "Unlimited Halaman & Galeri Portofolio Proyek", highlight: true },
        { text: "Multi-Admin WhatsApp Router (Rotasi CS Otomatis)", highlight: true },
        { text: "Domain Pilihan Premium (.com / .co.id / .id)", highlight: true },
        { text: "Cloud VPS Managed Server Bandwidth Prioritas", highlight: false },
        { text: "Full Setup Google Analytics, Tag Manager & Pixel", highlight: false },
        { text: "Hingga 5 Akun Email Bisnis Resmi (@perusahaan.com)", highlight: false },
        { text: "Fitur Unduh Brosur/Company Profile PDF", highlight: false },
        { text: "Garansi Teknis VIP & Support Prioritas 1 Tahun", highlight: true },
      ],
    },
  ];

  return (
    <section id="harga" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-emerald-600" />
            <span>Paket Layanan Terima Beres</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight">
            Investasi Website Transparan, <br className="hidden sm:inline" />
            <span className="text-[#0066FF]">Tanpa Biaya Tersembunyi</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Semua paket dari <strong>3Biru Digital Studio</strong> sudah siap pakai: kami yang urus domain, cloud hosting, sertifikat keamanan, hingga sistem pesan WhatsApp otomatis. Anda tinggal terima beres dan fokus melayani pelanggan.
          </p>

          {/* Included in ALL badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#0066FF]" /> Gratis Domain 1 Tahun
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Server className="w-3.5 h-3.5 text-emerald-600" /> Cloud Fast SSD Server
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Search className="w-3.5 h-3.5 text-amber-600" /> Terindeks Google
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-blue-600" /> SSL HTTPS Resmi
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between ${
                pkg.isPopular
                  ? "border-2 border-[#0066FF] shadow-2xl shadow-blue-500/15 md:-translate-y-2 ring-4 ring-blue-500/10"
                  : "border-2 border-slate-200/90 hover:border-blue-300 shadow-sm"
              }`}
            >
              {/* Popular Badge on Top */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-cyan-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paling Diminati UMKM</span>
                </div>
              )}

              {/* Card Header */}
              <div className="p-7 sm:p-8 border-b border-slate-100">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {pkg.savePercent}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0B192C]">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[36px]">{pkg.target}</p>

                {/* Price Display */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-400 line-through">
                      Rp {pkg.normalPrice}
                    </span>
                    <span className="text-xs font-bold text-red-500">Harga Promo</span>
                  </div>

                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-slate-500">Rp</span>
                    <span className="text-4xl font-black text-[#0B192C] tracking-tight">
                      {pkg.promoPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ paket</span>
                  </div>

                  <div className="mt-2 text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Waktu Pengerjaan: {pkg.deliveryDays}</span>
                  </div>
                </div>
              </div>

              {/* Card Features List */}
              <div className="p-7 sm:p-8 flex-1 space-y-3.5 bg-slate-50/50">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Sudah Termasuk Fitur:
                </div>

                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        feat.highlight
                          ? "bg-blue-100 text-[#0066FF]"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span
                      className={`${
                        feat.highlight
                          ? "font-bold text-slate-900"
                          : "text-slate-600 font-medium"
                      }`}
                    >
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card CTA Action */}
              <div className="p-7 sm:p-8 pt-4 bg-white rounded-b-3xl">
                <a
                  href={`https://wa.me/6288276784058?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
                    pkg.isPopular
                      ? "bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-blue-500/25 shadow-md hover:scale-[1.02]"
                      : "bg-[#0B192C] hover:bg-slate-800 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pilih Paket {pkg.name} via WA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Tanpa DP 100% di awal • Konsultasi teknis gratis
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner below pricing */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Garansi Kepuasan & Dukungan Teknis Penuh
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Website Anda dijamin tayang sesuai kesepakatan spesifikasi, bebas error, dan aman. Jika ada kendala teknis setelah peluncuran, tim teknis 3Biru siap membantu Anda langsung via WhatsApp di <strong>0882-7678-4058</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
