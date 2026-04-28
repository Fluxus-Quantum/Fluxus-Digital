/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Users, 
  Zap, 
  MessageCircle, 
  TrendingUp, 
  Palette, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Phone,
  BarChart3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Star,
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const NAVIGATION = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Planes', href: '#planes' },
  { name: 'Nosotros', href: '#diferencial' },
  { name: 'Contacto', href: '#contacto' },
];

const SERVICES = [
  {
    id: 'web',
    title: 'Desarrollo Web Profesional',
    description: 'Transformamos tu negocio en una máquina de ventas con sitios web rápidos, seguros y optimizados para Google.',
    benefits: ['Optimización SEO local', 'Integración Google Business', 'Navegación ultra rápida'],
    icon: <Globe className="w-8 h-8 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social',
    title: 'Gestión de Redes Sociales',
    description: 'Creamos contenido que conecta y convierte. Dominamos Facebook, Instagram, TikTok y LinkedIn para tu PYME.',
    benefits: ['Estrategia de contenidos', 'Community Management', 'Publicidad segmentada (Ads)'],
    icon: <Users className="w-8 h-8 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'branding',
    title: 'Branding y Diseño',
    description: 'Le damos a tu marca la identidad que merece. Profesionalismo y modernidad en cada pixel.',
    benefits: ['Logotipos memorables', 'Manual de marca', 'Identidad visual digital'],
    icon: <Palette className="w-8 h-8 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sales',
    title: 'Sistemas de Venta WhatsApp',
    description: 'Automatiza tu proceso de venta. Recibe pedidos y consultas directamente en tu WhatsApp Business.',
    benefits: ['Bots de respuesta rápida', 'Catálogos digitales', 'Integración CRM'],
    icon: <MessageCircle className="w-8 h-8 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
  }
];

const PLANS = [
  {
    name: 'Básico',
    price: 'Desde $299/mes',
    description: 'Ideal para negocios locales que están empezando.',
    features: ['Sitio Web One-Page', 'Google My Business', 'Gestión de 1 Red Social', 'Soporte vía WhatsApp'],
    cta: 'Empezar ahora',
    pro: false
  },
  {
    name: 'Intermedio',
    price: 'Desde $599/mes',
    description: 'Perfecto para escalar y dominar tu mercado local.',
    features: ['Web Corporativa Multi-página', '2 Redes Sociales + Ads', 'Sistema de Turnos/Pedidos', 'Auditoría Mensual'],
    cta: 'El más elegido',
    pro: true
  },
  {
    name: 'Premium',
    price: 'Cotización a medida',
    description: 'Estrategia integral 360° para máximo crecimiento.',
    features: ['E-commerce Completo', 'Plan Full Redes + Contenido', 'Consultoría Estratégica Semanal', 'Soporte Prioritario 24/7'],
    cta: 'Consultar Premium',
    pro: false
  }
];

const TESTIMONIALS = [
  {
    name: 'Carlos Rodríguez',
    role: 'Dueño de Ferretería Industrial',
    content: 'Desde que renovaron mi web y gestionan mis redes, las consultas por WhatsApp subieron un 40%. Entienden lo que una PYME necesita.',
    rating: 5
  },
  {
    name: 'Ana García',
    role: 'Directora de Centro Estético',
    content: 'El diseño branding que hicieron para mi negocio es espectacular. Ahora mis clientes perciben mi marca con mucho más valor.',
    rating: 5
  }
];

// --- Components ---

