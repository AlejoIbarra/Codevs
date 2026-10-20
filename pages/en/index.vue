<template>
  <div class="selection:bg-red-600 selection:text-white">

    <!-- 1. Hero Section (Mesh Gradient, Kinetic Rotating Title, Frosted Glass Card, Integrated Tech Stack) -->
    <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07070a] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 mesh-gradient-container">
      
      <!-- Red Mesh Gradient Glow Orbs -->
      <div class="mesh-orb mesh-orb-1"></div>
      <div class="mesh-orb mesh-orb-2"></div>
      <div class="mesh-orb mesh-orb-3"></div>
      <div class="mesh-orb mesh-orb-4"></div>
      <div class="mesh-orb mesh-orb-5"></div>

      <!-- Interactive Mouse Light -->
      <div class="glow-bg absolute inset-0 z-0 pointer-events-none" ref="glowBg"></div>

      <div class="container mx-auto max-w-7xl relative z-10 w-full">
        
        <div class="mesh-glass-card rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center transition-all duration-500">
          
          <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-white/20 to-transparent blur-2xl pointer-events-none"></div>

          <div class="max-w-4xl mx-auto space-y-6 sm:space-y-8 my-4">
            
            <!-- Monumental Headline -->
            <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
              Nearshore <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
                Software Engineering
              </span>
              <span class="block text-2xl sm:text-4xl lg:text-5xl font-light text-white/70 tracking-normal mt-2">
                & Dedicated Tech Squads
              </span>
            </h1>

            <!-- Kinetic Rotating Title Style Huge Inc -->
            <div class="flex items-center justify-center flex-wrap gap-2 text-lg sm:text-2xl md:text-3xl font-bold text-white/90">
              <span>We engineer technology that accelerates</span>
              <span class="relative inline-block text-red-500 overflow-hidden h-[1.3em] min-w-[140px] sm:min-w-[170px] text-left">
                <Transition name="huge-slide" mode="out-in">
                  <span :key="currentRotatingWord" class="inline-block font-black underline decoration-red-600/50 decoration-2 underline-offset-4">
                    {{ currentRotatingWord }}
                  </span>
                </Transition>
              </span>
            </div>

            <!-- Value Narrative -->
            <p class="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed text-center">
              We are <strong class="text-white font-semibold">CODEVS</strong>. We build mission-critical <strong class="text-white font-semibold">web applications</strong>, cloud software, and <strong class="text-white font-semibold">AI workflow automations</strong> with Silicon Valley standards, EST/CST alignment, and zero technical debt for scaling US companies.
            </p>

            <!-- Frosted Glass Action Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href="#contact" class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
                <span>Hire a Senior Squad</span>
                <i class="bi bi-arrow-up-right text-xs"></i>
              </a>

              <a href="#portfolio" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white/90 font-medium text-sm backdrop-blur-xl transition-all duration-300 hover:border-white/30">
                <span>View Case Studies</span>
                <i class="bi bi-arrow-down text-xs"></i>
              </a>
            </div>

            <!-- US Nearshore Trust Badges -->
            <div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-zinc-400">
              <span class="flex items-center gap-1.5"><i class="bi bi-clock-fill text-red-500"></i> EST & CST Overlap</span>
              <span class="flex items-center gap-1.5"><i class="bi bi-shield-lock-fill text-red-500"></i> 100% IP Assignment & NDAs</span>
              <span class="flex items-center gap-1.5"><i class="bi bi-credit-card-2-front-fill text-red-500"></i> ACH & Wire Invoicing in USD</span>
            </div>

          </div>

          <!-- Integrated Technology Logos Row (White Monochrome with Hover Glow) -->
          <div class="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
            <span class="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-6">
              Our Core Production Stack
            </span>

            <div class="w-full overflow-hidden relative">
              <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                <div v-for="(tech, idx) in techLogos" :key="idx"
                  class="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                  <img :src="tech.icon" :alt="tech.name"
                    class="h-7 sm:h-9 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 2. About Section (Rocket Scroll Experience, 3D Tilt Cards, Team Squad) -->
    <section id="about" ref="aboutSection" class="about-section relative bg-[#07070a] text-white overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
      
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Left Column -->
          <div class="lg:col-span-6 space-y-8">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Driven by <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
                Engineering Rigor.
              </span>
            </h2>

            <div class="space-y-4 text-zinc-300 font-normal leading-relaxed text-justify text-base sm:text-lg">
              <p class="border-l-4 border-red-600 pl-4 py-2 bg-white/[0.03] backdrop-blur-md rounded-r-2xl border-y border-r border-white/10">
                At <strong class="text-white font-bold">CODEVS</strong>, we bridge the gap between world-class engineering quality and nearshore agility. We eliminate the 12-hour timezone delays of traditional offshore vendors and provide transparent sprint-based execution.
              </p>
              <p class="text-zinc-400 text-base leading-relaxed">
                Our senior full-stack developers and architects build ultra-fast, scalable digital products with microsecond response times, automated CI/CD pipelines, and bulletproof code for North American businesses.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                <div class="text-3xl font-black text-white mb-1">100%</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Clean Code</div>
                <div class="text-[11px] text-zinc-400 mt-1">Zero bloated templates</div>
              </div>
              <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                <div class="text-3xl font-black text-red-500 mb-1">EST/CST</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Timezone</div>
                <div class="text-[11px] text-zinc-400 mt-1">Real-time daily sync</div>
              </div>
              <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
                <div class="text-3xl font-black text-white mb-1">Top 3%</div>
                <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Senior Talent</div>
                <div class="text-[11px] text-zinc-400 mt-1">Vetted full-stack squads</div>
              </div>
            </div>

            <!-- Team Avatars -->
            <div class="flex items-center gap-4 pt-4 border-t border-white/10">
              <div class="flex -space-x-3">
                <img src="/img/team/team-1.jpg" alt="Senior Engineer" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
                <img src="/img/team/team-2.jpg" alt="UI/UX Specialist" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
                <img src="/img/team/team-3.jpg" alt="Cloud Architect" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
              </div>
              <div>
                <div class="text-sm font-bold text-white">Dedicated Engineering Squads</div>
                <div class="text-xs text-zinc-400">Full-Stack Engineers, UX Designers & DevOps Leads</div>
              </div>
            </div>

          </div>

          <!-- Right Column: 3D Tilt Vision & Mission Cards -->
          <div class="lg:col-span-6 space-y-6 w-full">
            
            <div class="group relative bg-white/[0.04] border border-white/15 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden">
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black shadow-inner">
                  <img src="/img/working-2.jpg" alt="Collaborative Engineering Sprint" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <h3 class="text-2xl font-bold text-white tracking-wide">Technical Leadership</h3>
                    <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">Nearshore</span>
                  </div>
                  <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                    We act as your trusted technical co-creators. We don't just take tickets; we optimize system architectures, improve database performance, and ensure your product scales without bottlenecks.
                  </p>
                </div>
              </div>
            </div>

            <div class="group relative bg-white/[0.04] border border-white/15 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden">
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black shadow-inner">
                  <img src="/img/working-4.jpg" alt="Production-Grade Software Deployment" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <h3 class="text-2xl font-bold text-white tracking-wide">Velocity & Scalability</h3>
                    <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">Delivery</span>
                  </div>
                  <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                    Deliver your product roadmap 2x faster with senior engineers who understand modern CI/CD, microservices, and reactive frontends. Seamless integration into your Jira, Slack, and GitHub workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Quote Banner -->
        <div class="mt-20">
          <div class="relative bg-white/[0.03] border border-white/15 p-8 sm:p-12 rounded-[32px] shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/40 transition-colors duration-500">
            <div class="max-w-3xl mx-auto space-y-4 relative z-10">
              <i class="bi bi-quote text-4xl text-red-500 inline-block mb-1"></i>
              <blockquote class="text-lg sm:text-2xl font-medium text-white tracking-tight leading-snug">
                "Great software isn't just about syntax—it's about building scalable, secure, and revenue-driving digital engines that give businesses an unfair market advantage."
              </blockquote>
              <div class="text-sm font-semibold text-zinc-400 uppercase tracking-widest pt-2">
                — CODEVS Engineering Core
              </div>
            </div>
          </div>
        </div>

        <!-- Animated Rocket Scroll -->
        <RocketScroll />

      </div>
    </section>

    <!-- 3. Never Done Section (Huge Inc Style 3D Radial Scroll-Driven Cards) -->
    <NeverDoneSection />

    <!-- 4. Solutions Section (Stacking Cards 01 to 07 with Clean White Theme) -->
    <section id="services" class="relative bg-white text-zinc-900 py-24 lg:py-36 border-t border-zinc-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Monumental Section Header -->
        <div class="max-w-3xl mb-16 lg:mb-24">
          <h2 class="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight leading-[0.98]">
            Solutions.
          </h2>
          <p class="text-zinc-600 text-lg sm:text-2xl mt-5 font-normal leading-relaxed">
            Enterprise software engineering, extreme velocity, and clean architecture. The technical capabilities that turn complex ideas into high-impact products.
          </p>
        </div>

        <!-- Stacking Cards List -->
        <div class="space-y-8 relative pb-12">
          <article
            v-for="(item, index) in solutions"
            :key="index"
            class="sticky-stack-card group rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between transition-all duration-300"
            :style="{
              top: `calc(5.5rem + ${index * 1.5}rem)`,
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
              <a
                href="#contact"
                class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors shrink-0"
              >
                <span>Request Scope</span>
                <i class="bi bi-arrow-right text-xs"></i>
              </a>
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
        
        <div class="max-w-3xl mb-16">
          <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
            Featured <br />
            <span class="text-red-600">Case Studies.</span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-5 leading-relaxed">
            Explore recent software architectures, interactive platforms, and mobile apps built to deliver tangible business ROI.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            v-for="(item, i) in portfolioItems"
            :key="i"
            class="group relative bg-white rounded-[28px] overflow-hidden border border-zinc-200/90 hover:border-zinc-950/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div class="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <span class="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                  {{ item.category }}
                </span>
              </div>

              <div class="p-8 space-y-3">
                <h3 class="text-2xl font-black text-zinc-950 group-hover:text-red-600 transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <p class="text-zinc-600 text-sm leading-relaxed text-justify">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="p-8 pt-0 flex items-center justify-between border-t border-zinc-100 mt-4">
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, idx) in item.tags" :key="idx" class="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                  {{ tag }}
                </span>
              </div>
              <NuxtLink :to="item.link" class="text-sm font-bold text-zinc-950 hover:text-red-600 flex items-center gap-1 transition-colors">
                <span>View Details</span>
                <i class="bi bi-arrow-right text-xs"></i>
              </NuxtLink>
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
            Frequently Asked Questions for <br />
            <span class="text-red-600">US Companies & Agencies</span>
          </h2>
          <p class="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
            Everything you need to know about working with CODEVS as your nearshore software engineering partner.
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

    <!-- 8. Contact & Discovery Form Section (Dark Mesh Glass Card) -->
    <section id="contact" class="contact-section bg-[#07070a] text-gray-200 py-28 lg:py-36 border-t border-zinc-900 relative overflow-hidden">
      <div class="absolute top-10 left-[-8%] w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[170px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-[-8%] w-[600px] h-[600px] bg-red-700/12 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div class="max-w-3xl mb-16">
          <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Let's Build Your Next <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Breakthrough Project.
            </span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
            Tell us about your technical roadmap or hiring needs. A Senior Technical Director will reply with an estimate and architecture breakdown within 24 business hours.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Coordinates & Direct US Communication -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-white/[0.04] border border-white/15 p-8 rounded-[28px] shadow-xl backdrop-blur-xl">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                  <i class="bi bi-clock-history text-2xl"></i>
                </div>
                <div class="space-y-1">
                  <span class="text-xs font-bold uppercase text-red-500 tracking-wider">Timezone & Availability</span>
                  <h3 class="text-xl font-bold text-white">GMT-5 (EST / CST Alignment)</h3>
                  <p class="text-zinc-400 text-sm">Real-time collaboration during regular US business hours.</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer" 
                 class="bg-white/[0.04] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-red-500/40 transition-colors block backdrop-blur-xl">
                <div class="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                  <i class="bi bi-whatsapp text-2xl"></i>
                </div>
                <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Instant Chat</span>
                <div class="text-base font-bold text-white mt-1 group-hover:text-red-400 transition-colors">+57 313 806 6800</div>
                <p class="text-zinc-500 text-xs mt-1">Direct to Technical Director</p>
              </a>

              <a href="mailto:comercial@codevs.dev" 
                 class="bg-white/[0.04] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-red-500/40 transition-colors block backdrop-blur-xl">
                <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                  <i class="bi bi-envelope-at text-2xl"></i>
                </div>
                <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Direct Email</span>
                <div class="text-base font-bold text-white mt-1 group-hover:text-red-400 transition-colors">comercial@codevs.dev</div>
                <p class="text-zinc-500 text-xs mt-1">Confidential RFPs & Inquiries</p>
              </a>
            </div>

            <div class="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-black to-black border border-red-500/30 text-xs text-zinc-300 space-y-2">
              <div class="flex items-center gap-2 font-bold text-red-400">
                <i class="bi bi-shield-check text-base"></i>
                <span>Strict US Confidentiality Standards</span>
              </div>
              <p class="text-zinc-400">
                All client proposals, codebases, and conversations are protected under binding Mutual NDAs. We never share your proprietary data or ideas.
              </p>
            </div>

          </div>

          <!-- Right Column: Interactive Proposal Form -->
          <div class="lg:col-span-7">
            <div class="bg-white/[0.04] border border-white/15 p-8 sm:p-12 rounded-[32px] shadow-2xl backdrop-blur-2xl">
              <form @submit.prevent="submitContact" class="space-y-6">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Your Full Name *</label>
                    <input v-model="form.name" type="text" required placeholder="Sarah Connor"
                      class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm" />
                  </div>

                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Work Email *</label>
                    <input v-model="form.email" type="email" required placeholder="sarah@company.com"
                      class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Company / Organization</label>
                    <input v-model="form.company" type="text" placeholder="Acme Technologies"
                      class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm" />
                  </div>

                  <div class="space-y-2">
                    <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Estimated Budget (USD) *</label>
                    <select v-model="form.budget" required
                      class="w-full px-4 py-3.5 rounded-2xl bg-[#141419] border border-white/15 text-white focus:outline-none focus:border-red-500 transition-colors text-sm cursor-pointer">
                      <option value="" disabled selected>Select budget range</option>
                      <option value="$5k - $15k">$5,000 - $15,000 (Sprint / MVP)</option>
                      <option value="$15k - $30k">$15,000 - $30,000 (Full Platform)</option>
                      <option value="$30k - $60k">$30,000 - $60,000 (Enterprise Solution)</option>
                      <option value="$60k+">$60,000+ (Dedicated Long-Term Squad)</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Project Overview & Objectives *</label>
                  <textarea v-model="form.message" rows="4" required placeholder="Tell us about your requirements, technical stack, or developer hiring goals..."
                    class="w-full px-4 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors text-sm resize-none"></textarea>
                </div>

                <div v-if="submitted" class="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm text-center">
                  Thank you! Your inquiry has been forwarded to our Lead Solutions Architect. We'll be in touch within 24 hours.
                </div>

                <button type="submit"
                  class="w-full py-4 rounded-2xl bg-[#E7000B] hover:bg-red-700 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.01] flex items-center justify-center gap-2">
                  <span>Send Proposal Request</span>
                  <i class="bi bi-arrow-up-right text-xs"></i>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import RocketScroll from '~/components/ui/RocketScroll.vue';
