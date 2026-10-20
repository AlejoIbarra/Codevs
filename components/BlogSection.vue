<template>
  <section id="blog" ref="blogSection" class="blog-section relative bg-white text-zinc-900 overflow-hidden py-24 lg:py-32 border-t border-zinc-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header con Estilo Editorial Huge Inc -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 blog-header">
        <div class="max-w-2xl">
          <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            Blog de <br />
            <span class="text-red-600">
              Tecnología & SEO.
            </span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-5 leading-relaxed">
            Estrategias de desarrollo de software, posicionamiento en Google y arquitectura cloud desde Pasto para el mundo.
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-red-600 text-white font-bold text-sm transition-all duration-300 shadow-md group hover:scale-105"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid (3 Columns) con Tarjetas Editoriales Limpias -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
        <article
          v-for="(post, index) in featuredPosts"
          :key="index"
          class="blog-item group bg-zinc-50/70 hover:bg-white rounded-[28px] overflow-hidden border border-zinc-200/90 hover:border-zinc-950/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <!-- Image Frame con Zoom Cinemático -->
            <div class="relative h-56 overflow-hidden border-b border-zinc-200 bg-zinc-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                {{ post.category }}
              </span>

              <!-- Read Time Badge -->
              <span class="absolute bottom-3 right-4 bg-white/90 border border-zinc-200 text-zinc-700 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                <i class="bi bi-clock text-red-600 text-xs"></i>
                {{ post.readTime }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-3 text-xs text-zinc-500 font-semibold">
                <span><i class="bi bi-calendar3 mr-1 text-red-600"></i>{{ post.date }}</span>
                <span>•</span>
                <span><i class="bi bi-person mr-1 text-red-600"></i>{{ post.author }}</span>
              </div>

              <h3 class="text-xl font-black text-zinc-950 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-zinc-600 text-sm leading-relaxed line-clamp-3 text-justify">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-8 pt-0">
            <div class="pt-5 border-t border-zinc-200 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors group/link"
              >
                <span>Leer Artículo</span>
                <i class="bi bi-arrow-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </NuxtLink>
              <span class="text-xs text-zinc-400 font-bold uppercase tracking-wider">CODEVS</span>
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
      gsap.from('.blog-header', {
        scrollTrigger: {
          trigger: blogSection.value,
          start: 'top 88%',
          once: true
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out'
      });

      gsap.from('.blog-item', {
        scrollTrigger: {
          trigger: blogSection.value,
          start: 'top 80%',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
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
    slug: 'agentes-ia-flujos-trabajo-automatizacion-software',
    title: 'Agentes Autónomos de IA en 2026: Cómo los Workflows Agénticos Están Reemplazando el Desarrollo Tradicional',
    excerpt: 'Análisis sobre la evolución de asistentes de código hacia sistemas multi-agente autónomos, el protocolo MCP y la automatización de software en empresas.',
    category: 'Inteligencia Artificial & IA',
    image: '/img/blog/blog-inside-post.jpg',
    date: '18 Octubre, 2026',
    author: 'Equipo de IA CODEVS',
    readTime: '15 min de lectura'
  },
  {
    slug: 'geo-posicionamiento-motores-ia-google-overviews',
    title: 'GEO vs SEO: La Guía Definitiva para Posicionar tu Negocio en Google AI Overviews, Perplexity y ChatGPT Search',
    excerpt: 'Estrategias de Generative Engine Optimization (GEO), marcado llms.txt y técnicas de citación algorítmica para liderar en motores de búsqueda de IA.',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-author.jpg',
    date: '15 Octubre, 2026',
    author: 'Laboratorio SEO CODEVS',
    readTime: '14 min de lectura'
  },
  {
    slug: 'optimizacion-inp-edge-computing-streaming-ssr',
    title: 'Dominando la Métrica INP de Google a 60 FPS: Arquitecturas en el Edge, Streaming SSR y Rendimiento Web Extremo',
    excerpt: 'Guía técnica para reducir el Interaction to Next Paint (INP) a menos de 50ms mediante renderizado en el Edge, desagregación de JavaScript y Streaming.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-recent-1.jpg',
    date: '08 Octubre, 2026',
    author: 'División Frontend CODEVS',
    readTime: '13 min de lectura'
  }
];
</script>