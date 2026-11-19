<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. High-Conversion Hero Banner -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <!-- Ambient Lighting -->
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
          <span class="text-zinc-300">Custom Software Development</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Text & Value Proposition Column -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/40 backdrop-blur-xl shadow-lg shadow-red-950/20">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-red-400 font-extrabold uppercase tracking-widest text-xs">
                Nearshore Software Engineering Hub • EST/CST Aligned
              </span>
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]">
              Custom Software
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                &amp; Database Engineering.
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              We architect and build enterprise-grade ERPs, revenue CRMs, cloud platforms, and resilient database systems. Crafted by <strong class="text-white font-semibold">senior software architects and university computer science professors</strong>. 100% proprietary code ownership, zero per-seat subscription lock-in, and a working prototype delivered in 7 business days.
            </p>

            <!-- Key Trust & Authority Points -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-zinc-300">
              <div class="flex items-center gap-2.5">
                <i class="bi bi-mortarboard-fill text-red-500 text-base"></i>
                <span>Architected by CS professors &amp; senior engineers</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-lightning-charge-fill text-red-500 text-base"></i>
                <span>Interactive working prototype in 7 business days</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-shield-check text-red-500 text-base"></i>
                <span>100% Proprietary code ownership (Zero lock-in)</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-clock-history text-red-500 text-base"></i>
                <span>Same time-zone execution for US founders &amp; CTOs</span>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>Schedule an Engineering Discovery Call</span>
              </a>
              <a href="#coverage"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                <i class="bi bi-globe-americas text-red-500"></i>
                <span>Explore Geographic Delivery</span>
              </a>
            </div>
          </div>

          <!-- Console & Live Telemetry Column -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-red-950/30 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/50">
              
              <div class="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">CODEVS Core Architecture v4.2</span>
              </div>

              <div class="space-y-4 font-mono text-xs">
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-database-fill-gear text-red-500 text-sm"></i>
                    <span class="text-zinc-300">PostgreSQL Cloud Cluster</span>
                  </div>
                  <span class="text-emerald-400 font-bold">&lt; 15ms Query Latency</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-cpu-fill text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Spring Boot Microservices</span>
                  </div>
                  <span class="text-emerald-400 font-bold">99.98% SLA Uptime</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-shield-lock-fill text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Bank-Grade Encryption</span>
                  </div>
                  <span class="text-blue-400 font-bold">TLS 1.3 / AES-256</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-clock-history text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Working Prototype Delivery</span>
                  </div>
                  <span class="text-amber-400 font-bold">7 Business Days</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">Why US Companies Choose CODEVS:</strong> Unlike generic outsourcing shops that cycle junior contractors, your architecture is directly built and governed by computer science professors and principal engineers in Colombia with 60% cost efficiency.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Local Authority & Engineering Hub in Pasto / Colombia -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-semibold text-red-400 mb-3">
            <i class="bi bi-geo-alt"></i>
            <span>Engineering Hub • Pasto &amp; Colombia</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Rooted in Pasto, <span class="text-red-500">Delivering Globally</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Our engineering headquarters is located in San Juan de Pasto, Nariño, serving as Colombia’s high-precision software engineering center. We connect deep academic software rigor with rapid commercial execution for Latin America and the United States.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-briefcase"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">LegalTech &amp; Case Automation</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Automated claims processing, legal term trackers, and high-security document management as proven by our case study <strong class="text-zinc-200">Sin Huellas</strong> in Colombia.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-hospital"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Healthcare &amp; Clinical Systems</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              HIPAA-aligned electronic health records (EHR), automated appointment scheduling, and fast query engines for medical practices and clinics.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-truck"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Cross-Border Logistics &amp; Distribution</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Multi-warehouse inventory synchronization, customs integration, dispatch tracking, and live telemetry across distribution routes.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-bank"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Fintech &amp; Credit Scoring</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Microfinance platforms, amortization tables, automated collections, and financial data integrity powered by ACID-compliant PostgreSQL.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-flower1"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">AgriTech &amp; Specialty Exports</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Farm-to-cup traceability for Nariño’s world-renowned specialty coffee, batch tracking, farmer settlements, and export certification systems.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-globe2"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">US Nearshore SaaS Platforms</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Dedicated engineering squads delivering high-concurrency cloud software, multi-tenant architectures, and Stripe billing pipelines for US founders.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 3. Comparison Matrix: CODEVS vs Off-the-Shelf SaaS vs Generic Freelancers -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Why Custom Engineering with <span class="text-red-500">CODEVS</span> Outperforms Alternatives
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Compare owning your core intellectual property against renting rigid subscription SaaS or relying on unreliable junior freelancers.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr class="border-b border-zinc-800">
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Evaluation Criteria</th>
                <th class="py-4 px-6 text-sm font-bold text-red-500 uppercase bg-red-950/20 border-x border-zinc-800">CODEVS Custom Engineering</th>
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Commercial Off-the-Shelf (SaaS)</th>
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Freelance Contractors</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800/60 text-sm">
              <tr>
                <td class="py-4 px-6 font-medium text-white">Source Code &amp; IP Ownership</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 100% Owned by you forever
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Zero ownership (Rented forever)
                </td>
                <td class="py-4 px-6 text-amber-400">
                  <i class="bi bi-exclamation-triangle-fill mr-1.5"></i> Fragmented or unverified IP
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Per-User Monthly Pricing</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> $0 per user (Unlimited seats)
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Expensive, escalating monthly bills
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Unpredictable hourly billing
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Business Process Fit</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 100% Tailored to your exact workflow
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> You must adapt your business to their limits
                </td>
                <td class="py-4 px-6 text-amber-400">
                  Limited to their individual skill level
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Database Rigor &amp; Architecture</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> Architected by university CS professors
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Black-box with zero raw SQL access
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Fragile schemas that break at scale
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Time to Working Prototype</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 7 Business Days
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Immediate, but completely rigid
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Months of vague delays and ghosting
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Contracts, SLA &amp; Support</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> Enterprise contracts &amp; guaranteed SLAs
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Automated support ticket queues
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Zero formal warranties or liability
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <!-- 4. Core Software Solutions We Build -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Enterprise Solutions We <span class="text-red-500">Architect</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Every line of code is written for speed, security, and long-term business scalability.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-diagram-3-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Custom Enterprise ERPs</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Unify multi-warehouse inventories, purchasing pipelines, work orders, dispatch logs, and tax compliance under one cohesive, custom-built system.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Real-time inventory reconciliation</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Treasury &amp; automated receivables</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Executive dashboards &amp; telemetry</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-people-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Revenue CRMs &amp; Pipeline Automation</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Capture every sales lead, track deals through customized pipelines, and seamlessly automate notifications and WhatsApp/email engagement.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Custom deal stages &amp; lead scoring</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Automated follow-up triggers</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Agent conversion telemetry</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-database-fill-check text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Database Architecture &amp; Optimization</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Our signature differentiator. We architect resilient relational databases with PostgreSQL and MySQL, tuned indexing, and sub-15ms queries.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Rigorous ACID normalization</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>In-memory caching with Redis</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Migration from fragile legacy sheets</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-cloud-arrow-up-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Cloud Microservices &amp; Secure APIs</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Decoupled cloud backends built with Java 21, Spring Boot 3, and Docker, engineered to support massive concurrent throughput without downtime.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Documented RESTful &amp; GraphQL APIs</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Automated CI/CD deployments on AWS</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Load balancing &amp; high availability</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-robot text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">AI Agents for Complex Operations</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Embed custom artificial intelligence directly into your software: automated invoice/contract parsing, RAG query engines over proprietary data, and 24/7 AI assistants.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Enterprise RAG over internal docs</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Intelligent lead categorization</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Strict zero-hallucination policies</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-arrow-repeat text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Legacy Modernization &amp; Cloud Migration</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Still running your business on outdated on-premise desktop software or tangled spreadsheets? We re-engineer your core systems into high-speed modern web platforms.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Zero-downtime data migration</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Secure web &amp; mobile access</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Comprehensive team training</li>
            </ul>
          </div>

        </div>

        <!-- Featured Software Consulting & Technical Advisory Callout -->
        <div class="mt-12 p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-950/20">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 text-red-400 text-xs font-bold uppercase tracking-wider">
              <i class="bi bi-briefcase"></i>
              <span>Technology Consulting Practice</span>
            </div>
            <h3 class="text-2xl font-black text-white">Need a Code Audit, PostgreSQL Query Tuning, or a Fractional CTO?</h3>
            <p class="text-zinc-400 text-sm max-w-2xl">
              We also operate as an elite technology advisory: diagnosing high-latency databases, performing technical due diligence for VCs and founders, and rescuing stalled legacy codebases.
            </p>
          </div>
          <NuxtLink to="/en/servicios/consultoria-software"
            class="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-950/30 hover:scale-[1.02]">
            <span>Explore Software Consulting</span>
            <i class="bi bi-arrow-right"></i>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- 5. Interactive Geographic Delivery Hub -->
    <section id="coverage" class="py-20 border-b border-zinc-900 bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-semibold text-red-400 mb-3">
            <i class="bi bi-map"></i>
            <span>Global Delivery &amp; Nearshore Coverage</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Explore Delivery by <span class="text-red-500">Region</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Select your region to explore localized case studies, key industry verticals, and nearshore engineering support.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Pasto Hub -->
          <NuxtLink to="/en/servicios/desarrollo-software/pasto" 
            class="group p-6 rounded-2xl bg-gradient-to-b from-red-950/20 to-zinc-900/80 border border-red-500/50 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-red-950/20">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider">
                Engineering HQ #1
              </span>
              <i class="bi bi-arrow-up-right text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Pasto, Nariño</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Our engineering headquarters: university-backed database professors, LegalTech solutions, and local high-touch delivery.
            </p>
            <span class="text-xs text-red-400 font-semibold group-hover:underline">
              Explore Pasto Hub →
            </span>
          </NuxtLink>

          <!-- United States & Global Nearshore -->
          <NuxtLink to="/en/servicios/desarrollo-software/estados-unidos" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-blue-500/40 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider">
                USA &amp; Nearshore
              </span>
              <i class="bi bi-arrow-up-right text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">USA &amp; International</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Time-zone aligned senior engineering squads for US startups and enterprises with 60% savings.
            </p>
            <span class="text-xs text-blue-400 font-semibold group-hover:underline">
              Explore Nearshore Delivery →
            </span>
          </NuxtLink>

          <!-- Colombia National -->
          <NuxtLink to="/en/servicios/desarrollo-software/colombia" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">National Delivery</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Colombia (32 Departments)</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Nationwide delivery with full DIAN compliance, local payment gateways, and data protection alignment.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explore Colombia →
            </span>
          </NuxtLink>

          <!-- Bogotá D.C. -->
          <NuxtLink to="/en/servicios/desarrollo-software/bogota" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Capital District</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Bogotá D.C.</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              High-throughput architectures for financial institutions, corporate enterprises, and consulting firms.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explore Bogotá →
            </span>
          </NuxtLink>

          <!-- Medellín & Antioquia -->
          <NuxtLink to="/en/servicios/desarrollo-software/medellin" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Innovation Hub</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Medellín &amp; Antioquia</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Rapid MVP prototyping, modern Vue/Nuxt platforms, and manufacturing software for the Aburrá Valley.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explore Medellín →
            </span>
          </NuxtLink>

          <!-- Cali & Valle del Cauca -->
          <NuxtLink to="/en/servicios/desarrollo-software/cali" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Industrial &amp; Pacific</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Cali &amp; Valle del Cauca</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Plant process control, pharmaceutical inventory, and logistics towards the Buenaventura seaport.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explore Cali →
            </span>
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- 6. Real Case Studies -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            High-Impact Case Studies in <span class="text-red-500">Production</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            We don't sell theoretical mockups. We engineer enterprise systems that process millions of records and drive revenue daily.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div class="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-red-400 uppercase tracking-wider">LegalTech &amp; Judicial ERP</span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-semibold">In Production</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">Sin Huellas: Automated LegalTech ERP</h3>
            <p class="text-zinc-300 text-sm leading-relaxed mb-6">
              Custom platform engineered to automate filings, tracking deadlines, and managing thousands of legal claims with bank bureaus.
            </p>
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80 text-center">
              <div>
                <span class="block text-xl font-black text-white">70%</span>
                <span class="text-xs text-zinc-400">Manual Time Saved</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">100%</span>
                <span class="text-xs text-zinc-400">Audit Compliance</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">&lt; 20ms</span>
                <span class="text-xs text-zinc-400">PostgreSQL Latency</span>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-red-400 uppercase tracking-wider">Cloud Marketplace • Global SaaS</span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-semibold">Validated Startup</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">Moments Gallery: Scalable Cloud Platform</h3>
            <p class="text-zinc-300 text-sm leading-relaxed mb-6">
              Cloud infrastructure for real-time photo processing, event monetization, and distributed storage on AWS S3 with Stripe &amp; Wompi payments.
            </p>
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80 text-center">
              <div>
                <span class="block text-xl font-black text-white">60 FPS</span>
                <span class="text-xs text-zinc-400">Fluid Interface</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">4 Weeks</span>
                <span class="text-xs text-zinc-400">MVP to Launch</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">Global</span>
                <span class="text-xs text-zinc-400">Multi-Currency</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 7. FAQs for US & International CTOs -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions on <span class="text-red-500">Custom Software</span>
          </h2>
          <p class="text-zinc-400 text-base mt-3">
            Key insights for engineering leaders, CTOs, and founders.
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx"
            class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 class="text-lg font-bold text-white mb-2 flex items-start gap-3">
              <i class="bi bi-question-circle-fill text-red-500 mt-0.5 shrink-0"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="text-zinc-400 text-sm leading-relaxed pl-7">
              {{ faq.a }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- 8. Final CTA -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Ready to Engineer Your <span class="text-red-500">Custom Software</span>?
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
          Schedule a discovery session with a CODEVS principal architect. We deliver your architectural blueprint and prototype roadmap within 48 hours.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>Schedule WhatsApp Discovery Call</span>
          </a>
          <NuxtLink to="/en#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Send Project Inquiry
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { useJsonld } from '#imports';

const whatsappUrl = 'https://wa.me/573138066800?text=Hello%20CODEVS%2C%20I%20am%20interested%20in%20custom%20software%20development%20and%20database%20engineering.';

const faqs = [
  {
    q: 'How does CODEVS ensure senior-level software quality?',
    a: 'Our core leadership consists of university computer science professors who actively teach relational database design and advanced algorithms in Colombia. Every line of backend code and schema design adheres to strict architectural principles, preventing technical debt from day one.'
  },
  {
    q: 'Do we own 100% of the source code and IP?',
    a: 'Yes, unconditionally. All source code, database migration scripts, API documentation, and cloud deployment pipelines are transferred completely to your company. There are zero perpetual per-user licensing fees or vendor lock-in.'
  },
  {
    q: 'How does time-zone alignment work for US and international clients?',
    a: 'Colombia operates on UTC-5 (equivalent to US Eastern Standard Time and Central Daylight Time). Your dedicated engineering squad collaborates live via Slack, Google Meet, and Jira during normal US business hours.'
  },
  {
    q: 'When do we see the first functional working prototype?',
    a: 'We deliver an interactive, functional working prototype in exactly 7 business days from requirement sign-off. This validates screen flows, data structures, and business logic before full-scale deployment.'
  }
];

useHead({
  title: 'Custom Software Development & Database Engineering | CODEVS #1',
  meta: [
    { 
      name: 'description', 
      content: 'Premier custom software development and database engineering company in Colombia and Pasto, serving US and LATAM enterprises. Working prototype in 7 days, 100% proprietary code.' 
    },
    { 
      name: 'keywords', 
      content: 'custom software development, nearshore software engineers colombia, software engineering pasto, postgresql database architects, erp development, codevs software' 
    },
    { property: 'og:title', content: 'Custom Software Development & Database Engineering | CODEVS #1' },
    { property: 'og:description', content: 'Senior engineers & CS professors architecting custom ERPs, CRMs, and PostgreSQL databases. Prototype in 7 business days.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/2.png' },
    { property: 'og:url', content: 'https://www.codevs.dev/en/servicios/desarrollo-software' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Custom Software Development & Database Engineering | CODEVS #1' },
    { name: 'twitter:description', content: 'Nearshore software engineering with 100% code ownership and working prototype in 7 days.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/en/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/servicios/desarrollo-software' }
  ]
});

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Software Development & Database Engineering',
    'serviceType': 'Enterprise Software Engineering',
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
