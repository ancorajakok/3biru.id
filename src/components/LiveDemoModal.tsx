"use client";

import React, { useState } from "react";
import {
  X,
  ExternalLink,
  MessageCircle,
  Smartphone,
  Laptop,
  CheckCircle,
  ShoppingBag,
  Calendar,
  Clock,
  User,
  MapPin,
  Star,
  ChevronRight,
  ShieldCheck,
  Globe,
  RefreshCw,
} from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: "kuliner" | "klinik" | "fnb";
  categoryLabel: string;
  tagline: string;
  description: string;
  badge: string;
  url: string;
  liveUrl: string;
  stats: string;
  features: string[];
  client: string;
  location: string;
  whatsappMessage: string;
}

interface LiveDemoModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function LiveDemoModal({ project, onClose }: LiveDemoModalProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[94vh]">
        
        {/* Modal Top Control Bar */}
        <div className="bg-[#0B192C] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </span>

            {/* Live URL Pill */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-300 bg-slate-800/90 hover:bg-slate-700/90 px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Buka Website Asli di Tab Baru"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate max-w-[200px] sm:max-w-[320px]">{project.url}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <span className="hidden md:inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white">
              {project.badge}
            </span>
          </div>

          {/* Controls: Device switcher, Refresh, External Link, Close */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop / Mobile Switcher */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setDeviceView("desktop")}
                className={`p-1.5 px-2.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  deviceView === "desktop"
                    ? "bg-[#0066FF] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Tampilan Layar Penuh"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView("mobile")}
                className={`p-1.5 px-2.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  deviceView === "mobile"
                    ? "bg-[#0066FF] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Tampilan HP / Mobile"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Refresh Frame */}
            <button
              onClick={() => setIframeKey((k) => k + 1)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Muat Ulang Tampilan"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {/* Open in New Tab Button */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold bg-[#0066FF] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka di Tab Baru</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Info Sub-header */}
        <div className="bg-slate-50 px-4 sm:px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">{project.title}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{project.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium text-[11px] sm:text-xs">
              Live Demo Aktif • Karya Asli 3Biru Digital Studio
            </span>
          </div>
        </div>

        {/* Modal Body: Real Live Website embedded in Frame */}
        <div className="overflow-y-auto p-3 sm:p-5 bg-slate-100 flex-1 flex flex-col items-center justify-center min-h-[500px]">
          <div
            className={`w-full transition-all duration-300 flex-1 flex flex-col ${
              deviceView === "mobile"
                ? "max-w-[390px] rounded-[36px] border-[10px] border-slate-900 shadow-2xl overflow-hidden bg-white min-h-[680px]"
                : "rounded-2xl border border-slate-200 shadow-md bg-white overflow-hidden min-h-[580px]"
            }`}
          >
            {deviceView === "mobile" && (
              <div className="h-6 bg-slate-900 flex items-center justify-center shrink-0">
                <span className="w-20 h-3 bg-slate-800 rounded-full inline-block" />
              </div>
            )}

            {/* Embedded Live Web Application */}
            <iframe
              key={iframeKey}
              src={project.liveUrl}
              title={project.title}
              className="w-full flex-1 border-0 min-h-[520px] bg-white"
              loading="eager"
              allow="camera; microphone; geolocation"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Studi Kasus: <strong className="text-slate-900">{project.title}</strong>
            <span className="block sm:inline sm:ml-2 text-slate-500 text-[11px]">
              • {project.stats}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Buka Web Asli</span>
            </a>

            <a
              href={`https://wa.me/6288276784058?text=${encodeURIComponent(
                project.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Buat Website Seperti Ini</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
