const revealables = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealables.forEach((node) => observer.observe(node));

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
  };

  const orbs = [
    { node: document.querySelector(".motion-orb--one"), dx: 0, dy: 0, tx: 0, ty: 0, scale: 1.06, factor: 0.018 },
    { node: document.querySelector(".motion-orb--two"), dx: 0, dy: 0, tx: 0, ty: 0, scale: 1.18, factor: 0.024 },
    { node: document.querySelector(".motion-orb--three"), dx: 0, dy: 0, tx: 0, ty: 0, scale: 0.92, factor: 0.028 },
  ].filter((item) => item.node);

  const streak = document.querySelector(".light-streak");
  const tiltNodes = Array.from(document.querySelectorAll("[data-tilt]")).map((node) => ({
    node,
    depth: Number(node.dataset.depth || 1),
    rx: 0,
    ry: 0,
  }));

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  window.addEventListener("deviceorientation", (event) => {
    if (typeof event.gamma !== "number" || typeof event.beta !== "number") {
      return;
    }

    pointer.x = window.innerWidth * 0.5 + event.gamma * 12;
    pointer.y = window.innerHeight * 0.5 + event.beta * 10;
  });

  const animate = () => {
    const cx = window.innerWidth * 0.5;
    const cy = window.innerHeight * 0.5;
    const px = pointer.x - cx;
    const py = pointer.y - cy;
    const scrollShift = window.scrollY * 0.03;

    orbs.forEach((orb, index) => {
      orb.tx = px * orb.factor;
      orb.ty = py * orb.factor - scrollShift * (index + 1) * 0.18;
      orb.dx += (orb.tx - orb.dx) * 0.06;
      orb.dy += (orb.ty - orb.dy) * 0.06;
      orb.node.style.transform = `translate3d(${orb.dx}px, ${orb.dy}px, 0) scale(${orb.scale})`;
    });

    if (streak) {
      const sx = px * 0.012;
      const sy = py * 0.01 - scrollShift * 0.4;
      streak.style.transform = `translate3d(${sx}px, ${sy}px, 0) rotate(-10deg)`;
    }

    tiltNodes.forEach((item) => {
      const rect = item.node.getBoundingClientRect();
      const localX = clamp((pointer.x - (rect.left + rect.width / 2)) / rect.width, -0.5, 0.5);
      const localY = clamp((pointer.y - (rect.top + rect.height / 2)) / rect.height, -0.5, 0.5);
      const targetRy = localX * 14 * item.depth;
      const targetRx = -localY * 12 * item.depth;

      item.ry += (targetRy - item.ry) * 0.08;
      item.rx += (targetRx - item.rx) * 0.08;
      item.node.style.transform = `perspective(1200px) rotateX(${item.rx}deg) rotateY(${item.ry}deg) translate3d(0, 0, 0)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
}
