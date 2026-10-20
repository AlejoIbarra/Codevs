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
            <!-- Image Frame -->
            <div class="relative h-56 overflow-hidden border-b border-zinc-200 bg-zinc-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition-transform duration-700"
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