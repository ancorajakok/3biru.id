"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function CostEstimator() {
  const [businessType, setBusinessType] = useState<string>("kuliner");
  const [addons, setAddons] = useState<string[]>([
    "domain_hosting",
    "wa_checkout",
    "google_seo",
  ]);

  const businessOptions = [
    { id: "kuliner", label: "Toko Oleh-Oleh & Kuliner UMKM", icon: "🍱" },
    { id: "klinik", label: "Klinik Kesehatan & Dokter", icon: "🏥" },
    { id: "jasa", label: "Jasa / Kontraktor / B2B", icon: "🏗️" },
    { id: "salon", label: "Klinik Kecantikan & Spa", icon: "💆" },
    { id: "retail", label: "Toko Retail & Fashion", icon: "👗" },
  ];

  const addonOptions = [
    {
      id: "domain_hosting",
      label: "Domain Resmi (.com / .id) + Cloud SSD Fast Server",
      price: 0,
      note: "Sudah Termasuk Gratis di Semua Paket",
    },
    {
      id: "wa_checkout",
      label: "Sistem Order Otomatis Format Rapi ke WhatsApp",
      price: 350000,
      note: "Langsung kirim detail barang & alamat ke CS",
    },
    {
      id: "booking_system",
      label: "Sistem Reservasi & Jadwal Booking Online",
      price: 450000,
      note: "Pilihan jam konsultasi / tiket janji temu",
    },
    {
      id: "google_seo",
      label: "Setup Google Maps + Google Bisnisku & Local SEO",
      price: 250000,
      note: "Bantu toko mudah ditemukan calon pembeli terdekat",
    },
    {
      id: "custom_email",
      label: "Email Bisnis Resmi (contoh: order@namabisnis.com)",
      price: 200000,
      note: "Tingkatkan kredibilitas & rasa percaya konsumen",
    },
    {
      id: "multi_admin",
      label: "Rotasi Multi-Admin WhatsApp (Bagi Pesanan ke Banyak CS)",
      price: 300000,
      note: "Cocok untuk toko dengan lebih dari 2 admin customer service",
    },
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((item) => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Base price calculation
  const basePrice = 799000;
  const calculatedTotal =
    basePrice +
    addons.reduce((sum, item) => {
      const found = addonOptions.find((a) => a.id === item);
      return sum + (found ? found.price : 0);
    }, 0);

  // Recommendation engine
  const recommendedPackage =
    calculatedTotal > 2000000
      ? "Paket Pro Corporate & Booking (Rp 2.999.000 Promo)"
      : calculatedTotal > 1100000
      ? "Paket Bisnis Katalog WhatsApp (Rp 1.499.000 Promo)"
      : "Paket Starter UMKM (Rp 799.000 Promo)";

  const generateWhatsAppMessage = () => {
    const selectedBus = businessOptions.find((b) => b.id === businessType)?.label;
    const selectedFeatures = addons
      .map((id) => addonOptions.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    return `Halo 3Biru Digital Studio, saya ingin konsultasi kebutuhan website:
• Jenis Bisnis: ${selectedBus}
• Fitur yang Dibutuhkan: ${selectedFeatures}
• Rekomendasi Paket: ${recommendedPackage}
Mohon info estimasi pengerjaan dan diskon promonya. Terima kasih!`;
  };

  return (
    <section id="kalkulator" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Kebutuhan Website</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C]">
            Hitung Estimasi Kebutuhan <span className="text-[#0066FF]">Website Bisnis Anda</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Pilih jenis usaha dan fitur yang Anda inginkan. Sistem kami akan merekomendasikan paket yang paling hemat dan efisien untuk bisnis Anda.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options selection */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Business Type */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  1. Pilih Jenis Bisnis Anda:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {businessOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBusinessType(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs flex items-center gap-2.5 ${
                        businessType === opt.id
                          ? "bg-white border-[#0066FF] text-[#0066FF] font-bold shadow-xs ring-2 ring-blue-500/10"
                          : "bg-white/60 border-slate-200 text-slate-700 hover:bg-white"
                      }`}
                    >
                      <span className="text-lg">{opt.icon}</span>
                      <span className="truncate">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Desired Features */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  2. Pilih Fitur yang Anda Inginkan:
                </label>
                <div className="space-y-2">
                  {addonOptions.map((addon) => {
                    const isChecked = addons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isChecked
                            ? "bg-blue-50/70 border-blue-300 shadow-2xs"
                            : "bg-white border-slate-200 hover:bg-slate-100/60"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                            isChecked
                              ? "bg-[#0066FF] border-[#0066FF] text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-800">
                            {addon.label}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {addon.note}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ringkasan Spesifikasi
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                    Rekomendasi Terbaik
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-500">Paket yang Paling Hemat:</div>
                  <div className="text-lg font-black text-[#0066FF] mt-0.5">
                    {recommendedPackage}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Estimasi Fitur Terpilih:</span>
                    <span className="font-bold text-slate-800">{addons.length} Fitur</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Waktu Pengerjaan:</span>
                    <span className="font-bold text-slate-800">7 - 14 Hari Kerja</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Domain & Hosting:</span>
                    <span className="font-bold text-emerald-600">Gratis 1 Tahun</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  *Estimasi di atas sudah termasuk instalasi, setup koneksi WhatsApp, dan pendaftaran ke Google Search.
                </p>
              </div>

              {/* Action Button: Send Spec to WhatsApp */}
              <div className="pt-6 border-t border-slate-100 mt-4">
                <a
                  href={`https://wa.me/6288276784058?text=${encodeURIComponent(
                    generateWhatsAppMessage()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Spek ke WhatsApp 3Biru</span>
                </a>

                <div className="text-center text-[10px] text-slate-500 mt-2">
                  Nomor WhatsApp: <strong className="text-slate-700">0882-7678-4058</strong>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
