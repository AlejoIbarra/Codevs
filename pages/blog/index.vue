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
  'Arquitectura Web'
];

const posts = [
  {
    slug: 'posicionar-empresa-google-pasto-seo',
    title: 'Cómo Posicionar tu Empresa en el #1 de Google en Pasto y Nariño',
    excerpt: 'Estrategias probadas de SEO local, optimización en Google Maps y rendimiento técnico para superar a la competencia en búsquedas orgánicas.',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-1.jpg',
    date: '12 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '5 min de lectura'
  },
  {
    slug: 'por-que-desarrollo-software-a-medida',
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia',
    excerpt: 'Descubre las razones por las cuales las plataformas desarrolladas a medida con Spring Boot y Nuxt ofrecen mayor seguridad, escalabilidad y retorno de inversión.',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '7 min de lectura'
  },
  {
    slug: 'velocidad-web-conversion-ventas',
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención de Usuarios',
    excerpt: 'Un sitio web que tarda más de 3 segundos pierde el 40% de sus visitantes. Te explicamos cómo optimizamos nuestras aplicaciones para lograr 100% en Lighthouse.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '01 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '6 min de lectura'
  },
  {
    slug: 'astro-nuxt-nextjs-arquitecturas-modernas',
    title: 'Astro vs Nuxt vs Next.js: Cómo Seleccionar el Stack Perfecto para tu Proyecto',
    excerpt: 'Comparativa exhaustiva entre los frameworks más potentes de la industria y cuándo conviene aplicar Server-Side Rendering (SSR) o Static Site Generation (SSG).',
    category: 'Arquitectura Web',
    image: '/img/blog/blog-4.jpg',
    date: '25 Agosto, 2026',
    author: 'Equipo CODEVS',
    readTime: '8 min de lectura'
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
