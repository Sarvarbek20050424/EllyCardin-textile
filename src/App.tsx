import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Copy, Check, ChevronDown, ChevronUp, Send, Instagram, MessageCircle } from 'lucide-react';
import { translations, type Locale } from './i18n';
import { useStore } from './store';
import ProductSlider from './components/ProductSlider';
import InquiryForm from './components/InquiryForm';
import AdminPanel from './admin/AdminPanel';

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('ellycardin-locale');
    if (saved && ['uz', 'ru', 'en'].includes(saved)) return saved as Locale;
    const browserLang = navigator.language.slice(0, 2);
    if (['ru', 'en'].includes(browserLang)) return browserLang as Locale;
    return 'uz';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdmin, setShowAdmin] = useState(() => {
    return window.location.hash === '#admin';
  });

  const t = translations[locale];

  // Listen for hash changes to toggle admin
  useEffect(() => {
    const handleHashChange = () => {
      setShowAdmin(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // If admin panel is requested
  if (showAdmin) {
    return <AdminPanel onExit={() => { window.location.hash = ''; setShowAdmin(false); }} />;
  }

  useEffect(() => {
    localStorage.setItem('ellycardin-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#inquiry', label: t.nav.inquiry },
    { href: '#faq', label: t.nav.faq },
    { href: '#requisites', label: t.nav.requisites },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[var(--color-paper)]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--color-emerald-brand)] flex items-center justify-center">
                <span className="text-[var(--color-gold)] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>E</span>
              </div>
              <span className={`font-semibold text-sm tracking-wide transition-colors ${scrolled ? 'text-[var(--color-ink)]' : 'text-white'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                ELLYCARDIN
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-gold)] ${scrolled ? 'text-[var(--color-ink)]' : 'text-white/90'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {(['uz', 'ru', 'en'] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLocale(l)}
                    className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                      locale === l
                        ? 'bg-[var(--color-gold)] text-white'
                        : scrolled
                        ? 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded ${scrolled ? 'text-[var(--color-ink)]' : 'text-white'}`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[var(--color-paper)] border-t border-[var(--color-line)]"
            >
              <nav className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-gold)] py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <HeroSection t={t} locale={locale} />

      {/* About Section */}
      <AboutSection t={t} locale={locale} />

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.products.title}
            </h2>
            <p className="text-[var(--color-muted)] text-lg">{t.products.subtitle}</p>
          </motion.div>
          <ProductSlider locale={locale} />
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.inquiry.title}
            </h2>
            <p className="text-[var(--color-muted)] text-lg">{t.inquiry.subtitle}</p>
          </motion.div>
          <InquiryForm locale={locale} t={t} />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection t={t} locale={locale} />

      {/* Requisites Section */}
      <RequisitesSection t={t} locale={locale} />

      {/* Contact Section */}
      <ContactSection t={t} locale={locale} />

      {/* Footer */}
      <footer className="bg-[var(--color-emerald-brand)] text-white/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                <span className="text-[var(--color-gold)] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>E</span>
              </div>
              <span className="font-semibold text-sm tracking-wide text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                ELLYCARDIN TEKSTIL
              </span>
            </div>
            <p className="text-sm text-white/60">{t.footer.rights}</p>
            <div className="flex items-center gap-4">
              <a href="#admin" className="text-xs text-white/40 hover:text-[var(--color-gold)] transition-colors">
                Admin
              </a>
              <a href="https://instagram.com/mashxura_zafarovna" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://t.me/+998990919929" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">
                <Send size={20} />
              </a>
              <a href="https://wa.me/998990919929" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section Component
function HeroSection({ t, locale }: { t: typeof translations.uz; locale: Locale }) {
  const { data } = useStore();
  const heroTexts = data.siteTexts[locale] as any;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-emerald-brand)]">
        {/* Background image with blur and desaturation */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://image.qwenlm.ai/generated-images/020ae54d-815b-493e-a3a4-7f5578b684cf/_result.png)',
            filter: 'blur(6px) saturate(0.5)',
            opacity: 0.3,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-brand)] via-[var(--color-emerald-2)]/80 to-[var(--color-emerald-brand)]" />

        {/* Silk lines decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-10 animate-float-silk" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,350 600,400 T1200,400" fill="none" stroke="#C2A56B" strokeWidth="1" />
          <path d="M0,300 Q400,250 800,300 T1200,300" fill="none" stroke="#C2A56B" strokeWidth="0.5" />
          <path d="M0,500 Q200,450 600,500 T1200,500" fill="none" stroke="#C2A56B" strokeWidth="0.8" />
          <path d="M0,200 Q500,180 900,220 T1200,200" fill="none" stroke="#C2A56B" strokeWidth="0.3" />
          <path d="M0,600 Q350,580 700,600 T1200,600" fill="none" stroke="#C2A56B" strokeWidth="0.6" />
        </svg>

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {heroTexts?.hero?.title || t.hero.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-[var(--color-gold)] mb-6 font-light" style={{ fontFamily: 'var(--font-heading)' }}>
            {heroTexts?.hero?.subtitle || t.hero.subtitle}
          </p>
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="h-[1px] bg-[var(--color-gold)] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroTexts?.hero?.description || t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-8 py-3 bg-[var(--color-gold)] text-white font-medium rounded-sm hover:bg-[var(--color-gold-dark)] transition-all duration-300 text-sm tracking-wide"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#inquiry"
            className="px-8 py-3 border border-white/30 text-white font-medium rounded-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300 text-sm tracking-wide"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[var(--color-gold)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section Component
function AboutSection({ t, locale }: { t: typeof translations.uz; locale: Locale }) {
  const { data } = useStore();
  const aboutTexts = data.siteTexts[locale] as any;

  const facts = [
    { label: t.about.facts.name, value: t.about.factsValues.name },
    { label: t.about.facts.field, value: t.about.factsValues.field },
    { label: t.about.facts.address, value: t.about.factsValues.address },
    { label: t.about.facts.taxId, value: t.about.factsValues.taxId },
    { label: t.about.facts.founded, value: t.about.factsValues.founded },
    { label: t.about.facts.employees, value: t.about.factsValues.employees },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {aboutTexts?.about?.title || t.about.title}
            </h2>
            <div className="w-16 h-[1px] bg-[var(--color-gold)] mb-6" />
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              {aboutTexts?.about?.description || t.about.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[var(--color-ivory)] rounded-sm p-6 lg:p-8">
              <div className="space-y-4">
                {facts.map((fact, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-4 border-b border-[var(--color-line)] last:border-0 last:pb-0">
                    <span className="text-sm font-semibold text-[var(--color-gold-dark)] sm:w-36 shrink-0">{fact.label}</span>
                    <span className="text-[var(--color-ink)] text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection({ t, locale }: { t: typeof translations.uz; locale: Locale }) {
  const { data } = useStore();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = data.faq[locale] as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[var(--color-ivory)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[var(--color-paper)] rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--color-ivory)]/50 transition-colors"
              >
                <span className="text-[var(--color-ink)] font-medium pr-4">{item.q}</span>
                {openIndex === i ? (
                  <ChevronUp size={20} className="text-[var(--color-gold)] shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-[var(--color-muted)] shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[var(--color-muted)] leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Requisites Section Component
function RequisitesSection({ t, locale }: { t: typeof translations.uz; locale: Locale }) {
  const { data } = useStore();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const items = data.requisites[locale] as Array<{ label: string; value: string }>;

  const handleCopy = useCallback((value: string, index: number) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  }, []);

  return (
    <section id="requisites" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.requisites.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--color-ivory)] rounded-sm overflow-hidden"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--color-line)] last:border-0">
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--color-muted)] mb-1">{item.label}</div>
                <div className="text-sm font-medium text-[var(--color-ink)] truncate">{item.value}</div>
              </div>
              <button
                onClick={() => handleCopy(item.value, i)}
                className="ml-3 flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-sm border border-[var(--color-line)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all shrink-0"
              >
                {copiedIndex === i ? (
                  <>
                    <Check size={12} className="text-green-600" />
                    <span className="text-green-600">{t.requisites.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>{t.requisites.copy}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection({ t, locale }: { t: typeof translations.uz; locale: Locale }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold text-[var(--color-emerald-brand)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-paper)] p-6 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-emerald-brand)]/10 flex items-center justify-center">
                <Phone size={18} className="text-[var(--color-emerald-brand)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-ink)]">{t.contact.phones}</h3>
            </div>
            <div className="space-y-2">
              <a href="tel:+998909179929" className="block text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors text-sm">
                +998 90 917 99 29
              </a>
              <a href="tel:+998990919929" className="block text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors text-sm">
                +998 99 091 99 29
              </a>
            </div>
          </motion.div>

          {/* Email & Messengers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[var(--color-paper)] p-6 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-emerald-brand)]/10 flex items-center justify-center">
                <Mail size={18} className="text-[var(--color-emerald-brand)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-ink)]">{t.contact.email}</h3>
            </div>
            <a href="mailto:ellycardin.tekstil@mail.ru" className="block text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors text-sm mb-4">
              ellycardin.tekstil@mail.ru
            </a>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/998990919929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-sm text-xs font-medium hover:bg-green-100 transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href="https://t.me/+998990919929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-sm text-xs font-medium hover:bg-blue-100 transition-colors">
                <Send size={14} /> Telegram
              </a>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-paper)] p-6 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-emerald-brand)]/10 flex items-center justify-center">
                <MapPin size={18} className="text-[var(--color-emerald-brand)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-ink)]">{t.contact.address}</h3>
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              {locale === 'uz' && "O'zbekiston, Quvasoy shahri, Mustaqillik ko'chasi, 3-uy"}
              {locale === 'ru' && 'Узбекистан, г. Кувасай, ул. Мустакиллик, д. 3'}
              {locale === 'en' && 'Uzbekistan, Kuvasay city, Mustakillik street, house 3'}
            </p>
            <a
              href="https://www.openstreetmap.org/search?query=Kuvasay%20Mustakillik%203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] transition-colors"
            >
              <MapPin size={12} /> {t.contact.viewMap}
            </a>
          </motion.div>
        </div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://instagram.com/mashxura_zafarovna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-sm font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Instagram size={18} /> @mashxura_zafarovna
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
