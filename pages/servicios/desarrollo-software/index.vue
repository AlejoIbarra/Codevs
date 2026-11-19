<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. Hero Banner de Alta Conversión y Posicionamiento -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <!-- Luces ambientales y rejilla de fondo -->
      <div class="absolute top-0 left-1/3 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb con Microdatos Semánticos -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#services" class="hover:text-red-500 transition-colors">Servicios</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">Desarrollo de Software a la Medida</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Columna Texto & Propuesta de Valor -->
          <div class="lg:col-span-7 space-y-6">
            
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]">
              Desarrollo de Software
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                a la Medida en Pasto y Colombia.
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Diseñamos e implementamos sistemas ERP, CRMs inteligentes, plataformas cloud y arquitecturas de bases de datos de alto rendimiento. Desarrollado por <strong class="text-white font-semibold">ingenieros senior y arquitectos especialistas en bases de datos</strong>. Código 100% de tu propiedad, sin licencias mensuales abusivas y con prototipo funcional en solo 7 días.
            </p>

            <!-- Puntos Clave de Autoridad y Confianza -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-zinc-300">
              <div class="flex items-center gap-2.5">
                <i class="bi bi-mortarboard-fill text-red-500 text-base"></i>
                <span>Creado por arquitectos senior de software &amp; BD</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-lightning-charge-fill text-red-500 text-base"></i>
                <span>Primer prototipo funcional en 7 días hábiles</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-shield-check text-red-500 text-base"></i>
                <span>100% Código propietario (Tuyo para siempre)</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-geo-alt-fill text-red-500 text-base"></i>
                <span>Atención presencial en Pasto y remota en todo el país</span>
              </div>
            </div>

            <!-- Botones de Acción Inmediata -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>Cotizar Proyecto con un Ingeniero</span>
              </a>
              <a href="#cobertura"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                <i class="bi bi-geo-fill text-red-500"></i>
                <span>Ver Cobertura por Ciudad</span>
              </a>
            </div>
          </div>

          <!-- Columna Consola Técnica & Credenciales -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl shadow-red-950/30 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/50">
              
              <!-- Cabecera de consola -->
              <div class="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">CODEVS Core Architecture v4.2</span>
              </div>

              <!-- Métricas en vivo -->
              <div class="space-y-4 font-mono text-xs">
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-database-fill-gear text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Base de Datos PostgreSQL</span>
                  </div>
                  <span class="text-emerald-400 font-bold">&lt; 15ms Query Latency</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-cpu-fill text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Backend Spring Boot &amp; APIs</span>
                  </div>
                  <span class="text-emerald-400 font-bold">99.98% SLA Uptime</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-shield-lock-fill text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Cifrado Bancario y DIAN</span>
                  </div>
                  <span class="text-blue-400 font-bold">TLS 1.3 / AES-256</span>
                </div>

                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="bi bi-clock-history text-red-500 text-sm"></i>
                    <span class="text-zinc-300">Entrega de Prototipo</span>
                  </div>
                  <span class="text-amber-400 font-bold">7 Días Hábiles</span>
                </div>
              </div>

              <!-- Credenciales Académicas y Profesionales -->
              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">¿Por qué confiar en nosotros?</strong> Mientras otras agencias subcontratan juniors o usan plantillas prefabricadas, en CODEVS tu software es estructurado directamente por ingenieros docentes que enseñan diseño de bases de datos y algoritmos en universidades de Colombia.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Sección Específica de Autoridad Local: Pasto & Nariño #1 -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            La Empresa de Software de Referencia en <span class="text-red-500">Pasto y Nariño</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Nacimos con raíces en San Juan de Pasto y hemos llevado la ingeniería del sur de Colombia a estándares internacionales. Desarrollamos soluciones tecnológicas que resuelven los cuellos de botella de los sectores productivos de nuestra región.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-briefcase"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Firmas de Abogados &amp; LegalTech</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Automatización de gestión de expedientes, cálculo de indemnizaciones, seguimiento judicial y plataformas especializadas como nuestro caso de éxito <strong class="text-zinc-200">Sin Huellas</strong> en Pasto y Colombia.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-hospital"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Clínicas, IPS &amp; Sector Salud</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Software para agendamiento médico, historias clínicas digitales, facturación de salud con normatividad RIPS y sistemas de consulta rápida para médicos especialistas.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-truck"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Distribución &amp; Comercio Fronterizo</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Control multisede de bodegas, facturación electrónica DIAN, inventario en tiempo real y logística para empresas que operan en el corredor Pasto - Ipiales - Ecuador.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-bank"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Cooperativas &amp; Microcréditos</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Sistemas financieros seguros para amortización de créditos, recaudo de cuotas, reportes contables y scoring crediticio con respaldo de bases de datos relacionales blindadas.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-flower1"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Agroindustria &amp; Café Especial</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Trazabilidad de cosechas de café de altura de Nariño, control de lotes, pesaje, compras a productores y software de exportación de productos agropecuarios.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 text-xl mb-4">
              <i class="bi bi-shop"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Comercio Minorista &amp; Mayorista</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Puntos de venta (POS) integrados con catálogos web, pasarelas de pago PSE/Wompi y sincronización directa con WhatsApp para atención al cliente sin fricción.
            </p>
          </div>

        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-zinc-400">
            ¿Tu empresa está ubicada en Pasto o Nariño? <a :href="whatsappPastoUrl" class="text-red-400 hover:underline font-semibold">Agenda una reunión presencial en nuestra sede o videollamada directa</a>.
          </p>
        </div>

      </div>
    </section>

    <!-- 3. Tabla Comparativa: Software a la Medida vs SaaS Genérico vs Freelancers -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Por Qué un Sistema a la Medida con <span class="text-red-500">CODEVS</span> es la Mejor Inversión
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Compara la diferencia entre ser dueño de tu propia tecnología frente a alquilar software genérico o depender de programadores informales.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr class="border-b border-zinc-800">
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Criterio de Evaluación</th>
                <th class="py-4 px-6 text-sm font-bold text-red-500 uppercase bg-red-950/20 border-x border-zinc-800">Software a Medida CODEVS</th>
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Software Comercial Enlatado (SaaS)</th>
                <th class="py-4 px-6 text-sm font-semibold text-zinc-400 uppercase">Freelancers Informales</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800/60 text-sm">
              <tr>
                <td class="py-4 px-6 font-medium text-white">Propiedad del Código Fuente</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 100% Tuyo para siempre
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> No tienes código, solo lo alquilas
                </td>
                <td class="py-4 px-6 text-amber-400">
                  <i class="bi bi-exclamation-triangle-fill mr-1.5"></i> Incompleto o sin garantías
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Costos Mensuales por Usuario</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> $0 por usuario (Usuarios ilimitados)
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Mensualidades crecientes y caras
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Costos imprevistos de soporte
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Adaptación a tus Procesos</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 100% Ajustado a tu negocio
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Tu empresa se tiene que adaptar al sistema
                </td>
                <td class="py-4 px-6 text-amber-400">
                  Adaptación limitada a su experiencia
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Rigor en Bases de Datos</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> Diseñado por arquitectos senior de BD
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Caja negra sin acceso directo a SQL
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Modelos frágiles que colapsan al crecer
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Tiempo para Primer Prototipo</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> 7 Días Hábiles
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Inmediato pero rígido
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Meses de incertidumbre y demoras
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium text-white">Contrato, Factura &amp; Soporte Legal</td>
                <td class="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-x border-zinc-800">
                  <i class="bi bi-check-circle-fill mr-1.5"></i> Empresa constituida con NIT y SLAs
                </td>
                <td class="py-4 px-6 text-zinc-400">
                  Tickets automáticos en inglés
                </td>
                <td class="py-4 px-6 text-rose-400">
                  <i class="bi bi-x-circle-fill mr-1.5"></i> Sin contrato formal ni garantías
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <!-- 4. Nuestras Soluciones de Software Empresarial -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Soluciones de Software que <span class="text-red-500">Construimos</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Cada línea de código está optimizada para que tu empresa sea más rentable, rápida y ordenada.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-diagram-3-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Sistemas ERP Operativos a la Medida</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Centraliza compras, inventarios multisede, despachos, órdenes de trabajo y facturación electrónica DIAN en un software unificado que ningún paquete comercial puede igualar.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Control exacto de existencias</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Módulo de tesorería y cartera</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Reportes gerenciales en tiempo real</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-people-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">CRMs Comerciales &amp; Gestión de Clientes</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Controla cada oportunidad de venta, llamadas, cotizaciones y estados de prospectos. Integrado con WhatsApp Business API para que tus asesores nunca pierdan un negocio.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Embudo de ventas personalizado</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Alertas de seguimiento automático</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Telemetría de efectividad por asesor</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-database-fill-check text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Arquitectura &amp; Modelado de Bases de Datos</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Nuestra especialidad insigne. Diseñamos modelos relacionales blindados con PostgreSQL y MySQL, índices optimizados, procedimientos almacenados y consultas de ultra baja latencia.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Normalización rigurosa de datos</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Caché en memoria con Redis</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Migración desde hojas de cálculo caóticas</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-cloud-arrow-up-fill text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Microservicios Cloud &amp; APIs Seguras</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Arquitecturas modernas con Spring Boot (Java 21) y Docker que garantizan que tu sistema no se congele ni caiga cuando miles de usuarios hagan transacciones concurrentes.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>APIs RESTful y Webhooks documentados</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Despliegue automatizado en AWS o GCP</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Balanceo de carga y tolerancia a fallos</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-robot text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Agentes de IA para Operaciones Complejas</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Integramos Inteligencia Artificial dentro de tu software: lectura automática de contratos y facturas en PDF, asistentes que consultan tus bases de datos y bots de atención 24/7.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Arquitectura RAG sobre documentos privados</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Clasificación automática de solicitudes</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Cero alucinaciones con datos verificados</li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-arrow-repeat text-2xl text-red-500"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Modernización de Sistemas Antiguos</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              ¿Tu empresa depende de un software viejo en Visual Basic, hojas de cálculo enredadas de Excel o un sistema de escritorio lento? Lo reconstruimos en una plataforma web moderna y segura.
            </p>
            <ul class="text-xs text-zinc-400 space-y-1.5">
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Migración de datos sin pérdida ni freno comercial</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Acceso desde cualquier celular o computador</li>
              <li><i class="bi bi-check2 text-red-500 mr-1.5"></i>Capacitación completa para tu personal</li>
            </ul>
          </div>

        </div>

        <!-- Callout Destacado de Consultora Tecnológica & Auditoría -->
        <div class="mt-12 p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-950/20">
          <div class="space-y-2">
            <h3 class="text-2xl font-black text-white">¿Necesitas Auditoría de Código, Rescate de Software o un CTO Fraccional?</h3>
            <p class="text-zinc-400 text-sm max-w-2xl">
              También operamos como consultora técnica en Pasto y Colombia: diagnosticamos bases de datos PostgreSQL lentas, auditamos arquitecturas antes de salir a producción y rescatamos sistemas fallidos de otros proveedores.
            </p>
          </div>
          <NuxtLink to="/servicios/consultoria-software"
            class="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-red-950/30 hover:scale-[1.02]">
            <span>Ver Consultoría de Software</span>
            <i class="bi bi-arrow-right"></i>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- 5. Metodología de Ingeniería: 4 Pasos Transparentes -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ingeniería de Software con <span class="text-red-500">Tiempos Reales</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Un método ágil y riguroso sin sorpresas presupuestales ni promesas vacías.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-3xl font-black text-red-500/80 mb-3 font-mono">01</div>
            <h3 class="text-lg font-bold text-white mb-2">Diagnóstico Técnico</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Analizamos tus flujos operativos, cuellos de botella y requerimientos para diseñar la arquitectura exacta y el modelo de datos óptimo en 48 horas.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-3xl font-black text-red-500/80 mb-3 font-mono">02</div>
            <h3 class="text-lg font-bold text-white mb-2">Prototipo en 7 Días</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              En el día 7 tienes un prototipo interactivo navegable para validar pantallas, reglas de negocio y flujos de usuario antes de culminar el desarrollo.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-3xl font-black text-red-500/80 mb-3 font-mono">03</div>
            <h3 class="text-lg font-bold text-white mb-2">Construcción Ágil</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Sprints de 2 semanas con entregas funcionales continuas. Tú pruebas los avances en un entorno seguro de staging mientras programamos.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative">
            <div class="text-3xl font-black text-red-500/80 mb-3 font-mono">04</div>
            <h3 class="text-lg font-bold text-white mb-2">Despliegue &amp; Garantía</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Lanzamiento a producción en la nube, capacitación presencial/virtual para tu equipo, entrega del 100% del código y soporte con SLA garantizado.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 6. Hub Geográfico Interactivo: Cobertura por Ciudad, Departamento y País -->
    <section id="cobertura" class="py-20 border-b border-zinc-900 bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Cobertura de Desarrollo de Software por <span class="text-red-500">Región</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Selecciona tu departamento, ciudad o país para ver casos específicos, sectores industriales y cómo nuestro equipo apoya a empresas locales.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Pasto (Destacado #1) -->
          <NuxtLink to="/servicios/desarrollo-software/pasto" 
            class="group p-6 rounded-2xl bg-gradient-to-b from-red-950/20 to-zinc-900/80 border border-red-500/50 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-red-950/20">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider">
                Sede Central #1
              </span>
              <i class="bi bi-arrow-up-right text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Pasto, Nariño</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Ingeniería local para empresas de Nariño: LegalTech, salud, distribuidores y cooperativas con atención presencial y soporte directo.
            </p>
            <span class="text-xs text-red-400 font-semibold group-hover:underline">
              Ver servicios en Pasto →
            </span>
          </NuxtLink>

          <!-- Nariño Departamento -->
          <NuxtLink to="/servicios/desarrollo-software/narino" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Departamento de Nariño</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Ipiales, Tumaco &amp; Nariño</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Soluciones para logística de frontera con Ecuador, agroindustria, puertos y comercio exterior en todo el departamento.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Nariño →
            </span>
          </NuxtLink>

          <!-- Bogotá D.C. -->
          <NuxtLink to="/servicios/desarrollo-software/bogota" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Distrito Capital</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Bogotá D.C.</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Software corporativo de alto rendimiento para centros financieros, firmas consultoras, entidades y grandes empresas de la capital.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Bogotá →
            </span>
          </NuxtLink>

          <!-- Medellín & Antioquia -->
          <NuxtLink to="/servicios/desarrollo-software/medellin" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Antioquia</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Medellín &amp; Antioquia</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Desarrollo de MVPs, startups, fábricas de manufactura y empresas del Valle de Aburrá con metodologías ágiles e integración cloud.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Medellín →
            </span>
          </NuxtLink>

          <!-- Cali & Valle del Cauca -->
          <NuxtLink to="/servicios/desarrollo-software/cali" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Valle del Cauca</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Cali &amp; Valle del Cauca</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Sistemas para el sector agroindustrial azucarero, farmacéutico, importador y logística hacia el puerto de Buenaventura.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Cali →
            </span>
          </NuxtLink>

          <!-- Barranquilla & Caribe -->
          <NuxtLink to="/servicios/desarrollo-software/barranquilla" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Región Caribe</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Barranquilla &amp; Caribe</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Plataformas para logística portuaria, comercio internacional, turismo y hotelería en Barranquilla, Cartagena y Santa Marta.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Caribe →
            </span>
          </NuxtLink>

          <!-- Bucaramanga & Santander -->
          <NuxtLink to="/servicios/desarrollo-software/bucaramanga" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Santander</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Bucaramanga &amp; Santander</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Sistemas para sector salud especializado, manufactura de calzado, confecciones, avícola y servicios de ingeniería.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Bucaramanga →
            </span>
          </NuxtLink>

          <!-- Eje Cafetero -->
          <NuxtLink to="/servicios/desarrollo-software/eje-cafetero" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Triángulo del Café</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Eje Cafetero</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Pereira, Manizales y Armenia: trazabilidad de café especial, turismo rural, centros logísticos y empresas de servicios.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Explorar Eje Cafetero →
            </span>
          </NuxtLink>

          <!-- Colombia Nacional -->
          <NuxtLink to="/servicios/desarrollo-software/colombia" 
            class="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-zinc-400">Nivel Nacional</span>
              <i class="bi bi-arrow-up-right text-zinc-500 group-hover:text-red-400 transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Colombia (32 Departamentos)</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4">
              Cobertura remota integral en toda Colombia con cumplimiento de normatividad fiscal DIAN, habeas data y pasarelas nacionales.
            </p>
            <span class="text-xs text-zinc-400 group-hover:text-red-400 font-semibold">
              Ver Cobertura Nacional →
            </span>
          </NuxtLink>

          <!-- Estados Unidos / Nearshore -->
          <NuxtLink to="/servicios/desarrollo-software/estados-unidos" 
            class="group p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-400">
                <i class="bi bi-globe-americas"></i>
                <span>Nearshore Software Engineering for USA &amp; Global Companies</span>
              </div>
              <span class="text-xs font-mono text-zinc-400">Time-Zone Aligned (EST / CST)</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Estados Unidos &amp; Empresas Internacionales</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-4 max-w-4xl">
              Proporcionamos ingenieros senior y squads dedicados de desarrollo para startups y corporaciones en EE. UU. Alineación de zona horaria, comunicación bilingüe fluida y una reducción del 60% en costos de desarrollo manteniendo los más altos estándares de calidad técnica.
            </p>
            <span class="text-xs text-red-400 font-semibold group-hover:underline">
              Conocer nuestro modelo Nearshore para EE. UU. →
            </span>
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- 7. Casos de Éxito Reales & Métricas -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Proyectos Reales de <span class="text-red-500">Alto Impacto</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            No vendemos maquetas teóricas. Construimos plataformas empresariales que procesan millones de registros y facturan a diario.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Sin Huellas LegalTech ERP -->
          <div class="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-red-400 uppercase tracking-wider">LegalTech &amp; ERP Judicial • Colombia</span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-semibold">En Producción</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">Sin Huellas: ERP LegalTech Automatizado</h3>
            <p class="text-zinc-300 text-sm leading-relaxed mb-6">
              Plataforma empresarial diseñada para automatizar la radicación, control de términos de respuesta y gestión de miles de solicitudes de eliminación de reportes negativos ante centrales de riesgo.
            </p>
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80 text-center">
              <div>
                <span class="block text-xl font-black text-white">70%</span>
                <span class="text-xs text-zinc-400">Menos tiempo manual</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">100%</span>
                <span class="text-xs text-zinc-400">Auditoría DIAN &amp; Legal</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">&lt; 20ms</span>
                <span class="text-xs text-zinc-400">Búsqueda en PostgreSQL</span>
              </div>
            </div>
          </div>

          <!-- Moments Gallery Cloud Marketplace -->
          <div class="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/40 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono text-red-400 uppercase tracking-wider">SaaS &amp; Cloud Marketplace • Global</span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-semibold">Startup Validada</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-3">Moments Gallery: Plataforma Cloud de Alta Concurrencia</h3>
            <p class="text-zinc-300 text-sm leading-relaxed mb-6">
              Ecosistema tecnológico de carga, procesamiento y venta de galerías fotográficas en tiempo real con pasarelas de pago internacionales y almacenamiento distribuido en AWS S3.
            </p>
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80 text-center">
              <div>
                <span class="block text-xl font-black text-white">60 FPS</span>
                <span class="text-xs text-zinc-400">Renderizado Fluido</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">4 Semanas</span>
                <span class="text-xs text-zinc-400">Lanzamiento MVP</span>
              </div>
              <div>
                <span class="block text-xl font-black text-white">Multi-país</span>
                <span class="text-xs text-zinc-400">Pagos Stripe &amp; Wompi</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 8. Stack Tecnológico de Grado Corporativo -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Stack Tecnológico de <span class="text-red-500">Alto Nivel</span>
          </h2>
          <p class="text-zinc-400 text-base mt-3">
            Sin frameworks obsoletos ni soluciones parcheadas. Solo tecnologías modernas, seguras y respaldadas por la industria mundial.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          <span v-for="tech in techStack" :key="tech"
            class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs sm:text-sm font-semibold hover:border-red-500/50 hover:text-white transition-colors">
            {{ tech }}
          </span>
        </div>

      </div>
    </section>

    <!-- 9. Preguntas Frecuentes (SEO & Snippets de Google) -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Preguntas Frecuentes sobre <span class="text-red-500">Desarrollo de Software</span>
          </h2>
          <p class="text-zinc-400 text-base mt-3">
            Todo lo que necesitas saber antes de contratar el software para tu empresa.
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx"
            class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors">
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

    <!-- 10. CTA Final de Conversión Rápida -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight">
          ¿Listo para automatizar las operaciones de tu <span class="text-red-500">empresa</span>?
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
          Agenda un diagnóstico técnico sin costo con un arquitecto de software de CODEVS. En 48 horas te presentamos una propuesta detallada y el modelo de tu sistema.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>Hablar por WhatsApp con un Ingeniero</span>
          </a>
          <NuxtLink to="/#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Enviar Solicitud por Correo
          </NuxtLink>
        </div>

        <p class="text-xs text-zinc-500 pt-3">
          Respuesta garantizada en menos de 2 horas hábiles • Sede en Pasto, Nariño • Atención a toda Colombia y EE. UU.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '#imports';
