<template>
  <div class="bg-[#07070a] text-white min-h-screen pt-8 pb-24 relative overflow-hidden">
    <!-- Ambient Studio Mesh Glow (Globant Aesthetic) -->
    <div class="absolute top-10 -left-40 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[180px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-zinc-500 mb-6" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-red-400 transition-colors">Inicio</NuxtLink>
        <span>/</span>
        <span class="text-zinc-300 font-medium">Trabaja con Nosotros</span>
        <span>/</span>
        <span class="text-red-500 font-bold">Carreras CODEVS</span>
      </nav>

      <!-- Integrated Careers Core Component -->
      <CareersSection />

      <!-- Proceso de Selección Ágil (Globant Style) -->
      <section class="mt-20 pt-16 border-t border-white/10">
        <div class="max-w-3xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Cómo es nuestro proceso de contratación</h2>
          <p class="text-zinc-400 text-sm sm:text-base mt-2">
            Odiamos los procesos burocráticos de 8 semanas. Nuestro proceso dura entre 3 y 7 días hábiles y hablas directamente con líderes técnicos y arquitectos de software.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 tracking-tighter">01</span>
            <h3 class="text-base font-bold text-white">Revisión de CV & Portafolio</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Revisamos tu experiencia, repositorios de GitHub o proyectos reales. Respondemos en menos de 48 horas hábiles.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 tracking-tighter">02</span>
            <h3 class="text-base font-bold text-white">Diálogo Técnico (25 min)</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Conversación técnica informal con un Líder de Arquitectura para conocer tu visión de software y afinidad con el equipo.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 tracking-tighter">03</span>
            <h3 class="text-base font-bold text-white">Prueba Práctica Real</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Nada de preguntas capciosas de pizarrón. Un caso práctico real de arquitectura o código según tu stack tecnológico.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 tracking-tighter">04</span>
            <h3 class="text-base font-bold text-white">Oferta & Onboarding</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Propuesta económica formal clara, firma de contrato y bienvenida a tu squad de ingeniería.
            </p>
          </div>
        </div>
      </section>

      <!-- Switcher to English Version -->
      <div class="mt-16 text-center pt-8 border-t border-white/5">
        <NuxtLink to="/en/careers" class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition">
          <span>🇺🇸 Looking for the English version? View Careers at /en/careers</span>
          <i class="bi bi-arrow-right"></i>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import CareersSection from '~/components/CareersSection.vue';

definePageMeta({
  alias: ['/trabaja-con-nosotros']
});

useHead({
  title: 'Trabaja con Nosotros | Carreras de Ingeniería de Software & IA • CODEVS',
  meta: [
    {
      name: 'description',
      content: 'Únete a CODEVS Studios. Buscamos ingenieros senior de software, desarrolladores full-stack, arquitectos de bases de datos PostgreSQL y especialistas en IA. 100% Remoto en LATAM.'
    },
    { property: 'og:title', content: 'Trabaja con Nosotros | Carreras de Ingeniería • CODEVS' },
    { property: 'og:description', content: 'Forma parte de un equipo de ingeniería senior que construye software de misión crítica para Estados Unidos y América Latina.' },
    { property: 'og:url', content: 'https://www.codevs.dev/carreras' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/carreras' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/carreras' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/careers' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/carreras' }
  ]
});
</script>
