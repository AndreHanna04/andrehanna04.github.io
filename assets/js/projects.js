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
    videos: [
      { src: "https://www.youtube.com/embed/PZnZo3tKxfw" },
    ],
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
      { src: "assets/images/whistle/Da81M1y6Zk5cFVbQqPYNMQAk9jLBMyqY2BOra5bsBJI.gif", caption: "" },
      { src: "assets/images/whistle/EESs2jHbn90kUS-Acc9keocp3IU6whZO3HGwySrm2MU.gif", caption: "" },
      { src: "assets/images/whistle/IjTwka4MQCcxwifsSN8Cxrpw65pBWEMXk1aX70FpfL4.gif", caption: "" },
      { src: "assets/images/whistle/mhYQIRVIWvocg-fdcIU_wcABFcH6TrU3Ht3c2og4yWw.gif", caption: "" },
      { src: "assets/images/whistle/OiFOD-KTtbyR2PC4rugVDMyltDdYmWKSz6HB9Vmoj9I.gif", caption: "" },
      { src: "assets/images/whistle/P3M1S_4M0VJpP75mReH9bpnDcvve3eqmFXs19h6IJnc.gif", caption: "" },
      { src: "assets/images/whistle/PeEEPlzs1k-mvCoHk9kESTXm0DkVJEPl4bB8VNS2FNw.gif", caption: "" },
      { src: "assets/images/whistle/vP6R5I0gDCMroMi6EOgeLpqc-ZqY2uRkk1G0mcCwdQ0.gif", caption: "" },
    ],
    highlights: [
      "GPU foliage tracking system — real-time environmental storytelling",
      "Universal Occlusion Mask via custom material node graph",
      "Modular C++ input buffer with extensible architecture",
      "Solo game-side owner: code, level design, tech art, and audio",
    ],
    details: [
      { label: "Role",     value: "Solo (game side)" },
      { label: "Team",     value: "University collaboration" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Duration", value: "6 months" },
      { label: "Status",   value: "In development" },
    ],
    links: [],
  },

  {
    id: 2,
    title: "Environmental Design & Creation",
    summary: "A custom stylized landscape featuring reversed gravity, GPU-optimised grass cards, runtime virtual textures, and upward-flowing water — built for a class but pushed well beyond the brief.",
    description: `For a class we were required to make a landscape, but I decided to make custom grass for the project. I wanted to make the landscape interesting, so I designed a crater where something had hit. The site of the impact had its gravity reversed, and the flora grew over it. The water travels upwards and the trees grew while being pulled by the roots.\n\nThe grass cards were originally made in Houdini and a low poly grass card was made in Blender and then baked in Houdini. My goal for the grass was to make it seem as fluffy as possible while keeping it performant. The LOD transition between the low and high cards is quite subtle, but I feel another medium-resolution grass card would help.\n\nI used Runtime Virtual Textures to give colour to the plants from the world. I tried with the trees for a while but the pipeline I learned wasn't really efficient for this kind of fluffy tree — I'll make another at some point that fits this style more.`,
    categories: ["environment", "tech-art"],
    tags: ["Unreal Engine 5", "Houdini", "Tech Art", "Environment"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/VNVvwwr9Nx4",
    },
    videos: [
      { label: "Video 1", src: "https://www.youtube.com/embed/VNVvwwr9Nx4" },
      { label: "Video 2", src: "https://www.youtube.com/embed/4Qj8tVVD5Mo" },
    ],
    gallery: [
      { src: "assets/images/Environmental Design and creation/HighresScreenshot00000.png",                     caption: "" },
      { src: "assets/images/Environmental Design and creation/HighresScreenshot00001.png",                     caption: "" },
      { src: "assets/images/Environmental Design and creation/HighresScreenshot00004.png",                     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-image-2025-04-13-202935282.jpg",     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-image-2025-04-13-202904279.jpg",     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-image-2025-04-13-204925618.jpg",     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-image-2024-10-29-212516659.jpg",     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-image-2024-10-29-213911343.jpg",     caption: "" },
      { src: "assets/images/Environmental Design and creation/andre-hanna-screenshot-2024-10-29-201020.jpg",   caption: "" },
    ],
    highlights: [
      "Custom grass pipeline: Houdini → Blender → UE5 with LOD transitions",
      "Runtime Virtual Textures for per-plant world colour blending",
      "Performance-first foliage: GPU-optimised cards across multiple LODs",
      "Environment concept: reversed gravity, upward water, inverted flora",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Tools",    value: "Houdini, Blender" },
      { label: "Duration", value: "1 trimester" },
      { label: "Status",   value: "Complete" },
    ],
    links: [],
  },

  {
    id: 3,
    title: "Multiplayer Game Dev",
    summary: "A zero-gravity chaos shooter built for a class project — with hitmarkers, UX meters, and a brutal amount of desync debugging across networked gameplay.",
    description: `This is a showcase of a multiplayer game I made for a class project. It was only required to be a simple shooter, but I decided to make a 0-gravity shooter with a focus on chaos and movement.\n\nThis project took an incredible amount of bug testing, iteration, and fixing. Things broke so often and I needed to recreate, analyse, and fix so many bugs. Programming a game for multiplayer adds such a large amount of complexity and that introduced so many UI issues, gameplay issues, and desync issues.\n\nI also had to focus more on player experience and add elements that improve the UX — things like hitmarkers and meters to help communicate more information to the player.\n\nI really like the concept of this project and I think it's something I could definitely work on again in the future.`,
    categories: ["gameplay", "programming"],
    tags: ["Unreal Engine 5", "Multiplayer", "C++", "Game Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/nHpZx92GBIo",
    },
    videos: [
      { src: "https://www.youtube.com/embed/nHpZx92GBIo" },
    ],
    gallery: [
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-recording-2024-10-30-094029.gif", caption: "" },
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-recording-2024-10-30-093416.gif", caption: "" },
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-image-2024-10-30-095355356.jpg",  caption: "" },
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-image-2024-10-30-095019345.jpg",  caption: "" },
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-image-2024-10-30-094945112.jpg",  caption: "" },
      { src: "assets/images/Multiplayer Game Dev/andre-hanna-image-2024-10-30-095206132.jpg",  caption: "" },
    ],
    highlights: [
      "Networked gameplay via Epic Online Services",
      "Diagnosed and resolved desync bugs across multiplayer sessions",
      "Custom UX systems: hitmarkers, meters, and player feedback loops",
      "Zero-gravity movement system designed around chaos and momentum",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Focus",    value: "Online Multiplayer" },
      { label: "Duration", value: "1 trimester" },
      { label: "Status",   value: "Complete" },
    ],
    links: [],
  },

  {
    id: 4,
    title: "Junkyard Drifter",
    summary: "A solo trash-world skating game made in 2 weeks for the Ubisoft 2024 AU/NZ Game Jam — a crash course in scope control, playtesting, and shipping under pressure.",
    description: `This was a small game I made solo for the Ubisoft 2024 AU/NZ Game Jam. The theme was trash so I made this little trash world skating game — built in 2 weeks while also juggling assignments and work.\n\nWhat did I learn from this? A lot. I learnt the importance of scope control, how vital playtesting is for a fun and working game, how important it is to be comfortable with your tools, how effective game planning can be and why I need to do it more.\n\nI had a lot of fun making this and I'm proud of what I made, especially since it was made alone — but there's definitely a lot of things I would change if I did this again.`,
    categories: ["gameplay", "prototype"],
    tags: ["Unreal Engine 5", "Solo", "Game Jam", "Prototype"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/W3cAsmOqk2A",
    },
    videos: [
      { src: "https://www.youtube.com/embed/W3cAsmOqk2A" },
    ],
    gallery: [
      { src: "assets/images/Junkyard Drifter/yt-gif-0m00s-0m02s.gif",                       caption: "" },
      { src: "assets/images/Junkyard Drifter/yt-gif-1m00s-1m05s.gif",                       caption: "" },
      { src: "assets/images/Junkyard Drifter/yt-gif-4m21s-4m26s.gif",                       caption: "" },
      { src: "assets/images/Junkyard Drifter/andre-hanna-screenshot-2024-04-12-225246.jpg",  caption: "" },
      { src: "assets/images/Junkyard Drifter/andre-hanna-screenshot-2024-04-12-225417.jpg",  caption: "" },
      { src: "assets/images/Junkyard Drifter/andre-hanna-screenshot-2024-04-12-225428.jpg",  caption: "" },
      { src: "assets/images/Junkyard Drifter/andre-hanna-screenshot-2024-04-12-231312.jpg",  caption: "" },
    ],
    highlights: [
      "Solo shipped under a 2-week hard deadline",
      "Scope control and feature prioritisation under jam pressure",
      "Playtesting-driven iteration for feel and fun",
      "Published and live on itch.io",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Event",    value: "Ubisoft Game Jam 2024" },
      { label: "Duration", value: "2 weeks" },
      { label: "Status",   value: "Complete" },
    ],
    links: [
      { label: "Play on itch.io ↗", url: "https://andopie.itch.io/junkworld-drifter" },
    ],
  },

  {
    id: 5,
    title: "Environment & Animation Test",
    summary: "An early UE5 modelling and animation test — something I'm really proud of visually and want to develop further in a future project.",
    description: `This was a short modelling and animation test I made during my early days of UE5. I'm really proud of the visual design and it's something I would like to pursue and develop in a future project.`,
    categories: ["environment", "tech-art"],
    tags: ["Unreal Engine 5", "Environment Art", "Animation"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/PLcNBPd3bbM",
    },
    videos: [
      { src: "https://www.youtube.com/embed/PLcNBPd3bbM" },
    ],
    gallery: [
      { src: "assets/images/Environment and Animation Test/andre-hanna-screenshot-2023-10-17-155736.jpg", caption: "" },
      { src: "assets/images/Environment and Animation Test/andre-hanna-screenshot-2023-10-17-155658.jpg", caption: "" },
      { src: "assets/images/Environment and Animation Test/andre-hanna-screenshot-2023-10-17-155615.jpg", caption: "" },
      { src: "assets/images/Environment and Animation Test/andre-hanna-screenshot-2023-10-19-163236.jpg", caption: "" },
      { src: "assets/images/Environment and Animation Test/andre-hanna-screenshot-2023-10-19-163226.jpg", caption: "" },
    ],
    highlights: [
      "UE5 environment modelling and Sequencer cinematic animation",
      "Strong visual design sensibility — stylised lighting and composition",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Focus",    value: "Environment & Animation" },
      { label: "Duration", value: "2 weeks" },
      { label: "Status",   value: "Complete" },
    ],
    links: [],
  },

  {
    id: 6,
    title: "3D Character Creation — Layton",
    summary: "A full character creation pipeline from scratch: concept to ZBrush sculpt, Maya retopo, Substance Painter texturing, and Unreal Engine 5 render — inspired by the Persona series.",
    description: `This collection shows the process behind a 3D character I designed and created from scratch. His name is Layton — inspired by the Persona series, which I had been playing at the time.\n\nThis was a class project completed within a single trimester while learning the full pipeline. I modelled in ZBrush and created a low-poly mesh using ZRemesher and Maya. I then imported it into Adobe Substance Painter 3D to texture it before rendering in Unreal Engine 5.\n\nI feel a lot more familiar with my tools now and much more comfortable with this kind of work.`,
    categories: ["tech-art"],
    tags: ["ZBrush", "Maya", "Substance Painter", "Unreal Engine 5"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/8SZgmuAD4Tc",
    },
    videos: [
      { src: "https://www.youtube.com/embed/8SZgmuAD4Tc" },
    ],
    gallery: [
      { src: "assets/images/3D Character Creation/andre-hanna-render.jpg",                    caption: "Final render" },
      { src: "assets/images/3D Character Creation/andre-hanna-ortho.jpg",                     caption: "Orthographic view" },
      { src: "assets/images/3D Character Creation/andre-hanna-screenshot-2024-05-07-181156.jpg", caption: "" },
      { src: "assets/images/3D Character Creation/andre-hanna-screenshot-2024-03-17-234314.jpg", caption: "" },
      { src: "assets/images/3D Character Creation/andre-hanna-screenshot-2024-02-07-195321.jpg", caption: "" },
    ],
    highlights: [
      "Full DCC pipeline: ZBrush sculpt → Maya retopo → Substance Painter → UE5",
      "ZRemesher low-poly workflow with manual Maya cleanup",
      "PBR texturing and material authoring in Substance Painter",
      "Solo pipeline execution completed within one trimester",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Tools",    value: "ZBrush, Maya, Substance Painter, UE5" },
      { label: "Focus",    value: "Character Creation" },
      { label: "Duration", value: "1 trimester" },
      { label: "Status",   value: "Complete" },
    ],
    links: [
      { label: "View on Sketchfab ↗", url: "https://sketchfab.com/3d-models/persona-style-character-with-eyes-7cb73197072d443f9e97108d7fc7a14d" },
    ],
  },

  {
    id: 7,
    title: "Of Rust",
    summary: "My very first Unreal Engine project — I made a lot of mistakes, but it was a fun experience and I'm really glad I made it.",
    description: `This was the first ever project I did to learn Unreal Engine. I made a lot of mistakes in it and I know better now — but overall it was a fun experience and I'm really glad I made it.`,
    categories: ["environment", "gameplay"],
    tags: ["Unreal Engine 5", "First Project", "Environment"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/3keUk2p77mE",
    },
    videos: [
      { src: "https://www.youtube.com/embed/3keUk2p77mE" },
    ],
    gallery: [
      { src: "assets/images/Of Rust/yt-gif-9m08s-9m13s.gif",                          caption: "" },
      { src: "assets/images/Of Rust/andre-hanna-screenshot-2023-08-20-220651.jpg",     caption: "" },
      { src: "assets/images/Of Rust/andre-hanna-screenshot-2023-08-20-220942.jpg",     caption: "" },
      { src: "assets/images/Of Rust/andre-hanna-screenshot-2023-08-19-002537.jpg",     caption: "" },
      { src: "assets/images/Of Rust/andre-hanna-screenshot-2023-08-20-220624.jpg",     caption: "" },
    ],
    highlights: [
      "Self-directed learning: built a complete UE5 project from scratch",
      "Foundation that launched all subsequent skill development",
    ],
    details: [
      { label: "Role",     value: "Solo" },
      { label: "Engine",   value: "Unreal Engine 5" },
      { label: "Focus",    value: "Learning Project" },
      { label: "Duration", value: "1 month" },
      { label: "Status",   value: "Complete" },
    ],
    links: [],
  },

  {
    id: 8,
    title: "Game Design Showcase",
    summary: "A puzzle-shooter hybrid built for a class project — featuring a custom puzzle system with designer tooling, and an Endoparasitic-inspired per-bullet manual reload mechanic.",
    description: `This showcases some game design choices I made while working on a class project. We needed to make a shooter but I decided to add puzzle elements and designed an entire puzzle system and created tools so that my groupmates could also create their own puzzles. I had to make player experience choices and I tried to make the puzzle system as intriguing as possible without allowing blind trial and error.\n\nI also created a cool reload system inspired by Endoparasitic where each bullet needs to be reloaded individually.`,
    categories: ["gameplay", "programming"],
    tags: ["Unreal Engine 5", "Game Design", "C++", "Systems Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/gM-z936xKCk",
    },
    videos: [
      { label: "Puzzle System", src: "https://www.youtube.com/embed/gM-z936xKCk" },
      { label: "Reload System", src: "https://www.youtube.com/embed/bnAExn0J0NY" },
    ],
    gallery: [],
    highlights: [
      "Designed a full puzzle system with custom editor tooling for teammates",
      "Per-bullet manual reload mechanic inspired by Endoparasitic",
      "Player experience design focused on eliminating blind trial and error",
      "Shooter/puzzle hybrid — extended a class brief into a distinct design direction",
    ],
    details: [
      { label: "Role",   value: "Designer & Programmer" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Focus",  value: "Game Design, Systems Design" },
      { label: "Status", value: "Complete" },
    ],
    links: [],
  },

  // ---- ADD MORE PROJECTS BELOW ----
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
  const modal = document.getElementById('modal');

  // Reset accent colour from any previous project
  modal.style.removeProperty('--modal-accent');
  modal.style.removeProperty('--modal-accent-dim');

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent  = project.description;

  document.getElementById('modalTags').innerHTML = project.tags
    .map(t => `<span class="tag">${t}</span>`).join('');

  // ---- Video cycling ----
  const videos = project.videos || [];
  let currentVideo = 0;

  function renderVideo(idx) {
    const v       = videos[idx];
    const mediaEl = document.getElementById('modalMedia');
    const showNav = videos.length > 1;
    mediaEl.innerHTML = `
      <iframe src="${v.src}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>
      ${showNav ? `<div class="modal-video-nav">
        <span class="modal-video-count">${idx + 1} / ${videos.length}${v.label ? ' — ' + v.label : ''}</span>
        <button class="modal-video-next">Next video →</button>
      </div>` : ''}
    `;
    if (showNav) {
      mediaEl.querySelector('.modal-video-next').addEventListener('click', () => {
        currentVideo = (currentVideo + 1) % videos.length;
        renderVideo(currentVideo);
      });
    }
  }

  if (videos.length > 0) {
    renderVideo(0);
  } else {
    document.getElementById('modalMedia').innerHTML = buildThumb(project.media, 'modal');
  }

  const highlightsEl = document.getElementById('modalHighlights');
  if (highlightsEl) {
    const hl = project.highlights || [];
    highlightsEl.innerHTML = hl.length
      ? `<div class="modal-highlights">
          <h4 class="modal-highlights-title">Skills Demonstrated</h4>
          <ul class="modal-highlights-list">
            ${hl.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>`
      : '';
  }

  document.getElementById('modalDetails').innerHTML = (project.details || [])
    .map(d => `<div class="modal-detail-item"><label>${d.label}</label><span>${d.value}</span></div>`)
    .join('');

  document.getElementById('modalLinks').innerHTML = (project.links || [])
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn-ghost">${l.label}</a>`)
    .join('');

  const galleryEl = document.getElementById('modalGallery');
  if (galleryEl) galleryEl.innerHTML = buildGallery(project.gallery);

  // ---- Dynamic accent colour from first non-GIF gallery image ----
  const firstImg = (project.gallery || []).find(g => !g.src.match(/\.gif$/i));
  if (firstImg) {
    extractModalColor(firstImg.src, (r, g, b) => {
      if (r === null) return;
      modal.style.setProperty('--modal-accent', `rgb(${r},${g},${b})`);
      modal.style.setProperty('--modal-accent-dim', `rgba(${r},${g},${b},0.12)`);
    });
  }

  modal.scrollTop = 0;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

const _colorCache = {};

function extractModalColor(src, cb) {
  if (_colorCache[src]) { cb(..._colorCache[src]); return; }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    try {
      const SIZE = 64;
      const canvas = document.createElement('canvas');
      canvas.width = SIZE; canvas.height = SIZE;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      const { data } = ctx.getImageData(0, 0, SIZE, SIZE);

      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      let bestSat = 0, bestR = 0, bestG = 0, bestB = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const luma = r * 0.299 + g * 0.587 + b * 0.114;
        if (luma < 20 || luma > 240) continue;
        sumR += r; sumG += g; sumB += b; count++;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const sat = max === 0 ? 0 : (max - min) / max;
        if (sat > bestSat) { bestSat = sat; bestR = r; bestG = g; bestB = b; }
      }

      if (count === 0) { cb(null); return; }

      const avgR = sumR / count, avgG = sumG / count, avgB = sumB / count;
      const t = bestSat > 0.2 ? 0.7 : 0;
      let fR = Math.round(bestR * t + avgR * (1 - t));
      let fG = Math.round(bestG * t + avgG * (1 - t));
      let fB = Math.round(bestB * t + avgB * (1 - t));

      const luma = fR * 0.299 + fG * 0.587 + fB * 0.114;
      if (luma < 90) {
        const boost = 90 / Math.max(luma, 1);
        fR = Math.min(255, Math.round(fR * boost));
        fG = Math.min(255, Math.round(fG * boost));
        fB = Math.min(255, Math.round(fB * boost));
      }

      _colorCache[src] = [fR, fG, fB];
      cb(fR, fG, fB);
    } catch { cb(null); }
  };
  img.onerror = () => cb(null);
  img.src = src;
}

renderProjects();
