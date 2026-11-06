<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-[#FAFAFC] overflow-hidden py-24 lg:py-32 border-t border-zinc-200">
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header con Estilo Editorial Huge Inc -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 portfolio-header">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="bi bi-code-slash text-xs"></i>
            <span>Ingeniería en Producción</span>
          </div>
          <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            Proyectos <br />
            <span class="text-red-600">
              Destacados.
            </span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
            Explora nuestros desarrollos de software, arquitecturas cloud y plataformas a la medida concebidas para transformar operaciones y maximizar resultados.
          </p>
        </div>

        <!-- Metric counter pill -->
        <div class="hidden sm:flex items-center gap-4 px-5 py-3 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
          <div>
            <div class="text-2xl font-black text-zinc-950 leading-none">100%</div>
            <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Código Propietario</div>
          </div>
          <div class="w-px h-8 bg-zinc-200"></div>
          <div>
            <div class="text-2xl font-black text-red-600 leading-none">&lt; 1s</div>
            <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Carga & 60 FPS</div>
          </div>
        </div>
      </div>

      <!-- Category Filter Tabs (frontend-identidad & ui-ux-pro-max) -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border"
          :class="[
            activeCategory === cat.id
              ? 'bg-zinc-950 text-white border-zinc-950 shadow-md shadow-zinc-950/20'
              : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950'
          ]"
        >
          <span>{{ cat.label }}</span>
          <span
            class="text-[10px] font-black px-1.5 py-0.5 rounded-full"
            :class="activeCategory === cat.id ? 'bg-red-600 text-white' : 'bg-zinc-100 text-zinc-500'"
          >
            {{ cat.count }}
          </span>
        </button>
      </div>

      <!-- Projects Grid (Animated with transition-group) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 portfolio-grid">
        <div
          v-for="item in filteredItems"
          :key="item.title"
          class="portfolio-item group relative bg-white rounded-[28px] overflow-hidden border border-zinc-200/90 hover:border-zinc-950/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <!-- Image Area con Acabado Nítido -->
            <div class="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-200 bg-zinc-100">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              <!-- Category Badge & Highlights -->
              <div class="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span class="bg-zinc-950 text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                  {{ item.category }}
                </span>
                <span v-if="item.isCaseStudy" class="bg-red-600 text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40 flex items-center gap-1.5">
                  <i class="bi bi-star-fill text-xs"></i>
                  <span>Caso de Éxito</span>
                </span>
                <span v-if="item.isStartup" class="bg-red-600 text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40 flex items-center gap-1.5">
                  <i class="bi bi-rocket-takeoff-fill text-xs"></i>
                  <span>Startup CODEVS</span>
                </span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 space-y-3">
              <h3 class="text-2xl font-black text-zinc-950 group-hover:text-red-600 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-zinc-600 text-sm leading-relaxed text-justify">
                {{ item.description }}
              </p>

              <!-- Tech Tags Pill Cloud -->
              <div class="flex flex-wrap items-center gap-2 pt-2">
                <span
                  v-for="(tag, tIdx) in item.tags"
                  :key="tIdx"
                  class="text-[11px] font-semibold text-zinc-600 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Card Footer Links -->
          <div class="p-8 pt-0">
            <div class="pt-5 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-4">
              <div class="flex items-center gap-4">
                <NuxtLink
                  :to="item.detailsLink"
                  class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group-hover:text-red-600 transition-colors group/btn"
                >
                  <span>Explorar Detalles</span>
                  <div class="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                    <i class="bi bi-arrow-up-right text-xs text-zinc-900 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"></i>
                  </div>
                </NuxtLink>

                <a
                  v-if="item.liveUrl"
                  :href="item.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 transition-colors px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 hover:border-zinc-400"
                  title="Visitar sitio web oficial"
                >
                  <i class="bi bi-box-arrow-up-right text-red-600 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
              <span class="text-xs text-zinc-400 font-bold uppercase tracking-wider">CODEVS</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portfolioSection = ref(null);
let ctx = null;

