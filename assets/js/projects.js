// ============================================================
//  PROJECTS DATA
//  Add, remove, or edit projects here.
//  Images/GIFs go in assets/images/whistle/
//
//  media types: "image" | "gif" | "video" | "youtube"
//  categories: array — any combo of:
//    "gameplay" | "environment" | "programming" | "tech-art" | "prototype"
//  gallery: optional array of { src, caption } shown in the modal below the video
// ============================================================

const PROJECTS = [
  {
    id: 1,
    title: "Whistle",
    summary: "An open-world platformer built in C++ — featuring a GPU foliage tracking system, modular input buffer, custom player movement, and a Universal Occlusion Mask.",
    description: `Whistle was a university project built in collaboration with a small team of classmates. All game-side work was done by me — level design, tech art, music composition and implementation, coding, and systems architecture. The art assets were contributed by other team members. I plan to continue developing the project independently, replacing external assets and publishing a full release.\n\nThe two features I'm most proud of are a GPU-based foliage growing system that drives real-time environmental storytelling, and a Universal Occlusion Mask that dynamically keeps the player visible regardless of geometry — a tricky technical problem that required a custom material solution.`,
    categories: ["gameplay", "programming", "environment", "tech-art"],
    tags: ["Unreal Engine 5", "C++", "Tech Art", "Level Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/PZnZo3tKxfw",
    },
    gallery: [
      { src: "assets/images/whistle/Whistle.gif",         caption: "Whistle" },
      { src: "assets/images/whistle/GrowingPlats.gif",    caption: "Growing platforms" },
      { src: "assets/images/whistle/mycel.gif",           caption: "Mycelium spread system" },
      { src: "assets/images/whistle/Occlusion.gif",       caption: "Universal Occlusion Mask" },
      { src: "assets/images/whistle/Animation2.gif",         caption: "BioDome environment" },
      { src: "assets/images/whistle/Animation1.gif",     caption: "Undergrowth" },
      { src: "assets/images/whistle/Bouncy.gif",          caption: "Bouncy physics" },
      { src: "assets/images/whistle/Jumping.gif",         caption: "Jump mechanics" },
      { src: "assets/images/whistle/Grindrail.gif",       caption: "Grind rail system" },
      { src: "assets/images/whistle/short.gif",           caption: "GPU Foliage" },
      { src: "assets/images/whistle/1.webp",              caption: "" },
      { src: "assets/images/whistle/2.webp",              caption: "" },
      { src: "assets/images/whistle/3.webp",              caption: "" },
      { src: "assets/images/whistle/4.jpg",               caption: "" },
      { src: "assets/images/whistle/01gUlcOLQCSEQTJPdAElNjJXT4nl5YUlbDSV48-i9iI.gif", caption: "" },
      { src: "assets/images/whistle/2GZtN6Pq7mQRUDCgFcv_R2ewT-FHiZJJRTrop4G5MVc.gif", caption: "" },
      { src: "assets/images/whistle/3x-71vG6j6XTPEGO5xyzF8TJdkeEFkUSbTPDYMtGjuM.gif", caption: "" },
      { src: "assets/images/whistle/Da81M1y6Zk5cFVbQqPYNMQAk9jLBMyqY2BOra5bsBJI.gif", caption: "" },
      { src: "assets/images/whistle/EESs2jHbn90kUS-Acc9keocp3IU6whZO3HGwySrm2MU.gif", caption: "" },
      { src: "assets/images/whistle/GL5cPNnOKiEjy428eTPcNjCF5zSY8YuAbBfBr3TITlg.gif", caption: "" },
      { src: "assets/images/whistle/IjTwka4MQCcxwifsSN8Cxrpw65pBWEMXk1aX70FpfL4.gif", caption: "" },
      { src: "assets/images/whistle/mhYQIRVIWvocg-fdcIU_wcABFcH6TrU3Ht3c2og4yWw.gif", caption: "" },
      { src: "assets/images/whistle/o8NFaVw0PYvgnr3sGNvcjl_8NgbfcuY_FQLPi5x6Tt8.gif", caption: "" },
      { src: "assets/images/whistle/OiFOD-KTtbyR2PC4rugVDMyltDdYmWKSz6HB9Vmoj9I.gif", caption: "" },
      { src: "assets/images/whistle/P3M1S_4M0VJpP75mReH9bpnDcvve3eqmFXs19h6IJnc.gif", caption: "" },
      { src: "assets/images/whistle/PeEEPlzs1k-mvCoHk9kESTXm0DkVJEPl4bB8VNS2FNw.gif", caption: "" },
      { src: "assets/images/whistle/vP6R5I0gDCMroMi6EOgeLpqc-ZqY2uRkk1G0mcCwdQ0.gif", caption: "" },
      { src: "assets/images/whistle/_akw08fnbUS6Vrp8X4_-aSC4vfPW2v6aDSOZrlj5Uno.gif", caption: "" },
    ],
    details: [
      { label: "Role",   value: "Solo (game side)" },
      { label: "Team",   value: "University collaboration" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Status", value: "In development" },
    ],
    links: [],
  },

  // ---- ADD MORE PROJECTS BELOW ----
  // Copy the block above, give it a new id, and fill in your details.
];

// ============================================================
//  RENDER — you don't need to edit below this line
// ============================================================

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p =>
        Array.isArray(p.categories)
          ? p.categories.includes(filter)
          : p.category === filter
      );

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--mid); grid-column:1/-1;">No projects in this category yet.</p>`;
    return;
  }

  filtered.forEach((project, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.dataset.id = project.id;

    const thumb = buildThumb(project.media, 'thumb');

    card.innerHTML = `
      ${thumb}
      <div class="project-info">
        <div class="project-tags">
          ${project.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
      </div>
      <div class="project-arrow">→</div>
    `;

    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

function buildThumb(media, context) {
  if (!media || !media.src) {
    return `<div class="project-thumb-placeholder">Add image</div>`;
  }

  if (media.type === 'youtube') {
    if (context === 'thumb') {
      const videoId = media.src.split('/embed/')[1];
      return `<div class="project-thumb">
        <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="Project thumbnail" loading="lazy" />
      </div>`;
    }
    return `<iframe src="${media.src}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
  }

  if (media.type === 'video') {
    return `<video src="${media.src}" ${context === 'modal' ? 'controls' : 'autoplay muted loop playsinline'} style="width:100%;height:100%;object-fit:cover;"></video>`;
  }

  return `<div class="project-thumb"><img src="${media.src}" alt="Project thumbnail" loading="lazy" /></div>`;
}

function buildGallery(gallery) {
  if (!gallery || gallery.length === 0) return '';

  const items = gallery.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.caption || ''}" loading="lazy" />
      ${item.caption ? `<p class="gallery-caption">${item.caption}</p>` : ''}
    </div>
  `).join('');

  return `<div class="modal-gallery">${items}</div>`;
}

function openModal(project) {
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent = project.description;

  document.getElementById('modalTags').innerHTML = project.tags
    .map(t => `<span class="tag">${t}</span>`).join('');

  document.getElementById('modalMedia').innerHTML = buildThumb(project.media, 'modal');

  document.getElementById('modalDetails').innerHTML = (project.details || [])
    .map(d => `<div class="modal-detail-item"><label>${d.label}</label><span>${d.value}</span></div>`)
    .join('');

  document.getElementById('modalLinks').innerHTML = (project.links || [])
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn-ghost">${l.label} ↗</a>`)
    .join('');

  const galleryEl = document.getElementById('modalGallery');
  if (galleryEl) galleryEl.innerHTML = buildGallery(project.gallery);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

renderProjects();
