<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. Regional Hero Banner -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <div class="absolute top-0 left-1/3 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/en" class="hover:text-red-500 transition-colors">Home</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/en/servicios/desarrollo-software" class="hover:text-red-500 transition-colors">Software Engineering</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">{{ regionData.breadcrumbName }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/40 backdrop-blur-xl shadow-lg shadow-red-950/20">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-red-400 font-extrabold uppercase tracking-widest text-xs">
                {{ regionData.badge }}
              </span>
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]">
              {{ regionData.h1Prefix }}
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                {{ regionData.h1Highlight }}
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              {{ regionData.heroDescription }}
            </p>

            <!-- Key Points -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-zinc-300">
              <div v-for="(point, i) in regionData.keyPoints" :key="i" class="flex items-center gap-2.5">
                <i class="bi bi-check-circle-fill text-red-500 text-base"></i>
                <span>{{ point }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>{{ regionData.ctaButtonText }}</span>
              </a>
              <NuxtLink to="/en/servicios/desarrollo-software#coverage"
                class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                Other Regions
              </NuxtLink>
            </div>
          </div>

          <!-- Console & Stats -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-red-950/30 p-6 sm:p-8 backdrop-blur-xl">
              <div class="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">{{ regionData.cardTag }}</span>
              </div>

              <div class="space-y-4 font-mono text-xs">
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Delivery Scope:</span>
                  <span class="text-white font-bold">{{ regionData.regionName }}</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Prototype Turnaround:</span>
                  <span class="text-amber-400 font-bold">7 Business Days</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">IP Ownership:</span>
                  <span class="text-emerald-400 font-bold">100% Proprietary</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Time-Zone Alignment:</span>
                  <span class="text-blue-400 font-bold">{{ regionData.supportMode }}</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">CODEVS Guarantee:</strong> Scalable enterprise software crafted by senior software architects and database leads with zero licensing lock-in and seamless cross-border delivery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Targeted Industry Sectors -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Specialized Solutions for <span class="text-red-500">{{ regionData.regionName }}</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Engineered to overcome industry bottlenecks with high-throughput cloud architectures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(sector, idx) in regionData.sectors" :key="idx"
            class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i :class="sector.icon"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ sector.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ sector.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 3. Regional Cross-Navigation -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 class="text-2xl sm:text-4xl font-black text-white">Other Delivery Hubs &amp; Regions</h2>
            <p class="text-zinc-400 text-sm sm:text-base mt-2">Explore our engineering capabilities across Colombia and international nearshore hubs.</p>
          </div>
          <NuxtLink to="/en/servicios/desarrollo-software" class="text-red-400 hover:underline text-sm font-semibold mt-4 md:mt-0">
            View All Software Solutions →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <NuxtLink v-for="(item, key) in otherRegions" :key="key"
            :to="`/en/servicios/desarrollo-software/${key}`"
            class="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all text-center">
            {{ item.name }}
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- 4. FAQs -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in regionData.faqs" :key="idx"
            class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-2.5">
              <i class="bi bi-question-circle-fill text-red-500 mt-0.5 shrink-0"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="text-zinc-400 text-sm leading-relaxed pl-7">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Start Your Software Project in <span class="text-red-500">{{ regionData.regionName }}</span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
          Connect directly with a principal engineer at CODEVS. We evaluate your workflow and deliver an architectural prototype proposal within 48 hours.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>{{ regionData.ctaButtonText }}</span>
          </a>
          <NuxtLink to="/en#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Contact Engineering Team
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useRoute, useHead } from '#imports';
import { useJsonld } from '#imports';
import { computed } from 'vue';

const route = useRoute();
const currentRegionKey = computed(() => {
  const p = route.params.region;
  return typeof p === 'string' ? p.toLowerCase() : 'pasto';
});

