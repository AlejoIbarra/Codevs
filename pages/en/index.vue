<template>
  <div class="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">

    <!-- Hero Section -->
    <section class="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden border-b border-zinc-900">
      <!-- Glow ambient lights -->
      <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[170px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="max-w-4xl mx-auto text-center space-y-8">
          
          <!-- US Nearshore Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-red-500/40 backdrop-blur-xl shadow-xl shadow-red-950/30">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Nearshore Engineering Partner for US Companies
            </span>
          </div>

          <!-- Hero Headline -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02]">
            Silicon Valley Caliber.
            <span class="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
              Same Time Zone. Zero Friction.
            </span>
          </h1>

          <!-- Hero Subtitle -->
          <p class="text-zinc-300 text-lg sm:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
            CODEVS builds mission-critical custom web platforms, cloud software, and AI-driven workflow automations for funded US startups, scaling enterprises, and top-tier design agencies.
          </p>

          <!-- Core US Value Highlights -->
          <div class="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm text-zinc-400 font-medium">
            <div class="flex items-center gap-2">
              <i class="bi bi-clock-fill text-red-500"></i>
              <span>EST & CST Time Zone Alignment</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="bi bi-shield-check text-red-500"></i>
              <span>100% IP Ownership & US Mutual NDAs</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="bi bi-lightning-charge-fill text-red-500"></i>
              <span>Senior Full-Stack Squads in 48h</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-red-950/50 hover:scale-105">
              <i class="bi bi-calendar-check"></i>
              <span>Schedule a 15-Min Discovery Call</span>
            </a>
            <a href="#quote-form"
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-400 transition-all duration-300 font-semibold text-base bg-zinc-900/60 backdrop-blur-sm">
              <span>Get an Instant Quote</span>
              <i class="bi bi-arrow-down ml-2"></i>
            </a>
          </div>

        </div>

        <!-- Featured Tech Stack Bar -->
        <div class="mt-20 pt-12 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-8 opacity-75">
          <span class="text-xs uppercase tracking-widest text-zinc-500 font-bold">Trusted Core Tech:</span>
          <span class="text-sm font-semibold text-zinc-300">Nuxt 3 & Vue.js</span>
          <span class="text-zinc-600">•</span>
          <span class="text-sm font-semibold text-zinc-300">Java & Spring Boot</span>
          <span class="text-zinc-600">•</span>
          <span class="text-sm font-semibold text-zinc-300">Python & FastAPI</span>
          <span class="text-zinc-600">•</span>
          <span class="text-sm font-semibold text-zinc-300">Meta Cloud API</span>
          <span class="text-zinc-600">•</span>
          <span class="text-sm font-semibold text-zinc-300">PostgreSQL</span>
          <span class="text-zinc-600">•</span>
          <span class="text-sm font-semibold text-zinc-300">AWS & Docker</span>
        </div>

      </div>
    </section>

    <!-- Why US Companies Choose CODEVS Nearshore -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-bold uppercase tracking-wider text-red-400">
            The Nearshore Advantage
          </div>
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for US Engineering Standards
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            Say goodbye to 12-hour timezone delays with offshore teams and exorbitant $180k+ domestic developer salaries. We give you senior engineering power with zero overhead.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-sun"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Real-Time Daily Overlap</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              We operate in GMT-5 (identical to New York EST and matching Central CST). Daily standups, instant Slack messaging, and seamless PR reviews occur in real time with your product leads.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-file-earmark-lock2"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Air-Tight IP & Contract Protection</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Every engagement is backed by standard US Mutual Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), and complete intellectual property assignment upon milestone payment.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-2xl text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <i class="bi bi-speedometer2"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">60 FPS Speed & Clean Code</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              We don't do pre-made bloated templates. Every line of code is custom, tested, documented, and built to achieve perfect 100/100 Core Web Vitals and lightning-fast API responses.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- Engagement Models for US Clients -->
    <section class="py-24 border-b border-zinc-900 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Flexible Engagement Models
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            Choose how you want to work with our senior engineering talent.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Model 1: Dedicated Squad -->
          <div class="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 relative flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 inline-block">
                Most Popular for Startups
              </span>
              <h3 class="text-2xl font-bold text-white">Dedicated Tech Squads</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Full-stack engineers, architects, and QA specialists acting as a direct extension of your internal engineering department.
              </p>
              <ul class="space-y-2.5 text-xs text-zinc-300 pt-3">
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Sprints managed via Jira, Linear, or GitHub</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Direct Slack / Discord channel access</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Full time 160h/month per engineer</li>
              </ul>
            </div>
            <div class="pt-8">
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center py-3.5 bg-zinc-800 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition-all duration-300">
                Inquire for Squad
              </a>
            </div>
          </div>

          <!-- Model 2: End-to-End Product -->
          <div class="p-8 rounded-3xl bg-zinc-900/80 border-2 border-red-500/60 shadow-2xl shadow-red-950/30 transition-all duration-300 relative flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold text-white uppercase tracking-widest px-3 py-1 rounded-full bg-red-600 inline-block">
                Fixed Scope & Timeline
              </span>
              <h3 class="text-2xl font-bold text-white">Full Product Delivery</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                From UX/UI wireframing to production deployment. Ideal for new SaaS products, e-commerce re-architectures, and mobile apps.
              </p>
              <ul class="space-y-2.5 text-xs text-zinc-300 pt-3">
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Fixed milestone-based deliverables</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Architecture design & technical spec included</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> 30-day post-launch warranty & support</li>
              </ul>
            </div>
            <div class="pt-8">
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-all duration-300">
                Request Fixed Quote
              </a>
            </div>
          </div>

          <!-- Model 3: Agency White-Label -->
          <div class="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 relative flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold text-zinc-400 uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 inline-block">
                For US Digital Agencies
              </span>
              <h3 class="text-2xl font-bold text-white">White-Label Partner</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                We handle the complex backend, frontend, and API integrations behind the scenes while your agency maintains the client relationship.
              </p>
              <ul class="space-y-2.5 text-xs text-zinc-300 pt-3">
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Strict white-label non-disclosure</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Elastic scaling as your client roster grows</li>
                <li class="flex items-center gap-2"><i class="bi bi-check2 text-red-500 font-bold"></i> Competitive agency partner hourly rates</li>
              </ul>
            </div>
            <div class="pt-8">
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center py-3.5 bg-zinc-800 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition-all duration-300">
                Partner with Us
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Visual Showcase of Recent Engineering Work -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Proven Engineering in Action
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            High-concurrency systems, rich user experiences, and automated workflows.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-2xl group">
            <img src="/assets/img/services/omnichannel-dashboard.jpg" alt="Enterprise Omnichannel Dashboard" class="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="p-6 sm:p-8 space-y-3">
              <span class="text-xs font-bold text-red-500 uppercase tracking-wider">Enterprise Architecture</span>
              <h3 class="text-2xl font-bold text-white">Unified Omnichannel & Workflow Automation</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Centralized messaging pipeline integrating WhatsApp Cloud API, Instagram, and web chat into a resilient multi-agent dashboard with automated CRM synchronization.
              </p>
            </div>
          </div>

          <div class="rounded-3xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-2xl group">
            <img src="/assets/img/services/automation-workflow.jpg" alt="Automated Workflow Engine" class="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="p-6 sm:p-8 space-y-3">
              <span class="text-xs font-bold text-red-500 uppercase tracking-wider">Cloud Infrastructure</span>
              <h3 class="text-2xl font-bold text-white">Autonomous Event-Driven Workflows</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                High-throughput webhook orchestration using Python, Redis message queues, and n8n nodes for instantaneous data routing and automated payment reconciliations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Direct Quote / Lead Capture Form -->
    <section id="quote-form" class="py-24 border-b border-zinc-900 bg-black relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="p-8 sm:p-14 rounded-[36px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl shadow-red-950/20 space-y-8">
          
          <div class="text-center space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-red-500">Fast Response Guarantee</span>
            <h2 class="text-3xl sm:text-4xl font-black text-white">Request a Confidential Technical Proposal</h2>
            <p class="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Tell us about your project or team requirements. A Senior Technical Director will respond with an architecture estimate within 24 business hours.
            </p>
          </div>

          <form @submit.prevent="submitInquiry" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Your Name *</label>
                <input v-model="formData.name" type="text" required placeholder="John Doe"
                  class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600 transition" />
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Work Email *</label>
                <input v-model="formData.email" type="email" required placeholder="john@company.com"
                  class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600 transition" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Company Name / URL</label>
                <input v-model="formData.company" type="text" placeholder="Acme Inc. / https://acme.com"
                  class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600 transition" />
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Estimated Budget (USD) *</label>
                <select v-model="formData.budget" required
                  class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600 transition">
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
              <textarea v-model="formData.message" rows="4" required placeholder="Describe your technical requirements, current stack, or team hiring needs..."
                class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-600 transition"></textarea>
            </div>

            <div v-if="submitSuccess" class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm text-center">
              Thank you! Your inquiry has been routed to our Lead Solutions Architect. We'll be in touch within 24 hours.
            </div>

            <button type="submit"
              class="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-base transition-all duration-300 shadow-xl shadow-red-950/40 hover:scale-[1.01]">
              Submit Inquiry & Request NDA
            </button>
          </form>

          <div class="text-center pt-2">
            <span class="text-xs text-zinc-500">
              Prefer instant chat? Connect directly with our Managing Director via 
              <a :href="whatsappUSUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline font-semibold">WhatsApp Business</a> or email 
              <a href="mailto:comercial@codevs.dev" class="text-red-400 hover:underline font-semibold">comercial@codevs.dev</a>
            </span>
          </div>

        </div>

      </div>
    </section>

    <!-- FAQ for US Clients -->
    <section class="py-24 border-b border-zinc-900 bg-zinc-950/50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions for US Partners
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg">
            Everything you need to know about working with CODEVS as your nearshore engineering partner.
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(faq, i) in usFaqs" :key="i"
            class="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
              <i class="bi bi-question-circle-fill text-red-500"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="text-zinc-400 text-sm sm:text-base leading-relaxed pl-7">
              {{ faq.a }}
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const whatsappUSUrl = 'https://wa.me/573138066800?text=Hello%20CODEVS%2C%20I%20am%20reaching%20out%20from%20the%20US%20regarding%20a%20software%20engineering%20project.';

const formData = reactive({
  name: '',
  email: '',
  company: '',
  budget: '',
  message: ''
});

const submitSuccess = ref(false);

const submitInquiry = () => {
  const mailtoUrl = `mailto:comercial@codevs.dev?subject=US Inquiry: ${formData.company || formData.name} (${formData.budget})&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACompany: ${encodeURIComponent(formData.company)}%0ABudget: ${encodeURIComponent(formData.budget)}%0A%0AProject Details:%0A${encodeURIComponent(formData.message)}`;
  window.location.href = mailtoUrl;
  submitSuccess.value = true;
};

const usFaqs = [
  {
    q: 'How does communication and time zone overlap work?',
    a: 'We operate in Colombia (GMT-5), which precisely matches Eastern Standard Time (EST) for half the year and Central Time (CST) for the other half. We conduct daily video standups via Zoom/Google Meet, communicate continuously in Slack, and manage all task boards in Jira, Linear, or GitHub.'
  },
  {
    q: 'Who owns the intellectual property and code repository?',
    a: 'You do—100%. All contracts include strict Intellectual Property (IP) assignment clauses. Every commit, repository, asset, and deployment created during the engagement belongs entirely to your company upon invoice settlement.'
  },
  {
    q: 'How do invoicing and payments work for US companies?',
    a: 'We make cross-border transactions seamless. US companies can pay via standard ACH bank transfer, international Fedwire, or corporate credit cards through Stripe in USD. We provide formal corporate invoices and sign W-8BEN-E tax forms.'
  },
  {
    q: 'Can we start with a small pilot project to test the team?',
    a: 'Absolutely. Many of our long-term US partners start with a focused 2-week Discovery or MVP Sprint ($5k - $10k USD). This allows you to evaluate our code quality, communication speed, and architectural rigor before scaling up to a larger dedicated squad.'
  }
];

useHead({
  title: 'Nearshore Software Development for US Companies | CODEVS',
  meta: [
    { 
      name: 'description', 
      content: 'Silicon Valley caliber engineering with same time zone alignment (EST/CST). CODEVS builds custom web applications, cloud platforms, and AI automations for US startups, scaleups, and agencies.' 
    },
    { 
      name: 'keywords', 
      content: 'nearshore software development, hire dedicated developers colombia, nearshore engineering squad, custom software development us, nuxt vue developers for hire, spring boot nearshore development' 
    },
    { property: 'og:title', content: 'Nearshore Software Development for US Companies | CODEVS' },
    { property: 'og:description', content: 'High-performance dedicated software engineering squads in your time zone. Full IP ownership and seamless US collaboration.' },
    { property: 'og:image', content: 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg' },
    { property: 'og:url', content: 'https://www.codevs.dev/en' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nearshore Software Development for US Companies | CODEVS' },
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
  'image': 'https://www.codevs.dev/assets/img/services/omnichannel-dashboard.jpg',
  'description': 'Senior Nearshore Software Development and Dedicated Tech Squads for US Companies and Funded Startups.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'CO',
    'addressLocality': 'San Juan de Pasto',
    'addressRegion': 'Nariño'
  },
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
section {
  background-color: #000000;
}
</style>
