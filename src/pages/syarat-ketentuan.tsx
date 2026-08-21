import PageLayout from './layout';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Definisi',
    content: [
      '"webkalcer" merujuk pada penyedia jasa pembuatan website yang berdomisili di Denpasar, Bali, Indonesia.',
      '"Klien" merujuk kepada pihak yang menggunakan layanan webkalcer, baik individu maupun badan usaha.',
      '"Layanan" merujuk kepada seluruh jasa yang ditawarkan oleh webkalcer, termasuk namun tidak terbatas pada pembuatan landing page, company profile, website kustom, serta UI/UX design.',
      '"Website" merujuk pada produk digital yang dibuat oleh webkalcer untuk Klien.',
    ],
  },
  {
    title: '2. Ruang Lingkup Layanan',
    content: [
      'webkalcer menyediakan jasa pembuatan website custom sesuai dengan paket yang dipilih oleh Klien.',
      'Setiap paket layanan mencakup domain, hosting, SSL, dan support teknis selama masa aktif (1 tahun sejak website live).',
      'Detail spesifik setiap paket, termasuk jumlah halaman, fitur, dan estimasi waktu pengerjaan, dijelaskan pada halaman Paket Harga di website webkalcer.',
      'Layanan di luar ruang lingkup paket yang dipilih akan dikenakan biaya tambahan dan harus disepakati sebelum pengerjaan dimulai.',
    ],
  },
  {
    title: '3. Pemesanan & Konfirmasi',
    content: [
      'Pemesanan layanan dilakukan melalui WhatsApp atau email resmi webkalcer.',
      'Pemesanan dianggap sah setelah Klien menyetujui proposal/estimasi harga dan timeline yang dikirimkan oleh webkalcer.',
      'webkalcer berhak menolak pemesanan yang dianggap tidak sesuai dengan kapasitas atau keahlian yang dimiliki.',
    ],
  },
  {
    title: '4. Pembayaran',
    content: [
      'Pembayaran dilakukan sesuai dengan ketentuan pada paket yang dipilih. webkalcer menerapkan sistem bayar setelah website selesai sesuai kesepakatan.',
      'Metode pembayaran akan dikomunikasikan saat proses pemesanan.',
      'Semua harga yang tercantum sudah termasuk pajak yang berlaku, kecuali disebutkan lain secara tertulis.',
      'Keterlambatan pembayaran dapat mengakibatkan penundaan penyerahan file source code atau penghentian support teknis.',
    ],
  },
  {
    title: '5. Timeline Pengerjaan',
    content: [
      'Estimasi waktu pengerjaan untuk paket Landing Page adalah maksimal 3 hari kerja setelah materi dan brief utama diterima.',
      'Untuk paket Company Profile dan Website Kustom, timeline pengerjaan akan disepakati bersama di awal.',
      'Keterlambatan pengiriman materi dari Klien dapat mempengaruhi timeline pengerjaan.',
      'webkalcer akan memberikan update progress secara berkala selama masa pengerjaan.',
    ],
  },
  {
    title: '6. Revisi',
    content: [
      'Setiap paket sudah termasuk ruang revisi yang wajar pada tahap desain.',
      'Revisi yang termasuk dalam ruang lingkup meliputi perubahan minor pada warna, layout, teks, dan gambar.',
      'Revisi yang melibatkan perubahan struktur halaman, penambahan fitur baru, atau perubahan signifikan lainnya akan dikenakan biaya tambahan.',
      'Jumlah maksimal revisi per tahap akan dikomunikasikan pada saat proposal.',
    ],
  },
  {
    title: '7. Hak Kekayaan Intelektual',
    content: [
      'Setelah pembayaran lunas, Klien memiliki hak penuh atas source code dan desain website yang telah dibuat.',
      'webkalcer berhak menggunakan hasil pekerjaan untuk portofolio dan materi promosi, kecuali Klien secara tertulis menolaknya.',
      'Klien bertanggung jawab atas konten (gambar, teks, logo) yang disediakan untuk kebutuhan website.',
    ],
  },
  {
    title: '8. Hosting & Domain',
    content: [
      'Domain dan hosting gratis berlaku selama 1 tahun sejak website live.',
      'Setelah masa 1 tahun, perpanjangan domain dan hosting menjadi tanggung jawab Klien.',
      'webkalcer akan memberikan informasi terkait biaya perpanjangan sebelum masa aktif berakhir.',
      'Upgrade domain dari .my.id/.web.id/.site ke .com dikenakan biaya tambahan Rp 150.000.',
    ],
  },
  {
    title: '9. Support Teknis',
    content: [
      'Support teknis tersedia selama masa aktif domain dan hosting (1 tahun).',
      'Support diberikan melalui WhatsApp dan mencakup perbaikan bug, masalah teknis, dan bantuan penggunaan dasar.',
      'Support tidak mencakup penambahan fitur baru, perubahan desain signifikan, atau migrasi hosting.',
    ],
  },
  {
    title: '10. Pembatalan & Penghentian',
    content: [
      'Klien dapat membatalkan pesanan sebelum pengerjaan dimulai tanpa dikenakan biaya.',
      'Jika pembatalan dilakukan setelah pengerjaan dimulai, biaya yang sudah dikeluarkan tetap harus dibayarkan.',
      'webkalcer berhak menghentikan layanan jika Klien terbukti melanggar ketentuan yang berlaku.',
    ],
  },
  {
    title: '11. Batasan Tanggung Jawab',
    content: [
      'webkalcer tidak bertanggung jawab atas kerugian tidak langsung, kehilangan data, atau kehilangan bisnis akibat penggunaan website.',
      'webkalcer tidak menjamin peringkat spesifik di mesin pencari, meskipun setiap website dioptimasi untuk SEO.',
      'Ketersediaan hosting dan uptime bergantung pada penyedia layanan hosting pihak ketiga.',
    ],
  },
  {
    title: '12. Perubahan Ketentuan',
    content: [
      'webkalcer berhak mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.',
      'Perubahan berlaku efektif sejak tanggal publikasi di website webkalcer.',
      'Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap ketentuan yang baru.',
    ],
  },
  {
    title: '13. Hukum yang Berlaku',
    content: [
      'Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia.',
      'Setiap sengketa yang timbul akan diselesaikan secara musyawarah terlebih dahulu. Jika tidak tercapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Denpasar, Bali.',
    ],
  },
];

