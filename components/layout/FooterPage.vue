<template>
  <footer id="footer" class="bg-black text-white py-16 border-t border-zinc-900">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      <!-- Sobre CODEVS -->
      <div class="space-y-4">
        <a href="#hero" class="flex items-center text-3xl font-extrabold text-white">
          <span class="text-red-600">CODEVS</span>
        </a>
        <div class="space-y-2 text-sm text-gray-400">
          <p>Cl. 8b #15-125,</p>
          <p>San Juan de Pasto, Nariño</p>
          <p class="pt-3"><strong class="text-white">Celular / WA:</strong> <span>+57 313 806 6800</span></p>
          <p><strong class="text-white">Email:</strong> <span>comercial@codevs.dev</span></p>
        </div>

        <!-- Botón de Contacto Rápido por WhatsApp -->
        <div class="pt-1">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 group">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>Contactar por WhatsApp</span>
          </a>
        </div>

        <div class="flex space-x-3 pt-2">
          <a href="https://www.facebook.com/profile.php?id=61576300478505" target="_blank" rel="noopener noreferrer"
            class="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook">
            <i class="bi bi-facebook text-base"></i>
          </a>
          <a href="https://www.instagram.com/codevs_dev/" target="_blank" rel="noopener noreferrer"
            class="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram">
            <i class="bi bi-instagram text-base"></i>
          </a>
        </div>
      </div>

      <!-- Links de navegación -->
      <div>
        <h4 class="text-base font-bold text-white mb-6 border-l-2 border-red-600 pl-3">Navegación</h4>
        <ul class="space-y-3 text-sm text-gray-400">
          <li><a href="/#hero" class="hover:text-red-500 transition">Inicio</a></li>
          <li><a href="/#about" class="hover:text-red-500 transition">Nosotros</a></li>
          <li><a href="/#services" class="hover:text-red-500 transition">Servicios</a></li>
          <li><a href="/#portfolio" class="hover:text-red-500 transition">Proyectos</a></li>
          <li><NuxtLink to="/blog" class="hover:text-red-500 text-red-500 transition font-semibold">Blog de Tecnología</NuxtLink></li>
          <li><a href="/#contact" class="hover:text-red-500 transition">Contacto</a></li>
        </ul>
      </div>

      <!-- Servicios Destacados con Enlaces Directos de Autoridad SEO -->
      <div>
        <h4 class="text-base font-bold text-white mb-6 border-l-2 border-red-600 pl-3">Servicios Digitales</h4>
        <ul class="space-y-3 text-sm text-gray-400">
          <li><NuxtLink to="/servicios/desarrollo-software" class="hover:text-red-500 transition">Desarrollo de Software a Medida</NuxtLink></li>
          <li><NuxtLink to="/servicios/desarrollo-web" class="hover:text-red-500 transition">Páginas Web Profesionales</NuxtLink></li>
          <li><NuxtLink to="/servicios/seo-avanzado" class="hover:text-red-500 transition">Posicionamiento SEO Local Google #1</NuxtLink></li>
          <li><NuxtLink to="/servicios/apps-moviles" class="hover:text-red-500 transition">Aplicaciones Móviles iOS & Android</NuxtLink></li>
          <li><NuxtLink to="/servicios/integraciones-apis" class="hover:text-red-500 transition">Integración de Pasarelas & APIs</NuxtLink></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="space-y-4">
        <h4 class="text-base font-bold text-white mb-2 border-l-2 border-red-600 pl-3">Newsletter</h4>
        <p class="text-sm text-gray-400">
          Recibe artículos sobre desarrollo web moderno, optimización de velocidad y tendencias digitales.
        </p>
        <form @submit.prevent class="flex flex-col space-y-2">
          <div class="flex">
            <input type="email" placeholder="correo@empresa.com" required
              class="w-full px-3.5 py-2.5 rounded-l-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600" />
            <button type="submit" class="bg-[#E7000B] hover:bg-red-700 px-5 rounded-r-xl text-white text-sm font-semibold transition">
              Unirme
            </button>
          </div>
        </form>
      </div>

    </div>

    <!-- Copyright & Enlaces Legales para Google Trust & E-E-A-T -->
    <div class="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
      <p>© <span>{{ currentYear }}</span> <a href="https://www.codevs.dev/" class="text-gray-400 hover:text-white font-semibold">CODEVS</a>. San Juan de Pasto, Nariño, Colombia. Todos los derechos reservados.</p>
      
      <div class="flex flex-wrap items-center gap-4 text-gray-400">
        <NuxtLink to="/politica-privacidad" class="hover:text-red-500 transition-colors">
          Privacidad & Datos
        </NuxtLink>
        <span>•</span>
        <button type="button" @click="openCookieSettings" class="hover:text-red-500 transition-colors cursor-pointer">
          Preferencias de Cookies
        </button>
        <span>•</span>
        <a href="/sitemap.xml" target="_blank" class="hover:text-red-500 transition-colors">
          Sitemap
        </a>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Action -->
  <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
    class="fixed left-6 bottom-6 flex items-center gap-2.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/60 z-50 transition duration-300 hover:scale-105 group"
    aria-label="Contactar por WhatsApp">
    <i class="bi bi-whatsapp text-lg"></i>
    <span class="text-xs font-semibold hidden sm:inline">Chatear por WhatsApp</span>
  </a>

  <!-- Scroll Top Button -->
  <a href="#hero" id="scroll-top"
    class="fixed right-6 bottom-6 w-11 h-11 bg-[#E7000B] hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl shadow-red-950/50 z-50 transition duration-300 hover:scale-105" aria-label="Volver arriba">
    <i class="bi bi-arrow-up text-white text-lg"></i>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const whatsappMessage = encodeURIComponent(
  'Hola CODEVS, me comunico desde su sitio web codevs.dev. Estoy interesado en cotizar un servicio para mi negocio (Desarrollo Web / Software a la Medida / SEO). ¿Me podrían brindar más información?'
);
const whatsappUrl = `https://wa.me/573138066800?text=${whatsappMessage}`;

const openCookieSettings = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }
};
</script>
