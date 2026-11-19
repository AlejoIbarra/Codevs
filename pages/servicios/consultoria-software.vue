<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. Hero Banner Especializado -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <!-- Luces ambientales y rejilla -->
      <div class="absolute top-0 left-1/3 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#services" class="hover:text-red-500 transition-colors">Servicios</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">Consultoría de Software &amp; Consultora Tecnológica</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Columna Texto & Propuesta de Valor -->
          <div class="lg:col-span-7 space-y-6">

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]">
              Consultoría de Software
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                &amp; Asesoría Tecnológica Senior.
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Auditoría de código, optimización extrema de bases de datos, rescate de proyectos fallidos y dirección técnica como CTO fraccional. Asesoría directa por <strong class="text-white font-semibold">ingenieros senior y arquitectos especialistas en bases de datos</strong> para que tu empresa tome decisiones tecnológicas blindadas y rentables.
            </p>

            <!-- Puntos Clave de Confianza -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-zinc-300">
              <div class="flex items-center gap-2.5">
                <i class="bi bi-mortarboard-fill text-red-500 text-base"></i>
                <span>Auditoría por arquitectos senior de software &amp; BD</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-search text-red-500 text-base"></i>
                <span>Diagnóstico de cuellos de botella en 48 horas</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-life-preserver text-red-500 text-base"></i>
                <span>Rescate de software abandonado por freelancers</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-shield-lock-fill text-red-500 text-base"></i>
                <span>Acuerdo de confidencialidad estricto (NDA)</span>
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappConsultoriaUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>Solicitar Auditoría / Diagnóstico en 48h</span>
              </a>
              <NuxtLink to="/servicios/desarrollo-software"
                class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                Desarrollo a la Medida
              </NuxtLink>
            </div>
          </div>

          <!-- Columna Consola Técnica de Auditoría -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-red-950/30 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/50">
              
              <div class="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">CODEVS Audit Console v4.2</span>
              </div>

              <div class="space-y-4 font-mono text-xs">
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Auditoría de Consultas SQL:</span>
                  <span class="text-emerald-400 font-bold">Optimización de hasta 90%</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Detección de Deuda Técnica:</span>
                  <span class="text-amber-400 font-bold">Patrones &amp; Seguridad</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Diagnóstico Inicial:</span>
                  <span class="text-blue-400 font-bold">Informe en 48 Horas</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Modalidad de Asesoría:</span>
                  <span class="text-white font-bold">Presencial Pasto / Remoto</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">¿Por qué una consultora especializada?</strong> Evita perder millones en arquitecturas mal dimensionadas o software comprado a ciegas. Te decimos exactamente qué sirve, qué descartar y cómo blindar tu tecnología.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Las 6 Líneas Clave de Consultoría Tecnológica -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Servicios de Consultoría <span class="text-red-500">Estratégica</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Resolvemos los problemas técnicos más complejos con rigor académico y visión de negocio.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- 1. Auditoría de Código y Arquitectura -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-file-code-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Auditoría de Código &amp; Arquitectura</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Revisamos la calidad interna de tu software: código espagueti, vulnerabilidades OWASP, patrones de diseño defectuosos y cuellos de botella antes de salir a producción o recibir inversión.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Reporte exhaustivo de deuda técnica</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Plan de refactorización priorizado</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Auditoría para Due Diligence técnico</li>
            </ul>
          </div>

          <!-- 2. Optimización y Tuning de Bases de Datos -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-database-fill-gear text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Tuning de Bases de Datos (PostgreSQL / SQL)</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              ¿Tu sistema se congela al generar reportes o procesar miles de transacciones? Analizamos planes de ejecución EXPLAIN, creamos índices estratégicos y reescribimos consultas complejas.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Reducción del 90% en tiempos de consulta</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Optimización de memoria y conexiones</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Asesoría directa por arquitectos senior de BD</li>
            </ul>
          </div>

          <!-- 3. Rescate de Proyectos de Software -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-tools text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Rescate de Software Fallido</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              ¿Un proveedor o freelancer dejó tu software a medias, con errores críticos o desapareció? Intervenimos el repositorio, estabilizamos el sistema y lo terminamos bajo contrato formal.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Recuperación de código y accesos cloud</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Corrección de bugs bloqueantes</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Puesta en marcha definitiva</li>
            </ul>
          </div>

          <!-- 4. CTO Fraccional (vCTO) -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-person-badge-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">CTO Fraccional &amp; Dirección Técnica</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Ten un Director de Tecnología Senior en tu junta directiva sin pagar el sueldo millonario de un CTO a tiempo completo. Te guiamos en decisiones clave, evaluación de compras y contrataciones.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Selección estratégica de tecnología</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Auditoría a propuestas de otros proveedores</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Liderazgo técnico para fundadores</li>
            </ul>
          </div>

          <!-- 5. Consultoría Cloud & Microservicios -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-cloud-check-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Consultoría Cloud &amp; Optimización de Costos</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              ¿Tu factura mensual de AWS o Google Cloud no para de subir? Rediseñamos la infraestructura con contenedores Docker, balanceo eficiente y servidores bajo demanda para reducir hasta 50% de costos.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Auditoría FinOps de costos cloud</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Arquitectura de alta disponibilidad 99.9%</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Automatización de pipelines CI/CD</li>
            </ul>
          </div>

          <!-- 6. Seguridad & Cumplimiento Normativo -->
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-shield-shaded text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Ciberseguridad &amp; Habeas Data (Ley 1581)</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Evaluamos si tu software cumple con las normativas de la Superintendencia de Industria y Comercio en Colombia, cifrado de contraseñas, políticas de backup y prevención de robo de información.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Cifrado de datos en tránsito y reposo</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Auditoría de roles y permisos</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Políticas de contingencia y desastres</li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <!-- 3. Metodología de Consultoría: 3 Fases Claras -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Cómo Funciona Nuestra <span class="text-red-500">Consultoría</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Un método estructurado que te entrega resultados medibles sin rodeos teóricos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-4xl font-black text-red-500/80 mb-4 font-mono">01</div>
            <h3 class="text-xl font-bold text-white mb-3">Diagnóstico en 48 Horas</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Firmamos un acuerdo de confidencialidad (NDA), accedemos a tu arquitectura o código y realizamos una inspección técnica profunda para detectar cuellos de botella, riesgos y costos innecesarios.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-4xl font-black text-red-500/80 mb-4 font-mono">02</div>
            <h3 class="text-xl font-bold text-white mb-3">Informe Ejecutivo &amp; Roadmap</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Te entregamos un informe claro tanto para gerencia como para desarrolladores con un plan de acción paso a paso priorizado por impacto en ventas y reducción de riesgos.
            </p>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-4xl font-black text-red-500/80 mb-4 font-mono">03</div>
            <h3 class="text-xl font-bold text-white mb-3">Acompañamiento o Ejecución</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Tú decides: guiamos y capacitamos a tu equipo interno para implementar las mejoras, o nuestro equipo de ingenieros senior ejecuta la solución con garantía directa de resultados.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 4. Consultoría Local en Pasto & Nariño + Cobertura Nacional -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            
            <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Consultora Tecnológica con <span class="text-red-500">Presencia Física en Pasto</span>
            </h2>

            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
              A diferencia de consultoras de Bogotá que cobran honorarios desorbitados y solo atienden por videollamadas impersonales, en CODEVS tenemos sede en San Juan de Pasto. Puedes sentarte cara a cara con nuestros directores técnicos para analizar tu proyecto, revisar números y capacitar a tu personal directamente en tus oficinas.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-300 pt-2">
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-red-500"></i>
                <span>Reuniones presenciales en Pasto e Ipiales</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-red-500"></i>
                <span>Atención virtual para toda Colombia y EE. UU.</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-red-500"></i>
                <span>Factura electrónica DIAN y NIT empresarial</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bi bi-check-circle-fill text-red-500"></i>
                <span>Ahorro del 50% vs consultoras tradicionales</span>
              </div>
            </div>

            <div class="pt-4">
              <a :href="whatsappConsultoriaUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-950/40">
                <i class="bi bi-calendar-check"></i>
                <span>Agendar Sesión de Consultoría Técnica</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-5">
              <h3 class="text-xl font-bold text-white">¿En qué podemos ayudarte hoy?</h3>
              <ul class="space-y-3 text-sm text-zinc-400">
                <li class="flex items-start gap-2.5">
                  <i class="bi bi-arrow-right-circle-fill text-red-500 mt-1 shrink-0"></i>
                  <span>¿Deseas saber si el software que te cotizaron está bien cotizado?</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i class="bi bi-arrow-right-circle-fill text-red-500 mt-1 shrink-0"></i>
                  <span>¿Tu base de datos tarda minutos en responder reportes críticos?</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i class="bi bi-arrow-right-circle-fill text-red-500 mt-1 shrink-0"></i>
                  <span>¿Tienes un programador que no entrega avances y quieres auditarlo?</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <i class="bi bi-arrow-right-circle-fill text-red-500 mt-1 shrink-0"></i>
                  <span>¿Quieres integrar IA en tus procesos sin tirar el dinero a la basura?</span>
                </li>
              </ul>
              <div class="pt-2 border-t border-zinc-800 text-xs text-zinc-500">
                Respuesta en menos de 2 horas hábiles con un ingeniero senior.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 5. Preguntas Frecuentes sobre Consultoría -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Preguntas Frecuentes sobre <span class="text-red-500">Consultoría Tecnológica</span>
          </h2>
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

    <!-- 6. CTA Final -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Protege tu Inversión con una <span class="text-red-500">Consultora Experta</span>
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
          No tomes decisiones técnicas a ciegas. Habla con un arquitecto senior de CODEVS y obtén claridad técnica inmediata.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappConsultoriaUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>Hablar por WhatsApp con un Consultor</span>
          </a>
          <NuxtLink to="/#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Enviar Consulta por Correo
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { useJsonld } from '#imports';

