import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  MessageCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | 3Biru Digital Studio",
    };
  }

  return {
    title: `${article.title} | 3Biru Digital Studio`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const shareText = encodeURIComponent(
    `Baca artikel menarik ini: "${article.title}" oleh 3Biru Digital Studio`
  );

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0B192C]">
      {/* Sticky Header */}
      <Navbar />

      {/* Article Header Hero */}
      <article className="flex-1">
        <header className="pt-10 pb-12 bg-gradient-to-b from-slate-50 via-blue-50/25 to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {/* Breadcrumb & Back */}
            <div className="flex items-center justify-between gap-4 text-xs">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0066FF] font-semibold transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Semua Artikel</span>
              </Link>

              <span className={`px-3 py-1 rounded-full font-bold ${article.categoryColor}`}>
                {article.category}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#0B192C] tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0066FF] text-white font-bold flex items-center justify-center text-xs">
                  3B
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{article.author}</span>
                  <span className="text-[11px] text-slate-500">{article.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Intro Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed font-medium mb-10">
            {article.content.intro}
          </div>

          {/* Sections */}
          <div className="space-y-10 text-slate-800">
            {article.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-[#0B192C] tracking-tight flex items-start gap-2.5">
                  <span>{sec.heading}</span>
                </h2>

                <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {sec.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {sec.tip && (
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 mt-4">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-amber-950 mb-0.5">
                        Tips Praktis 3Biru:
                      </strong>
                      <span className="leading-relaxed">{sec.tip}</span>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Kesimpulan</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Share & Direct Consultation Action Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                Bagikan Artikel Bermanfaat Ini:
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Bantu rekan sesama pengusaha agar bisnisnya ikut naik kelas.
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share via WhatsApp</span>
              </a>

              <a
                href="https://wa.me/6288276784058?text=Halo%203Biru%2C%20saya%20tertarik%20dengan%20artikel%20website%20dan%20ingin%20konsultasi%20langsung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Konsultasi WA: 0882-7678-4058</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Artikel Terkait Lainnya
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0066FF] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#0066FF] uppercase">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#0066FF] transition-colors mt-1.5 leading-snug">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{rel.readTime}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0066FF] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
