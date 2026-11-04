const projects = [
  {
    title: "Embrace",
    tags: ["Narrative Systems", "Wearable Haptics", "Physical Computing"],
    highlights: [
      "2024 Laval Virtual #Revolution Award",
      "2024 Laval Virtual #SIGGRAPH Special Award",
      "Nominated 2024 Laval Virtual #XR For A Cause Award"
    ],
    desc: "Embrace is a VR and haptic device experience centered around anorexia nervosa that compresses player's waist and gives physical pressure.",
    cover: "media/Embrace.webp",
    // Optional extra sections shown in modal (right side)
    modaldesc: "Embrace is a VR haptic installation to show how psychological pressure about body image can feel like a physical sensation. The project uses wearable compression and a narrative VR experience to help people understand what it’s like to face anorexia and social expectations. \nI led the design and assembly of the haptic device, programmed system interactions in Unity, managed project development, and created the story-driven user experience. Wu I Hsuan, Chou Jen Jen, and Wu Tzu Hsuan handled the art and sound design.",
    gallery: [
      "media/2024-01-25 214842.png",
      "media/2024-01-25 214728.png",
      "media/ExperiencePicture.jpg",
      "media/embraceCollab.jpg",
      "media/Awards_2831-BD.jpg"
    ],
    resources: [
  {
    label: "Read the press feature ↗",
    url: "https://blog.laval-virtual.com/en/embrace-a-vr-experience-to-raise-awareness-of-anorexia-nervosa/"
  }
]
  },
  {
    title: "EmBelt",
    tags: ["Mechanical Design", "System Integration", "XR / VR"],
    highlights: [
      "SIGGRAPH 2024 Emerging Technologies Demonstration",
      "ACM SIGGRAPH Emerging Technologies Publication"
    ],
    desc: "EmBelt is a extended project from Embrace. Combining VR and an electronic belt-like haptic device, it aims to raise people's awareness on body image concerns and related eating disorders.",
    cover: "media/EmBelt.webp",
    modaldesc:"EmBelt built on Embrace by focusing the story around the belt and its compression feature. The virtual world became an all-black space, the view changed to first-person, and the device was made lighter and smaller. \nI led the redesign of the mechanics, system integration, and interaction logic. Tung-Yu Wu created the VR art and visuals, and Ting-Han Wu worked on the VR software.",    
    gallery: [
      "media/IMG_2866.JPG", "media/IMG_2048.jpg"
    ]
  },
        {
    title: "Multi-View Drone Evaluation",
    tags: ["HCI Research", "User Study", "Data Analysis"],
    highlights: [
      "2024 IEEM Department Project Exhibition #Outstanding Work"
    ],
    desc: "We carried out a research project to evaluate how well people recognize objects when using different drone control perspectives and interfaces. Our user experiments tested four UI variations that combined FPV and TPV on a PC interface.",
    cover: "media/newdroneDemo.webp",
    modaldesc: "This project explores how different drone control perspectives and interface designs impact object recognition. We created four user interface setups that use both first-person (FPV) and third-person (TPV) views with a PC-based control system. \nMy role included helping design the interface, setting up the experiment, building the testing system, and analyzing the results with ANOVA to see how viewpoint and interface setup affect recognition accuracy. ",
    gallery: [

    ],
    resources: [
      {
        label: "View research results (Chinese Mandarin) ↗",
        url: "https://drive.google.com/file/d/1VWq29b9UjwY4M5V6EmSWZ6kdU_UAKNRY/view?usp=sharing"
      }
    ]
  },
  {
    title: "Pen Picker",
    tags: ["Robotic Arm", "OpenCV", "Robot Manipulation"],
    highlights: [
    ],
    desc: "I used the RealSense SDK and OpenCV to detect and locate pens, then guided a Trossen Robotics PincherX 100 to reach and pick them up.",
    cover: "media/penVideo.webp",
    modaldesc:"Sizzler! is a hackathon project where our team explored a wearable, head-mounted interface for sensing and interaction. We worked together in a short, focused sprint to build a working prototype that combined mechanical structure, electronics, and system design. \nAlthough I was listed under Special Thanks because of health issues during the event, I helped with the mechanical design, especially the structural layout and making sure the wearable form was practical.",
    gallery: [

    ]
  },
    {
    title: "Haptic Keyboard",
    tags: ["Embedded Systems", "Sensor Integration", "Hardware Prototyping"],
    highlights: [
    ],
    desc: "Haptic Keyboard combines LRA and piezo actuator to create haptic feedback while Hall sensors beneath the switches detect key movement. It mimics the tactile feel of mechanical keyboards while allowing users to adjust key actuation points.",
    cover: "media/hapticKey.jpg"
  },
    {
    title: "AR Hand Gesture Controlled Drone",
    tags: ["AR", "Gesture Interaction", "Drone Control"],
    desc: "The project focuses on using hand gesture control to operate a drone through augmented reality (AR) to enhance productivity in manufacturing. The work involves synchronizing the drone with gesture recognition, fine-tuning the recognition thresholds, and managing video transmission, among other technical tasks.",
    cover: "media/ARDrone.webp",
    modaldesc:"This project explores using hand gestures and AR to control drones and improve productivity in manufacturing. The system links real-time gesture recognition with drone control, so operators can give commands easily without using standard controllers. \nMy role was to connect gesture input to drone actions, adjust recognition settings for better reliability, and handle live video feeds to help with situational awareness.",

  },
  {
    title: "塭底家 Home, Fish Farm",
    tags: ["Community Tech", "Interaction Design", "Unity"],
    highlights: [
      "Homecoming Entrepreneurship Contest finalist"
    ],
    desc: "Home, Fish Farm is a VR game designed to enhance the experience of visitors on the Fish Forest fish farm tour. Participants listen to a guide's narration while exploring the terrain, diverse fish species, and ecosystems within the fish farm.",
    cover: "media/fishfarmDemo.webp",
    modaldesc:"Home Fish Farm is an interactive VR experience that helps people learn about the environment and daily routines of a local fish farm through hands-on tasks. The project turns activities like feeding fish, checking pond conditions, and moving around the farm into short VR sessions that focus on learning by doing. \nI handled the system design, interaction design, and development in Unity, deciding how to present environmental details and local practices to users. ",
    gallery: [
      "media/IMG_6023.JPG", "media/IMG_7740.PNG", "media/IMG_6037_1_0.HEIC", "media/IMG_5999_5_0.HEIC"
    ]
  },
   
    {
    title: "Sizzler!",
    tags: ["BCI", "Wearable Systems", "Rapid Prototyping"],
    highlights: [
      "2025 MIT Reality Hack #Meta Honorable Mention"
    ],
    desc: "Sizzler! is a VR game powered by the OpenBCI Galea headset and Meta Quest 3. It detects alpha brainwaves to measure focus, letting players control the game with their concentration. No hands—just mind power.",
    cover: "media/gahleaDemo.webp",
    modaldesc:"Sizzler! is a hackathon project where our team explored a wearable, head-mounted interface for sensing and interaction. We worked together in a short, focused sprint to build a working prototype that combined mechanical structure, electronics, and system design. \nAlthough I was listed under Special Thanks because of health issues during the event, I helped with the mechanical design, especially the structural layout and making sure the wearable form was practical.",
    gallery: [
      "media/E28BA824-8541-45D8-AE54-EFA0D6BA8853.jpg", "media/IMG_8198 (1).jpg"
    ]
  },
 


    {
    title: "Helmo",
    tags: ["Embedded Systems", "Mobility Safety", "Prototyping"],
    highlights: [
      "IEEE World Haptics Conference 2025 Hands-On Demo"
    ],
    desc: "Helmo is a helmet-mounted haptic system that alerts scooter riders to vehicles in their blind spots using directional vibrations—enhancing safety without visual or audio distractions.",
    cover: "media/Helmo.webp",
    modaldesc:"Helmo is a wearable haptic helmet that helps riders stay aware of their surroundings by using touch-based feedback. The system was first created to test real-time distance sensing for spotting nearby vehicles and hazards. For the World Haptics Conference (WHC), we used a VR simulation to safely and reliably show different traffic situations and haptic signals.\nI led the system design and integration, covering the haptic hardware, control logic, interaction design, and Unity-based VR development. ",
    gallery: [
      "media/helmet_struc.png", "media/helmet_step.png"
    ]
  },

      {
    title: "EmBelt 2.0",
    tags: ["Sensing & Control", "Expert Evaluation", "User Research"],
    highlights: [
    ],
    desc: "EmBelt is a extended project from Embrace. Combining VR and an electronic belt-like haptic device, it aims to raise people's awareness on body image concerns and related eating disorders.",
    cover: "media/representativeImg.webp",
    modaldesc:"EmBelt 2.0 was created in response to feedback from users and experts, with a focus on making the device more reliable and improving the experience. \nI redesigned the hardware using dual-scroll gears and FSRs to keep compression consistent for different body sizes, and added haptic feedback to more areas, like the thighs. The VR content and pacing were also updated based on feedback from the exhibition. \nAn expert review with the University of Taipei Department of Counseling Psychology, including graduate students and faculty, led to more improvements and helped shift the target audience to psychology students and professionals who work with body image and eating disorders.",
    gallery: [
      "media/EmBelt_assembly.png"
    ]
  }
];

