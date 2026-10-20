<template>
  <div class="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">

    <!-- Hero Banner Especializado -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <!-- Luces ambientales de fondo -->
      <div class="absolute top-0 left-1/4 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/#services" class="hover:text-red-500 transition-colors">Servicios</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <span class="text-zinc-300">Automatizaciones & Omnicanalidad</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Columna Texto & Propuesta de Valor -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/40 backdrop-blur-xl shadow-lg shadow-red-950/20">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-red-400 font-extrabold uppercase tracking-widest text-xs">Somos Expertos en Automatización & Omnicanalidad</span>
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
              Centraliza tus Canales.
              <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                Automatiza & Vende 24/7.
              </span>
            </h1>

            <p class="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Diseñamos e implementamos arquitecturas empresariales de <strong class="text-white font-semibold">omnicanalidad unificada y automatizaciones de flujos</strong>. Centralizamos WhatsApp Business API oficial, Instagram Direct, Facebook Messenger, Web Chat y CRM en una consola inteligente con bots de IA para que tu equipo comercial nunca pierda un cliente.
            </p>

            <!-- Puntos Clave de Autoridad -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-zinc-300">
              <div class="flex items-center gap-2.5">
                <i class="bi bi-check-circle-fill text-red-500 text-base"></i>
                <span>API Oficial de Meta (Cero riesgo de baneo)</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-check-circle-fill text-red-500 text-base"></i>
                <span>Múltiples asesores con 1 solo número</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-check-circle-fill text-red-500 text-base"></i>
                <span>Sincronización en tiempo real con tu CRM</span>
              </div>
              <div class="flex items-center gap-2.5">
                <i class="bi bi-check-circle-fill text-red-500 text-base"></i>
                <span>Chatbots de IA con catálogo y citas</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <a :href="whatsappConsultationUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
                <i class="bi bi-whatsapp text-lg"></i>
                <span>Hablar con un Experto en Automatización</span>
              </a>
              <NuxtLink to="/#contact"
                class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                Solicitar Demostración
              </NuxtLink>
            </div>
          </div>

          <!-- Columna Mockup Visual Chévere -->
          <div class="lg:col-span-5 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-red-950/30 transition-all duration-500 hover:border-red-500/50">
              <img 
                src="/assets/img/services/omnichannel-dashboard.jpg" 
                alt="Plataforma de Omnicanalidad y Automatización CODEVS - Dashboard Centralizado" 
                class="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Floating Pill Status -->
              <div class="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md flex items-center justify-between gap-3 shadow-xl">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <div>
                    <div class="text-xs font-bold text-white uppercase tracking-wider">Bandeja Unificada En Vivo</div>
                    <div class="text-[11px] text-zinc-400">WhatsApp • Instagram • Web • CRM</div>
                  </div>
                </div>
                <span class="text-xs font-black text-red-500 px-2.5 py-1 rounded-md bg-red-950/50 border border-red-500/30">
                  SLA &lt; 45s
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Por Qué Somos Expertos (Credenciales Técnicas) -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-bold uppercase tracking-wider text-red-400">
            Nivel de Ingeniería CODEVS
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ¿Por qué somos los <span class="text-red-500">expertos indicados</span> para tu negocio?
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            No instalamos soluciones genéricas de caja negra. Construimos e integramos infraestructuras a la medida con estándares de alta concurrencia, seguridad y analítica en tiempo real.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-shield-check"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">API Oficial de WhatsApp Cloud</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Conexión directa con la infraestructura oficial de Meta. Dile adiós a los bloqueos de números de teléfono causados por herramientas no autorizadas o emuladores inestables. Máxima entregabilidad y cifrado de extremo a extremo.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-people-fill"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Gestión Multi-Agente Centralizada</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Conecta a 5, 20 o 100 agentes comerciales y de soporte bajo un único número de teléfono oficial. Asigna conversaciones de forma equitativa (Round Robin), por departamento o por especialidad del asesor.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-diagram-3"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Orquestación de Flujos con n8n & Python</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Diseñamos automatizaciones complejas: captura de prospectos, verificación de compras, emisión de facturación electrónica, envío de recordatorios preventivos y disparadores automáticos mediante webhooks.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-cpu-fill"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Agentes de Inteligencia Artificial</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Entrenamos modelos LLM con el catálogo de productos, lista de precios y manuales de tu empresa. El bot califica leads, responde dudas complejas y transfiere la conversación a un humano en el instante indicado.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-database-check"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Sincronización Total con CRM & ERP</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Conexión directa en tiempo real con HubSpot, Salesforce, Zoho CRM, Holded, Monday, Google Sheets o bases de datos internas (PostgreSQL, MySQL). Ningún lead se queda olvidado en un chat personal.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-bar-chart-line-fill"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Métricas, SLA y Reportes en Vivo</h3>
            <p class="text-zinc-400 text-sm leading-relaxed text-justify">
              Tableros de control ejecutivos: tiempos de primera respuesta, satisfacción de clientes (CSAT), volumen de tickets por canal y rendimiento individual de cada agente con auditoría completa de conversaciones.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- Sección Segunda Imagen Chévere: Flujo de Automatizaciones -->
    <section class="py-24 border-b border-zinc-900 bg-black relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Mockup Chévere de Flujo -->
          <div class="lg:col-span-6 order-2 lg:order-1 relative">
            <div class="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-red-950/20 transition-all duration-500 hover:border-red-500/50">
              <img 
                src="/assets/img/services/automation-workflow.jpg" 
                alt="Arquitectura de Flujos de Automatización e IA - CODEVS" 
                class="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Floating Badge -->
              <div class="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 border border-red-500/40 backdrop-blur-md text-xs font-bold text-red-400 flex items-center gap-2">
                <i class="bi bi-gear-wide-connected text-red-500 animate-spin"></i>
                <span>Motor de Automatizaciones en Tiempo Real</span>
              </div>
            </div>
          </div>

          <!-- Explicación Técnica del Flujo -->
          <div class="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Flujos que trabajan mientras duermes
            </div>

            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Automatizaciones que multiplican la capacidad de tu equipo
            </h2>

            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
              En lugar de contratar más personal para tareas repetitivas de digitación, implementamos canalizadores de datos autónomos. Cada vez que entra un mensaje por cualquier canal, nuestro sistema ejecuta acciones inmediatas:
            </p>

            <ul class="space-y-4 pt-2">
              <li class="flex items-start gap-3">
                <div class="w-7 h-7 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 class="font-bold text-white text-base">Calificación Instantánea de Prospectos</h4>
                  <p class="text-zinc-400 text-sm">El bot pregunta el tipo de servicio, presupuesto y urgencia. Si es un lead de alto valor, notifica a tu asesor senior al instante.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-7 h-7 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 class="font-bold text-white text-base">Agendamiento Automático de Citas</h4>
                  <p class="text-zinc-400 text-sm">Sincronización con Google Calendar o Calendly directamente por WhatsApp, enviando recordatorios previos para reducir el ausentismo a 0%.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-7 h-7 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 class="font-bold text-white text-base">Cobranza y Links de Pago Seguros</h4>
                  <p class="text-zinc-400 text-sm">Envío de links de pasarelas como Wompi, PSE o Stripe con actualización inmediata del estado del pedido en tu base de datos.</p>
                </div>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>

    <!-- Comparativa: Herramientas Caseras vs Arquitectura Omnicanal CODEVS -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/40">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            WhatsApp Web Tradicional vs <span class="text-red-500">CODEVS Omnicanal</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            Descubre por qué las empresas que escalan abandonan el celular compartido y adoptan nuestra solución empresarial.
          </p>
        </div>

        <div class="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-zinc-800 bg-zinc-950/80">
                <th class="p-5 sm:p-6 text-sm font-bold text-zinc-400 uppercase tracking-wider">Capacidad / Función</th>
                <th class="p-5 sm:p-6 text-sm font-bold text-zinc-500 uppercase tracking-wider">WhatsApp Normal / Web</th>
                <th class="p-5 sm:p-6 text-sm font-bold text-red-500 uppercase tracking-wider bg-red-950/20 border-l border-red-500/30">Plataforma CODEVS Omnicanal</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800/60 text-sm">
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Número de agentes simultáneos</td>
                <td class="p-5 sm:p-6 text-zinc-400">Limitado a 4 navegadores inestables</td>
                <td class="p-5 sm:p-6 text-white font-bold bg-red-950/10 border-l border-red-500/20">Ilimitados con 1 solo número verificado</td>
              </tr>
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Riesgo de bloqueo de cuenta</td>
                <td class="p-5 sm:p-6 text-rose-400">Alto si se envían muchos mensajes</td>
                <td class="p-5 sm:p-6 text-emerald-400 font-bold bg-red-950/10 border-l border-red-500/20">0% (API Oficial verificada por Meta)</td>
              </tr>
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Unificación de Canales</td>
                <td class="p-5 sm:p-6 text-zinc-400">Sólo WhatsApp (Instagram aparte)</td>
                <td class="p-5 sm:p-6 text-white font-bold bg-red-950/10 border-l border-red-500/20">WhatsApp + Instagram + Web + Facebook en 1 sola bandeja</td>
              </tr>
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Sincronización con CRM / ERP</td>
                <td class="p-5 sm:p-6 text-zinc-400">Manual (copiar y pegar)</td>
                <td class="p-5 sm:p-6 text-white font-bold bg-red-950/10 border-l border-red-500/20">Automática bidireccional en milisegundos</td>
              </tr>
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Horario de atención</td>
                <td class="p-5 sm:p-6 text-zinc-400">Sólo en horario de oficina</td>
                <td class="p-5 sm:p-6 text-white font-bold bg-red-950/10 border-l border-red-500/20">24 horas, 7 días a la semana con Agentes IA</td>
              </tr>
              <tr>
                <td class="p-5 sm:p-6 font-semibold text-white">Métricas y Auditoría de Chat</td>
                <td class="p-5 sm:p-6 text-zinc-400">Ninguna métrica de rendimiento</td>
                <td class="p-5 sm:p-6 text-white font-bold bg-red-950/10 border-l border-red-500/20">Tiempos de respuesta, CSAT, tasa de cierre por asesor</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <!-- Métricas Monumentales de Desempeño -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-4xl sm:text-6xl font-black text-red-500 tracking-tight">&lt; 40s</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">Tiempo de Respuesta</div>
            <div class="text-xs text-zinc-500">Atención inmediata a cada prospecto</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl sm:text-6xl font-black text-white tracking-tight">+300%</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">Capacidad de Atención</div>
            <div class="text-xs text-zinc-500">Sin aumentar nómina de personal</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl sm:text-6xl font-black text-red-500 tracking-tight">0%</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">Fuga de Prospectos</div>
            <div class="text-xs text-zinc-500">Todos los datos quedan en tu CRM</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl sm:text-6xl font-black text-white tracking-tight">99.9%</div>
            <div class="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">Disponibilidad Cloud</div>
            <div class="text-xs text-zinc-500">Arquitectura oficial Meta Cloud</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Tecnologías Utilizadas -->
    <section class="py-20 border-b border-zinc-900 bg-black">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h3 class="text-2xl sm:text-3xl font-black text-white mb-8">
          Tecnologías y Estándares que <span class="text-red-500">Garantizan tu Operación</span>
        </h3>

        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          <span v-for="(tech, i) in techStack" :key="i"
            class="px-5 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:border-red-500/50 hover:text-red-400 transition-all duration-300">
            {{ tech }}
          </span>
        </div>

      </div>
    </section>

    <!-- Preguntas Frecuentes FAQ -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Preguntas Frecuentes sobre <span class="text-red-500">Omnicanalidad & Automatización</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            Todo lo que necesitas saber antes de modernizar los canales de tu empresa.
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(faq, i) in faqs" :key="i"
            class="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
              <i class="bi bi-question-circle-fill text-red-500"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="text-zinc-400 text-sm sm:text-base leading-relaxed pl-7 text-justify">
              {{ faq.a }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Final Monumental -->
    <section class="py-24 bg-black relative overflow-hidden">
      <div class="absolute inset-0 bg-radial from-red-950/20 via-black to-black pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="p-10 sm:p-16 rounded-[40px] bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border border-zinc-800 shadow-2xl shadow-red-950/30 space-y-8">
          
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/50 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-wider">
            Consultoría Técnica Sin Costo
          </div>

          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            ¿Listo para llevar la comunicación de tu empresa al <span class="text-red-500">siguiente nivel</span>?
          </h2>

          <p class="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            Hablemos sobre tus procesos actuales. Diseñaremos un plan a la medida con la arquitectura exacta para unificar tus chats y automatizar tus ventas.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a :href="whatsappConsultationUrl" target="_blank" rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-emerald-950/40 hover:scale-105">
              <i class="bi bi-whatsapp text-xl"></i>
              <span>Agendar por WhatsApp Directo</span>
            </a>
            <NuxtLink to="/#contact"
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-105">
              <span>Solicitar Cotización por Formulario</span>
              <i class="bi bi-arrow-right ml-2"></i>
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const whatsappConsultationUrl = 'https://wa.me/573138066800?text=Hola%20CODEVS%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Automatizaciones%20y%20el%20Sistema%20de%20Omnicanalidad%20para%20mi%20empresa.';

const techStack = [
  'WhatsApp Cloud API',
  'Meta Graph API Oficial',
  'Instagram Graph API',
  'Webhooks en Tiempo Real',
  'n8n Workflow Automation',
  'Python & FastAPI',
  'Node.js & TypeScript',
  'Redis Message Queues',
  'PostgreSQL Database',
  'OpenAI & Claude LLMs',
  'HubSpot CRM Sync',
  'Salesforce API',
  'Docker & Cloud Clusters'
];

const faqs = [
  {
    q: '¿Podemos conservar nuestro número de WhatsApp actual?',
    a: 'Sí, totalmente. Migramos tu número telefónico existente a la API Oficial de WhatsApp Cloud de Meta sin perder tu identidad de marca. A partir de esa migración, múltiples personas de tu equipo podrán responder desde computadores y móviles al mismo tiempo con ese único número oficial.'
  },
  {
    q: '¿Por qué contratar a CODEVS y no usar herramientas genéricas por suscripción mensual?',
    a: 'Las plataformas comerciales genéricas cobran costos exorbitantes por usuario adicional, tienen límites restrictivos de mensajes, guardan tus datos en silos cerrados y carecen de personalización técnica. En CODEVS somos ingenieros de software: diseñamos la arquitectura a la medida de tus procesos de negocio, conectamos directamente con tus bases de datos y CRMs existentes y tú mantienes el control absoluto de tus leads e infraestructura.'
  },
  {
    q: '¿Existe riesgo de que Meta bloquee o suspenda nuestro número?',
    a: 'No, porque trabajamos exclusivamente con la API Oficial de Meta Cloud y cumplimos con todas las directrices de verificación de empresa de WhatsApp. A diferencia de las extensiones de navegador o emuladores piratas que provocan baneos inmediatos, nuestra infraestructura es 100% legal, segura y auditada.'
  },
  {
    q: '¿El chatbot con Inteligencia Artificial puede equivocarse al responder?',
    a: 'Nuestros agentes de IA operan bajo técnicas estrictas de RAG (Generación Aumentada por Recuperación) y Prompt Engineering avanzado, restringiendo sus respuestas únicamente a los datos reales de tu catálogo, precios y políticas. Además, en caso de dudas complejas o requerimiento explícito del cliente, el bot transfiere el control de forma inmediata y transparente a un asesor humano.'
  },
  {
    q: '¿Se puede integrar con nuestro software contable o CRM propio?',
    a: 'Sí. Desarrollamos integraciones personalizadas vía REST API, GraphQL y Webhooks para sincronizar chats, pedidos y contactos con cualquier sistema: HubSpot, Salesforce, Zoho, Holded, Siigo, Alegra, SAP o bases de datos a la medida.'
  }
];

useHead({
  title: 'Expertos en Automatizaciones y Sistema de Omnicanalidad | CODEVS',
  meta: [
    { 
      name: 'description', 
      content: 'Somos expertos en ingeniería de automatizaciones y sistemas de omnicanalidad. Centralizamos WhatsApp Business API, Instagram Direct, Web Chat y CRM en una sola plataforma inteligente con bots de IA para multiplicar tus ventas.' 
    },
    { 
      name: 'keywords', 
      content: 'automatizaciones, sistema de omnicanalidad, expertos en automatizacion, whatsapp business api, integracion crm whatsapp, chatbot ia para empresas, n8n automatizaciones, colombia, codevs' 
    },
    { property: 'og:title', content: 'Expertos en Automatizaciones y Sistema de Omnicanalidad | CODEVS' },
    { property: 'og:description', content: 'Centraliza tus canales de WhatsApp, Instagram y Web en una sola bandeja inteligente con flujos automatizados de IA y CRM.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' },
    { property: 'og:url', content: 'https://www.codevs.dev/servicios/automatizaciones-omnicanalidad' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Expertos en Automatizaciones y Sistema de Omnicanalidad | CODEVS' },
    { name: 'twitter:description', content: 'Centraliza tus canales de WhatsApp, Instagram y Web en una sola bandeja inteligente con flujos automatizados de IA y CRM.' },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.codevs.dev/servicios/automatizaciones-omnicanalidad' }
  ]
});

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Automatizaciones & Sistema de Omnicanalidad',
  'serviceType': 'Automatización de Procesos Empresariales & Plataforma Omnicanal',
  'description': 'Servicio de ingeniería especializado en centralización de canales de mensajería (WhatsApp Cloud API, Instagram, Web) y automatización de flujos con bots inteligentes e integración a CRM.',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'CODEVS',
    'url': 'https://www.codevs.dev',
    'telephone': '+57 3138066800',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cl. 8b #15-125',
      'addressLocality': 'San Juan de Pasto',
      'addressRegion': 'Nariño',
      'postalCode': '520002',
      'addressCountry': 'CO'
    }
  },
  'areaServed': [
    { '@type': 'Country', 'name': 'Colombia' },
    { '@type': 'AdministrativeArea', 'name': 'Latinoamérica' }
  ]
}));
</script>

<style scoped>
section {
  background-color: #000000;
}
</style>