const whatsappConsultoriaUrl = 'https://wa.me/573138066800?text=Hola%20CODEVS%2C%20requiero%20una%20consultor%C3%ADa%20tecnol%C3%B3gica%20%2F%20auditor%C3%ADa%20de%20software%20para%20mi%20empresa.';

const faqs = [
  {
    q: '¿Cómo funciona una auditoría de software con CODEVS?',
    a: 'Iniciamos firmando un acuerdo de confidencialidad (NDA). Luego accedemos de forma segura a tus repositorios de código o esquema de base de datos. En 48 horas realizamos un análisis estático y dinámico de arquitectura, seguridad y rendimiento, entregándote un informe claro con soluciones prácticas.'
  },
  {
    q: '¿Pueden rescatar un sistema si el programador original ya no está disponible?',
    a: 'Sí, es una de nuestras principales especialidades como consultora. Auditamos el código existente, reconstruimos la documentación faltante, configuramos entornos de prueba y nos hacemos cargo del mantenimiento y evolución del sistema.'
  },
  {
    q: '¿Firman acuerdos de confidencialidad (NDA) antes de revisar nuestro software?',
    a: 'Sí, siempre. La privacidad de tu propiedad intelectual, código y datos empresariales está 100% protegida bajo contrato legal con validez jurídica antes de iniciar cualquier revisión técnica.'
  },
  {
    q: '¿Qué es el servicio de CTO Fraccional (vCTO)?',
    a: 'Es la figura de un Director de Tecnología Senior que asesora a tu gerencia o fundadores por horas o sesiones mensuales. Te acompaña en reuniones clave, valida presupuestos de terceros, selecciona tecnologías y evita que tu empresa tome malas decisiones de software.'
  },
  {
    q: '¿Cuál es la diferencia entre CODEVS y una consultora tradicional?',
    a: 'Las consultoras tradicionales envían comerciales que subcontratan a juniors y entregan reportes teóricos en PDF de cientos de páginas. En CODEVS somos ingenieros senior y arquitectos de software especializados: diagnosticamos el problema exacto y podemos solucionarlo en el código directamente.'
  }
];

