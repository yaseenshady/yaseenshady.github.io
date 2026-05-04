const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const body = document.body;
const yearNode = select("#year");
const performanceToggle = select("[data-performance-toggle]");
const progressBar = select("[data-scroll-progress]");
const orbitStage = select("[data-platform-orbit]");
const particleField = select("[data-particles]");
const contributionGrid = select("[data-contribution-grid]");
const scrollScenes = selectAll("[data-scroll-scene]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const performanceStorageKey = "ys-performance-mode";

const readPerformanceMode = () => {
  try {
    return localStorage.getItem(performanceStorageKey);
  } catch {
    return null;
  }
};

const writePerformanceMode = (mode) => {
  try {
    localStorage.setItem(performanceStorageKey, mode);
  } catch {
    // Storage can be unavailable in private, embedded, or restricted contexts.
  }
};

const savedPerformanceMode = readPerformanceMode();
body.dataset.performance = savedPerformanceMode === "light" ? "light" : "full";

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const updatePerformanceButton = () => {
  if (!performanceToggle) {
    return;
  }

  const modeLabel = body.dataset.performance === "light" ? "Light" : "Full";
  performanceToggle.textContent = `Performance: ${modeLabel}`;
};

updatePerformanceButton();

if (performanceToggle) {
  performanceToggle.addEventListener("click", () => {
    const nextMode = body.dataset.performance === "light" ? "full" : "light";
    writePerformanceMode(nextMode);
    window.location.reload();
  });
}

const motionEnabled = !prefersReducedMotion && body.dataset.performance !== "light";

const buildParticles = () => {
  if (!particleField) {
    return;
  }

  const particleLayout = [
    { x: "8%", y: "20%", size: "4px", opacity: 0.34 },
    { x: "14%", y: "62%", size: "5px", opacity: 0.4 },
    { x: "22%", y: "12%", size: "3px", opacity: 0.28 },
    { x: "28%", y: "38%", size: "5px", opacity: 0.36 },
    { x: "35%", y: "76%", size: "4px", opacity: 0.26 },
    { x: "44%", y: "24%", size: "6px", opacity: 0.44 },
    { x: "52%", y: "56%", size: "4px", opacity: 0.32 },
    { x: "60%", y: "18%", size: "5px", opacity: 0.38 },
    { x: "66%", y: "72%", size: "4px", opacity: 0.28 },
    { x: "74%", y: "30%", size: "5px", opacity: 0.42 },
    { x: "81%", y: "14%", size: "4px", opacity: 0.3 },
    { x: "88%", y: "62%", size: "5px", opacity: 0.36 },
  ];

  const fragment = document.createDocumentFragment();

  particleLayout.forEach((particle) => {
    const dot = document.createElement("span");
    dot.style.setProperty("--x", particle.x);
    dot.style.setProperty("--y", particle.y);
    dot.style.setProperty("--size", particle.size);
    dot.style.setProperty("--opacity", String(particle.opacity));
    fragment.appendChild(dot);
  });

  particleField.replaceChildren(fragment);
};

const buildContributionGrid = () => {
  if (!contributionGrid) {
    return;
  }

  const cells = [];

  for (let row = 0; row < 7; row += 1) {
    for (let column = 0; column < 14; column += 1) {
      const value = (row * 3 + column * 5) % 4;
      const cell = document.createElement("span");
      cell.className = "contribution-cell";
      cell.dataset.level = String(value);
      cells.push(cell);
    }
  }

  contributionGrid.replaceChildren(...cells);
};

const setScrollProgress = () => {
  if (!progressBar) {
    return;
  }

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
};

const updateScrollScenes = () => {
  if (scrollScenes.length === 0) {
    return;
  }

  scrollScenes.forEach((scene) => {
    const rect = scene.getBoundingClientRect();
    const scrollable = Math.max(1, scene.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    const flash = Math.max(0, 1 - Math.abs(progress - 0.56) * 8);
    scene.style.setProperty("--scene-progress", progress.toFixed(4));
    scene.style.setProperty("--scene-flash", flash.toFixed(4));
  });
};

const positionOrbitChips = () => {
  if (!orbitStage) {
    return;
  }

  const track = select(".platform-orbit__track", orbitStage);
  const chips = selectAll("[data-orbit-chip]", orbitStage);

  if (!track || chips.length === 0) {
    return;
  }

  if (window.innerWidth <= 860) {
    chips.forEach((chip) => {
      chip.style.transform = "";
    });
    return;
  }

  const stageRect = orbitStage.getBoundingClientRect();
  const radius = Math.min(stageRect.width, stageRect.height) * 0.36;

  chips.forEach((chip, index) => {
    const angle = (Math.PI * 2 * index) / chips.length - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    chip.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
};

const setupTypedCommands = () => {
  const blocks = selectAll("[data-typed]");

  blocks.forEach((block) => {
    const output = select(".typed-command__output", block);
    if (!output) {
      return;
    }

    const messages = JSON.parse(block.dataset.typed || "[]");
    if (messages.length === 0) {
      return;
    }

    if (!motionEnabled) {
      output.textContent = messages[0];
      return;
    }

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
      const current = messages[messageIndex];
      output.textContent = isDeleting
        ? current.slice(0, charIndex - 1)
        : current.slice(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;

      let delay = isDeleting ? 26 : 42;

      if (!isDeleting && charIndex >= current.length) {
        isDeleting = true;
        delay = 1400;
      } else if (isDeleting && charIndex <= 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        delay = 340;
      }

      window.setTimeout(tick, delay);
    };

    tick();
  });
};

const setupTilt = () => {
  if (!motionEnabled || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  const tiltNodes = selectAll("[data-tilt]");
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  tiltNodes.forEach((node) => {
    const depth = Number(node.dataset.depth || 0.25);

    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
      const y = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
      const rotateY = x * 16 * depth;
      const rotateX = -y * 14 * depth;
      node.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, 0, 0)`;
    });

    node.addEventListener("pointerleave", () => {
      node.style.transform = "";
    });
  });
};

const setupFallbackReveals = () => {
  const nodes = selectAll(".js-reveal");
  if (nodes.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  nodes.forEach((node) => observer.observe(node));
};

const initGsapMotion = () => {
  if (!motionEnabled || !window.gsap || !window.ScrollTrigger) {
    setupFallbackReveals();
    return;
  }

  const { gsap } = window;
  const { ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const revealNodes = gsap.utils.toArray(".js-reveal");
  revealNodes.forEach((node) => {
    gsap.fromTo(
      node,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 86%",
          once: true,
        },
      }
    );
  });

  gsap.to("[data-parallax-layer]", {
    y: (index, element) => -window.innerHeight * Number(element.dataset.speed || 0.18),
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  gsap.to(".hero-ring--outer", {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 36,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".hero-ring--inner", {
    rotate: -360,
    transformOrigin: "50% 50%",
    duration: 24,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".hero-core__halo", {
    scale: 1.08,
    opacity: 0.84,
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-node", {
    y: (index) => (index % 2 === 0 ? -10 : 10),
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    stagger: 0.16,
    ease: "sine.inOut",
  });

  gsap.to(".particle-field span", {
    y: (index) => (index % 2 === 0 ? -18 : 16),
    x: (index) => (index % 3 === 0 ? 10 : -8),
    opacity: (index) => (index % 2 === 0 ? 0.62 : 0.24),
    duration: (index) => 3.6 + (index % 4) * 0.4,
    repeat: -1,
    yoyo: true,
    stagger: 0.08,
    ease: "sine.inOut",
  });

  const timelineSteps = gsap.utils.toArray("[data-timeline-step]");
  const timelineFill = select("[data-timeline-progress]");

  if (timelineFill) {
    gsap.fromTo(
      timelineFill,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-shell",
          start: "top 72%",
          end: "bottom 72%",
          scrub: true,
        },
      }
    );
  }

  timelineSteps.forEach((step) => {
    ScrollTrigger.create({
      trigger: step,
      start: "top center",
      end: "bottom center",
      onToggle: (state) => {
        step.classList.toggle("is-active", state.isActive);
      },
    });
  });

  gsap.from(".fragment-card", {
    x: (index) => (index % 2 === 0 ? -48 : 48),
    y: 54,
    autoAlpha: 0,
    duration: 0.9,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".problem-grid",
      start: "top 78%",
      once: true,
    },
  });

  gsap.from(".module-card", {
    y: 44,
    autoAlpha: 0,
    duration: 0.72,
    stagger: {
      each: 0.06,
      grid: "auto",
      from: "start",
    },
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".modules-grid",
      start: "top 82%",
      once: true,
    },
  });

  const graphCells = gsap.utils.toArray(".contribution-cell[data-level='2'], .contribution-cell[data-level='3']");
  if (graphCells.length > 0) {
    gsap.to(graphCells, {
      opacity: 0.76,
      scale: 1.04,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  }
};

buildParticles();
buildContributionGrid();
positionOrbitChips();
setupTypedCommands();
setupTilt();
setScrollProgress();
updateScrollScenes();
initGsapMotion();

// Safety net: force-reveal anything still hidden after 1.2s (covers GSAP CDN delays)
window.setTimeout(() => {
  selectAll(".js-reveal").forEach((node) => {
    // Strip any inline visibility/opacity/transform GSAP may have left behind
    node.style.visibility = "";
    node.style.opacity = "";
    node.style.transform = "";
    node.classList.add("is-visible");
  });
}, 1200);

window.addEventListener("resize", () => {
  positionOrbitChips();
  setScrollProgress();
  updateScrollScenes();
});

window.addEventListener("scroll", () => {
  setScrollProgress();
  updateScrollScenes();
}, { passive: true });
