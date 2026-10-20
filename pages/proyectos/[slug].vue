<template>
  <div class="min-h-screen bg-white text-[#1B1B1F]">
    
    <!-- Hero Banner -->
    <section class="relative pt-20 pb-16 overflow-hidden border-b border-[#1B1B1F]/10">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-mono text-[#6A7077] mb-8">
          <NuxtLink to="/" class="hover:text-[#1B1B1F] hover:underline">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-[10px]"></i>
          <NuxtLink to="/#portfolio" class="hover:text-[#1B1B1F] hover:underline">Proyectos</NuxtLink>
          <i class="bi bi-chevron-right text-[10px]"></i>
          <span class="text-[#1B1B1F] font-medium">{{ project.title }}</span>
        </nav>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Text -->
          <div class="lg:w-7/12 space-y-6">
            <div class="flex items-center gap-3">
              <span class="bg-[#FFF480] text-[#1B1B1F] border border-[#1B1B1F] text-[11px] font-semibold tracking-wider px-3.5 py-1 rounded-full uppercase">
                {{ project.category }}
              </span>
              <span class="flex items-center gap-1.5 text-xs text-[#6A7077] font-mono">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Proyecto Activo
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#171717] tracking-[-0.035em] leading-[1.12]">
              <span class="font-serif-italic underline decoration-[#A5A1FF] decoration-4 underline-offset-4">
                {{ project.title }}
              </span>
            </h1>

            <p class="text-[#1E1E1E]/80 text-lg leading-relaxed max-w-2xl font-light">
              {{ project.fullDescription }}
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFF480] hover:bg-[#DBFF9C] text-[#1B1B1F] border border-[#1B1B1F] rounded-full font-medium text-sm transition-all duration-300 shadow-[2px_2px_0px_#1B1B1F]"
              >
                <span>Visitar Sitio Web</span>
                <i class="bi bi-arrow-up-right text-xs"></i>
              </a>
              <NuxtLink to="/#contact" class="inline-flex items-center justify-center px-8 py-3.5 bg-[#1B1B1F] hover:bg-[#FFF480] text-white hover:text-[#1B1B1F] border border-[#1B1B1F] rounded-full font-medium text-sm transition-all duration-300 shadow-[2px_2px_0px_#1B1B1F]">
                Solicitar Proyecto Similar
              </NuxtLink>
              <NuxtLink to="/#portfolio" class="inline-flex items-center justify-center px-7 py-3.5 border border-[#1B1B1F] rounded-full hover:bg-[#1B1B1F] hover:text-white text-[#1B1B1F] transition-all duration-300 font-medium text-sm bg-white">
                Ver Más Proyectos
              </NuxtLink>
            </div>
          </div>

          <!-- Image -->
          <div class="lg:w-5/12 w-full">
            <div class="relative rounded-[24px] overflow-hidden border-2 border-[#1B1B1F] shadow-[6px_6px_0px_#1B1B1F] bg-[#1B1B1F] group">
              <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Showcase / Gallery (if available) -->
    <section v-if="project.gallery && project.gallery.length" class="py-20 border-b border-[#1B1B1F]/10 bg-[#F9FAFA]">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl mb-14">
          <span class="text-xs font-mono uppercase tracking-wider text-[#6A7077] block mb-2">Showcase Visual &amp; Figma</span>
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] tracking-tight">
            Diseño de <span class="font-serif-italic underline decoration-[#FFF480] decoration-4 underline-offset-4">Interfaz</span> &amp; Prototipos
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in project.gallery"
            :key="idx"
            @click="selectedGalleryImg = item"
            class="group bg-white border border-[#1B1B1F]/20 hover:border-[#1B1B1F] rounded-[24px] overflow-hidden shadow-sm hover:shadow-[5px_5px_0px_#1B1B1F] transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <!-- Mockup Window Header -->
            <div class="px-6 py-3.5 bg-[#F9FAFA] border-b border-[#1B1B1F]/15 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFACAA]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFF480]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#DBFF9C]"></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-[#6A7077]">{{ item.tag }}</span>
                <i class="bi bi-arrows-fullscreen text-[#6A7077] text-xs"></i>
              </div>
            </div>

            <!-- Image View -->
            <div class="relative overflow-hidden bg-[#1B1B1F] h-80">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Info Details -->
            <div class="p-6 sm:p-8 space-y-2.5 bg-white border-t border-[#1B1B1F]/10">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-semibold text-[#1B1B1F] uppercase tracking-wider">{{ item.tag }}</span>
                <span class="text-xs text-[#6A7077] font-mono">0{{ idx + 1 }}</span>
              </div>
              <h3 class="text-xl font-medium text-[#1B1B1F]">
                {{ item.title }}
              </h3>
              <p class="text-[#6A7077] text-sm leading-relaxed font-light">
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
      class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
    >
      <div
        @click.stop
        class="relative max-w-5xl w-full bg-white border-2 border-[#1B1B1F] rounded-[24px] overflow-hidden shadow-2xl"
      >
        <div class="p-4 bg-[#F9FAFA] border-b border-[#1B1B1F]/15 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-[#FFF480] border border-[#1B1B1F] rounded-full text-[#1B1B1F]">
              {{ selectedGalleryImg.tag }}
            </span>
            <span class="text-sm font-semibold text-[#1B1B1F]">{{ selectedGalleryImg.title }}</span>
          </div>
          <button
            @click="selectedGalleryImg = null"
            class="w-8 h-8 rounded-full bg-[#1B1B1F] text-white flex items-center justify-center transition-colors"
          >
            <i class="bi bi-x-lg text-xs"></i>
          </button>
        </div>
        <div class="p-4 bg-white max-h-[75vh] overflow-auto flex items-center justify-center">
          <img
            :src="selectedGalleryImg.image"
            :alt="selectedGalleryImg.title"
            class="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg border border-[#1B1B1F]/10"
          />
        </div>
      </div>
    </div>

    <!-- Project Details -->
    <section class="py-20 border-b border-[#1B1B1F]/10 bg-white">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl mb-14">
          <span class="text-xs font-mono uppercase tracking-wider text-[#6A7077] block mb-2">Ingeniería &amp; Diseño</span>
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] tracking-tight">
            Detalles del <span class="font-serif-italic underline decoration-[#DBFF9C] decoration-4 underline-offset-4">Proyecto</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(detail, i) in project.details"
            :key="i"
            class="group bg-[#F9FAFA] border border-[#1B1B1F]/15 hover:border-[#1B1B1F] rounded-[20px] p-7 transition-all duration-300 hover:shadow-[4px_4px_0px_#1B1B1F]"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#FFF480] border border-[#1B1B1F] flex items-center justify-center mb-5 text-[#1B1B1F] group-hover:bg-[#DBFF9C] transition-colors">
              <i :class="detail.icon" class="text-xl"></i>
            </div>
            <h3 class="text-lg font-medium text-[#1B1B1F] mb-2">{{ detail.title }}</h3>
            <p class="text-[#6A7077] text-sm leading-relaxed font-light">{{ detail.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-20 border-b border-[#1B1B1F]/10 bg-[#F9FAFA]">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] tracking-tight">
            Stack <span class="font-serif-italic underline decoration-[#FFF480] decoration-4 underline-offset-4">Tecnológico</span>
          </h2>
        </div>

        <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          <span
            v-for="(tech, i) in project.technologies"
            :key="i"
            class="px-5 py-2.5 bg-white border border-[#1B1B1F]/20 rounded-full text-xs font-mono font-medium text-[#1B1B1F] hover:bg-[#FFF480] transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-5 text-center">
        <div class="bg-[#FFFDE5] border-2 border-[#1B1B1F] rounded-[28px] p-10 sm:p-14 shadow-[6px_6px_0px_#1B1B1F]">
          <h2 class="text-3xl sm:text-4xl font-normal text-[#1B1B1F] mb-3">
            ¿Necesitas algo <span class="font-serif-italic underline decoration-[#1B1B1F]">similar</span>?
          </h2>
          <p class="text-[#6A7077] text-base mb-8 max-w-lg mx-auto font-light">
            Cuéntanos tu idea y te entregamos una propuesta personalizada en menos de 24 horas.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#1B1B1F] hover:bg-[#FFF480] text-white hover:text-[#1B1B1F] border border-[#1B1B1F] rounded-full font-medium text-sm transition-all shadow-[2px_2px_0px_#1B1B1F]"
          >
            <span>Iniciar Mi Proyecto</span>
            <i class="bi bi-arrow-up-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

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
      { icon: 'bi bi-lightning-charge', title: 'Diseño Temático & Identidad Visual', text: 'Identidad visual deportiva de alto impacto "Sangre & Pólvora" con microinteracciones y animaciones fluidas.' },
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
    title: 'Moments Gallery - Red Social & Marketplace de Fotografía',
    category: 'Plataforma Web & Pagos',
    description: 'Plataforma web tipo red social y marketplace de fotografía para eventos con autenticación de usuarios y pasarela de pagos.',
    fullDescription: 'Moments Gallery es un desarrollo exclusivo de CODEVS diseñado como una plataforma integral tipo red social y marketplace fotográfico para eventos sociales y corporativos (bodas, fiestas, cumpleaños y conferencias). La solución integra autenticación segura con JWT y gestión de perfiles/roles (fotógrafos, anfitriones y compradores), feeds interactivos de fotos con likes y comentarios, procesamiento backend en Spring Boot para marcas de agua dinámicas y protección de derechos de autor, pasarela de pagos integrada para venta directa de fotografías digitales en alta definición, base de datos relacional MySQL optimizada y arquitectura frontend en Nuxt.js con Server-Side Rendering (SSR) para máximo rendimiento y posicionamiento SEO en Google.',
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
