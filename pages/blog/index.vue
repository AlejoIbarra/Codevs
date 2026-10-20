<template>
  <div class="min-h-screen bg-white text-[#1B1B1F]">
    <!-- Hero Banner -->
    <section class="relative pt-20 pb-16 overflow-hidden border-b border-[#1B1B1F]/10">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-mono text-[#6A7077] mb-8">
          <NuxtLink to="/" class="hover:text-[#1B1B1F] hover:underline">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-[10px]"></i>
          <span class="text-[#1B1B1F] font-medium">Blog de Tecnología &amp; Software</span>
        </nav>

        <div class="max-w-3xl space-y-5 text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF480] border border-[#1B1B1F] text-xs font-mono uppercase tracking-wider text-[#1B1B1F]">
            <span>✦</span>
            <span>CODEVS Knowledge Hub</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-normal text-[#171717] tracking-[-0.035em] leading-[1.1]">
            Artículos, Tendencias &amp; <span class="font-serif-italic underline decoration-[#A5A1FF] decoration-4 underline-offset-4">Ingeniería Digital</span>
          </h1>

          <p class="text-[#1E1E1E]/80 text-lg leading-relaxed max-w-2xl font-light">
            Aprende sobre posicionamiento SEO #1 en Google, desarrollo web moderno, arquitectura de software escalable y estrategias tecnológicas para hacer crecer tu empresa.
          </p>

          <!-- Category filter buttons -->
          <div class="flex flex-wrap gap-2 pt-2">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border',
                selectedCategory === cat
                  ? 'bg-[#1B1B1F] text-white border-[#1B1B1F] shadow-[2px_2px_0px_#FFF480]'
                  : 'bg-[#F9FAFA] text-[#1B1B1F] border-[#1B1B1F]/15 hover:border-[#1B1B1F]'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-20 border-b border-[#1B1B1F]/10 bg-[#F9FAFA]">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in filteredPosts"
            :key="index"
            class="group bg-white border border-[#1B1B1F]/15 hover:border-[#1B1B1F] rounded-[24px] overflow-hidden p-6 shadow-sm hover:shadow-[4px_4px_0px_#1B1B1F] transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-5">
              <div class="relative h-56 rounded-[16px] overflow-hidden border border-[#1B1B1F]/15 bg-[#1B1B1F]">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <span class="absolute top-3 left-3 bg-[#FFF480] text-[#1B1B1F] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase border border-[#1B1B1F]">
                  {{ post.category }}
                </span>
                <span class="absolute bottom-3 right-3 bg-white/90 text-[#1B1B1F] text-[11px] font-mono px-2.5 py-1 rounded-full border border-[#1B1B1F]/20 flex items-center gap-1.5">
                  <i class="bi bi-clock text-[10px]"></i>
                  {{ post.readTime }}
                </span>
              </div>

              <div class="space-y-3">
                <div class="flex items-center gap-3 text-xs text-[#6A7077] font-mono">
                  <span>{{ post.date }}</span>
                  <span>•</span>
                  <span>{{ post.author }}</span>
                </div>

                <h2 class="text-xl font-medium text-[#1B1B1F] group-hover:text-[#1B1B1F] leading-snug">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </NuxtLink>
                </h2>

                <p class="text-[#6A7077] text-sm leading-relaxed font-light">
                  {{ post.excerpt }}
                </p>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#1B1B1F]/10 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B1B1F] hover:underline"
              >
                <span>Leer Artículo Completo</span>
                <i class="bi bi-arrow-up-right text-[10px]"></i>
              </NuxtLink>
              <span class="text-[10px] text-[#6A7077] font-mono uppercase tracking-wider">CODEVS</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-5 text-center">
        <div class="bg-[#FFFDE5] border-2 border-[#1B1B1F] rounded-[28px] p-10 sm:p-14 shadow-[6px_6px_0px_#1B1B1F]">
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] mb-3">
            ¿Quieres potenciar tu <span class="font-serif-italic underline decoration-[#1B1B1F]">presencia digital</span>?
          </h2>
          <p class="text-[#6A7077] text-base mb-8 max-w-lg mx-auto font-light">
            Conversa con nuestro equipo de ingenieros en Pasto y recibe una asesoría personalizada para tu proyecto.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#1B1B1F] hover:bg-[#FFF480] text-white hover:text-[#1B1B1F] border border-[#1B1B1F] rounded-full font-medium text-sm transition-all shadow-[2px_2px_0px_#1B1B1F]"
          >
            <span>Solicitar Asesoría Gratuita</span>
            <i class="bi bi-arrow-up-right text-xs"></i>
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
