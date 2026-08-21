import { useState } from 'react';
import PageLayout from './layout';
import { Link } from 'wouter';
import { ArrowLeft, ArrowUpRight, MessageCircle, Minus, Plus } from 'lucide-react';

const whatsappLink = 'https://wa.me/6285805566344?text=Halo%20webkalcer%2C%20saya%20ingin%20konsultasi%20website.';

const faqCategories = [
  {
    category: 'Layanan',
    items: [
      [
        'Apa saja layanan yang ditawarkan webkalcer?',
        'Kami menawarkan tiga layanan utama: Landing Page (website 1 halaman), Company Profile (website multi-halaman), dan Website Kustom (website dibangun dari nol sesuai kebutuhan bisnis).',
      ],
      [
        'Apakah webkalcer hanya membuat landing page?',
        'Tidak. Kami mengerjakan berbagai jenis website, mulai dari landing page, company profile, hingga website kustom dengan fitur sesuai kebutuhan bisnis kamu.',
      ],
      [
        'Teknologi apa yang dipakai webkalcer?',
        'Kami menggunakan teknologi modern seperti React, Next.js, Vue.js, Astro, Supabase, Laravel, dan lainnya. Teknologi dipilih berdasarkan kebutuhan proyek agar hasilnya optimal.',
      ],
      [
        'Apakah saya bisa request desain sendiri?',
        'Bisa. Kamu bisa mengirim referensi desain, warna brand, logo, dan contoh website yang kamu suka. Kami bantu menerjemahkannya menjadi desain yang tetap punya karakter.',
      ],
    ],
  },
  {
    category: 'Pembayaran & Harga',
    items: [
      [
        'Berapa harga layanan webkalcer?',
        'Harga mulai dari Rp 450.000 untuk Landing Page, Rp 1.500.000 untuk Company Profile, dan Rp 4.500.000 untuk Website Kustom. Semua paket sudah termasuk domain, hosting, dan SSL.',
      ],
      [
        'Apakah ada biaya tersembunyi?',
        'Tidak ada. Semua harga sudah transparan dan mencakup domain, hosting, SSL selama 1 tahun, serta support teknis. Biaya tambahan hanya untuk layanan di luar paket yang dipilih.',
      ],
      [
        'Bagaimana cara pembayarannya?',
        'Kami menerapkan sistem bayar setelah website selesai sesuai kesepakatan. Detail metode pembayaran akan dikomunikasikan saat proses pemesanan.',
      ],
      [
        'Apakah bisa cicilan?',
        'Untuk paket saat ini, pembayaran dilakukan secara full setelah website selesai. Untuk proyek Website Kustom dengan nilai besar, bisa didiskusikan.',
      ],
    ],
  },
  {
    category: 'Proses Pengerjaan',
    items: [
      [
        'Berapa lama proses pengerjaannya?',
        'Untuk paket Landing Page, pengerjaan maksimal 3 hari setelah materi dan brief utama diterima. Untuk Company Profile dan Website Kustom, timeline disepakati bersama di awal.',
      ],
      [
        'Bagaimana saya bisa melihat progress pengerjaan?',
        'Kami memberikan update progress secara berkala dan kamu bisa melihat langsung. Transparan dari awal sampai akhir, tanpa black box.',
      ],
      [
        'Apakah saya harus menyediakan konten sendiri?',
        'Tidak masalah jika kamu belum punya konten. Kami bantu menyusun struktur konten dan arahan copy. Cukup siapkan informasi bisnis dan foto yang tersedia.',
      ],
      [
        'Ada garansi revisi?',
        'Ada. Kami membuka ruang feedback di tahap desain dan memastikan detail penting sudah sesuai sebelum website masuk ke tahap launching.',
      ],
    ],
  },
  {
    category: 'Teknis & Support',
    items: [
      [
        'Apakah website saya akan cepat?',
        'Ya. Performa kami perhatikan sejak awal lewat kode yang ringan, gambar terkompresi, dan hosting yang cepat. Target loading di bawah 3 detik.',
      ],
      [
        'Apakah website saya muncul di Google?',
        'Setiap website kami optimasi untuk SEO agar mudah ditemukan di mesin pencari. Namun, peringkat spesifik di Google bergantung pada banyak faktor eksternal.',
      ],
      [
        'Kalau ada masalah setelah jadi, bagaimana?',
        'Tinggal chat via WhatsApp. Kami menyediakan support teknis selama masa aktif domain & hosting (1 tahun) dan akan membantu mengecek masalahnya.',
      ],
      [
        'Bagaimana setelah 1 tahun hosting berakhir?',
        'Kami akan menginformasikan biaya perpanjangan sebelum masa aktif berakhir. Perpanjangan menjadi tanggung jawab Klien.',
      ],
    ],
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<string | null>('layanan-0');

  return (
    <PageLayout>
      <section className="container-wide py-20 md:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono-custom text-[11px] uppercase tracking-[.08em] text-[hsl(var(--foreground)/.55)] transition-colors hover:text-[hsl(var(--accent))]"
        >
          <ArrowLeft size={14} /> Kembali ke beranda
        </Link>

        <div className="mt-12">
          <p className="eyebrow text-[hsl(var(--accent))]">Bantuan</p>
          <h1 className="mt-6 display-lg max-w-[800px]">
            Pertanyaan{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">umum.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-[hsl(var(--foreground)/.72)]">
            Belum menemukan jawaban? Hubungi kami langsung melalui WhatsApp untuk konsultasi gratis.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="mt-20 grid gap-16">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-4 border-b border-[hsl(var(--foreground)/.22)] pb-4">
                <span className="eyebrow text-[hsl(var(--accent))]">{category.category}</span>
              </div>
              <div>
                {category.items.map(([question, answer], index) => {
                  const faqKey = `${category.category.toLowerCase()}-${index}`;
                  const isOpen = openFaq === faqKey;
                  return (
                    <div
                      key={question}
                      className="border-b border-[hsl(var(--foreground)/.18)]"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : faqKey)}
                        className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-medium tracking-[-.03em] md:text-xl"
                      >
                        <span>{question}</span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.3)]">
                          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </span>
                      </button>
                      <div
                        className={`faq-content ${isOpen ? 'open' : ''}`}
                      >
                        <div>
                          <p className="max-w-[620px] pb-6 pr-14 leading-relaxed text-[hsl(var(--foreground)/.65)]">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-[hsl(var(--foreground)/.22)] pt-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
                Masih ada pertanyaan?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--foreground)/.65)]">
                Konsultasi pertama gratis, tanpa komitmen.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-3.5 font-mono-custom text-[11px] uppercase tracking-[.08em] text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={15} /> Tanya via WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
