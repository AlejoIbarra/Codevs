<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-[#060608] overflow-hidden py-24 lg:py-32 border-b border-white/10">
    
    <!-- Ambient lights -->
    <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Editorial grid pattern -->
    <div class="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 portfolio-header">
        <div>
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-[11px]">03 // Casos de Estudio & Portafolio</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Proyectos <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Destacados</span>
          </h2>
        </div>
        <p class="text-zinc-400 font-mono text-xs max-w-md leading-relaxed">
          Descubre algunos de nuestros desarrollos de software, plataformas web interactivas y sistemas a la medida concebidos para dominar el entorno digital.
        </p>
      </div>

      <!-- Case Studies Layout (Asymmetrical Monograph Style) -->
      <div class="space-y-10 portfolio-grid">
        
        <!-- Caso 1: Alacranes AFC (Featured Wide Hero Case Study) -->
        <div class="portfolio-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div class="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden bg-black">
              <img src="/assets/img/projects/alacranes.jpg" alt="Alacranes AFC Plataforma Web" 
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b0b0f] hidden lg:block"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent lg:hidden"></div>

              <div class="absolute top-4 left-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold backdrop-blur-md">
                  CASE 01 // FLAGSHIP
                </span>
                <span class="px-3 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-300 backdrop-blur-md">
                  Pasto, Colombia
                </span>
              </div>
            </div>

            <div class="lg:col-span-5 p-8 sm:p-10 space-y-6">
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">En Producción Activa</span>
              </div>

              <div class="space-y-3">
                <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">Desarrollo Web & Branding</span>
                <h3 class="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-red-400 transition-colors">
                  Alacranes AFC - Plataforma Web
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Plataforma web oficial del equipo de fútbol americano de Pasto, Nariño con galería épica, catálogo merch e integración de sponsors.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Nuxt 3</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Tailwind CSS</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">GSAP Animations</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">SEO Local #1</span>
              </div>

              <div class="flex items-center gap-4 pt-4 border-t border-white/5">
                <NuxtLink to="/proyectos/alacranes-afc" class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 group/btn">
                  <span>Explorar Detalles</span>
                  <i class="bi bi-arrow-up-right text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
                </NuxtLink>
                <a href="https://alacranes-afc.vercel.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-red-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-colors">
                  <i class="bi bi-box-arrow-up-right text-red-400 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Casos 2 y 3: IPTV Max Duo Showcase (Side by Side) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- IPTV Max UI -->
          <div class="portfolio-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-xl flex flex-col justify-between">
            <div>
              <div class="relative h-64 overflow-hidden bg-black border-b border-white/10">
                <img src="/img/UI/pantalla-principal.png" alt="IPTV Max UI" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-black/30 to-transparent"></div>
                <span class="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold backdrop-blur-md">
                  CASE 02 // UI SYSTEM
                </span>
              </div>
              <div class="p-7 space-y-3">
                <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">Diseño UX/UI</span>
                <h3 class="text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                  IPTV Max UI
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV con navegación intuitiva y diseño responsivo.
                </p>
              </div>
            </div>

            <div class="p-7 pt-0 border-t border-white/5 flex items-center justify-between">
              <span class="text-[10px] font-mono text-zinc-500 uppercase">Figma & Prototipado</span>
              <NuxtLink to="/proyectos/iptv-max-ui" class="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
                <span>Ver Caso</span>
                <i class="bi bi-arrow-right text-xs"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- IPTV Max Player -->
          <div class="portfolio-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-xl flex flex-col justify-between">
            <div>
              <div class="relative h-64 overflow-hidden bg-black border-b border-white/10">
                <img src="/img/iptv/iptv-max.png" alt="IPTV Max Player" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-black/30 to-transparent"></div>
                <span class="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold backdrop-blur-md">
                  CASE 03 // MOBILE APP
                </span>
              </div>
              <div class="p-7 space-y-3">
                <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">App Móvil</span>
                <h3 class="text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                  IPTV Max Player
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Motor de reproducción optimizado para streaming de vídeo continuo sin cortes, con arquitectura nativa y baja latencia.
                </p>
              </div>
            </div>

            <div class="p-7 pt-0 border-t border-white/5 flex items-center justify-between">
              <span class="text-[10px] font-mono text-zinc-500 uppercase">Streaming Engine</span>
              <NuxtLink to="/proyectos/iptv-max-player" class="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
                <span>Ver Caso</span>
                <i class="bi bi-arrow-right text-xs"></i>
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- Caso 4: Moments Gallery (Marketplace Featured Case) -->
        <div class="portfolio-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div class="lg:col-span-5 p-8 sm:p-10 space-y-6 order-2 lg:order-1">
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">Marketplace & E-Commerce</span>
              </div>

              <div class="space-y-3">
                <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">Plataforma Web & Pagos</span>
                <h3 class="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-red-400 transition-colors">
                  Moments Gallery - Red Social & Marketplace
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Plataforma web tipo red social y marketplace de fotografía para eventos con autenticación, pasarela de pagos y arquitectura Spring Boot + Nuxt.
                </p>
              </div>

              <div class="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Spring Boot</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Nuxt 3</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Payment Gateway</span>
                <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">Cloud Storage</span>
              </div>

              <div class="flex items-center gap-4 pt-4 border-t border-white/5">
                <NuxtLink to="/proyectos/moments-gallery" class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 group/btn">
                  <span>Explorar Detalles</span>
                  <i class="bi bi-arrow-up-right text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
                </NuxtLink>
                <a href="https://www.moments-gallery.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-red-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-colors">
                  <i class="bi bi-box-arrow-up-right text-red-400 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
            </div>

            <div class="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden bg-black order-1 lg:order-2">
              <img src="/assets/img/projects/moments.jpg" alt="Moments Gallery Plataforma Web" 
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0b0b0f] hidden lg:block"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent lg:hidden"></div>

              <div class="absolute top-4 right-4 flex items-center gap-2">
                <span class="px-3 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold backdrop-blur-md">
                  CASE 04 // MARKETPLACE
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portfolioSection = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.portfolio-header', {
      scrollTrigger: {
        trigger: portfolioSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.portfolio-item', {
      scrollTrigger: {
        trigger: '.portfolio-grid',
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
</script>
