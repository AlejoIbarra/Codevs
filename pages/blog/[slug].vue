<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header Banner -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <!-- Ambient light -->
      <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/blog" class="hover:text-red-500 transition-colors">Blog</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-400 truncate">{{ post.title }}</span>
        </nav>

        <!-- Category & Meta -->
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span class="bg-red-600/90 text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
            {{ post.category }}
          </span>
          <span class="text-xs text-zinc-400 flex items-center gap-1">
            <i class="bi bi-clock text-red-500"></i>
            {{ post.readTime }}
          </span>
          <span class="text-xs text-zinc-400 flex items-center gap-1">
            <i class="bi bi-calendar3 text-red-500"></i>
            {{ post.date }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-8">
          {{ post.title }}
        </h1>

        <!-- Author Info Bar -->
        <div class="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl">
          <div class="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 font-bold">
            <i class="bi bi-code-slash text-xl"></i>
          </div>
          <div>
            <div class="text-sm font-bold text-white">{{ post.author }}</div>
            <div class="text-xs text-zinc-400">Ingeniería & Soluciones Tecnológicas en Pasto, Nariño</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content & Cover Image -->
    <section class="pb-24 border-t border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Cover Image -->
        <div class="relative -mt-6 mb-12 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/20">
          <img :src="post.image" :alt="post.title" class="w-full h-80 sm:h-96 object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <!-- Article Body -->
        <div class="prose prose-invert max-w-none space-y-8 text-zinc-300 leading-relaxed text-base sm:text-lg">
          <div v-for="(section, idx) in post.sections" :key="idx" class="space-y-4">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white pt-4 border-l-4 border-red-600 pl-4">
              {{ section.heading }}
            </h2>
            <p v-for="(paragraph, pIdx) in section.paragraphs" :key="pIdx" class="text-zinc-300 leading-relaxed">
              {{ paragraph }}
            </p>
            <div v-if="section.tip" class="p-6 rounded-2xl bg-zinc-900/90 border border-red-500/30 flex items-start gap-4 my-6">
              <div class="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                <i class="bi bi-lightbulb text-red-500"></i>
              </div>
              <div class="text-sm text-zinc-300">
                <strong class="text-white block mb-1">Clave Estratégica CODEVS:</strong>
                {{ section.tip }}
              </div>
            </div>
          </div>
        </div>

        <!-- Share & Back -->
        <div class="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-white text-sm font-semibold transition"
          >
            <i class="bi bi-arrow-left text-red-500"></i>
            <span>Volver a Todos los Artículos</span>
          </NuxtLink>

          <NuxtLink
            to="/#contact"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-red-950/40"
          >
            <span>Impulsar Mi Proyecto con CODEVS</span>
            <i class="bi bi-rocket-takeoff"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const postsData = {
  'posicionar-empresa-google-pasto-seo': {
    title: 'Cómo Posicionar tu Empresa en el #1 de Google en Pasto y Nariño',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-1.jpg',
    date: '12 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '5 min de lectura',
    sections: [
      {
        heading: '1. La importancia del SEO Local para negocios en Pasto',
        paragraphs: [
          'En el competitivo ecosistema empresarial de Nariño, aparecer en los primeros resultados de búsqueda no es un lujo, sino la mayor fuente de clientes calificados. Cuando un usuario busca "Desarrollo de páginas web en Pasto" o "Software en Nariño", más del 70% de los clics se quedan en las tres primeras posiciones orgánicas.',
          'Para lograrlo, combinamos optimización de Google Business Profile, marcado estructurado Schema.org ProfessionalService y consistencia NAP (Nombre, Dirección, Teléfono).'
        ],
        tip: 'Asegúrate de que tu sitio web cargue en menos de 1.5 segundos en dispositivos móviles para no ser penalizado por el algoritmo de indexación móvil de Google.'
      },
      {
        heading: '2. Core Web Vitals y Rendimiento Técnico',
        paragraphs: [
          'Google premia a los sitios que ofrecen una experiencia de usuario impecable. Las métricas de Largest Contentful Paint (LCP), Interaction to Next Paint (INP) y Cumulative Layout Shift (CLS) determinan directamente tu ranking.',
          'En CODEVS construimos arquitecturas con Nuxt.js y Server-Side Rendering (SSR) que garantizan puntuaciones de 100% en Google Lighthouse.'
        ]
      },
      {
        heading: '3. Estrategia de Contenidos y Palabras Clave Locales',
        paragraphs: [
          'El contenido relevante que resuelve las preguntas específicas de tus clientes locales es el motor definitivo del posicionamiento a largo plazo. La estructura de encabezados semánticos (H1, H2, H3) y metadatos dinámicos consolidan la autoridad de tu dominio.'
        ]
      }
    ]
  },
  'por-que-desarrollo-software-a-medida': {
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '7 min de lectura',
    sections: [
      {
        heading: '1. Las limitaciones invisibles de las plantillas comerciales',
        paragraphs: [
          'Muchas empresas inician con plantillas genéricas o CMS prediseñados para ahorrar costos iniciales. Sin embargo, al poco tiempo se enfrentan a problemas graves: lentitud por exceso de código innecesario, vulnerabilidades de seguridad y limitaciones para integrar pasarelas de pago o sistemas internos.',
          'Un software desarrollado a medida se adapta exactamente a tus procesos operativos y reglas de negocio, permitiendo una escalabilidad sin límites.'
        ],
        tip: 'Una plataforma con arquitectura limpia en Spring Boot y base de datos relacional MySQL permite procesar miles de transacciones concurrentes sin caídas del servicio.'
      },
      {
        heading: '2. Escalabilidad e Integración de Sistemas',
        paragraphs: [
          'El desarrollo a medida permite conectar tus canales de venta, inventarios, pasarelas de pago (Wompi, Stripe, PSE) y sistemas ERP mediante APIs REST y WebSockets seguros.',
          'En CODEVS diseñamos ecosistemas modulares donde cada componente cumple una función óptima.'
        ]
      }
    ]
  },
  'velocidad-web-conversion-ventas': {
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención de Usuarios',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '01 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '6 min de lectura',
    sections: [
      {
        heading: '1. La regla de los 3 segundos en el comercio electrónico',
        paragraphs: [
          'Estudios globales demuestran que más del 40% de los usuarios abandonan un sitio si tarda más de 3 segundos en cargar. Cada segundo adicional reduce la tasa de conversión en un 7%.',
          'La velocidad de carga es el primer factor de retención y la primera impresión que tienen los usuarios de la solidez de tu marca.'
        ],
        tip: 'Utiliza formatos de imagen de última generación como WebP, compresión CDN y carga diferida (Lazy Loading) en todos los recursos multimedia.'
      }
    ]
  },
  'astro-nuxt-nextjs-arquitecturas-modernas': {
    title: 'Astro vs Nuxt vs Next.js: Cómo Seleccionar el Stack Perfecto para tu Proyecto',
    category: 'Arquitectura Web',
    image: '/img/blog/blog-4.jpg',
    date: '25 Agosto, 2026',
    author: 'Equipo CODEVS',
    readTime: '8 min de lectura',
    sections: [
      {
        heading: '1. Arquitecturas Modernas para la Web Actual',
        paragraphs: [
          'Elegir el framework adecuado es una de las decisiones más críticas en cualquier proyecto tecnológico. Astro destaca para sitios con alto contenido gracias a su arquitectura de islas y envío de cero JavaScript por defecto.',
          'Nuxt.js y Next.js son la opción predilecta para aplicaciones interactivas complejas, paneles de administración, marketplaces y redes sociales con renderizado SSR dinámico.'
        ],
        tip: 'En CODEVS evaluamos cada requerimiento para seleccionar la tecnología que proporcione el máximo retorno y la menor latencia posible.'
      }
    ]
  }
};

const post = postsData[slug];

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' });
}

useHead({
  title: `${post.title} | Blog CODEVS - Pasto, Nariño`,
  meta: [
    { name: 'description', content: post.sections[0]?.paragraphs[0] || post.title }
  ]
});
</script>
