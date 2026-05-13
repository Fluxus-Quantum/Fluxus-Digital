export type Language = 'es' | 'en';
export type Currency = 'USD' | 'EUR' | 'COP';

export interface Pricing {
  starter: string;
  pro: string;
  premium: string;
  currencySymbol: string;
}

export const PRICING: Record<Currency, Pricing> = {
  USD: {
    starter: '97',
    pro: '179',
    premium: 'Custom Quote',
    currencySymbol: '$',
  },
  EUR: {
    starter: '87',
    pro: '147',
    premium: 'Custom Quote',
    currencySymbol: '€',
  },
  COP: {
    starter: '397.000',
    pro: '739.000',
    premium: 'Cotización a medida',
    currencySymbol: '$',
  },
};

export const CONTENT = {
  es: {
    nav: {
      services: 'Servicios',
      benefits: 'Beneficios',
      pricing: 'Precios',
      contact: 'Contacto',
      cta: 'Empezar ahora',
    },
    hero: [
      {
        title: 'Impulsa tus ventas con una presencia digital de alto impacto.',
        subtitle: 'Desarrollamos soluciones digitales que convierten visitas en clientes reales. Para negocios que buscan expansión global.',
        ctaPrimary: 'Quiero más clientes (WhatsApp)',
        ctaSecondary: 'Ver portafolio',
        trustBadge: 'Expertos en mercados de LATAM, USA y Europa',
      },
      {
        title: 'Escala tu negocio a mercados internacionales hoy mismo.',
        subtitle: 'No solo creamos webs; construimos máquinas de ventas automatizadas para PYMES con ambición global.',
        ctaPrimary: 'Solicitar Diagnóstico Gratis',
        ctaSecondary: 'Saber más',
        trustBadge: 'Entrega rápida y garantía de satisfacción',
      },
      {
        title: 'Tus prospectos ya están buscando. Asegúrate de que te encuentren.',
        subtitle: 'Diseño, Redes Sociales y Catálogos Digitales diseñados bajo psicología del consumidor para maximizar conversiones.',
        ctaPrimary: 'Obtener asesoría gratuita',
        ctaSecondary: 'Ver servicios',
        trustBadge: 'Transparencia total en precios y resultados',
      },
    ],
    painPoints: {
      title: '¿Tu negocio está estancado en el mundo digital?',
      items: [
        {
          title: 'Presencia invisible',
          description: 'Tu negocio es excelente, pero nadie te encuentra en Google o redes sociales.',
        },
        {
          title: 'Webs que no venden',
          description: 'Tienes una página web, pero no recibes consultas ni prospectos de calidad.',
        },
        {
          title: 'Gestión ineficiente',
          description: 'Pierdes tiempo atendiendo cada consulta manualmente sin un sistema de ventas.',
        },
      ],
    },
    services: {
      title: 'Soluciones enfocadas en resultados, no solo en estética.',
      items: [
        {
          title: 'Desarrollo Web & Landing Pages',
          description: 'Creamos landing pages de alta conversión optimizadas para Google Ads y Meta Ads.',
          outcome: 'Convierte el tráfico en dinero real.',
        },
        {
          title: 'Gestión de Redes Sociales',
          description: 'Generamos contenido estratégico que construye autoridad y genera leads cualificados.',
          outcome: 'Construye una comunidad que compra.',
        },
        {
          title: 'Catálogos Digitales',
          description: 'Muestra tus productos de forma profesional y facilita la compra inmediata.',
          outcome: 'Acelera el ciclo de venta de tus clientes.',
        },
      ],
    },
    benefits: {
      title: 'Por qué Fluxus Digital es tu mejor socio estratégico',
      items: [
        {
          title: 'Perspectiva Global',
          description: 'Adaptamos tu mensaje para audiencias en Estados Unidos, Europa y toda Latinoamérica.',
        },
        {
          title: 'Neuro-Ventas',
          description: 'Aplicamos principios de psicología del consumidor en cada palabra y diseño.',
        },
        {
          title: 'Automatización',
          description: 'Sistemas que trabajan 24/7 para capturar leads sin que tengas que intervenir.',
        },
      ],
    },
    pricing: {
      title: 'Planes adaptados a tu crecimiento',
      microcopy: 'Precios adaptados según tu moneda para mayor claridad y transparencia.',
      starter: {
        name: 'Starter',
        features: ['Landing Page Básica', 'SEO Básico', '1 Redes Sociales', 'Soporte vía eMail'],
        cta: 'Elegir Starter',
      },
      pro: {
        name: 'Pro (Más popular)',
        features: ['Landing Page PRO', 'SEO PRO', '2 Redes Sociales', 'Catálogo Digital', 'Soporte con Prioridad'],
        cta: 'Elegir Pro',
      },
      premium: {
        name: 'Premium',
        features: ['Estrategia Integral', 'Automatización de Leads', 'Consultoría de Ventas', 'Marketing de Contenidos', 'Account Manager'],
        cta: 'Contactar para cotización',
      },
    },
    socialProof: {
      title: 'Confían en nosotros negocios en todo el mundo',
      stats: [
        { value: '150+', label: 'Proyectos entregados' },
        { value: '12', label: 'Países impactados' },
        { value: '98%', label: 'Satisfacción garantizada' },
      ],
    },
    offer: {
      title: 'Tus clientes te están buscando — ¿te están encontrando?',
      subtitle: 'Solo 3 cupos disponibles este mes para nuevos clientes.',
      items: ['Diagnóstico gratuito de tu presencia digital', 'Presencia profesional en redes en menos de 7 días', 'Sin contratos largos — resultados desde la primera semana'],
      cta: 'Quiero mi cupo ahora →',
    },
    footer: {
      text: 'Fluxus Digital © 2024. Trabajamos con negocios en múltiples países.',
      form: {
        title: '¿Listo para duplicar tus ventas?',
        name: 'Nombre',
        email: 'Email',
        message: '¿Cómo podemos ayudarte?',
        submit: 'Enviar consulta',
      },
    },
  },
  en: {
    nav: {
      services: 'Services',
      benefits: 'Benefits',
      pricing: 'Pricing',
      contact: 'Contact',
      cta: 'Start Now',
    },
    hero: [
      {
        title: 'Boost your sales with a high-impact digital presence.',
        subtitle: 'We develop digital solutions that turn visits into real customers. For businesses seeking global expansion.',
        ctaPrimary: 'Get More Clients (WhatsApp)',
        ctaSecondary: 'View Portfolio',
        trustBadge: 'Experts in LATAM, USA, and Europe markets',
      },
      {
        title: 'Scale your business to international markets today.',
        subtitle: "We don't just create websites; we build automated sales machines for ambitious SMBs with global goals.",
        ctaPrimary: 'Get Free Audit',
        ctaSecondary: 'Learn More',
        trustBadge: 'Fast delivery & satisfaction guarantee',
      },
      {
        title: 'Your prospects are already searching. Make sure they find you.',
        subtitle: 'Design, Social Media, and Digital Catalogs crafted with consumer psychology to maximize conversions.',
        ctaPrimary: 'Get Free Advice',
        ctaSecondary: 'View Services',
        trustBadge: 'Full pricing and results transparency',
      },
    ],
    painPoints: {
      title: 'Is your business stuck in the digital world?',
      items: [
        {
          title: 'Invisible Presence',
          description: 'Your business is great, but nobody finds you on Google or social media.',
        },
        {
          title: 'Websites that don’t sell',
          description: 'You have a website, but you don’t receive inquiries or quality leads.',
        },
        {
          title: 'Inefficient Management',
          description: 'You waste time handling every inquiry manually without a sales system.',
        },
      ],
    },
    services: {
      title: 'Results-driven solutions, not just aesthetics.',
      items: [
        {
          title: 'Web & Landing Page Development',
          description: 'We create high-converting landing pages optimized for Google Ads and Meta Ads.',
          outcome: 'Turn traffic into real revenue.',
        },
        {
          title: 'Social Media Management',
          description: 'We generate strategic content that builds authority and generates qualified leads.',
          outcome: 'Build a community that buys.',
        },
        {
          title: 'Digital Catalogs',
          description: 'Showcase your products professionally and enable immediate purchases.',
          outcome: 'Accelerate your customers’ buying cycle.',
        },
      ],
    },
    benefits: {
      title: 'Why Fluxus Digital is your best strategic partner',
      items: [
        {
          title: 'Global Perspective',
          description: 'We adapt your message for audiences in the US, Europe, and throughout Latin America.',
        },
        {
          title: 'Neuro-Sales',
          description: 'We apply consumer psychology principles to every word and design choice.',
        },
        {
          title: 'Automation',
          description: 'Systems that work 24/7 to capture leads without your intervention.',
        },
      ],
    },
    pricing: {
      title: 'Plans tailored to your growth',
      microcopy: 'Prices displayed in your local currency for clarity and transparency.',
      starter: {
        name: 'Starter',
        features: ['Pro Landing Page', 'Basic SEO', '2 Social Media platforms', 'Email Support'],
        cta: 'Choose Starter',
      },
      pro: {
        name: 'Pro (Most Popular)',
        features: ['Full Website', 'Google/Meta Ads ready', '4 Social Media platforms', 'Digital Catalog', 'Priority Support'],
        cta: 'Choose Pro',
      },
      premium: {
        name: 'Premium',
        features: ['Complete Strategy', 'Lead Automation', 'Sales Consulting', 'Content Marketing', 'Dedicated Account Manager'],
        cta: 'Contact for Quote',
      },
    },
    socialProof: {
      title: 'Trusted by businesses worldwide',
      stats: [
        { value: '150+', label: 'Projects delivered' },
        { value: '12', label: 'Countries impacted' },
        { value: '98%', label: 'Satisfaction guaranteed' },
      ],
    },
    offer: {
      title: 'Exclusive Launch Offer',
      subtitle: 'Only for the next 5 clients this month.',
      items: ['Free Audit', 'Fast Delivery', 'Satisfaction Guarantee'],
      cta: 'Claim Now',
    },
    footer: {
      text: 'Fluxus Digital © 2024. We work with businesses worldwide.',
      form: {
        title: 'Ready to double your sales?',
        name: 'Name',
        email: 'Email',
        message: 'How can we help?',
        submit: 'Send Inquiry',
      },
    },
  },
};
