const ContactPage = {
  render: () => {
    const div = document.createElement("div");

    div.innerHTML = `
      <section class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 py-10 text-gray-800 relative overflow-hidden">
        
        <!-- Background Decorative Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce" style="animation-delay: 1s;"></div>
          <div class="absolute bottom-32 left-20 w-28 h-28 bg-green-200 rounded-full opacity-25 animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-20 right-32 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-bounce" style="animation-delay: 0.5s;"></div>
        </div>

        <!-- Header Section with Enhanced Styling -->
        <div class="text-center mb-12 relative z-10">
          <h1 class="text-4xl md:text-6xl font-bold pb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-fadeInUp">
            Hubungi DiagnoSmart
          </h1>
          <div class="flex items-center justify-center mt-5 gap-2 text-lg md:text-xl text-gray-600 animate-fadeInUp" style="animation-delay: 0.2s;">
            <span>✨</span>
            <p>Kami siap membantu Anda dengan ramah dan profesional</p>
            <span>✨</span>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-start justify-center w-full max-w-7xl relative z-10">
          
          <div class="flex justify-center w-full lg:w-1/2 relative">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div class="relative transform hover:scale-105 transition-all duration-500 animate-float">
                <img class="w-72 md:w-96 drop-shadow-2xl filter brightness-110 contrast-110" 
                     src="./images/maskot-diagnosmart.png"
                     alt="Maskot Diagnosmart">
                <div class="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div class="absolute top-20 right-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style="animation-delay: 1s;"></div>
                <div class="absolute bottom-20 left-16 w-2.5 h-2.5 bg-green-400 rounded-full animate-bounce opacity-70" style="animation-delay: 0.5s;"></div>
                <div class="absolute bottom-32 right-8 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-65" style="animation-delay: 1.5s;"></div>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-10 w-full lg:w-1/2">
            <div class="space-y-6">
              <div class="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden border border-white/20 hover:border-blue-200/50 transform hover:-translate-y-2">
                <div class="flex items-center gap-4">
                  <div class="text-3xl animate-bounce">📞</div>
                  <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Telepon</span>
                </div>
                <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden mt-4">
                  <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border-l-4 border-blue-400">
                    <p class="text-gray-700 font-medium mb-2">📅 Senin - Jumat, 09.00 - 17.00 WIB</p>
                    <a href="tel:+6281234567890" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg hover:underline transition-colors">
                      📱 +62 812-3456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div class="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden border border-white/20 hover:border-purple-200/50 transform hover:-translate-y-2">
                <div class="flex items-center gap-4">
                  <div class="text-3xl animate-pulse">📧</div>
                  <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Email</span>
                </div>
                <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden mt-4">
                  <div class="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-4 border-l-4 border-purple-400">
                    <p class="text-gray-700 font-medium mb-2">💬 Kirim pertanyaan atau kerja sama ke:</p>
                    <a href="mailto:halo@diagnosmart.id" class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-lg hover:underline transition-colors">
                      ✉️ halo@diagnosmart.id
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full max-w-2xl mx-auto">
              <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Pertanyaan Umum
                </h2>
                <div class="flex items-center justify-center gap-2 text-gray-600">
                  <p class="text-lg">Temukan jawaban atas pertanyaan Anda</p>
                  <span>💡</span>
                </div>
              </div>

              <div class="space-y-6">
                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
                  <button class="flex justify-between items-center w-full font-semibold text-left hover:text-blue-600 transition-colors" onclick="toggleFAQ('faq1')">
                    <span class="text-lg pr-4">Bagaimana kerja website DiagnoSmart dalam memberikan diagnosis awal penyakit penggunanya?</span>
                    <span id="icon-faq1" class="text-2xl text-blue-500 transition-transform duration-300 flex-shrink-0">➕</span>
                  </button>
                  <div id="faq1" class="overflow-hidden transition-all duration-500 ease-in-out" style="height: 0px;">
                    <div class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                      <p class="text-gray-700 leading-relaxed">
                        Website DiagnoSmart bekerja dengan memanfaatkan algoritma machine learning yang menganalisis input gejala dari pengguna dan menghasilkan prediksi awal penyakit secara otomatis. Proses ini memberikan kemudahan kepada masyarakat untuk mengenali kondisi kesehatannya dengan cepat tanpa harus ke fasilitas kesehatan terlebih dahulu.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
                  <button class="flex justify-between items-center w-full font-semibold text-left hover:text-green-600 transition-colors" onclick="toggleFAQ('faq2')">
                    <span class="text-lg pr-4">Keunggulan apa saja yang dimiliki website DiagnoSmart untuk pengguna dalam memberikan diagnosis awal penyakit?</span>
                    <span id="icon-faq2" class="text-2xl text-green-500 transition-transform duration-300 flex-shrink-0">➕</span>
                  </button>
                  <div id="faq2" class="overflow-hidden transition-all duration-500 ease-in-out" style="height: 0px;">
                    <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400">
                      <p class="text-gray-700 leading-relaxed">
                        DiagnoSmart memiliki keunggulan dari sisi aksesibilitas, kemudahan penggunaan, dan teknologi prediksi yang akurat. Website ini bisa diakses kapan saja dan di mana saja, dirancang dengan antarmuka yang sederhana namun informatif, serta mendukung pengguna dalam memahami kondisi kesehatannya secara mandiri.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
                  <button class="flex justify-between items-center w-full font-semibold text-left hover:text-purple-600 transition-colors" onclick="toggleFAQ('faq3')">
                    <span class="text-lg pr-4">Fitur apa saja yang paling dibutuhkan pengguna dalam website cek diagnosis penyakit?</span>
                    <span id="icon-faq3" class="text-2xl text-purple-500 transition-transform duration-300 flex-shrink-0">➕</span>
                  </button>
                  <div id="faq3" class="overflow-hidden transition-all duration-500 ease-in-out" style="height: 0px;">
                    <div class="mt-4 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border-l-4 border-purple-400">
                      <p class="text-gray-700 leading-relaxed">
                        Fitur utama yang disediakan meliputi diagnosis penyakit umum, pencernaan, kulit, dan tulang. Fitur ini dikembangkan berdasarkan kebutuhan pengguna agar bisa melakukan pengecekan awal secara spesifik dan relevan terhadap kondisi yang mereka alami.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
                  <button class="flex justify-between items-center w-full font-semibold text-left hover:text-orange-600 transition-colors" onclick="toggleFAQ('faq4')">
                    <span class="text-lg pr-4">Berapa tingkat akurasi website DiagnoSmart dalam memberikan prediksi diagnosis penyakit para pengguna?</span>
                    <span id="icon-faq4" class="text-2xl text-orange-500 transition-transform duration-300 flex-shrink-0">➕</span>
                  </button>
                  <div id="faq4" class="overflow-hidden transition-all duration-500 ease-in-out" style="height: 0px;">
                    <div class="mt-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-400">
                      <p class="text-gray-700 leading-relaxed">
                        Website DiagnoSmart memiliki tingkat akurasi prediksi mencapai <span class="font-bold text-orange-600">90%</span>, berdasarkan hasil evaluasi model yang telah dilatih menggunakan dataset dari sumber terpercaya dan diuji melalui beberapa metrik validasi seperti precision dan recall.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
                  <button class="flex justify-between items-center w-full font-semibold text-left hover:text-teal-600 transition-colors" onclick="toggleFAQ('faq5')">
                    <span class="text-lg pr-4">Bagaimana tingkat kepuasan pengguna terhadap antarmuka website DiagnoSmart selama pemakaian?</span>
                    <span id="icon-faq5" class="text-2xl text-teal-500 transition-transform duration-300 flex-shrink-0">➕</span>
                  </button>
                  <div id="faq5" class="overflow-hidden transition-all duration-500 ease-in-out" style="height: 0px;">
                    <div class="mt-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-400">
                      <p class="text-gray-700 leading-relaxed">
                        Antarmuka DiagnoSmart dikembangkan menggunakan pendekatan UI/UX modern dengan Tailwind CSS dan Bootstrap, serta diuji agar tetap nyaman digunakan di perangkat desktop maupun mobile. Hasil pengujian menunjukkan bahwa pengguna merasa antarmuka ini intuitif dan mendukung proses diagnosis dengan nyaman.
                      </p>
                    </div>
                  </div>
                </div>

        <style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .group:hover .animate-bounce {
            animation-duration: 0.5s;
          }

          .group:hover .animate-pulse {
            animation-duration: 1s;
          }
        </style>
      </section>
    `;

    return div;
  },
};

window.toggleFAQ = function (faqId) {
  const faq = document.getElementById(faqId);
  const icon = document.getElementById("icon-" + faqId);

  const isOpen = faq.style.height && faq.style.height !== "0px";

  document.querySelectorAll('[id^="faq"]').forEach((el) => {
    el.style.height = "0px";
    const ic = document.getElementById("icon-" + el.id);
    if (ic) {
      ic.textContent = "➕";
      ic.style.transform = "rotate(0deg)";
    }
  });

  if (!isOpen) {
    faq.style.height = faq.scrollHeight + "px";
    icon.textContent = "➖";
    icon.style.transform = "rotate(180deg)";
  }
};

export default ContactPage;
