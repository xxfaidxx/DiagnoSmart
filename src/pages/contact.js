const ContactPage = {
  async render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
      <section class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 text-center">Hubungi Diagnosmart</h1>
        <p class="text-gray-600 text-center mb-10">Kami siap membantu Anda dengan ramah dan profesional 😊</p>

        <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <!-- Gambar Maskot -->
          <div class="flex justify-center">
            <img class="w-64 md:w-80 animate-float" src="../public/images/Banner.png" alt="Maskot Diagnosmart">
          </div>

          <div class="space-y-6">
            <div class="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 cursor-pointer overflow-hidden w-fit">
              <div class="inline-flex items-center gap-2 text-xl font-semibold text-gray-800">
                📞 <span>Telepon</span>
              </div>
              <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-2">
                <p class="text-gray-600 text-sm">Senin - Jumat, 09.00 - 17.00 WIB</p>
                <a href="tel:+6281234567890" class="text-blue-600 hover:underline text-sm">+62 812-3456-7890</a>
              </div>
            </div>

            <div class="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 cursor-pointer overflow-hidden w-fit">
              <div class="inline-flex items-center gap-2 text-xl font-semibold text-gray-800">
                📧 <span>Email</span>
              </div>
              <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-2">
                <p class="text-gray-600 text-sm">Kirim pertanyaan atau kerja sama ke:</p>
                <a href="mailto:halo@diagnosmart.id" class="text-blue-600 hover:underline text-sm">halo@diagnosmart.id</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    return wrapper;
  },
};

export default ContactPage;
