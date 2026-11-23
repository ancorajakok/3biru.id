"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Eye,
  CheckCircle2,
  TrendingUp,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Bell,
  Check,
} from "lucide-react";

export default function Hero({
  onOpenOrderModal,
}: {
  onOpenOrderModal?: (type: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"katalog" | "booking">("katalog");
  const [simulatedSent, setSimulatedSent] = useState(false);

  const handleSimulateOrder = () => {
    setSimulatedSent(true);
    setTimeout(() => {
      setSimulatedSent(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background subtle glow decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline + Content on Left, Interactive Dual Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066FF] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
              <span>3Biru Digital Studio • Solusi Website Bisnis & UMKM Indonesia</span>
            </div>

            {/* Headline tegas sesuai instruksi */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0B192C] leading-[1.15]">
              Bantu Bisnis Tampil{" "}
              <span className="relative inline-block text-[#0066FF]">
                Profesional di Google
                <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-cyan-300/30 -z-10 rounded"></span>
              </span>{" "}
              & Tingkatkan Penjualan Lewat Website & Sistem Order WhatsApp Otomatis
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Solusi pembuatan website bisnis modern, katalog produk interaktif, dan sistem booking otomatis dari{" "}
              <strong className="text-slate-900 font-semibold">3Biru</strong>. Terima beres tanpa ribet teknis, bebas potongan komisi aplikasi, dan langsung terhubung ke nomor WhatsApp bisnis Anda.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 pb-2 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Domain & Hosting Siap Pakai</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pengerjaan Cepat 7-14 Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Order Masuk Rapi ke WA</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website%20bisnis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0066FF] hover:bg-[#0052cc] text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>

              <Link
                href="/portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B192C] px-6 py-4 rounded-xl font-bold text-base border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm"
              >
                <Eye className="w-5 h-5 text-slate-500" />
                <span>Lihat Portofolio</span>
              </Link>
            </div>

            {/* Social Proof & Numbers */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-left">
              <div>
                <div className="text-2xl font-black text-[#0B192C]">100%</div>
                <div className="text-xs text-slate-500 font-medium">Terima Beres & Siap Pakai</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-black text-[#0066FF]">99+</div>
                <div className="text-xs text-slate-500 font-medium">Google PageSpeed Score</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-black text-emerald-600">0%</div>
                <div className="text-xs text-slate-500 font-medium">Biaya Potongan Komisi</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Mockup Demo Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Toggle demo switch */}
            <div className="mb-3 flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-xl max-w-xs mx-auto">
              <button
                onClick={() => setActiveTab("katalog")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "katalog"
                    ? "bg-white text-[#0066FF] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🥜 Roti Kacang
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "booking"
                    ? "bg-white text-[#0066FF] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🦷 Lumina Dental
              </button>
            </div>

            {/* Main Device Container */}
            <div className="relative mx-auto max-w-[420px] rounded-3xl bg-[#0B192C] p-3.5 shadow-2xl shadow-blue-900/30 border-4 border-slate-800">
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-slate-800 rounded-full" />
              </div>

              {/* Inside Phone Screen */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-100 text-left">
                {/* Simulated Browser Bar */}
                <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-slate-700 truncate max-w-[170px]">
                      {activeTab === "katalog"
                        ? "rotikacang.netlify.app"
                        : "klinikkk.netlify.app"}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 font-bold text-[9px] rounded">
                    SSL Aman
                  </span>
                </div>

                {/* Website Header inside Mockup */}
                <div className="bg-white p-3.5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xs text-slate-900">
                      {activeTab === "katalog"
                        ? "Roti Kacang Sari Rasa (UD. Sari Rasa)"
                        : "Lumina Dental Care"}
                    </h3>
                    <p className="text-[10px] text-slate-500">
                      {activeTab === "katalog"
                        ? "Oleh-Oleh Legendaris Khas Nusantara"
                        : "Klinik Dokter Gigi Modern & Nyaman"}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Demo
                  </span>
                </div>

                {/* Simulated Content Card */}
                <div className="p-3.5 bg-slate-50/70 space-y-3">
                  {activeTab === "katalog" ? (
                    <>
                      {/* Product Item Preview */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white text-xl font-black">
                          🥜
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 truncate">
                            Roti Kacang Asli Kotak Spesial
                          </h4>
                          <p className="text-[10px] text-slate-500">Isi 20 • Resep Legendaris Halal</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-black text-[#0066FF]">
                              Rp 35.000 / kotak
                            </span>
                            <span className="text-[9px] bg-emerald-50 text-emerald-700 font-semibold px-1.5 py-0.5 rounded">
                              Fresh Dapur
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Customer form mini */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 space-y-2 text-[11px]">
                        <div className="flex justify-between text-slate-600">
                          <span>Kirim dari:</span>
                          <span className="font-semibold text-slate-800">Tebing Tinggi, Sumut</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Sistem Order:</span>
                          <span className="text-emerald-600 font-bold">Kalkulator Langsung ke WA</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Doctor Profile Preview */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xl font-black">
                          🦷
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 truncate">
                            Lumina Dental Care
                          </h4>
                          <p className="text-[10px] text-slate-500">Scaling • Behel • Tambal Gigi</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-black text-[#0066FF]">
                              Buka: 09.00 - 21.00 WIB
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Booking slot mini */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 space-y-2 text-[11px]">
                        <div className="flex justify-between text-slate-600">
                          <span>Layanan Medis:</span>
                          <span className="font-semibold text-slate-800">Dokter Gigi Berpengalaman</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Booking Jadwal:</span>
                          <span className="text-emerald-600 font-bold">Reservasi Tanpa Antre WA</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Interactive Button to simulate WhatsApp action */}
                  <button
                    onClick={handleSimulateOrder}
                    className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>
                      {simulatedSent
                        ? "✓ Pesanan Terkirim ke WhatsApp!"
                        : activeTab === "katalog"
                        ? "Klik: Test Pesan Roti Kacang via WA"
                        : "Klik: Test Booking Lumina Dental via WA"}
                    </span>
                  </button>
                </div>

                {/* Simulated Incoming WhatsApp Notification Card (Floats over preview) */}
                <div className="p-3 bg-emerald-50/90 border-t border-emerald-100">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">
                          {activeTab === "katalog" ? "CS Roti Kacang Sari Rasa" : "Admin Lumina Dental Care"}
                        </span>
                        <span className="text-[9px] text-slate-500">Baru Saja</span>
                      </div>
                      <p className="text-slate-700 text-[10px] mt-0.5 font-mono bg-white/80 p-1.5 rounded border border-emerald-200">
                        {activeTab === "katalog" ? (
                          <>
                            Halo Sari Rasa, saya pesan:
                            <br />
                            • 3x Roti Kacang Kotak Spesial (Rp 105.000)
                            <br />
                            Kirim ke: Medan | Siap Kirim
                          </>
                        ) : (
                          <>
                            Halo Lumina Dental Care,
                            <br />
                            Booking Baru: Scaling & Perawatan Gigi
                            <br />
                            Pasien: Rizky Pratama | Hari Ini 17.00 WIB
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#0066FF] flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                  <span>Google Search Ready</span>
                  <span className="text-[10px] bg-blue-100 text-[#0066FF] px-1 py-0.2 rounded font-mono">
                    #1
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">Terindeks Cepat & Muncul di Maps</div>
              </div>
            </div>

            {/* Floating WhatsApp badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80 items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-slate-800">WA: 0882-7678-4058</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Respon Cepat 10 Menit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