const regionsMap = {
  pasto: {
    regionName: 'Pasto, Nariño (HQ)',
    breadcrumbName: 'Pasto',
    badge: 'Engineering Headquarters • San Juan de Pasto',
    h1Prefix: 'Custom Software & Database Engineering in',
    h1Highlight: 'Pasto, Nariño.',
    heroDescription: 'The premier software engineering firm in San Juan de Pasto. Custom ERPs, web platforms, CRMs, and relational databases for regional enterprises. Built by senior engineers and cloud database architects with in-person delivery.',
    ctaButtonText: 'Schedule Pasto Consultation / WhatsApp',
    cardTag: 'Pasto HQ • Nariño',
    supportMode: 'On-Site & High-Touch Virtual',
    keyPoints: [
      'Physical engineering headquarters in Pasto',
      'Senior engineers and database architecture specialists',
      'Proven case studies like Sin Huellas LegalTech',
      'Working functional prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-briefcase', title: 'LegalTech & Claims Automation', desc: 'Case management systems, deadline calculators, and automated legal filings.' },
      { icon: 'bi bi-hospital', title: 'Clinics & Healthcare Providers', desc: 'Electronic medical records, scheduling, and RIPS medical billing compliance.' },
      { icon: 'bi bi-truck', title: 'Cross-Border Commerce & Distribution', desc: 'Multi-warehouse inventory and logistics connecting Pasto, Ipiales, and Ecuador.' }
    ],
    faqs: [
      { q: 'Can we schedule in-person engineering sessions in Pasto?', a: 'Yes. Our headquarters is located in Pasto, enabling direct face-to-face requirements workshops, sprint reviews, and on-site training for your staff.' }
    ],
    metaTitle: 'Custom Software Development in Pasto, Nariño | CODEVS #1',
    metaDesc: 'Leading custom software development and database engineering firm in Pasto, Nariño. Custom ERPs, PostgreSQL architectures, and cloud platforms.',
    keywords: 'software development pasto, software engineering pasto narino, custom erp pasto, software company pasto, codevs',
    geoLat: 1.2136,
    geoLong: -77.2811,
    postalCode: '520001'
  },
  narino: {
    regionName: 'Department of Nariño',
    breadcrumbName: 'Nariño',
    badge: 'Departmental Delivery • Nariño',
    h1Prefix: 'Enterprise Software Engineering in',
    h1Highlight: 'Nariño (Ipiales, Tumaco & Beyond).',
    heroDescription: 'Robust software architectures for agribusiness, cross-border logistics in Ipiales, maritime operations in Tumaco, and enterprises throughout Nariño.',
    ctaButtonText: 'Consult Project in Nariño',
    cardTag: 'Nariño • Full Coverage',
    supportMode: 'Departmental On-Site & Remote',
    keyPoints: [
      'Cross-border trade systems in Ipiales',
      'Specialty coffee traceability for northern Nariño',
      'Full DIAN electronic invoicing compatibility',
      'Working prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-globe-americas', title: 'Ipiales - Rumichaca International Trade', desc: 'Customs tracking, currency reconciliation, and binational invoicing.' },
      { icon: 'bi bi-flower1', title: 'High-Altitude Specialty Coffee', desc: 'Batch weighing, farmer payouts, and export lot tracking systems.' },
      { icon: 'bi bi-water', title: 'Tumaco Seaport Logistics', desc: 'Maritime dispatch management, cold chain tracking, and distribution.' }
    ],
    faqs: [
      { q: 'Do you support companies in Ipiales and other municipalities?', a: 'Yes. We deliver software to companies in Ipiales, Tumaco, La Unión, and throughout Nariño via real-time cloud support and scheduled on-site technical visits.' }
    ],
    metaTitle: 'Software Development in Nariño (Ipiales, Tumaco) | CODEVS',
    metaDesc: 'Custom enterprise software in Nariño: Ipiales, Tumaco, La Unión. Cross-border logistics, agro-industry, and cloud architectures.',
    keywords: 'software development narino, software ipiales, tech company tumaco, codevs narino',
    geoLat: 1.2874,
    geoLong: -77.3574,
    postalCode: '520002'
  },
  bogota: {
    regionName: 'Bogotá D.C.',
    breadcrumbName: 'Bogotá',
    badge: 'Capital District • High-Throughput Enterprise',
    h1Prefix: 'Enterprise Custom Software in',
    h1Highlight: 'Bogotá D.C. & Cundinamarca.',
    heroDescription: 'High-rigor software engineering for corporations, consultancies, fintechs, and large enterprises in Bogotá. Spring Boot microservices and enterprise PostgreSQL.',
    ctaButtonText: 'Inquire for Bogotá / WhatsApp',
    cardTag: 'Bogotá • Enterprise Core',
    supportMode: 'Dedicated Virtual Squads',
    keyPoints: [
      'High-concurrency microservice architectures',
      'Strict corporate data governance and security',
      '40% cost reduction vs traditional Bogotá IT agencies',
      '100% proprietary code ownership'
    ],
    sectors: [
      { icon: 'bi bi-buildings', title: 'Financial & Corporate Services', desc: 'Audit automation, banking reconciliation, and enterprise security.' },
      { icon: 'bi bi-file-earmark-lock', title: 'Legal & Consulting Practices', desc: 'Intelligent document management and client portals.' },
      { icon: 'bi bi-truck', title: 'Logistics & Nationwide Fleet', desc: 'Real-time fleet tracking and mass dispatch orchestration.' }
    ],
    faqs: [
      { q: 'How do you coordinate projects with Bogotá clients?', a: 'We run weekly sprints via Google Meet, maintain real-time Kanban boards in Jira/Slack, and deploy continuous staging builds in the cloud.' }
    ],
    metaTitle: 'Custom Software Development in Bogotá D.C. | CODEVS',
    metaDesc: 'Enterprise custom software development in Bogotá D.C. Scalable microservices, custom ERPs, and high-performance databases by CODEVS.',
    keywords: 'software development bogota, software engineering bogota, erp bogota, custom software bogota, codevs',
    geoLat: 4.7110,
    geoLong: -74.0721,
    postalCode: '110111'
  },
  medellin: {
    regionName: 'Medellín & Antioquia',
    breadcrumbName: 'Medellín',
    badge: 'Innovation Hub • Antioquia',
    h1Prefix: 'Agile Software Engineering in',
    h1Highlight: 'Medellín & Aburrá Valley.',
    heroDescription: 'Accelerating tech startups, manufacturing plants, and high-growth companies across Medellín with custom software, rapid MVPs, and modern Vue/Nuxt platforms.',
    ctaButtonText: 'Inquire for Medellín / WhatsApp',
    cardTag: 'Medellín • Agile & Cloud',
    supportMode: '24/7 Agile Delivery',
    keyPoints: [
      'Rapid MVP delivery in 4 to 8 weeks',
      'Reactive frontends in Nuxt 3 & Vue 3',
      'Payment gateway and CRM orchestrations',
      'Working prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-rocket-takeoff', title: 'Startups & Scaleups', desc: 'High-speed buildouts of viable products ready for venture capital rounds.' },
      { icon: 'bi bi-scissors', title: 'Textile & Apparel Manufacturing', desc: 'Cut orders, supply management, and real-time B2B portals.' },
      { icon: 'bi bi-heart-pulse', title: 'Medical Tourism & Specialized Care', desc: 'International patient management, multicurrency quotes, and booking.' }
    ],
    faqs: [
      { q: 'Can you help our Medellín startup launch an MVP?', a: 'Yes. We partner with founders from schema design to cloud deployment, ensuring you have an architecture that scales smoothly.' }
    ],
    metaTitle: 'Software Development in Medellín & Antioquia | Startups & ERP | CODEVS',
    metaDesc: 'Custom software engineering in Medellín. MVPs for startups, manufacturing ERPs, and cloud applications with Nuxt 3 and Spring Boot.',
    keywords: 'software development medellin, startups medellin, mvp development medellin, hire developers medellin, codevs',
    geoLat: 6.2442,
    geoLong: -75.5812,
    postalCode: '050001'
  },
  cali: {
    regionName: 'Cali & Valle del Cauca',
    breadcrumbName: 'Cali',
    badge: 'Valle del Cauca • Industrial & Logistics',
    h1Prefix: 'Industrial Software Engineering in',
    h1Highlight: 'Cali & Valle del Cauca.',
    heroDescription: 'Digitizing manufacturing, pharmaceutical, chemical, and agribusiness operations across Valle del Cauca with systems optimizing production pipelines towards Buenaventura.',
    ctaButtonText: 'Inquire for Cali / WhatsApp',
    cardTag: 'Cali • Industrial Systems',
    supportMode: 'Industrial Cloud & On-Premise',
    keyPoints: [
      'Shop floor and production process control',
      'Integration with industrial scales and telemetry',
      'Full tax and electronic billing compliance',
      'ACID-compliant relational databases'
    ],
    sectors: [
      { icon: 'bi bi-cpu', title: 'Sugar & Agro-Industrial Mills', desc: 'Milling software, weighing telemetry, and derivative product logistics.' },
      { icon: 'bi bi-capsule', title: 'Pharma & Cosmetics Manufacturing', desc: 'Batch traceability, expiration tracking, and regulatory audit trails.' },
      { icon: 'bi bi-truck-front', title: 'Buenaventura Seaport Corridor', desc: 'Import/export container tracking and customs dispatching.' }
    ],
    faqs: [
      { q: 'Can the software be deployed on local factory servers?', a: 'Yes. We deploy to public clouds (AWS, GCP) or secure on-premise Docker environments based on your security policies.' }
    ],
    metaTitle: 'Software Development in Cali & Valle del Cauca | CODEVS',
    metaDesc: 'Custom software development for Cali and Valle del Cauca enterprises. Solutions for agribusiness, pharma, and port logistics towards Buenaventura.',
    keywords: 'software development cali, software company valle del cauca, industrial software cali, codevs',
    geoLat: 3.4516,
    geoLong: -76.5320,
    postalCode: '760001'
  },
  barranquilla: {
    regionName: 'Barranquilla & Caribbean Coast',
    breadcrumbName: 'Barranquilla',
    badge: 'Caribbean Hub • Ports & Foreign Trade',
    h1Prefix: 'Custom Software Solutions in',
    h1Highlight: 'Barranquilla & the Caribbean Coast.',
    heroDescription: 'Tailored platforms for international commerce, hospitality, logistics, and port terminals in Barranquilla, Cartagena, and Santa Marta.',
    ctaButtonText: 'Inquire for Barranquilla / WhatsApp',
    cardTag: 'Barranquilla • Caribbean Hub',
    supportMode: 'Agile Caribbean Remote',
    keyPoints: [
      'Multi-currency platforms (USD / COP / EUR)',
      'Direct booking engines with zero OTA fees',
      'WhatsApp integration for 24/7 sales conversions',
      'Working prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-anchor', title: 'Seaport Logistics & Customs', desc: 'Cargo workflows, container staging, and temporary bonded warehouse software.' },
      { icon: 'bi bi-building', title: 'Hospitality & Luxury Tourism', desc: 'Direct reservation platforms, automated payments, and guest CRM.' },
      { icon: 'bi bi-cart3', title: 'Wholesale & Retail Chains', desc: 'Point of sale synchronized across retail stores on the Caribbean coast.' }
    ],
    faqs: [
      { q: 'Can you integrate international payment gateways like Stripe?', a: 'Yes. We support Stripe, PayPal, and regional gateways like Wompi for seamless multi-currency processing.' }
    ],
    metaTitle: 'Software Development in Barranquilla & Caribbean | CODEVS',
    metaDesc: 'Custom software development in Barranquilla, Cartagena, and Santa Marta. Port logistics, hospitality, and foreign trade platforms by CODEVS.',
    keywords: 'software development barranquilla, software cartagena, developers barranquilla, codevs',
    geoLat: 10.9685,
    geoLong: -74.7813,
    postalCode: '080001'
  },
  bucaramanga: {
    regionName: 'Bucaramanga & Santander',
    breadcrumbName: 'Bucaramanga',
    badge: 'Santander • Healthcare & Manufacturing',
    h1Prefix: 'Custom Software Engineering in',
    h1Highlight: 'Bucaramanga & Santander.',
    heroDescription: 'Resilient technology for Santander’s specialized healthcare cluster, footwear manufacturing, poultry agro-industry, and engineering consultancies.',
    ctaButtonText: 'Inquire for Bucaramanga / WhatsApp',
    cardTag: 'Bucaramanga • Santander',
    supportMode: 'Virtual Agile Delivery',
    keyPoints: [
      'Healthcare data compliance and clinical workflows',
      'Production scheduling for footwear and apparel factories',
      'Automated electronic billing integration',
      '100% proprietary code with zero user licensing fees'
    ],
    sectors: [
      { icon: 'bi bi-hospital', title: 'Specialized Healthcare Cluster', desc: 'Clinical platforms, digital consents, and patient scheduling.' },
      { icon: 'bi bi-handbag', title: 'Footwear & Fashion Manufacturing', desc: 'Size-curve inventory, batch materials, and wholesale B2B catalogs.' },
      { icon: 'bi bi-egg-fried', title: 'Poultry & Livestock Farming', desc: 'Farm batch traceability, feed tracking, and dispatch control.' }
    ],
    faqs: [
      { q: 'Can you migrate our messy Excel spreadsheets?', a: 'Yes. We migrate fragile spreadsheets into relational PostgreSQL databases with role-based access control and full audit trails.' }
    ],
    metaTitle: 'Software Development in Bucaramanga & Santander | CODEVS',
    metaDesc: 'Custom software development in Bucaramanga and Santander. Healthcare, manufacturing, and poultry management systems by senior engineers.',
    keywords: 'software development bucaramanga, software company santander, developers bucaramanga, codevs',
    geoLat: 7.1254,
    geoLong: -73.1198,
    postalCode: '680001'
  },
  'eje-cafetero': {
    regionName: 'Coffee Region (Pereira, Manizales, Armenia)',
    breadcrumbName: 'Coffee Region',
    badge: 'Coffee Axis • Logistics & Hospitality',
    h1Prefix: 'Custom Software in the',
    h1Highlight: 'Coffee Region (Pereira, Manizales, Armenia).',
    heroDescription: 'Tailored software for the Colombian Coffee Axis: rural boutique hotels, specialty coffee exporters, and logistics hubs at the center of the golden triangle.',
    ctaButtonText: 'Inquire for Coffee Region / WhatsApp',
    cardTag: 'Coffee Axis • Regional Hub',
    supportMode: 'Remote with On-Site Visits',
    keyPoints: [
      'Boutique hotel booking and tourism experiences',
      'Specialty coffee traceability and export lots',
      'Multi-branch inventory for Pereira, Manizales, Armenia',
      'Working prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-cup-hot', title: 'Specialty Coffee Exports', desc: 'Micro-lot tracking, cupping scores, farmer settlements, and origin certifications.' },
      { icon: 'bi bi-tree', title: 'Rural Tourism & Boutique Hotels', desc: 'Commission-free direct booking engine and activity ticketing.' },
      { icon: 'bi bi-boxes', title: 'Intermodal Logistics Hubs', desc: 'Cross-docking and warehouse management in the heart of Colombia.' }
    ],
    faqs: [
      { q: 'Can we synchronize data across Pereira and Manizales offices?', a: 'Yes. We engineer 100% cloud platforms accessible from any browser with sub-second data synchronization.' }
    ],
    metaTitle: 'Software Development in Coffee Region (Pereira, Manizales) | CODEVS',
    metaDesc: 'Custom software development in Pereira, Manizales, and Armenia. Specialty coffee, hospitality, and logistics software by CODEVS.',
    keywords: 'software development eje cafetero, software pereira, software manizales, developers armenia, codevs',
    geoLat: 4.8133,
    geoLong: -75.6961,
    postalCode: '660001'
  },
  colombia: {
    regionName: 'Colombia (Nationwide)',
    breadcrumbName: 'Colombia',
    badge: 'Nationwide Delivery across 32 Departments',
    h1Prefix: 'Custom Software Engineering in',
    h1Highlight: 'Colombia • CODEVS.',
    heroDescription: 'Top-tier software engineering across all Colombian departments. Full DIAN electronic invoicing, local payment gateway integration, resilient PostgreSQL architecture, and 100% code ownership.',
    ctaButtonText: 'Inquire for Colombia / WhatsApp',
    cardTag: 'Colombia • Nationwide',
    supportMode: 'Nationwide Cloud Delivery',
    keyPoints: [
      'DIAN Electronic Invoicing & Payroll compliance',
      'Integration with PSE, Wompi, PayU, and MercadoPago',
      'Full compliance with Colombian Data Protection Law 1581',
      'Working functional prototype in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-receipt', title: 'Tax & DIAN Compliance', desc: 'Validated integrations with national electronic invoicing and payroll.' },
      { icon: 'bi bi-shield-lock', title: 'Data Privacy & Habeas Data', desc: 'End-to-end encryption aligned with SIC regulations.' },
      { icon: 'bi bi-credit-card', title: 'National Payment Ecosystem', desc: 'Automated PSE bank transfers and local checkout flows.' }
    ],
    faqs: [
      { q: 'What contractual guarantees do you offer in Colombia?', a: 'We operate as a legally registered Colombian corporation with NIT, formal contracts with clear delivery milestones, and commercial warranty guarantees.' }
    ],
    metaTitle: 'Custom Software Development Company in Colombia | CODEVS #1',
    metaDesc: 'Leading custom software development company in Colombia. ERPs, CRMs, PostgreSQL databases, and cloud engineering. Prototype in 7 days, 100% code ownership.',
    keywords: 'custom software development colombia, software engineering company colombia, hire software developers colombia, erp colombia, codevs',
    geoLat: 4.5709,
    geoLong: -74.2973,
    postalCode: '110001'
  },
  'estados-unidos': {
    regionName: 'United States & Nearshore',
    breadcrumbName: 'USA / Nearshore',
    badge: 'Nearshore Software Development • US Startups & Enterprises',
    h1Prefix: 'Nearshore Software Engineering for',
    h1Highlight: 'USA Companies & Global Startups.',
    heroDescription: 'Dedicated squads of senior bilingual engineers and software architects based in Colombia. 100% time-zone overlap with US EST and CST, senior software craftsmanship, and a 60% reduction in development costs without compromising quality.',
    ctaButtonText: 'Schedule Nearshore Discovery Call',
    cardTag: 'USA • Nearshore Squads',
    supportMode: 'EST / CST Time Zone Alignment',
    keyPoints: [
      'Same time-zone execution (EST / CST / PST)',
      'Fluent English-speaking senior architects',
      '60% cost reduction vs US domestic contractor rates',
      'Working prototype delivered in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-laptop', title: 'US SaaS & Venture Startups', desc: 'Full-stack engineering with Vue/Nuxt, Java Spring Boot, Python, and scalable AWS cloud clusters.' },
      { icon: 'bi bi-currency-dollar', title: 'Fintech & Multi-Currency Platforms', desc: 'Secure APIs, Stripe payments, automated reconciliation, and bank-grade data compliance.' },
      { icon: 'bi bi-graph-up-arrow', title: 'Enterprise Modernization', desc: 'Migrating legacy database schemas into resilient PostgreSQL and decoupled microservices.' }
    ],
    faqs: [
      { q: 'How does time-zone alignment work with US teams?', a: 'Our engineers operate in UTC-5 (equivalent to US Eastern Time during Standard Time and Central Time during Daylight Saving Time), ensuring 100% live overlap with your engineering organization.' },
      { q: 'Are your engineers senior level?', a: 'Yes. Our core engineering leads are senior software architects with deep enterprise expertise in databases and scalable cloud systems.' }
    ],
    metaTitle: 'Nearshore Software Development for USA Startups & Enterprises | CODEVS',
    metaDesc: 'Premier nearshore software engineering in Colombia for US companies. Time-zone aligned, bilingual senior engineers, 60% cost reduction. 7-day prototype.',
    keywords: 'nearshore software development usa, nearshore software engineers colombia, hire developers nearshore, custom software development us, codevs nearshore',
    geoLat: 37.0902,
    geoLong: -95.7129,
    postalCode: '00000'
  }
};

