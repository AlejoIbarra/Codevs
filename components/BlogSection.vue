<template>
  <section id="blog" class="relative bg-white text-[#141416] py-24 lg:py-32 border-t border-[#141416]/10">
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/20 text-xs font-mono uppercase tracking-wider text-[#141416]">
            <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
            Editorial &amp; Academia • Conocimiento
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#171717] tracking-[-0.035em] leading-[1.1]">
            Somos curiosos, <span class="font-serif-italic underline decoration-[#E7000B] decoration-4 underline-offset-4">resolutivos</span> e ingeniosos
          </h2>
          <p class="text-[#64646D] font-light text-base sm:text-lg max-w-xl leading-relaxed">
            Estrategias de desarrollo de software, posicionamiento en Google y diseño de producto digital desde Pasto para el mundo.
          </p>
        </div>

        <div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E7000B] hover:bg-[#C80009] text-white border border-[#141416] rounded-full font-medium text-sm transition-all duration-300 shadow-[2px_2px_0px_#141416] group"
          >
            <span>Ver Todos los Artículos</span>
            <i class="bi bi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in featuredPosts"
          :key="index"
          class="group rounded-[24px] bg-[#FAFAFC] hover:bg-[#FFF1F2] border border-[#141416]/15 hover:border-[#E7000B] p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[4px_4px_0px_#E7000B]"
        >
          <div class="space-y-5">
            <!-- Image Frame -->
            <div class="relative h-56 rounded-[16px] overflow-hidden border border-[#141416]/15 bg-[#141416]">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <span class="absolute top-3 left-3 bg-[#E7000B] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase border border-[#141416]">
                {{ post.category }}
              </span>
              <span class="absolute bottom-3 right-3 bg-white/95 text-[#141416] text-[11px] font-mono px-2.5 py-1 rounded-full border border-[#141416]/20 flex items-center gap-1.5">
                <i class="bi bi-clock text-[10px] text-[#E7000B]"></i>
                {{ post.readTime }}
              </span>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-xs text-[#64646D] font-mono">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.author }}</span>
              </div>

              <h3 class="text-xl font-medium text-[#141416] group-hover:text-[#E7000B] transition-colors duration-300 leading-snug">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-[#64646D] text-sm leading-relaxed line-clamp-3 font-light">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="pt-6 mt-6 border-t border-[#141416]/10 flex items-center justify-between">
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E7000B] hover:underline"
            >
              <span>Leer Artículo</span>
              <i class="bi bi-arrow-up-right text-[10px]"></i>
            </NuxtLink>
            <span class="text-[10px] text-[#64646D] font-mono uppercase tracking-wider">CODEVS Insights</span>
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
    readTime: '12 min'
  },
  {
    slug: 'por-que-desarrollo-software-a-medida',
    title: 'Software a Medida vs Plantillas: Por Qué Tu Negocio Necesita Arquitectura Propia',
    excerpt: 'Analizamos las limitaciones de los constructores genéricos frente a soluciones escalables desarrolladas con Spring Boot, Nuxt 3 y arquitecturas modernas.',
    category: 'Ingeniería de Software',
    image: '/img/blog/blog-2.jpg',
    date: '08 Septiembre, 2026',
    author: 'Equipo CODEVS',
    readTime: '14 min'
  },
  {
    slug: 'velocidad-web-conversion-ventas',
    title: 'Impacto de la Velocidad de Carga en las Ventas y Retención: Cada Milisegundo Cuenta',
    excerpt: 'Cada segundo de retraso cuesta hasta un 20% en conversiones. Conoce cómo optimizamos el rendimiento a 60fps y 100% en PageSpeed.',
    category: 'Rendimiento & UX',
    image: '/img/blog/blog-3.jpg',
    date: '20 Agosto, 2026',
    author: 'Equipo CODEVS',
    readTime: '11 min'
  }
];
</script>
