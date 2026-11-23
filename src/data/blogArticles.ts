export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: "Strategi Digital" | "WhatsApp & Penjualan" | "Klinik & Medis" | "Google SEO";
  categoryColor: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "kenapa-umkm-wajib-punya-website-sendiri",
    title: "Kenapa Bisnis & UMKM Wajib Punya Website Sendiri di Tahun 2026 Dibanding Cuma Medsos?",
    excerpt:
      "Banyak pemilik usaha berpikir akun Instagram atau TikTok sudah cukup. Faktanya, algoritma medsos terus berubah dan akun Anda bukan aset milik Anda seutuhnya. Simak mengapa website resmi adalah kunci kenaikan omset abadi.",
    category: "Strategi Digital",
    categoryColor: "bg-blue-100 text-blue-800",
    readTime: "5 menit baca",
    date: "20 November 2026",
    author: "Tim Riset 3Biru",
    authorRole: "Digital Growth Strategist",
    featured: true,
    content: {
      intro:
        "Bagi pengusaha UMKM di Indonesia, perdebatan antara 'cukup pakai Instagram saja' atau 'harus punya website' seringkali menjadi dilema. Namun data membuktikan: 84% konsumen Indonesia lebih mempercayai bisnis yang memiliki website resmi dengan domain sendiri dibanding yang hanya memiliki akun media sosial.",
      sections: [
        {
          heading: "1. Media Sosial Adalah 'Tanah Sewa', Website Adalah 'Rumah Milik Sendiri'",
          body: [
            "Ketika Anda hanya berjualan di Instagram, TikTok, atau marketplace, Anda sepenuhnya tunduk pada aturan mereka. Algoritma bisa berubah sewaktu-waktu dan jangkauan konten (reach) organik bisa anjlok drastis dalam semalam.",
            "Sebaliknya, website dengan domain resmi (seperti namabisnis.com atau namabisnis.id) adalah aset digital milik Anda 100%. Tidak ada pihak yang bisa tiba-tiba menghapus atau memblokir toko digital Anda.",
          ],
          tip: "Kombinasikan media sosial sebagai corong penarik audiens (traffic), dan arahkan mereka ke website resmi Anda untuk menutup transaksi tanpa distraksi kompetitor.",
        },
        {
          heading: "2. Tampil di Pencarian Google Saat Calon Pembeli Membutuhkan",
          body: [
            "Ketika seseorang membutuhkan 'oleh-oleh khas Tebing Tinggi' atau 'dokter gigi terdekat', tempat pertama yang mereka buka bukanlah TikTok, melainkan Google Search dan Google Maps.",
            "Website yang dioptimasi dengan SEO lokal akan otomatis muncul di halaman pertama Google, menangkap calon pembeli yang memang sedang memiliki niat beli (high intent buyer).",
          ],
        },
        {
          heading: "3. Bebas Potongan Komisi Aplikasi yang Mencekik",
          body: [
            "Banyak pemilik usaha kuliner dan retail mengeluhkan potongan biaya komisi aplikasi pihak ketiga yang mencapai 15% hingga 25% per pesanan. Ini menggerus margin laba UMKM.",
            "Dengan website berfitur katalog dan checkout WhatsApp dari 3Biru, pesanan langsung masuk ke nomor WhatsApp bisnis Anda dengan biaya potongan komisi 0%. Margin keuntungan tetap utuh milik Anda.",
          ],
          tip: "Uang hemat potongan komisi bisa dialokasikan kembali untuk meningkatkan kualitas produk atau promo diskon langsung ke pelanggan setia.",
        },
      ],
      conclusion:
        "Memiliki website bukan lagi kemewahan milik perusahaan multinasional, melainkan kebutuhan pokok bagi UMKM yang ingin bertahan dan naik kelas. Dengan paket Terima Beres dari 3Biru Digital Studio, Anda bisa memiliki website modern siap pakai dalam 7-14 hari kerja.",
    },
  },
  {
    slug: "strategi-order-whatsapp-otomatis-kuliner",
    title: "Rahasia Melejitkan Penjualan Toko Kuliner & Oleh-Oleh dengan Sistem Order WhatsApp Otomatis",
    excerpt:
      "Studi kasus nyata dari UMKM Roti Kacang Hj. Eliya Lubis: bagaimana mengubah chat manual yang lambat menjadi sistem checkout instan yang melipatgandakan pesanan dari luar kota.",
    category: "WhatsApp & Penjualan",
    categoryColor: "bg-emerald-100 text-emerald-800",
    readTime: "6 menit baca",
    date: "18 November 2026",
    author: "Tim Konsultan 3Biru",
    authorRole: "E-Commerce Specialist",
    featured: false,
    content: {
      intro:
        "Industri kuliner dan oleh-oleh nusantara memiliki potensi pasar yang luar biasa. Namun, kendala terbesar pemilik toko adalah melayani pertanyaan pelanggan satu per satu secara manual: 'Ada rasa apa saja?', 'Berapa harganya?', 'Bisa kirim ke kota X?'. Hal ini memakan waktu CS dan sering membuat calon pembeli batal beli karena respon lambat.",
      sections: [
        {
          heading: "1. Etalase Digital 24 Jam Tanpa Ribet Daftar Akun",
          body: [
            "Konsumen saat ini menginginkan proses yang instan. Meminta pembeli mengunduh aplikasi baru atau mengisi formulir registrasi yang rumit adalah penyebab utama keranjang belanja ditinggalkan (abandoned cart).",
            "Katalog online modern memungkinkan pembeli melihat foto resolusi tinggi, memilih varian rasa, dan langsung memasukkan ke keranjang belanja mini tanpa perlu password atau login akun.",
          ],
        },
        {
          heading: "2. Kalkulator Pesanan & Format Chat Otomatis",
          body: [
            "Seperti yang diterapkan pada website portofolio Roti Kacang Hj. Eliya Lubis (UD. Umega), pembeli dapat memilih jumlah kotak dan sistem akan menghitung total belanja secara real-time.",
            "Saat tombol 'Pesan via WhatsApp' ditekan, sistem otomatis membuat format pesan terstruktur: nama produk, jumlah, varian rasa, nama pemesan, dan alamat pengiriman. CS hanya perlu mengonfirmasi ongkir dan nomor rekening pembayaran.",
          ],
          tip: "Format chat yang rapi mengurangi kesalahan pencatatan pesanan hingga 90% dan mempercepat waktu layanan CS dari 15 menit menjadi kurang dari 2 menit.",
        },
        {
          heading: "3. Jangkauan Pembeli Lintas Kota Se-Indonesia",
          body: [
            "Dengan adanya website resmi yang terdaftar di Google, wisatawan yang pernah berkunjung atau perantau yang rindu makanan khas daerah dapat melakukan repeat order kapan saja dari kota manapun.",
          ],
        },
      ],
      conclusion:
        "Sistem order WhatsApp adalah jembatan emas antara kemudahan belanja web modern dengan kehangatan komunikasi personal orang Indonesia. 3Biru siap membantu bisnis kuliner Anda mengimplementasikan sistem ini secara terima beres.",
    },
  },
  {
    slug: "kesalahan-memilih-website-klinik-dokter",
    title: "5 Kesalahan Fatal Pemilik Klinik Saat Memilih Jasa Pembuatan Website & Jadwal Dokter",
    excerpt:
      "Banyak klinik mengeluarkan jutaan rupiah untuk website kaku yang tidak menyelesaikan masalah antrean. Pelajari strategi digital yang diterapkan Ali Dental Care untuk reservasi pasien yang tertib.",
    category: "Klinik & Medis",
    categoryColor: "bg-cyan-100 text-cyan-800",
    readTime: "4 menit baca",
    date: "15 November 2026",
    author: "Tim Healthcare 3Biru",
    authorRole: "Medical Tech Consultant",
    featured: false,
    content: {
      intro:
        "Di era serba cepat, pasien tidak lagi suka datang ke klinik hanya untuk mengambil nomor antrean fisik lalu menunggu berjam-jam di ruang tunggu. Website klinik modern bukan sekadar pajangan profil, melainkan pintu gerbang operasional pelayanan pasien.",
      sections: [
        {
          heading: "1. Tidak Menampilkan Estimasi Biaya & Layanan yang Jelas",
          body: [
            "Rasa takut akan biaya tak terduga adalah salah satu alasan terbesar orang menunda perawatan medis atau perawatan gigi. Klinik yang transparan mencantumkan daftar tindakan (seperti scaling, behel, tambal gigi) mendapatkan tingkat kepercayaan 3x lebih tinggi.",
            "Pada website Ali Dental Care Tebing Tinggi, pasien dapat melihat estimasi biaya perawatan secara terbuka sebelum memutuskan membuat janji temu.",
          ],
        },
        {
          heading: "2. Formulir Booking yang Terlalu Panjang dan Rumit",
          body: [
            "Pasien yang sedang mengalami keluhan kesehatan tidak memiliki kesabaran untuk mengisi formulir 20 kolom. Buatlah sistem reservasi yang ringkas: pilih layanan, pilih dokter, pilih waktu kunjungan, dan langsung kirim tiket ke WhatsApp.",
          ],
        },
        {
          heading: "3. Mengabaikan Navigasi Rute Google Maps",
          body: [
            "Banyak pasien baru datang dari rekomendasi orang lain atau pencarian darurat. Memastikan alamat klinik terhubung langsung dengan tombol 'Petunjuk Arah' di Google Maps sangat krusial agar pasien tidak tersasar.",
          ],
        },
      ],
      conclusion:
        "Website klinik yang efektif menguntungkan dua belah pihak: pasien merasa nyaman dan terlayani dengan pasti, sedangkan tim administrasi klinik dapat mengatur jadwal dokter dengan rapi dan efisien.",
    },
  },
  {
    slug: "panduan-local-seo-halaman-1-google",
    title: "Panduan Lengkap Local SEO: Cara Bisnis Masuk Halaman 1 Google & Google Maps Gratis",
    excerpt:
      "Ingin toko atau klinik Anda menjadi rekomendasi teratas saat orang mencari di Google? Ini 4 strategi optimasi lokal yang terbukti ampuh mendatangkan pelanggan sekitar.",
    category: "Google SEO",
    categoryColor: "bg-amber-100 text-amber-800",
    readTime: "7 menit baca",
    date: "12 November 2026",
    author: "Tim SEO 3Biru",
    authorRole: "Search Engine Strategist",
    featured: false,
    content: {
      intro:
        "Pernahkah Anda mengetik 'kafe terdekat' atau 'bengkel motor terdekat' di Google Maps? Hasil yang muncul di 3 posisi teratas (Google 3-Pack) mendapatkan lebih dari 70% klik pelanggan. Ini adalah kekuatan dari Local SEO (Search Engine Optimization).",
      sections: [
        {
          heading: "1. Klaim dan Lengkapi Profil Google Bisnisku (Google Business Profile)",
          body: [
            "Pastikan nama usaha, alamat fisik, jam operasional, nomor WhatsApp resmi, dan tautan website bisnis Anda terisi 100% lengkap dan konsisten.",
            "Unggah foto produk, suasana tempat, dan sertakan kategori usaha yang paling spesifik.",
          ],
        },
        {
          heading: "2. Sinkronkan Informasi NAP (Name, Address, Phone) di Website",
          body: [
            "Google memverifikasi keaslian bisnis Anda dengan mencocokkan data di Google Maps dengan data yang tertulis di footer website resmi Anda. Pastikan format nomor telepon dan alamat tertulis identik di semua platform.",
          ],
        },
        {
          heading: "3. Manfaatkan Kata Kunci Kota dan Daerah",
          body: [
            "Gunakan kata kunci spesifik daerah pada judul halaman website Anda, seperti 'Oleh-Oleh Khas Tebing Tinggi' atau 'Klinik Dokter Gigi Tebing Tinggi'. Ini mempermudah Google menaikkan peringkat website Anda untuk pencarian lokal.",
          ],
        },
      ],
      conclusion:
        "Local SEO adalah investasi jangka panjang yang menghasilkan aliran pelanggan konsisten tanpa perlu mengeluarkan biaya iklan berulang setiap hari. Di 3Biru, optimasi Google Search Console & Local SEO sudah termasuk di paket pembuatan website.",
    },
  },
];
