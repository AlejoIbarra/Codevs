<template>
  <div class="min-h-screen bg-white text-[#1B1B1F]">

    <!-- Hero Banner -->
    <section class="relative pt-20 pb-16 overflow-hidden border-b border-[#1B1B1F]/10">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-mono text-[#6A7077] mb-8">
          <NuxtLink to="/" class="hover:text-[#1B1B1F] hover:underline">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-[10px]"></i>
          <NuxtLink to="/#services" class="hover:text-[#1B1B1F] hover:underline">Servicios</NuxtLink>
          <i class="bi bi-chevron-right text-[10px]"></i>
          <span class="text-[#1B1B1F] font-medium">{{ service.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Text -->
          <div class="lg:w-7/12 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E7000B] border border-[#141416] text-white shadow-[2px_2px_0px_#141416]">
              <i :class="service.icon" class="text-sm"></i>
              <span class="font-mono font-semibold uppercase tracking-wider text-xs">Especialidad de Estudio</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#171717] tracking-[-0.035em] leading-[1.12]">
              {{ service.title.split(' ').slice(0, -1).join(' ') }}
              <span class="font-serif-italic underline decoration-[#E7000B] decoration-4 underline-offset-4">
                {{ service.title.split(' ').slice(-1)[0] }}
              </span>
            </h1>

            <p class="text-[#1E1E1E]/80 text-lg leading-relaxed max-w-2xl font-light">
              {{ service.description }}
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <NuxtLink
                to="/#contact"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-[#E7000B] hover:bg-[#C80009] text-white border border-[#141416] rounded-full font-medium text-sm transition-all duration-300 shadow-[2px_2px_0px_#141416]"
              >
                Solicitar Cotización
              </NuxtLink>
              <NuxtLink
                to="/#services"
                class="inline-flex items-center justify-center px-7 py-3.5 border border-[#1B1B1F] rounded-full hover:bg-[#1B1B1F] hover:text-white text-[#1B1B1F] transition-all duration-300 font-medium text-sm bg-white"
              >
                Ver Más Servicios
              </NuxtLink>
            </div>
          </div>

          <!-- Image Frame -->
          <div class="lg:w-5/12 w-full">
            <div class="relative rounded-[24px] overflow-hidden border-2 border-[#1B1B1F] shadow-[6px_6px_0px_#1B1B1F] bg-[#1B1B1F]">
              <img :src="service.image" :alt="service.title" class="w-full h-80 object-cover" />
              <div class="absolute top-4 right-4 w-11 h-11 rounded-full bg-white border border-[#1B1B1F] flex items-center justify-center text-[#1B1B1F]">
                <i :class="service.icon" class="text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features / What We Offer -->
    <section class="py-20 border-b border-[#1B1B1F]/10 bg-[#F9FAFA]">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl mb-14">
          <span class="text-xs font-mono uppercase tracking-wider text-[#6A7077] block mb-2">Alcance &amp; Capacidades</span>
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] tracking-tight">
            ¿Qué incluye este <span class="font-serif-italic underline decoration-[#FFF480] decoration-4 underline-offset-4">servicio</span>?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, i) in service.features"
            :key="i"
            class="group bg-white border border-[#1B1B1F]/15 hover:border-[#1B1B1F] rounded-[20px] p-7 transition-all duration-300 hover:shadow-[4px_4px_0px_#1B1B1F]"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#FFF480] border border-[#1B1B1F] flex items-center justify-center mb-5 text-[#1B1B1F] group-hover:bg-[#DBFF9C] transition-colors">
              <i :class="feature.icon" class="text-xl"></i>
            </div>
            <h3 class="text-lg font-medium text-[#1B1B1F] mb-2">{{ feature.title }}</h3>
            <p class="text-[#6A7077] text-sm leading-relaxed font-light">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 border-b border-[#1B1B1F]/10 bg-white">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] tracking-tight">
            Tecnologías que <span class="font-serif-italic underline decoration-[#A5A1FF] decoration-4 underline-offset-4">Utilizamos</span>
          </h2>
        </div>

        <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          <span
            v-for="(tech, i) in service.technologies"
            :key="i"
            class="px-5 py-2.5 bg-[#F9FAFA] border border-[#1B1B1F]/20 rounded-full text-xs font-mono font-medium text-[#1B1B1F] hover:bg-[#FFF480] transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-5 text-center">
        <div class="bg-[#FFFDE5] border-2 border-[#1B1B1F] rounded-[28px] p-10 sm:p-14 shadow-[6px_6px_0px_#1B1B1F]">
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] mb-3">
            ¿Listo para empezar tu <span class="font-serif-italic underline decoration-[#1B1B1F]">proyecto</span>?
          </h2>
          <p class="text-[#6A7077] text-base mb-8 max-w-lg mx-auto font-light">
            Contáctanos y en menos de 24 horas recibirás una propuesta técnica y visual a la medida de tu negocio.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#1B1B1F] hover:bg-[#FFF480] text-white hover:text-[#1B1B1F] border border-[#1B1B1F] rounded-full font-medium text-sm transition-all shadow-[2px_2px_0px_#1B1B1F]"
          >
            <span>Solicitar Cotización Gratis</span>
            <i class="bi bi-arrow-up-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const servicesData = {
  'desarrollo-software': {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio en Pasto, Nariño.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    features: [
      { icon: 'bi bi-shield-lock', title: 'Arquitectura Segura', text: 'Implementamos las mejores prácticas de seguridad informática para proteger tus datos y los de tus clientes.' },
      { icon: 'bi bi-arrows-fullscreen', title: 'Escalabilidad Total', text: 'Sistemas diseñados para crecer con tu negocio sin perder rendimiento ni estabilidad.' },
      { icon: 'bi bi-database', title: 'Base de Datos Optimizada', text: 'Diseño de esquemas de datos eficientes con PostgreSQL, MongoDB o MySQL según tus necesidades.' },
      { icon: 'bi bi-gear', title: 'Automatización', text: 'Automatizamos procesos repetitivos para que te enfoques en lo que realmente importa: hacer crecer tu negocio.' },
      { icon: 'bi bi-cloud', title: 'Despliegue en la Nube', text: 'Configuración y despliegue en AWS, Google Cloud o Azure con alta disponibilidad.' },
      { icon: 'bi bi-headset', title: 'Soporte Continuo', text: 'Acompañamiento post-desarrollo con mantenimiento, actualizaciones y soporte técnico dedicado.' }
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS', 'Git']
  },
  'desarrollo-web': {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO en Pasto, Nariño.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    features: [
      { icon: 'bi bi-phone', title: 'Diseño Responsivo', text: 'Tu sitio web se verá perfecto en cualquier dispositivo: móvil, tablet y escritorio.' },
      { icon: 'bi bi-speedometer2', title: 'Velocidad Ultra Rápida', text: 'Optimización de rendimiento para tiempos de carga inferiores a 2 segundos.' },
      { icon: 'bi bi-search', title: 'SEO Integrado', text: 'Estructura semántica y metadatos optimizados para posicionar tu web en Google.' },
      { icon: 'bi bi-cart', title: 'E-Commerce', text: 'Tiendas online con pasarelas de pago, carrito de compras y gestión de inventario.' },
      { icon: 'bi bi-palette', title: 'Diseño Personalizado', text: 'Interfaces únicas que reflejan la identidad de tu marca con diseño UX/UI premium.' },
      { icon: 'bi bi-graph-up', title: 'Analytics Integrado', text: 'Métricas de rendimiento y comportamiento de usuarios para tomar decisiones basadas en datos.' }
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'React', 'Next.js', 'TailwindCSS', 'WordPress', 'Shopify', 'Node.js']
  },
  'diseno-ux-ui': {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads en Pasto, Nariño.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    features: [
      { icon: 'bi bi-person-check', title: 'Investigación de Usuario', text: 'Análisis profundo de tu audiencia para diseñar experiencias que realmente conecten.' },
      { icon: 'bi bi-layers', title: 'Wireframes y Prototipos', text: 'Creamos prototipos interactivos de alta fidelidad antes de escribir una sola línea de código.' },
      { icon: 'bi bi-brush', title: 'Design System', text: 'Sistemas de diseño escalables con componentes reutilizables y guías de estilo.' },
      { icon: 'bi bi-arrows-move', title: 'Interacciones y Animaciones', text: 'Micro-interacciones que hacen la experiencia más intuitiva y agradable.' },
      { icon: 'bi bi-eye', title: 'Testing de Usabilidad', text: 'Pruebas con usuarios reales para validar y mejorar cada decisión de diseño.' },
      { icon: 'bi bi-file-earmark-check', title: 'Entregables Listos', text: 'Archivos optimizados para desarrolladores con especificaciones detalladas.' }
    ],
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Lottie', 'Framer', 'InVision']
  },
  'integraciones-apis': {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes para empresas en Pasto, Nariño.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    features: [
      { icon: 'bi bi-credit-card', title: 'Pasarelas de Pago', text: 'Integración con Stripe, PayU, MercadoPago, PSE y más para recibir pagos de forma segura.' },
      { icon: 'bi bi-people', title: 'CRM & ERP', text: 'Conexión con Salesforce, HubSpot, SAP y otros sistemas de gestión empresarial.' },
      { icon: 'bi bi-truck', title: 'Logística', text: 'APIs de envío, tracking y gestión de inventario con plataformas de última milla.' },
      { icon: 'bi bi-envelope', title: 'Comunicaciones', text: 'Integración con WhatsApp Business, SendGrid, Twilio y servicios de notificación.' },
      { icon: 'bi bi-lock', title: 'Autenticación', text: 'OAuth 2.0, JWT, SSO y autenticación multifactor para máxima seguridad.' },
      { icon: 'bi bi-file-text', title: 'Documentación', text: 'APIs documentadas con Swagger/OpenAPI para facilitar mantenimiento y escalabilidad.' }
    ],
    technologies: ['REST API', 'GraphQL', 'WebSockets', 'OAuth 2.0', 'Swagger', 'Postman', 'Node.js', 'Java']
  },
  'apps-moviles': {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez, desde Pasto, Nariño para el mundo.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    features: [
      { icon: 'bi bi-android2', title: 'Android Nativo', text: 'Aplicaciones nativas con Kotlin y Jetpack Compose para máximo rendimiento en Android.' },
      { icon: 'bi bi-apple', title: 'iOS Nativo', text: 'Apps nativas con Swift y SwiftUI para iPhone y iPad con experiencia premium.' },
      { icon: 'bi bi-phone-flip', title: 'Flutter / Híbrido', text: 'Desarrollo multiplataforma con Flutter para Android e iOS con un solo código base.' },
      { icon: 'bi bi-bell', title: 'Push Notifications', text: 'Notificaciones push personalizadas para mantener a tus usuarios comprometidos.' },
      { icon: 'bi bi-cloud-arrow-up', title: 'Publicación en Stores', text: 'Gestión completa del proceso de publicación en Google Play Store y App Store.' },
      { icon: 'bi bi-arrow-repeat', title: 'Actualizaciones OTA', text: 'Actualizaciones over-the-air para desplegar mejoras sin pasar por las tiendas.' }
    ],
    technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Firebase', 'React Native', 'SQLite']
  },
  'seo-avanzado': {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en tu ciudad o a nivel nacional e Internacional.',
    icon: 'bi bi-search',
    image: '/img/image.png',
    features: [
      { icon: 'bi bi-geo-alt', title: 'SEO Local', text: 'Optimización para Google Maps, Google Business Profile y búsquedas locales en Pasto y Nariño.' },
      { icon: 'bi bi-file-earmark-code', title: 'SEO Técnico', text: 'Auditoría técnica completa: velocidad, Core Web Vitals, indexación y crawlabilidad.' },
      { icon: 'bi bi-pencil-square', title: 'SEO On-Page', text: 'Optimización de contenido, metadatos, estructura de encabezados y enlazado interno.' },
      { icon: 'bi bi-link-45deg', title: 'Link Building', text: 'Estrategias de construcción de enlaces de autoridad para mejorar tu ranking orgánico.' },
      { icon: 'bi bi-bar-chart', title: 'Reportes Mensuales', text: 'Informes detallados de posicionamiento, tráfico orgánico y oportunidades de mejora.' },
      { icon: 'bi bi-trophy', title: 'Posicionamiento #1', text: 'Estrategias probadas para llevar tu sitio web a las primeras posiciones de Google.' }
    ],
    technologies: ['Google Search Console', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Schema.org', 'Lighthouse', 'Screaming Frog']
  }
};

const service = servicesData[slug];

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Servicio no encontrado' });
}

useHead({
  title: `${service.title} | CODEVS - Pasto, Nariño`,
  meta: [
    { name: 'description', content: service.description }
  ]
});
</script>
