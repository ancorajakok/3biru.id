"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPopped, setHasPopped] = useState(false);

  useEffect(() => {
    // Show gentle balloon popup after 4 seconds
    const timer = setTimeout(() => {
      setHasPopped(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl =
    "https://wa.me/6288276784058?text=Halo%203Biru%20Digital%20Studio%2C%20saya%20ingin%20tanya-tanya%20seputar%20pembuatan%20website%20bisnis";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Floating Card Popup if opened */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header Card */}
          <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B192C]" />
              </div>

              <div>
                <div className="font-bold text-sm">3Biru Digital Studio</div>
                <div className="text-[11px] text-cyan-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CS Online • 0882-7678-4058</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Tutup Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Message */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200/90 shadow-2xs space-y-1.5">
              <p className="font-semibold text-slate-900">
                Halo Pemilik Usaha! 👋
              </p>
              <p className="leading-relaxed">
                Ingin konsultasi gratis tentang pembuatan website bisnis, katalog produk, atau sistem order WhatsApp otomatis?
              </p>
              <p className="text-[10px] text-slate-400 text-right">
                3Biru Support • Balas dalam ~5 menit
              </p>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Mulai Chat di WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Pill Mini Notification (when card is closed) */}
      {!isOpen && hasPopped && (
        <div
          onClick={() => setIsOpen(true)}
          className="mb-2 cursor-pointer bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200 text-xs text-slate-800 flex items-center gap-2 hover:scale-105 transition-all animate-bounce"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-[11px]">Konsultasi Gratis via WA? Klik di sini!</span>
        </div>
      )}

      {/* Main WhatsApp Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 group"
        aria-label="Buka Chat WhatsApp 3Biru"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00D2FF] rounded-full border-2 border-white animate-ping" />
        </div>
      </button>
    </div>
  );
}
