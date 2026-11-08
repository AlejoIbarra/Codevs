<template>
  <div class="selection:bg-red-600 selection:text-white">

    <!-- 1. Hero Section (High-Speed GPU Mesh Gradient, Kinetic Rotating Title, Conversion Triggers) -->
    <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07070a] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 mesh-gradient-container">
      
      <!-- Single-Layer GPU Mesh Background (Zero Blur Lag) -->
      <div class="mesh-static-bg pointer-events-none" aria-hidden="true"></div>

      <div class="container mx-auto max-w-7xl relative z-10 w-full">
        
        <div class="mesh-glass-card rounded-[32px] sm:rounded-[44px] p-7 sm:p-12 lg:p-16 relative overflow-hidden text-center">
          
          <div class="max-w-4xl mx-auto space-y-6 sm:space-y-7 my-2">
            
            <!-- Monumental Headline -->
            <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.03]">
              Nearshore Software <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-500">
                & Database Engineering
              </span>
              <span class="block text-xl sm:text-3xl lg:text-4xl font-semibold text-white/80 tracking-tight mt-3">
                Custom Platforms, AI Agents & High-Concurrency Databases
              </span>
            </h1>

            <!-- Kinetic Rotating Title Style Huge Inc -->
            <div class="flex items-center justify-center flex-wrap gap-2 text-lg sm:text-2xl md:text-3xl font-bold text-white/90">
              <span>We build custom technology that scales</span>
              <span class="relative inline-block text-red-500 overflow-hidden h-[1.3em] min-w-[140px] sm:min-w-[170px] text-left">
                <Transition name="huge-slide" mode="out-in">
                  <span :key="currentRotatingWord" class="inline-block font-black underline decoration-red-600/50 decoration-2 underline-offset-4">
                    {{ currentRotatingWord }}
                  </span>
                </Transition>
              </span>
            </div>

            <!-- Value Narrative + Academic & Engineering Authority -->
            <p class="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-normal leading-relaxed text-center">
              We are <strong class="text-white font-bold">CODEVS</strong>: the #1 partner in <strong class="text-white font-semibold">custom software development, relational/NoSQL database architecture, and 24/7 WhatsApp AI automation</strong>. Your platform is engineered by <strong class="text-white font-semibold underline decoration-red-500/60 underline-offset-4">senior software architects and university professors who teach programming &amp; databases</strong>—guaranteeing clean code, sub-second speed, and measurable ROI.
            </p>

            <!-- MindMarket Bounce Action Buttons (.mm-btn) -->
            <div class="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-2">
              <a href="#contact" class="mm-btn">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-arrow-up-right text-xs"></i>
                </span>
                <span class="mm-btn-label">Quote My Software Now</span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-arrow-up-right text-xs"></i>
                </span>
              </a>

              <a
                href="https://wa.me/573008051304?text=Hello%20CODEVS!%20I%20want%20to%20quote%20a%20custom%20software%20/%20database%20project%20with%20your%20senior%20engineering%20team."
                target="_blank"
                rel="noopener noreferrer"
                class="mm-btn -green"
              >
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-whatsapp text-xs"></i>
                </span>
                <span class="mm-btn-label">Talk to an Engineer (WhatsApp)</span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-whatsapp text-xs"></i>
                </span>
              </a>

              <a href="#clients" class="mm-btn -white">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-star-fill text-xs"></i>
                </span>
                <span class="mm-btn-label">View Proven Case Studies</span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-star-fill text-xs"></i>
                </span>
              </a>
            </div>

            <!-- High-Conversion Risk-Reversal Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-3 text-left">
              <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <div class="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                  <i class="bi bi-mortarboard-fill text-base"></i>
                </div>
                <div>
                  <div class="text-xs font-extrabold text-white">Senior Devs &amp; CS Professors</div>
                  <div class="text-[11px] text-zinc-400">Programming &amp; Database Masters</div>
                </div>
              </div>

              <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <div class="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <i class="bi bi-lightning-charge-fill text-base"></i>
                </div>
                <div>
                  <div class="text-xs font-extrabold text-white">7-Day Interactive Prototype</div>
                  <div class="text-[11px] text-zinc-400">Validate UX &amp; DB before scaling</div>
                </div>
              </div>

              <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <div class="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0">
                  <i class="bi bi-shield-check text-base"></i>
                </div>
                <div>
                  <div class="text-xs font-extrabold text-white">100% IP &amp; Contract Warranty</div>
                  <div class="text-[11px] text-zinc-400">EST/CST overlap • USD invoicing</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Integrated Technology Logos Row (White Monochrome with Hover Glow) -->
          <div class="mt-10 pt-7 border-t border-white/10 flex flex-col items-center">
            <span class="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-5">
              Enterprise Stack: Spring Boot • Nuxt 3 • PostgreSQL • SQL • AWS • Flutter • Meta AI
            </span>

            <div class="w-full overflow-hidden relative">
              <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                <div v-for="(tech, idx) in techLogos" :key="idx"
                  class="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-200">
                  <img :src="tech.icon" :alt="tech.name" width="110" height="36" loading="eager" decoding="async"
                    class="h-7 sm:h-9 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 1.2 MindMarket Experience: The Thread SVG Timeline, 4 Bounce Story Tiles, Sticky Numbers Stack & Deluxe Callout -->
    <MindMarketTimelineSection />

    <!-- 1.5 Clients & Enterprise Case Studies (Sin Huellas Nuevas Oportunidades Priority #1) -->
    <section
      id="clients"
      class="relative bg-[#07070a] text-white py-24 sm:py-32 overflow-hidden border-t border-zinc-900"
      style="background-image: radial-gradient(circle at 0% 25%, rgba(220,38,38,0.08), transparent 45%), radial-gradient(circle at 100% 75%, rgba(220,38,38,0.08), transparent 45%);"
    >
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        <!-- Section Header -->
        <div class="max-w-3xl mb-16 sm:mb-20">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Our Clients & <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500">
              Engineering Case Studies.
            </span>
          </h2>

          <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed text-justify">
            We partner with law firms, scale-ups, and international businesses to eliminate operational drag through clean software architecture, high-concurrency databases, and autonomous AI agents.
          </p>
        </div>

        <!-- Featured Case Study: Sin Huellas Nuevas Oportunidades -->
        <div
          class="relative rounded-[32px] sm:rounded-[40px] bg-[#0e0e13] border border-white/15 p-6 sm:p-10 lg:p-12 mb-16 overflow-hidden hover:border-red-500/40 transition-colors duration-300 shadow-2xl"
          style="background-image: radial-gradient(circle at 95% 5%, rgba(220,38,38,0.14), transparent 45%);"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Left Column: Story & Metrics -->
            <div class="lg:col-span-7 space-y-6">
              
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-red-600 text-white shadow-md shadow-red-600/30">
                  Featured Case Study
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-300 border border-white/10">
                  Law Firm • LegalTech AI
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  +70% Operational Time Saved
                </span>
              </div>

              <!-- Official Client Logo -->
              <div class="pt-1">
                <a href="https://www.sinhuellas.co/" target="_blank" rel="noopener noreferrer" class="group/brand inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/95 hover:bg-white border border-white/30 shadow-lg transition-transform hover:scale-105" title="Visit official site">
                  <img src="/assets/img/clients/sin-huellas-logo.png" alt="Sin Huellas Nuevas Oportunidades Logo" loading="lazy" decoding="async" class="h-7 w-auto object-contain" />
                  <span class="text-xs font-bold text-zinc-800 border-l border-zinc-300 pl-3 group-hover/brand:text-red-600 transition-colors flex items-center gap-1">
                    <span>www.sinhuellas.co</span>
                    <i class="bi bi-box-arrow-up-right text-[10px]"></i>
                  </span>
                </a>
              </div>

              <div>
                <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Sin Huellas Nuevas Oportunidades
                </h3>
                <p class="text-red-400 text-base sm:text-lg font-semibold mt-1">
                  Premier Law Firm: AI Omnichannel Suite + Custom Legal ERP/CRM
                </p>
              </div>

              <p class="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                At <strong class="text-white font-bold">CODEVS</strong>, we conducted an in-depth operational study of the internal legal workflows at <strong class="text-white font-semibold">Sin Huellas Nuevas Oportunidades</strong>, a top legal firm specializing in credit rehabilitation, insolvency regimes, and financial defense. Faced with hundreds of daily client inquiries and manual administrative bottlenecks, we built a custom LegalTech ecosystem: a 24/7 <strong class="text-white">AI Legal Assistant on WhatsApp Cloud API</strong>, an <strong class="text-white">intelligent Legal CRM</strong> with predictive case scoring (96%), and an <strong class="text-white">enterprise ERP</strong> that automates installment fee collection and court term alerts.
              </p>

              <!-- Metrics Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div class="p-4 rounded-2xl bg-black/50 border border-white/10">
                  <div class="text-2xl sm:text-3xl font-black text-red-500">+70%</div>
                  <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Time Saved</div>
                  <div class="text-[11px] text-zinc-400 mt-0.5">In daily case management</div>
                </div>
                <div class="p-4 rounded-2xl bg-black/50 border border-white/10">
                  <div class="text-2xl sm:text-3xl font-black text-white">25+ hrs</div>
                  <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">Weekly Savings</div>
                  <div class="text-[11px] text-zinc-400 mt-0.5">Per lawyer & legal squad</div>
                </div>
                <div class="p-4 rounded-2xl bg-black/50 border border-white/10 col-span-2 sm:col-span-1">
                  <div class="text-2xl sm:text-3xl font-black text-white">&lt; 3 sec</div>
                  <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">AI Response</div>
                  <div class="text-[11px] text-zinc-400 mt-0.5">24/7 WhatsApp Cloud AI</div>
                </div>
              </div>

              <!-- CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <NuxtLink
                  to="/proyectos/sin-huellas"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Full Case Study</span>
                  <i class="bi bi-arrow-right text-xs"></i>
                </NuxtLink>
                <a
                  href="#contact"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all duration-300"
                >
                  <span>Quote a Similar System</span>
                  <i class="bi bi-lightning-charge-fill text-red-400 text-xs"></i>
                </a>
              </div>

            </div>

            <!-- Right Column: Interactive Image Preview -->
            <div class="lg:col-span-5">
              <NuxtLink to="/proyectos/sin-huellas" class="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900">
                <img
                  src="/assets/img/projects/sin-huellas.jpg"
                  alt="Sin Huellas ERP CRM Omnichannel AI - CODEVS"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-72 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div class="flex items-center justify-between w-full">
                    <div>
                      <span class="text-xs uppercase tracking-wider text-red-400 font-bold block">Enterprise SaaS Architecture</span>
                      <span class="text-white font-bold text-lg">Legal ERP & AI Omnichannel</span>
                    </div>
                    <div class="w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors">
                      <i class="bi bi-arrow-up-right text-sm"></i>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>

          </div>

        </div>

        <!-- Marquee Ribbon: Verified US Nearshore Trust & Metrics (frontend-identidad & ui-ux-pro-max) -->
        <div class="relative w-full overflow-hidden py-6 mb-16 border-y border-white/10 bg-white/[0.02]">
          <div class="marquee-track flex items-center gap-8 whitespace-nowrap will-change-transform">
            <div v-for="loop in 2" :key="loop" class="flex items-center gap-8 shrink-0">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>Sin Huellas Law Firm</span>
                <span class="text-zinc-400 font-normal">• LegalTech AI</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>+70% Operational Time Saved</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>Moments Gallery</span>
                <span class="text-zinc-400 font-normal">• Marketplace Startup</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>24/7 WhatsApp Cloud AI Engine</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>Alacranes AFC</span>
                <span class="text-zinc-400 font-normal">• #1 Google Organic</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>100% US IP Ownership & NDAs</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>IPTV Max</span>
                <span class="text-zinc-400 font-normal">• 60 FPS Media Streaming</span>
              </div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-white">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>EST / CST Real-time Overlap</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Strategic Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <NuxtLink
            to="/proyectos/moments-gallery"
            class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                  Tech Startup
                </span>
                <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
              </div>
              <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                Moments Gallery
              </h4>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                Conceived and engineered by CODEVS: high-concurrency photo marketplace with automated instant checkout, real-time watermarks, and Spring Boot + Nuxt architecture.
              </p>
            </div>
            <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span class="text-xs font-semibold text-zinc-400">Marketplace & Payments</span>
              <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">View Details →</span>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/proyectos/alacranes-afc"
            class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                  Sports Franchise
                </span>
                <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
              </div>
              <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                Alacranes AFC
              </h4>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                High-performance sports club platform with Bento Grid visual showcase, official merchandising digital shop, and search ranking #1.
              </p>
            </div>
            <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span class="text-xs font-semibold text-zinc-400">Web Platform & Branding</span>
              <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">View Details →</span>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/proyectos/iptv-max-ui"
            class="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                  Streaming UI/UX
                </span>
                <i class="bi bi-arrow-up-right text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
              </div>
              <h4 class="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                IPTV Max
              </h4>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                Interactive streaming software and UI designed for Smart TVs and touchscreens with 60 FPS fluidity and low-latency micro-interactions.
              </p>
            </div>
            <div class="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span class="text-xs font-semibold text-zinc-400">UI/UX Design & Media</span>
              <span class="text-xs font-bold text-white group-hover:text-red-400 transition-colors">View Details →</span>
            </div>
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- 3. Never Done Section (Horizontal Co-Creation Showcase) -->
    <NeverDoneSection />

    <!-- 4. Solutions Section (Stacking Cards 01 to 09 with Clean White Theme) -->
    <section id="services" class="relative bg-white text-zinc-900 py-24 lg:py-36 border-t border-zinc-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Monumental Section Header -->
        <div class="max-w-3xl mb-16 lg:mb-24">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider mb-5">
            <span class="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Software Engineering • Databases • Artificial Intelligence</span>
          </div>
          <h2 class="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight leading-[0.98]">
            Solutions.
          </h2>
          <p class="text-zinc-600 text-lg sm:text-2xl mt-5 font-normal leading-relaxed">
            Custom software development, high-concurrency database architectures, and AI automations. Engineered by <strong class="text-zinc-950 font-bold">senior architects and university professors of programming &amp; databases</strong> to multiply your ROI.
          </p>
        </div>

        <!-- Stacking Cards List -->
        <div class="space-y-8 relative pb-12">
          <article
            v-for="(item, index) in solutions"
            :key="index"
            class="sticky-stack-card group rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between transition-all duration-300"
            :style="{
              top: `calc(5.5rem + ${index * 1.35}rem)`,
              zIndex: index + 1
            }"
          >
            <!-- Top Row -->
            <div class="flex items-start justify-between gap-6 mb-8">
              <span class="text-4xl sm:text-6xl lg:text-7xl font-black text-red-600 tracking-tighter">
                {{ item.number }}
              </span>
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold uppercase tracking-wider text-zinc-600 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
                  {{ item.tag }}
                </span>
                <a
                  href="#contact"
                  class="w-12 h-12 rounded-full bg-zinc-950 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105"
                  aria-label="Inquire about solution"
                >
                  <i class="bi bi-arrow-up-right text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                </a>
              </div>
            </div>

            <!-- Central Content -->
            <div class="space-y-4 my-6">
              <h3 class="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05] group-hover:text-red-600 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-zinc-600 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl">
                {{ item.subtitle }}
              </p>
            </div>

            <!-- Bottom Row -->
            <div class="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p class="text-xs sm:text-sm text-zinc-500 font-normal max-w-2xl text-justify">
                {{ item.description }}
              </p>
              <div class="flex items-center gap-4 shrink-0">
                <a
                  href="#contact"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-zinc-950 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
                >
                  <span>Get a Quote</span>
                  <i class="bi bi-lightning-charge-fill text-xs"></i>
                </a>
                <a
                  href="#contact"
                  class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors"
                >
                  <span>Request Scope</span>
                  <i class="bi bi-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Metrics Bar -->
        <div class="mt-24 pt-14 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="space-y-1">
            <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">+45</div>
            <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Delivered Projects</div>
            <div class="text-xs text-zinc-500">Platforms, SaaS, and apps</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">100%</div>
            <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Custom Code</div>
            <div class="text-xs text-zinc-500">Zero bloated templates</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">#1 Core Web Vitals</div>
            <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Sub-second Speed</div>
            <div class="text-xs text-zinc-500">100/100 Lighthouse score</div>
          </div>
          <div class="space-y-1">
            <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">60 FPS</div>
            <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Fluid Execution</div>
            <div class="text-xs text-zinc-500">Zero jank micro-interactions</div>
          </div>
        </div>

      </div>
    </section>

    <!-- 5. Featured Portfolio Section (Editorial Grid with Clean Off-White Background) -->
    <section id="portfolio" class="relative bg-[#FAFAFC] overflow-hidden py-24 lg:py-32 border-t border-zinc-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <!-- Section Header with Metrics Counter Pill -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <i class="bi bi-code-slash text-xs"></i>
              <span>Production-Grade Engineering</span>
            </div>
            <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
              Featured <br />
              <span class="text-red-600">Case Studies.</span>
            </h2>
            <p class="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
              Explore recent software architectures, interactive platforms, and mobile apps built to deliver tangible business ROI and high-throughput velocity.
            </p>
          </div>

          <!-- Metric counter pill -->
          <div class="hidden sm:flex items-center gap-4 px-5 py-3 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
            <div>
              <div class="text-2xl font-black text-zinc-950 leading-none">100%</div>
              <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mt-1">IP Ownership</div>
            </div>
            <div class="w-px h-8 bg-zinc-200"></div>
            <div>
              <div class="text-2xl font-black text-red-600 leading-none">&lt; 1s</div>
              <div class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mt-1">Sub-second Speed</div>
            </div>
          </div>
        </div>

        <!-- Category Filter Tabs (frontend-identidad & ui-ux-pro-max) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <button
            v-for="cat in portfolioCategories"
            :key="cat.id"
            @click="activePortfolioCategory = cat.id"
            class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border"
            :class="[
              activePortfolioCategory === cat.id
                ? 'bg-zinc-950 text-white border-zinc-950 shadow-md shadow-zinc-950/20'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950'
            ]"
          >
            <span>{{ cat.label }}</span>
            <span
              class="text-[10px] font-black px-1.5 py-0.5 rounded-full"
              :class="activePortfolioCategory === cat.id ? 'bg-red-600 text-white' : 'bg-zinc-100 text-zinc-500'"
            >
              {{ cat.count }}
            </span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div
            v-for="(item, i) in filteredPortfolioItems"
            :key="i"
            class="group relative bg-white rounded-[28px] overflow-hidden border border-zinc-200/90 hover:border-zinc-950/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div class="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                <img
                  :src="item.image"
                  :alt="item.title"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition-transform duration-500 ease-out"
                />
                <span class="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                  {{ item.category }}
                </span>
                <span v-if="item.isCaseStudy" class="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40 flex items-center gap-1.5">
                  <i class="bi bi-star-fill text-xs"></i>
                  <span>Case Study</span>
                </span>
              </div>

              <div class="p-8 space-y-3">
                <h3 class="text-2xl font-black text-zinc-950 group-hover:text-red-600 transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <p class="text-zinc-600 text-sm leading-relaxed text-justify">
                  {{ item.description }}
                </p>

                <!-- Tech Tags Pill Cloud -->
                <div class="flex flex-wrap items-center gap-2 pt-2">
                  <span
                    v-for="(tag, tIdx) in item.tags"
                    :key="tIdx"
                    class="text-[11px] font-semibold text-zinc-600 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Card Footer -->
            <div class="p-8 pt-0">
              <div class="pt-5 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-4">
                <div class="flex items-center gap-4">
                  <NuxtLink
                    :to="item.link"
                    class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group-hover:text-red-600 transition-colors group/btn"
                  >
                    <span>Explore Details</span>
                    <div class="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                      <i class="bi bi-arrow-up-right text-xs text-zinc-900 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"></i>
                    </div>
                  </NuxtLink>

                  <a
                    v-if="item.liveUrl"
                    :href="item.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 transition-colors px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 hover:border-zinc-400"
                    title="Visit official site"
                  >
                    <i class="bi bi-box-arrow-up-right text-red-600 text-xs"></i>
                    <span>Live Site</span>
                  </a>
                </div>
                <span class="text-xs text-zinc-400 font-bold uppercase tracking-wider">CODEVS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 6. Blog & Technical Insights Section -->
    <BlogSection />

    <!-- 7. FAQ for US Partners (Accordion Style) -->
    <section id="faq" class="relative bg-[#FAFAFC] text-zinc-900 py-24 lg:py-32 overflow-hidden border-t border-zinc-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-[1.1]">
            Frequently Asked Questions on <br />
            <span class="text-red-600">Software, Databases &amp; Nearshore Squads</span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
            Everything you need to know about working with CODEVS’s senior software architects and programming/database professors.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in usFaqs" 
            :key="index"
            class="bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/90 overflow-hidden transition-all duration-300 hover:border-zinc-950/60 shadow-sm"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              :aria-expanded="openFaqIndex === index"
            >
              <h3 class="text-base sm:text-lg font-black text-zinc-950 group-hover:text-red-600 transition-colors">
                {{ faq.question }}
              </h3>
              <span 
                class="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-800 transition-all duration-300"
                :class="{ 'rotate-180 bg-zinc-950 text-white border-zinc-950': openFaqIndex === index }"
              >
                <i class="bi bi-chevron-down text-sm"></i>
              </span>
            </button>
            
            <div 
              v-show="openFaqIndex === index"
              class="px-6 pb-6 sm:px-7 sm:pb-7 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-4 text-justify"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 8. Contact & Discovery Form Section (Fast Dark Card) -->
    <section
      id="contact"
      class="contact-section bg-[#07070a] text-gray-200 py-28 lg:py-36 border-t border-zinc-900 relative overflow-hidden"
      style="background-image: radial-gradient(circle at 0% 15%, rgba(220,38,38,0.11), transparent 45%), radial-gradient(circle at 100% 85%, rgba(185,28,28,0.10), transparent 45%);"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Free 15-Minute Architecture Diagnosis • Zero Risk</span>
          </div>
          <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Quote Your Custom <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Software or Database Today.
            </span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
            Tell us about your technical roadmap, database bottleneck, or hiring needs. A <strong class="text-white">Senior Software Architect &amp; Database Professor</strong> will reply with a clear proposal within 24 hours.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Coordinates & Direct US Communication -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-[#0e0e13] border border-white/15 p-8 rounded-[28px] shadow-xl">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                  <i class="bi bi-mortarboard-fill text-2xl"></i>
                </div>
                <div class="space-y-1">
                  <span class="text-xs font-bold uppercase text-red-500 tracking-wider">Engineering &amp; Academic Authority</span>
                  <h3 class="text-xl font-bold text-white">Senior Devs &amp; CS/DB Professors</h3>
                  <p class="text-zinc-400 text-sm">Real-time EST/CST alignment, SQL/NoSQL mastery, and corporate mentorship.</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer" 
                 class="bg-[#0e0e13] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-emerald-500/40 transition-colors block">
                <div class="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                  <i class="bi bi-whatsapp text-2xl"></i>
                </div>
                <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Direct WhatsApp</span>
                <div class="text-base font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">+57 300 805 1304</div>
                <p class="text-emerald-400/90 text-xs mt-1 font-semibold">Reply in &lt; 5 minutes</p>
              </a>

              <a href="mailto:comercial@codevs.dev" 
                 class="bg-[#0e0e13] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-red-500/40 transition-colors block">
                <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                  <i class="bi bi-envelope-at text-2xl"></i>
                </div>
                <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Direct Email</span>
                <div class="text-base font-bold text-white mt-1 group-hover:text-red-400 transition-colors">comercial@codevs.dev</div>
                <p class="text-zinc-500 text-xs mt-1">Confidential RFPs &amp; Quotes</p>
              </a>
            </div>

            <div class="p-6 rounded-2xl bg-[#0e0e13] border border-white/15 text-xs text-zinc-300 space-y-2">
              <div class="flex items-center gap-2 font-bold text-emerald-400">
                <i class="bi bi-shield-check text-base"></i>
                <span>Why Hire CODEVS Today?</span>
              </div>
              <ul class="space-y-1.5 text-zinc-300">
                <li>✓ Interactive prototype &amp; DB model delivered in the first 7 days.</li>
                <li>✓ Safe milestone-based payments &amp; contract-backed SLA.</li>
                <li>✓ 100% Intellectual Property (IP) ownership under Mutual NDAs.</li>
              </ul>
            </div>

          </div>

          <!-- Right Column: Interactive Proposal Form -->
          <div class="lg:col-span-7">
            <div class="bg-[#0e0e13] border border-white/15 p-8 sm:p-12 rounded-[32px] shadow-2xl">
              
              <!-- SLA Guarantee Pill -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-6">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SLA Guarantee: &lt; 24h Formal Quote by Lead Solutions Architect</span>
              </div>

              <form @submit.prevent="submitContact" class="space-y-6">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Your Full Name *</label>
                    <input v-model="form.name" type="text" required placeholder="Sarah Connor"
                      class="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-sm" />
                  </div>

                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Work Email *</label>
                    <input v-model="form.email" type="email" required placeholder="sarah@company.com"
                      class="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-sm" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Company / Organization</label>
                    <input v-model="form.company" type="text" placeholder="Acme Technologies"
                      class="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-sm" />
                  </div>

                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Estimated Budget (USD) *</label>
                    <select v-model="form.budget" required
                      class="w-full px-4 py-3.5 rounded-2xl bg-[#141419] border border-white/15 text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-sm cursor-pointer">
                      <option value="" disabled selected>Select budget range</option>
                      <option value="$2k - $5k">$2,000 - $5,000 (DB Audit / Fast Web / Mentorship)</option>
                      <option value="$5k - $15k">$5,000 - $15,000 (Sprint / Custom MVP)</option>
                      <option value="$15k - $30k">$15,000 - $30,000 (Full Platform / ERP)</option>
                      <option value="$30k+">$30,000+ (Enterprise Solution / Squad)</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Project Overview &amp; Objectives *</label>
                  <textarea v-model="form.message" rows="4" required placeholder="Tell us about your custom software, database optimization, AI workflow, or training goals..."
                    class="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all text-sm resize-none"></textarea>
                </div>

                <div v-if="submitted" class="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm text-center">
                  Thank you! Your inquiry has been forwarded to our Lead Solutions Architect. We'll be in touch within 24 hours.
                </div>

                <div class="flex flex-wrap items-center gap-3">
                  <button type="submit"
                    class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#E7000B] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer">
                    <span>Request Proposal &amp; 7-Day Prototype</span>
                    <i class="bi bi-arrow-up-right text-xs"></i>
                  </button>

                  <a
                    :href="whatsappUSUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <i class="bi bi-whatsapp text-emerald-400"></i>
                    <span>Chat on WhatsApp Now</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import MindMarketTimelineSection from '~/components/MindMarketTimelineSection.vue';
import NeverDoneSection from '~/components/NeverDoneSection.vue';
import BlogSection from '~/components/BlogSection.vue';

const whatsappUSUrl = 'https://wa.me/573008051304?text=Hello%20CODEVS%2C%20I%20would%20like%20to%20quote%20a%20custom%20software%20or%20database%20engineering%20project.';

// Kinetic rotating word
const rotatingWords = [
  'startups.',
  'enterprises.',
  'databases.',
  'law firms.',
  'scaleups.',
  'products.'
];
const currentWordIndex = ref(0);
const currentRotatingWord = ref(rotatingWords[0]);
let wordInterval = null;

onMounted(() => {
  wordInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length;
    currentRotatingWord.value = rotatingWords[currentWordIndex.value];
  }, 2400);
});

