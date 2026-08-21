import PageLayout from './layout';
import { Link } from 'wouter';
import { ArrowLeft, Check, X } from 'lucide-react';

const refundableItems = [
  {
    condition: 'Pembatalan sebelum pengerjaan dimulai',
    refund: true,
    detail: '100% dikembalikan tanpa potongan',
  },
  {
    condition: 'Pembatalan saat tahap desain',
    refund: true,
    detail: 'Pengembalian dana sebesar biaya hosting & domain (jika sudah dibeli)',
  },
  {
    condition: 'Pembatalan setelah desain disetujui',
    refund: false,
    detail: 'Biaya desain tidak dapat dikembalikan',
  },
  {
    condition: 'Pembatalan saat tahap development',
    refund: false,
    detail: 'Seluruh biaya tidak dapat dikembalikan',
  },
  {
    condition: 'Website sudah live',
    refund: false,
    detail: 'Tidak ada pengembalian dana',
  },
];

const steps = [
  {
    number: '01',
    title: 'Ajukan Permohonan',
    description:
      'Hubungi kami via WhatsApp atau email dengan menyertakan alasan pembatalan dan data pemesanan.',
  },
  {
    number: '02',
    title: 'Verifikasi',
    description:
      'Kami akan memverifikasi status pemesanan Anda dan menentukan kelayakan pengembalian dana.',
  },
  {
    number: '03',
    title: 'Proses Pengembalian',
    description:
      'Jika disetujui, pengembalian dana akan diproses dalam 5-7 hari kerja ke rekening atau metode pembayaran yang digunakan.',
  },
];

export default function RefundPolicy() {
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
          <p className="eyebrow text-[hsl(var(--accent))]">Kebijakan</p>
          <h1 className="mt-6 display-lg max-w-[800px]">
            Refund{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">Policy.</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-base leading-relaxed text-[hsl(var(--foreground)/.72)]">
            Kami berkomitmen untuk transparan dan adil. Berikut ketentuan pengembalian dana
            untuk layanan webkalcer.
          </p>
          <p className="mt-3 font-mono-custom text-[11px] uppercase tracking-[.1em] text-[hsl(var(--foreground)/.5)]">
            Terakhir diperbarui: 21 Agustus 2026
          </p>
        </div>

        {/* Refund Table */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
            Kapan refund{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">berlaku?</span>
          </h2>
          <div className="mt-8 border border-[hsl(var(--foreground)/.22)] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_1.5fr] border-b border-[hsl(var(--foreground)/.22)] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
              <div className="px-5 py-4 font-mono-custom text-[10px] uppercase tracking-[.1em]">
                Kondisi
              </div>
              <div className="px-5 py-4 text-center font-mono-custom text-[10px] uppercase tracking-[.1em]">
                Refund
              </div>
              <div className="px-5 py-4 font-mono-custom text-[10px] uppercase tracking-[.1em]">
                Detail
              </div>
            </div>
            {/* Rows */}
            {refundableItems.map((item, index) => (
              <div
                key={item.condition}
                className={`grid grid-cols-[1fr_100px_1.5fr] ${
                  index < refundableItems.length - 1
                    ? 'border-b border-[hsl(var(--foreground)/.18)]'
                    : ''
                }`}
              >
                <div className="px-5 py-4 text-sm font-medium text-[hsl(var(--foreground))]">
                  {item.condition}
                </div>
                <div className="flex items-center justify-center px-5 py-4">
                  {item.refund ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--secondary)/.2)]">
                      <Check size={14} className="text-[hsl(var(--secondary))]" />
                    </span>
                  ) : (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--destructive)/.12)]">
                      <X size={14} className="text-[hsl(var(--destructive))]" />
                    </span>
                  )}
                </div>
                <div className="px-5 py-4 text-sm leading-relaxed text-[hsl(var(--foreground)/.65)]">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refund Process */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
            Proses{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">pengembalian.</span>
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="border border-[hsl(var(--foreground)/.22)] p-7"
              >
                <span className="font-mono-custom text-[10px] uppercase tracking-[.1em] text-[hsl(var(--accent))]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-.04em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--foreground)/.65)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Exceptions */}
        <div className="mt-20 border-t border-[hsl(var(--foreground)/.22)] pt-12">
          <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
            Pengecualian{' '}
            <span className="serif-italic text-[hsl(var(--accent))]">umum.</span>
          </h2>
          <div className="mt-8 grid gap-4">
            {[
              'Domain yang sudah didaftarkan tidak dapat dikembalikan karena merupakan layanan dari registrar pihak ketiga.',
              'Biaya hosting yang sudah digunakan (server resources) tidak dapat dikembalikan.',
              'Pengembalian dana tidak berlaku untuk pesanan yang dibatalkan karena force majeure (bencana alam, gangguan internet, dll).',
              'Jika terdapat pelanggaran terhadap Syarat & Ketentuan, webkalcer berhak menolak pengembalian dana.',
            ].map((item, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-[hsl(var(--foreground)/.72)]"
              >
                • {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[hsl(var(--foreground)/.22)] pt-10">
          <p className="text-sm leading-relaxed text-[hsl(var(--foreground)/.55)]">
            Pertanyaan lebih lanjut? Hubungi kami melalui{' '}
            <a
              href="mailto:halo@webkalcer.com"
              className="text-[hsl(var(--accent))] underline underline-offset-2"
            >
              halo@webkalcer.com
            </a>{' '}
            atau{' '}
            <a
              href="https://wa.me/6285805566344?text=Halo%20webkalcer%2C%20saya%20punya%20pertanyaan%20tentang%20refund%20policy."
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
