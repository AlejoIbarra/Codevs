<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-[#060608] overflow-hidden py-24 lg:py-32 border-b border-white/10">

    <!-- Iluminación ambiental roja CODEVS -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>

    <!-- Grilla de fondo editorial -->
    <div class="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado de la Sección de Estudio -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 services-header">
        <div>
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-[11px]">02 // Capacidades & Especialidades</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Servicios <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Especializados</span>
          </h2>
        </div>
        <p class="text-zinc-400 font-mono text-xs max-w-md leading-relaxed">
          Diseñamos y desarrollamos arquitecturas digitales optimizadas para posicionar tu negocio en lo más alto de Google en Pasto, Nariño y el mundo.
        </p>
      </div>

      <!-- Cuadrícula Bento Editorial de Servicios (Jerarquía Visual de Estudio) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">
        
        <!-- Tarjeta 1: Desarrollo de Software a la Medida (Flagship Hero) -->
        <div class="service-item lg:col-span-2 group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div>
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 01 // INGENIERÍA CORE ]</span>
              <span class="text-xs font-mono text-zinc-500 uppercase">ARQUITECTURA CLOUD</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div class="md:col-span-7 space-y-4">
                <h3 class="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-red-400 transition-colors">
                  Desarrollo de Software a la Medida
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-300">Spring Boot</span>
                  <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-300">PostgreSQL</span>
                  <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-300">Microservicios</span>
                  <span class="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-300">Alta Concurrencia</span>
                </div>
              </div>

              <div class="md:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-48 bg-black">
                <img src="/assets/img/services/2.png" alt="Desarrollo de Software a la Medida" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[11px] font-mono text-zinc-500 uppercase">Garantía de Escalabilidad</span>
            <NuxtLink to="/servicios/desarrollo-software" class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 group/btn">
              <span>Especificaciones Técnicas</span>
              <i class="bi bi-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjeta 2: Optimización SEO Avanzada -->
        <div class="service-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 02 // GOOGLE #1 ]</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                <i class="bi bi-search text-lg"></i>
              </div>
              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Optimización SEO Avanzada
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en su ciudad o a nivel nacional e internacional.
              </p>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-mono text-zinc-500 uppercase">Schema.org + SERP</span>
            <NuxtLink to="/servicios/seo-avanzado" class="text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
              Ver Detalles →
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjeta 3: Desarrollo de Páginas Web (Flagship) -->
        <div class="service-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 03 // WEB EXP ]</span>
              <span class="text-xs font-mono text-zinc-500">NUXT 3</span>
            </div>

            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                <i class="bi bi-rocket-takeoff text-lg"></i>
              </div>
              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Desarrollo de Páginas Web
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.
              </p>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-mono text-zinc-500 uppercase">Ultra-rápido</span>
            <NuxtLink to="/servicios/desarrollo-web" class="text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
              Ver Detalles →
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjeta 4: Diseño de Interfaces UX/UI -->
        <div class="service-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 04 // UX & UI ]</span>
              <span class="text-xs font-mono text-zinc-500">FIGMA</span>
            </div>

            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                <i class="bi bi-vector-pen text-lg"></i>
              </div>
              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Diseño de Interfaces UX/UI
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.
              </p>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-mono text-zinc-500 uppercase">Design Systems</span>
            <NuxtLink to="/servicios/diseno-ux-ui" class="text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
              Ver Detalles →
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjeta 5: Desarrollo de Apps Móviles -->
        <div class="service-item group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 05 // MOBILE ]</span>
              <span class="text-xs font-mono text-zinc-500">iOS & ANDROID</span>
            </div>

            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
                <i class="bi bi-phone text-lg"></i>
              </div>
              <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Desarrollo de Apps Móviles
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas (Swift) o híbridas (Flutter) de gran fluidez.
              </p>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] font-mono text-zinc-500 uppercase">App Store & Play</span>
            <NuxtLink to="/servicios/apps-moviles" class="text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400">
              Ver Detalles →
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjeta 6: Integraciones de APIs (Spans 3 cols on large for full-width power or single) -->
        <div class="service-item lg:col-span-3 group relative bg-[#0b0b0f] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="flex items-start sm:items-center gap-5 relative z-10">
            <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <i class="bi bi-puzzle text-2xl"></i>
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">[ 06 // INTEGRACIONES ]</span>
                <span class="text-[10px] font-mono text-zinc-500">DATA & PAYMENTS</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                Integraciones de APIs & Sistemas
              </h3>
              <p class="text-zinc-300 text-sm max-w-2xl leading-relaxed">
                Conectamos sistemas existentes con pasarelas de pago (PayU, Wompi, Stripe), CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.
              </p>
            </div>
          </div>

          <div class="relative z-10 shrink-0">
            <NuxtLink to="/servicios/integraciones-apis" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all">
              <span>Explorar Integraciones</span>
              <i class="bi bi-arrow-right text-red-500"></i>
            </NuxtLink>
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

const servicesSection = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.services-header', {
      scrollTrigger: {
        trigger: servicesSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.service-item', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }
});
</script>