onBeforeUnmount(() => {
  if (wordInterval) clearInterval(wordInterval);
});

// Production tech logos
const techLogos = [
  { name: 'Vue.js', icon: '/img/technologies/Angular.png' }, // mapped fallback
  { name: 'Spring Boot', icon: '/img/technologies/spring.png' },
  { name: 'Flutter', icon: '/img/technologies/flutter.png' },
  { name: 'Swift iOS', icon: '/img/technologies/swift.png' },
  { name: 'MongoDB / PostgreSQL', icon: '/img/technologies/mongo.png' },
  { name: 'PHP / Backend', icon: '/img/technologies/php.png' }
];

// Solutions (Stacking cards 01 to 09)
const solutions = [
  {
    number: '01',
    title: 'Custom Software & Cloud Platforms.',
    subtitle: 'Enterprise architectures engineered for high concurrency.',
    description: 'High-performance cloud platforms, ERPs, and microservices designed for zero downtime and extreme throughput using Java, Spring Boot, PostgreSQL, and AWS.',
    tag: 'Cloud Architecture',
    link: '#contact'
  },
  {
    number: '02',
    title: 'High-Performance Web Applications.',
    subtitle: 'Lightning-fast corporate platforms and headless e-commerce.',
    description: 'Fast, accessible, and semantically structured web applications built with Nuxt 3, Vue, and edge rendering to dominate Google search and achieve 100% Core Web Vitals.',
    tag: 'Web & Headless',
    link: '#contact'
  },
  {
    number: '03',
    title: 'UX/UI Product Design Systems.',
    subtitle: 'Human-centric interfaces engineered to retain and convert.',
    description: 'Interactive prototypes in Figma, scalable design systems, and responsive micro-interactions crafted to maximize user conversion and reduce churn.',
    tag: 'Design Systems',
    link: '#contact'
  },
  {
    number: '04',
    title: 'API & Enterprise System Integrations.',
    subtitle: 'Secure pipelines for payments, CRMs, and financial data.',
    description: 'Seamlessly connecting existing infrastructures with payment gateways (Stripe, Plaid), CRMs (HubSpot, Salesforce), and ERPs with real-time webhooks and robust authentication.',
    tag: 'APIs & Fintech',
    link: '#contact'
  },
  {
    number: '05',
    title: 'Mobile App Development.',
    subtitle: 'Native fluidity and high performance on iOS and Android.',
    description: 'Native iOS (Swift) and cross-platform (Flutter) mobile experiences delivering 60 FPS animations, offline caching, and sub-second push notifications.',
    tag: 'iOS & Android',
    link: '#contact'
  },
  {
    number: '06',
    title: 'Advanced Technical SEO & GEO.',
    subtitle: 'Ranking #1 in Google and Generative AI Search Overviews.',
    description: 'Cutting-edge schema markups, edge-rendering optimizations, and Generative Engine Optimization (GEO) strategies to secure top spots in AI-driven search engines.',
    tag: 'Search Dominance',
    link: '#contact'
  },
  {
    number: '07',
    title: 'Workflow Automations & Omnichannel Messaging.',
    subtitle: 'Unified WhatsApp Business API, Instagram, and AI Agents.',
    description: 'Autonomous event-driven workflows and unified messaging consoles. Connect WhatsApp Cloud API, CRMs, and AI chatbots to scale customer support and sales 24/7 without friction.',
    tag: 'Automation & AI',
    link: '#contact'
  },
  {
    number: '08',
    title: 'MVP Development for Tech Startups.',
    subtitle: 'From idea to market-ready product in 4 to 8 weeks.',
    description: 'We turn startup concepts into scalable Minimum Viable Products (MVPs) engineered to raise capital and validate market demand. Complete product discovery, interactive Figma prototyping, full-stack engineering, and monetization pipelines—proven by our own incubated startups like Moments Gallery.',
    tag: 'Startups & MVPs',
    link: '#contact'
  },
  {
    number: '09',
    title: 'Database Architecture & Programming Academy.',
    subtitle: 'High-concurrency SQL/NoSQL design & mentorship by CS professors.',
    description: 'Our team includes university professors who teach programming, algorithms, and relational/NoSQL databases (PostgreSQL, MySQL, SQL Server, MongoDB, Redis). We design bulletproof data models, optimize slow enterprise queries, execute zero-downtime migrations, and train engineering squads.',
    tag: 'Databases & Mentorship',
    link: '#contact'
  }
];

