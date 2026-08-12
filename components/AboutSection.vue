<template>
  <section id="about" class="about section bg-zinc-950 text-white relative overflow-hidden py-20">
    <div class="relative mx-auto max-w-7xl px-4 z-10">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        
        <!-- Columna izquierda -->
        <div class="lg:w-5/12 space-y-6" data-aos="fade-up">
          <h3 class="text-3xl sm:text-4xl font-extrabold text-white">Nosotros</h3>
          <div class="w-16 h-1 bg-red-600"></div>
          <p class="text-gray-300 font-light leading-relaxed text-justify text-sm sm:text-base">
            <strong class="text-white font-semibold">CODEVS</strong> es una empresa dedicada al desarrollo de soluciones tecnológicas personalizadas que impulsan a las empresas en Nariño hacia el éxito. Convertimos ideas en productos digitales de alto impacto que marcan la diferencia. 
          </p>
          <p class="text-gray-300 font-light leading-relaxed text-justify text-sm sm:text-base">
            Creemos en la innovación constante y en la excelencia técnica. Nuestro equipo multidisciplinario combina creatividad y pasión para construir software y portales web optimizados para Google (SEO) que generan valor real a tu marca en San Juan de Pasto.
          </p>
        </div>

        <!-- Columna derecha -->
        <div class="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="200">
          
          <!-- Visión -->
          <div class="relative bg-zinc-900/60 border border-zinc-800 hover:border-red-600 p-6 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1">
            <i class="bi bi-briefcase text-4xl text-red-500 mb-4 block"></i>
            <h4 class="text-xl font-bold text-white mb-2">Visión</h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Ser líderes en el desarrollo de tecnología innovadora, brindando herramientas avanzadas a las empresas de Pasto y el mundo para alcanzar su máximo potencial digital.
            </p>
          </div>

          <!-- Misión -->
          <div class="relative bg-zinc-900/60 border border-zinc-800 hover:border-red-600 p-6 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1">
            <i class="bi bi-gem text-4xl text-red-500 mb-4 block"></i>
            <h4 class="text-xl font-bold text-white mb-2">Misión</h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Empoderar a nuestros clientes en Nariño mediante soluciones de software eficientes, seguras, escalables y adaptables con altos estándares de calidad.
            </p>
          </div>

          <!-- Frase -->
          <div class="col-span-1 md:col-span-2 text-center pt-6">
            <h4 class="border-l-4 border-red-600 pl-6 italic text-lg text-gray-300 max-w-2xl mx-auto">
              "Nuestro compromiso es entregar software y páginas web de calidad que transformen tu negocio en un caso de éxito."
            </h4>
          </div>
        </div>
      </div>
      
      <!-- Rocket Animation Scroll -->
      <RocketScroll />
    </div>
  </section>
</template>

<script setup>
import RocketScroll from '~/components/ui/RocketScroll.vue';
</script>