const regionData = computed(() => {
  return regionsMap[currentRegionKey.value] || regionsMap['pasto'];
});

const otherRegions = computed(() => {
  const all = {};
  for (const [k, v] of Object.entries(regionsMap)) {
    if (k !== currentRegionKey.value) {
      all[k] = { name: v.regionName };
    }
  }
  return all;
});

const whatsappUrl = computed(() => {
  const text = encodeURIComponent(`Hello CODEVS, I am interested in custom software development for ${regionData.value.regionName}.`);
  return `https://wa.me/573138066800?text=${text}`;
});

useHead(() => ({
  title: regionData.value.metaTitle,
  meta: [
    { name: 'description', content: regionData.value.metaDesc },
    { name: 'keywords', content: regionData.value.keywords },
    { property: 'og:title', content: regionData.value.metaTitle },
    { property: 'og:description', content: regionData.value.metaDesc },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/2.png' },
    { property: 'og:url', content: `https://www.codevs.dev/en/servicios/desarrollo-software/${currentRegionKey.value}` },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: regionData.value.metaTitle },
    { name: 'twitter:description', content: regionData.value.metaDesc },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: `https://www.codevs.dev/en/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'es', href: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'en', href: `https://www.codevs.dev/en/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'x-default', href: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` }
  ]
}));

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `CODEVS - Custom Software in ${regionData.value.regionName}`,
    'image': 'https://www.codevs.dev/img/codevs.png',
    '@id': `https://www.codevs.dev/#localbusiness-${currentRegionKey.value}-en`,
    'url': `https://www.codevs.dev/en/servicios/desarrollo-software/${currentRegionKey.value}`,
    'telephone': '+57 3138066800',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': regionData.value.regionName,
      'postalCode': regionData.value.postalCode,
      'addressCountry': currentRegionKey.value === 'estados-unidos' ? 'US' : 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': regionData.value.geoLat,
      'longitude': regionData.value.geoLong
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `Custom Software Development in ${regionData.value.regionName}`,
    'serviceType': 'Custom Software Development',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CODEVS',
      'telephone': '+57 3138066800',
      'url': 'https://www.codevs.dev'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': regionData.value.regionName
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': regionData.value.faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
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
