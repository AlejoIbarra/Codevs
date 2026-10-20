<template>
  <div class="bg-black text-white min-h-screen py-24 sm:py-32 relative overflow-hidden">
    <!-- Luces de fondo Mesh Gradient sutiles -->
    <div class="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-[-10%] w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[160px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
      
      <!-- Migas de Pan / Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-zinc-500 mb-8" aria-label="Breadcrumbs">
        <NuxtLink to="/" class="hover:text-red-400 transition-colors">Inicio</NuxtLink>
        <span>/</span>
        <span class="text-zinc-300">Política de Privacidad & Cookies</span>
      </nav>

      <!-- Encabezado Principal -->
      <header class="mb-14 border-b border-zinc-800/80 pb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-red-500 mb-3 block">
          Marco Legal & Cumplimiento Google
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Política de Privacidad & Tratamiento de Cookies
        </h1>
        <p class="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          En cumplimiento de la Ley Estatutaria 1581 de 2012 de Colombia (Habeas Data), el Decreto 1377 de 2013 y el Reglamento General de Protección de Datos (RGPD) en alineación con Google Consent Mode v2.
        </p>
        <div class="flex items-center gap-4 text-xs text-zinc-500 mt-4">
          <span>Última actualización: 12 de Octubre, 2026</span>
          <span>•</span>
          <span>Responsable: CODEVS Tech Studio</span>
        </div>
      </header>

      <!-- Panel Interactivo de Gestión de Consentimiento -->
      <div class="bg-white/[0.03] border border-white/10 p-6 sm:p-8 rounded-3xl mb-12 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 class="text-lg font-bold text-white mb-1">Tus Preferencias Actuales</h2>
          <p class="text-xs text-zinc-400 max-w-lg">
            Puedes cambiar tu configuración de cookies o revocar tu consentimiento en cualquier momento haciendo clic en el siguiente botón.
          </p>
        </div>
        <button 
          @click="openCookieSettings"
          class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-lg shadow-red-950/40 shrink-0"
        >
          Configurar Cookies
        </button>
      </div>

      <!-- Contenido Legal Estructurado -->
      <div class="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
        
        <section class="space-y-3">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">1. Identidad del Responsable del Tratamiento</h2>
          <p>
            <strong>CODEVS</strong> (en adelante, "la Empresa"), con domicilio principal en San Juan de Pasto, Departamento de Nariño, República de Colombia, y correo electrónico de contacto legal 
            <a href="mailto:comercial@codevs.dev" class="text-red-400 underline">comercial@codevs.dev</a>, es el responsable del tratamiento y recolección de los datos personales obtenidos a través de la plataforma web <a href="https://www.codevs.dev" class="text-red-400">www.codevs.dev</a>.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">2. ¿Qué son las Cookies y Cómo las Usamos?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. Permiten que la plataforma recuerde acciones y preferencias durante un periodo de tiempo, garantizando una navegación fluida, segura y personalizada.
          </p>
          <p>
            En CODEVS utilizamos cookies técnicas esenciales, analíticas y de rendimiento compatibles con <strong>Google Consent Mode v2</strong>, asegurando que ninguna etiqueta analítica no consentida recopile identificadores personales antes de tu aprobación expresa.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">3. Tipologías de Cookies Implementadas</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            <div class="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div class="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <i class="bi bi-shield-lock text-red-500"></i>
                Cookies Técnicas y Estrictamente Necesarias
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed">
                Requeridas para la seguridad del servidor, protección contra ataques CSRF/DDoS, renderizado de componentes SSR en Nuxt y memorización del estado de consentimiento. No pueden ser desactivadas.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div class="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <i class="bi bi-graph-up-arrow text-emerald-500"></i>
                Cookies Analíticas y de Rendimiento
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed">
                Permiten cuantificar visitantes y medir métricas vitales de Google (Core Web Vitals, LCP, CLS, INP) de manera anónima y agregada para optimizar los tiempos de carga en Pasto, Colombia y LATAM.
              </p>
            </div>

          </div>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">4. Tratamiento de Datos Personales (Ley 1581 de 2012)</h2>
          <p>
            Los datos facilitados voluntariamente por los usuarios a través del formulario de contacto o enlace de WhatsApp (nombre, correo electrónico, requerimientos técnicos) serán tratados bajo principios de legalidad, finalidad, libertad, veracidad y seguridad, con el exclusivo fin de responder a solicitudes comerciales, cotizaciones y prestación de servicios de software a medida.
          </p>
          <p>
            CODEVS no vende, alquila ni comparte bases de datos con terceros para fines publicitarios ajenos.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">5. Derechos del Titular (Derechos ARCO)</h2>
          <p>
            Conforme a la legislación colombiana y estándares internacionales, tienes derecho en todo momento a:
          </p>
          <ul class="list-disc pl-5 space-y-1.5 text-zinc-400 text-xs sm:text-sm">
            <li>Conocer, actualizar y rectificar tus datos personales.</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
            <li>Ser informado del uso que se le ha dado a tus datos.</li>
            <li>Revocar la autorización o solicitar la supresión de datos cuando no medie un deber legal o contractual de permanencia.</li>
          </ul>
          <p class="pt-2">
            Para ejercer cualquiera de estos derechos, puedes remitir una solicitud escrita a <strong class="text-white">comercial@codevs.dev</strong> con el asunto "Ejercicio de Derechos de Habeas Data".
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">6. Seguridad de la Información</h2>
          <p>
            Implementamos protocolos de cifrado SSL/TLS de 256 bits, cabeceras estrictas de seguridad HTTP y arquitectura de renderizado previa (SSG/Nitro) para salvaguardar la integridad de las comunicaciones y prevenir accesos no autorizados.
          </p>
        </section>

      </div>

      <!-- Pie de Página de Navegación -->
      <div class="mt-16 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors"
        >
          <i class="bi bi-arrow-left"></i>
          <span>Volver a la Página Principal</span>
        </NuxtLink>

        <a 
          href="https://wa.me/573138066800" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <i class="bi bi-whatsapp text-emerald-500"></i>
          <span>Canal de Soporte Directo</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Política de Privacidad & Tratamiento de Cookies | CODEVS',
  meta: [
    {
      name: 'description',
      content: 'Política de privacidad, cookies y tratamiento de datos personales de CODEVS bajo la Ley 1581 de 2012 y Google Consent Mode v2.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/politica-privacidad' }
  ]
});

const openCookieSettings = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }
};
</script>