<template>
  <section id="services" ref="servicesSection" class="relative bg-white text-[#141416] pt-16 pb-24 lg:py-28">

    <!-- Editorial Section Header -->
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8 mb-14">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/20 text-xs font-mono uppercase tracking-wider text-[#141416] mb-4">
            <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
            Nuestra Experiencia • Servicios
          </span>
          <h2 class="text-4xl sm:text-5xl lg:text-[58px] font-normal text-[#171717] tracking-[-0.035em] leading-[1.1]">
            Soluciones digitales con <span class="font-serif-italic underline decoration-[#E7000B] decoration-4 underline-offset-4">sello de autor</span>
          </h2>
        </div>
        <p class="text-[#64646D] font-light text-base sm:text-[17px] max-w-md leading-relaxed">
          Diseñamos arquitecturas digitales, marcas y software a medida optimizados para liderar en Google en Pasto, Nariño y Colombia.
        </p>
      </div>
    </div>

    <!-- Full-Width Editorial Service Bands -->
    <div class="w-full border-t border-[#64646D]/30">
      <div
        v-for="(service, index) in services"
        :key="index"
        :style="{ backgroundColor: service.bg }"
        class="group relative w-full border-b border-[#64646D]/30 transition-all duration-500 py-10 lg:py-8 px-5 sm:px-8"
      >
        <div class="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          <!-- Left: Index + Noto Serif Italic Title -->
          <div class="lg:col-span-4 flex items-baseline gap-4">
            <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-[#141416] text-[#E7000B] shrink-0">
              0{{ index + 1 }}
            </span>
            <h3 class="font-serif-italic text-3xl sm:text-4xl lg:text-[40px] text-[#171717] leading-[1.15] group-hover:translate-x-1.5 transition-transform duration-300">
              {{ service.title }}
            </h3>
          </div>

          <!-- Center: Overlapping Tilted Studio Image with Red Shadow -->
          <div class="lg:col-span-3 flex justify-start lg:justify-center">
            <NuxtLink
              :to="service.link"
              class="relative w-full sm:w-64 lg:w-56 h-40 sm:h-44 lg:-my-5 rounded-[12px] overflow-hidden border-2 border-[#141416] shadow-[5px_5px_0px_#E7000B] bg-[#141416] transform transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105 block"
            >
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white border border-[#141416] flex items-center justify-center text-[#E7000B] text-sm font-bold">
                <i :class="service.icon"></i>
              </div>
            </NuxtLink>
          </div>

          <!-- Right: Editorial Description + CTA Pill -->
          <div class="lg:col-span-5 flex flex-col sm:flex-row lg:items-center justify-between gap-5 lg:pl-4">
            <p class="text-[#1E1E22] text-[15px] font-light leading-relaxed max-w-md">
              {{ service.description }}
            </p>

            <NuxtLink
              :to="service.link"
              class="shrink-0 self-start sm:self-center inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#E7000B] hover:bg-[#C80009] text-white border border-[#141416] text-xs font-medium transition-all duration-300 shadow-[2px_2px_0px_#141416]"
            >
              <span>Ver Detalles</span>
              <i class="bi bi-arrow-up-right text-xs"></i>
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <!-- Nuestra Metodología Section with Red Theme -->
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
      <div class="flex flex-wrap items-center gap-4 mb-14">
        <div class="w-14 h-14 rounded-2xl bg-[#E7000B] text-white border-2 border-[#141416] flex items-center justify-center text-2xl transition-transform duration-500 hover:rotate-180 shadow-[3px_3px_0px_#141416]">
          🚀
        </div>
        <h3 class="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#141416] tracking-[-0.03em] leading-none">
          Nuestra <span class="font-serif-italic font-normal underline decoration-[#E7000B] decoration-4 underline-offset-4">metodología</span>
        </h3>
        <span class="hidden sm:inline-flex items-center gap-2 ml-2 px-4 py-1.5 rounded-full bg-[#FAFAFC] border border-[#141416]/15 text-xs font-mono text-[#64646D]">
          De la idea al lanzamiento →
        </span>
      </div>

      <!-- 3 Phase Cards (Hover turns #FFF1F2 with red accent) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="(phase, idx) in methodologyPhases"
          :key="idx"
          class="group rounded-[20px] bg-[#FAFAFC] hover:bg-[#FFF1F2] border border-[#141416]/15 hover:border-[#E7000B] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between hover:shadow-[4px_4px_0px_#E7000B]"
        >
          <div class="space-y-5">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl border border-[#141416] flex items-center justify-center text-xl font-bold" :style="{ backgroundColor: phase.badgeBg, color: phase.textColor || '#141416' }">
                {{ phase.symbol }}
              </div>
              <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#141416]/20 text-[#141416]">
                {{ phase.timeline }}
              </span>
            </div>

            <h4 class="text-2xl sm:text-3xl font-medium text-[#141416]">
              {{ phase.title }}
              <span class="font-serif-italic font-normal block text-xl text-[#E7000B] mt-1">{{ phase.subtitle }}</span>
            </h4>

            <p class="text-sm text-[#1E1E22]/80 font-light leading-relaxed">
              {{ phase.description }}
            </p>
          </div>

          <div class="pt-6 mt-6 border-t border-[#141416]/10 space-y-2">
            <div class="text-xs font-mono uppercase tracking-wider text-[#141416] font-semibold">Entregable clave:</div>
            <p class="text-xs text-[#64646D] group-hover:text-[#141416] leading-relaxed">
              {{ phase.deliverable }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    link: '/servicios/desarrollo-software',
    bg: '#FFF1F2'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '/servicios/desarrollo-web',
    bg: '#FFE4E6'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos en Figma que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '/servicios/diseno-ux-ui',
    bg: '#CFCDFF'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '/servicios/integraciones-apis',
    bg: '#E1FFAB'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '/servicios/apps-moviles',
    bg: '#E4EFF3'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local y técnico para empresas que buscan ser encontradas primero en su ciudad o a nivel nacional e internacional.',
    icon: 'bi bi-search',
    image: '/img/image.png',
    link: '/servicios/seo-avanzado',
    bg: '#FAF0AD'
  }
];

const methodologyPhases = [
  {
    title: 'Fase 1:',
    subtitle: 'Exploración & Arquitectura',
    timeline: 'Inicio • Semana 2',
    symbol: '◎',
    badgeBg: '#E7000B',
    textColor: '#FFFFFF',
    description: 'Analizamos las necesidades de tu marca, investigamos referentes de tu sector y diseñamos la arquitectura de información y estrategia SEO local.',
    deliverable: 'Recibirás el concepto creativo, mapa de arquitectura y lineamientos técnicos para tu plataforma.'
  },
  {
    title: 'Fase 2:',
    subtitle: 'Dirección de Arte & UI/UX',
    timeline: 'Semana 4',
    symbol: '△',
    badgeBg: '#FFF1F2',
    textColor: '#E7000B',
    description: 'Diseñamos la interfaz de usuario en Figma de acuerdo al concepto gráfico: paletas de color, tipografías editoriales, layouts y prototipos interactivos.',
    deliverable: 'Obtendrás un prototipo visual de alta fidelidad que muestra exactamente cómo lucirá y funcionará tu producto.'
  },
  {
    title: 'Fase 3:',
    subtitle: 'Ingeniería, QA & Lanzamiento',
    timeline: 'Semana 6',
    symbol: '🚀',
    badgeBg: '#141416',
    textColor: '#FFFFFF',
    description: 'Implementamos el desarrollo con código limpio (Nuxt, Spring Boot, Astro o Flutter), optimizamos Core Web Vitals al 100% y desplegamos en producción.',
    deliverable: 'Recibirás tu sitio o software funcional, ultrarrápido y listo para conquistar el #1 de Google.'
  }
];
</script>
