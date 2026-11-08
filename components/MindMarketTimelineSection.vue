<template>
  <div ref="rootRef" class="mm-experience relative bg-[#07070a] text-white overflow-x-clip select-none">

    <!-- =========================================================================
         1. INTRO & THE THREAD TIMELINE (MindMarket Signature Winding Ribbon)
         ========================================================================= -->
    <section
      id="about"
      ref="timelineSectionRef"
      class="relative bg-[#F5F1E4] text-[#141418] rounded-t-[40px] sm:rounded-t-[60px] pt-16 sm:pt-28 pb-24 sm:pb-36 overflow-hidden shadow-[0_-25px_70px_rgba(0,0,0,0.65)]"
    >
      <!-- Subtle Editorial Grid Texture -->
      <div class="absolute inset-0 opacity-[0.035] pointer-events-none"
        style="background-image: radial-gradient(#141418 1.25px, transparent 1.25px); background-size: 28px 28px;">
      </div>

      <!-- 1.1 Intro Block (Left Narrative + Right Interactive Tech Scene) -->
      <div class="container mx-auto px-5 sm:px-10 lg:px-16 max-w-7xl relative z-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Human + Engineering + Academic Authority Narrative -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141418] text-white text-xs font-bold uppercase tracking-widest shadow-md">
              <span class="w-2 h-2 rounded-full bg-[#8ED462] animate-pulse"></span>
              <span>{{ isEn ? 'Senior Engineers & Programming / DB Professors' : 'Ingenieros Senior & Profesores de Programación y BD' }}</span>
            </div>

            <h2 class="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#141418] tracking-[-0.045em] leading-[1.06] text-balance">
              {{ isEn
                ? 'CODEVS builds custom software, database architectures & AI agents led by senior engineers and programming professors.'
                : 'CODEVS desarrolla software a la medida, bases de datos de alto rendimiento e IA con ingenieros senior y profesores de programación.'
              }}
            </h2>

            <p class="text-base sm:text-xl text-[#3f423d] font-medium leading-relaxed max-w-xl">
              {{ isEn
                ? 'Why trust templates or junior freelancers when your system can be architected by professors who teach software engineering and database design? We deliver clean code, optimized PostgreSQL/SQL engines, autonomous 24/7 WhatsApp AI, and turn-key ERPs designed to multiply your revenue.'
                : '¿Por qué arriesgar tu inversión con plantillas o código improvisado cuando tu plataforma puede ser creada por profesores que enseñan programación y diseño de bases de datos? Entregamos código limpio, motores SQL/PostgreSQL ultra rápidos, agentes de IA 24/7 en WhatsApp y sistemas ERP listos para multiplicar tus ventas.'
              }}
            </p>

            <!-- High-Conversion Buying Triggers Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div class="px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#141418] shadow-[3px_3px_0px_#141418]">
                <div class="text-xs font-black uppercase text-[#E7000B]">{{ isEn ? '7-Day Prototype' : 'Prototipo en 7 Días' }}</div>
                <div class="text-[11px] font-bold text-[#141418] mt-0.5">{{ isEn ? 'See before you scale' : 'Valida antes de invertir' }}</div>
              </div>
              <div class="px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#141418] shadow-[3px_3px_0px_#141418]">
                <div class="text-xs font-black uppercase text-[#141418]">{{ isEn ? 'DB & Code Masters' : 'Expertos en BD & SQL' }}</div>
                <div class="text-[11px] font-bold text-[#3f423d] mt-0.5">{{ isEn ? 'Zero slow queries' : 'Cero caídas o lentitud' }}</div>
              </div>
              <div class="col-span-2 sm:col-span-1 px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#141418] shadow-[3px_3px_0px_#141418]">
                <div class="text-xs font-black uppercase text-[#15803d]">{{ isEn ? '100% IP Guaranteed' : 'Garantía por Contrato' }}</div>
                <div class="text-[11px] font-bold text-[#141418] mt-0.5">{{ isEn ? 'Milestone payments' : 'Pagos por avances reales' }}</div>
              </div>
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-3.5">
              <a href="#contact" class="mm-btn">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
                <span class="mm-btn-label">
                  {{ isEn ? 'Quote My Software Now' : 'Cotizar Mi Software Ahora' }}
                </span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
              </a>

              <a
                :href="isEn
                  ? 'https://wa.me/573008051304?text=Hello%20CODEVS!%20I%20want%20to%20quote%20a%20custom%20software%20/%20database%20project%20with%20your%20engineering%20team.'
                  : 'https://wa.me/573008051304?text=Hola%20CODEVS,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software%20/%20bases%20de%20datos%20con%20su%20equipo%20de%20ingenieros.'"
                target="_blank"
                rel="noopener noreferrer"
                class="mm-btn -green"
              >
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-whatsapp text-sm"></i>
                </span>
                <span class="mm-btn-label">
                  {{ isEn ? 'WhatsApp Senior Engineer' : 'Hablar por WhatsApp' }}
                </span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-whatsapp text-sm"></i>
                </span>
              </a>
            </div>
          </div>

          <!-- Right Column: Playful Interactive Vector Hub (Zero-Blur High-Speed GPU Card) -->
          <div class="lg:col-span-6 relative">
            <div
              ref="introVisualRef"
              class="relative mx-auto max-w-lg lg:max-w-none rounded-[36px] bg-[#141418] p-6 sm:p-8 shadow-2xl border-4 border-[#141418] overflow-hidden group"
              style="background-image: radial-gradient(circle at 90% 10%, rgba(142,212,98,0.16), transparent 45%), radial-gradient(circle at 10% 90%, rgba(231,0,11,0.2), transparent 50%);"
            >
              <!-- Top Window Bar -->
              <div class="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FF5C46]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#F5E211]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#8ED462]"></span>
                  <span class="ml-2 text-xs font-mono text-zinc-400">codevs-engine://architecture-db-ai</span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-[#8ED462] text-[#141418] text-[10px] font-black uppercase tracking-wider">
                  {{ isEn ? 'Sub-Second SLA' : 'Ultra Rápido' }}
                </span>
              </div>

              <!-- Interactive Node Grid -->
              <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
                <!-- Card Node 1: Custom Software & AI -->
                <div class="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#8ED462] transition-colors duration-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="w-8 h-8 rounded-xl bg-[#E7000B] text-white flex items-center justify-center font-bold text-sm">
                      <i class="bi bi-cpu-fill"></i>
                    </span>
                    <span class="text-[11px] font-mono text-[#8ED462] font-bold">CLEAN CODE</span>
                  </div>
                  <div class="text-white font-bold text-sm">{{ isEn ? 'Custom Software & AI' : 'Software a Medida & IA' }}</div>
                  <div class="text-zinc-400 text-xs mt-0.5">{{ isEn ? 'Web, Mobile, SaaS & WhatsApp AI' : 'Web, Apps, ERP y Agentes WhatsApp 24/7' }}</div>
                </div>

                <!-- Card Node 2: Database Architecture & Professors -->
                <div class="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5E211] transition-colors duration-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="w-8 h-8 rounded-xl bg-[#F5E211] text-[#141418] flex items-center justify-center font-bold text-sm">
                      <i class="bi bi-database-fill-gear"></i>
                    </span>
                    <span class="text-[11px] font-mono text-[#F5E211] font-bold">SQL / NoSQL</span>
                  </div>
                  <div class="text-white font-bold text-sm">{{ isEn ? 'Database Architecture' : 'Arquitectura de Bases de Datos' }}</div>
                  <div class="text-zinc-400 text-xs mt-0.5">{{ isEn ? 'Designed by DB & CS Professors' : 'Por profesores de programación y BD' }}</div>
                </div>

                <!-- Card Node 3 (Full Width Academic & Enterprise Authority Strip) -->
                <div class="sm:col-span-2 p-4 rounded-2xl bg-white/[0.07] border border-white/15 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-[#8ED462] text-[#141418] flex items-center justify-center font-black text-base shrink-0 shadow">
                      <i class="bi bi-mortarboard-fill"></i>
                    </div>
                    <div>
                      <div class="text-white font-bold text-xs sm:text-sm">
                        {{ isEn ? 'Engineering + Academic Rigor (PostgreSQL • Spring Boot • Nuxt)' : 'Rigor Académico + Empresarial (PostgreSQL • Spring Boot • Nuxt)' }}
                      </div>
                      <div class="text-zinc-300 text-[11px] mt-0.5">
                        {{ isEn ? 'We build enterprise software AND train teams in programming & databases' : 'Desarrollamos tu plataforma y formamos equipos en programación y bases de datos' }}
                      </div>
                    </div>
                  </div>
                  <NuxtLink to="/proyectos/sin-huellas" class="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#E7000B] hover:bg-[#ff1f29] text-white text-xs font-bold shrink-0 transition-colors">
                    {{ isEn ? 'See Case →' : 'Ver Caso →' }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- =====================================================================
           1.2 WINDING SVG RIBBON CANVAS ("THE THREAD") + 4 BOUNCE TILES
           ===================================================================== -->
      <div ref="threadCanvasRef" class="relative w-full mt-12 sm:mt-20 min-h-[2150px] md:min-h-[2650px] lg:min-h-[2900px]">
        
        <!-- THE GIANT WINDING SVG RIBBON (Single GPU-Accelerated Path for 120 FPS Scroll) -->
        <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1944.2 6151.5"
            preserveAspectRatio="none"
            class="w-full h-full"
          >
            <!-- Base Track Guide (Subtle Warm Beige-Darkened Path so user sees the road ahead) -->
            <path
              fill="none"
              stroke="#E5DFCE"
              stroke-linecap="round"
              stroke-width="440"
              d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5"
            />

            <!-- Single Unified Animated Ribbon (Solid #E7000B Stroke = 10x Faster Rasterization) -->
            <path
              ref="mainPathRef"
              fill="none"
              stroke="#E7000B"
              stroke-linecap="round"
              stroke-width="440"
              style="will-change: stroke-dashoffset;"
              d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5"
            />
          </svg>
        </div>

        <!-- FLOATING PARALLAX VECTOR BADGES ALONG THE THREAD (MindMarket Playful Stickers) -->
        <!-- Sticker 1: Speed Clock / Sub-second SLA -->
        <div
          data-mm-parallax="-35"
          class="hidden md:flex absolute top-[5%] left-[10%] z-10 w-28 h-28 rounded-3xl bg-[#F5E211] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[-8deg] flex-col items-center justify-center text-[#141418] p-3"
        >
          <i class="bi bi-lightning-charge-fill text-3xl"></i>
          <span class="text-xs font-black uppercase tracking-tight mt-1">&lt; 1s Load</span>
        </div>

        <!-- Sticker 2: Professors of Programming & DB -->
        <div
          data-mm-parallax="45"
          class="hidden md:flex absolute top-[21%] right-[12%] z-10 px-5 py-3 rounded-full bg-[#8ED462] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[6deg] items-center gap-2.5 text-[#141418] font-black text-sm"
        >
          <i class="bi bi-mortarboard-fill"></i>
          <span>{{ isEn ? 'CS & Database Professors' : 'Profesores de Programación y BD' }}</span>
        </div>

        <!-- Sticker 3: AI LegalTech Badge -->
        <div
          data-mm-parallax="-40"
          class="hidden md:flex absolute top-[46%] left-[8%] z-10 px-5 py-3 rounded-2xl bg-[#2BA0FF] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[-5deg] items-center gap-2.5 text-white font-black text-sm"
        >
          <i class="bi bi-whatsapp text-lg"></i>
          <span>{{ isEn ? '24/7 AI Agents' : 'Agentes IA 24/7' }}</span>
        </div>

        <!-- Sticker 4: 100% IP Shield -->
        <div
          data-mm-parallax="35"
          class="hidden md:flex absolute top-[72%] right-[10%] z-10 w-32 h-32 rounded-full bg-[#EBC1FF] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[10deg] flex-col items-center justify-center text-[#141418] text-center p-3"
        >
          <i class="bi bi-shield-lock-fill text-2xl"></i>
          <span class="text-[11px] font-black uppercase leading-tight mt-1">100% IP<br/>Ownership</span>
        </div>

        <!-- ===================================================================
             THE 4 ANIMATED POP-IN STORY TILES (MindMarket .c-tile-animated)
             =================================================================== -->
        <div class="container mx-auto px-5 sm:px-10 lg:px-16 max-w-7xl relative z-10 flex flex-col gap-16 md:gap-32 pt-8 sm:pt-16">
          
          <div
            v-for="(tile, idx) in timelineTiles"
            :key="idx"
            ref="tileRefs"
            class="mm-tile-row flex w-full"
            :class="idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'"
          >
            <div
              class="mm-tile group relative w-full md:w-[58%] lg:w-[50%] rounded-[28px] sm:rounded-[34px] p-1.5 transition-transform duration-500"
              :style="{ '--tile-accent': tile.accentColor }"
            >
              <!-- Outer Colored Offset Frame -->
              <div
                class="mm-tile-bg-colored absolute inset-0 rounded-[28px] sm:rounded-[34px] border-2 border-[#141418] shadow-[0_22px_50px_rgba(20,20,24,0.18)]"
                :style="{ backgroundColor: tile.accentColor }"
              ></div>

              <!-- Inner White Editorial Card -->
              <div class="mm-tile-bg-white relative bg-white text-[#141418] rounded-[24px] sm:rounded-[30px] p-7 sm:p-11 lg:p-12 border-2 border-[#141418] flex flex-col gap-6">
                
                <!-- Top Pill Tag + Number -->
                <div class="flex items-center justify-between gap-3">
                  <span
                    class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#141418]"
                    :style="{ backgroundColor: tile.accentColor, color: tile.badgeTextColor }"
                  >
                    <span>{{ tile.badge }}</span>
                  </span>
                  <span class="font-mono text-xs font-black text-zinc-400">0{{ idx + 1 }} / 04</span>
                </div>

                <!-- Monumental Tile Title (Tight MindMarket Tracking) -->
                <h3 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#141418] tracking-[-0.05em] leading-[1.08]">
                  {{ tile.title }}
                </h3>

                <!-- Tile Description -->
                <p class="text-base sm:text-lg text-[#3f423d] font-medium leading-relaxed text-balance">
                  {{ tile.description }}
                </p>

                <!-- Highlight Metric Chip inside Tile -->
                <div class="flex flex-wrap items-center gap-2 pt-1">
                  <span
                    v-for="(chip, cIdx) in tile.chips"
                    :key="cIdx"
                    class="text-xs font-bold px-3 py-1 rounded-lg bg-[#F5F1E4] text-[#141418] border border-[#141418]/15"
                  >
                    {{ chip }}
                  </span>
                </div>

                <!-- MindMarket Bounce Button CTA -->
                <div class="pt-2">
                  <component
                    :is="tile.isInternal ? NuxtLinkComponent : 'a'"
                    :to="tile.isInternal ? tile.ctaLink : undefined"
                    :href="!tile.isInternal ? tile.ctaLink : undefined"
                    class="mm-btn"
                    :class="tile.btnVariant"
                  >
                    <span class="mm-btn-icon -hover">
                      <i class="bi bi-arrow-right text-sm"></i>
                    </span>
                    <span class="mm-btn-label">
                      {{ tile.ctaLabel }}
                    </span>
                    <span class="mm-btn-icon -default">
                      <i class="bi bi-arrow-right text-sm"></i>
                    </span>
                  </component>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- =========================================================================
         2. STICKY NUMBERS STACK (MindMarket .c-numbers-stack)
         ========================================================================= -->
    <section
      id="metrics-stack"
      class="relative bg-[#ECE6D4] text-[#141418] py-20 sm:py-32 px-4 sm:px-8 lg:px-14 border-t-2 border-[#141418]/10"
    >
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          <!-- Left Column: Sticky Title with Continuous Animated Wavy Underline -->
          <div class="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141418] text-white text-xs font-bold uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-[#E7000B]"></span>
              <span>{{ isEn ? 'Verified Engineering Metrics' : 'Métricas Reales de Ingeniería' }}</span>
            </div>

            <h2 class="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold text-[#141418] tracking-[-0.055em] leading-[1.02]">
              <template v-if="isEn">
                A few numbers behind the <strong class="mm-wave-word font-black text-[#E7000B]">impact</strong> we deliver.
              </template>
              <template v-else>
                Algunas cifras detrás del <strong class="mm-wave-word font-black text-[#E7000B]">impacto</strong> que entregamos.
              </template>
            </h2>

            <p class="text-base sm:text-xl text-[#3f423d] font-medium leading-relaxed max-w-lg pt-2">
              {{ isEn
                ? 'These numbers are more than milestones. They represent operational hours saved for law firms and enterprises, optimized database queries, and the real-world ROI our software creates for you.'
                : 'Estas cifras son más que hitos técnicos. Representan miles de horas operativas ahorradas a firmas legales y empresas, bases de datos optimizadas al milisegundo y retorno de inversión real.'
              }}
            </p>

            <!-- Mini Trust Proof -->
            <div class="pt-4 flex items-center gap-4">
              <div class="flex -space-x-2">
                <span class="w-10 h-10 rounded-full bg-[#E7000B] text-white font-black text-xs flex items-center justify-center border-2 border-[#ECE6D4]">SH</span>
                <span class="w-10 h-10 rounded-full bg-[#141418] text-white font-black text-xs flex items-center justify-center border-2 border-[#ECE6D4]">MG</span>
                <span class="w-10 h-10 rounded-full bg-[#2BA0FF] text-white font-black text-xs flex items-center justify-center border-2 border-[#ECE6D4]">AF</span>
              </div>
              <div class="text-xs sm:text-sm font-bold text-[#141418]">
                {{ isEn ? 'Trusted by Sin Huellas, Moments Gallery & 45+ partners' : 'Respaldado por Sin Huellas, Moments Gallery y +45 aliados' }}
              </div>
            </div>

            <div class="pt-2">
              <a href="#contact" class="mm-btn">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
                <span class="mm-btn-label">
                  {{ isEn ? 'Request Free Architecture Audit' : 'Solicitar Diagnóstico Gratuito' }}
                </span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
              </a>
            </div>
          </div>

          <!-- Right Column: Vertical Stacking Cards (Zero-Lag Native Sticky Stack) -->
          <div class="lg:col-span-6 flex flex-col gap-10 sm:gap-14 pb-8">
            <div
              v-for="(stat, sIdx) in numberCards"
              :key="sIdx"
              ref="statCardRefs"
              class="mm-stat-sticky sticky"
              :style="{ top: `calc(6.5rem + ${sIdx * 1.5}rem)`, zIndex: sIdx + 1 }"
            >
              <div
                class="mm-stat-card rounded-[36px] sm:rounded-[44px] min-h-[340px] sm:min-h-[410px] p-8 sm:p-12 border-2 border-[#141418] shadow-[0_20px_50px_rgba(0,0,0,0.14)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                :style="{ backgroundColor: stat.bg, color: stat.textColor }"
              >
                <!-- Top Right Circular Icon Badge -->
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono uppercase tracking-widest font-bold opacity-75">
                    {{ stat.tag }}
                  </span>
                  <div
                    class="w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 border-[#141418] shadow-md"
                    :style="{ backgroundColor: stat.iconBg, color: stat.iconColor }"
                  >
                    <i :class="stat.icon"></i>
                  </div>
                </div>

                <!-- Monumental Stat Number -->
                <div class="my-auto py-4">
                  <div class="text-6xl sm:text-8xl lg:text-[6.5rem] font-bold tracking-[-0.06em] leading-[0.92]">
                    {{ stat.number }}
                  </div>
                </div>

                <!-- Stat Description -->
                <p class="text-base sm:text-xl font-semibold leading-snug tracking-[-0.02em]">
                  {{ stat.description }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========================================================================
         3. DELUXE CALLOUT BANNER + 3-STEP FAST-TRACK BUYING PROCESS
         ========================================================================= -->
    <section class="relative bg-[#07070a] px-3 sm:px-6 pt-4 pb-12">
      <div class="relative rounded-[36px] sm:rounded-[52px] bg-[#E7000B] text-white py-20 sm:py-28 px-6 sm:px-12 overflow-hidden border-2 border-white/15 shadow-2xl">
        <!-- Decorative Rings -->
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[36px] border-white/10 pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-24 w-[450px] h-[450px] rounded-full border-[44px] border-black/15 pointer-events-none"></div>

        <div class="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 border border-white/20 text-xs font-bold uppercase tracking-widest text-[#F5E211]">
            <i class="bi bi-shield-check"></i>
            <span>{{ isEn ? 'Zero-Risk Software & Database Engineering' : 'Contratación Simple, Rápida y Garantizada por Contrato' }}</span>
          </div>

          <h2 class="text-5xl sm:text-7xl lg:text-[6.2rem] font-black text-white tracking-[-0.055em] leading-[0.95]">
            {{ isEn ? 'Ready when' : '¡Listos cuando' }}<br />
            <span class="text-[#F5E211]">{{ isEn ? 'you are!' : 'tú lo estés!' }}</span>
          </h2>

          <p class="text-lg sm:text-2xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed text-balance">
            {{ isEn
              ? 'Whether you need custom software, high-concurrency database optimization, 24/7 WhatsApp AI, or corporate training by programming professors, we take you from idea to production in record time.'
              : 'Ya sea que necesites desarrollo de software a la medida, arquitectura de bases de datos, agentes de IA en WhatsApp o formación especializada con nuestros profesores de programación, llevamos tu proyecto a producción en tiempo récord.'
            }}
          </p>

          <!-- 3-Step Fast-Track Buying Roadmap -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto pt-2">
            <div class="p-5 rounded-2xl bg-black/25 border border-white/20">
              <div class="text-xs font-mono font-black text-[#F5E211] uppercase">
                {{ isEn ? 'STEP 01 • TODAY (FREE)' : 'PASO 01 • HOY (GRATIS)' }}
              </div>
              <div class="text-lg font-extrabold text-white mt-1">
                {{ isEn ? '15-Min Technical Diagnosis' : 'Diagnóstico Técnico en 15 Min' }}
              </div>
              <p class="text-xs sm:text-sm text-white/85 mt-1 leading-relaxed">
                {{ isEn
                  ? 'Talk directly with a Senior Architect & DB Professor. We map your scope, ROI, and exact investment.'
                  : 'Hablas directo con un Arquitecto Senior y Profesor de BD. Definimos alcance, tiempos y presupuesto exacto.'
                }}
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-black/25 border border-white/20">
              <div class="text-xs font-mono font-black text-[#8ED462] uppercase">
                {{ isEn ? 'STEP 02 • IN 7 DAYS' : 'PASO 02 • EN 7 DÍAS' }}
              </div>
              <div class="text-lg font-extrabold text-white mt-1">
                {{ isEn ? 'Interactive Prototype & DB Model' : 'Prototipo Interactivo y Modelo BD' }}
              </div>
              <p class="text-xs sm:text-sm text-white/85 mt-1 leading-relaxed">
                {{ isEn
                  ? 'You test the real screens and database architecture before full-scale development even begins.'
                  : 'Pruebas las pantallas reales y validamos el modelo de base de datos antes de programar a gran escala.'
                }}
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-black/25 border border-white/20">
              <div class="text-xs font-mono font-black text-[#F5E211] uppercase">
                {{ isEn ? 'STEP 03 • TURN-KEY DELIVERY' : 'PASO 03 • ENTREGA LLAVE EN MANO' }}
              </div>
              <div class="text-lg font-extrabold text-white mt-1">
                {{ isEn ? '100% IP + Milestone Guarantee' : 'Código 100% Tuyo + Garantía' }}
              </div>
              <p class="text-xs sm:text-sm text-white/85 mt-1 leading-relaxed">
                {{ isEn
                  ? 'Weekly sprint deliveries, cloud deployment, team training, and 100% source code ownership.'
                  : 'Entregas semanales verificables, despliegue en la nube, capacitación a tu equipo y propiedad intelectual total.'
                }}
              </p>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" class="mm-btn -yellow">
              <span class="mm-btn-icon -hover">
                <i class="bi bi-arrow-up-right text-sm"></i>
              </span>
              <span class="mm-btn-label">
                {{ isEn ? 'Get My Custom Quote Now' : 'Cotizar Mi Proyecto Ahora' }}
              </span>
              <span class="mm-btn-icon -default">
                <i class="bi bi-arrow-up-right text-sm"></i>
              </span>
            </a>

            <a
              :href="isEn
                ? 'https://wa.me/573008051304?text=Hello%20CODEVS!%20I%20would%20like%20to%20schedule%20my%20free%2015-minute%20technical%20diagnosis.'
                : 'https://wa.me/573008051304?text=Hola%20CODEVS,%20quiero%20agendar%20mi%20diagn%C3%B3stico%20t%C3%A9cnico%20gratuito%20de%2015%20minutos.'"
              target="_blank"
              rel="noopener noreferrer"
              class="mm-btn -dark"
            >
              <span class="mm-btn-icon -hover">
                <i class="bi bi-whatsapp text-sm"></i>
              </span>
              <span class="mm-btn-label">
                {{ isEn ? 'Chat on WhatsApp (< 5 min)' : 'Cotizar por WhatsApp (< 5 min)' }}
              </span>
              <span class="mm-btn-icon -default">
                <i class="bi bi-whatsapp text-sm"></i>
              </span>
            </a>
          </div>

          <!-- 3 Bottom Pillars (Exact MindMarket Callout Footer) -->
          <div class="pt-10 mt-8 border-t border-white/25 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base font-bold text-white">
            <div class="flex items-center justify-center gap-2">
              <i class="bi bi-check-circle-fill text-[#F5E211]"></i>
              <span>{{ isEn ? 'Senior Engineers & DB Professors' : 'Ingenieros Senior y Profesores de BD' }}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <i class="bi bi-check-circle-fill text-[#F5E211]"></i>
              <span>{{ isEn ? 'Milestone-based payments' : 'Pagos seguros por avances entregados' }}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <i class="bi bi-check-circle-fill text-[#F5E211]"></i>
              <span>{{ isEn ? '100% proprietary IP ownership' : '100% código propietario sin plantillas' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, resolveComponent } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const NuxtLinkComponent = resolveComponent('NuxtLink');
const route = useRoute();
const isEn = computed(() => route.path.startsWith('/en'));

const rootRef = ref(null);
const timelineSectionRef = ref(null);
const threadCanvasRef = ref(null);
const mainPathRef = ref(null);
const tileRefs = ref([]);
const statCardRefs = ref([]);

let ctx = null;

// 4 Story Tiles along "The Thread" (Bilingual ES / EN)
const timelineTiles = computed(() => {
  if (isEn.value) {
    return [
      {
        badge: '01 • Unified Software & DB Architecture',
        title: 'No more technical chaos.',
        description: 'Slow databases, manual spreadsheets, unanswered WhatsApp leads, and disconnected tools cost you sales every day. At CODEVS, we unify your entire software and database architecture under one roof: zero friction, zero bloated templates—just high-converting full-stack engineering.',
        chips: ['Spring Boot', 'Nuxt 3 / Vue', 'PostgreSQL & SQL', 'AWS & Docker'],
        accentColor: '#FF5C46',
        badgeTextColor: '#ffffff',
        btnVariant: '',
        ctaLabel: 'Quote Custom Software',
        ctaLink: '#contact',
        isInternal: false
      },
      {
        badge: '02 • Senior Engineers & Professors',
        title: 'Built by those who teach code & databases.',
        description: 'Our team includes senior software architects and university professors who teach programming, algorithms, and relational/NoSQL databases. Whether we are building your enterprise ERP, optimizing slow SQL queries, or mentoring your tech squad, you get academic rigor and commercial speed.',
        chips: ['Programming Professors', 'Database Modeling', 'Query Optimization', '7-Day Prototype'],
        accentColor: '#F5E211',
        badgeTextColor: '#141418',
        btnVariant: '-yellow',
        ctaLabel: 'Explore All Solutions',
        ctaLink: '#services',
        isInternal: false
      },
      {
        badge: '03 • Proven Industry ROI',
        title: 'Speak your sector’s language.',
        description: 'From LegalTech for top law firms like Sin Huellas Nuevas Oportunidades (+70% operational time saved with 24/7 WhatsApp AI & Legal ERP/CRM), to event marketplaces like Moments Gallery. Our engineers master your business logic to multiply your revenue.',
        chips: ['Sin Huellas Law Firm', '+70% Time Saved', 'WhatsApp Cloud AI', 'Legal ERP/CRM'],
        accentColor: '#2BA0FF',
        badgeTextColor: '#ffffff',
        btnVariant: '-blue',
        ctaLabel: 'Read Sin Huellas Case Study',
        ctaLink: '/proyectos/sin-huellas',
        isInternal: true
      },
      {
        badge: '04 • Risk-Free Delivery',
        title: 'Global scale & 100% IP ownership.',
        description: 'Whether you are automating operations in Colombia or scaling a multi-tenant SaaS across the US and Latin America, we guarantee results by contract: milestone-based payments, sub-second Core Web Vitals, and 100% intellectual property assignment.',
        chips: ['100% US/LATAM IP', '99.9% Cloud Uptime', '#1 Google SEO', 'Contract Warranty'],
        accentColor: '#8ED462',
        badgeTextColor: '#141418',
        btnVariant: '-green',
        ctaLabel: 'Start My Project Now',
        ctaLink: '#contact',
        isInternal: false
      }
    ];
  }

  return [
    {
      badge: '01 • Software & Bases de Datos Unificadas',
      title: 'Adiós al caos operativo.',
      description: 'Lidiar con sistemas lentos, hojas de cálculo manuales, cientos de chats sin responder en WhatsApp y bases de datos mal estructuradas te hace perder clientes todos los días. En CODEVS unificamos toda tu tecnología: sin plantillas genéricas, solo ingeniería hecha para vender y escalar.',
      chips: ['Spring Boot', 'Nuxt 3 / Vue', 'PostgreSQL & SQL', 'AWS & Docker'],
      accentColor: '#FF5C46',
      badgeTextColor: '#ffffff',
      btnVariant: '',
      ctaLabel: 'Cotizar Mi Sistema Ahora',
      ctaLink: '#contact',
      isInternal: false
    },
    {
      badge: '02 • Ingenieros Senior y Profesores',
      title: 'Creado por quienes enseñan programación y BD.',
      description: 'Nuestro equipo está integrado por arquitectos de software senior y profesores que enseñan programación, estructuras de datos y bases de datos (SQL, PostgreSQL, MySQL, NoSQL). Diseñamos modelos de datos blindados, optimizamos consultas críticas y capacitamos equipos con rigor académico y velocidad comercial.',
      chips: ['Profesores de Programación', 'Diseño de Bases de Datos', 'Optimización SQL', 'Prototipo en 7 Días'],
      accentColor: '#F5E211',
      badgeTextColor: '#141418',
      btnVariant: '-yellow',
      ctaLabel: 'Explorar Soluciones',
      ctaLink: '#services',
      isInternal: false
    },
    {
      badge: '03 • Retorno de Inversión Comprobado',
      title: 'Hablamos el idioma de tu sector.',
      description: 'Desde LegalTech para firmas de abogados como Sin Huellas Nuevas Oportunidades (+70% de tiempo operativo ahorrado con agentes de IA en WhatsApp y ERP/CRM jurídico), hasta marketplaces como Moments Gallery. No solo escribimos código: automatizamos tu empresa para que facture más.',
      chips: ['Firma Legal Sin Huellas', '+70% Tiempo Ahorrado', 'IA WhatsApp 24/7', 'ERP & CRM Jurídico'],
      accentColor: '#2BA0FF',
      badgeTextColor: '#ffffff',
      btnVariant: '-blue',
      ctaLabel: 'Ver Caso de Éxito Sin Huellas',
      ctaLink: '/proyectos/sin-huellas',
      isInternal: true
    },
    {
      badge: '04 • Inversión Segura por Contrato',
      title: 'Escala global y 100% tu propiedad.',
      description: 'Ya sea que digitalices tu operación en Colombia o escales una plataforma SaaS en Estados Unidos y Latinoamérica, protegemos tu inversión por contrato: pagos por hitos entregados, propiedad intelectual 100% tuya y velocidad #1 en Google Core Web Vitals.',
      chips: ['100% Código Propietario', '99.9% Uptime Cloud', '#1 en Google SEO', 'Garantía por Contrato'],
      accentColor: '#8ED462',
      badgeTextColor: '#141418',
      btnVariant: '-green',
      ctaLabel: 'Iniciar Mi Proyecto Hoy',
      ctaLink: '#contact',
      isInternal: false
    }
  ];
});

// 4 Stacking Stat Cards (MindMarket .c-numbers-stack_card)
const numberCards = computed(() => {
  if (isEn.value) {
    return [
      {
        tag: 'Operational Efficiency • LegalTech AI',
        number: '+70%',
        description: 'Operational time saved in daily case & client management—proven in production at Sin Huellas Nuevas Oportunidades law firm.',
        bg: '#ffffff',
        textColor: '#2BA0FF',
        iconBg: '#2BA0FF',
        iconColor: '#ffffff',
        icon: 'bi bi-graph-up-arrow'
      },
      {
        tag: 'Autonomous Omnichannel • WhatsApp API',
        number: '25+ hrs',
        description: 'Weekly hours saved per lawyer and operations squad through 24/7 AI intake agents, automated follow-ups, and smart CRM routing.',
        bg: '#8ED462',
        textColor: '#141418',
        iconBg: '#141418',
        iconColor: '#8ED462',
        icon: 'bi bi-robot'
      },
      {
        tag: 'Software, Databases & AI • US & LATAM',
        number: '45+',
        description: 'Custom web platforms, high-concurrency databases, enterprise ERPs, and startups engineered by senior devs and CS professors.',
        bg: '#E7000B',
        textColor: '#ffffff',
        iconBg: '#ffffff',
        iconColor: '#E7000B',
        icon: 'bi bi-database-fill-check'
      },
      {
        tag: 'Performance & Intellectual Property',
        number: '100%',
        description: 'Full IP ownership and custom architecture engineered for sub-second load speeds and #1 Google Core Web Vitals.',
        bg: '#F5E211',
        textColor: '#141418',
        iconBg: '#141418',
        iconColor: '#F5E211',
        icon: 'bi bi-lightning-charge-fill'
      }
    ];
  }

  return [
    {
      tag: 'Eficiencia Operativa • Caso Sin Huellas',
      number: '+70%',
      description: 'Reducción en tiempos de gestión operativa diaria comprobada en producción con nuestro ecosistema ERP/CRM e IA para Sin Huellas Nuevas Oportunidades.',
      bg: '#ffffff',
      textColor: '#2BA0FF',
      iconBg: '#2BA0FF',
      iconColor: '#ffffff',
      icon: 'bi bi-graph-up-arrow'
    },
    {
      tag: 'Omnicanalidad Autónoma • WhatsApp Cloud',
      number: '25+ hrs',
      description: 'Horas semanales ahorradas por abogado y equipo operativo mediante agentes de IA que califican casos y agendan citas 24/7.',
      bg: '#8ED462',
      textColor: '#141418',
      iconBg: '#141418',
      iconColor: '#8ED462',
      icon: 'bi bi-robot'
    },
    {
      tag: 'Software, Bases de Datos & IA • Colombia & USA',
      number: '45+',
      description: 'Plataformas web, bases de datos de alta concurrencia, sistemas ERP/CRM y startups diseñadas por ingenieros senior y profesores de programación.',
      bg: '#E7000B',
      textColor: '#ffffff',
      iconBg: '#ffffff',
      iconColor: '#E7000B',
      icon: 'bi bi-database-fill-check'
    },
    {
      tag: 'Rendimiento & Propiedad Intelectual',
      number: '100%',
      description: 'Código propietario hecho a la medida sin plantillas genéricas, optimizado para cargar en menos de 1 segundo y liderar Google.',
      bg: '#F5E211',
      textColor: '#141418',
      iconBg: '#141418',
      iconColor: '#F5E211',
      icon: 'bi bi-lightning-charge-fill'
    }
  ];
});

onMounted(() => {
  if (!import.meta.client) return;
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    // 1. Single-Path GPU-Accelerated SVG Thread Animation
    if (mainPathRef.value) {
      try {
        const length = mainPathRef.value.getTotalLength();
        gsap.set(mainPathRef.value, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        gsap.to(mainPathRef.value, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: threadCanvasRef.value,
            start: 'top 80%',
            end: 'bottom 85%',
            scrub: true
          }
        });
      } catch (e) {
        // Fallback if SVG length calculation is skipped
      }
    }

    // 2. Fast Spring Bounce Reveal for each Story Tile (.mm-tile)
    const tiles = rootRef.value?.querySelectorAll('.mm-tile') || [];
    tiles.forEach((tile) => {
      gsap.fromTo(
        tile,
        {
          scale: 0.92,
          y: 32,
          opacity: 0
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'back.out(1.25)',
          scrollTrigger: {
            trigger: tile,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // 3. Lightweight Parallax Stickers (Desktop only)
    if (window.innerWidth >= 768) {
      const stickers = rootRef.value?.querySelectorAll('[data-mm-parallax]') || [];
      stickers.forEach((sticker) => {
        const speed = parseFloat(sticker.getAttribute('data-mm-parallax') || '35');
        gsap.to(sticker, {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: threadCanvasRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
  }, rootRef.value);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>
