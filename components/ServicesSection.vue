<template>
  <section id="services" ref="servicesSection" class="services-section relative bg-black overflow-hidden py-24 lg:py-32 border-t border-zinc-900">
    
    <!-- Ambient lights -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Background Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/30 shadow-lg shadow-red-950/30 backdrop-blur-xl mb-4">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Nuestra Experiencia</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">Servicios <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Premium</span></h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
        <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Diseñamos arquitecturas digitales optimizadas para posicionar tu negocio en lo más alto de Google en Pasto y Nariño.
        </p>
      </div>

      <!-- Services Grid (2 Columns, 6 Cards) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 backdrop-blur-xl flex flex-col sm:flex-row items-stretch gap-6"
        >
          <!-- Hover Glow Overlay -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <!-- Image Box -->
          <div class="sm:w-5/12 w-full h-52 sm:h-auto shrink-0 relative rounded-2xl overflow-hidden border border-zinc-800/80">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <!-- Number badge -->
            <span class="absolute top-3 left-3 bg-black/80 border border-zinc-700 text-red-500 text-xs font-mono font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
              0{{ index + 1 }}
            </span>
          </div>

          <!-- Content Box -->
          <div class="sm:w-7/12 flex flex-col justify-between space-y-4 relative z-10">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                  {{ service.title }}
                </h3>
                <div class="w-10 h-10 shrink-0 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500">
                  <i :class="service.icon" class="text-lg"></i>
                </div>
              </div>

              <p class="text-zinc-300 text-sm leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <div class="pt-2">
              <NuxtLink
                :to="service.link"
                class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/btn"
              >
                <span>Ver Detalles</span>
                <div class="w-7 h-7 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-3.5 h-3.5 text-red-500 group-hover/btn:text-white transition-colors">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>
                  </svg>
                </div>
              </NuxtLink>
            </div>
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
    link: '/servicios/desarrollo-software'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '/servicios/desarrollo-web'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '/servicios/diseno-ux-ui'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '/servicios/integraciones-apis'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '/servicios/apps-moviles'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en Pasto, Nariño y todo el territorio nacional.',
    icon: 'bi bi-search',
    image: '/assets/img/services/apiDevelopment.png',
    link: '/servicios/seo-avanzado'
  }
];
</script>

<style scoped>
.services-section {
  background-color: #000000 !important;
  color: #ffffff !important;
}
</style>
