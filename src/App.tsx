import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Code2,
  Gauge,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const contactEmail = 'halo@webkalcer.com';
const whatsappNumber = '6285805566344';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20webkalcer%2C%20saya%20ingin%20konsultasi%20website.`;

const navItems = [
  { id: 'services', label: 'Layanan' },
  { id: 'process', label: 'Proses' },
  { id: 'pricing', label: 'Paket Harga' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Hubungi Kami' },
];

const services = [
  {
    number: '01',
    name: 'Landing Page',
    description:
      'Halaman satu halaman yang fokus ke konversi—cocok untuk campaign, produk baru, atau personal branding. Desain clean, loading cepat, dan bikin pengunjung langsung action.',
    tags: ['Konversi', 'Campaign', 'Personal branding'],
    priceLabel: 'Mulai dari',
    price: '450.000',
    priceStrike: '1.000.000',
  },
  {
    number: '02',
    name: 'Company Profile',
    description:
      'Website multi-halaman yang menceritakan brand kamu secara profesional—dari visi misi, portfolio, sampai tim. Biar calon klien percaya dan yakin memilih kamu.',
    tags: ['Brand story', 'Portfolio', 'Multi-halaman'],
    priceLabel: 'Mulai dari',
    price: '1.500.000',
    priceStrike: '3.000.000',
  },
  {
    number: '03',
    name: 'Website Kustom',
    description:
      'Website yang dibangun dari nol sesuai kebutuhan unik bisnis kamu—mulai dari konsultasi & riset, desain, develop, sampai launch. Kombinasi landing page, company profile, dan fitur custom tanpa batas.',
    tags: ['100% Custom', 'Fitur bebas', 'Skalabel'],
    priceLabel: 'Mulai dari',
    price: '4.500.000',
    priceStrike: '6.000.000',
  },
];

const processSteps = [
  [
    '01',
    'Konsultasi & Riset',
    'Kami dengar dulu kebutuhan kamu, analisis kompetitor, dan kasih rekomendasi yang tepat. Gratis, tanpa tekanan.',
  ],
  [
    '02',
    'Desain & Bangun',
    'Tim kami membuat desain dan develop websitenya. Kamu bisa lihat progress real-time dan kasih feedback langsung.',
  ],
  [
    '03',
    'Launch & Tumbuh',
    'Website live. Kami bantu optimasi dan maintenance. Fokus kamu tinggal menjalankan bisnis, urusan teknis kami yang urus.',
  ],
];

const technologyStack = [
  ['Next.js', 'React framework'],
  ['React', 'UI library'],
  ['Vue.js', 'Frontend framework'],
  ['Astro', 'Static site builder'],
  ['Supabase', 'Backend & database'],
  ['Laravel', 'PHP framework'],
  ['PHP', 'Server language'],
  ['MySQL', 'Relational database'],
  ['SQLite', 'Embedded database'],
];

const benefits = [
  [
    '100% Custom Code',
    'Tidak ada template atau page builder. Setiap baris kode ditulis manual dari nol—ringan, cepat, dan bebas bloat, ditambah optimasi AI untuk performa & SEO maksimal.',
    Code2,
  ],
  [
    'Transparan Sepenuhnya',
    'Kamu bisa lihat progress real-time, akses langsung ke project, dan tahu persis apa yang dikerjakan. No black box, no drama.',
    ShieldCheck,
  ],
  [
    'Cepat & Ringan',
    'Optimasi performa dari awal: gambar di-compress, kode minimalis, hosting cepat. Target loading di bawah 3 detik.',
    Gauge,
  ],
  [
    'Support 24/7',
    'Kalau ada masalah atau bingung, tinggal chat via WhatsApp. Respon cepat, tanpa sistem tiket yang lama.',
    MessageCircle,
  ],
  [
    'Bayar Setelah Jadi, Bergaransi',
    'Tanpa DP besar di awal—kamu bayar setelah website selesai sesuai kesepakatan. Sudah termasuk garansi revisi dan dukungan teknis.',
    BadgeCheck,
  ],
];

const testimonials = [
  [
    'Pelayanannya cepat dan desainnya sesuai banget sama brand kami. Responnya juga selalu cepat setiap kali ada request revisi.',
    'Andi Pratama',
    'Pemilik Bisnis Batik',
    'AP',
  ],
  [
    'Prosesnya jelas dari awal, harga transparan, hasilnya memuaskan. Bisnis kami makin dikenal setelah punya website profesional.',
    'Siti Rahmawati',
    'Pemilik UMKM',
    'SR',
  ],
  [
    'Landing page-nya berkonversi tinggi. Pesanan naik signifikan setelah website jadi. Recommended banget untuk teman-teman pebisnis.',
    'Dimas Firmansyah',
    'Pemilik Warung Makan',
    'DF',
  ],
];

const packageFeatures = [
  'Landing page 1 halaman, desain profesional',
  'Tombol kontak WhatsApp, Instagram & Email',
  'Free domain .my.id / .web.id / .site selama 1 tahun',
  'Upgrade domain .com cuma nambah Rp 150.000',
  'Free modern hosting—cepat & stabil',
  'Free SSL biar website aman',
  'Responsive—mulus di HP & laptop',
  'SEO maksimal biar muncul di Google',
  'Pengerjaan maksimal 3 hari',
];

const faqs = [
  [
    'Apakah saya harus beli domain dan hosting sendiri?',
    'Tidak perlu. Semua sudah termasuk dalam paket, termasuk domain pilihan, modern hosting, SSL, dan support teknis selama satu tahun.',
  ],
  [
    'Berapa lama proses pengerjaannya?',
    'Untuk paket Landing Page, pengerjaan maksimal 3 hari setelah materi dan brief utama kami terima. Untuk kebutuhan yang lebih kompleks, timeline kami diskusikan di awal.',
  ],
  [
    'Apakah desainnya bisa saya tentukan?',
    'Bisa. Kamu dapat mengirim referensi, warna brand, logo, dan contoh website yang kamu suka. Kami bantu menerjemahkannya menjadi desain yang tetap punya karakter.',
  ],
  [
    'Ada garansi revisi?',
    'Ada. Kami membuka ruang feedback di tahap desain dan memastikan detail penting sudah sesuai sebelum website masuk ke tahap launching.',
  ],
  [
    'Saya tidak punya konten, bagaimana?',
    'Tidak masalah. Kami bantu menyusun struktur konten dan arahan copy. Kamu cukup menyiapkan informasi bisnis, foto atau aset yang tersedia, lalu kita lengkapi bersama.',
  ],
  [
    'Cara pesannya bagaimana?',
    'Klik tombol Hubungi via WhatsApp atau Kirim Email, ceritakan kebutuhanmu, lalu kami akan mengirimkan solusi, estimasi harga, dan timeline yang realistis.',
  ],
  [
    'Apakah website saya bakal cepat?',
    'Ya. Performa kami perhatikan sejak awal lewat kode yang ringan, gambar terkompresi, dan hosting yang cepat. Target loading kami di bawah 3 detik.',
  ],
  [
    'Kalau ada masalah setelah jadi, bagaimana?',
    'Tinggal chat via WhatsApp. Kami menyediakan support teknis dan akan membantu mengecek masalahnya tanpa membuat kamu harus berurusan dengan hal teknis sendirian.',
  ],
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll('.reveal')
      .forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { rootMargin: '-28% 0px -60% 0px', threshold: 0 },
    );
    ['services', 'process', 'pricing', 'faq', 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell min-h-[100dvh]">
      <header className="nav-blur fixed inset-x-0 top-0 z-30 border-b border-[hsl(var(--foreground)/.18)]">
        <div className="container-wide flex h-[72px] items-center justify-between">
          <a
            href="#top"
            onClick={() => scrollTo('top')}
            className="group flex items-center gap-3"
            data-testid="link-logo"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))]">
              <span className="h-2.5 w-2.5 rotate-45 bg-[hsl(var(--secondary))]" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-[-.06em]">
              webkalcer<span className="text-[hsl(var(--accent))]">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollTo(item.id)}
                className={`font-mono-custom text-[11px] uppercase tracking-[.06em] transition-colors hover:text-[hsl(var(--accent))] ${
                  activeSection === item.id
                    ? 'text-[hsl(var(--accent))]'
                    : 'text-[hsl(var(--foreground)/.72)]'
                }`}
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-4 py-2.5 font-mono-custom text-[11px] uppercase tracking-[.06em] text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5 md:flex"
            data-testid="link-header-contact"
          >
            Mulai konsultasi <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.35)] md:hidden"
            aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[hsl(var(--foreground)/.18)] bg-[hsl(var(--background))] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-5" aria-label="Navigasi mobile">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between text-3xl font-semibold tracking-[-.06em]"
                  data-testid={`link-mobile-nav-${item.id}`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono-custom text-xs text-[hsl(var(--accent))]">
                    0{index + 1}
                  </span>
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex w-fit items-center gap-2 border-b-2 border-[hsl(var(--accent))] pb-2 font-mono-custom text-xs uppercase"
                data-testid="link-mobile-contact"
              >
                Mulai konsultasi <ArrowUpRight size={15} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section
          id="top"
          className="relative flex min-h-[760px] items-end overflow-hidden pb-16 pt-32 md:min-h-[min(900px,100dvh)] md:pb-20"
        >
          <div className="container-wide relative z-10">
            <div className="mb-16 flex items-center gap-3 reveal">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
              <span className="eyebrow text-[hsl(var(--foreground)/.7)]">
                Studio digital Indonesia / 3+ tahun aktif
              </span>
            </div>
            <h1
              className="display-xl max-w-[1120px] reveal reveal-delay-1"
              data-testid="text-hero-heading"
            >
              Kita bikin website,
              <br />
              bukan jual jasa <span className="serif-italic text-[hsl(var(--accent))]">koding.</span>
            </h1>
            <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end reveal reveal-delay-2">
              <p className="max-w-[520px] text-lg leading-[1.35] text-[hsl(var(--foreground)/.72)]">
                <strong className="font-semibold text-[hsl(var(--foreground))]">
                  webkalcer bikin bisnis kamu naik kelas.
                </strong>{' '}
                Website profesional tanpa ribet. Dari desain sampai launching, kami urus semua.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-link flex w-fit items-center gap-4 font-mono-custom text-xs uppercase tracking-[.08em]"
                  data-testid="link-hero-contact"
                >
                  Mulai konsultasi
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--secondary))] magnetic-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <a
                  href="#services"
                  onClick={() => scrollTo('services')}
                  className="interactive-link flex w-fit items-center gap-3 font-mono-custom text-xs uppercase tracking-[.08em] text-[hsl(var(--foreground)/.66)]"
                  data-testid="link-hero-services"
                >
                  Lihat layanan <ArrowDownRight size={15} className="magnetic-arrow" />
                </a>
              </div>
            </div>
            <div className="mt-20 grid max-w-[680px] grid-cols-3 gap-4 border-t border-[hsl(var(--foreground)/.25)] pt-5 reveal reveal-delay-3">
              {[
                ['50+', 'Proyek selesai'],
                ['98%', 'Klien puas'],
                ['3+', 'Tahun pengalaman'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-4xl font-semibold tracking-[-.07em] md:text-5xl">{value}</p>
                  <p className="mt-2 font-mono-custom text-[10px] uppercase tracking-[.08em] text-[hsl(var(--foreground)/.55)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="hero-orbit-dot" />
            <span className="hero-orbit-spark" />
          </div>
          <span className="absolute bottom-8 right-8 hidden font-mono-custom text-[10px] uppercase tracking-[.12em] text-[hsl(var(--foreground)/.48)] md:block">
            Scroll untuk kenalan →
          </span>
        </section>

        <div className="ticker bg-[hsl(var(--primary))] py-4 text-[hsl(var(--primary-foreground))]" aria-label="Keunggulan webkalcer">
          <div className="ticker-track font-mono-custom text-[11px] uppercase tracking-[.12em]">
            <span>Website custom dari nol</span><span className="text-[hsl(var(--secondary))]">✦</span>
            <span>Harga transparan</span><span className="text-[hsl(var(--accent))]">✦</span>
            <span>Naik kelas tanpa ribet</span><span className="text-[hsl(var(--secondary))]">✦</span>
            <span>Website custom dari nol</span><span className="text-[hsl(var(--secondary))]">✦</span>
            <span>Harga transparan</span><span className="text-[hsl(var(--accent))]">✦</span>
            <span>Naik kelas tanpa ribet</span><span className="text-[hsl(var(--secondary))]">✦</span>
          </div>
        </div>

        <section className="container-wide grid gap-12 py-28 md:grid-cols-[1fr_1.35fr] md:py-40">
          <p className="eyebrow reveal">
            Website yang tepat
            <br />
            untuk bisnis kamu
          </p>
          <div className="reveal reveal-delay-1">
            <p className="max-w-[790px] text-3xl font-medium leading-[1.04] tracking-[-.055em] md:text-6xl">
              Bukan template. Setiap website kami rancang dari nol sesuai kebutuhan bisnis dan karakter brand kamu.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono-custom text-[11px] uppercase tracking-[.1em] text-[hsl(var(--foreground)/.58)]">
              <span>Custom dari nol</span><span>★</span><span>Transparan dari awal</span><span>★</span><span>Support cepat</span>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-[hsl(var(--foreground)/.22)] py-24 md:py-36">
          <div className="container-wide">
            <div className="mb-20 grid gap-8 md:grid-cols-[1fr_2fr]">
              <p className="eyebrow reveal">01 / Layanan</p>
              <div className="reveal reveal-delay-1">
                <h2 className="display-lg max-w-[850px]">
                  Layanan yang
                  <br />
                  <span className="serif-italic text-[hsl(var(--accent))]">tepat sasaran.</span>
                </h2>
                <p className="mt-8 max-w-[520px] text-base leading-relaxed text-[hsl(var(--foreground)/.68)]">
                  Pilih layanan yang paling cocok, atau diskusi dulu—kami bantu menentukan solusi yang sesuai kebutuhan bisnis kamu.
                </p>
              </div>
            </div>
            <div className="border-t border-[hsl(var(--foreground)/.24)]">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  className="group grid gap-5 border-b border-[hsl(var(--foreground)/.24)] py-8 transition-colors hover:bg-[hsl(var(--secondary)/.2)] md:grid-cols-[100px_1fr_1.25fr_230px] md:items-start md:gap-8 md:py-10 reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="eyebrow text-[hsl(var(--accent))]">{service.number}</span>
                  <h3 className="text-3xl font-semibold tracking-[-.06em] md:text-5xl">{service.name}</h3>
                  <p className="max-w-[440px] text-base leading-relaxed text-[hsl(var(--foreground)/.68)]">{service.description}</p>
                  <div className="flex flex-col items-start gap-4 md:items-end">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[hsl(var(--foreground)/.28)] px-3 py-1.5 font-mono-custom text-[10px] uppercase text-[hsl(var(--foreground)/.62)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-left md:text-right">
                      <p className="font-mono-custom text-[10px] uppercase tracking-[.1em] text-[hsl(var(--foreground)/.5)]">
                        {service.priceLabel}
                      </p>
                      <p className="mt-1 text-2xl font-semibold tracking-[-.04em] text-[hsl(var(--foreground))]">
                        <span className="font-mono-custom">Rp</span> {service.price}
                      </p>
                      <p className="mt-1 font-mono-custom text-sm text-[hsl(var(--foreground)/.45)] line-through">
                        Rp {service.priceStrike}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[hsl(var(--primary))] py-24 text-[hsl(var(--primary-foreground))] md:py-36">
          <div className="container-wide grid gap-14 md:grid-cols-[1fr_2fr]">
            <div className="reveal">
              <p className="eyebrow text-[hsl(var(--secondary))]">02 / Proses</p>
              <h2 className="mt-8 max-w-[360px] text-5xl font-semibold leading-[.92] tracking-[-.07em] md:text-7xl">
                Cara kami
                <br />
                <span className="serif-italic text-[hsl(var(--accent))]">bekerja.</span>
              </h2>
              <p className="mt-8 max-w-[300px] leading-relaxed text-[hsl(var(--primary-foreground)/.64)]">
                Transparan dari awal sampai akhir. Kamu lihat progress setiap tahap, tanpa drama, tanpa kejutan.
              </p>
            </div>
            <div>
              {processSteps.map(([number, title, description], index) => (
                <article
                  key={number}
                  className="process-item relative grid grid-cols-[34px_1fr] gap-5 pb-12 reveal"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="relative">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--secondary))] font-mono-custom text-[10px] text-[hsl(var(--primary))]">
                      {number}
                    </span>
                    <span className="process-line border-[hsl(var(--primary-foreground)/.32)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-.05em] md:text-4xl">{title}</h3>
                    <p className="mt-3 max-w-[520px] leading-relaxed text-[hsl(var(--primary-foreground)/.68)]">{description}</p>
                  </div>
                </article>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="interactive-link mt-3 inline-flex items-center gap-3 font-mono-custom text-xs uppercase tracking-[.08em] underlined-link"
                data-testid="link-process-contact"
              >
                Diskusi gratis <ArrowRight size={16} className="magnetic-arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-[hsl(var(--foreground)/.22)] py-24 md:py-32">
          <div className="container-wide">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div className="reveal">
                <p className="eyebrow">Teknologi yang kami pakai</p>
                <p className="mt-8 max-w-[290px] leading-relaxed text-[hsl(var(--foreground)/.65)]">
                  Dari frontend sampai hosting, kami pakai teknologi teruji biar hasilnya maksimal dan tahan lama.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-[hsl(var(--foreground)/.22)] bg-[hsl(var(--foreground)/.22)] sm:grid-cols-3">
                {technologyStack.map(([name, description], index) => (
                  <div
                    key={name}
                    className={`bg-[hsl(var(--background))] p-5 reveal reveal-delay-${(index % 3) + 1}`}
                  >
                    <p className="text-xl font-semibold tracking-[-.05em]">{name}</p>
                    <p className="mt-2 font-mono-custom text-[9px] uppercase tracking-[.05em] text-[hsl(var(--foreground)/.55)]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-wide py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div className="reveal">
              <p className="eyebrow">03 / Kenapa webkalcer?</p>
              <p className="mt-8 max-w-[300px] text-base leading-relaxed text-[hsl(var(--foreground)/.65)]">
                Bukan cuma bikin website. Kami pastikan setiap detail berfungsi dan berdampak buat bisnis kamu.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[hsl(var(--foreground)/.22)] bg-[hsl(var(--foreground)/.22)] sm:grid-cols-2">
              {benefits.map(([title, text, Icon], index) => {
                const BenefitIcon = Icon;
                return (
                  <div
                    key={title as string}
                    className={`${index === benefits.length - 1 ? 'sm:col-span-2 ' : ''}bg-[hsl(var(--background))] p-7 reveal reveal-delay-${(index % 3) + 1}`}
                  >
                    <BenefitIcon size={18} className="text-[hsl(var(--accent))]" />
                    <h3 className="mt-14 text-2xl font-semibold tracking-[-.05em]">{title as string}</h3>
                    <p className="mt-3 leading-relaxed text-[hsl(var(--foreground)/.65)]">{text as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[hsl(var(--secondary))] py-24 md:py-32">
          <div className="container-wide">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="reveal">
                <p className="eyebrow">04 / Kata mereka</p>
                <h2 className="display-lg mt-6 max-w-[720px]">
                  Dengar dari
                  <br />
                  <span className="serif-italic">klien kami.</span>
                </h2>
              </div>
              <p className="max-w-[230px] text-base leading-relaxed text-[hsl(var(--foreground)/.68)] reveal reveal-delay-1">
                Mereka sudah rasain langsung. Sekarang giliran kamu.
              </p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {testimonials.map(([quote, name, role, initials], index) => (
                <figure
                  key={name}
                  className={`flex min-h-[300px] flex-col justify-between border border-[hsl(var(--foreground)/.28)] bg-[hsl(var(--background)/.4)] p-6 reveal reveal-delay-${index + 1}`}
                >
                  <blockquote className="text-xl font-medium leading-[1.05] tracking-[-.04em]">“{quote}”</blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-[hsl(var(--foreground)/.2)] pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary))] font-mono-custom text-[10px] text-[hsl(var(--primary-foreground))]">
                      {initials}
                    </span>
                    <span>
                      <span className="block font-semibold">{name}</span>
                      <span className="font-mono-custom text-[9px] uppercase tracking-[.06em] text-[hsl(var(--foreground)/.58)]">{role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-[hsl(var(--foreground)/.22)] py-24 md:py-36">
          <div className="container-wide">
            <div className="reveal">
              <p className="eyebrow">05 / Paket & harga</p>
              <h2 className="display-lg mt-8 max-w-[580px]">
                Investasi yang <span className="serif-italic text-[hsl(var(--accent))]">transparan.</span>
              </h2>
              <p className="mt-8 max-w-[360px] leading-relaxed text-[hsl(var(--foreground)/.66)]">
                Semua paket include domain, hosting, SSL, dan support teknis. No hidden fee.
              </p>
            </div>
            <div className="price-card mt-16 relative mx-auto max-w-xl overflow-hidden border border-[hsl(var(--foreground)/.28)] bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] md:p-12 reveal">
              <div className="absolute right-0 top-0 bg-[hsl(var(--accent))] px-4 py-2 font-mono-custom text-[10px] uppercase tracking-[.08em] text-[hsl(var(--foreground))]">
                Paling kalcer
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-[hsl(var(--secondary))]">Website Paling Kalcer</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-.06em] md:text-4xl">Landing Page</h3>
                  <p className="mt-2 max-w-[360px] text-[hsl(var(--primary-foreground)/.66)]">Website 1 halaman dengan fitur lengkap dan harga terjangkau.</p>
                </div>
                <Sparkles className="hidden text-[hsl(var(--secondary))] sm:block" size={24} />
              </div>
              <div className="my-8 flex items-end gap-3 border-y border-[hsl(var(--primary-foreground)/.2)] py-6">
                <span className="text-6xl font-semibold tracking-[-.08em]">Rp 450K</span>
                <span className="pb-2 font-mono-custom text-sm text-[hsl(var(--primary-foreground)/.45)] line-through">Rp 1JT</span>
              </div>
              <p className="mb-6 font-mono-custom text-[10px] uppercase tracking-[.08em] text-[hsl(var(--secondary))]">
                Sudah termasuk modern hosting dan domain selama 1 tahun.
              </p>
              <ul className="grid gap-3">
                {packageFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[hsl(var(--primary-foreground)/.8)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[hsl(var(--secondary))]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-[hsl(var(--primary-foreground)/.2)] pt-5">
                <p className="text-sm leading-relaxed text-[hsl(var(--primary-foreground)/.72)]">
                  Semua transaksi aman, bisa bayar setelah website selesai.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[hsl(var(--secondary))] px-5 py-3 font-mono-custom text-[11px] uppercase text-[hsl(var(--primary))] transition-transform hover:-translate-y-1"
                  data-testid="link-price-contact"
                >
                  Pilih paket ini <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="mt-6 flex mx-auto max-w-xl flex-col items-start justify-between gap-5 border border-[hsl(var(--foreground)/.28)] bg-[hsl(var(--secondary))] p-6 md:flex-row md:items-center md:p-7 reveal">
              <div>
                <p className="text-xl font-semibold tracking-[-.04em]">
                  Ingin website custom dengan banyak halaman?
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--foreground)/.68)]">
                  Bisa tanya-tanya dulu, gratis dan tanpa komitmen.
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 font-mono-custom text-[11px] uppercase tracking-[.08em] text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-1"
                data-testid="link-price-custom"
              >
                <MessageCircle size={15} /> Tanya via WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-[hsl(var(--foreground)/.22)] py-20 md:py-28">
          <div className="container-wide grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="reveal">
              <p className="eyebrow">06 / FAQ</p>
              <h2 className="mt-8 max-w-[280px] text-5xl font-semibold leading-[.92] tracking-[-.07em] md:text-7xl">
                Pertanyaan
                <br />
                <span className="serif-italic text-[hsl(var(--accent))]">umum.</span>
              </h2>
            </div>
            <div>
              {faqs.map(([question, answer], index) => (
                <div
                  key={question}
                  className="border-b border-[hsl(var(--foreground)/.22)] first:border-t reveal"
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-medium tracking-[-.03em] md:text-2xl"
                    data-testid={`button-faq-${index}`}
                  >
                    <span>{question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.3)]">
                      {openFaq === index ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div className={`faq-content ${openFaq === index ? 'open' : ''}`}>
                    <div>
                      <p className="max-w-[620px] pb-6 pr-14 leading-relaxed text-[hsl(var(--foreground)/.65)]">{answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[hsl(var(--accent))] py-24 md:py-36">
          <div className="container-wide">
            <p className="eyebrow reveal">07 / Hubungi kami</p>
            <div className="mt-10 flex flex-col justify-between gap-14 md:flex-row md:items-end">
              <h2 className="display-lg max-w-[890px] reveal reveal-delay-1">
                Siap bikin website
                <br />
                <span className="serif-italic">impian kamu?</span>
              </h2>
              <div className="flex shrink-0 flex-col gap-5 reveal reveal-delay-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                  data-testid="link-contact-whatsapp"
                >
                  <span className="border-b-2 border-[hsl(var(--foreground))] pb-2 text-lg font-medium">Hubungi via WhatsApp</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <MessageCircle size={21} />
                  </span>
                </a>
                <a
                  href={`mailto:${contactEmail}?subject=Konsultasi%20Website%20webkalcer`}
                  className="group flex items-center gap-4"
                  data-testid="link-contact-email"
                >
                  <span className="border-b-2 border-[hsl(var(--foreground))] pb-2 text-lg font-medium">Kirim Email</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[hsl(var(--foreground))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <Mail size={21} />
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[hsl(var(--foreground)/.35)] pt-5 font-mono-custom text-[10px] uppercase tracking-[.1em] md:flex-row">
              <span>Respon cepat, biasanya dalam 5 menit</span>
              <span>Konsultasi pertama gratis, tanpa komitmen</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--primary))] py-10 text-[hsl(var(--primary-foreground))]">
        <div className="container-wide grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#top" onClick={() => scrollTo('top')} className="font-display text-xl font-semibold tracking-[-.06em]" data-testid="link-footer-logo">
              webkalcer<span className="text-[hsl(var(--accent))]">.</span>
            </a>
            <p className="mt-5 max-w-[310px] text-sm leading-relaxed text-[hsl(var(--primary-foreground)/.62)]">
              Studio digital dari Indonesia yang bantu bisnis kamu tampil profesional di dunia digital dengan website custom yang efektif.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[hsl(var(--secondary))]">Layanan</p>
            <div className="mt-5 grid gap-2 text-sm text-[hsl(var(--primary-foreground)/.68)]">
              {services.map((service) => <a key={service.name} href="#services" onClick={() => scrollTo('services')} className="transition-colors hover:text-[hsl(var(--secondary))]">{service.name}</a>)}
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
          <div className="flex gap-5"><a href="#top" onClick={() => scrollTo('top')} className="hover:text-[hsl(var(--secondary))]">Kebijakan Privasi</a><a href="#top" onClick={() => scrollTo('top')} className="hover:text-[hsl(var(--secondary))]">Syarat & Ketentuan</a></div>
        </div>
      </footer>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-0 bottom-5 z-40 mx-auto flex w-fit items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-4 font-mono-custom text-xs uppercase tracking-[.08em] text-[hsl(var(--primary-foreground))] shadow-lg shadow-black/25 transition-transform active:scale-95 md:hidden"
        data-testid="link-floating-contact"
      >
        <MessageCircle size={17} />
        Hubungi sekarang
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;