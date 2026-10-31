// Data Proyek Cipta Group (Hasil Scrape dari Linktree + Metadata Terstruktur)
const CIPTA_DATA = {
  profile: {
    username: "cipta.group",
    brandTitle: "Cipta Group Batam",
    tagline: "Menciptakan masa depan bersamamu. Est 1996",
    established: "1996",
    avatar: "https://ugc.production.linktr.ee/ce11525b-78be-499c-b2c8-28be31848621_Untitled-design.png",
    verified: true,
    whatsapp: "628566667363",
    whatsappDisplay: "+62 856-6667-363",
    instagram: "https://www.instagram.com/ciptatama_windsor/",
    tiktok: "https://www.tiktok.com/@cipta_windsor",
    linktree: "https://linktr.ee/cipta.group"
  },
  projects: [
    {
      id: "silverbell-tca2",
      title: "Silverbell, TCA 2",
      rawTitle: "🥀 SILVERBELL, TCA 2",
      category: "cluster",
      categoryLabel: "Cluster Eksklusif",
      type: "Residensial / Townhouse",
      location: "Tiban / TCA 2, Batam",
      description: "Hunian eksklusif berkonsep modern tropis dengan lanskap hijau asri, sistem keamanan terpadu, dan nilai investasi tinggi.",
      tag: "Pilihan Favorit",
      tagColor: "bg-amber-100 text-amber-800 border-amber-200",
      icon: "home",
      driveUrl: "https://drive.google.com/drive/folders/13FWSU06DNW85xtKY1MeEOrMCofXq2ojb?usp=sharing"
    },
    {
      id: "cipta-grand-city",
      title: "Cipta Grand City",
      rawTitle: "🏬 CIPTA GRAND CITY",
      category: "komersial",
      categoryLabel: "Kota Mandiri & Niaga",
      type: "Mega Proyek / Kawasan Terpadu",
      location: "Batam",
      description: "Pengembangan kawasan terintegrasi yang memadukan pusat bisnis, perniagaan, hunian komprehensif, dan fasilitas publik modern.",
      tag: "Mega Proyek",
      tagColor: "bg-blue-100 text-blue-800 border-blue-200",
      icon: "building-2",
      driveUrl: "https://drive.google.com/drive/folders/1cp8ySo-gPPfUmVEGr55YZgP2gGWPrOLj?usp=drive_link"
    },
    {
      id: "cipta-land",
      title: "Cipta Land",
      rawTitle: "🏬 CIPTA LAND",
      category: "komersial",
      categoryLabel: "Komersial & Ruko",
      type: "Pusat Niaga & Pertokoan",
      location: "Batam",
      description: "Kawasan pertokoan dan sentra komersial strategis di jalur primer. Pilihan ideal untuk ekspansi bisnis, ritel, dan kantor.",
      tag: "Sentra Bisnis",
      tagColor: "bg-purple-100 text-purple-800 border-purple-200",
      icon: "store",
      driveUrl: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl?usp=drive_link"
    },
    {
      id: "cipta-piayu-village-2",
      title: "Cipta Piayu Village 2",
      rawTitle: "🏡 CIPTA PIAYU VILLAGE 2",
      category: "residensial",
      categoryLabel: "Perumahan",
      type: "Hunian Keluarga",
      location: "Piayu, Batam",
      description: "Perumahan asri ramah keluarga dengan desain efisien, jalan lingkungan lebar, dan skema pembiayaan yang sangat bersahabat.",
      tag: "Ramah Anggaran",
      tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      icon: "trees",
      driveUrl: "https://drive.google.com/drive/folders/1g58CAzx2HabFvp0OP4zhexvDqVLXUMoi?usp=drive_link"
    },
    {
      id: "cipta-mandiri",
      title: "Cipta Mandiri",
      rawTitle: "🏡 CIPTA MANDIRI",
      category: "residensial",
      categoryLabel: "Perumahan",
      type: "Hunian Keluarga",
      location: "Batam",
      description: "Kompleks perumahan dinamis dengan kemudahan akses ke sarana pendidikan, pusat perbelanjaan, dan fasilitas kesehatan kota.",
      tag: "Akses Strategis",
      tagColor: "bg-sky-100 text-sky-800 border-sky-200",
      icon: "home",
      driveUrl: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko?usp=drive_link"
    },
    {
      id: "cipta-residence",
      title: "Cipta Residence",
      rawTitle: "🏡 CIPTA RESIDENCE",
      category: "residensial",
      categoryLabel: "Perumahan",
      type: "Residensial Modern",
      location: "Batam",
      description: "Hunian tertata rapi dengan drainase modern dan infrastruktur bawah tanah. Kenyamanan maksimal untuk keluarga berkembang.",
      tag: "Lingkungan Tertata",
      tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      icon: "shield-check",
      driveUrl: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB?usp=drive_link"
    },
    {
      id: "cipta-green-city-tca-2",
      title: "Cipta Green City TCA II",
      rawTitle: "🏡 CIPTA GREEN CITY TCA II",
      category: "cluster",
      categoryLabel: "Kota Hijau",
      type: "Eco Living",
      location: "TCA II, Batam",
      description: "Konsep perumahan berwawasan lingkungan hijau dengan ruang terbuka alami, taman aktif, dan pencahayaan rumah optimal.",
      tag: "Eco Living",
      tagColor: "bg-green-100 text-green-800 border-green-200",
      icon: "leaf",
      driveUrl: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs?usp=drive_link"
    },
    {
      id: "cipta-green-view",
      title: "Cipta Green View",
      rawTitle: "🏡 CIPTA GREEN VIEW",
      category: "residensial",
      categoryLabel: "Perumahan",
      type: "Hunian Panorama",
      location: "Batam",
      description: "Menghadirkan pemandangan perbukitan hijau yang menyejukkan mata setiap hari. Suasana tenang jauh dari kebisingan industri.",
      tag: "View Panorama",
      tagColor: "bg-teal-100 text-teal-800 border-teal-200",
      icon: "mountain",
      driveUrl: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto?usp=drive_link"
    },
    {
      id: "pesona-niaga",
      title: "Pesona Niaga",
      rawTitle: "🏬 PESONA NIAGA",
      category: "komersial",
      categoryLabel: "Komersial & Ruko",
      type: "Ruko Bisnis Strategis",
      location: "Batam",
      description: "Kompleks ruko komersial multi-fungsi 2 & 3 lantai di pusat keramaian. Traffic pelanggan tinggi, cocok untuk segala jenis usaha.",
      tag: "Prospek Bisnis",
      tagColor: "bg-rose-100 text-rose-800 border-rose-200",
      icon: "briefcase",
      driveUrl: "https://drive.google.com/drive/folders/1YFULZfxQV4xAVRWw15_9dw2Yf3-XVl1A?usp=drive_link"
    }
  ]
};

