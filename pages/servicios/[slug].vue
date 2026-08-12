<template>
  <div class="min-h-screen bg-black text-white">
    
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Ambient lights -->
      <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2312_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2312_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#services" class="hover:text-red-500 transition-colors">Servicios</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">{{ service.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Text -->
          <div class="lg:w-7/12 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-red-500/30 backdrop-blur-xl">
              <i :class="service.icon" class="text-red-500"></i>
              <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Servicio Premium</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              {{ service.title.split(' ').slice(0, -1).join(' ') }}
              <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                {{ service.title.split(' ').slice(-1)[0] }}
              </span>
            </h1>

            <p class="text-zinc-300 text-lg leading-relaxed max-w-2xl">
              {{ service.description }}
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-red-950/40">
                Solicitar Cotización
              </NuxtLink>
              <NuxtLink to="/#services" class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-500 transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
                Ver Más Servicios
              </NuxtLink>
            </div>
          </div>

          <!-- Image -->
          <div class="lg:w-5/12">
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/20">
              <img :src="service.image" :alt="service.title" class="w-full h-80 object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div class="absolute top-4 right-4 w-12 h-12 rounded-xl bg-black/70 border border-zinc-700 backdrop-blur-md flex items-center justify-center">
                <i :class="service.icon" class="text-2xl text-red-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features / What We Offer -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-black text-white">¿Qué incluye este <span class="text-red-500">servicio</span>?</h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, i) in service.features" :key="i"
            class="group bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/50 flex items-center justify-center border border-red-500/30 mb-4 group-hover:scale-110 transition-transform">
              <i :class="feature.icon" class="text-xl text-red-500"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Tecnologías que <span class="text-red-500">Utilizamos</span></h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span v-for="(tech, i) in service.technologies" :key="i"
            class="px-5 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-full text-sm font-semibold text-zinc-300 hover:border-red-500/40 hover:text-red-400 transition-all duration-300">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para empezar tu <span class="text-red-500">proyecto</span>?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">Contáctanos y en menos de 24 horas recibirás una propuesta personalizada para tu negocio.</p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-red-950/40">
            Solicitar Cotización Gratis
            <i class="bi bi-arrow-right ml-2"></i>
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
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en Pasto, Nariño y todo el territorio nacional.',
    icon: 'bi bi-search',
    image: '/assets/img/services/apiDevelopment.png',
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

<style scoped>
section {
  background-color: #000000 !important;
}
</style>
