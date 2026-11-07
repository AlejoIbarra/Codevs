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
          
          <!-- Left Column: Human + Engineering Value Narrative -->
          <div class="lg:col-span-6 space-y-7">
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141418] text-white text-xs font-bold uppercase tracking-widest shadow-md">
              <span class="w-2 h-2 rounded-full bg-[#8ED462] animate-pulse"></span>
              <span>{{ isEn ? 'Real Engineering • Measurable ROI' : 'Ingeniería Real • Impacto Medible' }}</span>
            </div>

            <h2 class="text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#141418] tracking-[-0.045em] leading-[1.06] text-balance">
              {{ isEn
                ? 'CODEVS builds custom software, AI omnichannel agents & cloud architectures through senior engineers who understand your business.'
                : 'CODEVS construye software a la medida, agentes de IA omnicanales y arquitectura cloud con ingenieros senior que entienden tu negocio.'
              }}
            </h2>

            <p class="text-base sm:text-xl text-[#3f423d] font-medium leading-relaxed max-w-xl">
              {{ isEn
                ? 'We connect your operations with clean code, autonomous 24/7 WhatsApp AI workflows, and high-concurrency ERPs — anywhere you operate — so you scale faster and dominate your market with confidence.'
                : 'Conectamos tu operación con código limpio, flujos autónomos 24/7 con IA en WhatsApp y sistemas ERP/CRM de alta concurrencia — donde sea que operes — para tomar decisiones más inteligentes y escalar sin límites.'
              }}
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <a :href="isEn ? '#contact' : '#contact'" class="mm-btn">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
                <span class="mm-btn-label">
                  {{ isEn ? 'Get a project quote' : 'Cotizar mi proyecto' }}
                </span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-arrow-up-right text-sm"></i>
                </span>
              </a>

              <NuxtLink to="/proyectos/sin-huellas" class="mm-btn -dark">
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-star-fill text-xs"></i>
                </span>
                <span class="mm-btn-label">
                  {{ isEn ? 'See Sin Huellas Case' : 'Ver Caso Sin Huellas' }}
                </span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-star-fill text-xs"></i>
                </span>
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Playful Interactive Vector Hub (MindMarket Rive-Style Illustration) -->
          <div class="lg:col-span-6 relative">
            <div ref="introVisualRef" class="relative mx-auto max-w-lg lg:max-w-none aspect-[4/3] rounded-[36px] bg-[#141418] p-6 sm:p-8 shadow-2xl border-4 border-[#141418] overflow-hidden group">
              <!-- Ambient Vector Shapes inside the Hub -->
              <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#8ED462]/20 blur-2xl pointer-events-none"></div>
              <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#E7000B]/25 blur-2xl pointer-events-none"></div>

              <!-- Top Window Bar -->
              <div class="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FF5C46]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#F5E211]"></span>
                  <span class="w-3 h-3 rounded-full bg-[#8ED462]"></span>
                  <span class="ml-2 text-xs font-mono text-zinc-400">codevs-engine://live-architecture</span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-[#8ED462] text-[#141418] text-[10px] font-black uppercase tracking-wider">
                  60 FPS • Ready
                </span>
              </div>

              <!-- Interactive Node Grid -->
              <div class="relative z-10 grid grid-cols-2 gap-4 mt-5">
                <!-- Card Node 1 -->
                <div class="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#8ED462] transition-all duration-300 hover:-translate-y-1">
                  <div class="flex items-center justify-between mb-2">
                    <span class="w-8 h-8 rounded-xl bg-[#E7000B] text-white flex items-center justify-center font-bold text-sm">
                      <i class="bi bi-robot"></i>
                    </span>
                    <span class="text-[11px] font-mono text-[#8ED462] font-bold">24/7 ACTIVE</span>
                  </div>
                  <div class="text-white font-bold text-sm">{{ isEn ? 'WhatsApp Cloud AI' : 'IA Omnicanal WhatsApp' }}</div>
                  <div class="text-zinc-400 text-xs mt-0.5">{{ isEn ? '< 3s response latency' : 'Respuesta en < 3 seg' }}</div>
                </div>

                <!-- Card Node 2 -->
                <div class="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#F5E211] transition-all duration-300 hover:-translate-y-1">
                  <div class="flex items-center justify-between mb-2">
                    <span class="w-8 h-8 rounded-xl bg-[#F5E211] text-[#141418] flex items-center justify-center font-bold text-sm">
                      <i class="bi bi-diagram-3-fill"></i>
                    </span>
                    <span class="text-[11px] font-mono text-[#F5E211] font-bold">+70% ROI</span>
                  </div>
                  <div class="text-white font-bold text-sm">{{ isEn ? 'Custom ERP & CRM' : 'ERP & CRM a Medida' }}</div>
                  <div class="text-zinc-400 text-xs mt-0.5">{{ isEn ? 'Zero manual bottlenecks' : 'Cero cuellos de botella' }}</div>
                </div>

                <!-- Card Node 3 (Full Width Telemetry Strip) -->
                <div class="col-span-2 p-4 rounded-2xl bg-gradient-to-r from-[#E7000B]/20 via-white/[0.05] to-[#2BA0FF]/20 border border-white/15 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-white text-[#141418] flex items-center justify-center font-black text-xs shrink-0 shadow">
                      100%
                    </div>
                    <div>
                      <div class="text-white font-bold text-xs sm:text-sm">
                        {{ isEn ? 'Spring Boot + Nuxt 3 + PostgreSQL + Meta AI' : 'Spring Boot + Nuxt 3 + PostgreSQL + Meta AI' }}
                      </div>
                      <div class="text-zinc-400 text-[11px]">
                        {{ isEn ? 'Proprietary architecture • Sub-second Core Web Vitals' : 'Código 100% propietario • #1 en Core Web Vitals' }}
                      </div>
                    </div>
                  </div>
                  <span class="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono">
                    v4.0
                  </span>
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
        
        <!-- THE GIANT WINDING SVG RIBBON (Exact MindMarket Path Geometry, CODEVS Crimson & Green Accents) -->
        <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1944.2 6151.5"
            preserveAspectRatio="none"
            class="w-full h-full"
          >
            <defs>
              <linearGradient id="mm-thread-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E7000B" />
                <stop offset="45%" stop-color="#FF3B30" />
                <stop offset="100%" stop-color="#B80009" />
              </linearGradient>
              <linearGradient id="mm-shadow-grad" x1="1020.4" x2="1550.5" y1="2766.3" y2="3624.5" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#E7000B" />
                <stop offset="0.5" stop-color="#8B0006" />
                <stop offset="1" stop-color="#E7000B" />
              </linearGradient>
            </defs>

            <!-- Base Track Guide (Subtle Warm Beige-Darkened Path so user sees the road ahead) -->
            <path
              fill="none"
              stroke="#E5DFCE"
              stroke-linecap="round"
              stroke-width="440"
              d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808 M679.3 2510c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5"
            />

            <!-- Animated Primary Ribbon (Drawn dynamically on Scroll by GSAP) -->
            <path
              ref="mainPathRef"
              fill="none"
              stroke="url(#mm-thread-grad)"
              stroke-linecap="round"
              stroke-width="440"
              d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808"
            />

            <!-- 3D Loop Depth Shadow Path -->
            <path
              ref="shadowPathRef"
              fill="none"
              stroke="url(#mm-shadow-grad)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="440"
              opacity="0.75"
              d="M1055.5 1703C1987 2249 1397 3353 733 3318"
            />

            <!-- Animated Secondary Lower Ribbon -->
            <path
              ref="secondaryPathRef"
              fill="none"
              stroke="url(#mm-thread-grad)"
              stroke-linecap="round"
              stroke-width="440"
              d="M679.3 2510c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5"
            />
          </svg>
        </div>

        <!-- FLOATING PARALLAX VECTOR BADGES ALONG THE THREAD (MindMarket Playful Stickers) -->
        <!-- Sticker 1: Speed Clock / Sub-second SLA -->
        <div
          data-mm-parallax="-45"
          class="hidden md:flex absolute top-[5%] left-[10%] z-10 w-28 h-28 rounded-3xl bg-[#F5E211] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[-8deg] flex-col items-center justify-center text-[#141418] p-3"
        >
          <i class="bi bi-lightning-charge-fill text-3xl"></i>
          <span class="text-xs font-black uppercase tracking-tight mt-1">&lt; 1s Load</span>
        </div>

        <!-- Sticker 2: Paper Plane / Deployment Packet -->
        <div
          data-mm-parallax="65"
          class="hidden md:flex absolute top-[21%] right-[12%] z-10 px-5 py-3 rounded-full bg-[#8ED462] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[6deg] items-center gap-2.5 text-[#141418] font-black text-sm"
        >
          <i class="bi bi-send-fill"></i>
          <span>{{ isEn ? 'Zero-Friction CI/CD' : 'Despliegue Continuo' }}</span>
        </div>

        <!-- Sticker 3: AI LegalTech Badge -->
        <div
          data-mm-parallax="-55"
          class="hidden md:flex absolute top-[46%] left-[8%] z-10 px-5 py-3 rounded-2xl bg-[#2BA0FF] border-4 border-[#141418] shadow-[6px_6px_0px_#141418] rotate-[-5deg] items-center gap-2.5 text-white font-black text-sm"
        >
          <i class="bi bi-whatsapp text-lg"></i>
          <span>{{ isEn ? '24/7 AI Agents' : 'Agentes IA 24/7' }}</span>
        </div>

        <!-- Sticker 4: 100% IP Shield -->
        <div
          data-mm-parallax="50"
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
                ? 'These numbers are more than milestones. They represent operational hours saved for law firms and enterprises, sub-second speed, and the real-world ROI our software creates for you.'
                : 'Estas cifras son más que hitos técnicos. Representan miles de horas operativas ahorradas a firmas legales y empresas, velocidad sub-segundo y retorno de inversión real.'
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
          </div>

          <!-- Right Column: Vertical Stacking Cards with Tilt-to-Flat Scroll Physics -->
          <div class="lg:col-span-6 flex flex-col gap-10 sm:gap-14 pb-8">
            <div
              v-for="(stat, sIdx) in numberCards"
              :key="sIdx"
              ref="statCardRefs"
              class="mm-stat-sticky sticky transition-transform duration-300"
              :style="{ top: `calc(6.5rem + ${sIdx * 1.5}rem)`, zIndex: sIdx + 1 }"
            >
              <div
                class="mm-stat-card rounded-[36px] sm:rounded-[44px] min-h-[360px] sm:min-h-[430px] p-8 sm:p-12 border-2 border-[#141418] shadow-[0_24px_60px_rgba(0,0,0,0.16)] flex flex-col justify-between transition-transform duration-500"
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
         3. DELUXE CALLOUT BANNER (MindMarket .c-deluxe-callout)
         ========================================================================= -->
    <section class="relative bg-[#07070a] px-3 sm:px-6 pt-4 pb-12">
      <div class="relative rounded-[36px] sm:rounded-[52px] bg-[#E7000B] text-white py-20 sm:py-28 px-6 sm:px-12 overflow-hidden border-2 border-white/15 shadow-2xl">
        <!-- Decorative Rings -->
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[36px] border-white/10 pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-24 w-[450px] h-[450px] rounded-full border-[44px] border-black/15 pointer-events-none"></div>

        <div class="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
          <h2 class="text-5xl sm:text-7xl lg:text-[6.2rem] font-black text-white tracking-[-0.055em] leading-[0.95]">
            {{ isEn ? 'Ready when' : '¡Listos cuando' }}<br />
            <span class="text-[#F5E211]">{{ isEn ? 'you are!' : 'tú lo estés!' }}</span>
          </h2>

          <p class="text-lg sm:text-2xl text-white/95 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
            {{ isEn
              ? 'Whether you are automating a law firm with AI, launching a startup MVP, or scaling an enterprise platform, we make software engineering simple, smart, and high-impact from day one.'
              : 'Ya sea que busques automatizar tu firma con IA, lanzar una startup o escalar un ERP empresarial, hacemos que el desarrollo de software sea ágil, rentable y de alto impacto desde el día uno.'
            }}
          </p>

          <div class="pt-2 flex justify-center">
            <a href="#contact" class="mm-btn -yellow">
              <span class="mm-btn-icon -hover">
                <i class="bi bi-arrow-up-right text-sm"></i>
              </span>
              <span class="mm-btn-label">
                {{ isEn ? 'Start Your Project Today' : 'Iniciar Mi Proyecto Ahora' }}
              </span>
              <span class="mm-btn-icon -default">
                <i class="bi bi-arrow-up-right text-sm"></i>
              </span>
            </a>
          </div>

          <!-- 3 Bottom Pillars (Exact MindMarket Callout Footer) -->
          <div class="pt-12 mt-10 border-t border-white/25 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base font-bold text-white">
            <div class="flex items-center justify-center gap-2">
              <i class="bi bi-check-circle-fill text-[#F5E211]"></i>
              <span>{{ isEn ? 'Fast, production-grade code' : 'Código limpio de alta velocidad' }}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <i class="bi bi-check-circle-fill text-[#F5E211]"></i>
              <span>{{ isEn ? 'One dedicated senior lead' : 'Un líder técnico senior dedicado' }}</span>
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
const shadowPathRef = ref(null);
const secondaryPathRef = ref(null);
const tileRefs = ref([]);
const statCardRefs = ref([]);

