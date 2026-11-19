<template>
  <div class="min-h-screen bg-black text-white selection:bg-[#E7000B] selection:text-white">

    <!-- 1. Hero Banner Regional Especializado -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
      <div class="absolute top-0 left-1/3 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-red-500 transition-colors">Inicio</NuxtLink>
          <i class="bi bi-chevron-right text-xs"></i>
          <NuxtLink to="/servicios/desarrollo-software" class="hover:text-red-500 transition-colors">Desarrollo de Software</NuxtLink>
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

            <!-- Puntos Clave de Confianza Regional -->
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
              <NuxtLink to="/servicios/desarrollo-software#cobertura"
                class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-sm sm:text-base bg-zinc-900/60 backdrop-blur-sm">
                Otras Regiones
              </NuxtLink>
            </div>
          </div>

          <!-- Columna Consola Técnica y Garantías -->
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
                  <span class="text-zinc-300">Región de Cobertura:</span>
                  <span class="text-white font-bold">{{ regionData.regionName }}</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Entrega de Prototipo:</span>
                  <span class="text-amber-400 font-bold">7 Días Hábiles</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Propiedad de Código:</span>
                  <span class="text-emerald-400 font-bold">100% Propietario</span>
                </div>
                <div class="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                  <span class="text-zinc-300">Modalidad de Atención:</span>
                  <span class="text-blue-400 font-bold">{{ regionData.supportMode }}</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-zinc-800/80">
                <p class="text-xs text-zinc-400 leading-relaxed">
                  <strong class="text-white">Garantía CODEVS:</strong> En {{ regionData.regionName }}, impulsamos tu competitividad con software hecho a tu medida, reduciendo costos operativos manuales y eliminando las mensualidades por usuario de software genérico.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Sectores Productivos Clave en la Región -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Soluciones para Sectores Clave en <span class="text-red-500">{{ regionData.regionName }}</span>
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Entendemos la dinámica económica local y desarrollamos arquitecturas adaptadas a los retos de las empresas de la región.
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

    <!-- 3. Los 4 Pilares del Desarrollo de Software CODEVS -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Por Qué Elegir a <span class="text-red-500">CODEVS</span> en {{ regionData.regionName }}
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg mt-4">
            Combinamos excelencia académica con velocidad comercial para entregar sistemas que duran décadas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <i class="bi bi-mortarboard text-2xl text-red-500 mb-3 block"></i>
            <h3 class="text-lg font-bold text-white mb-2">Ingenieros Docentes</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Arquitectos que enseñan bases de datos y algoritmos en universidades, garantizando modelos robustos.</p>
          </div>
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <i class="bi bi-clock-history text-2xl text-red-500 mb-3 block"></i>
            <h3 class="text-lg font-bold text-white mb-2">Prototipo en 7 Días</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Valida pantallas, navegación y lógica en una semana antes de continuar con la programación.</p>
          </div>
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <i class="bi bi-shield-check text-2xl text-red-500 mb-3 block"></i>
            <h3 class="text-lg font-bold text-white mb-2">Código 100% Tuyo</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Sin suscripciones mensuales por usuario ni candados de proveedor. Tu software es tu activo.</p>
          </div>
          <div class="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <i class="bi bi-cpu text-2xl text-red-500 mb-3 block"></i>
            <h3 class="text-lg font-bold text-white mb-2">Stack de Alto Nivel</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Java Spring Boot, Nuxt 3, PostgreSQL, Docker y despliegue cloud en AWS de alta velocidad.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. Navegación Cruzada a Otras Regiones y Departamentos -->
    <section class="py-20 border-b border-zinc-900 bg-zinc-950/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 class="text-2xl sm:text-4xl font-black text-white">Otras Ciudades &amp; Departamentos</h2>
            <p class="text-zinc-400 text-sm sm:text-base mt-2">Explora nuestros servicios de software en otros puntos de Colombia y el exterior.</p>
          </div>
          <NuxtLink to="/servicios/desarrollo-software" class="text-red-400 hover:underline text-sm font-semibold mt-4 md:mt-0">
            Ver página principal de Desarrollo de Software →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <NuxtLink v-for="(item, key) in otherRegions" :key="key"
            :to="`/servicios/desarrollo-software/${key}`"
            class="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all text-center">
            {{ item.name }}
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- 5. Preguntas Frecuentes Regionales -->
    <section class="py-20 border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-black text-white">Preguntas Frecuentes en {{ regionData.regionName }}</h2>
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

    <!-- 6. CTA Final -->
    <section class="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Inicia tu Proyecto de Software en <span class="text-red-500">{{ regionData.regionName }}</span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
          Habla directamente con un ingeniero de CODEVS. Evaluamos tus procesos y en 48 horas tienes tu propuesta técnica.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-9 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-[1.02]">
            <i class="bi bi-whatsapp text-lg"></i>
            <span>{{ regionData.ctaButtonText }}</span>
          </a>
          <NuxtLink to="/#contact"
            class="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
            Formulario de Contacto
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
    regionName: 'Pasto, Nariño',
    breadcrumbName: 'Pasto',
    badge: 'Sede Principal en San Juan de Pasto • #1 en Google',
    h1Prefix: 'Desarrollo de Software a la Medida en',
    h1Highlight: 'Pasto, Nariño.',
    heroDescription: 'La empresa de software de referencia en San Juan de Pasto. Creamos sistemas ERP, plataformas web, CRMs y bases de datos relacionales para empresas nariñenses. Diseñado por ingenieros senior y profesores de programación con atención presencial.',
    ctaButtonText: 'Agendar Cita en Pasto / WhatsApp',
    cardTag: 'Sede Pasto • Nariño',
    supportMode: 'Presencial & Virtual',
    keyPoints: [
      'Sede física y atención presencial en Pasto',
      'Ingenieros profesores de universidades locales',
      'Casos de éxito probados como Sin Huellas LegalTech',
      'Primer prototipo funcional en solo 7 días'
    ],
    sectors: [
      { icon: 'bi bi-briefcase', title: 'Firmas de Abogados & LegalTech', desc: 'Sistemas judiciales, cálculo de indemnizaciones y automatización de radicación legal en Pasto y Colombia.' },
      { icon: 'bi bi-hospital', title: 'Clínicas & Sector Salud', desc: 'Historias clínicas electrónicas, agenda médica y facturación con validación de normatividad RIPS.' },
      { icon: 'bi bi-truck', title: 'Comercio Fronterizo & Distribución', desc: 'Inventario multisede, facturación DIAN y logística para empresas que operan con Ipiales y Ecuador.' }
    ],
    faqs: [
      { q: '¿Puedo tener reuniones presenciales con el equipo en Pasto?', a: 'Sí. Nuestra sede principal está ubicada en Pasto, lo que te permite reunirte directamente con los ingenieros y directores del proyecto para levantamiento de requisitos o capacitaciones.' },
      { q: '¿Por qué no contratar freelancers en Pasto?', a: 'Porque con CODEVS cuentas con un contrato formal de empresa, NIT, factura electrónica, código 100% propietario y el respaldo de profesores de bases de datos que garantizan que tu software nunca colapse.' }
    ],
    metaTitle: 'Desarrollo de Software en Pasto, Nariño | Empresa #1 en Tecnología CODEVS',
    metaDesc: 'Empresa líder en desarrollo de software a la medida en Pasto, Nariño. ERPs, bases de datos PostgreSQL y plataformas cloud con atención presencial. Prototipo en 7 días.',
    keywords: 'desarrollo de software pasto, empresa de software pasto, software a la medida pasto nariño, programadores en pasto, ingenieros de software pasto, erp pasto, codevs pasto',
    geoLat: 1.2136,
    geoLong: -77.2811,
    postalCode: '520001'
  },
  narino: {
    regionName: 'Departamento de Nariño',
    breadcrumbName: 'Nariño',
    badge: 'Cobertura Departamental • Nariño',
    h1Prefix: 'Desarrollo de Software Empresarial en',
    h1Highlight: 'Nariño (Ipiales, Tumaco & Más).',
    heroDescription: 'Soluciones tecnológicas robustas para la agroindustria, el comercio de frontera en Ipiales, la logística portuaria en Tumaco y las empresas de los 64 municipios de Nariño.',
    ctaButtonText: 'Consultar Proyecto en Nariño',
    cardTag: 'Nariño • Cobertura Total',
    supportMode: 'Departamental Presencial/Remoto',
    keyPoints: [
      'Sistemas para comercio de frontera en Ipiales',
      'Trazabilidad para café especial del norte de Nariño',
      'Facturación electrónica DIAN 100% compatible',
      'Entrega de prototipo en 7 días hábiles'
    ],
    sectors: [
      { icon: 'bi bi-globe-americas', title: 'Comercio Internacional Ipiales - Rumichaca', desc: 'Control de aduanas, cambio de divisas, bodegas de acopio y facturación binacional.' },
      { icon: 'bi bi-flower1', title: 'Agroindustria & Café de Altura', desc: 'Software de pesaje, liquidación a caficultores y trazabilidad de lotes para exportación.' },
      { icon: 'bi bi-water', title: 'Logística Portuaria & Pesquera Tumaco', desc: 'Control de despachos marítimos, cadena de frío y comercialización nacional.' }
    ],
    faqs: [
      { q: '¿Tienen cobertura en Ipiales y otros municipios de Nariño?', a: 'Sí. Atendemos a empresas en Ipiales, Tumaco, La Unión, Túquerres, Samaniego y todo el departamento mediante soporte remoto continuo y visitas técnicas presenciales programadas.' }
    ],
    metaTitle: 'Desarrollo de Software en Nariño (Ipiales, Tumaco) | CODEVS',
    metaDesc: 'Software a la medida para empresas de Nariño: Ipiales, Tumaco, La Unión. Facturación DIAN, logística fronteriza y agroindustria por ingenieros expertos.',
    keywords: 'desarrollo de software narino, software ipiales, empresa de sistemas tumaco, software agroindustria narino, programadores narino, codevs',
    geoLat: 1.2874,
    geoLong: -77.3574,
    postalCode: '520002'
  },
  bogota: {
    regionName: 'Bogotá D.C.',
    breadcrumbName: 'Bogotá',
    badge: 'Distrito Capital • Alto Rendimiento Corporativo',
    h1Prefix: 'Desarrollo de Software a la Medida en',
    h1Highlight: 'Bogotá D.C. & Cundinamarca.',
    heroDescription: 'Ingeniería de software de alta exigencia para corporaciones, consultoras, firmas financieras y empresas de Bogotá. Microservicios, arquitecturas cloud seguras y procesamiento masivo con Spring Boot y PostgreSQL.',
    ctaButtonText: 'Cotizar para Bogotá / WhatsApp',
    cardTag: 'Bogotá • Enterprise Core',
    supportMode: 'Soporte Virtual & Remoto Inmediato',
    keyPoints: [
      'Arquitecturas de microservicios de alto tráfico',
      'Cumplimiento estricto de seguridad de la información',
      'Ahorro del 40% vs agencias tradicionales de Bogotá',
      'Entrega de código 100% propietario'
    ],
    sectors: [
      { icon: 'bi bi-buildings', title: 'Corporaciones & Servicios Financieros', desc: 'Automatización de flujos de auditoría, conciliación bancaria y microservicios de alta seguridad.' },
      { icon: 'bi bi-file-earmark-lock', title: 'Firmas de Consultoría & Legal', desc: 'Gestión documental inteligente, expedientes digitales y portales corporativos de clientes.' },
      { icon: 'bi bi-truck', title: 'Empresas de Logística & Distribución', desc: 'Seguimiento de flotas, control de entregas en tiempo real y despacho de órdenes masivas.' }
    ],
    faqs: [
      { q: '¿Cómo coordinan proyectos con clientes en Bogotá?', a: 'Realizamos sprints semanales con videollamadas por Google Meet, tablero Kanban en tiempo real y entornos de staging en la nube para que pruebes los avances continuamente.' }
    ],
    metaTitle: 'Desarrollo de Software en Bogotá D.C. | Ingeniería a la Medida CODEVS',
    metaDesc: 'Desarrollo de software corporativo en Bogotá D.C. Sistemas ERP, microservicios Java Spring Boot y bases de datos PostgreSQL de alto rendimiento.',
    keywords: 'desarrollo de software bogota, empresa de software bogota, ingenieros de software bogota, erp a la medida bogota, microservicios bogota, codevs',
    geoLat: 4.7110,
    geoLong: -74.0721,
    postalCode: '110111'
  },
  medellin: {
    regionName: 'Medellín & Antioquia',
    breadcrumbName: 'Medellín',
    badge: 'Hub de Innovación • Antioquia',
    h1Prefix: 'Desarrollo de Software Ágil en',
    h1Highlight: 'Medellín & Valle de Aburrá.',
    heroDescription: 'Aceleramos startups, empresas de manufactura y compañías del ecosistema tecnológico paisa con software a medida, MVPs rápidos y plataformas cloud modernas a 60 FPS.',
    ctaButtonText: 'Cotizar en Medellín / WhatsApp',
    cardTag: 'Medellín • Agile & Cloud',
    supportMode: 'Remoto Ágil 24/7',
    keyPoints: [
      'Lanzamiento de MVPs en 4 a 8 semanas',
      'Arquitectura reactiva en Nuxt 3 & Vue 3',
      'Integraciones con pasarelas de pago y CRMs',
      '7 días para tu primer prototipo funcional'
    ],
    sectors: [
      { icon: 'bi bi-rocket-takeoff', title: 'Startups & Empresas Tech', desc: 'Construcción rápida de productos mínimos viables listos para levantar capital o traccionar ventas.' },
      { icon: 'bi bi-scissors', title: 'Sector Textil & Confección', desc: 'Control de órdenes de corte, maquila, insumos y catálogo B2B en tiempo real.' },
      { icon: 'bi bi-heart-pulse', title: 'Turismo Médico & Clínicas', desc: 'Gestión de pacientes internacionales, presupuestos multimoneda y reservas.' }
    ],
    faqs: [
      { q: '¿Ayudan a startups a desarrollar su MVP en Medellín?', a: 'Sí. Acompañamos a fundadores desde el diseño de base de datos hasta el despliegue con arquitectura que escala a millones de usuarios sin tener que reescribir el sistema.' }
    ],
    metaTitle: 'Desarrollo de Software en Medellín & Antioquia | Startups & ERP | CODEVS',
    metaDesc: 'Desarrollo de software a la medida en Medellín. MVPs para startups, ERPs para manufactura y plataformas web modernas con Nuxt 3 y Spring Boot.',
    keywords: 'desarrollo de software medellin, empresa de software medellin, startups medellin, desarrollo mvp medellin, programadores medellin, codevs',
    geoLat: 6.2442,
    geoLong: -75.5812,
    postalCode: '050001'
  },
  cali: {
    regionName: 'Cali & Valle del Cauca',
    breadcrumbName: 'Cali',
    badge: 'Valle del Cauca • Industria & Logística',
    h1Prefix: 'Desarrollo de Software Industrial en',
    h1Highlight: 'Cali & Valle del Cauca.',
    heroDescription: 'Digitalizamos la industria agropecuaria, química, farmacéutica y comercial del Valle del Cauca con sistemas que optimizan plantas de producción y despachos logísticos hacia Buenaventura.',
    ctaButtonText: 'Cotizar en Cali / WhatsApp',
    cardTag: 'Cali • Industrial & Logistics',
    supportMode: 'Remoto Especializado',
    keyPoints: [
      'Control de procesos de planta y producción',
      'Integración con básculas y sensores industriales',
      'Compatibilidad total con facturación DIAN',
      'Bases de datos SQL blindadas contra pérdida de datos'
    ],
    sectors: [
      { icon: 'bi bi-cpu', title: 'Agroindustria & Ingenios', desc: 'Software de molienda, pesaje, control de cañaduzales y trazabilidad de productos derivados.' },
      { icon: 'bi bi-capsule', title: 'Industria Farmacéutica & Cosmética', desc: 'Control de lotes, fechas de vencimiento y cumplimiento de normas de calidad INVIMA.' },
      { icon: 'bi bi-truck-front', title: 'Corredor Portuario de Buenaventura', desc: 'Seguimiento de contenedores de importación/exportación y gestión aduanera.' }
    ],
    faqs: [
      { q: '¿El software se puede instalar en servidores propios de mi planta?', a: 'Sí. Implementamos en nubes públicas (AWS, GCP) o en infraestructura local on-premise mediante contenedores Docker según tus políticas de seguridad interna.' }
    ],
    metaTitle: 'Desarrollo de Software en Cali & Valle del Cauca | CODEVS',
    metaDesc: 'Software a la medida para empresas de Cali y Valle del Cauca. Soluciones para agroindustria, farmacéutica y logística portuaria hacia Buenaventura.',
    keywords: 'desarrollo de software cali, empresa de software cali, software agroindustria valle, sistemas erp cali, programadores cali, codevs',
    geoLat: 3.4516,
    geoLong: -76.5320,
    postalCode: '760001'
  },
  barranquilla: {
    regionName: 'Barranquilla & Región Caribe',
    breadcrumbName: 'Barranquilla',
    badge: 'Región Caribe • Puertos & Comercio Exterior',
    h1Prefix: 'Desarrollo de Software en',
    h1Highlight: 'Barranquilla & la Región Caribe.',
    heroDescription: 'Sistemas a la medida para empresas de comercio exterior, turismo, hotelería y logística portuaria en Barranquilla, Cartagena y Santa Marta.',
    ctaButtonText: 'Cotizar en Barranquilla / WhatsApp',
    cardTag: 'Barranquilla • Caribbean Hub',
    supportMode: 'Remoto Ágil Caribe',
    keyPoints: [
      'Plataformas multimoneda (COP / USD)',
      'Sistemas de reservas y liquidación automática',
      'Sincronización con WhatsApp para ventas 24/7',
      'Prototipo navegable en 7 días'
    ],
    sectors: [
      { icon: 'bi bi-anchor', title: 'Logística Portuaria & Aduanas', desc: 'Gestión de cargas, turnos de descargue en puerto y bodegaje temporal.' },
      { icon: 'bi bi-building', title: 'Hotelería & Turismo del Caribe', desc: 'Central de reservas directa sin pagar altas comisiones a OTAs intermediarias.' },
      { icon: 'bi bi-cart3', title: 'Comercio Mayorista & Retail', desc: 'Punto de venta integrado con almacenes en Barranquilla y ciudades de la costa.' }
    ],
    faqs: [
      { q: '¿Pueden conectar el software con pasarelas de pago internacionales?', a: 'Sí. Integramos pasarelas colombianas como Wompi o PayU y pasarelas internacionales como Stripe para cobros en dólares a clientes extranjeros.' }
    ],
    metaTitle: 'Desarrollo de Software en Barranquilla & Caribe | CODEVS',
    metaDesc: 'Empresa de desarrollo de software en Barranquilla, Cartagena y Santa Marta. Plataformas portuarias, hoteles y comercio exterior a la medida.',
    keywords: 'desarrollo de software barranquilla, software cartagena, programadores barranquilla, sistemas caribe, codevs barranquilla',
    geoLat: 10.9685,
    geoLong: -74.7813,
    postalCode: '080001'
  },
  bucaramanga: {
    regionName: 'Bucaramanga & Santander',
    breadcrumbName: 'Bucaramanga',
    badge: 'Santander • Salud, Manufactura & Servicios',
    h1Prefix: 'Desarrollo de Software a la Medida en',
    h1Highlight: 'Bucaramanga & Santander.',
    heroDescription: 'Tecnología robusta para el tejido empresarial santandereano: clúster de salud de alta complejidad, manufactura de calzado, agroindustria avícola y firmas de ingeniería.',
    ctaButtonText: 'Cotizar en Bucaramanga / WhatsApp',
    cardTag: 'Bucaramanga • Santander',
    supportMode: 'Soporte Virtual Ágil',
    keyPoints: [
      'Cumplimiento de estándares de salud y datos clínicos',
      'Control de producción para fábricas de confección y calzado',
      'Facturación electrónica DIAN nativa',
      'Código 100% propietario sin mensualidades abusivas'
    ],
    sectors: [
      { icon: 'bi bi-hospital', title: 'Clúster de Salud & Especialistas', desc: 'Plataformas clínicas, consentimientos digitales y agenda médica avanzada.' },
      { icon: 'bi bi-handbag', title: 'Fábricas de Calzado & Moda', desc: 'Control de tallaje, curvas de producción, insumos y catálogo B2B para mayoristas.' },
      { icon: 'bi bi-egg-fried', title: 'Sector Avícola & Agropecuario', desc: 'Trazabilidad de granjas, alimentación, costos por ave y control de despachos.' }
    ],
    faqs: [
      { q: '¿El software me ayuda a reemplazar hojas de cálculo de Excel?', a: 'Sí. Migramos tus tablas de Excel a una base de datos relacional PostgreSQL con permisos por usuario, auditoría de cambios y cero duplicidad de información.' }
    ],
    metaTitle: 'Desarrollo de Software en Bucaramanga & Santander | CODEVS',
    metaDesc: 'Desarrollo de software en Bucaramanga y Santander. Soluciones para clínicas, manufactura de calzado y sector avícola por ingenieros senior.',
    keywords: 'desarrollo de software bucaramanga, empresa de software santander, software calzado bucaramanga, programadores bucaramanga, codevs',
    geoLat: 7.1254,
    geoLong: -73.1198,
    postalCode: '680001'
  },
  'eje-cafetero': {
    regionName: 'Eje Cafetero (Pereira, Manizales, Armenia)',
    breadcrumbName: 'Eje Cafetero',
    badge: 'Triángulo del Café • Logística & Turismo',
    h1Prefix: 'Desarrollo de Software en el',
    h1Highlight: 'Eje Cafetero (Pereira, Manizales, Armenia).',
    heroDescription: 'Sistemas a la medida para empresas del Eje Cafetero: fincas turísticas, exportadores de café especial, parques logísticos y centros de distribución intermodal.',
    ctaButtonText: 'Cotizar en Eje Cafetero / WhatsApp',
    cardTag: 'Eje Cafetero • Regional',
    supportMode: 'Remoto con Visitas Programadas',
    keyPoints: [
      'Control de reservas turísticas y experiencias cafeteras',
      'Trazabilidad de café pergamino y exportación',
      'Sistemas de inventario multisede Pereira - Manizales - Armenia',
      'Entrega de prototipo en 7 días'
    ],
    sectors: [
      { icon: 'bi bi-cup-hot', title: 'Café Especial & Exportación', desc: 'Control de micropartidas, catación, compras a productores y certificaciones de origen.' },
      { icon: 'bi bi-tree', title: 'Turismo Rural & Hotelería Boutique', desc: 'Motor de reservas sin comisiones abusivas, check-in digital y venta de actividades.' },
      { icon: 'bi bi-boxes', title: 'Hubs Logísticos & Distribución', desc: 'Gestión de cross-docking en el centro del triángulo de oro de Colombia.' }
    ],
    faqs: [
      { q: '¿Puedo sincronizar mi software entre sedes de Pereira y Manizales?', a: 'Sí. Diseñamos plataformas 100% cloud accesibles desde cualquier navegador o dispositivo con actualización de datos en milisegundos.' }
    ],
    metaTitle: 'Desarrollo de Software en el Eje Cafetero (Pereira, Manizales) | CODEVS',
    metaDesc: 'Desarrollo de software a la medida en Pereira, Manizales y Armenia. Soluciones para café especial, turismo y logística por CODEVS.',
    keywords: 'desarrollo de software eje cafetero, software pereira, software manizales, software armenia, programadores eje cafetero, codevs',
    geoLat: 4.8133,
    geoLong: -75.6961,
    postalCode: '660001'
  },
  colombia: {
    regionName: 'Colombia (Nacional)',
    breadcrumbName: 'Colombia',
    badge: 'Cobertura Nacional en los 32 Departamentos',
    h1Prefix: 'Empresa de Desarrollo de Software a la Medida en',
    h1Highlight: 'Colombia • CODEVS.',
    heroDescription: 'Ingeniería de software de primer nivel para empresas de todo el territorio colombiano. Cumplimiento legal DIAN, pasarelas de pago locales, bases de datos PostgreSQL y código 100% propietario sin mensualidades por usuario.',
    ctaButtonText: 'Cotizar para Colombia / WhatsApp',
    cardTag: 'Colombia • 32 Departamentos',
    supportMode: 'Atención Nacional 100% Cloud',
    keyPoints: [
      'Facturación Electrónica DIAN y Nómina oficial',
      'Integración con PSE, Wompi, PayU y MercadoPago',
      'Cumplimiento Ley 1581 de Protección de Datos (Habeas Data)',
      'Primer prototipo en solo 7 días hábiles'
    ],
    sectors: [
      { icon: 'bi bi-receipt', title: 'Cumplimiento Tributario DIAN', desc: 'Software validado con la normatividad de la Dirección de Impuestos y Aduanas Nacionales de Colombia.' },
      { icon: 'bi bi-shield-lock', title: 'Seguridad Bancaria & Habeas Data', desc: 'Cifrado de punta a punta conforme a los requerimientos de la Superintendencia de Industria y Comercio.' },
      { icon: 'bi bi-credit-card', title: 'Ecosistema Financiero Nacional', desc: 'Cobros automáticos por PSE, transferencias interbancarias y corresponsales bancarios.' }
    ],
    faqs: [
      { q: '¿Cuáles son las formas de pago y contrato en Colombia?', a: 'Emitimos factura electrónica legal con NIT, contrato comercial con hitos de entrega transparentes y pólizas de cumplimiento cuando el cliente lo requiere.' }
    ],
    metaTitle: 'Empresa de Desarrollo de Software a la Medida en Colombia | CODEVS #1',
    metaDesc: 'Empresa #1 en desarrollo de software a la medida en Colombia. Sistemas ERP, CRMs, PostgreSQL y cloud. Prototipo en 7 días y código 100% propietario.',
    keywords: 'desarrollo de software colombia, empresa de software colombia, software a la medida colombia, ingenieros de software colombia, desarrollo erp colombia, codevs',
    geoLat: 4.5709,
    geoLong: -74.2973,
    postalCode: '110001'
  },
  'estados-unidos': {
    regionName: 'Estados Unidos & Nearshore',
    breadcrumbName: 'USA / Nearshore',
    badge: 'Nearshore Software Development • US Clients',
    h1Prefix: 'Nearshore Software Engineering for',
    h1Highlight: 'USA Companies & Global Startups.',
    heroDescription: 'Proporcionamos ingenieros de software senior y squads dedicados para empresas de Estados Unidos. Alineación con zonas horarias EST/CST, comunicación bilingüe fluida y una reducción del 60% en costos de desarrollo con estándares de Silicon Valley.',
    ctaButtonText: 'Schedule Nearshore Discovery Call',
    cardTag: 'USA • Nearshore Squads',
    supportMode: 'EST / CST Time Zone Alignment',
    keyPoints: [
      'Same time-zone collaboration (EST / CST / PST)',
      'Fluent English bilingual senior engineers',
      '60% cost reduction vs US domestic developer rates',
      'Working functional prototype delivered in 7 business days'
    ],
    sectors: [
      { icon: 'bi bi-laptop', title: 'US SaaS & Tech Startups', desc: 'Full-stack engineering with Vue/Nuxt, Spring Boot, Python, and scalable cloud architectures on AWS.' },
      { icon: 'bi bi-currency-dollar', title: 'Fintech & Multi-Currency Platforms', desc: 'Secure APIs, Stripe payment orchestration, automated reconciliation, and bank-grade data compliance.' },
      { icon: 'bi bi-graph-up-arrow', title: 'Enterprise Digital Transformation', desc: 'Modernizing legacy database schemas into PostgreSQL and high-performance microservices.' }
    ],
    faqs: [
      { q: 'How does the nearshore time zone alignment work?', a: 'Our engineers operate in UTC-5 (equivalent to US Eastern Time during Standard Time and Central Time during Daylight Saving Time), ensuring 100% overlap with your US team.' },
      { q: 'Are your engineers senior level?', a: 'Yes. Our core team consists of university computer science professors and senior software architects with deep expertise in databases and scalable cloud systems.' }
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
  const text = encodeURIComponent(`Hola CODEVS, me interesa cotizar desarrollo de software a la medida para mi empresa en ${regionData.value.regionName}.`);
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
    { property: 'og:url', content: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: regionData.value.metaTitle },
    { name: 'twitter:description', content: regionData.value.metaDesc },
    { name: 'twitter:image', content: 'https://www.codevs.dev/assets/img/services/2.png' }
  ],
  link: [
    { rel: 'canonical', href: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'es', href: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'en', href: `https://www.codevs.dev/en/servicios/desarrollo-software/${currentRegionKey.value}` },
    { rel: 'alternate', hreflang: 'x-default', href: `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}` }
  ]
}));

useJsonld(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `CODEVS - Desarrollo de Software en ${regionData.value.regionName}`,
    'image': 'https://www.codevs.dev/img/codevs.png',
    '@id': `https://www.codevs.dev/#localbusiness-${currentRegionKey.value}`,
    'url': `https://www.codevs.dev/servicios/desarrollo-software/${currentRegionKey.value}`,
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
    'name': `Desarrollo de Software a la Medida en ${regionData.value.regionName}`,
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
