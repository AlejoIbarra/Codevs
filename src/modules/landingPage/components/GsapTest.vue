<script setup>
import { ref, watchEffect, onMounted, nextTick } from 'vue'
import { VueLenis } from 'lenis/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '@/modules/landingPage/components/HeroSectionComponent.vue'
import AboutGsapSection from './AboutGsapSection.vue'
import AboutSection from './AboutSection.vue'

const lenisRef = ref()

gsap.registerPlugin(ScrollTrigger)

watchEffect((onInvalidate) => {
    const lenis = lenisRef.value?.lenis
    if (!lenis) return

    const updateScroll = () => {
        lenis.raf(performance.now())
        ScrollTrigger.update()
    }

    gsap.ticker.add(updateScroll)
    gsap.ticker.lagSmoothing(0)

    onInvalidate(() => {
        gsap.ticker.remove(updateScroll)
    })
})


onMounted(async () => {
    await nextTick()

    // Logo con animación basada en scroll
    gsap.fromTo(' .logo-wrapper',
        { scale: 1 },
        {
            scale: 1.5,
            ease: 'none',
            scrollTrigger: {
                trigger: '.logo-wrapper',
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        })

    gsap.fromTo('.logo-principal',
        { scale: 0.3, opacity: 1 },
        {
            scale: 0.8,
            opacity: 1,
            duration: 1.2,
            // ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: '.logo-principal',
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        }
    )




    // Resto de animaciones
    gsap.from('#hero h2', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top 90%',
        }
    })

    gsap.from('#hero p', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top 90%',
        }
    })

    gsap.from('#hero .d-flex', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top 90%',
        }
    })

    // // Destello que cruza sobre el logo mientras haces scroll
    // gsap.fromTo('.logo-glow::before',
    //     { left: '-30%', opacity: 0 },
    //     {
    //         left: '130%',
    //         opacity: 1,
    //         duration: 2,
    //         ease: 'power2.inOut',
    //         scrollTrigger: {
    //             trigger: '.logo-principal',
    //             start: 'top center',
    //             end: 'bottom top',
    //             scrub: true
    //         }
    //     }
    // )


    // Animaciones para otras secciones
    gsap.utils.toArray('.section').forEach((el) => {
        gsap.fromTo(el,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: -10,
                duration: 1.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 99%',
                    end: 'bottom 90%',
                    scrub: true
                }
            })
    })

    
          gsap.to('.about', {
        scrollTrigger: {
        trigger: '.about',
        start: 'top ',
        end: 'end',
        pin: false,
        scrub: false
        }
    })

    // gsap.utils.toArray('.mysection').forEach((el) => {
    //     gsap.fromTo(el,
    //         { opacity: 0.5, y: 100 },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 1.2,
    //             scrollTrigger: {
    //                 trigger: el,
    //                 start: 'top 100%',
    //                 end: 'bottom 95%',
    //                 scrub: true
    //             }
    //         })
    // })
    gsap.fromTo('.logo-glow',
        { left: '-30%', opacity: 0 },
        {
            left: '130%',
            opacity: 1,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.logo-principal',
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        }
    )

})

</script>

<template>



    <VueLenis root ref="lenisRef" :options="{ autoRaf: false }">

        <div class="bg-red-800">
            <section>
                <div
                    class="absolute bottom-4 left-4 z-30 flex items-center space-x-2 animate-bounce text-white text-sm sm:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                    <span>Desliza hacia arriba</span>
                </div>
                <div class="text-center relative w-350 h-170 pt-20 logo-wrapper"
                    style=" background-image: linear-gradient(to right, #919191, #d6d6d6, #919191);">
                    <p class="font-bold text-3xl text-white">Somos</p>
                    <!-- <img class="logo-principal" src="/src/assets/codevs.webp" alt="logo codevs" /> -->
                    <img class="logo-principal relative z-10" src="/src/assets/codevs.webp" alt="logo codevs" />
                    <div class="logo-glow absolute top-0 left-0 h-100 w-full pointer-events-none z-20"></div>

                    <p class="font-bold text-3xl text-gray">"Innovamos y desarrollamos soluciones digitales a medida."
                    </p>



                </div>
            </section>


            <section
                class="mysection h-screen m-0 p-0 bg-black text-white flex justify-center items-center text-5xl font-bold">
                <div class="zoom w-full h-screen">
                    <HeroSection />
                </div>
            </section>

            <section class="section h-screen bg-cover bg-center text-white text-4xl flex items-center justify-center">
                <AboutGsapSection/>
            </section>

            <section class="section h-screen bg-purple-900 text-white flex justify-center items-center text-3xl">
                <div>Explora. Dispara. Corre. Vive.</div>
            </section>

            <section class="section h-screen bg-black text-green-400 flex justify-center items-center text-3xl">
                <div>Coming 2026...</div>
            </section>
        </div>
    </VueLenis>
</template>

<style scoped>
.section {
    position: relative;
}

.zoom {
    transition: transform 0.5s ease-out;
    will-change: transform;
}

.logo-wrapper {
    overflow: hidden;
    position: relative;
}

.logo-glow::before {
    content: "";
    position: absolute;
    top: 0;
    left: -30%;
    width: 30%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
    transform: skewX(-20deg);
    filter: blur(8px);
    opacity: 0;
}

.logo-glow {
    position: absolute;
    top: 0;
    left: -30%;
    width: 30%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
    transform: skewX(-20deg);
    filter: blur(8px);
    opacity: 0;
}
</style>
