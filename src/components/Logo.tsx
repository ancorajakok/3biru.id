import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light";
  showSubtitle?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  variant = "dark",
  showSubtitle = true,
}: LogoProps) {
  // Dimensions based on size
  const iconSizes = {
    sm: { w: 32, h: 32, text: "text-lg", sub: "text-[9px]" },
    md: { w: 42, h: 42, text: "text-xl", sub: "text-[10px]" },
    lg: { w: 52, h: 52, text: "text-2xl", sub: "text-xs" },
    xl: { w: 68, h: 68, text: "text-3xl", sub: "text-sm" },
  };

  const currentSize = iconSizes[size] || iconSizes.md;

  // Solid, high-contrast colors (Never affected by OS dark mode on white background)
  const isLight = variant === "light";
  const numColor = isLight ? "text-[#00D2FF]" : "text-[#0066FF]";
  const textColor = isLight ? "text-white" : "text-[#0B192C]";
  const subColor = isLight ? "text-slate-400" : "text-[#1E3E62]";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3Biru Modern Geometric Icon */}
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="blue1_deepNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B192C" />
            <stop offset="100%" stopColor="#1E3E62" />
          </linearGradient>

          <linearGradient id="blue2_royal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="blue3_electric" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          <filter id="electricGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00D2FF" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Layer 1: Base Navy Pillar */}
        <path
          d="M 22 18 C 22 14 26 12 29 14 L 68 34 C 71 36 71 40 68 42 L 35 60 C 26 65 14 58 14 48 L 14 28 C 14 22 18 18 22 18 Z"
          fill="url(#blue1_deepNavy)"
        />

        {/* Layer 2: Royal Blue Execution */}
        <path
          d="M 38 35 C 41 33 45 35 45 38 L 45 68 C 45 78 57 84 66 79 L 78 72 C 82 70 86 73 86 77 L 86 80 C 86 86 79 90 73 87 L 34 68 C 30 66 28 62 28 58 L 28 42 C 28 38 32 35 38 35 Z"
          fill="url(#blue2_royal)"
          opacity="0.95"
        />

        {/* Layer 3: Dynamic Top Electric Wing */}
        <path
          d="M 34 26 L 68 42 C 73 44 76 50 74 55 L 68 68 C 66 72 61 74 57 72 L 40 63 C 35 60 32 55 33 50 L 36 34 C 36 30 31 27 28 29 L 26 30 C 23 31 22 28 24 26 L 30 20 C 31 19 33 19 34 26 Z"
          fill="url(#blue3_electric)"
          filter="url(#electricGlow)"
        />

        {/* Signature 3-Dots */}
        <circle cx="28" cy="80" r="4" fill="#0B192C" />
        <circle cx="48" cy="88" r="4.5" fill="#2563EB" />
        <circle cx="72" cy="50" r="5" fill="#00D2FF" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className={`font-black tracking-tight flex items-baseline leading-none ${currentSize.text}`}>
          <span className={`${numColor} font-black drop-shadow-xs`}>3</span>
          <span className={`font-black tracking-tight ${textColor} ml-0.5`}>Biru</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D2FF] ml-1 animate-pulse" />
        </div>
        {showSubtitle && (
          <span className={`font-extrabold tracking-[0.24em] uppercase mt-1 ${currentSize.sub} ${subColor}`}>
            Digital Studio
          </span>
        )}
      </div>
    </div>
  );
}
