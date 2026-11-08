import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    })

    // Sincronizar Lenis con GSAP ScrollTrigger sin lag
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Event delegation ligero para enlaces de ancla (#)
    document.addEventListener('click', (e) => {
      const targetEl = (e.target as HTMLElement)?.closest?.('a[href^="#"]')
      if (!targetEl) return
      const href = targetEl.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const dest = document.querySelector(href)
        if (dest) {
          e.preventDefault()
          lenis.scrollTo(dest as HTMLElement, { offset: -80 })
        }
      }
    })

    return {
      provide: {
        lenis
      }
    }
  }
})
