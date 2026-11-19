<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. Hero Banner -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <div class="absolute top-0 left-1/3 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/en" class="hover:text-red-500 transition-colors">Home</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/en#services" class="hover:text-red-500 transition-colors">Solutions</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">Software &amp; Technology Consulting</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-6">

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]">
              Software Consulting
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                &amp; Architecture Advisory.
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Code audits, high-performance database tuning, legacy project rescue, and fractional CTO advisory. Led by <strong class="text-white font-semibold">senior software architects and cloud database specialists</strong> to de-risk your technology stack and scale your business.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-zinc-300">
              <div class="flex items-center gap-2.5">
                <i class="bi bi-mortarboard-fill text-red-500 text-base"></i>
                <span>Direct oversight by senior software architects</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-search text-red-500 text-base"></i>
                <span>Architecture &amp; bottleneck audit in 48 hours</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-life-preserver text-red-500 text-base"></i>
                <span>Rescue of stalled or abandoned codebases</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-shield-lock-fill text-red-500 text-base"></i>
                <span>Strict bilateral NDA protection</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappConsultoriaUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>Schedule Architecture Audit (48h)</span>
              </a>
              <NuxtLink to="/en/servicios/desarrollo-software"
                class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                Custom Development
              </NuxtLink>
            </div>
          </div>

          <!-- Console Column -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-red-950/30 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/50">
              
              <div class="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">CODEVS Advisory Console v4.2</span>
              </div>

              <div class="space-y-4 font-mono text-xs">
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">PostgreSQL Query Tuning:</span>
                  <span class="text-emerald-400 font-bold">Up to 90% Latency Drop</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Technical Debt Analysis:</span>
                  <span class="text-amber-400 font-bold">OWASP &amp; Architecture</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Executive Report Delivery:</span>
                  <span class="text-blue-400 font-bold">48 Business Hours</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Time-Zone Alignment:</span>
                  <span class="text-white font-bold">US EST / CST Live Sync</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">Why Software Consulting with CODEVS?</strong> Avoid burning six-figure budgets on flawed architectures or runaway cloud bills. We provide honest, math-driven engineering guidance without bureaucratic fluff.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Core Consulting Capabilities -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Specialized Consulting <span class="text-red-500">Practices</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Unlocking complex technical bottlenecks with academic rigor and commercial speed.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-file-code-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Codebase &amp; Architecture Audit</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Comprehensive static and dynamic analysis of your repositories: identifying anti-patterns, security holes, and scalability bottlenecks before production or due diligence.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Prioritized technical debt ledger</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Actionable refactoring roadmap</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>M&amp;A and VC technical due diligence</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-database-fill-gear text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">PostgreSQL &amp; Database Tuning</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Is your backend locking up under load? We inspect EXPLAIN query plans, reconstruct indexes, normalize schemas, and eliminate deadlock conditions.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Sub-15ms query execution benchmarks</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Memory pool and connection tuning</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Led by senior database architects</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-tools text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Stalled Project Rescue</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Did a previous agency or freelancer walk away from an unfinished or buggy build? We intervene, restore broken environments, fix critical bugs, and deliver to production.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Repository &amp; cloud access recovery</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Resolution of showstopper bugs</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Reliable completion under formal SLA</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-person-badge-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Fractional CTO &amp; Advisory (vCTO)</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Gain executive engineering leadership on demand. We sit with your founders, evaluate vendor proposals, select stacks, and mentor internal development teams.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Vendor &amp; architecture validation</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Technical roadmap governance</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Cost-efficient executive guidance</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-cloud-check-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Cloud FinOps &amp; Infrastructure Optimization</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Are your AWS or GCP bills spiraling out of control? We re-architect oversized clusters with Docker, right-sizing instances, and automated scaling to cut cloud spend by up to 50%.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Deep cloud cost analysis</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>High-availability 99.9% uptime setups</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Zero-downtime CI/CD pipelines</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-shield-shaded text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Security &amp; API Hardening</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              We audit API authentication, JWT handling, encryption at rest and in transit, and role-based access control (RBAC) to protect your systems from data breaches.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>TLS 1.3 &amp; AES-256 data protection</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Penetration testing &amp; vulnerability fixes</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Disaster recovery and failover policies</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- 3. FAQs -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx"
            class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 class="text-lg font-bold text-white mb-2 flex items-start gap-3">
              <i class="bi bi-question-circle-fill text-red-500 mt-0.5 shrink-0"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="text-zinc-400 text-sm leading-relaxed pl-7">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Final CTA -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight">
          De-Risk Your Technology with <span class="text-red-500">Expert Advisory</span>
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
          Connect directly with a principal software architect. We deliver your actionable audit roadmap within 48 hours.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappConsultoriaUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>Schedule Discovery Call on WhatsApp</span>
          </a>
          <NuxtLink to="/en#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Send Inquiry via Email
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { useJsonld } from '#imports';

