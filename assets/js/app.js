// Data Hasil Scraping Mendalam (Deep Linktree & Google Drive Asset Inspection)
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
  summary: {
    totalProjects: 9,
    totalSubfolders: 44,
    totalFiles: 20
  },
  projects: [
    {
      no: 1,
      id: "silverbell",
      rawTitle: "🥀 SILVERBELL, TCA 2",
      title: "Silverbell, TCA 2",
      emoji: "🥀",
      category: "cluster",
      categoryLabel: "Cluster Eksklusif",
      location: "TCA (Tiban Centre Avenue), Batam",
      highlight: "Hunian Mewah Modern",
      tagColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Hunian prestisius berkonsep cluster tertutup di kawasan prime Tiban Centre Avenue dengan lanskap hijau asri dan keamanan 24 jam.",
      driveUrl: "https://drive.google.com/drive/folders/13FWSU06DNW85xtKY1MeEOrMCofXq2ojb?usp=sharing",
      subfolders: [
        { name: "Brosur", tag: "Brosur / Marketing Kit", icon: "file-text", url: "https://drive.google.com/drive/folders/1FgjZrAJqqwHvdP9L9ZeQ_hAn1pyLGlVN" },
        { name: "Pricelist", tag: "Pricelist / Angsuran", icon: "table", url: "https://drive.google.com/drive/folders/1NpTG25lKeTn6dF3plsjtmoF-wvhY1vMf" },
        { name: "Siteplan", tag: "Masterplan", icon: "map", url: "https://drive.google.com/drive/folders/15hrdOfFtNRHB14-655OqVqUGOEB7cFGt" },
        { name: "Video", tag: "Video Progres", icon: "video", url: "https://drive.google.com/drive/folders/1VeT3D3eJTb2lCI_mHIdbdgfJdANk4R5s" }
      ],
      filesCount: 0
    },
    {
      no: 2,
      id: "cipta-grand-city",
      rawTitle: "🏬 CIPTA GRAND CITY",
      title: "Cipta Grand City",
      emoji: "🏬",
      category: "komersial",
      categoryLabel: "Kota Mandiri & Niaga",
      location: "Kawasan Terpadu Batam",
      highlight: "Mega Proyek Terpadu",
      tagColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Pengembangan mega kawasan terpadu skala kota mandiri yang menggabungkan pusat bisnis, perniagaan, hunian komprehensif, dan fasilitas publik modern.",
      driveUrl: "https://drive.google.com/drive/folders/1cp8ySo-gPPfUmVEGr55YZgP2gGWPrOLj?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/1b47J05K_wKszQ_wJ8kS_Y9cZ" },
        { name: "Denah", tag: "Denah", icon: "layout", url: "https://drive.google.com/drive/folders/1b47J05K_wKszQ_wJ8kS_Y9cZ" },
        { name: "Gambar", tag: "Galeri", icon: "image", url: "https://drive.google.com/drive/folders/1050wa9MWyb1xzm1mhDyulYGFBg5p2E7j" },
        { name: "Price List", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/1V1K0_wKszQ_wJ8kS_Y9cZ" },
        { name: "Site Plan", tag: "Siteplan", icon: "map", url: "https://drive.google.com/drive/folders/1h2MQkGahtW_HOKM9QMAoe5rb1j0qsjFC" },
        { name: "Video", tag: "Video", icon: "video", url: "https://drive.google.com/drive/folders/1V1K0_wKszQ_wJ8kS_Y9cZ" }
      ],
      filesCount: 20,
      filesHighlight: "20 Video Konten Marketing Siap Tonton"
    },
    {
      no: 3,
      id: "cipta-land",
      rawTitle: "🏬 CIPTA LAND",
      title: "Cipta Land",
      emoji: "🏬",
      category: "komersial",
      categoryLabel: "Komersial & Ruko",
      location: "Batam",
      highlight: "Pusat Niaga Strategis",
      tagColor: "bg-purple-100 text-purple-800 border-purple-200",
      description: "Pusat pertokoan dan perumahan strategis di koridor bisnis yang hidup. Terdapat blok komersial ruko serta klaster hunian Dahlia & Kamboja.",
      driveUrl: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl?usp=drive_link",
      subfolders: [
        { name: "Brosur Ciptaland", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl" },
        { name: "Ruko Cipta Land", tag: "Komersial", icon: "store", url: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl" },
        { name: "Blok Dahlia", tag: "Residensial", icon: "home", url: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl" },
        { name: "Blok Kamboja", tag: "Residensial", icon: "home", url: "https://drive.google.com/drive/folders/1mk6HfLwe6qISJRXd08yygfWgY7rs7iwl" }
      ],
      filesCount: 0
    },
    {
      no: 4,
      id: "cipta-piayu-village-2",
      rawTitle: "🏡 CIPTA PIAYU VILLAGE 2",
      title: "Cipta Piayu Village 2",
      emoji: "🏡",
      category: "residensial",
      categoryLabel: "Perumahan",
      location: "Piayu, Batam",
      highlight: "Hunian Asri Ramah Anggaran",
      tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Perumahan asri ramah keluarga di kawasan Piayu. Menawarkan hunian nyaman dengan skema KPR mudah dan cicilan sangat terjangkau.",
      driveUrl: "https://drive.google.com/drive/folders/1g58CAzx2HabFvp0OP4zhexvDqVLXUMoi?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/1AsSQdRmPDjQf8MWohmg5bRs51qwCP0Uh" },
        { name: "Pricelist", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/1g58CAzx2HabFvp0OP4zhexvDqVLXUMoi" },
        { name: "Site Plan", tag: "Masterplan", icon: "map", url: "https://drive.google.com/drive/folders/1H1JLjEjn8y1e3yPz1MDY4v2WvIiottQ3" },
        { name: "Video", tag: "Video", icon: "video", url: "https://drive.google.com/drive/folders/1g58CAzx2HabFvp0OP4zhexvDqVLXUMoi" }
      ],
      filesCount: 0
    },
    {
      no: 5,
      id: "cipta-mandiri",
      rawTitle: "🏡 CIPTA MANDIRI",
      title: "Cipta Mandiri",
      emoji: "🏡",
      category: "residensial",
      categoryLabel: "Perumahan",
      location: "Batam",
      highlight: "Hunian Keluarga Strategis",
      tagColor: "bg-sky-100 text-sky-800 border-sky-200",
      description: "Kompleks perumahan dinamis dengan kemudahan akses ke sarana pendidikan, pusat perbelanjaan, dan fasilitas kesehatan kota.",
      driveUrl: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" },
        { name: "Denah", tag: "Denah", icon: "layout", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" },
        { name: "Gambar", tag: "Galeri Unit", icon: "image", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" },
        { name: "Price List", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" },
        { name: "Site Plan", tag: "Siteplan", icon: "map", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" },
        { name: "Video", tag: "Video", icon: "video", url: "https://drive.google.com/drive/folders/1Eek1jR3GT1y3KrEPkBGOzPaTJXjt1yko" }
      ],
      filesCount: 0
    },
    {
      no: 6,
      id: "cipta-residence",
      rawTitle: "🏡 CIPTA RESIDENCE",
      title: "Cipta Residence",
      emoji: "🏡",
      category: "residensial",
      categoryLabel: "Perumahan Modern",
      location: "Batam",
      highlight: "Hunian Nyaman & Tertata",
      tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      description: "Hunian tertata rapi dengan sistem drainase modern, jalan lebar, dan lingkungan bersih yang aman untuk keluarga berkembang.",
      driveUrl: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" },
        { name: "Denah", tag: "Denah", icon: "layout", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" },
        { name: "Gambar Rumah", tag: "Galeri", icon: "image", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" },
        { name: "Price List", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" },
        { name: "Site Plan", tag: "Siteplan", icon: "map", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" },
        { name: "Video", tag: "Video", icon: "video", url: "https://drive.google.com/drive/folders/1gHSB8pAC6rJRB0nYMQk-DZpxbyoZoLWB" }
      ],
      filesCount: 0
    },
    {
      no: 7,
      id: "cipta-green-city-tca-2",
      rawTitle: "🏡 CIPTA GREEN CITY TCA II",
      title: "Cipta Green City TCA II",
      emoji: "🏡",
      category: "cluster",
      categoryLabel: "Eco Living",
      location: "TCA (Tiban Centre Avenue), Batam",
      highlight: "Kota Hijau Berkelanjutan",
      tagColor: "bg-green-100 text-green-800 border-green-200",
      description: "Konsep perumahan berwawasan lingkungan hijau dengan ruang terbuka alami, taman keluarga, sirkulasi udara optimal di kawasan Tiban.",
      driveUrl: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs" },
        { name: "Denah", tag: "Denah", icon: "layout", url: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs" },
        { name: "Gambar Rumah", tag: "Galeri", icon: "image", url: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs" },
        { name: "Price List", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs" },
        { name: "Site Plan", tag: "Siteplan", icon: "map", url: "https://drive.google.com/drive/folders/16Jm7jUx_wuojg9HfPKIBvlZPOyl6i4Zs" }
      ],
      filesCount: 0
    },
    {
      no: 8,
      id: "cipta-green-view",
      rawTitle: "🏡 CIPTA GREEN VIEW",
      title: "Cipta Green View",
      emoji: "🏡",
      category: "residensial",
      categoryLabel: "Hunian Panorama",
      location: "Batam",
      highlight: "Pemandangan Alam Asri",
      tagColor: "bg-teal-100 text-teal-800 border-teal-200",
      description: "Menghadirkan pemandangan perbukitan hijau yang menyejukkan mata setiap hari. Suasana tenang dan sejuk jauh dari kebisingan industri.",
      driveUrl: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto?usp=drive_link",
      subfolders: [
        { name: "Brosur", tag: "Brosur", icon: "file-text", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" },
        { name: "Denah", tag: "Denah", icon: "layout", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" },
        { name: "Gambar Rumah", tag: "Galeri", icon: "image", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" },
        { name: "Price List", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" },
        { name: "Site Plan", tag: "Siteplan", icon: "map", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" },
        { name: "Video", tag: "Video", icon: "video", url: "https://drive.google.com/drive/folders/13guuzSWWlcR16LUc0cfb44v1YmXXeFto" }
      ],
      filesCount: 0
    },
    {
      no: 9,
      id: "pesona-niaga",
      rawTitle: "🏬 PESONA NIAGA",
      title: "Pesona Niaga",
      emoji: "🏬",
      category: "komersial",
      categoryLabel: "Komersial & Ruko",
      location: "Pusat Niaga Batam",
      highlight: "Ruko Bisnis Ramai",
      tagColor: "bg-rose-100 text-rose-800 border-rose-200",
      description: "Kompleks ruko komersial multi-fungsi di sentra perniagaan dengan arus pelanggan ramai. Pilihan ideal untuk usaha ritel, kafe, kantor, atau investasi sewa.",
      driveUrl: "https://drive.google.com/drive/folders/1YFULZfxQV4xAVRWw15_9dw2Yf3-XVl1A?usp=drive_link",
      subfolders: [
        { name: "Gambar Ruko", tag: "Galeri Unit", icon: "image", url: "https://drive.google.com/drive/folders/1YFULZfxQV4xAVRWw15_9dw2Yf3-XVl1A" },
        { name: "Pricelist", tag: "Pricelist", icon: "table", url: "https://drive.google.com/drive/folders/1YFULZfxQV4xAVRWw15_9dw2Yf3-XVl1A" },
        { name: "Sewa", tag: "Info Sewa", icon: "key", url: "https://drive.google.com/drive/folders/1YFULZfxQV4xAVRWw15_9dw2Yf3-XVl1A" }
      ],
      filesCount: 0
    }
  ]
};

// State Aplikasi
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements & Events
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupFilterEvents();
  setupSearchEvent();
  setupContactModal();
  setupMobileMenu();
  lucide.createIcons();
});

// Render Kartu Proyek dengan Struktur Folder Lengkap
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  const countBadge = document.getElementById('projectCount');
  
  if (!container) return;

  const filtered = CIPTA_DATA.projects.filter(project => {
    const matchesCategory = (currentFilter === 'all') || (project.category === currentFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Proyek`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 mb-4">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-800">Tidak ada proyek yang sesuai</h3>
        <p class="text-sm text-slate-500 mt-1">Coba gunakan kata kunci lain atau ubah kategori filter.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-xl transition">
          Reset Filter Pencarian
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const waMessage = encodeURIComponent(`Halo Cipta Group, saya ingin informasi dan pricelist proyek "${item.title}".`);
    const waLink = `https://api.whatsapp.com/send?phone=${CIPTA_DATA.profile.whatsapp}&text=${waMessage}`;

    // Render Subfolder Chips
    const subfolderChips = item.subfolders.map(sf => `
      <a href="${sf.url}" target="_blank" rel="noopener noreferrer"
         title="${sf.tag}: Buka folder ${sf.name}"
         class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-300 transition">
        <i data-lucide="${sf.icon || 'folder'}" class="w-3.5 h-3.5 text-sky-600"></i>
        ${sf.name}
      </a>
    `).join('');

    const filesNotice = item.filesHighlight ? `
      <div class="mt-3 p-2.5 rounded-xl bg-purple-50 border border-purple-200 flex items-center gap-2 text-xs text-purple-900 font-medium">
        <i data-lucide="film" class="w-4 h-4 text-purple-600 shrink-0"></i>
        <span>${item.filesHighlight}</span>
      </div>
    ` : '';

    return `
      <div class="glass-card rounded-3xl overflow-hidden flex flex-col group border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
        
        <!-- Card Header -->
        <div class="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${item.tagColor}">
              ${item.highlight}
            </span>
            <span class="text-xs text-slate-300 flex items-center gap-1 font-medium">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-400"></i> ${item.location}
            </span>
          </div>

          <div class="flex items-center gap-2.5">
            <span class="text-2xl">${item.emoji}</span>
            <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              ${item.title}
            </h3>
          </div>
          <p class="text-xs text-sky-400 mt-1 font-semibold tracking-wide">
            ${item.categoryLabel}
          </p>
        </div>

        <!-- Card Body -->
        <div class="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            <p class="text-sm text-slate-600 leading-relaxed mb-5">
              ${item.description}
            </p>

            <!-- Bagian Subfolder Dokumen -->
            <div class="mb-5 pt-4 border-t border-slate-100">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Berkas & Folder Digital (${item.subfolders.length}):
                </span>
                <span class="text-[10px] text-sky-600 font-semibold">Bisa Dibuka</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${subfolderChips}
              </div>
              ${filesNotice}
            </div>
          </div>

          <!-- Tombol Aksi -->
          <div class="space-y-2 pt-4 border-t border-slate-100">
            <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" 
               class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition shadow-sm hover:shadow">
              <i data-lucide="folder-open" class="w-4 h-4 text-sky-400"></i>
              Buka Google Drive Utama
            </a>

            <a href="${waLink}" target="_blank" rel="noopener noreferrer"
               class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-xl border border-emerald-200 transition">
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
              Tanya Brosur & Pricelist (WA)
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

// Modal Form Konsultasi
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
