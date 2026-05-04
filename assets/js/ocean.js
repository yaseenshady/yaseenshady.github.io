(function () {
  'use strict';

  if (!window.THREE) return;

  const wrapper = document.getElementById('dive-wrapper');
  const canvas  = document.getElementById('ocean-canvas');
  if (!wrapper || !canvas) return;

  /* ── Scroll progress ─────────────────────────────────────────────── */
  let scrollProgress = 0;

  function readScroll() {
    const rect        = wrapper.getBoundingClientRect();
    const totalScroll = wrapper.offsetHeight - window.innerHeight;
    scrollProgress    = totalScroll <= 0 ? 0 : Math.max(0, Math.min(1, -rect.top / totalScroll));
  }

  window.addEventListener('scroll', readScroll, { passive: true });
  readScroll();

  /* ── Renderer ────────────────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping        = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;

  /* ── Scene / camera ──────────────────────────────────────────────── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 200);
  camera.position.set(0, 5.5, 9);
  camera.lookAt(0, 0, 0);

  /* ── Sky sphere ──────────────────────────────────────────────────── */
  const skyMesh = new THREE.Mesh(
    new THREE.SphereGeometry(90, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x000d1a, side: THREE.BackSide })
  );
  scene.add(skyMesh);

  /* ── Water surface ───────────────────────────────────────────────── */
  const SEGS    = 90;
  const waterGeo = new THREE.PlaneGeometry(70, 70, SEGS, SEGS);
  const waterMat = new THREE.MeshPhongMaterial({
    color:       0x005599,
    specular:    0x55ccff,
    shininess:   260,
    transparent: true,
    opacity:     0.9,
    side:        THREE.DoubleSide,
  });
  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.rotation.x = -Math.PI / 2;
  scene.add(waterMesh);

  /* Cache base positions for wave animation */
  const wavePos  = waterGeo.attributes.position;
  const waveBase = [];
  for (let i = 0; i < wavePos.count; i++) {
    waveBase.push({ x: wavePos.getX(i), y: wavePos.getY(i) });
  }

  /* ── Ocean floor ─────────────────────────────────────────────────── */
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(70, 70),
    new THREE.MeshPhongMaterial({ color: 0x000a15 })
  );
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.y = -22;
  scene.add(floorMesh);

  /* ── Bubbles ─────────────────────────────────────────────────────── */
  const BUBBLE_COUNT = 600;
  const bubbleGeo    = new THREE.BufferGeometry();
  const bPos         = new Float32Array(BUBBLE_COUNT * 3);
  const bSpeed       = new Float32Array(BUBBLE_COUNT);
  const bPhase       = new Float32Array(BUBBLE_COUNT);

  for (let i = 0; i < BUBBLE_COUNT; i++) {
    bPos[i * 3]     = (Math.random() - 0.5) * 28;
    bPos[i * 3 + 1] = -(Math.random() * 22);
    bPos[i * 3 + 2] = (Math.random() - 0.5) * 28;
    bSpeed[i] = 0.007 + Math.random() * 0.02;
    bPhase[i] = Math.random() * Math.PI * 2;
  }
  bubbleGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));

  const bubbleMesh = new THREE.Points(bubbleGeo, new THREE.PointsMaterial({
    color: 0x88eeff, size: 0.11, transparent: true, opacity: 0.75, sizeAttenuation: true,
  }));
  scene.add(bubbleMesh);

  /* ── Light shafts ────────────────────────────────────────────────── */
  const shaftGroup = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    const h   = 10 + Math.random() * 10;
    const geo = new THREE.CylinderGeometry(0.01, 1.4 + Math.random() * 0.8, h, 6, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x33aaff, transparent: true,
      opacity: 0.035 + Math.random() * 0.045,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const shaft = new THREE.Mesh(geo, mat);
    shaft.position.set(
      (Math.random() - 0.5) * 20, -(h / 2 + 0.5), (Math.random() - 0.5) * 20
    );
    shaft.rotation.x = Math.PI;
    shaft.rotation.z = (Math.random() - 0.5) * 0.35;
    shaftGroup.add(shaft);
  }
  scene.add(shaftGroup);

  /* ── Coral / reef geometry ───────────────────────────────────────── */
  const reefGroup  = new THREE.Group();
  const reefColors = [0x002211, 0x001133, 0x003322, 0x001144, 0x220011];
  for (let i = 0; i < 16; i++) {
    const h   = 1.8 + Math.random() * 5;
    const geo = new THREE.CylinderGeometry(
      0.04 + Math.random() * 0.12, 0.25 + Math.random() * 0.55, h, 5 + Math.floor(Math.random() * 3)
    );
    const mat  = new THREE.MeshPhongMaterial({ color: reefColors[i % reefColors.length] });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 30, -22 + h / 2, (Math.random() - 0.5) * 30
    );
    mesh.rotation.z = (Math.random() - 0.5) * 0.4;
    reefGroup.add(mesh);
  }
  scene.add(reefGroup);

  /* ── Fish particles ──────────────────────────────────────────────── */
  const FISH_COUNT = 120;
  const fishGeo   = new THREE.BufferGeometry();
  const fishPos   = new Float32Array(FISH_COUNT * 3);
  const fishSpeed = new Float32Array(FISH_COUNT);
  for (let i = 0; i < FISH_COUNT; i++) {
    fishPos[i * 3]     = (Math.random() - 0.5) * 30;
    fishPos[i * 3 + 1] = -(2 + Math.random() * 18);
    fishPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    fishSpeed[i] = 0.015 + Math.random() * 0.035;
  }
  fishGeo.setAttribute('position', new THREE.BufferAttribute(fishPos, 3));
  const fishMesh = new THREE.Points(fishGeo, new THREE.PointsMaterial({
    color: 0xffcc44, size: 0.18, transparent: true, opacity: 0.55, sizeAttenuation: true,
  }));
  scene.add(fishMesh);

  /* ── Lighting ────────────────────────────────────────────────────── */
  scene.add(new THREE.AmbientLight(0x0a1a33, 2.2));
  const sun = new THREE.DirectionalLight(0xffd060, 3.5);
  sun.position.set(8, 16, 6);
  scene.add(sun);
  const underGlow = new THREE.PointLight(0x0077cc, 2.5, 28);
  underGlow.position.set(0, -6, 0);
  scene.add(underGlow);
  const deepGlow = new THREE.PointLight(0x003366, 3, 20);
  deepGlow.position.set(0, -18, 0);
  scene.add(deepGlow);

  /* ── DOM refs ────────────────────────────────────────────────────── */
  const diverEl    = document.getElementById('diver-svg-wrap');
  const splashEl   = document.getElementById('dive-splash');
  const caption1   = document.getElementById('dive-cap-1');
  const caption2   = document.getElementById('dive-cap-2');
  const caption3   = document.getElementById('dive-cap-3');
  const scrollHint = document.querySelector('.dive-scroll-hint');

  /* ── Helpers ─────────────────────────────────────────────────────── */
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const fade  = (v, start, end) => clamp((v - start) / (end - start), 0, 1);

  /* ── Palette ─────────────────────────────────────────────────────── */
  const colorSurface = new THREE.Color(0x001828);
  const colorDeep    = new THREE.Color(0x00050e);

  /* ── Render loop ─────────────────────────────────────────────────── */
  let time = 0;

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    const p = scrollProgress;

    /* Waves */
    for (let i = 0; i < wavePos.count; i++) {
      const b = waveBase[i];
      wavePos.setZ(i,
        Math.sin(b.x * 0.55 + time * 1.1) * 0.34 +
        Math.sin(b.y * 0.42 + time * 0.8) * 0.24 +
        Math.sin((b.x + b.y) * 0.28 + time * 0.62) * 0.16 +
        Math.sin(b.x * 1.1 - b.y * 0.65 + time * 1.9) * 0.09
      );
    }
    wavePos.needsUpdate = true;
    waterGeo.computeVertexNormals();

    /* Bubbles rise */
    const bPosAttr = bubbleGeo.attributes.position;
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      let y = bPosAttr.getY(i) + bSpeed[i];
      const x = bPosAttr.getX(i) + Math.sin(time * 0.9 + bPhase[i]) * 0.005;
      if (y > 0.6) y = -(Math.random() * 22);
      bPosAttr.setX(i, x);
      bPosAttr.setY(i, y);
    }
    bPosAttr.needsUpdate = true;

    /* Fish drift */
    const fPosAttr = fishGeo.attributes.position;
    for (let i = 0; i < FISH_COUNT; i++) {
      let fx = fPosAttr.getX(i) + fishSpeed[i];
      if (fx > 16) fx = -16;
      fPosAttr.setX(i, fx);
      fPosAttr.setY(i, fPosAttr.getY(i) + Math.sin(time * 0.5 + i) * 0.003);
    }
    fPosAttr.needsUpdate = true;

    /* Shaft sway */
    shaftGroup.rotation.y = Math.sin(time * 0.18) * 0.07;

    /* Camera dive */
    const targetY = 5.5 - p * 24;
    const targetZ = 9   - p * 5.5;
    camera.position.y += (targetY - camera.position.y) * 0.06;
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    camera.lookAt(0, camera.position.y - 1.8, 0);

    /* Fog / sky color */
    const fogColor = new THREE.Color().lerpColors(colorSurface, colorDeep, clamp(p * 2, 0, 1));
    scene.fog = new THREE.FogExp2(fogColor.getHex(), 0.036 + p * 0.046);
    renderer.setClearColor(fogColor);

    /* Water opacity fades as camera plunges through */
    waterMat.opacity = Math.max(0.08, 0.9 - clamp((p - 0.22) * 4.5, 0, 1) * 0.82);

    /* Underwater glow */
    underGlow.intensity = 2.5 + p * 6;
    deepGlow.intensity  = 1   + p * 5;

    /* ── Diver SVG ── */
    if (diverEl) {
      if (p < 0.32) {
        // Arc in from top-right toward water surface
        const t  = p / 0.32;
        const ox = 62 - t * 24;          // 62vw → 38vw
        const oy = -8  + t * 46;         // -8vh → 38vh
        const rot = -50 + t * 100;       // -50° → 50°
        diverEl.style.opacity   = Math.min(t * 4, 1);
        diverEl.style.transform = `translate(${ox}vw, ${oy}vh) rotate(${rot}deg) scale(${0.6 + t * 0.4})`;
      } else if (p < 0.44) {
        // Entry / splash
        const t  = (p - 0.32) / 0.12;
        const oy = 38 + t * 28;
        diverEl.style.opacity   = clamp(1 - t * 0.7, 0, 1);
        diverEl.style.transform = `translate(38vw, ${oy}vh) rotate(${50 + t * 40}deg) scale(1)`;
      } else {
        diverEl.style.opacity = '0';
      }
    }

    /* Splash */
    if (splashEl) {
      const splashT = fade(p, 0.30, 0.38);
      const fadeOut = 1 - fade(p, 0.40, 0.48);
      splashEl.style.opacity   = splashT * fadeOut;
      splashEl.style.transform = `translate(-50%, -50%) scale(${0.5 + splashT * 2.2})`;
    }

    /* Captions */
    if (caption1) caption1.style.opacity = fade(p, 0.08, 0.22) * (1 - fade(p, 0.36, 0.44));
    if (caption2) caption2.style.opacity = fade(p, 0.50, 0.64) * (1 - fade(p, 0.78, 0.86));
    if (caption3) caption3.style.opacity = fade(p, 0.86, 0.96);

    /* Scroll hint */
    if (scrollHint) scrollHint.style.opacity = clamp(1 - p * 10, 0, 1);

    renderer.render(scene, camera);
  }

  animate();

  /* ── Resize ──────────────────────────────────────────────────────── */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
