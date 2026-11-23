import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3Biru Digital Studio | Jasa Pembuatan Website Bisnis & Order WhatsApp UMKM",
  description:
    "Agensi digital 3Biru melayani pembuatan website bisnis profesional, katalog produk online, dan sistem booking otomatis WhatsApp untuk UMKM dan perusahaan di seluruh Indonesia. Pengerjaan cepat, harga transparan, fokus konversi.",
  keywords: [
    "jasa pembuatan website",
    "website umkm",
    "katalog whatsapp",
    "sistem booking otomatis",
    "website bisnis profesional",
    "3biru digital studio",
    "3biru.id",
    "jasa web jakarta",
    "jasa web surabaya",
    "website konversi tinggi",
  ],
  authors: [{ name: "3Biru Digital Studio", url: "https://3biru.id" }],
  creator: "3Biru Digital Studio",
  publisher: "3Biru Digital Studio",
  openGraph: {
    title: "3Biru Digital Studio - Website Modern & Sistem WhatsApp Otomatis",
    description:
      "Tampil profesional di Google dan tingkatkan penjualan lewat website modern & sistem order WhatsApp otomatis untuk UMKM dan perusahaan.",
    url: "https://3biru.id",
    siteName: "3Biru Digital Studio",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen bg-white text-[#0B192C] selection:bg-[#0066FF] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
