"use client";

import React, { useState } from "react";
import {
  Zap,
  Tag,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Flame,
  Award,
  Smartphone,
  Search,
  MessageSquare,
} from "lucide-react";

export default function Pillars() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "cepat",
      number: "01",
      title: "Pengerjaan Cepat",
      subtitle: "7-14 Hari Kerja Siap Tayang & Langsung Beroperasi",
      badge: "Rapid Delivery",
      badgeColor: "bg-blue-100 text-blue-700",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-500",
      description:
        "Kami paham setiap hari keterlambatan website adalah potensi omset yang hilang. Dengan arsitektur modern Next.js dan alur kerja terstruktur, website Anda selesai tepat waktu tanpa drama molor.",
      features: [
        "Jadwal rilis jelas (Timeline 7-14 hari kerja terima beres)",
        "Proses pengumpulan materi mudah dipandu oleh tim 3Biru",
        "Langsung aktif dengan domain resmi dan siap diakses publik",
        "Setup Google Analytics & WhatsApp langsung siap di hari peluncuran",
      ],
      metric: "7-14 Hari",
      metricLabel: "Rata-rata Website Siap Go-Live",
    },
    {
      id: "terjangkau",
      number: "02",
      title: "Harga Terjangkau UMKM",
      subtitle: "Transparan, All-In Terima Beres, Tanpa Biaya Tersembunyi",
      badge: "UMKM Friendly",
      badgeColor: "bg-emerald-100 text-emerald-800",
      icon: Tag,
      gradient: "from-[#0B192C] to-blue-700",
      description:
        "Dapatkan website berstandar korporat tanpa harus merogoh kocek puluhan juta. Semua paket sudah termasuk domain, hosting cloud berkecepatan tinggi, SSL, dan panduan penggunaan tanpa biaya langganan bulanan yang menjebak.",
      features: [
        "Gratis Domain (.com / .id / .my.id) selama 1 tahun pertama",
        "Hosting Cloud SSD NVMe ultra-cepat bebas biaya langganan bulanan",
        "Tanpa potongan komisi penjualan atau royalti transaksi sepeserpun",
        "Kepemilikan aset 100% milik bisnis Anda secara penuh",
      ],
      metric: "100% All-In",
      metricLabel: "Sudah Termasuk Domain, Hosting & Setup",
    },
    {
      id: "konversi",
      number: "03",
      title: "Fokus Konversi Penjualan",
      subtitle: "Desain Persuasif yang Mengubah Pengunjung Jadi Pembeli",
      badge: "High Conversion",
      badgeColor: "bg-amber-100 text-amber-800",
      icon: TrendingUp,
      gradient: "from-[#0066FF] to-blue-900",
      description:
        "Bukan sekadar website estetik yang sepi pembeli. Kami merancang alur pelanggan dengan tata letak navigasi ringkas, tombol WhatsApp di titik strategis, format checkout rapi, dan fondasi Google SEO agar mudah ditemukan calon pelanggan.",
      features: [
        "Integrasi Tombol WhatsApp cerdas dengan format pesan terisi otomatis",
        "Struktur SEO On-Page agar mudah ditemukan di pencarian Google & Maps",
        "Tampilan Mobile-First yang ringan dan super cepat diakses dari HP",
        "Katalog produk minim klik agar calon pembeli tidak kabur ke kompetitor",
      ],
      metric: "+240%",
      metricLabel: "Rata-rata Lonjakan Chat Order Pelanggan",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Filosofi 3 Pilar 3Biru</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Mengapa Memilih <span className="text-[#0066FF]">3Biru Digital Studio?</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Filosofi nama <strong>3Biru</strong> lahir dari 3 komitmen utama kami untuk membawa bisnis dan UMKM di Indonesia naik kelas dengan kehadiran digital yang kuat, cepat, dan terbukti menghasilkan.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isSelected = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`relative rounded-3xl p-8 bg-white border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 ${isSelected
                  ? "border-[#0066FF] shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/10"
                  : "border-slate-200/90 hover:border-blue-300 shadow-sm"
                  }`}
              >
                {/* Pillar Number watermark */}
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-100 select-none group-hover:text-blue-50 transition-colors">
                  {pillar.number}
                </span>

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#0B192C] mb-2 group-hover:text-[#0066FF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {pillar.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Highlight */}
                <div className="mt-8 pt-5 border-t border-slate-100/80 bg-slate-50 -mx-8 -mb-8 p-5 rounded-b-3xl flex items-center justify-between">
                  <div>
                    <div className="text-lg font-black text-[#0B192C]">
                      {pillar.metric}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {pillar.metricLabel}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/6288276784058?text=Halo%203Biru%2C%20saya%20tertarik%20dengan%20keunggulan%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors shadow-xs"
                    title="Konsultasi keunggulan ini"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Interactive Comparison Pill */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#070F1E] via-[#0B192C] to-[#102A45] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Garansi Kualitas 3Biru Digital</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Butuh Website yang Benar-Benar Bekerja Mendatangkan Pembeli?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Diskusikan kebutuhan bisnis Anda langsung dengan tim teknis kami. Gratis konsultasi strategi, pemilihan nama domain, dan saran fitur yang paling efektif untuk menaikkan penjualan.
            </p>
          </div>

          <a
            href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20terima%20beres"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#0066FF] hover:bg-white hover:text-[#0B192C] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Langsung: 0882-7678-4058</span>
          </a>
        </div>

      </div>
    </section>
  );
}
