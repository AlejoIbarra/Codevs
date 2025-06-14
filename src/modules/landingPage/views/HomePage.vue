<template>
    <LandigPageLayout>
        <template #principalContent>

            <!-- <p class="bg-red-500 w-100 p-6  font-bold font-black-500 "  >Hola Juancho</p> -->

            <HeroSectionComponent/>
            <SwiperComponent/>
            <AboutSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <ContactSection/>
            

            <div class="bg-white">
                <div class="">
                    <!-- <InfoLandingPage /> -->
                </div>
            </div>
            <div class="pt-20 bg-white">
                <div class="md:mx-50">
                    <!-- <BannerRegister /> -->
                </div>
            </div>
        </template>
        <template #footerContent>
            <div class="w-full h-full bg-purple-100 pt-15">
                <div class="md:mx-50">
                    <!-- <FooterComponent /> -->
                </div>
            </div>
        </template>
    </LandigPageLayout>
</template>

<script setup>
import LandigPageLayout from '@/layouts/LandigPageLayout.vue';
import HeroSectionComponent from '../components/HeroSectionComponent.vue';
import SwiperComponent from '../components/SwiperComponent.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
import ContactSection from '../components/ContactSection.vue';
// import InfoLandingPage from '../components/InfoLandingPage.vue';

</script>