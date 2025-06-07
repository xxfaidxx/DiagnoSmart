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

      <div class="w-full px-2 md:px-5 mt-3 text-center">
        <img 
          src="./images/Banner.png"   
          alt="Banner"
          class="w-full h-auto object-cover rounded-xl border-4 shadow-2xl mb-20"
        >
      </div>

      <h2 class="text-2xl font-medium text-center">Layanan Yang Tersedia</h2>
      <section class="py-12">
        <div class="container mx-auto mb-4 px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow penyakit-tulang-card cursor-pointer">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Tulang.png" alt="Penyakit Tulang" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 text-center">Penyakit Tulang</h3>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow penyakit-umum-card cursor-pointer">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Umum.png" alt="Penyakit Umum" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 text-center">Penyakit Umum</h3>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow penyakit-pencernaan-card cursor-pointer">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Pencernaan.png" alt="Penyakit Pencernaan" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 text-center">Penyakit Pencernaan</h3>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow penyakit-kulit-card cursor-pointer">
              <div class="h-48 flex items-center justify-center">
                <img src="./images/Kulit.png" alt="Penyakit Kulit" class="h-full w-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 text-center">Penyakit Kulit</h3>
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

    const penyakitUmumCard = content.querySelector(".penyakit-umum-card");
    if (penyakitUmumCard) {
      penyakitUmumCard.addEventListener("click", () => {
        window.location.hash = "/general-form";
      });
    }

    const penyakitPencernaanCard = content.querySelector(
      ".penyakit-pencernaan-card"
    );
    if (penyakitPencernaanCard) {
      penyakitPencernaanCard.addEventListener("click", () => {
        window.location.hash = "/digestive-form";
      });
    }

    const penyakitKulitCard = content.querySelector(".penyakit-kulit-card");
    if (penyakitKulitCard) {
      penyakitKulitCard.addEventListener("click", () => {
        window.location.hash = "/skin-form";
      });
    }

    return content;
  }
}
