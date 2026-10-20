<template>
  <section id="blog" ref="blogSection" class="blog-section relative bg-[#060608] overflow-hidden py-24 lg:py-32 border-b border-white/10">
    <!-- Ambient light -->
    <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 blog-header">
        <div>
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-[11px]">04 // Publicaciones & Artículos</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Blog de <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Tecnología & SEO</span>
          </h2>
          <p class="text-zinc-400 font-mono text-xs max-w-xl leading-relaxed mt-2">
            Estrategias de desarrollo de software, posicionamiento en Google y arquitectura cloud desde Pasto para el mundo.
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-850 border border-white/10 hover:border-red-500/50 rounded-xl text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-lg group"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-red-500 group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid: Magazine Asymmetric Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 blog-grid">
        
        <!-- Artículo Principal Destacado (7 Columnas) -->
        <article
          v-if="featuredPosts[0]"
          class="blog-item lg:col-span-7 group bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div class="relative h-72 sm:h-80 overflow-hidden bg-black border-b border-white/10">
              <img
                :src="featuredPosts[0].image"
                :alt="featuredPosts[0].title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-black/40 to-transparent"></div>
              
              <span class="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                {{ featuredPosts[0].category }}
              </span>

              <span class="absolute bottom-3 right-4 bg-black/85 border border-white/10 text-zinc-300 text-[10px] font-mono font-medium px-2.5 py-1 rounded-md backdrop-blur-md flex items-center gap-1.5">
                <i class="bi bi-clock text-red-400 text-xs"></i>
                {{ featuredPosts[0].readTime }}
              </span>
            </div>

            <div class="p-8 space-y-4">
              <div class="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span><i class="bi bi-calendar3 mr-1 text-red-500"></i>{{ featuredPosts[0].date }}</span>
                <span>•</span>
                <span><i class="bi bi-person mr-1 text-red-500"></i>{{ featuredPosts[0].author }}</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                <NuxtLink :to="`/blog/${featuredPosts[0].slug}`">
                  {{ featuredPosts[0].title }}
                </NuxtLink>
              </h3>

              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                {{ featuredPosts[0].excerpt }}
              </p>
            </div>
          </div>

          <div class="p-8 pt-0">
            <div class="pt-4 border-t border-white/5 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${featuredPosts[0].slug}`"
                class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors group/link"
              >
                <span>Leer Guía Completa</span>
                <i class="bi bi-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </NuxtLink>
              <span class="text-[10px] font-mono text-zinc-500 uppercase">EDICIÓN ESPECIAL</span>
            </div>
          </div>
        </article>

        <!-- Columna de Artículos Secundarios (5 Columnas) -->
        <div class="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <article
            v-for="(post, index) in featuredPosts.slice(1)"
            :key="index"
            class="blog-item group bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between p-7"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 px-2.5 py-1 rounded bg-red-600/10 border border-red-500/20">
                  {{ post.category }}
                </span>
                <span class="text-[10px] font-mono text-zinc-500">
                  {{ post.readTime }}
                </span>
              </div>

              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-zinc-300 text-sm leading-relaxed line-clamp-3 text-justify">
                {{ post.excerpt }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors group/link"
              >
                <span>Leer Artículo</span>
                <i class="bi bi-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </NuxtLink>
              <span class="text-[10px] font-mono text-zinc-500">{{ post.date }}</span>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const blogSection = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.blog-header', {
      scrollTrigger: {
        trigger: blogSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.blog-item', {
      scrollTrigger: {
        trigger: '.blog-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
});

const featuredPosts = [
  {
    slug: 'posicionar-empresa-google-pasto-seo',
    title: 'Cómo Posicionar tu Empresa en el #1 de Google en Pasto y Nariño: Guía Maestra',
    excerpt: 'Descubre las claves de ingeniería SEO local, Core Web Vitals y marcado Schema.org que aplicamos en CODEVS para dominar las búsquedas orgánicas.',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-1.jpg',
    date: '12 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '12 min de lectura'
  },
  {
    slug: 'por-que-desarrollo-software-a-medida',
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia',
    excerpt: 'Analizamos las limitaciones de los constructores genéricos frente a soluciones escalables desarrolladas con Spring Boot, Nuxt 3 y arquitecturas modernas.',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '14 min de lectura'
  },
  {
    slug: 'velocidad-web-conversion-ventas',
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención: Cada Milisegundo Cuenta',
    excerpt: 'Cada segundo de retraso cuesta hasta un 20% en conversiones. Conoce cómo optimizamos el rendimiento a 60fps y 100% en PageSpeed.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '20 Agosto, 2026',
    author: 'Equipo CODEVS',
    readTime: '11 min de lectura'
  }
];
</script>