let ctx = null;

// 4 Story Tiles along "The Thread" (Bilingual ES / EN)
const timelineTiles = computed(() => {
  if (isEn.value) {
    return [
      {
        badge: '01 • Unified Architecture',
        title: 'No more technical chaos.',
        description: 'Juggling fragmented freelancers, manual spreadsheets, unanswered WhatsApp leads, and disconnected tools adds up fast. At CODEVS, we bring your entire architecture under one roof: zero friction, zero bloated templates—just seamless full-stack collaboration.',
        chips: ['Spring Boot', 'Nuxt 3 / Vue', 'PostgreSQL', 'AWS & Docker'],
        accentColor: '#FF5C46',
        badgeTextColor: '#ffffff',
        btnVariant: '',
        ctaLabel: 'Explore Solutions',
        ctaLink: '#services',
        isInternal: false
      },
      {
        badge: '02 • Senior Execution',
        title: 'One brief. One squad.',
        description: 'You brief us once and our senior engineering squad takes it from there. From deep workflow discovery and interactive Figma prototyping to cloud deployment and AI training, everything is led by a dedicated technical architect with real-time EST/CST updates.',
        chips: ['EST / CST Alignment', 'Figma UX/UI', 'Agile Sprints', '< 24h SLA'],
        accentColor: '#F5E211',
        badgeTextColor: '#141418',
        btnVariant: '-yellow',
        ctaLabel: 'See Featured Work',
        ctaLink: '#portfolio',
        isInternal: false
      },
      {
        badge: '03 • Industry Context',
        title: 'Speak your sector’s language.',
        description: 'From LegalTech for top law firms like Sin Huellas Nuevas Oportunidades (+70% operational time saved with 24/7 WhatsApp AI & Legal ERP/CRM), to event marketplaces like Moments Gallery. Our engineers don’t just write syntax—they master your business logic.',
        chips: ['Sin Huellas Law Firm', '+70% Time Saved', 'WhatsApp Cloud AI', 'Legal ERP/CRM'],
        accentColor: '#2BA0FF',
        badgeTextColor: '#ffffff',
        btnVariant: '-blue',
        ctaLabel: 'Read Sin Huellas Case Study',
        ctaLink: '/proyectos/sin-huellas',
        isInternal: true
      },
      {
        badge: '04 • Enterprise Scale',
        title: 'Global scale, for real.',
        description: 'Whether you are automating operations in one city or scaling a multi-tenant SaaS across the US and Latin America, we scale with you. 100% IP assignment, sub-second Core Web Vitals, and rock-solid security built from day one.',
        chips: ['100% US IP Ownership', '99.9% Cloud Uptime', '#1 Google SEO', '60 FPS Fluidity'],
        accentColor: '#8ED462',
        badgeTextColor: '#141418',
        btnVariant: '-green',
        ctaLabel: 'Meet Our Clients',
        ctaLink: '#clients',
        isInternal: false
      }
    ];
  }

  return [
    {
      badge: '01 • Arquitectura Unificada',
      title: 'Adiós al caos operativo.',
      description: 'Lidiar con múltiples proveedores, procesos manuales en hojas de cálculo, cientos de chats sin atender y sistemas desconectados frena tu empresa. En CODEVS traemos toda tu tecnología bajo un mismo techo: sin fricción, sin plantillas lentas, solo ingeniería impecable de principio a fin.',
      chips: ['Spring Boot', 'Nuxt 3 / Vue', 'PostgreSQL', 'AWS & Docker'],
      accentColor: '#FF5C46',
      badgeTextColor: '#ffffff',
      btnVariant: '',
      ctaLabel: 'Explorar Soluciones',
      ctaLink: '#services',
      isInternal: false
    },
    {
      badge: '02 • Ejecución Senior',
      title: 'Un brief. Un equipo.',
      description: 'Nos cuentas tu necesidad una sola vez y nos encargamos de todo. Desde el levantamiento profundo de procesos y prototipado interactivo en Figma hasta el despliegue en la nube e inteligencia artificial, cuentas con un líder técnico dedicado, entregas rápidas y cero excusas.',
      chips: ['Diseño UX/UI Figma', 'Sprints Ágiles', 'Soporte Directo', 'SLA < 24h'],
      accentColor: '#F5E211',
      badgeTextColor: '#141418',
      btnVariant: '-yellow',
      ctaLabel: 'Ver Proyectos',
      ctaLink: '#portfolio',
      isInternal: false
    },
    {
      badge: '03 • Especialización Real',
      title: 'Hablamos el idioma de tu sector.',
      description: 'Desde LegalTech para firmas de abogados como Sin Huellas Nuevas Oportunidades (+70% de tiempo operativo ahorrado con agentes de IA en WhatsApp y ERP/CRM jurídico), hasta marketplaces como Moments Gallery. No solo programamos: entendemos a fondo las reglas de tu industria.',
      chips: ['Firma Legal Sin Huellas', '+70% Tiempo Ahorrado', 'IA WhatsApp 24/7', 'ERP & CRM Jurídico'],
      accentColor: '#2BA0FF',
      badgeTextColor: '#ffffff',
      btnVariant: '-blue',
      ctaLabel: 'Ver Caso de Éxito Sin Huellas',
      ctaLink: '/proyectos/sin-huellas',
      isInternal: true
    },
    {
      badge: '04 • Escala Internacional',
      title: 'Alcance global, en serio.',
      description: 'Ya sea que estés digitalizando tu operación en Colombia o escalando una plataforma SaaS en Latinoamérica y Estados Unidos, crecemos contigo. Código 100% propiedad de tu empresa, microservicios de alta concurrencia y #1 en Google Core Web Vitals.',
      chips: ['100% Código Propietario', '99.9% Uptime Cloud', '#1 en Google SEO', 'Fluidez 60 FPS'],
      accentColor: '#8ED462',
      badgeTextColor: '#141418',
      btnVariant: '-green',
      ctaLabel: 'Conocer Clientes',
      ctaLink: '#clientes',
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
        tag: 'Production Track Record • US & LATAM',
        number: '45+',
        description: 'Custom web platforms, enterprise ERPs, mobile apps, and venture-backed startups engineered and deployed with zero technical debt.',
        bg: '#E7000B',
        textColor: '#ffffff',
        iconBg: '#ffffff',
        iconColor: '#E7000B',
        icon: 'bi bi-rocket-takeoff-fill'
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
      tag: 'Trayectoria en Producción • Colombia & USA',
      number: '45+',
      description: 'Plataformas web, sistemas ERP/CRM, startups como Moments Gallery y aplicaciones móviles desplegadas con arquitectura limpia.',
      bg: '#E7000B',
      textColor: '#ffffff',
      iconBg: '#ffffff',
      iconColor: '#E7000B',
      icon: 'bi bi-rocket-takeoff-fill'
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
    // 1. Animate "The Thread" SVG paths stroke-dashoffset on scroll
    const paths = [mainPathRef.value, shadowPathRef.value, secondaryPathRef.value].filter(Boolean);
    paths.forEach((pathEl) => {
      try {
        const length = pathEl.getTotalLength();
        gsap.set(pathEl, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        gsap.to(pathEl, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: threadCanvasRef.value,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 0.6
          }
        });
      } catch (e) {
        // Fallback if SVG length calculation is skipped
      }
    });

    // 2. Spring Bounce Reveal for each Story Tile (.mm-tile)
    const tiles = rootRef.value?.querySelectorAll('.mm-tile') || [];
    tiles.forEach((tile) => {
      gsap.fromTo(
        tile,
        {
          scale: 0.86,
          y: 45,
          opacity: 0
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: tile,
            start: 'top 86%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 3. Floating Parallax Stickers along the Thread
    const stickers = rootRef.value?.querySelectorAll('[data-mm-parallax]') || [];
    stickers.forEach((sticker) => {
      const speed = parseFloat(sticker.getAttribute('data-mm-parallax') || '40');
      gsap.to(sticker, {
        y: speed,
        rotation: speed > 0 ? 12 : -12,
        ease: 'none',
        scrollTrigger: {
          trigger: threadCanvasRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // 4. Numbers Stack Cards: subtle tilt (-6deg / +6deg) straightening to 0deg as they stack
    const statCards = rootRef.value?.querySelectorAll('.mm-stat-card') || [];
    statCards.forEach((card, i) => {
      const startRot = i % 2 === 0 ? -5 : 5;
      gsap.fromTo(
        card,
        {
          rotation: startRot,
          scale: 0.95
        },
        {
          rotation: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 35%',
            scrub: 0.5
          }
        }
      );
    });
  }, rootRef.value);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>
