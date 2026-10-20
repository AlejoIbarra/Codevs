<template>
  <section id="hero" class="relative bg-white text-[#141416] overflow-hidden pt-10 sm:pt-14">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">

      <!-- Top Editorial Pre-Headline with Red Highlighter Stroke -->
      <div class="text-center max-w-2xl mx-auto pt-4 sm:pt-8 trigger-anim">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/15 text-[12px] font-medium tracking-wide text-[#141416] mb-5">
          <span class="w-2 h-2 rounded-full bg-[#E7000B] animate-pulse"></span>
          <span>Creative Studio &amp; Engineering Lab — Pasto, Colombia</span>
        </div>

        <h1 class="text-[26px] sm:text-[34px] lg:text-[38px] font-normal text-[#141416] leading-[1.28] tracking-[-0.02em]">
          Una marca
          <span class="relative inline-block mx-1 px-2.5">
            <!-- Hand-drawn Red Highlighter Marker SVG -->
            <svg class="absolute inset-0 w-full h-full -z-10 scale-110 translate-y-1" viewBox="0 0 220 60" fill="none" preserveAspectRatio="none">
              <path d="M6 34C48 22 165 16 214 28C185 44 62 50 10 42Z" fill="#E7000B" stroke="#E7000B" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="font-serif-italic text-white font-normal drop-shadow-sm">increíble</span>
          </span>
          <br class="hidden sm:inline" />
          necesita <span class="font-medium">desarrollo web</span> &amp; <span class="font-serif-italic underline decoration-[#E7000B] decoration-2 underline-offset-4">software</span> a la medida
        </h1>
      </div>

      <!-- Monumental Studio Wordmark + Interactive Rocket Launch Centerpiece -->
      <div
        ref="heroStage"
        @mousemove="handleStageMouseMove"
        @mouseleave="resetStageMouse"
        class="relative mt-2 sm:mt-4 pb-8 sm:pb-12 flex flex-col items-center justify-center select-none"
      >
        <!-- Giant "codevs" Wordmark -->
        <div
          aria-hidden="true"
          class="text-[23vw] sm:text-[22vw] lg:text-[20.5vw] font-semibold tracking-[-0.065em] leading-[0.76] text-[#141416] lowercase text-center w-full trigger-anim pointer-events-none"
        >
          codevs
        </div>

        <!-- Floating Designer Stickers -->
        <div
          ref="stickerLeft"
          class="hidden md:flex items-center gap-2 absolute top-[12%] left-[6%] lg:left-[10%] bg-white text-[#141416] border-2 border-[#141416] px-4 py-2 rounded-full text-xs font-semibold shadow-[3px_3px_0px_#E7000B] -rotate-6 z-20 pointer-events-none"
        >
          <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
          <span>UI / UX Obsessed</span>
        </div>

        <div
          ref="stickerRight"
          class="hidden md:flex items-center gap-2 absolute top-[18%] right-[6%] lg:right-[9%] bg-[#E7000B] text-white border-2 border-[#141416] px-4 py-2 rounded-full text-xs font-semibold shadow-[3px_3px_0px_#141416] rotate-6 z-20 pointer-events-none"
        >
          <i class="bi bi-rocket-takeoff-fill"></i>
          <span>100% Rocket Speed</span>
        </div>

        <!-- Overlapping Centerpiece: The CODEVS Interactive Cohete / Rocket Cockpit Module -->
        <div class="relative -mt-[8vw] sm:-mt-[7vw] z-20 flex flex-col items-center">
          <!-- Interactive Rocket Badge -->
          <div
            ref="rocketBadge"
            class="relative z-30 -mb-6 sm:-mb-7 bg-[#E7000B] text-white border-2 border-[#141416] rounded-full px-6 py-3 shadow-[4px_4px_0px_#141416] flex items-center gap-4 transition-transform duration-200"
          >
            <!-- Animated Rocket SVG Icon -->
            <div class="w-12 h-12 rounded-full bg-white border border-[#141416] flex items-center justify-center relative overflow-hidden shadow-inner">
              <svg
                width="30"
                height="30"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transform -rotate-45"
                :style="{ transform: `rotate(${-45 + pupilOffset.x * 3}deg) translate(${pupilOffset.x * 0.5}px, ${pupilOffset.y * 0.5}px)` }"
              >
                <path
                  d="M39.3962 21.1313C28.4312 33.44 20.9062 51.1238 20.2075 52.79L0.75 44.4588L26.6038 18.605L39.3962 21.1313ZM50.0387 78.375C50.0387 78.375 70.1412 70.0438 81.6975 58.4875C110.722 29.4625 105.885 6.78001 104.326 1.67376C99.22 0.0612618 76.5375 -4.72249 47.5125 24.3025C35.9563 35.8588 27.625 55.9613 27.625 55.9613L50.0387 78.375ZM84.8688 66.6038C72.56 77.5688 54.8763 85.0938 53.21 85.7925L61.5413 105.25L87.395 79.3963L84.8688 66.6038ZM59.875 35.375C59.875 29.4625 64.7125 24.625 70.625 24.625C76.5375 24.625 81.375 29.4625 81.375 35.375C81.375 41.2875 76.5375 46.125 70.625 46.125C64.7125 46.125 59.875 41.2875 59.875 35.375Z"
                  fill="#E7000B"
                />
                <path
                  class="animate-pulse"
                  d="M33.645 95.145C36.5475 92.2425 38.375 88.2113 38.375 83.75C38.3825 80.5582 37.4413 77.4363 35.671 74.7804C33.9007 72.1246 31.3811 70.0547 28.4322 68.8337C25.4832 67.6126 22.2379 67.2955 19.1083 67.9224C15.9787 68.5494 13.106 70.0922 10.855 72.355C4.5125 78.6975 0.75 105.25 0.75 105.25C0.75 105.25 27.3025 101.488 33.645 95.145Z"
                  fill="#FFAE00"
                />
              </svg>
            </div>

            <div class="text-left pr-2">
              <div class="text-[10px] font-mono uppercase tracking-widest text-white/80 leading-none">Despegue Digital</div>
              <div class="text-xs font-bold text-white leading-tight mt-0.5">Misión CODEVS 🚀</div>
            </div>
          </div>

          <!-- Studio Browser / Artboard Frame with Red Accent Shadow -->
          <div
            ref="centerCard"
            class="w-[92vw] sm:w-[540px] lg:w-[640px] bg-[#141416] text-white border-2 border-[#141416] rounded-[24px] p-4 sm:p-5 shadow-[8px_8px_0px_#E7000B] transition-transform duration-200"
          >
            <!-- Artboard Top Bar -->
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[#E7000B] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#FFAE00] inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
              </div>
              <div class="px-3 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-white/80">
                codevs.studio / software-a-medida.fig
              </div>
              <span class="text-[11px] font-mono text-[#E7000B] font-bold">100% Rocket Speed</span>
            </div>

            <!-- Artboard Inner Content -->
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#1E1E22] rounded-[16px] p-4 sm:p-5">
              <div class="sm:col-span-7 space-y-2.5 text-left">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-[#E7000B] text-white text-[11px] font-semibold">
                  Sin plantillas ni clichés
                </span>
                <h2 class="text-xl sm:text-2xl font-medium text-white leading-tight tracking-tight">
                  Arquitectura digital con alma de <span class="font-serif-italic text-[#E7000B]">estudio &amp; cohete</span>.
                </h2>
                <p class="text-xs text-white/75 leading-relaxed font-light">
                  Combinamos dirección de arte UX/UI, ingeniería de software a medida y SEO técnico para posicionar tu marca en el #1 de Google.
                </p>
              </div>
              <div class="sm:col-span-5">
                <div class="relative rounded-xl overflow-hidden border border-white/15 aspect-[4/3] bg-[#141416]">
                  <img
                    src="/assets/img/projects/moments.jpg"
                    alt="Showcase de Diseño y Desarrollo Web CODEVS"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute bottom-2 right-2 bg-[#E7000B] text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#141416]">
                    60 FPS • SSR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Editorial Value Proposition & Actions Row (CODEVS Red Dominant) -->
      <div class="max-w-5xl mx-auto pt-4 pb-16 sm:pb-20 trigger-anim">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#141416]/15 pt-10">
          <div class="lg:col-span-7 text-left space-y-4">
            <p class="text-base sm:text-[18px] text-[#141416]/85 font-light leading-relaxed">
              Somos <strong class="font-semibold text-[#141416]">CODEVS</strong>, líderes en
              <strong class="font-medium text-[#E7000B] bg-[#FFF1F2] px-1.5 py-0.5 rounded">desarrollo de páginas web</strong>, diseño de experiencias UX/UI e ingeniería de software a la medida en San Juan de Pasto y Colombia. Impulsamos tu negocio como un cohete para conquistar el
              <strong class="font-semibold text-[#E7000B] underline decoration-[#E7000B] decoration-2">lugar #1 de Google</strong>.
            </p>

            <!-- 3 Studio Badges with Red Accents -->
            <div class="flex flex-wrap gap-2.5 pt-2">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/15 text-xs font-medium text-[#141416]">
                <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
                Posicionamiento #1 en Google
              </div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/15 text-xs font-medium text-[#141416]">
                <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
                Ingeniería de Software a Medida
              </div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/15 text-xs font-medium text-[#141416]">
                <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
                Velocidad Rocket &amp; UX/UI
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3">
            <a href="#contact">
              <PrimaryButton text="Iniciar Mi Proyecto" />
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#141416] text-[#141416] hover:bg-[#141416] hover:text-white transition-all duration-300 font-medium text-[14px]"
            >
              Conocer Servicios
            </a>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#FFF1F2] hover:bg-[#FFE4E6] text-[#E7000B] border border-[#E7000B]/30 transition-all duration-300 font-medium text-[14px] gap-2"
            >
              <i class="bi bi-journal-richtext"></i>
              <span>Blog</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Predominant RED Sliding Marquee Strip -->
    <div class="w-full bg-[#E7000B] text-white border-y-2 border-[#141416] py-5 overflow-hidden select-none">
      <div class="animate-monos-marquee flex items-center gap-10">
        <div v-for="i in 8" :key="i" class="flex items-center gap-10 shrink-0">
          <span class="text-lg sm:text-xl font-normal tracking-tight flex items-center gap-3">
            Tu sitio web puede despegar <span class="font-serif-italic font-normal underline decoration-white">más alto que nunca</span>
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#E7000B] text-xs font-bold">🚀</span>
          </span>
          <span class="text-lg sm:text-xl font-normal tracking-tight flex items-center gap-3">
            Software con criterio &amp; sin clichés
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#141416] text-[#FFAE00] border border-white text-xs">★</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Dark Bento Showcase (#1E1E22) with Vibrant Red Accents -->
    <div ref="bentoShowcase" class="bg-[#1E1E22] py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div class="max-w-[1400px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          <!-- Column 1 -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6">
            <div class="rounded-[24px] bg-[#E7000B] text-white p-5 sm:p-6 flex flex-col justify-between min-h-[290px] group overflow-hidden relative shadow-[4px_4px_0px_#141416]">
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#E7000B] font-bold">UI / Design System</span>
                <span class="text-xs font-mono text-white/80">01</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-white/20 shadow-lg h-44 bg-[#141416]">
                <img src="/img/UI/figma.png" alt="Sistema de Diseño en Figma CODEVS" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-4 flex items-center justify-between text-white">
                <span class="font-medium text-sm">Arquitectura de Interfaces en Figma</span>
                <i class="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#141416] text-white p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group border border-white/10">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#E7000B] text-white font-semibold">Mobile &amp; TV</span>
                <span class="text-xs text-white/50 font-mono">60 FPS</span>
              </div>
              <div class="my-4 rounded-[14px] overflow-hidden h-36 border border-white/10">
                <img src="/img/UI/pantalla-principal.png" alt="IPTV Max UI" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p class="text-sm font-light text-white/85">Experiencias interactivas fluidas para web, móvil y Smart TV.</p>
            </div>
          </div>

          <!-- Column 2 (Center Feature) -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6">
            <div class="rounded-[24px] bg-white p-5 sm:p-6 flex flex-col justify-between min-h-[340px] group overflow-hidden border-2 border-[#E7000B] shadow-[5px_5px_0px_#E7000B]">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#E7000B] text-white font-medium">Caso de Estudio</span>
                <span class="text-xs font-serif-italic text-[#E7000B] font-semibold">Alacranes AFC</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-[#141416]/15 h-56">
                <img src="/assets/img/projects/alacranes.jpg" alt="Alacranes AFC Web" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-medium text-[#141416]">Branding Digital &amp; Plataforma Web</h3>
                <p class="text-xs text-[#64646D] mt-0.5 font-light">Identidad visual deportiva, Bento Gallery &amp; Astro 100/100.</p>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#FFF1F2] p-6 flex flex-col justify-between min-h-[190px] text-[#141416] border border-[#E7000B]/30">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#E7000B]/30 text-[#E7000B] font-semibold">Identidad Visual</span>
                <span class="text-2xl">🚀</span>
              </div>
              <div class="mt-4">
                <div class="text-2xl sm:text-3xl font-serif-italic leading-tight text-[#141416]">Diseño con potencia de cohete.</div>
                <p class="text-xs text-[#64646D] mt-2 font-light">Criterio estético, tipografía editorial y micro-interacciones pensadas por humanos.</p>
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="md:col-span-4 flex flex-col gap-5 sm:gap-6">
            <div class="rounded-[24px] bg-[#FFE4E6] p-5 sm:p-6 flex flex-col justify-between min-h-[260px] group overflow-hidden text-[#141416] border border-[#E7000B]/20">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#E7000B] text-white">Marketplace &amp; SSR</span>
                <span class="text-xs font-mono text-[#E7000B]">Spring + Nuxt</span>
              </div>
              <div class="rounded-[16px] overflow-hidden border border-[#141416]/15 h-40">
                <img src="/assets/img/projects/moments.jpg" alt="Moments Gallery" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-sm font-medium">Moments Gallery — Red Social</span>
                <i class="bi bi-arrow-up-right text-[#E7000B]"></i>
              </div>
            </div>

            <div class="rounded-[24px] bg-[#25523D] text-white p-6 flex flex-col justify-between min-h-[270px] group overflow-hidden">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#DBFF9C] text-[#141416] font-semibold">Streaming Engine</span>
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
const rocketBadge = ref(null);
const centerCard = ref(null);
const stickerLeft = ref(null);
const stickerRight = ref(null);

const pupilOffset = reactive({ x: 0, y: 0 });

const handleGlobalMouseMove = (e) => {
  const { clientX, clientY } = e;
  const normX = (clientX / window.innerWidth - 0.5) * 2;
  const normY = (clientY / window.innerHeight - 0.5) * 2;

  pupilOffset.x = Math.max(-8, Math.min(8, normX * 8));
  pupilOffset.y = Math.max(-8, Math.min(8, normY * 8));
};

const handleStageMouseMove = (e) => {
  if (!heroStage.value) return;
  const rect = heroStage.value.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width - 0.5;
  const relY = (e.clientY - rect.top) / rect.height - 0.5;

  if (rocketBadge.value) {
    gsap.to(rocketBadge.value, {
      x: relX * 28,
      y: relY * 18,
      rotation: relX * 10,
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
  [rocketBadge.value, centerCard.value].forEach((el) => {
    if (el) gsap.to(el, { x: 0, y: 0, rotation: 0, duration: 0.6, ease: 'power3.out' });
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
