"use client";

import React from "react";
import {
  Globe,
  ShoppingBag,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      id: "website-bisnis",
      title: "Pembuatan Website Bisnis & Company Profile",
      target: "Untuk UMKM, Perusahaan, & Lembaga",
      description:
        "Tingkatkan kredibilitas bisnis Anda di mata pelanggan dan mitra kerja. Tampil berkelas dengan desain modern, cepat dibuka di smartphone, dan terintegrasi langsung dengan profil Google Bisnisku & Google Maps.",
      icon: Globe,
      color: "from-blue-600 to-indigo-600",
      features: [
        "Desain elegan kustom sesuai identitas brand bisnis",
        "Terindeks di Google Search Console & Google Maps",
        "Email bisnis profesional dengan domain sendiri (@usaha.com)",
        "Skor kecepatan tinggi & performa mobile first 100%",
      ],
      whatsappMsg:
        "Halo 3Biru Digital Studio, saya ingin konsultasi pembuatan Website Bisnis & Company Profile",
    },
    {
      id: "katalog-online",
      title: "Katalog Produk Online Interaktif",
      target: "Untuk Toko Kuliner, Oleh-Oleh, & Retail",
      description:
        "Etalase digital 24 jam tanpa batas jam operasional. Tampilkan foto produk resolusi tinggi, harga transparan, varian rasa/ukuran, dan fitur hitung pesanan instan tanpa perlu potong komisi aplikasi pihak ketiga.",
      icon: ShoppingBag,
      color: "from-amber-600 to-orange-500",
      features: [
        "Katalog produk rapi dengan filter kategori instan",
        "Sistem keranjang belanja mini tanpa perlu login/daftar akun",
        "Hitung total belanjaan otomatis langsung di website",
        "Foto produk dioptimasi cepat tanpa membebani kuota pelanggan",
      ],
      whatsappMsg:
        "Halo 3Biru Digital Studio, saya ingin konsultasi pembuatan Katalog Produk Online",
    },
    {
      id: "booking-whatsapp",
      title: "Sistem Booking & Order Otomatis WhatsApp",
      target: "Untuk Klinik Kesehatan, Dokter, & Jasa",
      description:
        "Ubah pengunjung website menjadi chat pesanan dan reservasi yang rapi. Pelanggan memilih jadwal konsultasi atau produk, dan sistem akan merangkumnya menjadi teks WhatsApp terstruktur ke admin Anda.",
      icon: MessageCircle,
      color: "from-emerald-600 to-teal-500",
      features: [
        "Format teks pesanan/booking otomatis terisi rapi",
        "Pemilih tanggal, jam praktek dokter, & layanan",
        "Bisa dihubungkan ke multi-admin atau customer service",
        "Notifikasi tiket reservasi langsung ke nomor pasien",
      ],
      whatsappMsg:
        "Halo 3Biru Digital Studio, saya ingin konsultasi Sistem Booking & Order WhatsApp Otomatis",
    },
  ];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solusi Digital 3Biru</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            3 Layanan Inti untuk <span className="text-[#0066FF]">Melejitkan Bisnis Anda</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Kami tidak hanya membangun website, kami menciptakan mesin penjualan digital yang membantu pemilik usaha melayani pembeli lebih cepat dan efisien.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="rounded-3xl p-7 sm:p-8 bg-slate-50/70 border border-slate-200/90 hover:border-[#0066FF] hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold text-[#0066FF] uppercase tracking-wide">
                    {svc.target}
                  </span>

                  <h3 className="text-xl font-bold text-[#0B192C] mt-1 mb-3 group-hover:text-[#0066FF] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                    {svc.features.map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/80">
                  <a
                    href={`https://wa.me/6288276784058?text=${encodeURIComponent(
                      svc.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-[#0066FF] text-slate-800 hover:text-white rounded-xl font-bold text-xs border border-slate-200 hover:border-transparent transition-all shadow-xs"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
