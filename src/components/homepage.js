class HomePage extends HTMLElement {
    constructor() {
      super();
      this._isMobileMenuOpen = false;
    }
  
    connectedCallback() {
      this.render();
      this.setupMobileMenu();
    }
  
    toggleMobileMenu() {
      this._isMobileMenuOpen = !this._isMobileMenuOpen;
      const mobileMenu = this.querySelector('.mobile-menu');
      const hamburgerIcon = this.querySelector('.hamburger-icon');
      const closeIcon = this.querySelector('.close-icon');
  
      if (this._isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  
    setupMobileMenu() {
      const menuButton = this.querySelector('.mobile-menu-button');
      if (menuButton) {
        menuButton.addEventListener('click', () => this.toggleMobileMenu());
      }
    }
  
    render() {
      this.innerHTML = `
        <!-- Navbar -->
        <nav class="bg-white shadow-md">
          <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <img src="./images/Logo.ico" alt="Logo DiagnoSmart" class="h-10 w-10 md:h-11 md:w-11 object-contain rounded-full shadow-sm border border-gray-200">
              <div class="text-xl md:text-2xl font-bold text-blue-600">DIAGNOSMART</div>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8">
              <a href="#" class="text-blue-600 font-semibold hover:text-blue-800">Home</a>
              <a href="#" class="text-gray-600 hover:text-blue-600">Layanan</a>
              <a href="#" class="text-gray-600 hover:text-blue-600">Solusi</a>
              <a href="#" class="text-gray-600 hover:text-blue-600">Kontak</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button class="mobile-menu-button text-gray-600 focus:outline-none">
                <svg class="h-6 w-6 hamburger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg class="h-6 w-6 close-icon hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu -->
          <div class="mobile-menu hidden md:hidden bg-white w-full px-4 py-2 shadow-lg">
            <a href="#" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Home</a>
            <a href="#" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Layanan</a>
            <a href="#" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Solusi</a>
            <a href="#" class="block py-3 px-4 text-gray-800 hover:bg-blue-50 rounded">Kontak</a>
          </div>
        </nav>
  
        <!-- Hero Section -->
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
  
        <!-- Categories Section -->
        <section class="py-12">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Category 1 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="h-48 flex items-center justify-center">
                  <img src="./images/Penyakit%20umum.png" alt="Penyakit Umum" class="h-full w-full object-cover">
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800">Penyakit Umum</h3>
                </div>
              </div>
  
              <!-- Category 2 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="h-48 flex items-center justify-center">
                  <img src="./images/Penyakit%20tulang.png" alt="Penyakit Tulang" class="h-full w-full object-cover">
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800">Penyakit Tulang</h3>
                </div>
              </div>
  
              <!-- Category 3 -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="h-48 flex items-center justify-center">
                  <img src="./images/Penyakit%20kulit.png" alt="Penyakit Kulit" class="h-full w-full object-cover">
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800">Penyakit Kulit</h3>
                </div>
              </div>
  
              <!-- Category 4 -->
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
  
        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-6">
          <div class="container mx-auto px-4 text-center">
            <p>Copyright &copy; 2025 - DiagnoSmart</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('home-page', HomePage);