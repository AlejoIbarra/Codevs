<template>
  <div class="min-h-screen bg-black text-white">
    
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Ambient lights -->
      <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#portfolio" class="hover:text-red-500 transition-colors">Proyectos</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">{{ project.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Text -->
          <div class="lg:w-7/12 space-y-6">
            <div class="flex items-center gap-3">
              <span class="bg-red-600/90 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                {{ project.category }}
              </span>
              <span class="flex items-center gap-1.5 text-[11px] text-zinc-400 font-semibold">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Proyecto Activo
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                {{ project.title }}
              </span>
            </h1>

            <p class="text-zinc-300 text-lg leading-relaxed max-w-2xl">
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
              <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-900 border border-zinc-800 hover:border-red-500 text-white rounded-xl font-semibold text-sm transition-all duration-300">
                Solicitar Proyecto Similar
              </NuxtLink>
              <NuxtLink to="/#portfolio" class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-500 transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
                Ver Más Proyectos
              </NuxtLink>
            </div>
          </div>

          <!-- Image -->
          <div class="lg:w-5/12">
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-red-950/20 group">
              <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Showcase / Gallery (if available) -->
    <section v-if="project.gallery && project.gallery.length" class="py-20 border-t border-zinc-900 relative overflow-hidden">
      <!-- Ambient light -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xl">
            <i class="bi bi-display text-red-500"></i>
            Showcase Visual
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Diseño de <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Interfaz</span> & Prototipos
          </h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p class="text-zinc-400 max-w-xl mx-auto text-base">
            Explora las pantallas clave, el sistema de componentes en Figma y el resultado final implementado.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                class="w-full h-80 object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
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
            <div class="p-6 sm:p-8 space-y-3 bg-zinc-900/90 border-t border-zinc-800/60 relative z-10">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-red-500 uppercase tracking-wider">{{ item.tag }}</span>
                <span class="text-xs text-zinc-500 font-mono">0{{ idx + 1 }}</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Lightbox for Image Preview -->
    <div
      v-if="selectedGalleryImg"
      @click="selectedGalleryImg = null"
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <div
        @click.stop
        class="relative max-w-5xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-red-950/40"
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
          >
            <i class="bi bi-x-lg text-sm"></i>
          </button>
        </div>
        <div class="p-2 sm:p-4 bg-zinc-950/60 max-h-[75vh] overflow-auto flex items-center justify-center">
          <img
            :src="selectedGalleryImg.image"
            :alt="selectedGalleryImg.title"
            class="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>

    <!-- Project Details -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Detalles del <span class="text-red-500">Proyecto</span></h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(detail, i) in project.details" :key="i"
            class="group bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/50 flex items-center justify-center border border-red-500/30 mb-4 group-hover:scale-110 transition-transform">
              <i :class="detail.icon" class="text-xl text-red-500"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ detail.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ detail.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Stack <span class="text-red-500">Tecnológico</span></h2>
          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <span v-for="(tech, i) in project.technologies" :key="i"
            class="px-5 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-full text-sm font-semibold text-zinc-300 hover:border-red-500/40 hover:text-red-400 transition-all duration-300">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-10 sm:p-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">¿Necesitas algo <span class="text-red-500">similar</span>?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">Cuéntanos tu idea y te entregamos una propuesta personalizada en menos de 24 horas.</p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-red-950/40">
            Iniciar Mi Proyecto
            <i class="bi bi-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const selectedGalleryImg = ref(null);

const projectsData = {
  'alacranes-afc': {
    title: 'Alacranes AFC - Plataforma Web Oficial',
    category: 'Desarrollo Web & Branding',
    description: 'Plataforma web oficial del equipo de fútbol americano Alacranes AFC de Pasto, Nariño.',
    fullDescription: 'Diseñamos y desarrollamos la plataforma web oficial de Alacranes AFC, el club insignia de fútbol americano de Pasto, Nariño ("Sangre y Pólvora"). Creamos una experiencia digital inmersiva y de alto impacto visual con arquitectura Astro ultrarrápida, galería interactiva estilo Bento Grid con visor Lightbox de 17 fotografías de alta resolución, catálogo oficial de indumentaria y uniformes, carrusel infinito de patrocinadores oficiales (donde CODEVS participa como sponsor tecnológico), e integración con Instagram para su comunidad de atletas y aficionados.',
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
    technologies: ['Astro', 'TailwindCSS', 'GSAP Animations', 'Vercel', 'JavaScript ES6+', 'SEO Local Deportivo', 'Lightbox Interactivo', 'UI/UX Design']
  },
  'iptv-max-ui': {
    title: 'IPTV Max UI',
    category: 'Diseño UX/UI',
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
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes.',
    fullDescription: 'Desarrollamos el motor de reproducción de IPTV Max Player, una aplicación móvil para Android e iOS que ofrece streaming continuo de video en alta calidad. El reproductor incluye soporte para múltiples protocolos de streaming, buffer inteligente adaptativo y gestión eficiente de recursos para minimizar el consumo de batería.',
    image: '/assets/img/projects/image2.png',
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
  'panel-administrativo': {
    title: 'Panel Administrativo',
    category: 'Desarrollo Web',
    description: 'Panel de control privado con gráficos en tiempo real y seguridad reforzada.',
    fullDescription: 'Construimos un panel de administración web completo con dashboard de métricas en tiempo real, gestión de usuarios con roles y permisos, sistema de reportes automatizados y seguridad empresarial con autenticación multifactor. El panel se integra con múltiples fuentes de datos y ofrece visualizaciones interactivas.',
    image: '/assets/img/projects/image3.png',
    details: [
      { icon: 'bi bi-graph-up-arrow', title: 'Dashboard en Tiempo Real', text: 'Gráficos interactivos y métricas actualizadas en tiempo real con WebSockets.' },
      { icon: 'bi bi-people', title: 'Gestión de Usuarios', text: 'Sistema completo de roles y permisos con RBAC para control granular de acceso.' },
      { icon: 'bi bi-shield-lock', title: 'Seguridad Empresarial', text: 'Autenticación multifactor (MFA), cifrado de datos y auditoría completa de acciones.' },
      { icon: 'bi bi-file-earmark-bar-graph', title: 'Reportes Automatizados', text: 'Generación automática de reportes en PDF y Excel con programación de envío por correo.' },
      { icon: 'bi bi-plug', title: 'Integraciones', text: 'Conexión con APIs externas, bases de datos múltiples y servicios de terceros.' },
      { icon: 'bi bi-phone', title: 'Responsive', text: 'Panel completamente adaptado para gestionar tu negocio desde cualquier dispositivo.' }
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Spring Boot', 'PostgreSQL', 'Chart.js', 'WebSockets', 'Docker', 'JWT']
  }
};

const project = projectsData[slug];

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Proyecto no encontrado' });
}

useHead({
  title: `${project.title} | CODEVS Portfolio - Pasto, Nariño`,
  meta: [
    { name: 'description', content: project.fullDescription }
  ]
});
</script>

<style scoped>
section {
  background-color: #000000 !important;
}
</style>