// DOM
const grid = document.getElementById("projectGrid");

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalBody = document.getElementById("modalBody");
const modalTitle = document.getElementById("modalTitle");
const modalChips = document.getElementById("modalChips");
const modalDesc = document.getElementById("modalDesc");
const modalGallery = document.getElementById("modalGallery");
const modalSections = document.getElementById("modalSections");


// Render grid
projects.forEach((p, idx) => {
  const block = document.createElement("article");
  block.className = "project";

  block.innerHTML = `
    <a class="project-click" role="button" tabindex="0" aria-label="Open project: ${escapeHtml(p.title)}">
      ${renderCoverMedia(p.cover, p.title)}

      <h3 class="project-title">${escapeHtml(p.title)}</h3>

      ${renderHighlights(p.highlights)}

      <p class="project-desc">${escapeHtml(p.desc)}</p>
            <div class="chips">
        ${p.tags.map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
      </div>
    </a>
  `;

  const clickable = block.querySelector(".project-click");
  clickable.addEventListener("click", (e) => { e.preventDefault(); openModal(idx); });
  clickable.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(idx); }
  });

  grid.appendChild(block);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("reveal"); });
}, { threshold: 0.18 });

document.querySelectorAll(".project").forEach(el => observer.observe(el));

// Modal open/close
function openModal(index){
  const p = projects[index];

  modalTitle.textContent = p.title;
  modalDesc.textContent = p.modaldesc || p.desc || "";

  modalChips.innerHTML = (p.tags || [])
    .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");

  // Clear the gallery first
  modalGallery.innerHTML = "";

  // Loop through gallery array
  if (p.gallery && p.gallery.length > 0) {
    p.gallery.forEach(src => {
      // Create a wrapper div for each media item
      const mediaWrapper = document.createElement("div");
      mediaWrapper.className = "gallery-item";
      
      // Use your existing helper to get the <img> or <video> string
      // and inject it as HTML
      mediaWrapper.innerHTML = renderCoverMedia(src, p.title);
      
      modalGallery.appendChild(mediaWrapper);
    });
  }

  // Handle optional sections and resource links
  modalSections.innerHTML = `
    ${(p.sections || []).map(s => `
      <h4>${escapeHtml(s.heading)}</h4>
      <p>${escapeHtml(s.text)}</p>
    `).join("")}

    ${(p.resources || []).map(r => `
      <p class="project-resource">
        <a href="${escapeHtml(r.url)}"
          target="_blank"
          rel="noopener noreferrer">
          ${escapeHtml(r.label)}
        </a>
      </p>
    `).join("")}
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalBody.scrollTop = 0;
}


function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  modalGallery.innerHTML = "";
  modalSections.innerHTML = "";
}


modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// Helpers
function renderHighlights(list){
  if (!list || !list.length) return "";
  return `
    <div class="project-highlights">
      ${list.map(h => `
        <div class="project-highlight">
          <i class="fa-solid fa-star"></i>
          <p>${escapeHtml(h)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderHighlightsHTML(list){
  if (!list || !list.length) return "";
  return list.map(h => `
    <div class="project-highlight">
      <i class="fa-solid fa-star"></i>
      <p>${escapeHtml(h)}</p>
    </div>
  `).join("");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCoverMedia(src, title){
  const safeTitle = escapeHtml(title);
  const ext = (String(src).split(".").pop() || "").toLowerCase();
  const isVideo = ["mp4", "webm", "ogg"].includes(ext);

  if (isVideo){
    const mime =
      ext === "webm" ? "video/webm" :
      ext === "ogg"  ? "video/ogg"  :
      "video/mp4";

    return `
      <video class="project-media"
             muted autoplay loop playsinline preload="metadata"
             aria-label="${safeTitle} preview video"
             onloadeddata="console.log('✅ video loaded:', '${src}')"
             onerror="console.error('❌ video error:', '${src}', this?.error)">
        <source src="${src}" type="${mime}">
      </video>
    `;
  }

  return `<img class="project-media" src="${src}" alt="${safeTitle} preview">`;
}

