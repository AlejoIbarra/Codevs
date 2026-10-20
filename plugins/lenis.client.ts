import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    // Sincronizar Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Handle anchor links for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#') && href.length > 1) {
          const target = document.querySelector(href)
          if (target) {
            e.preventDefault()
            lenis.scrollTo(target as HTMLElement, { offset: -80 })
          }
        }
      })
    })

    return {
      provide: {
        lenis
      }
    }
  }
})
