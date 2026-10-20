<template>
  <section id="about" ref="aboutSection" class="relative bg-white text-[#1B1B1F] py-24 lg:py-36">
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8">

      <!-- 1. Monos Expertos Big Editorial Statement with Inline Pills & Hand-drawn Circle -->
      <div class="max-w-5xl mx-auto text-center pb-24 lg:pb-32 gsap-fade-up">
        <p class="text-[28px] sm:text-[44px] lg:text-[56px] font-normal text-[#1B1B1F] leading-[1.22] tracking-[-0.03em]">
          Diseñamos y desarrollamos
          <span class="inline-flex items-center align-middle mx-1.5 px-4 py-1 rounded-full bg-[#DBFF9C] border-2 border-[#1B1B1F] text-sm sm:text-lg font-medium -rotate-3 shadow-[2px_2px_0px_#1B1B1F]">
            <i class="bi bi-vector-pen mr-1.5"></i> UX/UI
          </span>
          <span class="relative inline-block px-3 py-0.5 mx-1">
            <!-- Hand-drawn oval highlight (#A5A1FF) -->
            <svg class="absolute inset-0 w-full h-full -z-10 scale-105 pointer-events-none" viewBox="0 0 500 110" fill="none" preserveAspectRatio="none">
              <path d="M18 58C22 22 140 8 265 10C395 12 488 28 486 58C484 88 375 102 245 100C110 98 15 84 26 50" stroke="#A5A1FF" stroke-width="5" stroke-linecap="round" />
            </svg>
            <span class="font-serif-italic text-[#1B1B1F]">plataformas centradas en el usuario</span>
          </span>
          que capturan a la
          <span class="inline-flex items-center align-middle mx-1.5 px-3.5 py-1 rounded-full bg-[#FFF480] border-2 border-[#1B1B1F] text-sm sm:text-lg font-medium rotate-3 shadow-[2px_2px_0px_#1B1B1F]">
            ✦ 100%
          </span>
          perfección la esencia y el valor de tu marca.
        </p>
      </div>

      <!-- 2. Two-Column Sticky Layout (Left Sticky Narrative + Right Stacking Dark Cards) -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        <!-- Left Column (Sticky on Desktop like monosexpertos.com) -->
        <div class="lg:w-7/12 lg:sticky lg:top-28 space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/20 text-xs font-mono uppercase tracking-wider text-[#1B1B1F]">
            <span class="w-2 h-2 rounded-full bg-[#FFACAA] border border-[#1B1B1F]"></span>
            Quiénes Somos • Estudio &amp; Academia
          </div>

          <div class="flex items-start gap-4">
            <!-- Decorative Sparkle SVG -->
            <svg class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 text-[#1B1B1F] mt-1" viewBox="0 0 64 64" fill="none">
              <path d="M32 4C34 20 44 30 60 32C44 34 34 44 32 60C30 44 20 34 4 32C20 30 30 20 32 4Z" fill="#FFF480" stroke="#1B1B1F" stroke-width="3" stroke-linejoin="round"/>
            </svg>

            <h2 class="text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#1B1B1F] tracking-[-0.035em] leading-[1.12]">
              Enamora a tus
              <span class="relative inline-block px-2">
                <svg class="absolute inset-0 w-full h-full -z-10 scale-110" viewBox="0 0 220 80" fill="none" preserveAspectRatio="none">
                  <path d="M12 44C15 16 70 8 118 10C172 12 210 26 208 46C206 66 155 74 102 72C48 70 10 60 18 38" stroke="#A5A1FF" stroke-width="5" stroke-linecap="round"/>
                </svg>
                <span class="font-serif-italic">clientes</span>
              </span>
              desde el primer click
            </h2>
          </div>

          <div class="space-y-4 text-[#1B1B1F]/80 font-light text-base sm:text-[17px] leading-relaxed max-w-xl">
            <p>
              En <strong class="font-semibold text-[#1B1B1F]">CODEVS</strong> nos apasiona la tecnología y el diseño con criterio. Desarrollamos soluciones digitales de alto nivel para empresas decididas a destacar, sin plantillas genéricas ni diseños prefabricados.
            </p>
            <p>
              Nuestro equipo combina dirección de arte <strong class="font-medium text-[#1B1B1F]">UX/UI de vanguardia</strong> e ingeniería de software ágil para construir portales ultrarrápidos optimizados para Google (SEO) desde San Juan de Pasto y Nariño para todo el mundo.
            </p>
          </div>

          <!-- Studio Direct Metrics -->
          <div class="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl pt-2">
            <div class="p-4 rounded-[20px] bg-[#FFF480]/50 border border-[#1B1B1F]/20">
              <div class="text-2xl sm:text-3xl font-semibold text-[#1B1B1F]">100%</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#1B1B1F]/70 mt-1">Código Limpio</div>
            </div>
            <div class="p-4 rounded-[20px] bg-[#DBFF9C]/60 border border-[#1B1B1F]/20">
              <div class="text-2xl sm:text-3xl font-serif-italic text-[#1B1B1F]">SEO #1</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#1B1B1F]/70 mt-1">Posicionamiento</div>
            </div>
            <div class="p-4 rounded-[20px] bg-[#EFEEFF] border border-[#1B1B1F]/20">
              <div class="text-2xl sm:text-3xl font-semibold text-[#1B1B1F]">UX/UI</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#1B1B1F]/70 mt-1">De Academia</div>
            </div>
          </div>

          <!-- Prompt + Hand-drawn Arrow pointing to Stacking Cards -->
          <div class="flex items-center gap-4 pt-4">
            <div class="w-12 h-12 rounded-full bg-[#1B1B1F] text-[#FFF480] flex items-center justify-center shrink-0">
              <i class="bi bi-arrow-down-right text-lg"></i>
            </div>
            <p class="text-sm sm:text-base font-medium text-[#6A7077] max-w-xs">
              ¿Por qué tu empresa debería confiar en el equipo de <span class="text-[#1B1B1F] underline decoration-[#FFF480] decoration-2">CODEVS</span>?
            </p>
          </div>
        </div>

        <!-- Right Column: 4 Sticky Stacking Cards (#1B1B1F like Monos Expertos) -->
        <div class="lg:w-5/12 w-full space-y-8">

          <!-- Card 1: Diseño encantador & Visión (#FFACAA) -->
          <div class="sticky top-24 bg-[#1B1B1F] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-2xl border border-white/10">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#FFACAA]">01 / VISIÓN &amp; ESTÉTICA</span>
                <span class="px-3 py-1 rounded-full bg-[#FFACAA]/15 text-[#FFACAA] text-xs font-medium">Futuro</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-[#FFACAA] leading-[1.15] tracking-tight">
                Diseño encantador &amp; Visión
              </h3>
              <p class="text-[#EBEBEB] text-[15px] font-light leading-relaxed">
                Creamos sitios y plataformas con personalidad propia, diseñados a tu medida. Nada de plantillas ni clichés: nos posicionamos como el referente tecnológico y de diseño digital en el sur de Colombia.
              </p>
            </div>

            <!-- Custom Studio Illustration -->
            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#FFACAA] text-[#1B1B1F] flex items-center justify-center text-2xl font-bold">
                  ✦
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Autenticidad &amp; Buen Gusto</div>
                  <div class="text-[11px] text-white/60">Dirección de arte a medida</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#FFACAA]">01</span>
            </div>
          </div>

          <!-- Card 2: Trabajo colaborativo & Misión (#FFF480) -->
          <div class="sticky top-28 bg-[#1B1B1F] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-2xl border border-white/10">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#FFF480]">02 / MISIÓN &amp; EQUIPO</span>
                <span class="px-3 py-1 rounded-full bg-[#FFF480]/15 text-[#FFF480] text-xs font-medium">Propósito</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-[#FFF480] leading-[1.15] tracking-tight">
                Trabajo colaborativo &amp; Misión
              </h3>
              <p class="text-[#E0E0E0] text-[15px] font-light leading-relaxed">
                Desde su concepción hasta su lanzamiento, trabajamos estrechamente contigo para empoderar a las empresas de Pasto, Nariño y Colombia mediante software robusto y páginas web que multiplican su facturación.
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#FFF480] text-[#1B1B1F] flex items-center justify-center text-xl">
                  <i class="bi bi-people-fill"></i>
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Co-creación Ágil</div>
                  <div class="text-[11px] text-white/60">Acompañamiento paso a paso</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#FFF480]">02</span>
            </div>
          </div>

          <!-- Card 3: Lealtad a tus usuarios (#DBFF9C) -->
          <div class="sticky top-32 bg-[#1B1B1F] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-2xl border border-white/10">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#DBFF9C]">03 / EXPERIENCIA UX/UI</span>
                <span class="px-3 py-1 rounded-full bg-[#DBFF9C]/15 text-[#DBFF9C] text-xs font-medium">Human-First</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-[#DBFF9C] leading-[1.15] tracking-tight">
                Lealtad a tus usuarios
              </h3>
              <p class="text-[#E2E2E2] text-[15px] font-light leading-relaxed">
                Diseñamos con la mente en las personas. Nuestro enfoque de academia en UI/UX asegura arquitecturas de información claras, micro-interacciones memorables y recorridos que convierten visitantes en clientes.
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#DBFF9C] text-[#1B1B1F] flex items-center justify-center text-xl">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Interfaces Intuitivas</div>
                  <div class="text-[11px] text-white/60">Prototipado en Figma de alta fidelidad</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#DBFF9C]">03</span>
            </div>
          </div>

          <!-- Card 4: Rendimiento superior (#A5A1FF) -->
          <div class="sticky top-36 bg-[#1B1B1F] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-2xl border border-white/10">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#A5A1FF]">04 / GOOGLE LOVE &amp; SPEED</span>
                <span class="px-3 py-1 rounded-full bg-[#A5A1FF]/15 text-[#A5A1FF] text-xs font-medium">100/100</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-[#A5A1FF] leading-[1.15] tracking-tight">
                Rendimiento superior
              </h3>
              <p class="text-[#D5D5D5] text-[15px] font-light leading-relaxed">
                Construimos sitios ultra-eficientes. Impulsamos sus Core Web Vitals y optimizamos su posicionamiento SEO técnico y local para generar mayores oportunidades reales de conversión.
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#A5A1FF] text-[#1B1B1F] flex items-center justify-center text-xl">
                  <i class="bi bi-lightning-charge-fill"></i>
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Posicionamiento #1 en Google</div>
                  <div class="text-[11px] text-white/60">SSR, Schema.org &amp; Velocidad</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#A5A1FF]">04</span>
            </div>
          </div>

        </div>
      </div>

      <!-- 3. Editorial Philosophy Quote Banner -->
      <div class="mt-24 sm:mt-32">
        <div class="relative bg-[#F9FAFA] border-2 border-[#1B1B1F] p-8 sm:p-14 rounded-[28px] shadow-[6px_6px_0px_#1B1B1F] text-center overflow-hidden">
          <span class="inline-block px-4 py-1 rounded-full bg-[#FFF480] border border-[#1B1B1F] text-xs font-mono uppercase tracking-widest text-[#1B1B1F] mb-6">
            Manifiesto CODEVS
          </span>

          <p class="text-xl sm:text-3xl lg:text-[34px] text-[#1B1B1F] font-normal max-w-4xl mx-auto leading-[1.35] tracking-tight">
            “El éxito digital no es un accidente: es el resultado de unir
            <span class="font-serif-italic bg-[#DBFF9C] px-2 rounded">código limpio</span>,
            <span class="font-serif-italic bg-[#FFF480] px-2 rounded">diseño centrado en el usuario</span>
            y una
            <span class="font-serif-italic bg-[#EFEEFF] px-2 rounded">estrategia SEO ganadora</span>.”
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const aboutSection = ref(null);
</script>
