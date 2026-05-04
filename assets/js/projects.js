// ============================================================
//  PROJECTS DATA
//  Add, remove, or edit projects here.
//  Images/GIFs go in assets/images/
//
//  media types: "image" | "gif" | "video" | "youtube"
//  categories: "gameplay" | "environment" | "prototype" (used for filtering)
// ============================================================

const PROJECTS = [
  {
    id: 1,
    title: "Project Title One",
    summary: "A short one-liner that appears on the card.",
    description: `A longer description for the modal. Talk about the gameplay systems, technical challenges you overcame, what you learned, and what you're proud of. This can be a few sentences to a paragraph.`,
    category: "gameplay",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    media: {
      type: "image",          // "image" | "gif" | "video" | "youtube"
      src: "assets/images/project1-thumb.jpg",   // path to your image/gif
      // For youtube: src: "https://www.youtube.com/embed/VIDEO_ID"
    },
    details: [
      { label: "Role",     value: "Solo Developer" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Duration", value: "3 months" },
      { label: "Year",     value: "2024" },
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/yourusername/project1" },
      { label: "Play on itch.io", url: "https://itch.io/..." },
    ],
  },

  {
    id: 2,
    title: "Environment Showcase",
    summary: "A photoreal environment built with Nanite, Lumen, and procedural foliage.",
    description: `Describe the environment project here. What was your inspiration? What techniques did you use for lighting, landscape, or vegetation? Did you create your own materials?`,
    category: "environment",
    tags: ["Unreal Engine 5", "Nanite", "Lumen", "Environment Art"],
    media: {
      type: "gif",
      src: "assets/images/project2-demo.gif",
    },
    details: [
      { label: "Role",     value: "Environment Artist" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Duration", value: "6 weeks" },
      { label: "Year",     value: "2024" },
    ],
    links: [
      { label: "ArtStation Post", url: "https://www.artstation.com/..." },
    ],
  },

  {
    id: 3,
    title: "Prototype: Parkour Mechanics",
    summary: "A rapid movement system prototype exploring wall-running and vaulting.",
    description: `Describe what you built and why. What was the design goal? What was the trickiest technical aspect? This is a great place to explain Blueprints vs C++ decisions, performance considerations, or design iterations.`,
    category: "prototype",
    tags: ["C++", "Animation Blueprint", "Character Movement"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video ID
    },
    details: [
      { label: "Role",     value: "Programmer" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Duration", value: "2 weeks" },
      { label: "Year",     value: "2023" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/parkour-prototype" },
    ],
  },

  {
    id: 4,
    title: "University Final Project",
    summary: "My capstone project — a [genre] game built over [duration] with a team of [n].",
    description: `Describe your degree project here. Context on the brief, team size, your specific responsibilities, and the outcome. Did you win any awards or get shown at a showcase?`,
    category: "gameplay",
    tags: ["Unreal Engine 5", "Team Project", "Game Design"],
    media: {
      type: "image",
      src: "assets/images/project4-thumb.jpg",
    },
    details: [
      { label: "Role",     value: "Lead Programmer" },
      { label: "Team",     value: "4 people" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Year",     value: "2024" },
    ],
    links: [
      { label: "Download on itch.io", url: "https://itch.io/..." },
    ],
  },
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
    : PROJECTS.filter(p => p.category === filter);

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

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

renderProjects();
