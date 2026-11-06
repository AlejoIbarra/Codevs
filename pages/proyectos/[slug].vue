<template>
  <div class="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
    
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Ambient lights -->
      <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#portfolio" class="hover:text-red-500 transition-colors">Proyectos</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300 truncate max-w-xs sm:max-w-none">{{ project.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Text -->
          <div class="lg:w-7/12 space-y-6">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="bg-red-600 text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase shadow-md shadow-red-600/30">
                {{ project.category }}
              </span>
              <span v-if="project.clientType" class="bg-white/10 text-zinc-300 text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase border border-white/10">
                {{ project.clientType }}
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              <span class="bg-gradient-to-r from-white via-zinc-100 to-red-500 bg-clip-text text-transparent">
                {{ project.title }}
              </span>
            </h1>

            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed text-justify">
              {{ project.fullDescription }}
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105"
              >
                <span>Visitar Sitio Web</span>
                <i class="bi bi-box-arrow-up-right text-xs"></i>
              </a>
              <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105">
                Solicitar Proyecto Similar
              </NuxtLink>
              <NuxtLink to="/#portfolio" class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-500 transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
                Ver Más Casos
              </NuxtLink>
            </div>
          </div>

          <!-- Image -->
          <div class="lg:w-5/12 w-full">
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/30 group">
              <img :src="project.image" :alt="project.title" class="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span class="text-xs font-semibold text-zinc-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  Arquitectura Enterprise CODEVS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Ribbon (if available) -->
    <section v-if="project.metrics && project.metrics.length" class="py-12 border-t border-b border-zinc-900 bg-zinc-950/60 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="(metric, mIdx) in project.metrics"
            :key="mIdx"
            class="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-red-500/40 transition-all"
          >
            <div class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-500">
              {{ metric.value }}
            </div>
            <div class="text-xs font-bold text-white uppercase tracking-wider mt-1.5">
              {{ metric.label }}
            </div>
            <div class="text-[11px] text-zinc-400 mt-1 leading-snug">
              {{ metric.sub }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Showcase / Gallery -->
    <section v-if="project.gallery && project.gallery.length" class="py-24 border-t border-zinc-900 relative overflow-hidden">
      <!-- Ambient light -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xl">
            <i class="bi bi-display text-red-500"></i>
            Ecosistema en Producción
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Arquitectura de <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Software & UI</span>
          </h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p class="text-zinc-400 max-w-2xl mx-auto text-base">
            Explora los módulos clave en producción: bandejas de omnicanalidad con IA, tableros ERP de gestión y expedientes automatizados.
          </p>
        </div>

        <div :class="project.gallery.length === 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid grid-cols-1 lg:grid-cols-2 gap-8'">
          <div
            v-for="(item, idx) in project.gallery"
            :key="idx"
            @click="selectedGalleryImg = item"
            class="group bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-950/30 transition-all duration-500 flex flex-col justify-between cursor-pointer"
          >
            <!-- Mockup Window Header -->
            <div class="px-6 py-3.5 bg-zinc-950/90 border-b border-zinc-800/80 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-zinc-500">{{ item.tag }}</span>
                <i class="bi bi-arrows-fullscreen text-zinc-600 group-hover:text-red-400 text-xs transition-colors"></i>
              </div>
            </div>

            <!-- Image View -->
            <div class="relative overflow-hidden bg-zinc-950">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-72 sm:h-80 object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              
              <!-- Hover indicator button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="px-4 py-2 rounded-xl bg-red-600/90 text-white text-xs font-bold shadow-lg shadow-red-950/60 backdrop-blur-md flex items-center gap-2">
                  <i class="bi bi-zoom-in"></i>
                  <span>Ver en Pantalla Completa</span>
                </div>
              </div>
            </div>

            <!-- Info Details -->
            <div class="p-6 sm:p-7 space-y-3 bg-zinc-900/90 border-t border-zinc-800/60 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-red-500 uppercase tracking-wider">{{ item.tag }}</span>
                  <span class="text-xs text-zinc-500 font-mono">0{{ idx + 1 }}</span>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-zinc-400 text-sm leading-relaxed mt-2 text-justify">
                  {{ item.description }}
                </p>
              </div>
              <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                <span>Click para expandir</span>
                <i class="bi bi-arrow-right text-red-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Lightbox for Image Preview -->
    <div
      v-if="selectedGalleryImg"
      @click="selectedGalleryImg = null"
      class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <div
        @click.stop
        class="relative max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-red-950/40"
      >
        <div class="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-red-500 uppercase tracking-wider px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-md">
              {{ selectedGalleryImg.tag }}
            </span>
            <span class="text-sm font-semibold text-white">{{ selectedGalleryImg.title }}</span>
          </div>
          <button
            @click="selectedGalleryImg = null"
            class="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar modal"
          >
            <i class="bi bi-x-lg text-sm"></i>
          </button>
        </div>
        <div class="p-2 sm:p-4 bg-zinc-950/60 max-h-[80vh] overflow-auto flex items-center justify-center">
          <img
            :src="selectedGalleryImg.image"
            :alt="selectedGalleryImg.title"
            class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
        <div class="p-4 bg-zinc-950/90 border-t border-zinc-800/80 text-sm text-zinc-400">
          {{ selectedGalleryImg.description }}
        </div>
      </div>
    </div>

    <!-- Before vs After Diagnostic Section (if available) -->
    <section v-if="project.beforeAfter" class="py-24 border-t border-zinc-900 bg-[#07070a] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <i class="bi bi-arrow-left-right"></i>
            Diagnóstico Operacional & Transformación
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            El Estudio Previo: <span class="text-red-500">Antes vs. Con CODEVS</span>
          </h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p class="text-zinc-400 max-w-2xl mx-auto text-base">
            Cómo la reingeniería y la arquitectura de software eliminaron la saturación operativa e impulsaron el crecimiento de la firma.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Column Before -->
          <div class="rounded-3xl bg-zinc-950/80 border border-red-900/30 p-8 sm:p-10 relative overflow-hidden">
            <div class="flex items-center gap-3 mb-6">
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              <h3 class="text-2xl font-black text-white">
                {{ project.beforeAfter.before.title }}
              </h3>
            </div>
            <ul class="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <li v-for="(point, pIdx) in project.beforeAfter.before.points" :key="pIdx" class="flex items-start gap-3">
                <i class="bi bi-x-circle-fill text-red-500 mt-1 flex-shrink-0"></i>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Column After -->
          <div class="rounded-3xl bg-gradient-to-b from-red-950/20 to-zinc-950/90 border border-red-500/40 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            <div class="flex items-center gap-3 mb-6">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 class="text-2xl font-black text-white">
                {{ project.beforeAfter.after.title }}
              </h3>
            </div>
            <ul class="space-y-4 text-zinc-300 text-sm leading-relaxed">
              <li v-for="(point, pIdx) in project.beforeAfter.after.points" :key="pIdx" class="flex items-start gap-3">
                <i class="bi bi-check-circle-fill text-emerald-400 mt-1 flex-shrink-0"></i>
                <span class="font-medium text-white">{{ point }}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- Project Details Grid -->
    <section class="py-24 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
            <i class="bi bi-gear-wide-connected text-red-500"></i>
            Ingeniería de la Solución
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-white">Módulos Desarrollados a la <span class="text-red-500">Medida</span></h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(detail, i) in project.details" :key="i"
            class="group bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/50 flex items-center justify-center border border-red-500/30 mb-5 group-hover:scale-110 transition-transform">
                <i :class="detail.icon" class="text-xl text-red-500"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2.5">{{ detail.title }}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">{{ detail.text }}</p>
            </div>
            <div class="pt-4 border-t border-white/5 mt-4 text-xs font-mono text-zinc-600">
              Módulo CODEVS #0{{ i + 1 }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO AT CODEVS SECTION (Feeds AI & Potential Clients) -->
    <section v-if="project.codevsCapabilities" class="py-24 border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      <div class="absolute top-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Capacidades Centrales CODEVS
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {{ project.codevsCapabilities.title }}
          </h2>
          <p class="text-red-400 text-lg font-semibold mt-2">
            {{ project.codevsCapabilities.subtitle }}
          </p>
          <p class="text-zinc-300 text-base mt-4 leading-relaxed text-justify">
            {{ project.codevsCapabilities.intro }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(pillar, pIndex) in project.codevsCapabilities.pillars"
            :key="pIndex"
            class="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-red-500 text-xl mb-5">
                <i :class="pillar.icon"></i>
              </div>
              <h3 class="text-lg font-black text-white mb-2">
                {{ pillar.title }}
              </h3>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                {{ pillar.desc }}
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-red-400 font-semibold">
              <span>Solución Enterprise</span>
              <i class="bi bi-chevron-right text-xs"></i>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-20 border-t border-zinc-900 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Stack <span class="text-red-500">Tecnológico</span></h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
          <p class="text-zinc-400 max-w-xl mx-auto text-sm mt-3">
            Infraestructura cloud de alta disponibilidad, microservicios y modelos de lenguaje de última generación.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span v-for="(tech, i) in project.technologies" :key="i"
            class="px-5 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-full text-sm font-semibold text-zinc-300 hover:border-red-500/40 hover:text-red-400 transition-all duration-300 shadow-md">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- FAQ Section (Feeds AI & Google Search) -->
    <section v-if="project.faqs && project.faqs.length" class="py-24 border-t border-zinc-900 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
            <i class="bi bi-question-circle text-red-500"></i>
            Preguntas Frecuentes
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Preguntas sobre este <span class="text-red-500">Caso de Éxito</span>
          </h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="space-y-4">
          <div
            v-for="(faq, fIndex) in project.faqs"
            :key="fIndex"
            class="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-red-500/40"
          >
            <button
              @click="toggleFaq(fIndex)"
              class="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
            >
              <span>{{ faq.q }}</span>
              <i
                class="bi bi-chevron-down text-red-500 transition-transform duration-300 flex-shrink-0"
                :class="{ 'rotate-180': openFaqIndex === fIndex }"
              ></i>
            </button>
            <div
              v-show="openFaqIndex === fIndex"
              class="px-6 pb-6 text-zinc-400 text-sm sm:text-base leading-relaxed text-justify border-t border-zinc-800/50 pt-4"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 border-t border-zinc-900 bg-gradient-to-b from-black to-zinc-950">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div class="absolute -top-24 -left-24 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            Transformación Digital Comprobada
          </span>
          <h2 class="text-3xl sm:text-5xl font-black text-white mb-6">
            ¿Listo para Ahorrar <span class="text-red-500">+70% de Tiempo</span> en tu Organización?
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-center">
            Diseñamos tu ERP, CRM y agentes de IA a la medida con arquitectura escalable. Contáctanos hoy y recibe un diagnóstico inicial sin costo en menos de 24 horas.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-105">
              Iniciar Diagnóstico con CODEVS
              <i class="bi bi-arrow-right ml-2"></i>
            </NuxtLink>
            <a href="https://wa.me/573138066800?text=Hola%20CODEVS%2C%20estoy%20interesado%20en%20un%20sistema%20similar%20al%20caso%20de%20%C3%A9xito%20de%20Sin%20Huellas%20(ERP%2C%20CRM%20y%20Omnicanalidad%20con%20IA)." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-white rounded-xl font-semibold text-base transition-all duration-300">
              <i class="bi bi-whatsapp mr-2 text-emerald-500"></i>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const selectedGalleryImg = ref(null);
const openFaqIndex = ref(0);

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const projectsData = {
  'alacranes-afc': {
    title: 'Alacranes AFC - Plataforma Web Oficial',
    category: 'Desarrollo Web & Branding',
    clientType: 'Club Deportivo Oficial',
    description: 'Plataforma web oficial del equipo de fútbol americano Alacranes AFC.',
    fullDescription: 'Diseñamos y desarrollamos la plataforma web oficial de Alacranes AFC, el club insignia de fútbol americano ("Sangre y Pólvora"). Creamos una experiencia digital inmersiva y de alto impacto visual con arquitectura Astro ultrarrápida, galería interactiva estilo Bento Grid con visor Lightbox de 17 fotografías de alta resolución, catálogo oficial de indumentaria y uniformes, carrusel infinito de patrocinadores oficiales (donde CODEVS participa como sponsor tecnológico), e integración con Instagram para su comunidad de atletas y aficionados.',
    image: '/assets/img/projects/alacranes.jpg',
    liveUrl: 'https://alacranes-afc.vercel.app/',
    details: [
      { icon: 'bi bi-lightning-charge', title: 'Diseño Temático & Identidad Visual', text: 'Identidad visual deportiva de alto impacto "Sangre & Pólvora" con microinteracciones y animaciones GSAP fluidas.' },
      { icon: 'bi bi-images', title: 'Galería Épica & Lightbox Interactivo', text: 'Galería estilo Bento Grid con 17 momentos de juego, visor Lightbox con navegación por miniaturas y cursor interactivo.' },
      { icon: 'bi bi-bag-check', title: 'Catálogo de Merchandising', text: 'Módulo de exhibición de jerseys oficiales, sudaderas y gorras con conexión directa a compras.' },
      { icon: 'bi bi-award', title: 'Gestión de Patrocinadores', text: 'Marquee infinito y sección dedicada para dar visibilidad de marca a los sponsors oficiales y aliados del club.' },
      { icon: 'bi bi-instagram', title: 'Integración Social & Feed', text: 'Conexión con el perfil oficial de Instagram @alacranespasto para impulsar el alcance y engagement comunitario.' },
      { icon: 'bi bi-speedometer2', title: 'Arquitectura Astro & SEO Deportivo', text: 'Carga ultrarrápida (Score 100 Lighthouse), optimización SEO local y despliegue continuo en Vercel.' }
    ],
    technologies: ['Astro', 'TailwindCSS', 'GSAP Animations', 'Vercel', 'JavaScript ES6+', 'SEO Deportivo', 'Lightbox Interactivo', 'UI/UX Design']
  },
  'iptv-max-ui': {
    title: 'IPTV Max UI',
    category: 'Diseño UX/UI',
    clientType: 'Plataforma Multimedia & Streaming',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV.',
    fullDescription: 'Diseñamos la interfaz completa de IPTV Max, una plataforma de streaming multimedia optimizada para decodificadores Android y Smart TVs. La interfaz incluye navegación por control remoto, carrusel de contenido en vivo, guía EPG interactiva y sistema de favoritos con rendimiento fluido a 60fps.',
    image: '/img/UI/pantalla-principal.png',
    gallery: [
      {
        image: '/img/UI/figma.png',
        tag: 'Diseño en Figma',
        title: 'Arquitectura & Sistema de Diseño',
        description: 'Prototipado interactivo en Figma con componentes modulares, guía de estilos y mapas de navegación adaptados a control remoto.'
      },
      {
        image: '/img/UI/pantalla-principal.png',
        tag: 'UI en Producción',
        title: 'Pantalla Principal & Home TV',
        description: 'Interfaz final renderizada con carrusel dinámico de canales, categorías inteligentes y navegación fluida a 60fps.'
      }
    ],
    details: [
      { icon: 'bi bi-tv', title: 'Optimizado para TV', text: 'Interfaz diseñada específicamente para pantallas grandes y navegación por control remoto D-Pad.' },
      { icon: 'bi bi-play-circle', title: 'Player Integrado', text: 'Reproductor de video nativo con soporte para HLS, DASH y múltiples codecs de audio y video.' },
      { icon: 'bi bi-grid', title: 'Guía EPG', text: 'Guía electrónica de programación interactiva con vista de 7 días y recordatorios.' },
      { icon: 'bi bi-star', title: 'Sistema de Favoritos', text: 'Gestión de canales favoritos con categorías personalizadas y acceso rápido.' },
      { icon: 'bi bi-speedometer2', title: '60fps Fluidos', text: 'Animaciones y transiciones optimizadas para mantener 60 cuadros por segundo en todo momento.' },
      { icon: 'bi bi-palette', title: 'Tema Dinámico', text: 'Sistema de temas personalizables con modo oscuro y modo claro para diferentes preferencias.' }
    ],
    technologies: ['Flutter', 'Dart', 'Figma UX/UI', 'ExoPlayer', 'Android TV', 'Leanback', 'SQLite', 'REST API']
  },
  'iptv-max-player': {
    title: 'IPTV Max Player',
    category: 'App Móvil',
    clientType: 'Streaming Multimedia Engine',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes.',
    fullDescription: 'Desarrollamos el motor de reproducción de IPTV Max Player, una aplicación móvil para Android e iOS que ofrece streaming continuo de video en alta calidad. El reproductor incluye soporte para múltiples protocolos de streaming, buffer inteligente adaptativo y gestión eficiente de recursos para minimizar el consumo de batería.',
    image: '/img/iptv/iptv-max.png',
    gallery: [
      {
        image: '/img/iptv/iptv-max.png',
        tag: 'Player Engine TV & Mobile',
        title: 'Reproductor Multimedia de Alto Rendimiento',
        description: 'Motor de reproducción nativo con búfer inteligente adaptativo, decodificación por hardware y streaming continuo de video en alta calidad sin cortes.'
      }
    ],
    details: [
      { icon: 'bi bi-camera-video', title: 'Streaming Adaptativo', text: 'Buffer inteligente que ajusta la calidad del video según la velocidad de conexión disponible.' },
      { icon: 'bi bi-phone', title: 'Multiplataforma', text: 'Aplicación disponible para Android e iOS con experiencia nativa en ambas plataformas.' },
      { icon: 'bi bi-battery-charging', title: 'Bajo Consumo', text: 'Optimización de recursos para reproducción prolongada sin agotar rápidamente la batería.' },
      { icon: 'bi bi-cast', title: 'Chromecast & AirPlay', text: 'Soporte integrado para transmisión a dispositivos Chromecast y Apple TV vía AirPlay.' },
      { icon: 'bi bi-list', title: 'Gestión de Listas', text: 'Importación y gestión de listas de reproducción M3U con categorías y búsqueda avanzada.' },
      { icon: 'bi bi-clock-history', title: 'Historial Inteligente', text: 'Registro automático de contenido visto con opción de continuar donde lo dejaste.' }
    ],
    technologies: ['Flutter', 'Dart', 'FFmpeg', 'ExoPlayer', 'Firebase', 'Kotlin', 'Swift']
  },
  'moments-gallery': {
    title: 'Moments Gallery - Startup Tecnológica & Marketplace de Fotografía',
    category: 'Startup Tech • Marketplace',
    clientType: 'Startup Digital Concebida por CODEVS',
    description: 'Startup tecnológica y marketplace de fotografía para eventos con venta automatizada de recuerdos digitales, pagos en línea y arquitectura Spring Boot + Nuxt.',
    fullDescription: 'Moments Gallery es una startup tecnológica concebida, diseñada y desarrollada por CODEVS como una plataforma marketplace y red social para eventos sociales y corporativos (bodas, fiestas, festivales y conferencias). La solución demuestra nuestra capacidad para crear productos digitales completos desde cero: autenticación JWT, gestión de roles (fotógrafos, anfitriones y asistentes), procesamiento backend en Spring Boot con marcas de agua dinámicas para protección de propiedad intelectual, pasarela de pagos integrada para monetización inmediata de recuerdos en alta resolución y frontend en Nuxt.js (SSR) optimizado para SEO y velocidad extrema.',
    image: '/assets/img/projects/moments.jpg',
    liveUrl: 'https://www.moments-gallery.com/',
    details: [
      { icon: 'bi bi-person-badge', title: 'Autenticación & Red Social', text: 'Sistema de login/registro seguro con JWT, perfiles de usuario, roles de acceso, gestión de avatares y feed social interactivo con likes y comentarios.' },
      { icon: 'bi bi-credit-card-2-front', title: 'Pasarela de Pagos Integrada', text: 'Checkout seguro para venta individual o por paquetes de fotos digitales en alta resolución con entrega de links de descarga protegidos.' },
      { icon: 'bi bi-shield-check', title: 'Backend Robusto en Spring Boot', text: 'Arquitectura escalable en Spring Boot (Java) para procesamiento concurrente, seguridad estricta, APIs REST y marcas de agua dinámicas.' },
      { icon: 'bi bi-database-check', title: 'Base de Datos MySQL', text: 'Modelado relacional estructurado en MySQL para transacciones financieras, control de compras, usuarios y álbumes de eventos.' },
      { icon: 'bi bi-google', title: 'Optimización SEO con Nuxt (SSR)', text: 'Renderizado del lado del servidor (SSR) con Nuxt.js / Vue para máxima velocidad de carga e indexación #1 en motores de búsqueda.' },
      { icon: 'bi bi-images', title: 'Galerías & Álbumes en Alta Resolución', text: 'Visor multimedia inmersivo a pantalla completa con compresión inteligente y distribución CDN de ultra baja latencia.' }
    ],
    technologies: ['Spring Boot (Java)', 'Nuxt.js / Vue.js (SSR)', 'MySQL', 'Spring Security & JWT', 'Pasarela de Pagos', 'TailwindCSS', 'REST APIs', 'Cloud Storage / CDN', 'SEO Avanzado']
  },
  'sin-huellas': {
    title: 'Sin Huellas Nuevas Oportunidades — LegalTech, ERP, CRM & Suite de Omnicanalidad con IA',
    clientName: 'Sin Huellas Nuevas Oportunidades',
    clientType: 'Firma de Abogados & Soluciones Jurídicas Financieras',
    category: 'Caso de Éxito • LegalTech & Software con IA',
    description: 'Estudio de reingeniería de procesos e implementación integral de ERP, CRM Jurídico y Suite de Omnicanalidad con Inteligencia Artificial para la firma de abogados Sin Huellas Nuevas Oportunidades: ahorro del 70% en tiempos operativos y +25 horas semanales optimizadas por abogado.',
    fullDescription: 'En CODEVS desarrollamos una solución tecnológica integral a la medida para la firma de abogados Sin Huellas Nuevas Oportunidades, líderes en saneamiento crediticio, eliminación de reportes negativos ante centrales de riesgo (TransUnion, Datacrédito), insolvencia económica de persona natural no comerciante y defensa jurídica de deudores. Tras un diagnóstico y estudio profundo de sus operaciones y gestiones internas, identificamos graves cuellos de botella: abogados atendiendo manualmente cientos de WhatsApps repetitivos al día, expedientes desconectados en hojas de cálculo y demoras en el cobro de honorarios fraccionados. CODEVS diseñó e implementó un ecosistema unificado: un Agente de IA Legal conectado a WhatsApp Cloud API que califica prospectos 24/7, un CRM Jurídico con pipeline procesal y redacción asistida de minutas legales, y un ERP financiero para control de cobros. El resultado comprobado: reducción superior al 70% en tiempos de gestión operativa y más de 25 horas semanales ahorradas por cada abogado.',
    image: '/assets/img/projects/sin-huellas.jpg',
    metrics: [
      { value: '+70%', label: 'Tiempo Ahorrado', sub: 'En gestión jurídica y administrativa diaria' },
      { value: '+25 hrs', label: 'Ahorro Semanal', sub: 'Por cada abogado y asistente de la firma' },
      { value: '< 3 seg', label: 'Respuesta Inmediata', sub: 'Agente Legal IA en WhatsApp Cloud 24/7' },
      { value: '1,500+', label: 'Consultas al Mes', sub: 'Atendidas y clasificadas automáticamente' },
      { value: '100%', label: 'Expedientes en Nube', sub: 'Cero preclusión de términos judiciales' }
    ],
    gallery: [
      {
        image: '/assets/img/projects/sin-huellas.jpg',
        tag: 'Dashboard Ejecutivo & ERP',
        title: 'Tablero Centralizado de Gestión Jurídica & Telemetría',
        description: 'Panel de control de alto rendimiento para directores de la firma: supervisión en vivo de expedientes activos por etapa, efectividad jurídica por tipo de trámite (Habeas Data vs. Insolvencia), conciliación de honorarios y rendimiento de abogados.'
      },
      {
        image: '/assets/img/projects/sin-huellas-inbox.jpg',
        tag: 'Omnicanalidad & IA WhatsApp',
        title: 'Bandeja Multi-Agente con Asistente Legal Inteligente',
        description: 'Integración oficial de WhatsApp Business Cloud API con Inteligencia Artificial entrenada en normativa colombiana (Ley 1266 de 2008, Ley 2157 de 2021 Borrón y Cuenta Nueva). Realiza triage legal instantáneo en < 3 segundos, recopila cédula y soportes, y agenda citas.'
      },
      {
        image: '/assets/img/projects/sin-huellas-dossier.jpg',
        tag: 'CRM Jurídico & Minutas IA',
        title: 'Expediente Digital con Scoring y Generador de Minutas',
        description: 'Ficha técnica por cliente con scoring de viabilidad de caso (96%), línea de tiempo de radicaciones, alertas preventivas de términos procesales para evitar sanciones y generador asistido por IA de derechos de petición y tutelas listos para firma.'
      }
    ],
    beforeAfter: {
      before: {
        title: 'Antes de CODEVS: Colapso Operativo & Procesos Manuales',
        points: [
          'Abogados y asistentes consumiendo más del 70% de su jornada respondiendo WhatsApps repetitivos: "¿Cómo va mi proceso?", "¿Qué papeles necesito?".',
          'Atención dispersa en múltiples celulares personales sin supervisión institucional ni respaldo de conversaciones.',
          'Expedientes gestionados en carpetas de Google Drive y hojas de cálculo desarticuladas, con riesgo de error humano en términos judiciales.',
          'Dificultad para rastrear acuerdos de pago de honorarios fraccionados, provocando fugas de flujo de caja para la firma.',
          'Demoras de hasta 12 horas en responder a nuevos clientes interesados, perdiendo casos frente a competidores.'
        ]
      },
      after: {
        title: 'Con CODEVS: LegalTech, Agentes de IA & Automatización Total',
        points: [
          'Agente de IA Legal en WhatsApp Cloud API que atiende 24/7 en < 3 segundos, clasifica el tipo de reporte negativo y agenda consultas.',
          'Bandeja multi-agente centralizada donde los abogados toman el control del chat con un clic cuando el cliente ya está calificado.',
          'CRM Jurídico integral con scoring predictivo de éxito procesal (96%) y alertas de términos de contestación de entidades y juzgados.',
          'Generador asistido por IA de minutas legales (Derechos de Petición y Tutelas) a partir de los datos y pruebas cargadas por el cliente.',
          'ERP financiero con recordatorios automáticos de cobro de cuotas por WhatsApp y pasarela de pago para liquidación de honorarios.'
        ]
      }
    },
    codevsCapabilities: {
      title: '¿Qué Hacemos desde CODEVS?',
      subtitle: 'Ingeniería de Software & Soluciones de Inteligencia Artificial de Clase Mundial',
      intro: 'En CODEVS diseñamos, construimos y escalamos tecnología propietaria que reemplaza procesos manuales lentos por infraestructuras digitales automáticas. Desarrollamos software a la medida para empresas de Colombia, Latinoamérica y Estados Unidos.',
      pillars: [
        {
          title: 'Software a la Medida (ERP & CRM)',
          desc: 'Diseñamos sistemas de gestión operativa, financiera y comercial perfectamente adaptados a la lógica de tu empresa, sin costos de licencias por usuario ni limitaciones.',
          icon: 'bi bi-diagram-3-fill'
        },
        {
          title: 'Agentes de IA & Automatizaciones',
          desc: 'Entrenamos modelos LLM con las políticas, bases de conocimiento y documentos de tu compañía para responder clientes, redactar minutas y analizar datos 24/7.',
          icon: 'bi bi-cpu-fill'
        },
        {
          title: 'Omnicanalidad con Meta Cloud API',
          desc: 'Centralizamos WhatsApp Business API verificado, Instagram Direct y chat web en una bandeja multi-agente con telemetría de tiempos de respuesta y cierre.',
          icon: 'bi bi-chat-dots-fill'
        },
        {
          title: 'Soluciones LegalTech & Asesoría',
          desc: 'Especialistas en digitalizar firmas de abogados, notarías y despachos jurídicos con control de términos procesales, expedientes en la nube y cobro de honorarios.',
          icon: 'bi bi-briefcase-fill'
        },
        {
          title: 'Arquitectura Cloud & Microservicios',
          desc: 'Stack de ingeniería de alto rendimiento (Nuxt 3, Spring Boot 3, Python, PostgreSQL, Docker) garantizando sub-segundo de latencia y 99.9% de uptime.',
          icon: 'bi bi-lightning-charge-fill'
        },
        {
          title: 'Diagnóstico & Reingeniería Previa',
          desc: 'Realizamos un estudio exhaustivo de tus procesos internos antes de programar para eliminar desperdicios operativos y garantizar un Retorno de Inversión (ROI) acelerado.',
          icon: 'bi bi-graph-up-arrow'
        }
      ]
    },
    details: [
      { icon: 'bi bi-clock-history', title: '+70% Tiempo Ahorrado en Operaciones', text: 'Automatización de recopilación de documentos, generación de minutas y respuestas iniciales que ahorra más de 25 horas semanales a cada abogado del despacho.' },
      { icon: 'bi bi-chat-dots-fill', title: 'Agente Legal IA en WhatsApp Cloud API', text: 'Asistente inteligente entrenado en la Ley 1266 de 2008 y Ley 2157 de 2021 (Borrón y Cuenta Nueva) que atiende 24/7, evalúa la viabilidad del caso y agenda al especialista.' },
      { icon: 'bi bi-cpu-fill', title: 'CRM Jurídico con Scoring de Casos', text: 'Expediente digital unificado con semaforización de viabilidad procesal (96%), trazabilidad de actuaciones judiciales y alertas automáticas de términos procesales.' },
      { icon: 'bi bi-diagram-3-fill', title: 'ERP de Facturación & Honorarios', text: 'Control de acuerdos de pago a plazos, conciliación de cuotas, recordatorios de cobro automáticos por WhatsApp y liquidación transparente de comisiones por abogado.' },
      { icon: 'bi bi-search', title: 'Diagnóstico & Estudio Operativo Inicial', text: 'Estudio técnico y auditoría profunda de flujos de trabajo legales realizado por CODEVS para detectar cuellos de botella antes de construir el código.' },
      { icon: 'bi bi-file-earmark-text-fill', title: 'Minutas Legales Asistidas por IA', text: 'Generación semiautomatizada de borradores de derechos de petición y acciones de tutela para centrales de riesgo con datos del cliente listos para revisión y firma.' }
    ],
    faqs: [
      {
        q: '¿Quién es Sin Huellas Nuevas Oportunidades y qué servicios jurídicos presta?',
        a: 'Sin Huellas Nuevas Oportunidades es una firma de abogados líder en Colombia especializada en saneamiento de historial crediticio, eliminación de reportes negativos ante centrales de riesgo (TransUnion, Datacrédito), régimen de insolvencia económica para personas naturales y defensa jurídica ante procesos ejecutivos de cobranza bancaria.'
      },
      {
        q: '¿Cómo ayudó CODEVS a la firma Sin Huellas Nuevas Oportunidades a ahorrar más del 70% de tiempo?',
        a: 'CODEVS realizó un estudio profundo de los procesos de la firma e implementó un ecosistema integrado compuesto por: 1) Un Agente de IA para WhatsApp Cloud API que atiende consultas 24/7 y clasifica la viabilidad jurídica en segundos; 2) Un CRM Jurídico que gestiona expedientes y redacta minutas legales asistidas por IA; 3) Un ERP que automatiza el control de honorarios en cuotas y recordatorios de pago. Esto liberó más de 25 horas semanales por abogado.'
      },
      {
        q: '¿Cómo funciona el Agente de IA para WhatsApp desarrollado por CODEVS?',
        a: 'El Agente de IA está integrado con la API oficial de Meta Cloud y conectado a una base de conocimiento jurídica con la normativa colombiana (Ley 1266 de Habeas Data, Ley 2157 Borrón y Cuenta Nueva, Código General del Proceso). Comprende lenguaje natural, responde preguntas frecuentes, recopila información del reporte negativo y solo transfiere la conversación a un abogado cuando el caso está listo para firma de poder o consulta especializada.'
      },
      {
        q: '¿Qué servicios de software e Inteligencia Artificial desarrolla CODEVS para empresas y despachos?',
        a: 'CODEVS desarrolla sistemas ERP y CRM a la medida, agentes conversacionales de Inteligencia Artificial con tecnología RAG (Retrieval-Augmented Generation), automatización de procesos omnicanal (WhatsApp Business API, Instagram, Webhooks), aplicaciones web ultra-rápidas en Nuxt 3, arquitecturas backend en Spring Boot / Python, y reingeniería operacional previa.'
      },
      {
        q: '¿Cómo puedo cotizar un desarrollo de ERP, CRM o Agente de IA con CODEVS para mi empresa?',
        a: 'Puedes solicitar una consulta y propuesta técnica inmediata en codevs.dev/#contact o escribiendo a nuestro WhatsApp oficial (+57) 313 806 6800. Nuestro equipo de arquitectos de software analiza tu modelo de negocio y entrega una propuesta detallada en menos de 24 horas.'
      }
    ],
    technologies: ['Nuxt 3', 'Spring Boot 3', 'PostgreSQL', 'Meta Cloud API', 'OpenAI & Claude LLMs', 'Redis', 'Docker', 'Python FastAPI', 'n8n Webhooks', 'TailwindCSS', 'LegalTech Engine']
  }
};

const project = projectsData[slug];

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Proyecto no encontrado' });
}

useHead({
  title: `${project.title} | Casos de Éxito CODEVS`,
  meta: [
    { name: 'description', content: project.fullDescription || project.description },
    { name: 'keywords', content: `${project.title.toLowerCase()}, sin huellas nuevas oportunidades firma de abogados, erp firma abogados, crm juridico con ia, omnicanalidad whatsapp abogados, software legal colombia, legaltech colombia, desarrollo de software codevs` },
    { property: 'og:title', content: `${project.title} | CODEVS` },
    { property: 'og:description', content: project.description },
    { property: 'og:image', content: `https://www.codevs.dev${project.image}` },
    { property: 'og:url', content: `https://www.codevs.dev/proyectos/${slug}` },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${project.title} | CODEVS` },
    { name: 'twitter:description', content: project.description },
    { name: 'twitter:image', content: `https://www.codevs.dev${project.image}` }
  ],
  link: [
    { rel: 'canonical', href: `https://www.codevs.dev/proyectos/${slug}` }
  ]
});

// Rich Multi-Schema JSON-LD for Google & Search AI LLMs (Perplexity, ChatGPT Search, Gemini)
useJsonld(() => {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      'name': project.title,
      'description': project.fullDescription || project.description,
      'image': `https://www.codevs.dev${project.image}`,
      'author': {
        '@type': 'Organization',
        'name': 'CODEVS',
        'url': 'https://www.codevs.dev'
      },
      'about': {
        '@type': 'LegalService',
        'name': project.clientName || 'Sin Huellas Nuevas Oportunidades',
        'description': 'Firma de abogados especializada en saneamiento crediticio, eliminación de reportes negativos ante centrales de riesgo e insolvencia.'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'ERP, CRM & Omnicanalidad IA CODEVS',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Cloud, Web, Mobile',
      'author': {
        '@type': 'Organization',
        'name': 'CODEVS',
        'url': 'https://www.codevs.dev'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    }
  ];

  if (project.faqs && project.faqs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': project.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    });
  }

  return schemas;
});
</script>

<style scoped>
section {
  background-color: #000000 !important;
}

.animate-fadeIn {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>