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
          <p class="pt-3"><strong>Celular:</strong> <span>+57 3138066800</span></p>
          <p><strong>Email:</strong> <span>comercial@codevs.dev</span></p>
        </div>
        <div class="flex space-x-4 pt-2">
          <a href="https://www.facebook.com/profile.php?id=61576300478505" target="_blank"
            class="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition duration-300">
            <i class="bi bi-facebook text-lg"></i>
          </a>
          <a href="https://www.instagram.com/codevs_dev/" target="_blank"
            class="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition duration-300">
            <i class="bi bi-instagram text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Links de navegación -->
      <div>
        <h4 class="text-lg font-bold text-white mb-6 border-l-2 border-red-600 pl-3">Navegación</h4>
        <ul class="space-y-3 text-sm text-gray-400">
          <li><a href="#hero" class="hover:text-red-500 transition">Inicio</a></li>
          <li><a href="#about" class="hover:text-red-500 transition">Nosotros</a></li>
          <li><a href="#services" class="hover:text-red-500 transition">Servicios</a></li>
          <li><a href="#portfolio" class="hover:text-red-500 transition">Proyectos</a></li>
          <li><a href="#contact" class="hover:text-red-500 transition">Contacto</a></li>
        </ul>
      </div>

      <!-- Servicios Destacados -->
      <div>
        <h4 class="text-lg font-bold text-white mb-6 border-l-2 border-red-600 pl-3">Servicios en Pasto</h4>
        <ul class="space-y-3 text-sm text-gray-400">
          <li><a href="#services" class="hover:text-red-500 transition">Desarrollo de Software</a></li>
          <li><a href="#services" class="hover:text-red-500 transition">Páginas Web Profesionales</a></li>
          <li><a href="#services" class="hover:text-red-500 transition">Posicionamiento SEO Local</a></li>
          <li><a href="#services" class="hover:text-red-500 transition">Desarrollo de Aplicaciones Móviles</a></li>
          <li><a href="#services" class="hover:text-red-500 transition">Integración de Sistemas APIs</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="space-y-4">
        <h4 class="text-lg font-bold text-white mb-2 border-l-2 border-red-600 pl-3">Newsletter</h4>
        <p class="text-sm text-gray-400">
          Recibe novedades tecnológicas y promociones de software directamente en tu buzón.
        </p>
        <form @submit.prevent class="flex flex-col space-y-2">
          <div class="flex">
            <input type="email" placeholder="Tu Correo Electrónico" required
              class="w-full p-3 rounded-l-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600" />
            <button type="submit" class="bg-red-600 hover:bg-red-700 px-4 rounded-r-lg text-white text-sm font-semibold transition">
              Suscribirse
            </button>
          </div>
        </form>
      </div>

    </div>

    <!-- Copyright -->
    <div class="mt-16 pt-8 border-t border-zinc-900 text-center text-xs text-gray-600">
      <p>© <span>{{ currentYear }}</span> <a href="https://www.codevs.dev/" class="text-gray-400 hover:text-white font-semibold">CODEVS</a>. Todos los derechos reservados.</p>
    </div>
  </footer>

  <!-- Scroll Top Button -->
  <a href="#" id="scroll-top"
    class="fixed right-6 bottom-6 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl z-50 transition duration-300 hover:scale-110">
    <i class="bi bi-arrow-up text-white text-xl"></i>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
