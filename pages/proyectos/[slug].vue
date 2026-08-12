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
              <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-red-950/40">
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

const projectsData = {
  'iptv-max-ui': {
    title: 'IPTV Max UI',
    category: 'Diseño UX/UI',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV.',
    fullDescription: 'Diseñamos la interfaz completa de IPTV Max, una plataforma de streaming multimedia optimizada para decodificadores Android y Smart TVs. La interfaz incluye navegación por control remoto, carrusel de contenido en vivo, guía EPG interactiva y sistema de favoritos con rendimiento fluido a 60fps.',
    image: '/assets/img/projects/image1.png',
    details: [
      { icon: 'bi bi-tv', title: 'Optimizado para TV', text: 'Interfaz diseñada específicamente para pantallas grandes y navegación por control remoto D-Pad.' },
      { icon: 'bi bi-play-circle', title: 'Player Integrado', text: 'Reproductor de video nativo con soporte para HLS, DASH y múltiples codecs de audio y video.' },
      { icon: 'bi bi-grid', title: 'Guía EPG', text: 'Guía electrónica de programación interactiva con vista de 7 días y recordatorios.' },
      { icon: 'bi bi-star', title: 'Sistema de Favoritos', text: 'Gestión de canales favoritos con categorías personalizadas y acceso rápido.' },
      { icon: 'bi bi-speedometer2', title: '60fps Fluidos', text: 'Animaciones y transiciones optimizadas para mantener 60 cuadros por segundo en todo momento.' },
      { icon: 'bi bi-palette', title: 'Tema Dinámico', text: 'Sistema de temas personalizables con modo oscuro y modo claro para diferentes preferencias.' }
    ],
    technologies: ['Flutter', 'Dart', 'ExoPlayer', 'Android TV', 'Leanback', 'SQLite', 'REST API']
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
