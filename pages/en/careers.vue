<template>
  <div class="bg-[#07070a] text-white min-h-screen pt-8 pb-24 relative overflow-hidden">
    <!-- Ambient Studio Mesh Glow (Globant Studio Aesthetic) -->
    <div class="absolute top-10 -left-40 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[180px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-xs text-zinc-500 mb-6" aria-label="Breadcrumb">
        <NuxtLink to="/en" class="hover:text-red-400 transition-colors">Home</NuxtLink>
        <span>/</span>
        <span class="text-zinc-300 font-medium">Careers</span>
        <span>/</span>
        <span class="text-red-500 font-bold">Engineering Studios</span>
      </nav>

      <!-- Integrated Careers Core Component -->
      <CareersSection />

      <!-- Transparent Hiring Roadmap (Globant Style) -->
      <section class="mt-20 pt-16 border-t border-white/10">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-zinc-300 mb-4">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span>HIRING ROADMAP</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-white">Our Fast, Engineering-First Hiring Process</h2>
          <p class="text-zinc-400 text-sm sm:text-base mt-2">
            We respect your time. No 8-week corporate interviews. Our process takes 3 to 7 business days, and you talk directly to principal software architects, not non-technical gatekeepers.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 font-mono">01</span>
            <h3 class="text-base font-bold text-white">Resume & Portfolio Review</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              We inspect your background, GitHub repos, or shipped products. We reply within 48 business hours.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 font-mono">02</span>
            <h3 class="text-base font-bold text-white">Technical Deep-Dive (25 min)</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              An informal, high-level conversation with an Architecture Lead about systems design, values, and engineering culture.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 font-mono">03</span>
            <h3 class="text-base font-bold text-white">Real-World Practical Case</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Zero synthetic whiteboard quizzes. A real-world architectural or implementation challenge reflecting actual client work.
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 space-y-3 hover:border-red-500/40 transition">
            <span class="text-3xl font-black text-red-500 font-mono">04</span>
            <h3 class="text-base font-bold text-white">Offer & Onboarding</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Clear compensation terms, agreement sign-off, and rapid integration into your dedicated engineering squad.
            </p>
          </div>
        </div>
      </section>

      <!-- Switcher to Spanish Version -->
      <div class="mt-16 text-center pt-8 border-t border-white/5">
        <NuxtLink to="/carreras" class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition">
          <span>🇨🇴 ¿Buscas la versión en Español? Ver Carreras en /carreras</span>
          <i class="bi bi-arrow-right"></i>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import CareersSection from '~/components/CareersSection.vue';

definePageMeta({
  alias: ['/en/carreras']
});

useHead({
  title: 'Careers at CODEVS | Senior Software & AI Engineering Studios',
  meta: [
    {
      name: 'description',
      content: 'Join CODEVS Studios. We are hiring senior full-stack architects, PostgreSQL cloud database engineers, and autonomous AI developers. 100% remote across LATAM with US time-zone overlap.'
    },
    { property: 'og:title', content: 'Careers at CODEVS | Senior Engineering Studios' },
    { property: 'og:description', content: 'Be part of an elite squad of senior software architects designing enterprise cloud systems and AI for US and global leaders.' },
    { property: 'og:url', content: 'https://www.codevs.dev/en/careers' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/en/careers' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/careers' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/carreras' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/carreras' }
  ]
});
</script>
