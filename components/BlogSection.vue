<template>
  <section id="blog" ref="blogSection" class="blog-section relative bg-white text-zinc-900 overflow-hidden py-24 lg:py-32 border-t border-zinc-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header con Estilo Editorial Huge Inc -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 blog-header">
        <div class="max-w-2xl">
          <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            {{ isEn ? 'Engineering &' : 'Blog de' }} <br />
            <span class="text-red-600">
              {{ isEn ? 'Tech Insights.' : 'Tecnología & SEO.' }}
            </span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-5 leading-relaxed">
            {{ isEn 
              ? 'Deep technical analysis on game engine architecture, vector databases, and extreme-scale edge computing.' 
              : 'Estrategias de desarrollo de software, arquitectura cloud y tecnologías de alto rendimiento para Colombia y el mundo.'
            }}
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-red-600 text-white font-bold text-sm transition-all duration-300 shadow-md group hover:scale-105"
          >
            <span>{{ isEn ? 'Explore All Articles' : 'Ver Todos los Artículos' }}</span>
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
                <span>{{ isEn ? 'Read Technical Deep-Dive' : 'Leer Artículo' }}</span>
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
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const route = useRoute();
const isEn = computed(() => route?.path ? route.path.startsWith('/en') : false);

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

const featuredPosts = computed(() => {
  if (isEn.value) {
    return [
      {
        slug: 'tecnologias-arquitectura-gta-6-rage-engine',
        title: 'The Engineering Behind GTA 6: RAGE 9, GPU Procedural Physics, Neural Network NPCs & Zero-Latency Streaming',
        excerpt: 'In-depth systems architecture analysis of Rockstar Games RAGE 9 engine: micro-geometry rasterization, GPU Navier-Stokes hydrodynamics, autonomous agent memory, and direct NVMe-to-VRAM streaming.',
        category: 'Software Engineering',
        image: '/img/blog/blog-inside-post.jpg',
        date: 'Nov 19, 2026',
        author: 'CODEVS Architecture Lab',
        readTime: '16 min read'
      },
      {
        slug: 'bases-de-datos-vectoriales-rag-empresarial-ia',
        title: 'Vector Databases & Enterprise RAG in 2026: Architecting Zero-Hallucination AI Memory for Scaleups',
        excerpt: 'Engineering guide to production RAG: PostgreSQL pgvector integration, HNSW indexing, hybrid dense/sparse retrieval with BM25, Cohere cross-encoder reranking, and Redis semantic caching.',
        category: 'Cloud Databases',
        image: '/img/blog/blog-4.jpg',
        date: 'Nov 17, 2026',
        author: 'CODEVS Data & AI Division',
        readTime: '15 min read'
      },
      {
        slug: 'arquitectura-microfrontends-edge-computing-2026',
        title: 'Microfrontends on the Edge with Nuxt 3 & Cloudflare Workers: Eliminating High-Traffic Bottlenecks',
        excerpt: 'How to decompose monolithic web architectures into autonomous microfrontends deployed on edge CDNs. Sub-25ms global latency, isolated blast radius, and 100% uptime under extreme concurrency.',
        category: 'Web Architecture',
        image: '/img/blog/blog-3.jpg',
        date: 'Nov 12, 2026',
        author: 'CODEVS Cloud & Edge Team',
        readTime: '14 min read'
      }
    ];
  }

  return [
    {
      slug: 'tecnologias-arquitectura-gta-6-rage-engine',
      title: 'La Ingeniería Detrás de GTA 6: RAGE 9, Física Procedural en GPU, Redes Neuronales para NPCs y Streaming en Tiempo Real',
      excerpt: 'Análisis técnico exhaustivo de la arquitectura del motor RAGE 9 de Rockstar Games para Grand Theft Auto VI: renderizado nanométrico PBR, hidrodinámica en GPU y agentes autónomos.',
      category: 'Ingeniería de Software',
      image: '/img/blog/blog-inside-post.jpg',
      date: '19 Noviembre, 2026',
      author: 'Laboratorio de Arquitectura CODEVS',
      readTime: '16 min de lectura'
    },
    {
      slug: 'bases-de-datos-vectoriales-rag-empresarial-ia',
      title: 'Bases de Datos Vectoriales y Arquitectura RAG en 2026: Cómo Dotar a la IA Empresarial de Memoria Exacta sin Alucinaciones',
      excerpt: 'Guía técnica profunda para arquitectar sistemas RAG empresariales: integración de pgvector en PostgreSQL, indexación HNSW e IVFFlat, búsqueda híbrida y caché semántico con Redis.',
      category: 'Bases de Datos',
      image: '/img/blog/blog-4.jpg',
      date: '17 Noviembre, 2026',
      author: 'División de Datos & IA CODEVS',
      readTime: '15 min de lectura'
    },
    {
      slug: 'arquitectura-microfrontends-edge-computing-2026',
      title: 'Microfrontends en el Edge con Nuxt 3 y Cloudflare Workers: Eliminando Cuellos de Botella en Plataformas de Alto Tráfico',
      excerpt: 'Cómo descomponer monolitos web lentos en microfrontends modulares desacoplados desplegados en el Edge con Nuxt 3, Module Federation y Cloudflare Workers con latencias sub-25ms.',
      category: 'Arquitectura Web',
      image: '/img/blog/blog-3.jpg',
      date: '12 Noviembre, 2026',
      author: 'División Cloud & Edge CODEVS',
      readTime: '14 min de lectura'
    }
  ];
});
</script>