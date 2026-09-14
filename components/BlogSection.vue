<template>
  <section id="blog" class="blog-section relative bg-black overflow-hidden py-24 lg:py-32 border-t border-zinc-900">
    <!-- Ambient light -->
    <div class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 shadow-lg shadow-red-950/30 backdrop-blur-xl mb-4">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Conocimiento & Tendencias</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Blog de <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Tecnología & SEO</span>
          </h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mt-4 mb-4 rounded-full"></div>
          <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl leading-relaxed">
            Estrategias de desarrollo de software, posicionamiento en Google y arquitectura cloud desde Pasto para el mundo.
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/50 rounded-xl text-white font-semibold text-sm transition-all duration-300 shadow-lg group"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-red-500 group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in featuredPosts"
          :key="index"
          class="group bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-xl"
        >
          <div>
            <!-- Image Frame -->
            <div class="relative h-56 overflow-hidden border-b border-zinc-800/80">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                {{ post.category }}
              </span>

              <!-- Read Time Badge -->
              <span class="absolute bottom-3 right-4 bg-black/80 border border-zinc-700/80 text-zinc-300 text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5">
                <i class="bi bi-clock text-red-400 text-xs"></i>
                {{ post.readTime }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3 text-xs text-zinc-500">
                <span><i class="bi bi-calendar3 mr-1 text-red-500"></i>{{ post.date }}</span>
                <span>•</span>
                <span><i class="bi bi-person mr-1 text-red-500"></i>{{ post.author }}</span>
              </div>

              <h3 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-6 pt-0">
            <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/link"
              >
                <span>Leer Artículo</span>
                <i class="bi bi-chevron-right text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </NuxtLink>
              <span class="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">CODEVS Insights</span>
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
    title: 'Cómo Posicionar tu Empresa en el #1 de Google en Pasto y Nariño',
    excerpt: 'Descubre las claves del SEO local, Core Web Vitals y optimización técnica que aplicamos en CODEVS para dominar las búsquedas locales.',
    category: 'SEO & Posicionamiento',
    image: '/img/blog/blog-1.jpg',
    date: '12 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '5 min de lectura'
  },
  {
    slug: 'por-que-desarrollo-software-a-medida',
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia',
    excerpt: 'Analizamos las limitaciones de los constructores genéricos frente a soluciones escalables desarrolladas con Spring Boot, Nuxt y arquitecturas modernas.',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '7 min de lectura'
  },
  {
    slug: 'velocidad-web-conversion-ventas',
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención de Usuarios',
    excerpt: 'Cada segundo de retraso cuesta hasta un 20% en conversiones. Conoce cómo optimizamos el rendimiento a 60fps y 100% en Lighthouse.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '01 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '6 min de lectura'
  }
];
</script>

<style scoped>
.blog-section {
  background-color: #000000 !important;
  color: #ffffff !important;
}
</style>