// State Aplikasi
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupFilterEvents();
  setupSearchEvent();
  setupContactModal();
  setupMobileMenu();
  lucide.createIcons();
});

// Render Kartu Proyek
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  const countBadge = document.getElementById('projectCount');
  
  if (!container) return;

  const filtered = CIPTA_DATA.projects.filter(project => {
    const matchesCategory = (currentFilter === 'all') || (project.category === currentFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Proyek`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-semibold text-slate-800">Tidak ada proyek yang sesuai</h3>
        <p class="text-sm text-slate-500 mt-1">Coba kata kunci lain atau ubah kategori filter.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg transition">
          Reset Filter
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const waMessage = encodeURIComponent(`Halo Cipta Group, saya ingin informasi lebih lanjut mengenai proyek "${item.title}".`);
    const waLink = `https://api.whatsapp.com/send?phone=${CIPTA_DATA.profile.whatsapp}&text=${waMessage}`;

    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col group">
        <!-- Card Header / Banner -->
        <div class="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${item.tagColor}">
              ${item.tag}
            </span>
            <span class="text-xs text-slate-400 flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-400"></i> ${item.location}
            </span>
          </div>

          <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
            ${item.title}
          </h3>
          <p class="text-xs text-sky-400 mt-1 font-medium tracking-wide">
            ${item.type}
          </p>
        </div>

        <!-- Card Body -->
        <div class="p-6 flex-1 flex flex-col justify-between bg-white">
          <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
            ${item.description}
          </p>

          <!-- Action Buttons -->
          <div class="space-y-2 pt-4 border-t border-slate-100">
            <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" 
               class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition shadow-sm hover:shadow">
              <i data-lucide="folder-open" class="w-4 h-4 text-sky-400"></i>
              Buka Brosur & Pricelist (Drive)
            </a>

            <a href="${waLink}" target="_blank" rel="noopener noreferrer"
               class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-xl border border-emerald-200 transition">
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Event Handler Kategori
function setupFilterEvents() {
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      btn.classList.add('bg-sky-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

      currentFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });
}

// Event Handler Search
function setupSearchEvent() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProjects();
    });
  }
}

function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(b => {
    if (b.getAttribute('data-filter') === 'all') {
      b.classList.add('bg-sky-600', 'text-white', 'shadow-md');
      b.classList.remove('bg-white', 'text-slate-600');
    } else {
      b.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
      b.classList.add('bg-white', 'text-slate-600');
    }
  });

  renderProjects();
}

// Modal Konsultasi Cepat
function setupContactModal() {
  const modal = document.getElementById('contactModal');
  const form = document.getElementById('inquiryForm');

  window.openModal = function() {
    if (modal) modal.classList.remove('hidden');
  };

  window.closeModal = function() {
    if (modal) modal.classList.add('hidden');
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inqName').value.trim();
      const phone = document.getElementById('inqPhone').value.trim();
      const project = document.getElementById('inqProject').value;
      const note = document.getElementById('inqNote').value.trim();

      const text = `Halo Cipta Group, saya ingin konsultasi:\n- Nama: ${name}\n- No. Kontak: ${phone}\n- Minat Proyek: ${project}\n- Catatan: ${note || '-'}`;
      const waUrl = `https://api.whatsapp.com/send?phone=${CIPTA_DATA.profile.whatsapp}&text=${encodeURIComponent(text)}`;
      
      window.open(waUrl, '_blank');
      closeModal();
    });
  }
}

// Mobile Menu Handler
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
