"use client";

import React from "react";
import { Check, X, Shield, Sparkles } from "lucide-react";

export default function Comparison() {
  const comparisons = [
    {
      feature: "Sistem Order Otomatis Format Rapi ke WhatsApp",
      threeBiru: true,
      cheapWeb: false,
      diy: "Rumit & butuh coding webhook",
    },
    {
      feature: "Pengerjaan Tepat Waktu (7-14 Hari Bergaransi)",
      threeBiru: true,
      cheapWeb: "Sering molor berbulan-bulan",
      diy: "Menghabiskan waktu berbulan-bulan",
    },
    {
      feature: "Gratis Domain (.com/.id) & Cloud Hosting 1 Tahun",
      threeBiru: true,
      cheapWeb: "Biaya tersembunyi di belakang",
      diy: "Harus bayar dan konfigurasi sendiri",
    },
    {
      feature: "Optimasi Google Maps & Terdaftar di Search Console",
      threeBiru: true,
      cheapWeb: false,
      diy: false,
    },
    {
      feature: "Tanpa Biaya Potongan Komisi Transaksi (0% Fee)",
      threeBiru: true,
      cheapWeb: true,
      diy: true,
    },
    {
      feature: "Garansi Teknis & Bantuan CS WhatsApp Cepat",
      threeBiru: true,
      cheapWeb: "Sulit dihubungi setelah bayar",
      diy: "Harus cari solusi sendiri",
    },
    {
      feature: "Teknologi Modern Next.js (Bukan Template Jadul Berat)",
      threeBiru: true,
      cheapWeb: false,
      diy: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Perbandingan Objektif</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Mengapa Memilih <span className="text-[#0066FF]">3Biru Digital Studio?</span>
          </h2>

          <p className="text-sm text-slate-600">
            Hindari website yang lambat, mangkrak, atau sulit dioperasikan. Lihat perbedaan standar layanan kami dibanding opsi lainnya.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="p-5 sm:p-6 text-sm font-bold text-slate-700 bg-slate-50/50 w-2/5">
                    Fitur & Standar Layanan
                  </th>
                  <th className="p-5 sm:p-6 text-sm font-black text-white bg-[#0B192C] w-1/5 text-center relative">
                    <span className="text-[#00D2FF]">3Biru</span> Digital Studio
                    <span className="block text-[10px] font-normal text-slate-300 mt-0.5">
                      (Terima Beres)
                    </span>
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-slate-600 bg-slate-50 w-1/5 text-center">
                    Jasa Web Murahan / Freelancer Lepas
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-slate-600 bg-slate-50 w-1/5 text-center">
                    Bikin Sendiri Tanpa Skill IT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      {row.feature}
                    </td>

                    {/* 3Biru Column */}
                    <td className="p-4 sm:p-5 text-center bg-blue-50/30 font-bold text-emerald-600">
                      <div className="flex items-center justify-center gap-1.5 text-[#0066FF]">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="hidden sm:inline text-xs font-bold">Lengkap</span>
                      </div>
                    </td>

                    {/* Cheap Web Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-500">
                      {typeof row.cheapWeb === "boolean" ? (
                        row.cheapWeb ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-[11px] text-red-500 font-medium">
                          {row.cheapWeb}
                        </span>
                      )}
                    </td>

                    {/* DIY Column */}
                    <td className="p-4 sm:p-5 text-center text-slate-500">
                      {typeof row.diy === "boolean" ? (
                        row.diy ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-[11px] text-amber-700 font-medium">
                          {row.diy}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
