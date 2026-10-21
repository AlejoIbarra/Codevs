<template>
  <div class="min-h-screen bg-black text-white">

    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Ambient lights -->
      <div
        class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none">
      </div>
      <div
        class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none">
      </div>
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2312_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2312_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none">
      </div>

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
            <div
              class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-red-500/30 backdrop-blur-xl">
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
              <NuxtLink to="/#contact"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-red-950/40">
                Solicitar Cotización
              </NuxtLink>
              <NuxtLink to="/#services"
                class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-500 transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
                Ver Más Servicios
              </NuxtLink>
            </div>
          </div>

          <!-- Image -->
          <div class="lg:w-5/12">
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/20">
              <img :src="service.image" :alt="service.title" class="w-full h-80 object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div
                class="absolute top-4 right-4 w-12 h-12 rounded-xl bg-black/70 border border-zinc-700 backdrop-blur-md flex items-center justify-center">
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
          <h2 class="text-3xl sm:text-4xl font-black text-white">¿Qué incluye este <span
              class="text-red-500">servicio</span>?</h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, i) in service.features" :key="i"
            class="group bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/50 flex items-center justify-center border border-red-500/30 mb-4 group-hover:scale-110 transition-transform">
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
          <h2 class="text-3xl sm:text-4xl font-black text-white">Tecnologías que <span
              class="text-red-500">Utilizamos</span></h2>
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
        <div
          class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">¿Listo para empezar tu <span
              class="text-red-500">proyecto</span>?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">Contáctanos y en menos de 24 horas recibirás una
            propuesta personalizada para tu negocio.</p>
          <NuxtLink to="/#contact"
            class="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-red-950/40">
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
    description: 'Ingeniería de software corporativo de alto nivel. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu empresa con arquitecturas de microservicios, cloud nativa y procesamiento concurrente.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    features: [
      { icon: 'bi bi-shield-lock', title: 'Arquitectura Segura & Microservicios', text: 'Implementamos arquitecturas modulares con Spring Boot, Java y Docker bajo las mejores prácticas de ciberseguridad corporativa.' },
      { icon: 'bi bi-arrows-fullscreen', title: 'Escalabilidad & Alta Concurrencia', text: 'Sistemas diseñados para soportar millones de operaciones sin pérdida de rendimiento, con colas de mensajes y balanceo de carga.' },
      { icon: 'bi bi-database', title: 'Bases de Datos de Alto Rendimiento', text: 'Modelado relacional y no relacional optimizado con PostgreSQL, Redis y MySQL para consultas de ultra baja latencia.' },
      { icon: 'bi bi-gear', title: 'Automatización & APIs Robustas', text: 'Automatizamos flujos de trabajo repetitivos y conectamos sistemas mediante APIs RESTful y GraphQL seguras.' },
      { icon: 'bi bi-cloud', title: 'Despliegue Cloud & DevOps', text: 'Infraestructura como código y despliegue continuo en AWS, Google Cloud o Azure con monitoreo y 99.9% de uptime.' },
      { icon: 'bi bi-headset', title: 'Soporte Continuo & Mantenimiento', text: 'Acompañamiento post-desarrollo con SLAs de respuesta rápida, auditorías de seguridad y evolución tecnológica.' }
    ],
    technologies: ['Java 21', 'Spring Boot 3', 'Nuxt.js', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git']
  },
  'desarrollo-web': {
    title: 'Desarrollo de Páginas Web Profesionales',
    description: 'Creación de sitios web corporativos y comercio electrónico (E-commerce) de alto rendimiento. Páginas ultrarrápidas, adaptadas a dispositivos móviles y estructuradas semánticamente para dominar el #1 de Google.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    features: [
      { icon: 'bi bi-phone', title: 'Diseño Responsivo & Fluido', text: 'Tu sitio web se verá perfecto en cualquier dispositivo: móvil, tablet y pantallas de alta resolución.' },
      { icon: 'bi bi-speedometer2', title: 'Velocidad Extrema (60 FPS)', text: 'Optimización de rendimiento para tiempos de carga inferiores a 1 segundo y 100% en Core Web Vitals.' },
      { icon: 'bi bi-search', title: 'SEO Semántico Integrado', text: 'Estructura semántica, metadatos y marcado de datos estructurados Schema.org para indexación prioritaria en Google.' },
      { icon: 'bi bi-cart', title: 'E-Commerce de Alta Conversión', text: 'Tiendas online con pasarelas de pago seguras, checkout sin fricción y sincronización de inventario.' },
      { icon: 'bi bi-palette', title: 'Diseño Personalizado & UX/UI', text: 'Interfaces visuales exclusivas que proyectan autoridad de marca y aumentan la tasa de retención.' },
      { icon: 'bi bi-graph-up', title: 'Analytics & Telemetría', text: 'Métricas de rendimiento y comportamiento de usuarios para tomar decisiones basadas en datos.' }
    ],
    technologies: ['Nuxt 3', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Stripe']
  },
  'diseno-ux-ui': {
    title: 'Diseño de Interfaces UX/UI & Design Systems',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos en Figma y sistemas de diseño visual que maximizan la conversión y retención de clientes.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    features: [
      { icon: 'bi bi-person-check', title: 'Investigación de Usuario', text: 'Análisis profundo de tu audiencia para diseñar experiencias que realmente conecten y conviertan.' },
      { icon: 'bi bi-layers', title: 'Wireframes y Prototipos Interactivos', text: 'Creamos prototipos interactivos de alta fidelidad en Figma antes de escribir una sola línea de código.' },
      { icon: 'bi bi-brush', title: 'Design Systems Escalables', text: 'Sistemas de diseño modulares con componentes reutilizables, tokens de diseño y guías de estilo.' },
      { icon: 'bi bi-arrows-move', title: 'Microinteracciones & Animaciones', text: 'Animaciones a 60 FPS que hacen la experiencia fluida, agradable y memorables.' },
      { icon: 'bi bi-eye', title: 'Testing de Usabilidad', text: 'Pruebas con usuarios reales para validar y optimizar cada flujo crítico de navegación.' },
      { icon: 'bi bi-file-earmark-check', title: 'Entregables Listos para Dev', text: 'Especificaciones precisas para desarrolladores con variables CSS y assets optimizados.' }
    ],
    technologies: ['Figma', 'Design Tokens', 'TailwindCSS', 'GSAP', 'Prototyping', 'User Research']
  },
  'integraciones-apis': {
    title: 'Integraciones de APIs & Sistemas Empresariales',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes para empresas en Colombia y el mercado internacional.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    features: [
      { icon: 'bi bi-credit-card', title: 'Pasarelas de Pago Seguras', text: 'Integración con Stripe, PayU, MercadoPago, PSE y Wompi para transacciones financieras automatizadas.' },
      { icon: 'bi bi-people', title: 'Sincronización con CRM & ERP', text: 'Conexión bidireccional con Salesforce, HubSpot, Zoho, SAP y sistemas administrativos propietarios.' },
      { icon: 'bi bi-truck', title: 'Logística & Tracking en Vivo', text: 'APIs de envío, cálculo de fletes y trazabilidad de pedidos con plataformas de última milla.' },
      { icon: 'bi bi-envelope', title: 'Comunicaciones & Webhooks', text: 'Integración con WhatsApp Business API, SendGrid, Twilio y eventos asíncronos en tiempo real.' },
      { icon: 'bi bi-lock', title: 'Seguridad & Autenticación', text: 'Implementación de OAuth 2.0, JWT, API Keys y cifrado TLS para máxima protección de datos.' },
      { icon: 'bi bi-file-text', title: 'Documentación OpenAPI / Swagger', text: 'APIs estandarizadas y documentadas para facilitar mantenimiento y escalabilidad futura.' }
    ],
    technologies: ['REST API', 'GraphQL', 'WebSockets', 'OAuth 2.0', 'Swagger', 'Python', 'Java', 'Node.js']
  },
  'apps-moviles': {
    title: 'Desarrollo de Apps Móviles Nativas & Híbridas',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas (Swift, Kotlin) o híbridas (Flutter) con animaciones a 60 FPS, baja latencia y alta retención de usuarios.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    features: [
      { icon: 'bi bi-android2', title: 'Android Nativo', text: 'Aplicaciones nativas con Kotlin y Jetpack Compose para máximo rendimiento en Android.' },
      { icon: 'bi bi-apple', title: 'iOS Nativo', text: 'Apps nativas con Swift y SwiftUI para iPhone y iPad con experiencia premium.' },
      { icon: 'bi bi-phone-flip', title: 'Flutter / Híbrido Multiplataforma', text: 'Desarrollo multiplataforma con Flutter para Android e iOS compartiendo lógica de negocio con rendimiento nativo.' },
      { icon: 'bi bi-bell', title: 'Push Notifications & Engagement', text: 'Notificaciones push personalizadas y segmentadas para maximizar la retención de usuarios.' },
      { icon: 'bi bi-cloud-arrow-up', title: 'Publicación en Stores', text: 'Gestión completa del proceso de publicación, compliance y optimización ASO en Google Play y App Store.' },
      { icon: 'bi bi-arrow-repeat', title: 'Actualizaciones OTA & CI/CD', text: 'Pipelines de despliegue continuo para actualizaciones ágiles sin fricción.' }
    ],
    technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Firebase', 'React Native', 'SQLite']
  },
  'seo-avanzado': {
    title: 'Optimización SEO Avanzada & Motores de IA',
    description: 'Estrategias de posicionamiento SEO técnico y orgánico para empresas que buscan liderar las búsquedas en Google y motores de búsqueda generativos basados en Inteligencia Artificial.',
    icon: 'bi bi-search',
    image: '/img/image.png',
    features: [
      { icon: 'bi bi-geo-alt', title: 'SEO Nacional & Mercados Clave', text: 'Estrategias de autoridad digital para capturar las búsquedas de mayor intención de compra en Colombia y el exterior.' },
      { icon: 'bi bi-file-earmark-code', title: 'SEO Técnico & Core Web Vitals', text: 'Auditoría técnica de código: velocidad de carga sub-segundo, renderizado eficiente y arquitectura de enlazado interno.' },
      { icon: 'bi bi-pencil-square', title: 'SEO On-Page & Datos Estructurados', text: 'Marcado semántico avanzado con Schema.org y optimización de contenido para destacar en fragmentos enriquecidos.' },
      { icon: 'bi bi-link-45deg', title: 'Link Building & E-E-A-T', text: 'Construcción de perfil de enlaces de alta autoridad y señales de confianza que premian los algoritmos de Google.' },
      { icon: 'bi bi-bar-chart', title: 'Analítica & Telemetría en Vivo', text: 'Monitoreo de palabras clave, impresiones orgánicas y tasas de conversión en Google Search Console y GA4.' },
      { icon: 'bi bi-trophy', title: 'Posicionamiento Orgánico #1', text: 'Metodología probada para llevar tus términos transaccionales a las posiciones privilegiadas de la primera página.' }
    ],
    technologies: ['Google Search Console', 'Google Analytics 4', 'SEMrush', 'Ahrefs', 'Schema.org', 'Lighthouse', 'Screaming Frog']
  },
  'automatizaciones-omnicanalidad': {
    title: 'Automatizaciones & Sistema de Omnicanalidad',
    description: 'Expertos en automatización de procesos operativos y plataformas de omnicanalidad unificadas. Centralizamos WhatsApp Business API, Instagram Direct, web chats, email y CRM en una sola interfaz inteligente con agentes y flujos automatizados para maximizar ventas y brindar atención al cliente 24/7 sin fricción.',
    icon: 'bi bi-diagram-3',
    image: '/assets/img/services/omnichannel-dashboard.jpg',
    features: [
      { icon: 'bi bi-chat-dots', title: 'Bandeja Omnicanal Unificada', text: 'Centraliza WhatsApp Business API, Instagram Direct, Facebook Messenger y chat web en un solo panel para tu equipo comercial y de soporte.' },
      { icon: 'bi bi-cpu', title: 'Flujos Inteligentes & Bots con IA', text: 'Automatización de respuestas inmediatas, calificación de clientes potenciales (leads), enrutamiento inteligente y agenda de citas 24/7.' },
      { icon: 'bi bi-database-check', title: 'Sincronización Directa con CRM', text: 'Conexión automática bidireccional con HubSpot, Salesforce, Zoho, Google Sheets o tu base de datos interna para evitar fuga de prospectos.' },
      { icon: 'bi bi-broadcast', title: 'Campañas Masivas y Notificaciones', text: 'Disparadores automáticos de confirmación de compras, carritos abandonados, recordatorios de pago y campañas masivas 100% verificadas por Meta.' },
      { icon: 'bi bi-speedometer2', title: 'Métricas, SLA y Reportes en Vivo', text: 'Controla tiempos de primera respuesta, satisfacción de clientes (CSAT), volumen de conversaciones y rendimiento por agente en tiempo real.' },
      { icon: 'bi bi-arrow-repeat', title: 'Automatización de Tareas Repetitivas', text: 'Orquestación de flujos de trabajo avanzados con n8n, Python, webhooks y microservicios que reducen hasta un 80% la carga operativa manual.' }
    ],
    technologies: ['WhatsApp Cloud API', 'Meta Graph API', 'Webhooks', 'n8n', 'Python', 'Node.js', 'PostgreSQL', 'Redis', 'CRM Integrations']
  },
  'desarrollo-mvp-startups': {
    title: 'Desarrollo de MVPs para Startups & Validación de Ideas',
    description: 'Transformamos ideas de negocio en Productos Mínimos Viables (MVPs) funcionales y listos para validar mercado o levantar rondas de inversión en 4 a 8 semanas. Acompañamos a fundadores de startups en prototipado UX/UI, ingeniería full-stack, pasarelas de pago y arquitectura cloud, con casos de éxito propios de startups incubadas como Moments Gallery.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/projects/moments.jpg',
    features: [
      { icon: 'bi bi-speedometer2', title: 'De la Idea al Mercado en Semanas', text: 'Sprints ágiles de 4 a 8 semanas para construir tu MVP con la funcionalidad crítica que tus primeros usuarios e inversionistas necesitan ver.' },
      { icon: 'bi bi-shield-check', title: 'Arquitectura Lista para Inversionistas', text: 'Código limpio, modular y documentado (Nuxt, Spring Boot, PostgreSQL) que supera con honores cualquier due diligence técnico de fondos VC o ángeles.' },
      { icon: 'bi bi-palette', title: 'Diseño UX/UI & Prototipos Interactivos', text: 'Wireframes y prototipos interactivos en Figma para validar la experiencia de usuario y presentar a comités de inversión antes del despliegue.' },
      { icon: 'bi bi-credit-card', title: 'Monetización & Pasarelas de Pago', text: 'Integración inmediata de cobros con Stripe, Wompi, PSE o MercadoPago con modelos de suscripción, comisiones de marketplace o compras puntuales.' },
      { icon: 'bi bi-trophy', title: 'Validación con Startups Reales (Moments)', text: 'No solo asesoramos: creamos y operamos startups reales como Moments Gallery, probando nuestra capacidad de resolver desafíos de negocio y producto.' },
      { icon: 'bi bi-graph-up-arrow', title: 'Métricas de Tracción & Product Analytics', text: 'Configuración de eventos de telemetría, embudos de conversión, retención y métricas clave (CAC, LTV, Churn) para optimizar el crecimiento.' }
    ],
    technologies: ['Nuxt 3', 'Vue.js', 'Spring Boot', 'Python', 'PostgreSQL', 'Stripe', 'Wompi', 'Figma', 'Docker', 'AWS']
  }
};

