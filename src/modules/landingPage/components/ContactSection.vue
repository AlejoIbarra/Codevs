<template>
    <section id="contact" class="bg-white text-gray-800 flex items-center justify-center">
        <!-- Section Title -->
        <div class="container" >
            <div class="section-title">
                <h2>Contacto</h2>
            </div>


            <div class="max-w-7xl mx-auto px-4"  >
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <!-- Contact Info -->
                    <div class="space-y-6">
                        <!-- Address -->
                        <div class="bg-gray-100 p-6 text-center rounded shadow" >
                            <i class="bi bi-geo-alt text-3xl text-red-600 mb-2"></i>
                            <h3 class="text-lg font-semibold mt-2">Dirección</h3>
                            <p class="text-gray-600">Cl. 8b #15-125 a 15-1, San Juan de Pasto, Nariño</p>
                        </div>

                        <!-- Phone and Email Side-by-side -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-gray-100 p-6 text-center rounded shadow" >
                                <i class="bi bi-telephone text-3xl text-red-600 mb-2"></i>
                                <h3 class="text-lg font-semibold mt-2">llamanos</h3>
                                <p class="text-gray-600">+57 3138066800</p>
                            </div>
                            <div class="bg-gray-100 p-6 text-center rounded shadow" >
                                <i class="bi bi-envelope text-3xl text-red-600 mb-2"></i>
                                <h3 class="text-lg font-semibold mt-2">Email</h3>
                                <p class="text-gray-600">comercial@codevs.dev</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="bg-gray-50 p-6 rounded shadow" >
                        <form action="forms/contact.php" method="post" class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Nombre" required
                                    class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                <input type="email" name="email" placeholder="correo electronico" required
                                    class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                            </div>

                            <input type="text" name="subject" placeholder="Asunto" required
                                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />

                            <textarea name="message" rows="5" placeholder="Mensaje" required
                                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"></textarea>

                            <div class="text-center space-y-2">
                                <div class="loading hidden text-sm text-gray-500">Loading...</div>
                                <div class="error-message hidden text-red-500 text-sm"></div>
                                <div class="sent-message hidden text-green-500 text-sm">Your message has been sent.
                                    Thank
                                    you!</div>
                                <button type="submit"
                                    class="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition duration-200">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>