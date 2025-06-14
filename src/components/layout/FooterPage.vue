<template>
    <footer id="footer" class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <!-- About -->
            <div>
                <a href="index.html" class="flex items-center text-2xl font-bold text-white mb-4">
                    <span class="sitename">Codevs</span>
                </a>
                <div class="space-y-1 text-sm text-gray-300">
                    <p>Cl. 8b #15-125 a 15-1,</p>
                    <p>San Juan de Pasto, Nariño</p>
                    <p class="mt-3"><strong>Celular:</strong> <span>+57 3138066800</span></p>
                    <p><strong>Email:</strong> <span>comercial@codevs.dev</span></p>
                </div>
                <div class="flex space-x-4 mt-4">
                    <!-- <a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-twitter-x text-xl"></i></a> -->
                    <a href="https://www.facebook.com/profile.php?id=61576300478505" target="_blank"
                        class="text-gray-400 hover:text-white"><i class="bi bi-facebook text-xl"></i></a>
                    <a href="https://www.instagram.com/codevs_dev/" target="_blank"
                        class="text-gray-400 hover:text-white"><i class="bi bi-instagram text-xl"></i></a>
                    <!-- <a href="#" class="text-gray-400 hover:text-white"><i class="bi bi-linkedin text-xl"></i></a> -->
                </div>
            </div>

            <!-- Useful Links -->
            <div>
                <h4 class="text-lg text-white-500 font-semibold mb-4">Links</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                    <li><a href="#" class="hover:underline">Home</a></li>
                    <li><a href="#" class="hover:underline">About us</a></li>
                    <li><a href="#" class="hover:underline">Services</a></li>
                    <li><a href="#" class="hover:underline">Terms of service</a></li>
                    <li><a href="#" class="hover:underline">Privacy policy</a></li>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Nuestros Servicios</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                    <li><a href="#" class="hover:underline">Web Design</a></li>
                    <li><a href="#" class="hover:underline">Web Development</a></li>
                    <li><a href="#" class="hover:underline">Product Management</a></li>
                    <li><a href="#" class="hover:underline">Marketing</a></li>
                    <li><a href="#" class="hover:underline">Graphic Design</a></li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Nuestro Newsletter</h4>
                <p class="text-sm text-gray-300 mb-4">
                    Recibe novedades y promociones directamente en tu buzón. ¡Suscríbete a nuestro newsletter
                </p>
                <form action="forms/newsletter.php" method="post" class="space-y-2">
                    <div class="flex">
                        <input type="email" name="email" placeholder="Correo Electronico"
                            class="w-full p-2 rounded-l bg-white text-black text-sm focus:outline-none" />
                        <input type="submit" value="Suscribete"
                            class="bg-red-800 hover:bg-red-900 px-4 rounded-r text-white text-sm" />
                    </div>
                    <div class="loading hidden text-sm text-gray-400">Loading...</div>
                    <div class="error-message hidden text-red-400 text-sm"></div>
                    <div class="sent-message hidden text-green-400 text-sm">Your subscription request has been sent.
                        Thank you!</div>
                </form>
            </div>

        </div>

        <!-- Copyright -->
        <div class="mt-10 pb-0 text-center text-sm text-gray-500">
            <p>© <span>{{ currentYear }}</span> <span>Copyright</span> <a href="https://www.codevs.dev/" class="px-1 sitename font-semibold text-lg">Codevs</a>
                <span>All Rights Reserved</span>
            </p>

        </div>
    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top"
        class="fixed right-4 bottom-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center shadow-lg z-50">
        <i class="bi color-white bi-arrow-up-short text-white text-2xl"></i>
    </a>

</template>
<script setup>
import { computed } from 'vue';

const currentYear = computed(() => {
    return new Date().getFullYear(); // Esto devolverá el año actual (2025)
});
</script>