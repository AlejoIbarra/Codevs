<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Ambient lights -->
      <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2312_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2312_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">Blog de Tecnología & Software</span>
        </nav>

        <div class="max-w-3xl space-y-6 text-left">
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 backdrop-blur-xl">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-xs">CODEVS Knowledge Hub</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            Artículos, Tendencias & <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Ingeniería Digital</span>
          </h1>

          <p class="text-zinc-300 text-lg leading-relaxed max-w-2xl">
            Aprende sobre posicionamiento SEO #1 en Google, desarrollo web moderno, arquitectura de software escalable y estrategias tecnológicas para hacer crecer tu empresa.
          </p>

          <!-- Category filter buttons -->
          <div class="flex flex-wrap gap-2 pt-2">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border',
                selectedCategory === cat
                  ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-950/40'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in filteredPosts"
            :key="index"
            class="group bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div class="relative h-60 overflow-hidden border-b border-zinc-800/80">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                
                <span class="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                  {{ post.category }}
                </span>

                <span class="absolute bottom-3 right-4 bg-black/80 border border-zinc-700/80 text-zinc-300 text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5">
                  <i class="bi bi-clock text-red-400 text-xs"></i>
                  {{ post.readTime }}
                </span>
              </div>

              <div class="p-6 space-y-3">
                <div class="flex items-center gap-3 text-xs text-zinc-500">
                  <span><i class="bi bi-calendar3 mr-1 text-red-500"></i>{{ post.date }}</span>
                  <span>•</span>
                  <span><i class="bi bi-person mr-1 text-red-500"></i>{{ post.author }}</span>
                </div>

                <h2 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </NuxtLink>
                </h2>

                <p class="text-zinc-400 text-sm leading-relaxed">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0">
              <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/link"
                >
                  <span>Leer Artículo Completo</span>
                  <i class="bi bi-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
                </NuxtLink>
                <span class="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">CODEVS</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">¿Quieres potenciar tu <span class="text-red-500">presencia digital</span>?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">Conversa con nuestro equipo de ingenieros en Pasto y recibe una asesoría personalizada para tu proyecto.</p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-red-950/40">
            Solicitar Asesoría Gratuita
            <i class="bi bi-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('Todos');

const categories = [
  'Todos',
  'SEO & Posicionamiento',
  'Ingeniería de Software',
  'Rendimiento & UX',
  'Ciberseguridad & Pagos',
  'Apps Móviles',
  'Arquitectura Web',
  'Estrategia Digital',
  'Bases de Datos'
];

const posts = [
  {
    slug: 'posicionar-empresa-google-pasto-seo',
    title: 'Cómo Posicionar tu Empresa en el #1 de Google en Pasto y Nariño: Guía Maestra de SEO Local y Técnico',
    excerpt: 'Guía técnica profunda de SEO local, Core Web Vitals, marcado Schema.org JSON-LD y optimización en Google Maps para dominar el mercado orgánico.',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-1.jpg',
    date: '12 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '12 min de lectura'
  },
  {
    slug: 'por-que-desarrollo-software-a-medida',
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia para Escalar',
    excerpt: 'Análisis técnico y financiero comparativo entre soluciones genéricas y arquitecturas a medida con Spring Boot y Nuxt 3 para eliminar costos ocultos.',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '14 min de lectura'
  },
  {
    slug: 'velocidad-web-conversion-ventas',
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención: Cada Milisegundo Cuenta',
    excerpt: 'Estudio sobre la correlación directa entre latencia web, tasas de abandono de carritos, optimización de imágenes AVIF y rendimiento móvil.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '20 Agosto, 2026',
    author: 'Equipo CODEVS',
    readTime: '11 min de lectura'
  },
  {
    slug: 'seguridad-apis-pasarelas-pago-colombia',
    title: 'Seguridad en APIs y Pasarelas de Pago: Cómo Blindar tu Comercio Electrónico Contra Fraudes',
    excerpt: 'Guía de ciberseguridad con autenticación JWT asimétrica, firmas HMAC SHA-256 en webhooks e integraciones seguras con Wompi, Stripe y PSE.',
    category: 'Ciberseguridad & Pagos',
    image: '/img/blog/blog-recent-1.jpg',
    date: '15 Julio, 2026',
    author: 'Equipo CODEVS',
    readTime: '13 min de lectura'
  },
  {
    slug: 'astro-nuxt-nextjs-arquitecturas-modernas',
    title: 'Astro vs Nuxt vs Next.js: Guía Definitiva de Arquitectura Frontend para 2026',
    excerpt: 'Comparativa profunda entre arquitecturas de islas sin JS, SSR dinámico en Vue 3 y Server Components de React para seleccionar el stack ideal.',
    category: 'Arquitectura Web',
    image: '/img/blog/blog-4.jpg',
    date: '10 Mayo, 2026',
    author: 'Equipo CODEVS',
    readTime: '13 min de lectura'
  },
  {
    slug: 'apps-moviles-flutter-vs-nativas',
    title: 'Desarrollo Móvil con Flutter: Rendimiento Nativo en iOS y Android con un Solo Código',
    excerpt: 'Arquitectura limpia, motor gráfico Impeller, gestión de estados con BLoC y sincronización offline para aplicaciones móviles fluidas a 120 FPS.',
    category: 'Apps Móviles',
    image: '/img/blog/blog-recent-2.jpg',
    date: '18 Febrero, 2026',
    author: 'Equipo CODEVS',
    readTime: '12 min de lectura'
  },
  {
    slug: 'microservicios-spring-boot-escalabilidad',
    title: 'Arquitectura de Microservicios con Spring Boot: Guía Práctica de Escalabilidad y Alta Disponibilidad',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-recent-3.jpg',
    date: '14 Noviembre, 2025',
    author: 'Equipo CODEVS',
    readTime: '15 min de lectura'
  },
  {
    slug: 'transformacion-digital-empresas-narino',
    title: 'Transformación Digital en Nariño: Casos Reales de Automatización, Eficiencia y Rentabilidad',
    excerpt: 'Metodología en 3 fases y casos de éxito para digitalizar empresas comerciales, industriales y de servicios en San Juan de Pasto e Ipiales.',
    category: 'Estrategia Digital',
    image: '/img/blog/blog-recent-4.jpg',
    date: '22 Junio, 2025',
    author: 'Equipo CODEVS',
    readTime: '11 min de lectura'
  },
  {
    slug: 'bases-datos-mysql-postgresql-rendimiento',
    title: 'Optimización de Consultas e Índices en Bases de Datos Relacionales: De Segundos a Milisegundos',
    excerpt: 'Auditoría con EXPLAIN, diseño de índices B-Tree compuestos y patrones Cache-Aside con Redis para bases de datos de alto volumen.',
    category: 'Bases de Datos',
    image: '/img/blog/blog-recent-5.jpg',
    date: '05 Octubre, 2024',
    author: 'Equipo CODEVS',
    readTime: '14 min de lectura'
  }
];

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Todos') return posts;
  return posts.filter(p => p.category === selectedCategory.value);
});

useHead({
  title: 'Blog de Tecnología, Software & SEO en Pasto | CODEVS',
  meta: [
    {
      name: 'description',
      content: 'Artículos y guías sobre desarrollo de software a medida, páginas web, optimización SEO local en Pasto y tendencias tecnológicas por los ingenieros de CODEVS.'
    }
  ]
});
</script>
