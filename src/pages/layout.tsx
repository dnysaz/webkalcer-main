import { type ReactNode } from 'react';
import { Link } from 'wouter';
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';

const whatsappNumber = '6285805566344';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20webkalcer%2C%20saya%20ingin%20konsultasi%20website.`;
const contactEmail = 'halo@webkalcer.com';

const navItems = [
  { id: 'services', label: 'Layanan' },
  { id: 'process', label: 'Proses' },
  { id: 'pricing', label: 'Paket Harga' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Hubungi Kami' },
];

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell min-h-[100dvh]">
      <header className="nav-blur fixed inset-x-0 top-0 z-30 border-b border-[hsl(var(--foreground)/.18)]">
        <div className="container-wide flex h-[72px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))]">
              <span className="h-2.5 w-2.5 rotate-45 bg-[hsl(var(--secondary))]" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-[-.06em]">
              webkalcer<span className="text-[hsl(var(--accent))]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="font-mono-custom text-[11px] uppercase tracking-[.06em] transition-colors hover:text-[hsl(var(--accent))] text-[hsl(var(--foreground)/.72)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-4 py-2.5 font-mono-custom text-[11px] uppercase tracking-[.06em] text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5 md:flex"
          >
            Mulai konsultasi <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main className="pt-[72px]">{children}</main>

      <footer className="bg-[hsl(var(--primary))] py-10 text-[hsl(var(--primary-foreground))]">
        <div className="container-wide grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-xl font-semibold tracking-[-.06em]">
              webkalcer<span className="text-[hsl(var(--accent))]">.</span>
            </Link>
            <p className="mt-5 max-w-[310px] text-sm leading-relaxed text-[hsl(var(--primary-foreground)/.62)]">
              Studio digital dari Indonesia yang bantu bisnis kamu tampil profesional di dunia digital dengan website custom yang efektif.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[hsl(var(--secondary))]">Layanan</p>
            <div className="mt-5 grid gap-2 text-sm text-[hsl(var(--primary-foreground)/.68)]">
              <Link href="/#services" className="transition-colors hover:text-[hsl(var(--secondary))]">Landing Page</Link>
              <Link href="/#services" className="transition-colors hover:text-[hsl(var(--secondary))]">Company Profile</Link>
              <Link href="/#services" className="transition-colors hover:text-[hsl(var(--secondary))]">Website Kustom</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-[hsl(var(--secondary))]">Kontak</p>
            <div className="mt-5 grid gap-2 text-sm text-[hsl(var(--primary-foreground)/.68)]">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[hsl(var(--secondary))]"><Phone size={14} /> 0858 0556 6344</a>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-2 hover:text-[hsl(var(--secondary))]"><Mail size={14} /> {contactEmail}</a>
              <span className="mt-2 font-mono-custom text-[10px] uppercase tracking-[.06em] text-[hsl(var(--primary-foreground)/.45)]">Sen–Sab 10.00–18.00</span>
              <span className="font-mono-custom text-[10px] uppercase tracking-[.06em] text-[hsl(var(--primary-foreground)/.45)]">Denpasar, Bali</span>
            </div>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-col justify-between gap-4 border-t border-[hsl(var(--primary-foreground)/.2)] pt-5 font-mono-custom text-[10px] uppercase tracking-[.08em] text-[hsl(var(--primary-foreground)/.48)] md:flex-row">
          <span>© 2026 webkalcer. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/syarat-ketentuan" className="hover:text-[hsl(var(--secondary))]">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-[hsl(var(--secondary))]">Syarat & Ketentuan</Link>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-0 bottom-5 z-40 mx-auto flex w-fit items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-4 font-mono-custom text-xs uppercase tracking-[.08em] text-[hsl(var(--primary-foreground))] shadow-lg shadow-black/25 transition-transform active:scale-95 md:hidden"
      >
        <MessageCircle size={17} />
        Hubungi sekarang
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
