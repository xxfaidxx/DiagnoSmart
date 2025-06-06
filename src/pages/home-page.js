export default class HomePage {
  constructor() {
    this._isMobileMenuOpen = false;
  }

  render() {
    const content = document.createElement("div");

    content.innerHTML = `
      <div class="mobile-menu hidden md:hidden bg-white w-full px-4 py-2 shadow-lg">
        <a href="#/" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Home</a>
        <a href="#/feedback" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Feedback</a>
        <a href="#/contact" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Contact</a>
      </div>

      <section class="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 md:py-12">
        <div class="container mx-auto px-4 text-center">
          <div class="max-w-4xl mx-auto p-1 bg-white rounded-xl shadow-2xl">
            <img 
              src="./images/Banner.png" 
              alt="AI DIAGNOSIS CERDAS UNTUK MASA DEPAN KESEHATAN ANDA"
              class="w-full h-auto object-contain rounded-lg border-4 border-white shadow-inner"
            >
          </div>
        </div>
      </section>

      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Category 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow penyakit-tulang-card cursor-pointer">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Penyakit%20tulang.png" alt="Penyakit Tulang" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Penyakit Tulang</h3>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Penyakit%20umum.png" alt="Penyakit Umum" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Penyakit Umum</h3>
              </div>
            </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Penyakit%20kulit.png" alt="Penyakit Kulit" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Penyakit Kulit</h3>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Penyakit%20pencernaan.png" alt="Penyakit Pencernaan" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Penyakit Pencernaan</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const penyakitTulangCard = content.querySelector(".penyakit-tulang-card");
    if (penyakitTulangCard) {
      penyakitTulangCard.addEventListener("click", () => {
        window.location.hash = "/bone-form";
      });
    }

    return content;
  }
}
