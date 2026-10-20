<template>
  <footer id="footer" class="bg-[#08080a] text-white py-16 border-t border-white/5 relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

      <!-- Sobre CODEVS -->
      <div class="space-y-4">
        <a href="#hero" class="inline-flex items-center gap-2 group">
          <img src="/img/favicon.png" alt="CODEVS Logo" class="h-9 w-auto" />
          <span class="text-2xl font-display font-black tracking-wider text-white group-hover:text-red-500 transition-colors">CODEVS</span>
        </a>
        <p class="text-xs font-mono text-zinc-400">
          Estudio de Ingeniería de Software & Diseño Web de Alto Rendimiento en Pasto, Nariño.
        </p>
        <div class="space-y-1.5 text-xs font-mono text-zinc-400 pt-1">
          <p>Cl. 8b #15-125, San Juan de Pasto</p>
          <p>Geo: 1.2136° N, 77.2811° W</p>
          <p class="pt-2"><strong class="text-white">Celular / WA:</strong> <span class="text-zinc-300">+57 313 806 6800</span></p>
          <p><strong class="text-white">Email:</strong> <span class="text-zinc-300">comercial@codevs.dev</span></p>
        </div>
        <div class="flex space-x-3 pt-2">
          <a href="https://www.facebook.com/profile.php?id=61576300478505" target="_blank" rel="noopener noreferrer"
            class="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition duration-300"
            aria-label="Facebook">
            <i class="bi bi-facebook text-sm"></i>
          </a>
          <a href="https://www.instagram.com/codevs_dev/" target="_blank" rel="noopener noreferrer"
            class="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition duration-300"
            aria-label="Instagram">
            <i class="bi bi-instagram text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Links de navegación -->
      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-5 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          Navegación
        </h4>
        <ul class="space-y-2.5 text-sm font-mono text-zinc-400">
          <li><a href="/#hero" class="hover:text-white transition">/ Inicio</a></li>
          <li><a href="/#about" class="hover:text-white transition">/ Nosotros</a></li>
          <li><a href="/#services" class="hover:text-white transition">/ Servicios</a></li>
          <li><a href="/#portfolio" class="hover:text-white transition">/ Proyectos</a></li>
          <li><NuxtLink to="/blog" class="hover:text-red-400 text-red-500 transition font-bold">/ Blog de Tecnología</NuxtLink></li>
          <li><a href="/#contact" class="hover:text-white transition">/ Contacto</a></li>
        </ul>
      </div>

      <!-- Servicios Destacados -->
      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-5 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          Servicios en Pasto
        </h4>
        <ul class="space-y-2.5 text-sm font-mono text-zinc-400">
          <li><a href="#services" class="hover:text-white transition">Desarrollo de Software</a></li>
          <li><a href="#services" class="hover:text-white transition">Páginas Web Profesionales</a></li>
          <li><a href="#services" class="hover:text-white transition">Posicionamiento SEO Local</a></li>
          <li><a href="#services" class="hover:text-white transition">Aplicaciones Móviles</a></li>
          <li><a href="#services" class="hover:text-white transition">Integración de APIs</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="space-y-4">
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          Insights & Newsletter
        </h4>
        <p class="text-xs text-zinc-400 leading-relaxed">
          Recibe artículos sobre desarrollo web moderno, optimización de velocidad y tendencias digitales.
        </p>
        <form @submit.prevent class="flex flex-col space-y-2">
          <div class="flex">
            <input type="email" placeholder="correo@empresa.com" required
              class="w-full px-3 py-2.5 rounded-l-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-red-600" />
            <button type="submit" class="bg-[#E7000B] hover:bg-red-700 px-4 rounded-r-xl text-white text-xs font-mono font-bold transition">
              Unirme
            </button>
          </div>
        </form>
      </div>

    </div>

    <!-- Copyright -->
    <div class="mt-16 pt-8 border-t border-white/5 text-center text-xs font-mono text-zinc-500">
      <p>© <span>{{ currentYear }}</span> <a href="https://www.codevs.dev/" class="text-zinc-400 hover:text-white font-semibold">CODEVS</a>. San Juan de Pasto, Nariño, Colombia. Todos los derechos reservados.</p>
    </div>
  </footer>

  <!-- Scroll Top Button -->
  <a href="#hero" id="scroll-top"
    class="fixed right-6 bottom-6 w-11 h-11 bg-[#E7000B] hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl shadow-red-950/50 z-50 transition duration-300 hover:scale-105" aria-label="Volver arriba">
    <i class="bi bi-arrow-up text-white text-lg"></i>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