useHead({
  title: 'Consultoría de Software & Consultora Tecnológica en Pasto y Colombia | CODEVS',
  meta: [
    { 
      name: 'description', 
      content: 'Consultora tecnológica y consultoría de software a la medida en Pasto, Nariño y Colombia. Auditoría de código, optimización de bases de datos PostgreSQL, rescate de proyectos y CTO fraccional.' 
    },
    { 
      name: 'keywords', 
      content: 'consultoria de software pasto, consultora tecnologica pasto nariño, consultora de software colombia, consultoria de ti colombia, auditoria de software, optimizacion postgresql pasto, cto fraccional colombia, codevs consultoria' 
    },
    { property: 'og:title', content: 'Consultoría de Software & Consultora Tecnológica en Pasto y Colombia | CODEVS' },
    { property: 'og:description', content: 'Auditoría de código, optimización de bases de datos PostgreSQL y asesoría estratégica por ingenieros senior y arquitectos de software.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/2.png' },
    { property: 'og:url', content: 'https://www.codevs.dev/servicios/consultoria-software' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Consultoría de Software & Consultora Tecnológica en Pasto y Colombia | CODEVS' },
    { name: 'twitter:description', content: 'Asesoría técnica y auditoría de software senior en Pasto y Colombia.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/servicios/consultoria-software' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/servicios/consultoria-software' }
  ]
});

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'CODEVS - Consultoría de Software & Consultora Tecnológica',
    'image': 'https://www.codevs.dev/img/codevs.png',
    '@id': 'https://www.codevs.dev/#consultoria-software',
    'url': 'https://www.codevs.dev/servicios/consultoria-software',
    'telephone': '+57 3138066800',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Pasto',
      'addressRegion': 'Nariño',
      'postalCode': '520001',
      'addressCountry': 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 1.2136,
      'longitude': -77.2811
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Consultoría de Software & Auditoría Tecnológica',
    'serviceType': 'IT & Software Architecture Consulting',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CODEVS',
      'telephone': '+57 3138066800',
      'url': 'https://www.codevs.dev'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Pasto' },
      { '@type': 'AdministrativeArea', 'name': 'Nariño' },
      { '@type': 'Country', 'name': 'Colombia' },
      { '@type': 'Country', 'name': 'United States' }
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