import { useJsonld } from '#imports';

const whatsappUrl = 'https://wa.me/573138066800?text=Hola%20CODEVS%2C%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software%20a%20la%20medida%20para%20mi%20empresa.';
const whatsappPastoUrl = 'https://wa.me/573138066800?text=Hola%20CODEVS%2C%20estoy%20en%20Pasto%20%2F%20Nari%C3%B1o%20y%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20desarrollo%20de%20software.';

const techStack = [
  'Java 21 & Spring Boot 3',
  'PostgreSQL (Enterprise SQL)',
  'Vue.js & Nuxt 3',
  'Python & FastAPI',
  'Redis Cache',
  'Docker & Microservicios',
  'AWS & Google Cloud',
  'TypeScript',
  'WhatsApp Cloud API',
  'Facturación Electrónica DIAN',
  'Stripe & Wompi Pagos',
  'Arquitectura RAG & IA',
  'CI/CD GitHub Actions',
  'Cifrado TLS 1.3 / AES-256'
];

const faqs = [
  {
    q: '¿Por qué CODEVS es la mejor opción en Pasto y Nariño para desarrollo de software?',
    a: 'Porque no somos una agencia de reventa ni freelancers inexpertos. Nuestro equipo fundador está integrado por ingenieros senior y arquitectos de bases de datos con sede física en San Juan de Pasto. Diseñamos arquitectura de software de nivel internacional, garantizamos código 100% propietario y brindamos soporte presencial y virtual cercano a las empresas nariñenses y de toda Colombia.'
  },
  {
    q: '¿Cuánto cuesta desarrollar un software a la medida en Colombia?',
    a: 'El costo depende del alcance operativo: número de módulos, flujos de trabajo, integraciones con DIAN o pasarelas de pago y volumen de usuarios. En CODEVS creamos soluciones modulares que inician con un MVP funcional y crecen con tu empresa. A diferencia de los sistemas de suscripción mensual que encarecen con cada usuario, nuestro software es un activo propio sin licencias abusivas por usuario.'
  },
  {
    q: '¿En cuánto tiempo entregan el primer prototipo o versión funcional?',
    a: 'Entregamos un primer prototipo interactivo funcional en exactamente 7 días hábiles a partir de la firma de requerimientos. Esto te permite comprobar el flujo de pantallas y reglas de negocio antes de la fase de despliegue final.'
  },
  {
    q: '¿El código fuente y las bases de datos son de mi propiedad?',
    a: 'Sí, absolutamente. Todo el código fuente, esquemas de bases de datos, documentación de APIs y credenciales de despliegue cloud son transferidos 100% a tu empresa al finalizar el proyecto. Nunca quedas atado a nosotros.'
  },
  {
    q: '¿Cómo garantizan el soporte si mi empresa está en otra ciudad o país?',
    a: 'Operamos con metodologías ágiles en la nube, videollamadas periódicas de seguimiento, entornos de prueba (staging) y acuerdos de nivel de servicio (SLA) con monitoreo 24/7 y tiempos de respuesta garantizados por contrato.'
  },
  {
    q: '¿El software se puede integrar con facturación electrónica de la DIAN?',
    a: 'Sí. Desarrollamos integraciones nativas con proveedores autorizados de facturación electrónica DIAN, nómina electrónica, documentos soporte y pasarelas de pago nacionales como PSE, Wompi, PayU y MercadoPago.'
  }
];