// Portfolio items
const portfolioItems = [
  {
    title: 'Sin Huellas Nuevas Oportunidades — LegalTech & AI Operations',
    category: 'Law Firm • AI ERP & CRM',
    type: 'casos',
    isCaseStudy: true,
    image: '/assets/img/projects/sin-huellas.jpg',
    description: 'Complete operational reengineering for top law firm Sin Huellas Nuevas Oportunidades: automated WhatsApp Legal AI agents, case scoring, and centralized ERP/CRM saving +25 weekly hours per lawyer and cutting case management overhead by 70%.',
    tags: ['WhatsApp Cloud API', 'Legal ERP/CRM', '+70% Time Saved', 'Meta AI', 'Python'],
    link: '/proyectos/sin-huellas',
    liveUrl: 'https://www.sinhuellas.co/'
  },
  {
    title: 'Moments Gallery — Tech Startup & Marketplace',
    category: 'Tech Startup • Marketplace',
    type: 'startups',
    isStartup: true,
    image: '/assets/img/projects/moments.jpg',
    description: 'Digital startup and photo marketplace conceived and built by CODEVS: automated instant checkout, dynamic watermarks, and high-concurrency cloud architecture with Spring Boot + Nuxt.',
    tags: ['Spring Boot', 'Nuxt 3', 'Stripe', 'AWS S3', 'PostgreSQL'],
    link: '/proyectos/moments-gallery',
    liveUrl: 'https://www.moments-gallery.com/'
  },
  {
    title: 'Alacranes AFC Official Platform & Sports Branding',
    category: 'Web Platform & Sports Branding',
    type: 'web',
    image: '/assets/img/projects/alacranes.jpg',
    description: 'Interactive sports club web ecosystem featuring merchandising catalog, dynamic rosters, and high-performance sponsor showcase.',
    tags: ['Nuxt 3', 'TailwindCSS', 'Bento Grid', 'SEO #1 Google', 'GSAP'],
    link: '/proyectos/alacranes-afc',
    liveUrl: 'https://alacranes-afc.vercel.app/'
  },
  {
    title: 'IPTV Max Dashboard & UI',
    category: 'UX/UI & Media Software',
    type: 'ui',
    image: '/img/iptv/iptv-max.png',
    description: 'Next-generation multimedia streaming interface engineered for touch devices and interactive smart screens with 60 FPS fluidity.',
    tags: ['Figma Design System', '60 FPS', 'Micro-interactions', 'Android TV'],
    link: '/proyectos/iptv-max-ui'
  },
  {
    title: 'Enterprise Workflow Engine & Omnichannel AI',
    category: 'Cloud Automations & CRM',
    type: 'casos',
    image: '/assets/img/services/omnichannel-dashboard.jpg',
    description: 'Unified omnichannel communication system with WhatsApp Cloud API, Instagram Direct, and CRM integration for 24/7 autonomous support.',
    tags: ['Meta Cloud API', 'Python', 'n8n', 'PostgreSQL'],
    link: '/servicios/automatizaciones-omnicanalidad'
  }
];

