<template>
  <section id="portfolio" class="relative bg-white text-[#141416] py-24 lg:py-32 border-t border-[#141416]/10 overflow-hidden">
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8 relative z-10">

      <!-- Header + Rotating Circular Text Badge -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/20 text-xs font-mono uppercase tracking-wider text-[#141416]">
            <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
            Casos de Éxito • Nuestro Trabajo
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-[60px] font-medium text-[#141416] tracking-[-0.035em] leading-[1.1]">
            Creamos diseños &amp; software <span class="font-serif-italic font-normal underline decoration-[#E7000B] decoration-4 underline-offset-4">que cautivan</span>
          </h2>

          <p class="text-[#64646D] font-light text-base sm:text-lg leading-relaxed">
            Descubre algunos de nuestros desarrollos de software a medida, diseño de interfaces UX/UI y plataformas interactivas recientes.
          </p>
        </div>

        <!-- Rotating Circular Text Badge with Red Center Rocket Icon -->
        <div class="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center self-start md:self-center">
          <svg class="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <defs>
              <path id="circlePath" d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
            </defs>
            <text fill="#141416" font-size="9.2" font-weight="600" letter-spacing="2.1">
              <textPath href="#circlePath">
                THIS IS WHAT WE DO • MINDBLOWING RESULTS •
              </textPath>
            </text>
          </svg>
          <div class="absolute w-12 h-12 rounded-full bg-[#E7000B] text-white border-2 border-[#141416] flex items-center justify-center shadow-[2px_2px_0px_#141416]">
            <i class="bi bi-rocket-takeoff text-lg"></i>
          </div>
        </div>
      </div>

      <!-- Art-Directed Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
        <div
          v-for="(item, i) in items"
          :key="i"
          :style="{ backgroundColor: item.cardBg }"
          :class="[
            'group relative rounded-[24px] p-6 sm:p-8 min-h-[500px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 border border-[#141416]/15 overflow-hidden shadow-sm hover:shadow-[6px_6px_0px_#E7000B]',
            item.darkText ? 'text-[#141416]' : 'text-white'
          ]"
        >
          <!-- Top Meta Row -->
          <div class="flex items-center justify-between gap-3 relative z-10">
            <span class="px-3.5 py-1.5 rounded-full bg-white text-[#141416] border border-[#141416] text-[11px] font-semibold tracking-wide uppercase">
              {{ item.category }}
            </span>

            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-[#141416] text-[#E7000B] text-xs font-mono font-bold">
                0{{ i + 1 }}
              </span>
            </div>
          </div>

          <!-- Center Framed Project Mockup Image -->
          <NuxtLink :to="item.detailsLink" class="my-6 block relative z-10">
            <div class="relative h-64 sm:h-72 w-[94%] mx-auto rounded-[18px] overflow-hidden border-2 border-[#141416] shadow-[6px_6px_0px_#141416] bg-[#141416]">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-top transform transition duration-700 group-hover:scale-105"
              />
            </div>
          </NuxtLink>

          <!-- Bottom Studio Info Bar -->
          <div class="relative z-10 pt-2">
            <div class="bg-white/95 backdrop-blur-md text-[#141416] border border-[#141416] rounded-[18px] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-full border border-[#141416] flex items-center justify-center shrink-0 font-serif-italic text-lg font-bold" :style="{ backgroundColor: item.badgeBg, color: item.badgeColor || '#141416' }">
                  {{ item.shortCode }}
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-[#141416] leading-snug">
                    {{ item.title }}
                  </h3>
                  <p class="text-xs text-[#64646D] line-clamp-1 mt-0.5">
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <NuxtLink
                  :to="item.detailsLink"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E7000B] hover:bg-[#C80009] text-white border border-[#141416] text-xs font-medium transition-colors shadow-[2px_2px_0px_#141416]"
                >
                  <span>Explorar</span>
                  <i class="bi bi-arrow-up-right text-[11px]"></i>
                </NuxtLink>

                <a
                  v-if="item.liveUrl"
                  :href="item.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#141416] hover:bg-[#E7000B] text-white border border-[#141416] transition-colors"
                  title="Visitar sitio web en vivo"
                >
                  <i class="bi bi-box-arrow-up-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Block with Red Dominant Accent -->
      <div class="mt-20 sm:mt-28 text-center py-14 px-6 rounded-[28px] bg-[#FAFAFC] border-2 border-[#141416] shadow-[6px_6px_0px_#E7000B]">
        <h3 class="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#141416] tracking-[-0.03em] leading-[1.2] mb-8">
          ¿Te gusta lo que ves?
          <span class="relative inline-block px-3 mx-1">
            <svg class="absolute inset-0 w-full h-full -z-10 scale-105" viewBox="0 0 360 90" fill="none" preserveAspectRatio="none">
              <path d="M14 48C18 18 110 8 190 10C280 12 348 28 346 50C344 72 260 82 175 80C85 78 12 66 20 42" stroke="#E7000B" stroke-width="16" stroke-linecap="round" />
            </svg>
            <span class="font-serif-italic text-white">empecemos a trabajar</span>
          </span>
        </h3>

        <a href="#contact">
          <PrimaryButton text="Solicitar presupuesto" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import PrimaryButton from '~/components/ui/PrimaryButton.vue';

const items = [
  {
    image: '/assets/img/projects/alacranes.jpg',
    title: 'Alacranes AFC - Plataforma Web',
    description: 'Plataforma web oficial del equipo de fútbol americano de Pasto, Nariño con galería épica, catálogo merch e integración de sponsors.',
    category: 'Desarrollo Web & Branding',
    detailsLink: '/proyectos/alacranes-afc',
    liveUrl: 'https://alacranes-afc.vercel.app/',
    cardBg: '#FFF1F2',
    badgeBg: '#E7000B',
    badgeColor: '#FFFFFF',
    shortCode: 'AL',
    darkText: true
  },
  {
    image: '/img/UI/pantalla-principal.png',
    title: 'IPTV Max UI',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV.',
    category: 'Diseño UX/UI',
    detailsLink: '/proyectos/iptv-max-ui',
    cardBg: '#141416',
    badgeBg: '#E7000B',
    badgeColor: '#FFFFFF',
    shortCode: 'UI',
    darkText: false
  },
  {
    image: '/img/iptv/iptv-max.png',
    title: 'IPTV Max Player',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes.',
    category: 'App Móvil',
    detailsLink: '/proyectos/iptv-max-player',
    cardBg: '#FFE4E6',
    badgeBg: '#E7000B',
    badgeColor: '#FFFFFF',
    shortCode: 'MX',
    darkText: true
  },
  {
    image: '/assets/img/projects/moments.jpg',
    title: 'Moments Gallery - Red Social & Marketplace',
    description: 'Plataforma web tipo red social y marketplace de fotografía para eventos con autenticación, pasarela de pagos y arquitectura Spring Boot + Nuxt.',
    category: 'Plataforma Web & Pagos',
    detailsLink: '/proyectos/moments-gallery',
    liveUrl: 'https://www.moments-gallery.com/',
    cardBg: '#FAFAFC',
    badgeBg: '#E7000B',
    badgeColor: '#FFFFFF',
    shortCode: 'MG',
    darkText: true
  }
];
</script>
