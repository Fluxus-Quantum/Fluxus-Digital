import React, { useState, useEffect } from 'react';

import logo from './Public/logo.png'

import { 
  Globe, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Users, 
  TrendingUp, 
  Target, 
  MessageCircle, 
  Mail, 
  Smartphone, 
  Check, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTENT, PRICING, type Language, type Currency } from './translations';
import { cn } from './lib/utils';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [activeHero, setActiveHero] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = CONTENT[lang];
  const p = PRICING[currency];

  // Auto-cycle hero variations for A/B testing demo feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src={logo}" alt="Logo" className="absolute inset-0 w-full h-full object-contain z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center transform rotate-12">
                  <Zap className="text-brand-bg w-6 h-6 -rotate-12" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Fluxus<span className="text-brand-accent">Digital</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-brand-accent transition-colors">{t.nav.services}</a>
              <a href="#benefits" className="text-sm font-medium hover:text-brand-accent transition-colors">{t.nav.benefits}</a>
              <a href="#pricing" className="text-sm font-medium hover:text-brand-accent transition-colors">{t.nav.pricing}</a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-accent transition-colors">{t.nav.contact}</a>
              
              <div className="h-6 w-px bg-white/10" />

              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setLang('es')}
                  className={cn("text-xs font-bold px-2 py-1 rounded transition-all", lang === 'es' ? "bg-brand-accent text-brand-bg" : "text-brand-text-secondary hover:text-brand-text-primary")}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={cn("text-xs font-bold px-2 py-1 rounded transition-all", lang === 'en' ? "bg-brand-accent text-brand-bg" : "text-brand-text-secondary hover:text-brand-text-primary")}
                >
                  EN
                </button>
              </div>

              {/* Currency Selector */}
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-sm font-bold border-none focus:ring-0 cursor-pointer text-brand-text-secondary"
              >
                <option value="USD" className="bg-brand-surface">USD</option>
                <option value="EUR" className="bg-brand-surface">EUR</option>
                <option value="COP" className="bg-brand-surface">COP</option>
              </select>

              <a 
                href="#contact" 
                className="bg-brand-success text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent transition-all shadow-lg shadow-brand-success/20"
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-brand-bg border-b border-white/10"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
                <a href="#benefits" onClick={() => setIsMenuOpen(false)}>{t.nav.benefits}</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>{t.nav.pricing}</a>
                <div className="flex gap-4 pt-4 border-t border-white/10">
                   <button onClick={() => setLang('es')} className={cn("px-4 py-2 rounded-lg", lang === 'es' ? "bg-brand-accent text-brand-bg" : "bg-brand-surface")}>ES</button>
                   <button onClick={() => setLang('en')} className={cn("px-4 py-2 rounded-lg", lang === 'en' ? "bg-brand-accent text-brand-bg" : "bg-brand-surface")}>EN</button>
                </div>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className="w-full bg-brand-surface rounded-lg px-4 py-2 border-none"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="COP">COP</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                key={activeHero + lang}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-brand-accent/20">
                  <Star className="w-4 h-4 fill-current" />
                  {t.hero[activeHero].trustBadge}
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  {t.hero[activeHero].title.split(' ').map((word, i) => (
                    <span key={i} className={cn(i > 3 && i < 6 ? "text-brand-accent" : "")}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl text-brand-text-secondary mb-8 max-w-xl leading-relaxed">
                  {t.hero[activeHero].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/573209403080" 
                    className="flex items-center justify-center gap-2 bg-brand-success text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-accent transition-all group shadow-lg shadow-brand-success/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.hero[activeHero].ctaPrimary}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center gap-2 bg-brand-surface border border-white/10 hover:border-brand-accent px-8 py-4 rounded-xl text-lg font-bold transition-all text-brand-text-primary"
                  >
                    {t.hero[activeHero].ctaSecondary}
                  </a>
                </div>

                {/* Microcopy objections resolver */}
                <div className="mt-8 flex items-center gap-6 text-sm text-brand-text-secondary font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-success" />
                    {lang === 'es' ? 'Diagnóstico Gratis' : 'Free Audit'}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-success" />
                    {lang === 'es' ? 'Entrega en 7 días' : '7-Day Delivery'}
                  </div>
                </div>
              </motion.div>

              <div className="relative hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 p-8 bg-brand-surface rounded-3xl shadow-2xl border border-white/5 overflow-hidden"
                >
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-brand-bg/50 rounded-full animate-pulse" />
                    <div className="h-32 w-full bg-brand-accent/5 rounded-xl border border-dashed border-brand-accent/20 flex items-center justify-center">
                      <TrendingUp className="text-brand-accent w-12 h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-brand-bg/30 rounded-lg" />
                      <div className="h-12 bg-brand-bg/30 rounded-lg" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Float elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-brand-surface p-4 rounded-2xl shadow-xl border border-white/10 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-brand-text-secondary font-bold uppercase">{lang === 'es' ? 'Leads Hoy' : 'Today\'s Leads'}</div>
                      <div className="text-xl font-bold">+24</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-brand-surface p-4 rounded-2xl shadow-xl border border-white/10 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-brand-text-primary uppercase tracking-tight">USA | EUROPE | LATAM</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS SECTION */}
        <section id="benefits" className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 text-brand-text-primary">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.painPoints.title}</h2>
              <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {t.painPoints.items.map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-brand-surface border border-white/5 hover:bg-brand-accent/[0.03] transition-all duration-300">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-all">
                    {i === 0 ? <Users className="w-8 h-8" /> : i === 1 ? <Target className="w-8 h-8" /> : <Smartphone className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-brand-text-primary">{item.title}</h3>
                  <p className="leading-relaxed text-brand-text-secondary group-hover:text-brand-text-primary/80 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-brand-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-brand-text-primary">{t.services.title}</h2>
              <p className="text-xl text-brand-text-secondary">{lang === 'es' ? 'No vendemos tecnología, vendemos resultados.' : 'We don\'t sell tech, we sell results.'}</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {t.services.items.map((service, i) => (
                <div key={i} className="bg-brand-surface p-10 rounded-[2.5rem] border border-white/5 shadow-sm hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group">
                  <div className="text-brand-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                    {i === 0 ? <Target className="w-12 h-12" /> : i === 1 ? <Users className="w-12 h-12" /> : <ShieldCheck className="w-12 h-12" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-text-primary">{service.title}</h3>
                  <p className="text-brand-text-secondary mb-8 leading-relaxed">{service.description}</p>
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[10px] uppercase font-black tracking-widest text-brand-accent mb-1">{lang === 'es' ? 'RESULTADO' : 'OUTCOME'}</div>
                    <div className="font-bold text-brand-text-primary">{service.outcome}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-brand-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-brand-text-primary">{t.pricing.title}</h2>
              <p className="text-brand-text-secondary font-medium">{t.pricing.microcopy}</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Starter */}
              <div className="p-8 bg-brand-surface rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-brand-text-primary">{t.pricing.starter.name}</h3>
                <div className="flex h-16 items-baseline gap-1 mb-8">
                   <span className="text-4xl font-bold text-brand-text-primary">{p.currencySymbol}{p.starter}</span>
                   <span className="text-brand-text-secondary text-sm font-medium">/ project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {t.pricing.starter.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-brand-text-secondary">
                      <Check className="w-5 h-5 text-brand-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-brand-bg border border-white/10 text-brand-text-primary font-bold hover:border-brand-accent transition-all">
                  {t.pricing.starter.cta}
                </button>
              </div>

              {/* Pro */}
              <div className="p-8 bg-brand-surface text-brand-text-primary rounded-[2rem] shadow-2xl scale-105 border-2 border-brand-accent relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-bg text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
                <h3 className="text-xl font-bold mb-2">{t.pricing.pro.name}</h3>
                <div className="flex h-16 items-baseline gap-1 mb-8">
                   <span className="text-4xl font-bold">{p.currencySymbol}{p.pro}</span>
                   <span className="text-brand-text-secondary text-sm font-medium">/ project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {t.pricing.pro.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-brand-text-primary/80">
                      <Check className="w-5 h-5 text-brand-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-brand-success text-white font-bold hover:bg-brand-accent-hover transition-all shadow-xl shadow-brand-success/20">
                  {t.pricing.pro.cta}
                </button>
              </div>

              {/* Premium */}
              <div className="p-8 bg-brand-surface rounded-[2rem] border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-brand-text-primary">{t.pricing.premium.name}</h3>
                <div className="flex h-16 items-baseline gap-1 mb-8">
                   <span className="text-2xl font-bold text-brand-text-secondary">{currency === 'es' || currency === 'COP' ? 'Cotización' : 'Custom Quote'}</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-brand-text-secondary">
                  {t.pricing.premium.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                       <Check className="w-5 h-5 text-brand-text-secondary/30 shrink-0" />
                       {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-brand-bg border border-white/10 text-brand-text-primary font-bold hover:border-brand-accent transition-all">
                  {t.pricing.premium.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-20 bg-brand-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-sm font-black uppercase tracking-widest text-brand-text-secondary mb-12">{t.socialProof.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
              {t.socialProof.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl font-extrabold text-brand-text-primary mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-sm font-bold text-brand-text-secondary uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIGH IMPACT OFFER */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-accent rounded-[3rem] p-12 lg:p-20 text-brand-bg relative overflow-hidden text-center md:text-left">
            {/* Shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 border-[30px] border-brand-bg/10 rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-brand-bg/5 rounded-full blur-2xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">{t.offer.title}</h2>
                <p className="text-xl text-brand-bg/80 mb-8 font-medium">{t.offer.subtitle}</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {t.offer.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-brand-bg/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold">
                      <Check className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <a 
                  href="#contact" 
                  className="bg-brand-bg text-brand-accent px-12 py-6 rounded-2xl text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-black/20"
                >
                  {t.offer.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-black mb-8 text-brand-text-primary">{t.footer.form.title}</h2>
                <p className="text-xl text-brand-text-secondary mb-12 leading-relaxed">
                  {lang === 'es' 
                    ? 'No dejes que tu competencia se lleve a tus clientes. Empecemos a trabajar en tu expansión hoy mismo.' 
                    : "Don't let your competition take your customers. Let's start working on your expansion today."}
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-surface flex items-center justify-center rounded-2xl text-brand-accent border border-white/5">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-brand-text-primary underline decoration-brand-accent/30 decoration-2 underline-offset-4">hello@fluxus.digital</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-surface flex items-center justify-center rounded-2xl text-brand-accent border border-white/5">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-brand-text-primary">Global Presence: LATAM | USA | EU</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-surface p-10 rounded-[2.5rem] border border-white/5">
                <form action="https://formspree.io/f/mjgjnrep" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-brand-text-secondary">{t.footer.form.name}</label>
                    <input name="name" type="text" required className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent text-brand-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-brand-text-secondary">{t.footer.form.email}</label>
                    <input name="email" type="email" required className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent text-brand-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-brand-text-secondary">{t.footer.form.message}</label>
                    <textarea name="message" rows={4} required className="w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent text-brand-text-primary outline-none" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-success text-white rounded-xl font-bold hover:bg-brand-accent-hover transition-all text-lg shadow-lg shadow-brand-success/20">
                    {t.footer.form.submit}
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/5 text-center text-brand-text-secondary text-sm font-medium">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="" className="absolute inset-0 w-full h-full object-contain z-10" onError={(e) => e.currentTarget.style.opacity = '0'} />
                  <div className="w-6 h-6 bg-brand-accent rounded ring-4 ring-brand-accent/10 flex items-center justify-center">
                    <Zap className="text-brand-bg w-4 h-4" />
                  </div>
                </div>
                <span className="font-bold text-brand-text-primary">Fluxus Digital</span>
              </div>
              {t.footer.text}
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp for conversion */}
      <a 
        href="https://wa.me/573209403080" 
        target="_blank"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-[100]"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