import NeverDoneSection from '~/components/NeverDoneSection.vue';
import BlogSection from '~/components/BlogSection.vue';

const whatsappUSUrl = 'https://wa.me/573138066800?text=Hello%20CODEVS%2C%20I%20am%20reaching%20out%20from%20the%20US%20regarding%20a%20software%20engineering%20project.';

// Kinetic rotating word
const rotatingWords = [
  'startups.',
  'enterprises.',
  'scaleups.',
  'agencies.',
  'disruptors.',
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

// Solutions (Stacking cards 01 to 07)
const solutions = [
  {
    number: '01',
    title: 'Custom Software & Cloud Platforms.',
    subtitle: 'Enterprise architectures engineered for high concurrency.',
    description: 'High-performance cloud platforms and microservices designed for zero downtime and extreme throughput using Java, Spring Boot, PostgreSQL, and AWS.',
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
  }
];

// Portfolio items
const portfolioItems = [
  {
    title: 'Alacranes AFC Official Platform',
    category: 'Web Platform & Sports Branding',
    image: '/assets/img/projects/alacranes.jpg',
    description: 'Interactive sports club web ecosystem featuring merchandising catalog, dynamic rosters, and high-performance sponsor showcase.',
    tags: ['Nuxt 3', 'TailwindCSS', 'SEO #1'],
    link: '/proyectos/alacranes-afc'
  },
  {
    title: 'Moments Gallery Marketplace',
    category: 'E-Commerce & Digital Media',
    image: '/assets/img/projects/moments.jpg',
    description: 'High-speed photographic media marketplace with automated checkout, digital downloads, and instant secure payment gateway integrations.',
    tags: ['Spring Boot', 'Vue.js', 'Stripe/PSE'],
    link: '/proyectos/moments-gallery'
  },
  {
    title: 'IPTV Max Dashboard & UI',
    category: 'UX/UI & Media Software',
    image: '/img/iptv/iptv-max.png',
    description: 'Next-generation multimedia streaming interface engineered for touch devices and interactive smart screens with 60 FPS fluidity.',
    tags: ['Figma', 'Design System', 'Micro-interactions'],
    link: '/proyectos/iptv-max-ui'
  },
  {
    title: 'Enterprise Workflow Engine',
    category: 'Cloud Automations & CRM',
    image: '/assets/img/services/omnichannel-dashboard.jpg',
    description: 'Unified omnichannel communication system with WhatsApp Cloud API, Instagram Direct, and CRM integration for 24/7 autonomous support.',
    tags: ['Meta Cloud API', 'Python', 'n8n'],
    link: '/servicios/automatizaciones-omnicanalidad'
  }
];

// FAQ Accordion
const openFaqIndex = ref(0);
const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const usFaqs = [
  {
    question: 'How does time zone alignment and daily communication work?',
    answer: 'We operate in Colombia (GMT-5), which precisely matches Eastern Standard Time (EST) for half of the year and Central Time (CST) for the other half. We join daily standups via Zoom or Google Meet, collaborate continuously in Slack or Discord, and run sprint boards directly in Jira, Linear, or GitHub.'
  },
  {
    question: 'Who owns the intellectual property and code repository?',
    answer: 'You do—100%. Every single contract includes strict Intellectual Property (IP) assignment clauses. Every commit, branch, design asset, and cloud resource created during the engagement is exclusively owned by your company upon milestone invoice settlement.'
  },
  {
    question: 'How do invoicing and payments work for US companies?',
    answer: 'Cross-border collaboration is frictionless. US companies can pay via standard ACH bank transfer, international Fedwire, or corporate credit cards through Stripe in USD. We sign W-8BEN-E tax documentation and provide clean corporate invoices.'
  },
  {
    question: 'Can we start with a small pilot project or discovery sprint?',
    answer: 'Absolutely. Many of our long-term US partners begin with a focused 2-week Discovery or MVP Sprint ($5,000 - $10,000 USD). This allows your team to experience our code velocity, communication quality, and technical rigor before committing to a larger dedicated squad.'
  },
  {
    question: 'Do you offer white-label partnerships for US digital agencies?',
    answer: 'Yes. We act as the silent, reliable engineering arm for US digital and creative agencies. We handle complex backend architectures, APIs, and high-performance frontends under strict non-disclosure while your agency manages the client relationship.'
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
  title: 'Nearshore Software Development & Dedicated Tech Squads | CODEVS',
  meta: [
    { 
      name: 'description', 
      content: 'Silicon Valley caliber engineering with real-time EST/CST alignment. CODEVS builds custom web platforms, cloud software, and AI automations for scaling US companies and digital agencies.' 
    },
    { 
      name: 'keywords', 
      content: 'nearshore software development, hire dedicated developers colombia, nearshore engineering squad, custom software development us, nuxt vue developers for hire, spring boot nearshore development, white label dev agency' 
    },
    { property: 'og:title', content: 'Nearshore Software Development & Dedicated Tech Squads | CODEVS' },
    { property: 'og:description', content: 'High-performance dedicated software engineering squads in your time zone. Full IP ownership and seamless US collaboration.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' },
    { property: 'og:url', content: 'https://www.codevs.dev/en' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nearshore Software Development & Dedicated Tech Squads | CODEVS' },
    { name: 'twitter:description', content: 'High-performance dedicated software engineering squads in your time zone. Full IP ownership and seamless US collaboration.' },
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
  'name': 'CODEVS Nearshore Software Engineering',
  'url': 'https://www.codevs.dev/en',
  'image': 'https://www.codevs.dev/img/codevs.png',
  'description': 'Senior Nearshore Software Development and Dedicated Tech Squads for US Companies and Funded Startups.',
  'priceRange': '$$$',
  'telephone': '+57 3138066800',
  'areaServed': [
    { '@type': 'Country', 'name': 'United States' },
    { '@type': 'Country', 'name': 'Canada' },
    { '@type': 'Country', 'name': 'Colombia' }
  ]
}));
</script>

<style scoped>
/* Mesh Gradient Orbs Animation */
.mesh-gradient-container {
  background-color: #07070a;
}

.mesh-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  opacity: 0.6;
  animation: floatOrb 22s ease-in-out infinite alternate;
}

.mesh-orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(185, 28, 28, 0.1) 70%, transparent 100%);
  top: -100px;
  left: -100px;
}

.mesh-orb-2 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(153, 27, 27, 0.1) 70%, transparent 100%);
  bottom: -50px;
  right: -50px;
  animation-duration: 26s;
}

.mesh-orb-3 {
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, rgba(136, 19, 55, 0.08) 70%, transparent 100%);
  top: 40%;
  left: 30%;
  animation-duration: 18s;
}

.mesh-orb-4 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(185, 28, 28, 0.3) 0%, transparent 70%);
  top: 15%;
  right: 15%;
  animation-duration: 20s;
}

.mesh-orb-5 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(127, 29, 29, 0.35) 0%, transparent 70%);
  bottom: 10%;
  left: 10%;
  animation-duration: 24s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.08); }
  100% { transform: translate(-30px, 40px) scale(0.95); }
}

/* Glass Card */
.mesh-glass-card {
  background: rgba(18, 18, 24, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(36px);
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.7);
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
</style>
