import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

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
