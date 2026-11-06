<template>
  <section id="clientes" class="relative bg-[#07070a] text-white py-24 sm:py-32 overflow-hidden border-t border-zinc-900">
    <!-- Ambient Red Mesh Glows -->
    <div class="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

      <!-- Section Header -->
      <div class="max-w-3xl mb-16 sm:mb-20">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/40 border border-red-500/30 backdrop-blur-xl mb-6">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span class="text-xs font-bold uppercase tracking-widest text-red-300">
            Confianza Empresarial • Casos de Éxito
          </span>
        </div>

        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Nuestros Clientes <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500">
            & Socios Estratégicos.
          </span>
        </h2>

        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed text-justify">
          Acompañamos a marcas, empresas e iniciativas de alto impacto a transformar radicalmente sus procesos internos mediante arquitectura de software robusta, inteligencia artificial y automatización omnicanal.
        </p>
      </div>

      <!-- Featured Case Study: Sin Huellas -->
      <div class="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 p-6 sm:p-10 lg:p-12 mb-16 backdrop-blur-2xl overflow-hidden hover:border-red-500/40 transition-all duration-500 shadow-2xl">
        
        <div class="absolute -top-24 -right-24 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Story & Metrics -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-red-600 text-white shadow-md shadow-red-600/30">
                Caso de Éxito Destacado
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-300 border border-white/10">
                Cliente Corporativo
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                +70% Tiempo Ahorrado
              </span>
            </div>

            <div>
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Sin Huellas
              </h3>
              <p class="text-red-400 text-base sm:text-lg font-semibold mt-1">
                Sistema de Omnicanalidad con IA + ERP y CRM Inteligente
              </p>
            </div>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
              En <strong class="text-white font-bold">CODEVS</strong> realizamos un <strong>estudio profundo y diagnóstico exhaustivo</strong> de los procesos operativos y gestiones internas de <strong>Sin Huellas</strong>. Identificamos cuellos de botella en la atención a clientes, control de inventario y seguimiento comercial. Diseñamos e implementamos una solución integral a la medida: un <strong>sistema de omnicanalidad potenciado con Inteligencia Artificial</strong> y un <strong>ERP/CRM centralizado</strong> que transformó por completo su eficiencia empresarial.
            </p>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-red-500">+70%</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Tiempo Ahorrado</div>
                <div class="text-[11px] text-zinc-400 mt-0.5">En gestión operativa diaria</div>
              </div>
              <div class="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">25+ hrs</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Ahorro Semanal</div>
                <div class="text-[11px] text-zinc-400 mt-0.5">Por equipo de trabajo</div>
              </div>
              <div class="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
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
              <NuxtLink
                to="/servicios/automatizaciones-omnicanalidad"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm transition-all duration-300"
              >
                <span>Conocer Servicio de Omnicanalidad</span>
              </NuxtLink>
            </div>

          </div>

          <!-- Right Column: Interactive Image Preview -->
          <div class="lg:col-span-5">
            <NuxtLink to="/proyectos/sin-huellas" class="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900">
              <img
                src="/assets/img/projects/sin-huellas.jpg"
                alt="Sin Huellas ERP CRM Omnicanalidad IA - CODEVS"
                class="w-full h-72 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div class="flex items-center justify-between w-full">
                  <div>
                    <span class="text-xs uppercase tracking-wider text-red-400 font-bold block">Plataforma Cloud</span>
                    <span class="text-white font-bold text-lg">ERP & Omnicanalidad IA</span>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors">
                    <i class="bi bi-arrow-up-right text-sm"></i>
                  </div>
                </div>
              </div>
            </NuxtLink>
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