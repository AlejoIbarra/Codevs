<template>
  <section id="hero" class="relative bg-white text-[#1B1B1F] overflow-hidden pt-10 sm:pt-14">
    <!-- Subtle Editorial Grid Lines (Design Academy aesthetic) -->
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">

      <!-- Top Editorial Pre-Headline (Monos Expertos signature style) -->
      <div class="text-center max-w-2xl mx-auto pt-4 sm:pt-8 trigger-anim">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/15 text-[12px] font-medium tracking-wide text-[#1B1B1F] mb-5">
          <span class="w-2 h-2 rounded-full bg-[#DBFF9C] border border-[#1B1B1F]"></span>
          <span>Design Studio &amp; Software Academy — Pasto, Colombia</span>
        </div>

        <h1 class="text-[26px] sm:text-[34px] lg:text-[38px] font-normal text-[#1B1B1F] leading-[1.28] tracking-[-0.02em]">
          Una marca
          <span class="relative inline-block mx-1 px-2">
            <!-- Hand-drawn Highlighter Marker SVG (#FFF480) -->
            <svg class="absolute inset-0 w-full h-full -z-10 scale-110 translate-y-1" viewBox="0 0 220 60" fill="none" preserveAspectRatio="none">
              <path d="M6 34C48 22 165 16 214 28C185 44 62 50 10 42Z" fill="#FFF480" stroke="#FFF480" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="font-serif-italic text-[#1B1B1F] font-normal">increíble</span>
          </span>
          <br class="hidden sm:inline" />
          necesita <span class="font-medium">desarrollo web</span> &amp; <span class="font-serif-italic underline decoration-[#A5A1FF] decoration-2 underline-offset-4">software</span> increíble
        </h1>
      </div>

      <!-- Monumental Studio Wordmark + Interactive Mouse-Tracking Centerpiece -->
      <div
        ref="heroStage"
        @mousemove="handleStageMouseMove"
        @mouseleave="resetStageMouse"
        class="relative mt-2 sm:mt-4 pb-8 sm:pb-12 flex flex-col items-center justify-center select-none"
      >
        <!-- Giant "codevs" Wordmark (30vw Monos style) -->
        <div
          aria-hidden="true"
          class="text-[23vw] sm:text-[22vw] lg:text-[20.5vw] font-semibold tracking-[-0.065em] leading-[0.76] text-[#1B1B1F] lowercase text-center w-full trigger-anim pointer-events-none"
        >
          codevs
        </div>

        <!-- Floating Designer Stickers (Parallax Layer 1) -->
        <div
          ref="stickerLeft"
          class="hidden md:flex items-center gap-2 absolute top-[12%] left-[6%] lg:left-[10%] bg-[#DBFF9C] text-[#1B1B1F] border-2 border-[#1B1B1F] px-4 py-2 rounded-full text-xs font-semibold shadow-[3px_3px_0px_#1B1B1F] -rotate-6 z-20 pointer-events-none"
        >
          <i class="bi bi-bezier2"></i>
          <span>UI / UX Obsessed</span>
        </div>

        <div
          ref="stickerRight"
          class="hidden md:flex items-center gap-2 absolute top-[18%] right-[6%] lg:right-[9%] bg-[#A5A1FF] text-[#1B1B1F] border-2 border-[#1B1B1F] px-4 py-2 rounded-full text-xs font-semibold shadow-[3px_3px_0px_#1B1B1F] rotate-6 z-20 pointer-events-none"
        >
          <i class="bi bi-stars"></i>
          <span>#1 en Google SEO</span>
        </div>

        <!-- Overlapping Interactive Studio Centerpiece + Eyes (Monos Expertos signature) -->
        <div class="relative -mt-[8vw] sm:-mt-[7vw] z-20 flex flex-col items-center">
          <!-- Interactive Cursor-Following Studio Eyes Card -->
          <div
            ref="eyesBadge"
            class="relative z-30 -mb-6 sm:-mb-7 bg-[#FFF480] border-2 border-[#1B1B1F] rounded-full px-6 py-3 shadow-[4px_4px_0px_#1B1B1F] flex items-center gap-4"
          >
            <!-- Left Eye -->
            <div class="w-11 h-14 sm:w-13 sm:h-16 bg-white border-2 border-[#1B1B1F] rounded-full flex items-center justify-center overflow-hidden relative">
              <div
                class="w-5 h-6 bg-[#1B1B1F] rounded-full relative transition-transform duration-75 ease-out"
                :style="{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }"
              >
                <span class="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></span>
              </div>
            </div>
            <!-- Right Eye -->
            <div class="w-11 h-14 sm:w-13 sm:h-16 bg-white border-2 border-[#1B1B1F] rounded-full flex items-center justify-center overflow-hidden relative">
              <div
                class="w-5 h-6 bg-[#1B1B1F] rounded-full relative transition-transform duration-75 ease-out"
                :style="{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }"
              >
                <span class="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></span>
              </div>
            </div>
            <div class="hidden sm:block pl-1 pr-2 text-left">
              <div class="text-[10px] font-mono uppercase tracking-wider text-[#1B1B1F]/70 leading-none">Creative Lab</div>
              <div class="text-xs font-bold text-[#1B1B1F] leading-tight mt-0.5">Diseño + Código</div>
            </div>
          </div>

          <!-- Studio Browser / Artboard Showcase Frame -->
          <div
            ref="centerCard"
            class="w-[92vw] sm:w-[540px] lg:w-[640px] bg-[#1B1B1F] text-white border-2 border-[#1B1B1F] rounded-[24px] p-4 sm:p-5 shadow-[8px_8px_0px_#A5A1FF] transition-transform duration-200"
          >
            <!-- Artboard Top Bar -->
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[#FFACAA] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#FFF480] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#DBFF9C] inline-block"></span>
              </div>
              <div class="px-3 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-white/80">
                codevs.studio / diseño-y-software.fig
              </div>
              <span class="text-[11px] font-mono text-[#FFF480]">100% Custom</span>
            </div>

            <!-- Artboard Inner Content -->
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#26262B] rounded-[16px] p-4 sm:p-5">
              <div class="sm:col-span-7 space-y-2.5 text-left">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#DBFF9C] text-[#1B1B1F] text-[11px] font-semibold">
                  Sin plantillas ni clichés
                </span>
                <h2 class="text-xl sm:text-2xl font-medium text-white leading-tight tracking-tight">
                  Arquitectura digital con alma de <span class="font-serif-italic text-[#FFF480]">estudio de diseño</span>.
                </h2>
                <p class="text-xs text-white/75 leading-relaxed font-light">
                  Combinamos dirección de arte UX/UI, ingeniería de software a medida y SEO técnico para posicionar tu marca en el #1 de Google.
                </p>
              </div>
              <div class="sm:col-span-5">
                <div class="relative rounded-xl overflow-hidden border border-white/15 aspect-[4/3] bg-[#1B1B1F]">
                  <img
                    src="/assets/img/projects/moments.jpg"
                    alt="Showcase de Diseño y Desarrollo Web CODEVS"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute bottom-2 right-2 bg-[#FFF480] text-[#1B1B1F] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#1B1B1F]">
                    60 FPS • SSR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Editorial Value Proposition & Actions Row (Maintaining CODEVS SEO structure) -->
      <div class="max-w-5xl mx-auto pt-4 pb-16 sm:pb-20 trigger-anim">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#1B1B1F]/15 pt-10">
          <div class="lg:col-span-7 text-left space-y-4">
            <p class="text-base sm:text-[18px] text-[#1B1B1F]/85 font-light leading-relaxed">
              Somos <strong class="font-semibold text-[#1B1B1F]">CODEVS</strong>, estudio creativo y academia de ingeniería especializada en
              <strong class="font-medium text-[#1B1B1F] bg-[#FFF480]/60 px-1">desarrollo de páginas web</strong>, diseño de experiencias UX/UI y software a la medida en San Juan de Pasto y Colombia. Creamos productos digitales con personalidad propia listos para dominar el
              <strong class="font-medium text-[#1B1B1F] underline decoration-[#A5A1FF] decoration-2">lugar #1 de Google</strong>.
            </p>

            <!-- 3 Studio Badges -->
            <div class="flex flex-wrap gap-2.5 pt-2">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/15 text-xs font-medium text-[#1B1B1F]">
                <span class="w-2 h-2 rounded-full bg-[#FFF480] border border-[#1B1B1F]"></span>
                Posicionamiento #1 en Google
              </div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/15 text-xs font-medium text-[#1B1B1F]">
                <span class="w-2 h-2 rounded-full bg-[#DBFF9C] border border-[#1B1B1F]"></span>
                Ingeniería de Software a Medida
              </div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/15 text-xs font-medium text-[#1B1B1F]">
                <span class="w-2 h-2 rounded-full bg-[#FFACAA] border border-[#1B1B1F]"></span>
                Dirección de Arte UX/UI
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3">
            <a href="#contact">
              <PrimaryButton text="Iniciar Mi Proyecto" />
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#1B1B1F] text-[#1B1B1F] hover:bg-[#1B1B1F] hover:text-white transition-all duration-300 font-medium text-[14px]"
            >
              Conocer Servicios
            </a>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#EFEEFF] hover:bg-[#A5A1FF] text-[#1B1B1F] border border-[#1B1B1F]/20 transition-all duration-300 font-medium text-[14px] gap-2"
            >
              <i class="bi bi-journal-richtext"></i>
              <span>Blog</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Monos Expertos Signature Sliding Yellow Ticker Strip -->
    <div class="w-full bg-[#FFF480] border-y-2 border-[#1B1B1F] py-5 overflow-hidden select-none">
      <div class="animate-monos-marquee flex items-center gap-10">
        <div v-for="i in 8" :key="i" class="flex items-center gap-10 shrink-0">
          <span class="text-lg sm:text-xl font-normal text-[#1B1B1F] tracking-tight flex items-center gap-3">
            Tu sitio web puede verse <span class="font-serif-italic font-normal underline decoration-[#1B1B1F]">más pro que nunca</span>
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1B1B1F] text-[#FFF480] text-xs">✦</span>
          </span>
          <span class="text-lg sm:text-xl font-normal text-[#1B1B1F] tracking-tight flex items-center gap-3">
            Diseño centrado en el usuario <span class="font-serif-italic">sin plantillas</span>
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#A5A1FF] text-[#1B1B1F] border border-[#1B1B1F] text-xs">★</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Monos Expertos Signature Dark Bento Showcase (#1E1E1E) -->
    <div ref="bentoShowcase" class="bg-[#1E1E1E] py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          <!-- Column 1 -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6 bento-col-up">
            <div class="rounded-[24px] bg-[#DBFF9C] p-5 sm:p-6 flex flex-col justify-between min-h-[290px] group overflow-hidden relative">
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#1B1B1F] text-[#DBFF9C]">UI / Design System</span>
                <span class="text-xs font-mono text-[#1B1B1F]/70">01</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-[#1B1B1F]/15 shadow-lg h-44">
                <img src="/img/UI/figma.png" alt="Sistema de Diseño en Figma CODEVS" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-4 flex items-center justify-between text-[#1B1B1F]">
                <span class="font-medium text-sm">Arquitectura de Interfaces en Figma</span>
                <i class="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#2E2D3D] text-white p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#A5A1FF] text-[#1B1B1F] font-semibold">Mobile &amp; TV</span>
                <span class="text-xs text-white/50 font-mono">60 FPS</span>
              </div>
              <div class="my-4 rounded-[14px] overflow-hidden h-36 border border-white/10">
                <img src="/img/UI/pantalla-principal.png" alt="IPTV Max UI" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p class="text-sm font-light text-white/85">Experiencias interactivas fluidas para web, móvil y Smart TV.</p>
            </div>
          </div>

          <!-- Column 2 (Center Feature) -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6 bento-col-down">
            <div class="rounded-[24px] bg-[#FFFDE5] p-5 sm:p-6 flex flex-col justify-between min-h-[340px] group overflow-hidden">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF480] border border-[#1B1B1F] text-[#1B1B1F] font-medium">Caso de Estudio</span>
                <span class="text-xs font-serif-italic text-[#1B1B1F]">Alacranes AFC</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-[#1B1B1F]/15 h-56">
                <img src="/assets/img/projects/alacranes.jpg" alt="Alacranes AFC Web" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-medium text-[#1B1B1F]">Branding Digital &amp; Plataforma Web</h3>
                <p class="text-xs text-[#6A7077] mt-0.5">Identidad visual deportiva, Bento Gallery &amp; Astro 100/100.</p>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#FFC6C5] p-6 flex flex-col justify-between min-h-[190px] text-[#1B1B1F]">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full border border-[#1B1B1F]/20">Identidad Visual</span>
                <span class="text-2xl">🎨</span>
              </div>
              <div class="mt-4">
                <div class="text-2xl sm:text-3xl font-serif-italic leading-tight">Diseño que no parece hecho por un robot.</div>
                <p class="text-xs text-[#1B1B1F]/80 mt-2">Criterio estético, tipografía editorial y micro-interacciones pensadas por humanos.</p>
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6 bento-col-up">
            <div class="rounded-[24px] bg-[#CCC9FF] p-5 sm:p-6 flex flex-col justify-between min-h-[260px] group overflow-hidden text-[#1B1B1F]">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white border border-[#1B1B1F] text-[#1B1B1F]">Marketplace &amp; SSR</span>
                <span class="text-xs font-mono">Spring + Nuxt</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-[#1B1B1F]/15 h-40">
                <img src="/assets/img/projects/moments.jpg" alt="Moments Gallery" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-sm font-medium">Moments Gallery — Red Social</span>
                <i class="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#25523D] text-white p-6 flex flex-col justify-between min-h-[270px] group overflow-hidden">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#DBFF9C] text-[#1B1B1F] font-semibold">Streaming Engine</span>
                <span class="text-xs text-[#DBFF9C] font-mono">Flutter / Native</span>
              </div>
              <div class="my-3 rounded-[14px] overflow-hidden h-36 border border-white/15">
                <img src="/img/iptv/iptv-max.png" alt="IPTV Max Player" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p class="text-xs text-white/80 font-light">Ingeniería robusta debajo de cada píxel diseñado en nuestro estudio.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
import gsap from 'gsap';
import PrimaryButton from '~/components/ui/PrimaryButton.vue';

const heroStage = ref(null);
const eyesBadge = ref(null);
const centerCard = ref(null);
const stickerLeft = ref(null);
const stickerRight = ref(null);

const pupilOffset = reactive({ x: 0, y: 0 });

const handleGlobalMouseMove = (e) => {
  const { clientX, clientY } = e;
  const normX = (clientX / window.innerWidth - 0.5) * 2;
  const normY = (clientY / window.innerHeight - 0.5) * 2;

  pupilOffset.x = Math.max(-7, Math.min(7, normX * 7));
  pupilOffset.y = Math.max(-7, Math.min(7, normY * 7));
};

const handleStageMouseMove = (e) => {
  if (!heroStage.value) return;
  const rect = heroStage.value.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width - 0.5;
  const relY = (e.clientY - rect.top) / rect.height - 0.5;

  if (eyesBadge.value) {
    gsap.to(eyesBadge.value, {
      x: relX * 28,
      y: relY * 18,
      duration: 0.4,
      ease: 'power2.out'
    });
  }
  if (centerCard.value) {
    gsap.to(centerCard.value, {
      x: relX * -16,
      y: relY * -10,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
  if (stickerLeft.value) {
    gsap.to(stickerLeft.value, {
      x: relX * -24,
      y: relY * -20,
      rotation: -6 + relX * 8,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
  if (stickerRight.value) {
    gsap.to(stickerRight.value, {
      x: relX * 24,
      y: relY * 20,
      rotation: 6 + relX * -8,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

const resetStageMouse = () => {
  [eyesBadge.value, centerCard.value].forEach((el) => {
    if (el) gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' });
  });
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('mousemove', handleGlobalMouseMove);

    gsap.from('.trigger-anim', {
      y: 32,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('mousemove', handleGlobalMouseMove);
  }
});
</script>
