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
    details: [
      { label: "Role",   value: "Solo" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Tools",  value: "Houdini, Blender" },
      { label: "Status", value: "Complete" },
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
    details: [
      { label: "Role",   value: "Solo" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Focus",  value: "Online Multiplayer" },
      { label: "Status", value: "Complete" },
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
    details: [
      { label: "Role",   value: "Solo" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Event",  value: "Ubisoft Game Jam 2024" },
      { label: "Status", value: "Complete" },
    ],
    links: [
      { label: "Play on itch.io ↗", url: "https://andopie.itch.io/junkworld-drifter" },
    ],
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

function extractModalColor(src, cb) {
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

      // Boost if too dark to read on the dark modal background
      const luma = fR * 0.299 + fG * 0.587 + fB * 0.114;
      if (luma < 90) {
        const boost = 90 / Math.max(luma, 1);
        fR = Math.min(255, Math.round(fR * boost));
        fG = Math.min(255, Math.round(fG * boost));
        fB = Math.min(255, Math.round(fB * boost));
      }

      cb(fR, fG, fB);
    } catch { cb(null); }
  };
  img.onerror = () => cb(null);
  img.src = src;
}

renderProjects();