const activePortfolioCategory = ref('all');

const portfolioCategories = computed(() => [
  { id: 'all', label: 'All Projects', count: portfolioItems.length },
  { id: 'casos', label: 'Case Studies & AI', count: portfolioItems.filter(i => i.type === 'casos').length },
  { id: 'startups', label: 'Startups & MVPs', count: portfolioItems.filter(i => i.type === 'startups').length },
  { id: 'web', label: 'Web & Cloud', count: portfolioItems.filter(i => i.type === 'web').length },
  { id: 'ui', label: 'UX/UI Design & TV', count: portfolioItems.filter(i => i.type === 'ui').length }
]);

const filteredPortfolioItems = computed(() => {
  if (activePortfolioCategory.value === 'all') return portfolioItems;
  return portfolioItems.filter(item => item.type === activePortfolioCategory.value);
});

// FAQ Accordion
const openFaqIndex = ref(0);
const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const usFaqs = [
  {
    question: 'Why does CODEVS’s team of Senior Engineers & Programming/Database Professors deliver superior results?',
    answer: 'Unlike generic agencies that rely on junior freelancers or slow templates, CODEVS is led by senior software architects and university professors who teach programming, algorithms, and relational/NoSQL databases (PostgreSQL, MySQL, MongoDB, Redis). This guarantees rock-solid data models, millisecond query execution, and zero technical debt.'
  },
  {
    question: 'Do you offer database architecture, SQL optimization, and corporate programming training?',
    answer: 'Yes. Beyond building full-scale custom software and AI agents, we audit, redesign, and optimize slow databases for scaling companies, and our professors provide specialized corporate training and technical mentorship in software engineering and database architecture.'
  },
  {
    question: 'How does the 7-day interactive prototype and risk-free guarantee work?',
    answer: 'We eliminate risk from day one: 1) Free 15-minute technical diagnosis with a Senior Architect. 2) Within the first 7 days, we deliver an interactive Figma prototype and database schema so you validate the exact product before full-scale coding. 3) Milestone-based payments and 100% IP ownership.'
  },
  {
    question: 'How does time zone alignment and daily communication work?',
    answer: 'We operate in Colombia (GMT-5), which matches Eastern Standard Time (EST) and Central Time (CST). We join daily standups via Zoom or Google Meet, collaborate continuously in Slack or WhatsApp, and run sprint boards directly in Jira, Linear, or GitHub.'
  },
  {
    question: 'How do invoicing and IP assignment work for US and international companies?',
    answer: 'Every contract includes strict 100% Intellectual Property (IP) assignment and Mutual NDAs. US and international clients can pay via ACH bank transfer, international wire, or corporate credit card in USD with W-8BEN-E compliance.'
  }
];

