<template>
    <section id="hero" class="hero section">

        <img src="@/assets/img/hero-bg.jpg" alt="" data-aos="fade-in">

        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 data-aos="fade-up" data-aos-delay="100">Somos CODEVS</h2>
                    <p data-aos="fade-up" data-aos-delay="200">"Innovamos y desarrollamos soluciones digitales a
                        medida."</p>
                    <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                        <!-- <a href="#about" class="btn-get-started">Contactanos</a> -->
                        <PrimaryButton 
                            text="Contactanos"
                        />
                    </div>

                </div>
            </div>
        </div>

    </section><!-- /Hero Section -->
</template>
<script setup>
    import PrimaryButton from './ui/PrimaryButton.vue';
</script>