const items = [
  {
    image: '/assets/img/projects/sin-huellas.jpg',
    title: 'Sin Huellas Nuevas Oportunidades — LegalTech, ERP & Omnicanalidad con IA',
    description: 'Caso de éxito en firma de abogados: estudio de reingeniería de procesos e implementación de software integral a la medida (ERP + CRM Jurídico + Agentes de IA en WhatsApp). Ahorro de más de 25 horas semanales por abogado y 70% de reducción en tiempos de gestión operativa.',
    category: 'LegalTech • Firma de Abogados',
    type: 'casos',
    isCaseStudy: true,
    tags: ['WhatsApp Cloud API', 'ERP/CRM Jurídico', '+70% Tiempo Ahorrado', 'Meta AI', 'Python'],
    detailsLink: '/proyectos/sin-huellas',
    liveUrl: 'https://www.sinhuellas.co/'
  },
  {
    image: '/assets/img/projects/moments.jpg',
    title: 'Moments Gallery — Startup & Marketplace',
    description: 'Startup tecnológica concebida y desarrollada por CODEVS: marketplace y red social para fotografía de eventos con cobros automatizados, entrega inmediata de activos digitales y arquitectura cloud Spring Boot + Nuxt.',
    category: 'Startup • Marketplace',
    type: 'startups',
    isStartup: true,
    tags: ['Spring Boot', 'Nuxt 3', 'Mercado Pago / Stripe', 'AWS S3', 'PostgreSQL'],
    detailsLink: '/proyectos/moments-gallery',
    liveUrl: 'https://www.moments-gallery.com/'
  },
  {
    image: '/assets/img/projects/alacranes.jpg',
    title: 'Alacranes AFC - Plataforma Web & Branding',
    description: 'Plataforma web oficial del equipo insignia de fútbol americano con galería épica Bento Grid, catálogo interactivo de merchandising e integración de sponsors.',
    category: 'Desarrollo Web & Branding',
    type: 'web',
    tags: ['Nuxt 3', 'TailwindCSS', 'Bento Grid', 'SEO #1 Google', 'GSAP'],
    detailsLink: '/proyectos/alacranes-afc',
    liveUrl: 'https://alacranes-afc.vercel.app/'
  },
  {
    image: '/img/UI/pantalla-principal.png',
    title: 'IPTV Max UI — Streaming Engine',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV con navegación intuitiva y diseño responsivo.',
    category: 'Diseño UX/UI & TV',
    type: 'ui',
    tags: ['Figma Design System', '60 FPS', 'Micro-interacciones', 'Android TV'],
    detailsLink: '/proyectos/iptv-max-ui'
  },
  {
    image: '/img/iptv/iptv-max.png',
    title: 'IPTV Max Player — Reproductor Nativo',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes, con arquitectura nativa y baja latencia.',
    category: 'App Móvil & Streaming',
    type: 'ui',
    tags: ['ExoPlayer', 'HLS Streaming', 'Baja Latencia', 'Buffer Inteligente'],
    detailsLink: '/proyectos/iptv-max-player'
  }
];

const activeCategory = ref('todos');

const categories = computed(() => [
  { id: 'todos', label: 'Todos los Proyectos', count: items.length },
  { id: 'casos', label: 'Casos de Éxito & IA', count: items.filter(i => i.type === 'casos').length },
  { id: 'startups', label: 'Startups & MVPs', count: items.filter(i => i.type === 'startups').length },
  { id: 'web', label: 'Web & Cloud', count: items.filter(i => i.type === 'web').length },
  { id: 'ui', label: 'Diseño UX/UI & Apps', count: items.filter(i => i.type === 'ui').length }
]);

const filteredItems = computed(() => {
  if (activeCategory.value === 'todos') return items;
  return items.filter(item => item.type === activeCategory.value);
});

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.portfolio-header', {
        scrollTrigger: {
          trigger: portfolioSection.value,
          start: 'top 88%',
          once: true
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out'
      });

      gsap.from('.portfolio-item', {
        scrollTrigger: {
          trigger: portfolioSection.value,
          start: 'top 80%',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>