// Form handling
const form = reactive({
  name: '',
  email: '',
  company: '',
  budget: '',
  message: ''
});
const submitted = ref(false);

const submitContact = () => {
  const mailto = `mailto:comercial@codevs.dev?subject=US Discovery Inquiry: ${form.company || form.name} (${form.budget})&body=Name: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0ACompany: ${encodeURIComponent(form.company)}%0ABudget: ${encodeURIComponent(form.budget)}%0A%0AProject Details:%0A${encodeURIComponent(form.message)}`;
  window.location.href = mailto;
  submitted.value = true;
};

// SEO Head
useHead({
  title: 'CODEVS | Custom Software Development, Database Architecture & AI Squads #1',
  meta: [
    { 
      name: 'description', 
      content: 'CODEVS: #1 in custom software development, SQL/PostgreSQL database architecture, 24/7 WhatsApp AI agents, and web platforms. Led by senior engineers and programming/database professors with EST/CST alignment.' 
    },
    { 
      name: 'keywords', 
      content: 'codevs, custom software development, database architecture postgresql sql, programming and database professors, nearshore software development, hire dedicated developers colombia, whatsapp ai agents, custom erp crm development' 
    },
    { property: 'og:title', content: 'CODEVS | Custom Software Development, Database Architecture & AI Squads #1' },
    { property: 'og:description', content: 'Senior software engineers and programming/database professors building custom platforms, high-concurrency databases, and AI automations.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' },
    { property: 'og:url', content: 'https://www.codevs.dev/en' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CODEVS | Custom Software Development, Database Architecture & AI Squads #1' },
    { name: 'twitter:description', content: 'Senior software engineers and programming/database professors building custom platforms, high-concurrency databases, and AI automations.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/en' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://www.codevs.dev/en' },
    { rel: 'alternate', hreflang: 'es-CO', href: 'https://www.codevs.dev/' }
  ]
});

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'CODEVS Custom Software & Database Engineering',
  'alternateName': ['CODEVS', 'CODEVS Software Engineering'],
  'url': 'https://www.codevs.dev/en',
  'image': 'https://www.codevs.dev/img/codevs.png',
  'description': 'Custom Software Development, Database Architecture (SQL/PostgreSQL/NoSQL), and AI Automation led by Senior Engineers and Programming Professors.',
  'priceRange': '$$$',
  'telephone': '+57 3008051304',
  'areaServed': [
    { '@type': 'Country', 'name': 'United States' },
    { '@type': 'Country', 'name': 'Canada' },
    { '@type': 'Country', 'name': 'Colombia' }
  ]
}));
</script>

<style scoped>
.mesh-gradient-container {
  background-color: #07070a;
}

.mesh-static-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 12% 18%, rgba(220, 38, 38, 0.28) 0%, transparent 45%),
    radial-gradient(circle at 88% 82%, rgba(239, 68, 68, 0.22) 0%, transparent 45%),
    radial-gradient(circle at 50% 45%, rgba(185, 28, 28, 0.14) 0%, transparent 55%);
}

/* Glass Card (Optimized GPU Layer) */
.mesh-glass-card {
  background: rgba(18, 18, 24, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 28px 64px rgba(0, 0, 0, 0.65);
  transform: translateZ(0);
}

/* Huge Inc Transition */
.huge-slide-enter-active,
.huge-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.huge-slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.huge-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Sticky Stack Cards */
.sticky-stack-card {
  position: sticky;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sticky-stack-card:hover {
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}

/* Marquee Scroll */
@keyframes marquee-scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
</style>
