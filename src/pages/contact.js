const ContactPage = {
  async render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
      <section class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 text-center">Hubungi Diagnosmart</h1>
        <p class="text-gray-600 text-center mb-10 mt-5">Kami siap membantu Anda dengan ramah dan professional</p>

        <div class="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
          <div class="flex justify-center md:justify-start">
            <img class="w-64 md:w-80 animate-float md:ml-10" src="./images/maskot-diagnosmart.png" alt="Maskot Diagnosmart">
          </div>

          <div class="space-y-6">
            <!-- Telepon -->
            <div class="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-fit">
              <div class="inline-flex items-center gap-2 text-xl font-semibold text-gray-800">
                📞 <span>Telepon</span>
              </div>
              <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-2">
                <p class="text-gray-600 text-sm">Senin-Jumat, 09.00-17.00 WIB</p>
                <a href="tel:+6281234567890" class="text-blue-600 hover:underline text-sm">+62 812-3456-7890</a>
              </div>
            </div>

            <div class="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-fit">
              <div class="inline-flex items-center gap-2 text-xl font-semibold text-gray-800">
                📧 <span>Email</span>
              </div>
              <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-2">
                <p class="text-gray-600 text-sm">Kirim email atau pertanyaan :</p>
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
