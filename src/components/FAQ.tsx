"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama proses pembuatan website hingga siap pakai?",
      a: "Waktu pengerjaan sangat cepat berkat alur kerja gesit 3Biru. Paket Starter UMKM selesai dalam 3–5 hari kerja. Paket Bisnis Katalog WhatsApp memerlukan waktu 7–10 hari kerja, sedangkan Paket Pro Corporate & Booking Medis sekitar 10–14 hari kerja setelah materi usaha kami terima.",
    },
    {
      q: "Apakah saya harus paham coding atau hal teknis IT?",
      a: "Sama sekali TIDAK PERLU. Layanan kami menganut prinsip 'Terima Beres'. Mulai dari pembelian nama domain, konfigurasi server hosting cepat, sertifikat SSL gembok hijau, desain tampilan, hingga integrasi tombol WhatsApp, semuanya ditangani lengkap oleh tim ahli 3Biru.",
    },
    {
      q: "Apa saja data yang perlu saya siapkan untuk memulai?",
      a: "Cukup siapkan: Nama bisnis untuk alamat domain (misal: www.usahasaya.com), logo (jika belum ada, kami bantu buatkan teks logo elegan), foto produk atau layanan, daftar harga, dan nomor WhatsApp yang akan menerima pesanan. Tim kami akan mendampingi Anda langkah demi langkah.",
    },
    {
      q: "Bagaimana cara kerja sistem order / booking otomatis ke WhatsApp?",
      a: "Saat calon pembeli memilih produk di katalog atau memilih jadwal konsultasi dokter di website, sistem cerdas kami secara otomatis merangkum data tersebut menjadi format chat rapi (Nama, Item, Jumlah, Total Biaya, Alamat/Jadwal). Ketika pembeli menekan tombol 'Pesan/Booking', chat WhatsApp langsung terkirim ke nomor admin Anda tanpa perantara pihak ketiga dan bebas potongan komisi!",
    },
    {
      q: "Apakah website saya otomatis muncul di Google dan Google Maps?",
      a: "Ya! Kami mengoptimalkan setiap halaman dengan struktur SEO On-Page ramah Google, mendaftarkan sitemap ke Google Search Console, dan membantu integrasi lokasi Google Maps / Google Bisnisku agar usaha Anda mudah ditemukan pelanggan sekitar.",
    },
    {
      q: "Apakah ada biaya bulanan atau biaya tersembunyi yang menjebak?",
      a: "TIDAK ADA biaya bulanan tersembunyi. Biaya paket di awal sudah ALL-IN mencakup jasa pembuatan, gratis domain .com / .id selama 1 tahun, dan sewa cloud hosting SSD ultra-cepat selama 1 tahun. Anda hanya perlu membayar biaya perpanjangan domain & hosting tahunan standar di tahun kedua.",
    },
    {
      q: "Apakah saya mendapatkan email resmi perusahaan seperti nama@usaha.com?",
      a: "Ya, untuk Paket Bisnis dan Paket Pro Corporate kami menyediakan fasilitas pembuatan alamat email bisnis resmi menggunakan nama domain Anda sendiri (misal: order@namatoko.com atau admin@klinikmedika.com) untuk meningkatkan rasa percaya pelanggan.",
    },
    {
      q: "Bagaimana jika ada kendala teknis setelah website selesai dibuat?",
      a: "Semua pemesanan website di 3Biru mendapatkan garansi teknis dan pemeliharaan purna jual. Jika terjadi kendala seperti link tidak berfungsi atau kendala server, tim teknis kami siap membantu Anda dengan cepat via WhatsApp resmi di 0882-7678-4058.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Seputar Layanan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Pertanyaan yang Sering Diajukan <br />
            <span className="text-[#0066FF]">Pemilik Usaha & UMKM</span>
          </h2>

          <p className="text-sm text-slate-600">
            Berikut adalah hal-hal penting yang sering ditanyakan sebelum memulai pembuatan website bersama 3Biru Digital Studio.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0066FF] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-800">
            Punya pertanyaan spesifik tentang model bisnis atau fitur kustom Anda?
          </p>
          <a
            href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20mau%20tanya%20seputar%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanyakan Langsung via WhatsApp (0882-7678-4058)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
