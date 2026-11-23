"use client";

import React, { useState } from "react";
import LiveDemoModal, { ProjectData } from "./LiveDemoModal";
import {
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Filter,
  ArrowRight,
  Shield,
  Star,
  MapPin,
  Globe,
} from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "roti-kacang",
      title: "Roti Kacang Sari Rasa (UD. Sari Rasa)",
      category: "kuliner",
      categoryLabel: "Kuliner & Oleh-Oleh Khas Nusantara",
      tagline: "Oleh-Oleh Legendaris Khas Nusantara • Resep Otentik",
      description:
        "Website demo Roti Kacang Sari Rasa Tebing Tinggi (UD. Sari Rasa). Dilengkapi katalog varian & paket oleh-oleh, kalkulator estimasi order cepat, rute lokasi toko Google Maps, dan tombol pemesanan WhatsApp otomatis siap kirim se-Indonesia.",
      badge: "Katalog & Order WhatsApp",
      url: "rotikacang.netlify.app",
      liveUrl: "https://rotikacang.netlify.app",
      stats: "Katalog interaktif & format chat order WhatsApp langsung",
      client: "Roti Kacang Sari Rasa",
      location: "Tebing Tinggi, Sumatera Utara",
      whatsappMessage:
        "Halo 3Biru, saya tertarik ingin membuat website katalog & order WhatsApp seperti demo Roti Kacang Sari Rasa (rotikacang.netlify.app)",
      features: [
        "Katalog Varian Rasa & Paket Spesial",
        "Kalkulator Order Cepat Otomatis",
        "Direct Checkout ke WhatsApp CS",
        "Peta Lokasi Google Maps Toko",
      ],
    },
    {
      id: "lumina-dental",
      title: "Lumina Dental Care",
      category: "klinik",
      categoryLabel: "Klinik Dokter Gigi & Medis Modern",
      tagline: "Klinik Dokter Gigi Modern, Terpercaya & Nyaman",
      description:
        "Website demo profil praktek dokter gigi Lumina Dental Care. Menampilkan daftar layanan lengkap (Scaling, Behel, Tambal Gigi, Bleaching), transparansi tarif perawatan medis, jadwal praktek harian, serta sistem booking janji temu dokter via WhatsApp tanpa antre.",
      badge: "Booking Jadwal Dokter",
      url: "klinikkk.netlify.app",
      liveUrl: "https://klinikkk.netlify.app",
      stats: "Sistem reservasi janji temu dokter gigi instan via WhatsApp",
      client: "Lumina Dental Care",
      location: "Indonesia",
      whatsappMessage:
        "Halo 3Biru, saya ingin membuat website klinik medis & booking dokter seperti demo Lumina Dental Care (klinikkk.netlify.app)",
      features: [
        "Sistem Booking Jadwal Praktek via WhatsApp",
        "Estimasi Biaya Perawatan Transparan",
        "Jadwal Dokter & Jam Operasional",
        "Petunjuk Arah Rute Google Maps",
      ],
    },
    {
      id: "arkana-coffee",
      title: "Arkana Coffee & Kitchen",
      category: "fnb",
      categoryLabel: "Kafe Modern & Ruang Kreatif",
      tagline: "Modern Industrial Cafe & Creative Space",
      description:
        "Website demo representatif Arkana Coffee & Kitchen. Menghadirkan atmosfer ruang ngopi autentik, daftar menu kuliner lezat & kopi pilihan, galeri fasilitas (Wi-Fi kencang, spot colokan), dan formulir reservasi meja langsung lewat WhatsApp.",
      badge: "F&B & Reservasi Meja",
      url: "cafeeeeeeeeeeeeee.netlify.app",
      liveUrl: "https://cafeeeeeeeeeeeeee.netlify.app",
      stats: "Reservasi meja acara dan pesanan menu tanpa biaya komisi",
      client: "Arkana Coffee & Kitchen",
      location: "Indonesia",
      whatsappMessage:
        "Halo 3Biru, saya ingin membuat website kafe & reservasi meja seperti demo Arkana Coffee & Kitchen (cafeeeeeeeeeeeeee.netlify.app)",
      features: [
        "Daftar Menu Kopi & Kuliner Pilihan",
        "Formulir Reservasi Meja via WhatsApp",
        "Galeri Suasana & Fasilitas Kafe",
        "Integrasi Jam Buka & Google Maps Lokasi",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portofolio & Live Demo Sistem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Koleksi Demo Website Siap Pakai <br className="hidden sm:inline" />
            <span className="text-[#0066FF]">Untuk Berbagai Kebutuhan Bisnis</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Klik tombol <strong>'Lihat Live Demo'</strong> pada proyek di bawah untuk mencoba langsung website fungsional yang sudah aktif dan terhubung ke sistem WhatsApp.
          </p>

          {/* Filter Categories */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "Semua Proyek (3)" },
              { id: "kuliner", label: "🥜 Roti Kacang Sari Rasa" },
              { id: "klinik", label: "🦷 Lumina Dental Care" },
              { id: "fnb", label: "☕ Arkana Coffee & Kitchen" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === cat.id
                  ? "bg-[#0B192C] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 Real Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border-2 border-slate-200/90 hover:border-[#0066FF] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Top Preview Box */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/40 border-b border-slate-100 relative overflow-hidden">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#0066FF] text-white font-bold text-xs rounded-full shadow-sm">
                    {project.badge}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-medium text-slate-600 hover:text-[#0066FF] bg-white px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1"
                    title="Buka Website"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Project Visual Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3 group-hover:scale-[1.01] transition-transform">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#0066FF] uppercase tracking-wide">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{project.location}</span>
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 font-bold text-xl">
                      {project.category === "kuliner" ? "🥜" : project.category === "klinik" ? "🦷" : "☕"}
                    </div>
                  </div>

                  {/* Highlights Pill */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 flex items-center gap-2 text-xs text-emerald-800">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-[11px]">{project.stats}</span>
                  </div>
                </div>
              </div>

              {/* Card Body & Features */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Fitur Utama yang Disediakan:
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                  {/* Button: Lihat Live Demo */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#0066FF] text-white px-4 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 group/btn"
                  >
                    <Eye className="w-4 h-4 text-[#00D2FF]" />
                    <span>Lihat Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Button: Direct External Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-3.5 py-3 rounded-xl font-bold text-xs transition-colors"
                    title="Buka Website Langsung"
                  >
                    <Globe className="w-4 h-4 text-slate-600" />
                    <span>Buka Web</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600">
            Ingin membuat website profesional seperti <strong>Roti Kacang Sari Rasa</strong>, <strong>Lumina Dental Care</strong>, atau <strong>Arkana Coffee & Kitchen</strong>? Konsultasikan ide Anda sekarang di WhatsApp{" "}
            <a
              href="https://wa.me/6288276784058?text=Halo%203Biru%2C%20saya%20tertarik%20membuat%20website%20seperti%20portofolio%20kalian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0066FF] hover:underline"
            >
              0882-7678-4058
            </a>
            !
          </p>
        </div>

      </div>

      {/* Render Live Demo Modal with interactive iframe */}
      <LiveDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
