<template>
  <footer id="footer" class="bg-white text-[#1B1B1F] pt-20 pb-12 border-t border-[#1B1B1F]/10 overflow-hidden">
    <div class="max-w-[1340px] mx-auto px-5 sm:px-8">

      <!-- 4 Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#1B1B1F]/10">

        <!-- Col 1: Studio Brand & Identity -->
        <div class="lg:col-span-4 space-y-4">
          <NuxtLink to="/#hero" class="inline-flex items-center gap-2">
            <span class="text-3xl font-semibold tracking-[-0.05em] text-[#1B1B1F] lowercase leading-none">codevs</span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#FFF480] border border-[#1B1B1F] inline-block"></span>
          </NuxtLink>

          <p class="text-sm text-[#6A7077] font-light leading-relaxed max-w-sm">
            Estudio de diseño digital, desarrollo de páginas web y software a la medida en San Juan de Pasto, Nariño, Colombia. Soluciones concebidas sin plantillas ni atajos.
          </p>

          <div class="space-y-1.5 text-xs text-[#6A7077] font-mono pt-2">
            <p>Cl. 8b #15-125, Pasto, Nariño</p>
            <p>+57 3138066800 • comercial@codevs.dev</p>
          </div>

          <div class="flex items-center gap-2.5 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61576300478505"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-[#F9FAFA] hover:bg-[#FFF480] text-[#1B1B1F] border border-[#1B1B1F]/20 hover:border-[#1B1B1F] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <i class="bi bi-facebook text-sm"></i>
            </a>
            <a
              href="https://www.instagram.com/codevs_dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-[#F9FAFA] hover:bg-[#FFF480] text-[#1B1B1F] border border-[#1B1B1F]/20 hover:border-[#1B1B1F] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="lg:col-span-2 space-y-4">
          <span class="text-xs font-mono uppercase tracking-wider text-[#1B1B1F] font-semibold block">Navegación</span>
          <ul class="space-y-2.5 text-sm font-light text-[#6A7077]">
            <li><a href="/#hero" class="hover:text-[#1B1B1F] hover:underline transition">Inicio</a></li>
            <li><a href="/#about" class="hover:text-[#1B1B1F] hover:underline transition">Quiénes Somos</a></li>
            <li><a href="/#services" class="hover:text-[#1B1B1F] hover:underline transition">Servicios</a></li>
            <li><a href="/#portfolio" class="hover:text-[#1B1B1F] hover:underline transition">Casos de Éxito</a></li>
            <li><NuxtLink to="/blog" class="hover:text-[#1B1B1F] hover:underline transition">Blog &amp; Tendencias</NuxtLink></li>
            <li><a href="/#contact" class="hover:text-[#1B1B1F] hover:underline transition">Contacto</a></li>
          </ul>
        </div>

        <!-- Col 3: Services Links -->
        <div class="lg:col-span-3 space-y-4">
          <span class="text-xs font-mono uppercase tracking-wider text-[#1B1B1F] font-semibold block">Especialidades</span>
          <ul class="space-y-2.5 text-sm font-light text-[#6A7077]">
            <li><NuxtLink to="/servicios/desarrollo-software" class="hover:text-[#1B1B1F] hover:underline transition">Desarrollo de Software</NuxtLink></li>
            <li><NuxtLink to="/servicios/desarrollo-web" class="hover:text-[#1B1B1F] hover:underline transition">Páginas Web Profesionales</NuxtLink></li>
            <li><NuxtLink to="/servicios/diseno-ux-ui" class="hover:text-[#1B1B1F] hover:underline transition">Diseño de Interfaces UX/UI</NuxtLink></li>
            <li><NuxtLink to="/servicios/integraciones-apis" class="hover:text-[#1B1B1F] hover:underline transition">Integración de Sistemas APIs</NuxtLink></li>
            <li><NuxtLink to="/servicios/apps-moviles" class="hover:text-[#1B1B1F] hover:underline transition">Aplicaciones Móviles</NuxtLink></li>
            <li><NuxtLink to="/servicios/seo-avanzado" class="hover:text-[#1B1B1F] hover:underline transition">Posicionamiento SEO Local</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Newsletter -->
        <div class="lg:col-span-3 space-y-4">
          <span class="text-xs font-mono uppercase tracking-wider text-[#1B1B1F] font-semibold block">Studio Dispatch</span>
          <p class="text-xs text-[#6A7077] font-light leading-relaxed">
            Recibe insights sobre diseño UX/UI, optimización para Google y tendencias en ingeniería web.
          </p>
          <form @submit.prevent class="space-y-2">
            <input
              type="email"
              placeholder="tu@correo.com"
              required
              class="w-full p-3 bg-[#F9FAFA] border border-[#1B1B1F]/20 rounded-[14px] text-xs font-light text-[#1B1B1F] placeholder-[#6A7077]/60 focus:outline-none focus:border-[#1B1B1F]"
            />
            <button
              type="submit"
              class="w-full py-2.5 px-4 bg-[#1B1B1F] hover:bg-[#FFF480] text-white hover:text-[#1B1B1F] border border-[#1B1B1F] rounded-[14px] text-xs font-medium transition-colors"
            >
              Suscribirme
            </button>
          </form>
        </div>

      </div>

      <!-- Monumental Monos-style Bottom Wordmark -->
      <div class="pt-12 pb-6 text-center select-none overflow-hidden">
        <div class="text-[17vw] sm:text-[18vw] font-semibold tracking-[-0.07em] leading-[0.72] text-[#1B1B1F] lowercase text-center">
          codevs<span class="text-[#FFF480] drop-shadow-[2px_2px_0px_#1B1B1F]">.</span>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="pt-6 border-t border-[#1B1B1F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A7077] font-light">
        <p>© {{ currentYear }} CODEVS. Todos los derechos reservados. San Juan de Pasto, Nariño, Colombia.</p>
        <div class="flex items-center gap-4">
          <a href="/#contact" class="hover:text-[#1B1B1F] hover:underline">Política de Privacidad y Tratamiento de Datos</a>
        </div>
      </div>

    </div>

    <!-- Scroll Top Button -->
    <a
      href="#hero"
      class="fixed right-6 bottom-6 w-11 h-11 bg-[#FFF480] hover:bg-[#DBFF9C] text-[#1B1B1F] border border-[#1B1B1F] rounded-full flex items-center justify-center shadow-[3px_3px_0px_#1B1B1F] z-40 transition-all duration-300 hover:-translate-y-1"
      aria-label="Volver arriba"
    >
      <i class="bi bi-arrow-up text-sm font-bold"></i>
    </a>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