const Logo = ({ className = "", showText = true, size = "md" }: { className?: string, showText?: boolean, size?: "sm" | "md" | "lg" }) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14"
  };

  const textSizes = {
    sm: { main: "text-lg", sub: "text-[0.4rem]" },
    md: { main: "text-2xl", sub: "text-[0.5rem]" },
    lg: { main: "text-4xl", sub: "text-[0.7rem]" }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${iconSizes[size]} relative flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,200,83,0.4)]">
          {/* High-fidelity 'F' reconstruction */}
          <path 
            d="M35 15 L85 15 L70 42 L38 42 L33 55 L65 55 L52 82 L15 82 L35 15Z" 
            fill="url(#logo-grad)" 
          />
          <defs>
            <linearGradient id="logo-grad" x1="15" y1="15" x2="85" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C853" />
              <stop offset="1" stopColor="#00E676" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none font-display italic uppercase tracking-tighter">
          <span className={`${textSizes[size].main} font-black text-white`}>FLUXUS</span>
          <span className={`${textSizes[size].sub} font-black text-brand-green tracking-[0.4em] mt-0.5`}>DIGITAL</span>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center bg-brand-surface/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-2xl transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
          <div className="flex items-center">
            <Logo size="sm" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                id={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              className="bg-brand-green text-brand-dark px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-white transition-all shadow-lg shadow-brand-green/10"
              id="nav-cta-btn"
            >
              Solicitar Diagnóstico
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" id="mobile-menu-toggle">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-4 text-base font-medium border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="block w-full text-center mt-4 bg-brand-dark text-white px-5 py-3 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Diagnóstico Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-gradient-to-br from-brand-surface to-[#0a0a0a] rounded-[2rem] p-10 lg:p-16 border border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[500px]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px] -z-10"></div>
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] mb-8 tracking-tighter italic uppercase">
              Haz crecer tu <span className="text-brand-green">Negocio</span> <br/>y Deja lo Digital en <span className="text-brand-green">nuestras manos.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              Ecosistemas digitales que transforman PYMES en máquinas de facturación. No vendemos diseños, vendemos resultados tangibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="flex items-center justify-center gap-2 bg-white text-brand-dark px-10 py-5 rounded-2xl text-lg font-black uppercase hover:bg-brand-green transition-all shadow-2xl shadow-white/5"
                id="hero-cta-main"
              >
                QUIERO MÁS CLIENTES
              </a>
              <a 
                href="#servicios" 
                className="flex items-center justify-center gap-2 bg-brand-surface border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-black uppercase hover:bg-white/5 transition-all"
                id="hero-cta-secondary"
              >
                VER SERVICIOS
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-brand-surface rounded-[2rem] p-8 border border-white/5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black uppercase italic tracking-tighter">Impacto Hoy</h3>
              <span className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-1 rounded-md font-black">EN TIEMPO REAL</span>
            </div>
            
            <div className="space-y-6">
               <div className="p-4 bg-brand-dark/50 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black">Conversión</p>
                      <p className="text-xl font-black">+127%</p>
                    </div>
                  </div>
                  <CheckCircle2 className="text-brand-green" size={20} />
               </div>
               
               <div className="p-4 bg-brand-dark/50 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-black mb-3 italic">Clientes Recientes</p>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-brand-surface bg-brand-dark overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-brand-surface bg-brand-green flex items-center justify-center text-brand-dark text-[10px] font-black">
                      +50
                    </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-3xl font-black italic text-brand-green mb-1">3.5x</p>
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">ROI Promedio Reportado</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const pains = [
    { title: "Invisibilidad digital", text: "Tu negocio es bueno, pero nadie te encuentra en Google o redes." },
    { title: "Webs desactualizadas", text: "Tu sitio actual no vende y se ve mal en teléfonos móviles." },
    { title: "Esfuerzo sin retorno", text: "Publicas contenido pero no consigues nuevos clientes reales." },
    { title: "Caos en ventas", text: "Atender WhatsApp te saca tiempo para operar el negocio." }
  ];

  return (
    <section className="bg-brand-dark text-white py-12 overflow-hidden" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-brand-surface-accent border border-brand-green/20 rounded-[2.5rem] p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-[#FF4444] font-black text-xs uppercase tracking-[0.2em] mb-6">EL RETO DE HOY</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-black mb-8 leading-tight italic uppercase tracking-tighter">¿Tu negocio se siente <br/><span className="text-[#FF4444]">estancado</span> en internet?</h3>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Hacer crecer una PYME es una batalla si el mundo digital trabaja en tu contra. Identificamos los dolores reales que te impiden escalar y los eliminamos de raíz.
            </p>
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {pains.slice(0, 2).map((pain, i) => (
              <div key={i} className="bg-brand-surface border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center">
                <span className="text-red-500 mb-4 inline-block">✕</span>
                <h4 className="text-lg font-black uppercase italic mb-2 tracking-tight">{pain.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{pain.text}</p>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {pains.slice(2, 4).map((pain, i) => (
              <div key={i} className="bg-brand-surface border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center">
                <span className="text-red-500 mb-4 inline-block">✕</span>
                <h4 className="text-lg font-black uppercase italic mb-2 tracking-tight">{pain.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{pain.text}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-8 bg-brand-green rounded-[2.5rem] p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-brand-dark">
               <h4 className="text-3xl font-black italic uppercase leading-none mb-2">No pierdas más tiempo</h4>
               <p className="text-sm font-bold opacity-70">Detectamos el error estratégico en menos de 15 minutos.</p>
            </div>
            <button className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-black uppercase italic shadow-2xl whitespace-nowrap">
               SOLICITAR AUDITORÍA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-24 bg-brand-dark" id="solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              alt="Team working" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4">NUESTRA PROPUESTA</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-black mb-8 italic uppercase tracking-tighter leading-none">El Ecosistema <br/>Digital 360º</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              No vendemos piezas sueltas. Diseñamos un engranaje completo donde tu web atrae, tus redes conectan y tu WhatsApp cierra ventas. 
              <span className="text-white"> Es tecnología aplicada con estrategia comercial.</span>
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Estrategia de Ventas", desc: "No solo Likes, queremos facturación enviada a tu cuenta." },
                { title: "Automatización", desc: "Sistemas que trabajan solos mientras tú te enfocas en crecer." },
                { title: "Claridad Total", desc: "Reportes reales. Sabrás exactamente qué funciona y qué no." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase italic tracking-tight text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-brand-green text-brand-dark px-8 py-4 rounded-2xl font-black uppercase italic shadow-2xl hover:bg-white transition-all">
              Conocer nuestro método
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-brand-dark py-12" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 grid-rows-2 gap-6">
          <div className="lg:col-span-4 lg:row-span-2 bg-brand-surface rounded-[2.5rem] p-10 border border-white/5 flex flex-col h-full">
            <h2 className="text-2xl font-black italic uppercase mb-8 flex justify-between items-center">
               Estrategias <span className="text-xs bg-white/10 px-2 py-1 rounded font-black tracking-widest text-brand-green">CORE ROI</span>
            </h2>
            <div className="space-y-6 flex-1">
              {SERVICES.map((s, i) => (
                <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all group">
                   <div className="text-brand-green font-black text-xs mb-1 uppercase tracking-widest">{s.title}</div>
                   <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-green/10 p-6 rounded-[2rem] border border-brand-green/20">
               <p className="text-sm font-bold text-brand-green mb-1 italic">Ventas 24/7</p>
               <p className="text-xs text-brand-gray">Sistemas automatizados que cierran negocios mientras duermes.</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-brand-surface rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden flex flex-col justify-end">
             <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Service Bg" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/80 to-transparent"></div>
             </div>
             <div className="relative z-10 max-w-xl">
                <h3 className="text-4xl font-black italic uppercase mb-4 tracking-tighter">Desarrollo Web de Alto Impacto</h3>
                <p className="text-gray-400 mb-6 font-medium">Sitios ultra-rápidos optimizados para SEO y conversión. No hacemos webs bonitas, hacemos webs rentables.</p>
                <div className="flex gap-4 flex-wrap">
                   {['OPTIMIZADO PARA MÓVIL', 'VELOCIDAD GOOGLE', 'INTEGRACIÓN WHATSAPP'].map((tag, i) => (
                      <span key={i} className="text-[10px] font-black tracking-widest bg-white/10 px-3 py-1.5 rounded-full">{tag}</span>
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 bg-brand-surface rounded-[2.5rem] p-10 border border-white/5 flex items-center justify-center text-center group">
             <div>
                <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <Users size={32} />
                </div>
                <h4 className="text-xl font-black italic uppercase mb-2">Social Selling</h4>
                <p className="text-sm text-gray-500">Publicidad que SÍ trae clientes reales.</p>
             </div>
          </div>
          
          <div className="lg:col-span-4 bg-brand-green rounded-[2.5rem] p-10 flex items-center justify-between text-brand-dark group">
             <div>
                <h4 className="text-2xl font-black italic uppercase leading-none mb-1 group-hover:-translate-y-1 transition-transform">Diseño Fluxus</h4>
                <p className="text-xs font-bold opacity-70">Identidad que vende.</p>
             </div>
             <Palette size={40} className="group-hover:rotate-12 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="py-24 bg-brand-dark" id="planes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4">INVERSIÓN INTELIGENTE</h2>
          <h3 className="text-4xl lg:text-6xl font-display font-black leading-tight italic uppercase tracking-tighter">Escala según <br/>tu ambición.</h3>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`md:col-span-4 rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.pro ? 'bg-brand-green text-brand-dark shadow-[0_0_50px_rgba(34,197,94,0.3)] z-10' : 'bg-brand-surface border border-white/5 text-white'}`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">{plan.name}</h3>
                <div className={`text-3xl font-display font-black leading-none mb-4 italic ${plan.pro ? 'text-brand-dark' : 'text-brand-green'}`}>{plan.price}</div>
                <p className={`text-xs font-bold uppercase tracking-widest opacity-60`}>{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs font-bold uppercase tracking-tight">
                    <CheckCircle2 size={16} className={`${plan.pro ? 'text-brand-dark' : 'text-brand-green'} flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black uppercase italic transition-all ${plan.pro ? 'bg-brand-dark text-white hover:bg-brand-dark/80' : 'bg-brand-green text-brand-dark hover:bg-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4">PRUEBA SOCIAL</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-black leading-tight italic uppercase tracking-tighter mb-8">Lo que dicen las <br/>PYMES reales.</h3>
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-brand-green text-brand-green" />)}
            </div>
            <p className="text-xl text-gray-400 italic mb-8 max-w-md">"Estamos tan seguros de nuestro trabajo que no pedimos contratos de permanencia. Los resultados te harán quedarte."</p>
            <div className="font-black uppercase text-sm tracking-widest flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                <ShieldCheck size={20} />
              </div>
              Satisfacción Garantizada
            </div>
          </div>
          
          <div className="space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-surface p-8 rounded-[2rem] border border-white/5"
              >
                <p className="text-gray-400 mb-6 italic font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-dark rounded-full overflow-hidden border-2 border-brand-green/30">
                    <img src={`https://i.pravatar.cc/100?u=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-black uppercase text-sm italic tracking-tight">{t.name}</p>
                    <p className="text-[10px] text-brand-green uppercase font-black tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-brand-dark" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-[3rem] overflow-hidden border border-white/5 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[100px] -z-10"></div>
          
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4">¿LISTO PARA COMENZAR?</h2>
              <h3 className="text-4xl lg:text-6xl font-display font-black mb-8 italic uppercase tracking-tighter">Hagamos crecer <br/>tu negocio <br/><span className="text-brand-green">hoy mismo.</span></h3>
              <p className="text-gray-400 text-lg mb-12 max-w-sm">
                Recibe un diagnóstico digital 100% gratuito. Sin compromisos ni letras pequeñas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green transition-all group-hover:text-brand-dark">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Línea Directa</p>
                    <p className="font-bold">+57 320 940 3080</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface p-12 lg:p-20 border-l border-white/5">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-black uppercase italic mb-4">¡Recibido!</h4>
                  <p className="text-gray-400 mb-8">Te contactaremos en menos de 24h hábiles.</p>
                  <button onClick={() => setSubmitted(false)} className="text-brand-green text-xs font-black uppercase tracking-widest">Enviar otro</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
                      <input type="text" required className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-green outline-none transition-all text-sm" placeholder="Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Empresa</label>
                      <input type="text" required className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-green outline-none transition-all text-sm" placeholder="Mi Negocio" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">WhatsApp</label>
                    <input type="tel" required className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-green outline-none transition-all text-sm" placeholder="+12..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Propósito</label>
                    <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-green outline-none transition-all text-sm appearance-none">
                      <option className="bg-brand-dark">Diagnóstico Web</option>
                      <option className="bg-brand-dark">Ads / Redes</option>
                      <option className="bg-brand-dark">WhatsApp Ventas</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-brand-green text-brand-dark py-5 rounded-2xl font-black uppercase italic mt-4 hover:bg-white transition-all shadow-xl shadow-brand-green/10">
                    RECLAMAR DIAGNÓSTICO GRATUITO
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/573209403080"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      id="whatsapp-floating"
    >
      <div className="absolute -top-12 right-0 bg-white text-brand-dark py-1 px-3 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
        ¡Habla con un asesor ahora!
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" className="mb-6" />
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8 text-sm font-medium">
              Especialistas en transformar negocios tradicionales en potencias digitales. Enfocados 100% en el retorno de inversión para PYMES.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-green hover:text-brand-dark transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-green hover:text-brand-dark transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-green hover:text-brand-dark transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Navegación</h4>
            <ul className="space-y-4">
              {NAVIGATION.map(item => (
                <li key={item.name}><a href={item.href} className="text-gray-400 hover:text-brand-green transition-colors text-xs font-bold uppercase">{item.name}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors text-xs font-bold uppercase">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors text-xs font-bold uppercase">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} FLUXUS DIGITAL. EVOLUCIONANDO PYMES.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-1">ESTRATEGIA • DISEÑO • TECNOLOGÍA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <section className="bg-brand-green/5 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60">
                {['GOOGLE BUSINESS', 'FACEBOOK ADS', 'INSTAGRAM', 'TIKTOK', 'LINKEDIN'].map((partner, i) => (
                    <span key={i} className="text-xl font-display font-black tracking-tighter text-brand-gray">{partner}</span>
                ))}
            </div>
        </section>
        <PricingSection />
        <SocialProof />
        
        {/* Differential Section */}
        <section className="py-24 bg-brand-dark text-white overflow-hidden" id="diferencial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">¿Por qué elegirnos?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto italic">"Hacemos lo que otros solo prometen: traer clientes."</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-12 text-center">
                {[
                    { icon: <BarChart3 className="w-12 h-12 mx-auto text-brand-green mb-6"/>, title: "Orientados a Datos", text: "Tomamos decisiones basadas en estadísticas reales de tu negocio, no en suposiciones." },
                    { icon: <CheckCircle2 className="w-12 h-12 mx-auto text-brand-green mb-6"/>, title: "Resultados Tangibles", text: "Te entregamos reportes de ventas y leads, no solo de 'likes' o 'vistas'." },
                    { icon: <Smartphone className="w-12 h-12 mx-auto text-brand-green mb-6"/>, title: "Mobile First", text: "Toda nuestra estrategia está pensada para el 90% de usuarios que te ven desde un celular." }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                        {item.icon}
                        <h4 className="text-2xl font-display font-bold mb-4">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>

        <section className="py-20 bg-brand-green overflow-hidden relative">
            <motion.div 
                animate={{ x: [-1000, 1000] }} 
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="whitespace-nowrap flex gap-12 text-6xl lg:text-9xl font-display font-black text-brand-dark/10 pointer-events-none"
            >
                {Array(10).fill('ESCALA TU NEGOCIO •').map((s, i) => <span key={i}>{s}</span>)}
            </motion.div>
            <div className="max-w-7xl mx-auto px-4 absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <h2 className="text-3xl lg:text-5xl font-display font-black text-brand-dark mb-8">¿LISTO PARA VENDER MÁS?</h2>
                <div className="bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-bold animate-pulse uppercase tracking-widest bg-gradient-to-r from-brand-dark to-brand-gray">
                    OFERTA: Diagnóstico Gratis (Solo 5 cupos disponibles por semana)
                </div>
            </div>
        </section>

        <ContactSection />
        
        {/* FAQ Section */}
        <section className="py-24 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4 text-center">FAQ</h2>
                <h2 className="text-3xl lg:text-5xl font-display font-black mb-16 text-center italic uppercase tracking-tighter">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {[
                        { q: "¿Cuánto tiempo tardaré en ver resultados?", a: "Los primeros cambios en tráfico se ven en días, pero una estrategia sólida suele dar sus frutos máximos a partir del segundo o tercer mes." },
                        { q: "¿Necesito tener experiencia digital previa?", a: "Para nada. Nosotros nos encargamos de todo lo técnico y estratégico. Solo necesitamos que estés listo para recibir clientes." },
                        { q: "¿Tienen permanencia sus planes?", a: "No. Creemos en la libertad. Nuestros planes son mensuales y te quedas porque ves resultados, no por un contrato." }
                    ].map((faq, i) => (
                        <details key={i} className="group bg-brand-surface p-8 rounded-[2rem] border border-white/5 transition-all cursor-pointer">
                            <summary className="font-bold uppercase italic tracking-tight flex justify-between items-center list-none text-white">
                                {faq.q}
                                <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-brand-green" />
                            </summary>
                            <p className="mt-6 text-gray-400 leading-relaxed text-sm font-medium">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