const service = servicesData[slug];

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Servicio no encontrado' });
}

useHead({
  title: `${service.title} | Colombia & LATAM | CODEVS #1`,
  meta: [
    { name: 'description', content: `${service.description} Ingeniería y desarrollo especializado por CODEVS para empresas en Colombia, Latinoamérica y Estados Unidos.` },
    { name: 'keywords', content: `${service.title.toLowerCase()}, desarrollo de software colombia, desarrollo de software a la medida, empresa de software colombia, arquitectura cloud, codevs` },
    { property: 'og:title', content: `${service.title} | CODEVS` },
    { property: 'og:description', content: service.description },
    { property: 'og:image', content: `https://www.codevs.dev${service.image}` },
    { property: 'og:url', content: `https://www.codevs.dev/servicios/${slug}` },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${service.title} | CODEVS` },
    { name: 'twitter:description', content: service.description },
    { name: 'twitter:image', content: `https://www.codevs.dev${service.image}` }
  ],
  link: [
    { rel: 'canonical', href: `https://www.codevs.dev/servicios/${slug}` }
  ]
});

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': service.title,
  'serviceType': service.title,
  'description': service.description,
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'CODEVS',
    'url': 'https://www.codevs.dev',
    'telephone': '+57 3138066800',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'CO'
    }
  },
  'areaServed': [
    { '@type': 'Country', 'name': 'Colombia' },
    { '@type': 'AdministrativeArea', 'name': 'Latinoamérica' },
    { '@type': 'Country', 'name': 'United States' }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': service.title,
    'itemListElement': service.features.map(f => ({
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': f.title,
        'description': f.text
      }
    }))
  }
}));
</script>

<style scoped>
section {
  background-color: #000000 !important;
}
</style>
