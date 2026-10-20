<template>
  <section id="blog" ref="blogSection" class="blog-section relative bg-[#07070a] overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    <!-- Esferas Mesh Gradient Rojas Suaves -->
    <div class="absolute top-1/4 right-[-8%] w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-[-8%] w-[600px] h-[600px] bg-red-700/12 rounded-full blur-[160px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 blog-header">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#E7000B]"></span>
            Conocimiento & Tendencias
          </div>
          <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Blog de <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Tecnología & SEO.
            </span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
            Estrategias de desarrollo de software, posicionamiento en Google y arquitectura cloud desde Pasto para el mundo.
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md shadow-lg group hover:scale-105"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-red-400 group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid (3 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
        <article
          v-for="(post, index) in featuredPosts"
          :key="index"
          class="blog-item group mesh-glass-card rounded-[32px] overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
        >
          <div>
            <!-- Image Frame -->
            <div class="relative h-56 overflow-hidden border-b border-zinc-800/80 bg-black">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-black/20 to-transparent"></div>
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                {{ post.category }}
              </span>

              <!-- Read Time Badge -->
              <span class="absolute bottom-3 right-4 bg-black/80 border border-zinc-700/80 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5">
                <i class="bi bi-clock text-red-400 text-xs"></i>
                {{ post.readTime }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-3 text-xs text-zinc-500 font-medium">
                <span><i class="bi bi-calendar3 mr-1 text-red-500"></i>{{ post.date }}</span>
                <span>•</span>
                <span><i class="bi bi-person mr-1 text-red-500"></i>{{ post.author }}</span>
              </div>

              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3 text-justify">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-8 pt-0">
            <div class="pt-5 border-t border-zinc-800/80 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/link"
              >
                <span>Leer Artículo</span>
                <i class="bi bi-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </NuxtLink>
              <span class="text-xs text-zinc-600 font-semibold uppercase tracking-wider">CODEVS</span>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const blogSection = ref(null);
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.blog-item', {
        scrollTrigger: {
          trigger: blogSection.value,
          start: 'top 92%',
          once: true
        },
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
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
