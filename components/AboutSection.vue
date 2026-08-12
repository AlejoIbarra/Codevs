<template>
  <section id="about" class="about section bg-zinc-950 text-white relative overflow-hidden py-24">
    
    <!-- Efecto de gradiente de iluminación de fondo -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Columna izquierda: Información corporativa Premium -->
        <div class="lg:w-5/12 space-y-8" data-aos="fade-up">
          <div class="space-y-3">
            <span class="text-red-500 font-bold uppercase tracking-widest text-xs">Quiénes Somos</span>
            <h3 class="text-4xl sm:text-5xl font-black text-white leading-tight">Nos Apasiona<br>La Tecnología</h3>
            <div class="w-16 h-1.5 bg-red-600 rounded-full"></div>
          </div>
          <p class="text-zinc-400 font-light leading-relaxed text-justify text-sm sm:text-base">
            En <strong class="text-white font-semibold">CODEVS</strong> desarrollamos soluciones tecnológicas de alto nivel para empresas decididas a destacar. Creamos productos digitales eficientes, modernos e interactivos a la medida de tus necesidades.
          </p>
          <p class="text-zinc-400 font-light leading-relaxed text-justify text-sm sm:text-base">
            Nuestro equipo de programadores combina diseño UX/UI de vanguardia y metodologías ágiles para construir portales rápidos y optimizados para Google (SEO) en San Juan de Pasto y el departamento de Nariño.
          </p>
        </div>

        <!-- Columna derecha: Tarjetas Glassmorphism con bordes degradados -->
        <div class="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="200">
          
          <!-- Visión -->
          <div class="relative bg-zinc-900/40 border border-zinc-800/80 hover:border-red-600/30 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 group backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div class="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/10 mb-6">
              <i class="bi bi-briefcase text-2xl text-red-500"></i>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Visión</h4>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Posicionarnos como el referente tecnológico principal en el sur de Colombia, entregando plataformas web modernas y aplicaciones móviles de clase mundial listas para triunfar en internet.
            </p>
          </div>

          <!-- Misión -->
          <div class="relative bg-zinc-900/40 border border-zinc-800/80 hover:border-red-600/30 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 group backdrop-blur-md">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div class="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/10 mb-6">
              <i class="bi bi-gem text-2xl text-red-500"></i>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">Misión</h4>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Empoderar a las empresas de Pasto y Nariño mediante software robusto, páginas web veloces y asesorías en SEO que multipliquen su visibilidad y facturación online.
            </p>
          </div>

          <!-- Cita Premium -->
          <div class="col-span-1 md:col-span-2 text-center pt-8">
            <p class="border-l-4 border-red-600 pl-6 italic text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
              "El éxito digital no es un accidente, es el resultado de combinar código limpio, diseño centrado en el usuario y una estrategia SEO ganadora."
            </p>
          </div>
        </div>
      </div>
      
      <!-- Rocket Animation Scroll original -->
      <RocketScroll />
    </div>
  </section>
</template>

<script setup>
import RocketScroll from '~/components/ui/RocketScroll.vue';
</script>