const whatsappConsultoriaUrl = 'https://wa.me/573138066800?text=Hello%20CODEVS%2C%20I%20am%20interested%20in%20software%20consulting%20and%20architecture%20advisory.';

const faqs = [
  {
    q: 'How does an architecture and code audit work?',
    a: 'We sign a bilateral Non-Disclosure Agreement (NDA) and obtain read-only access to your code repository or schema. Within 48 hours, our senior architects run static and dynamic analysis, delivering a clear executive report with prioritized recommendations.'
  },
  {
    q: 'Can you rescue a stalled system if the previous developers are unreachable?',
    a: 'Yes, this is one of our primary advisory practices. We audit the orphaned codebase, reconstruct missing documentation, stabilize dependencies, and complete the project under a strict service-level agreement.'
  },
  {
    q: 'What is Fractional CTO advisory (vCTO)?',
    a: 'It gives your startup or enterprise high-level architectural leadership on a flexible monthly basis. We participate in technical board meetings, evaluate vendor proposals, select stacks, and mentor internal engineers without the overhead of an expensive full-time executive.'
  }
];

useHead({
  title: 'Software Consulting & Architecture Advisory | CODEVS #1',
  meta: [
    { 
      name: 'description', 
      content: 'Senior software consulting, code audits, PostgreSQL tuning, legacy project rescue, and fractional CTO advisory by senior software architects and database specialists.' 
    },
    { 
      name: 'keywords', 
      content: 'software consulting, technology advisory, code audit, postgresql tuning, fractional cto, tech due diligence, nearshore consulting, codevs' 
    },
    { property: 'og:title', content: 'Software Consulting & Architecture Advisory | CODEVS #1' },
    { property: 'og:description', content: 'Code audits, database optimization, and fractional CTO advisory by senior software architects.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/2.png' },
    { property: 'og:url', content: 'https://www.codevs.dev/en/servicios/consultoria-software' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Consulting & Architecture Advisory | CODEVS #1' },
    { name: 'twitter:description', content: 'De-risk your technology stack with senior software architects and database leads.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/en/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/servicios/consultoria-software' }
  ]
});

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'CODEVS - Software Consulting & Enterprise Advisory',
    'image': 'https://www.codevs.dev/img/codevs.png',
    '@id': 'https://www.codevs.dev/#consultoria-software-en',
    'url': 'https://www.codevs.dev/en/servicios/consultoria-software',
    'telephone': '+57 3138066800',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Pasto',
      'addressRegion': 'Nariño',
      'postalCode': '520001',
      'addressCountry': 'CO'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Software Consulting & Architecture Advisory',
    'serviceType': 'IT Consulting & Code Audits',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CODEVS',
      'telephone': '+57 3138066800',
      'url': 'https://www.codevs.dev'
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'Colombia' }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  }
]);
</script>

<style scoped>
section {
  background-color: #000000;
}
</style>
