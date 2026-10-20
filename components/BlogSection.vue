<template>
  <section id="blog" ref="blogSection" class="blog-section relative bg-[#08080b] overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    <!-- Ambient light -->
    <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 blog-header">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase mb-4">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            Conocimiento & Tendencias
          </div>
          <h2 class="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
            Blog de <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
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
            class="inline-flex items-center gap-3 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 rounded-2xl text-white font-semibold text-sm transition-all duration-300 shadow-lg group"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-red-500 group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid (3 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
        <article
          v-for="(post, index) in featuredPosts"
          :key="index"
          class="blog-item group bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/25 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
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