useHead({
  title: 'Desarrollo de Software en Pasto, Nariño & Colombia | CODEVS #1',
  meta: [
    { 
      name: 'description', 
      content: 'Empresa #1 en desarrollo de software a la medida en Pasto, Nariño y Colombia. Sistemas ERP, CRMs, PostgreSQL y cloud diseñados por ingenieros senior y arquitectos de software. Prototipo en 7 días y código 100% propietario.' 
    },
    { 
      name: 'keywords', 
      content: 'desarrollo de software pasto, empresa de software pasto, software a la medida pasto nariño, ingenieros de software pasto, programadores pasto, desarrollo erp pasto, bases de datos postgresql pasto, desarrollo de software colombia, codevs' 
    },
    { property: 'og:title', content: 'Desarrollo de Software en Pasto, Nariño & Colombia | CODEVS #1' },
    { property: 'og:description', content: 'Ingeniería de software a la medida y bases de datos relacionales en Pasto y Colombia. Prototipo funcional en 7 días, sin licencias mensuales abusivas.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/2.png' },
    { property: 'og:url', content: 'https://www.codevs.dev/servicios/desarrollo-software' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Desarrollo de Software en Pasto, Nariño & Colombia | CODEVS #1' },
    { name: 'twitter:description', content: 'Sistemas ERP y software a la medida en Pasto y Colombia. Prototipo en 7 días.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.codevs.dev/en/servicios/desarrollo-software' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/servicios/desarrollo-software' }
  ]
});

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'CODEVS - Desarrollo de Software en Pasto y Colombia',
    'image': 'https://www.codevs.dev/img/codevs.png',
    '@id': 'https://www.codevs.dev/#localbusiness-pasto',
    'url': 'https://www.codevs.dev/servicios/desarrollo-software',
    'telephone': '+57 3138066800',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Centro / San Juan de Pasto',
      'addressLocality': 'Pasto',
      'addressRegion': 'Nariño',
      'postalCode': '520001',
      'addressCountry': 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 1.2136,
      'longitude': -77.2811
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '18:00'
    },
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61576300478505',
      'https://www.instagram.com/codevs_dev/'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Desarrollo de Software a la Medida',
    'serviceType': 'Custom Software Development & Database Engineering',
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
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de Ingeniería de Software',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Sistemas ERP a la Medida' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CRMs y Automatización de Ventas' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Arquitectura de Bases de Datos PostgreSQL' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Microservicios Spring Boot & Cloud' } }
      ]
    }
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
