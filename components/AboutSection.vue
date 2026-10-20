<template>
  <section id="about" ref="aboutSection" class="relative bg-white text-[#141416] py-24 lg:py-36 overflow-hidden">
    
    <!-- Reinstate the Interactive Rocket Scroll Animation -->
    <RocketScroll />

    <div class="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">

      <!-- 1. Big Editorial Statement with Red Accents & Hand-drawn Circle -->
      <div class="max-w-5xl mx-auto text-center pb-24 lg:pb-32">
        <p class="text-[28px] sm:text-[44px] lg:text-[56px] font-normal text-[#141416] leading-[1.22] tracking-[-0.03em]">
          Diseñamos y desarrollamos
          <span class="inline-flex items-center align-middle mx-1.5 px-4 py-1 rounded-full bg-[#E7000B] text-white border-2 border-[#141416] text-sm sm:text-lg font-medium -rotate-3 shadow-[2px_2px_0px_#141416]">
            <i class="bi bi-rocket-takeoff mr-1.5"></i> Cohete Digital
          </span>
          <span class="relative inline-block px-3 py-0.5 mx-1">
            <!-- Hand-drawn red oval highlight -->
            <svg class="absolute inset-0 w-full h-full -z-10 scale-105 pointer-events-none" viewBox="0 0 500 110" fill="none" preserveAspectRatio="none">
              <path d="M18 58C22 22 140 8 265 10C395 12 488 28 486 58C484 88 375 102 245 100C110 98 15 84 26 50" stroke="#E7000B" stroke-width="4" stroke-linecap="round" />
            </svg>
            <span class="font-serif-italic text-[#141416]">plataformas centradas en el usuario</span>
          </span>
          que capturan a la
          <span class="inline-flex items-center align-middle mx-1.5 px-3.5 py-1 rounded-full bg-[#FFF1F2] border-2 border-[#E7000B] text-[#E7000B] text-sm sm:text-lg font-semibold rotate-3 shadow-[2px_2px_0px_#141416]">
            ✦ 100%
          </span>
          perfección la esencia y el valor de tu marca.
        </p>
      </div>

      <!-- 2. Two-Column Sticky Layout (Left Sticky Narrative + Right Stacking Cards with Dominant Red) -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        <!-- Left Column (Sticky on Desktop) -->
        <div class="lg:w-7/12 lg:sticky lg:top-28 space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/20 text-xs font-mono uppercase tracking-wider text-[#141416]">
            <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
            Quiénes Somos • Estudio &amp; Academia
          </div>

          <div class="flex items-start gap-4">
            <!-- Decorative Red Sparkle SVG -->
            <svg class="w-12 h-12 sm:w-14 sm:h-14 shrink-0 text-[#141416] mt-1" viewBox="0 0 64 64" fill="none">
              <path d="M32 4C34 20 44 30 60 32C44 34 34 44 32 60C30 44 20 34 4 32C20 30 30 20 32 4Z" fill="#E7000B" stroke="#141416" stroke-width="3" stroke-linejoin="round"/>
            </svg>

            <h2 class="text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#141416] tracking-[-0.035em] leading-[1.12]">
              Enamora a tus
              <span class="relative inline-block px-2">
                <svg class="absolute inset-0 w-full h-full -z-10 scale-110" viewBox="0 0 220 80" fill="none" preserveAspectRatio="none">
                  <path d="M12 44C15 16 70 8 118 10C172 12 210 26 208 46C206 66 155 74 102 72C48 70 10 60 18 38" stroke="#E7000B" stroke-width="4" stroke-linecap="round"/>
                </svg>
                <span class="font-serif-italic">clientes</span>
              </span>
              desde el primer click
            </h2>
          </div>

          <div class="space-y-4 text-[#141416]/80 font-light text-base sm:text-[17px] leading-relaxed max-w-xl">
            <p>
              En <strong class="font-semibold text-[#141416]">CODEVS</strong> nos apasiona la tecnología y el diseño con criterio. Desarrollamos soluciones digitales de alto nivel para empresas decididas a destacar, sin plantillas genéricas ni diseños prefabricados.
            </p>
            <p>
              Nuestro equipo combina dirección de arte <strong class="font-medium text-[#E7000B]">UX/UI de vanguardia</strong> e ingeniería de software ágil para construir portales ultrarrápidos optimizados para Google (SEO) desde San Juan de Pasto y Nariño para todo el mundo.
            </p>
          </div>

          <!-- Studio Direct Metrics with Red Highlights -->
          <div class="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl pt-2">
            <div class="p-4 rounded-[20px] bg-[#FFF1F2] border border-[#E7000B]/30">
              <div class="text-2xl sm:text-3xl font-semibold text-[#E7000B]">100%</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#141416]/70 mt-1">Código Limpio</div>
            </div>
            <div class="p-4 rounded-[20px] bg-[#FAFAFC] border border-[#141416]/20">
              <div class="text-2xl sm:text-3xl font-serif-italic text-[#E7000B]">SEO #1</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#141416]/70 mt-1">Posicionamiento</div>
            </div>
            <div class="p-4 rounded-[20px] bg-[#FAFAFC] border border-[#141416]/20">
              <div class="text-2xl sm:text-3xl font-semibold text-[#141416]">UX/UI</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-[#141416]/70 mt-1">De Academia</div>
            </div>
          </div>

          <!-- Prompt + Arrow pointing to Stacking Cards -->
          <div class="flex items-center gap-4 pt-4">
            <div class="w-12 h-12 rounded-full bg-[#E7000B] text-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#141416]">
              <i class="bi bi-arrow-down-right text-lg"></i>
            </div>
            <p class="text-sm sm:text-base font-medium text-[#64646D] max-w-xs">
              ¿Por qué tu empresa debería confiar en el equipo de <span class="text-[#E7000B] font-semibold underline decoration-[#E7000B] decoration-2">CODEVS</span>?
            </p>
          </div>
        </div>

        <!-- Right Column: 4 Stacking Cards (#141416 & Vibrant Red) -->
        <div class="lg:w-5/12 w-full space-y-8">

          <!-- Card 1: Visión en CODEVS Red (#E7000B) -->
          <div class="sticky top-24 bg-[#E7000B] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-[6px_6px_0px_#141416] border-2 border-[#141416]">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-white/90 font-bold">01 / VISIÓN &amp; ESTÉTICA</span>
                <span class="px-3 py-1 rounded-full bg-white text-[#E7000B] text-xs font-bold">Futuro</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-white leading-[1.15] tracking-tight">
                Diseño encantador &amp; Visión
              </h3>
              <p class="text-white/90 text-[15px] font-light leading-relaxed">
                Creamos sitios y plataformas con personalidad propia, diseñados a tu medida. Nada de plantillas ni clichés: nos posicionamos como el referente tecnológico y de diseño digital en el sur de Colombia.
              </p>
            </div>

            <!-- Custom Rocket Studio Art -->
            <div class="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-white text-[#E7000B] flex items-center justify-center text-xl font-bold">
                  🚀
                </div>
                <div>
                  <div class="text-xs font-semibold text-white">Autenticidad &amp; Buen Gusto</div>
                  <div class="text-[11px] text-white/80">Dirección de arte a medida</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-white font-bold">01</span>
            </div>
          </div>

          <!-- Card 2: Trabajo colaborativo & Misión (#141416 with Red Accent) -->
          <div class="sticky top-28 bg-[#141416] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-[6px_6px_0px_#E7000B] border-2 border-[#141416]">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#FF4D55] font-semibold">02 / MISIÓN &amp; EQUIPO</span>
                <span class="px-3 py-1 rounded-full bg-[#E7000B]/20 text-[#FF4D55] text-xs font-medium">Propósito</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-[#FF4D55] leading-[1.15] tracking-tight">
                Trabajo colaborativo &amp; Misión
              </h3>
              <p class="text-[#E0E0E0] text-[15px] font-light leading-relaxed">
                Desde su concepción hasta su lanzamiento, trabajamos estrechamente contigo para empoderar a las empresas de Pasto, Nariño y Colombia mediante software robusto y páginas web que multiplican su facturación.
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#E7000B] text-white flex items-center justify-center text-xl">
                  <i class="bi bi-people-fill"></i>
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Co-creación Ágil</div>
                  <div class="text-[11px] text-white/60">Acompañamiento paso a paso</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#FF4D55]">02</span>
            </div>
          </div>

          <!-- Card 3: Lealtad a tus usuarios (UX/UI) -->
          <div class="sticky top-32 bg-[#141416] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-[6px_6px_0px_#141416] border-2 border-white/10">
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
                <div class="w-12 h-12 rounded-2xl bg-[#DBFF9C] text-[#141416] flex items-center justify-center text-xl">
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

          <!-- Card 4: Rendimiento superior & SEO #1 -->
          <div class="sticky top-36 bg-[#141416] text-white rounded-[24px] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between shadow-[6px_6px_0px_#E7000B] border-2 border-[#E7000B]">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-widest text-[#E7000B] font-bold">04 / GOOGLE LOVE &amp; SPEED</span>
                <span class="px-3 py-1 rounded-full bg-[#E7000B] text-white text-xs font-bold">100/100</span>
              </div>
              <h3 class="text-3xl sm:text-[36px] font-medium text-white leading-[1.15] tracking-tight">
                Rendimiento superior &amp; SEO #1
              </h3>
              <p class="text-[#D5D5D5] text-[15px] font-light leading-relaxed">
                Construimos sitios ultra-eficientes. Impulsamos sus Core Web Vitals y optimizamos su posicionamiento SEO técnico y local para generar mayores oportunidades reales de conversión.
              </p>
            </div>

            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[#E7000B] text-white flex items-center justify-center text-xl">
                  <i class="bi bi-lightning-charge-fill"></i>
                </div>
                <div>
                  <div class="text-xs font-medium text-white">Posicionamiento #1 en Google</div>
                  <div class="text-[11px] text-white/60">SSR, Schema.org &amp; Velocidad</div>
                </div>
              </div>
              <span class="font-serif-italic text-2xl text-[#E7000B] font-bold">04</span>
            </div>
          </div>

        </div>
      </div>

      <!-- 3. Editorial Philosophy Quote Banner with Red Theme -->
      <div class="mt-24 sm:mt-32">
        <div class="relative bg-[#FAFAFC] border-2 border-[#141416] p-8 sm:p-14 rounded-[28px] shadow-[6px_6px_0px_#E7000B] text-center overflow-hidden">
          <span class="inline-block px-4 py-1 rounded-full bg-[#E7000B] text-white text-xs font-mono uppercase tracking-widest mb-6 font-semibold">
            Manifiesto CODEVS
          </span>

          <p class="text-xl sm:text-3xl lg:text-[34px] text-[#141416] font-normal max-w-4xl mx-auto leading-[1.35] tracking-tight">
            “El éxito digital no es un accidente: es el resultado de unir
            <span class="font-serif-italic bg-[#FFF1F2] text-[#E7000B] px-2 rounded">código limpio</span>,
            <span class="font-serif-italic bg-[#E7000B] text-white px-2 rounded">diseño centrado en el usuario</span>
            y una
            <span class="font-serif-italic bg-[#FFF1F2] text-[#E7000B] px-2 rounded">estrategia SEO ganadora</span>.”
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import RocketScroll from '~/components/ui/RocketScroll.vue';

const aboutSection = ref(null);
</script>
