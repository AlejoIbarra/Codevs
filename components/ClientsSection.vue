<template>
  <section
    id="clientes"
    class="relative bg-[#07070a] text-white py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
    style="background-image: radial-gradient(circle at 0% 25%, rgba(220,38,38,0.08), transparent 45%), radial-gradient(circle at 100% 75%, rgba(220,38,38,0.08), transparent 45%);"
  >
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

      <!-- Section Header -->
      <div class="max-w-3xl mb-16 sm:mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Nuestros Clientes <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500">
            & Socios Estratégicos.
          </span>
        </h2>

        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed text-justify">
          Acompañamos a marcas, firmas legales, empresas e iniciativas de alto impacto a transformar radicalmente sus procesos internos mediante desarrollo de software a la medida, bases de datos de alto rendimiento e inteligencia artificial.
        </p>
      </div>

      <!-- Featured Case Study: Sin Huellas -->
      <div
        class="relative rounded-[32px] sm:rounded-[40px] bg-[#0e0e13] border border-white/15 p-6 sm:p-10 lg:p-12 mb-16 overflow-hidden hover:border-red-500/40 transition-colors duration-300 shadow-2xl"
        style="background-image: radial-gradient(circle at 95% 5%, rgba(220,38,38,0.14), transparent 45%);"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Story & Metrics -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-red-600 text-white shadow-md shadow-red-600/30">
                Caso de Éxito Destacado
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-300 border border-white/10">
                Firma de Abogados • LegalTech
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                +70% Tiempo Ahorrado
              </span>
            </div>

            <!-- Official Client Logo -->
            <div class="pt-1">
              <a href="https://www.sinhuellas.co/" target="_blank" rel="noopener noreferrer" class="group/brand inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/95 hover:bg-white border border-white/30 shadow-lg transition-transform hover:scale-105" title="Visitar sinhuellas.co">
                <img src="/assets/img/clients/sin-huellas-logo.png" alt="Logo Sin Huellas Nuevas Oportunidades" loading="lazy" decoding="async" class="h-7 w-auto object-contain" />
                <span class="text-xs font-bold text-zinc-800 border-l border-zinc-300 pl-3 group-hover/brand:text-red-600 transition-colors flex items-center gap-1">
                  <span>www.sinhuellas.co</span>
                  <i class="bi bi-box-arrow-up-right text-[10px]"></i>
                </span>
              </a>
            </div>

            <div>
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Sin Huellas Nuevas Oportunidades
              </h3>
              <p class="text-red-400 text-base sm:text-lg font-semibold mt-1">
                Firma de Abogados: Suite de Omnicanalidad con IA + ERP y CRM Jurídico
              </p>
            </div>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
              En <strong class="text-white font-bold">CODEVS</strong> realizamos un <strong>estudio profundo y diagnóstico exhaustivo</strong> de los procesos operativos y la gestión de expedientes de la firma de abogados <strong>Sin Huellas Nuevas Oportunidades</strong>, especialistas en saneamiento financiero, eliminación de reportes negativos ante centrales de riesgo e insolvencia. Identificamos cuellos de botella en la atención de cientos de consultas diarias por WhatsApp, seguimiento de términos procesales y cobranza de honorarios. Diseñamos e implementamos un ecosistema a medida: un <strong>agente legal de IA en WhatsApp Cloud API</strong> y un <strong>ERP/CRM jurídico centralizado</strong> que ahorra más de 25 horas semanales por abogado y redujo un 70% los tiempos operativos.
            </p>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-black/50 border border-white/10">
                <div class="text-2xl sm:text-3xl font-black text-red-500">+70%</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Tiempo Ahorrado</div>
                <div class="text-[11px] text-zinc-400 mt-0.5">En gestión operativa diaria</div>
              </div>
              <div class="p-4 rounded-2xl bg-black/50 border border-white/10">
                <div class="text-2xl sm:text-3xl font-black text-white">25+ hrs</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Ahorro Semanal</div>
                <div class="text-[11px] text-zinc-400 mt-0.5">Por equipo de trabajo</div>
              </div>
              <div class="p-4 rounded-2xl bg-black/50 border border-white/10 col-span-2 sm:col-span-1">
                <div class="text-2xl sm:text-3xl font-black text-white">24/7</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Omnicanal IA</div>
                <div class="text-[11px] text-zinc-400 mt-0.5">WhatsApp, web & CRM</div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <NuxtLink
                to="/proyectos/sin-huellas"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-105 transition-all duration-300"
              >
                <span>Ver Caso de Éxito Completo</span>
                <i class="bi bi-arrow-right text-xs"></i>
              </NuxtLink>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all duration-300"
              >
                <span>Cotizar un Sistema Similar</span>
                <i class="bi bi-lightning-charge-fill text-red-400 text-xs"></i>
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive Image Preview -->
          <div class="lg:col-span-5">
            <NuxtLink to="/proyectos/sin-huellas" class="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900">
              <img
                src="/assets/img/projects/sin-huellas.jpg"
                alt="Sin Huellas ERP CRM Omnicanalidad IA - CODEVS"
                loading="lazy"
                decoding="async"
                class="w-full h-72 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div class="flex items-center justify-between w-full">
                  <div>
                    <span class="text-xs uppercase tracking-wider text-red-400 font-bold block">Plataforma Cloud</span>
                    <span class="text-white font-bold text-lg">ERP & Omnicanalidad IA</span>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors">
                    <i class="bi bi-arrow-up-right text-sm"></i>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

        </div>

      </div>

      <!-- Marquee Ribbon: Verified Trust & Metrics (Frontend-Identidad & UI-UX Pro Max) -->
      <div class="relative w-full overflow-hidden py-6 mb-16 border-y border-white/10 bg-white/[0.02]">
        <div class="marquee-track flex items-center gap-8 whitespace-nowrap will-change-transform">
          <div v-for="loop in 2" :key="loop" class="flex items-center gap-8 shrink-0">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Sin Huellas Nuevas Oportunidades</span>
              <span class="text-zinc-400 font-normal">• Firma Legal</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>+70% Tiempo Operativo Ahorrado</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Moments Gallery</span>
              <span class="text-zinc-400 font-normal">• Startup Marketplace</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>24/7 Agentes de IA en WhatsApp</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Club Alacranes AFC</span>
              <span class="text-zinc-400 font-normal">• #1 Google SEO</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>100% Código Propietario & Sin Plantillas</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>IPTV Max</span>
              <span class="text-zinc-400 font-normal">• Streaming 60 FPS</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>99.9% Uptime Cloud Garantizado</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Clients & Strategic Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        <!-- Client 1: Moments Gallery -->
        <NuxtLink
          to="/proyectos/moments-gallery"
          class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                Tech Startup
              </span>
              <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
            </div>
            <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
              Moments Gallery
            </h4>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Startup concebida y desarrollada por CODEVS: marketplace digital fotográfico con pasarela de pagos automatizada, procesamiento de marcas de agua en tiempo real y arquitectura Spring Boot + Nuxt.
            </p>
          </div>
          <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span class="text-xs font-semibold text-zinc-400">Marketplace & Pagos</span>
            <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">Ver Detalles →</span>
          </div>
        </NuxtLink>

        <!-- Client 2: Club Alacranes AFC -->
        <NuxtLink
          to="/proyectos/alacranes-afc"
          class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                Club Deportivo
              </span>
              <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
            </div>
            <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
              Alacranes AFC
            </h4>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Ecosistema web oficial y plataforma de branding deportivo de alto rendimiento: catálogo digital de indumentaria oficial, vitrina de patrocinadores estratégicos y posicionamiento orgánico #1.
            </p>
          </div>
          <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span class="text-xs font-semibold text-zinc-400">Plataforma Web & Branding</span>
            <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">Ver Detalles →</span>
          </div>
        </NuxtLink>

        <!-- Client 3: IPTV Max -->
        <NuxtLink
          to="/proyectos/iptv-max-ui"
          class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                Streaming & UI
              </span>
              <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
            </div>
            <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
              IPTV Max
            </h4>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Software y diseño UX/UI de streaming multimedia para pantallas táctiles y Smart TVs con fluidez a 60 FPS, arquitectura de componentes escalable y micro-interacciones de baja latencia.
            </p>
          </div>
          <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span class="text-xs font-semibold text-zinc-400">Diseño UI/UX & Media</span>
            <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">Ver Detalles →</span>
          </div>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>

<script setup>
// Componente de Sección Clientes & Casos de Éxito CODEVS
</script>

<style scoped>
@keyframes marquee-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
</style>