export default function SyaratKetentuan() {
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
          <p className="eyebrow text-[hsl(var(--accent))]">Legal</p>
          <h1 className="mt-6 display-lg max-w-[800px]">
            Syarat &amp;{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">Ketentuan.</span>
          </h1>
          <p className="mt-6 font-mono-custom text-[11px] uppercase tracking-[.1em] text-[hsl(var(--foreground)/.5)]">
            Terakhir diperbarui: 21 Agustus 2026
          </p>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_2.2fr]">
          <div className="hidden md:block">
            <div className="sticky top-24">
              <p className="eyebrow text-[hsl(var(--foreground)/.5)]">Daftar isi</p>
              <nav className="mt-5 grid gap-2">
                {sections.map((s) => (
                  <a
                    key={s.title}
                    href={`#${s.title.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase()}`}
                    className="text-sm text-[hsl(var(--foreground)/.6)] transition-colors hover:text-[hsl(var(--accent))]"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="grid gap-12">
            {sections.map((section) => (
              <article
                key={section.title}
                id={section.title.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase()}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-[hsl(var(--foreground)/.72)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[hsl(var(--foreground)/.22)] pt-10">
          <p className="text-sm leading-relaxed text-[hsl(var(--foreground)/.55)]">
            Ada pertanyaan tentang syarat &amp; ketentuan ini? Hubungi kami melalui{' '}
            <a
              href="mailto:halo@webkalcer.com"
              className="text-[hsl(var(--accent))] underline underline-offset-2"
            >
              halo@webkalcer.com
            </a>{' '}
            atau{' '}
            <a
              href="https://wa.me/6285805566344?text=Halo%20webkalcer%2C%20saya%20punya%20pertanyaan%20tentang%20syarat%20%26%20ketentuan."
              target="_blank"
              rel="noreferrer"
              className="text-[hsl(var(--accent))] underline underline-offset-2"
            >
              WhatsApp kami
            </a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
