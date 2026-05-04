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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  /* ── Scene / camera ──────────────────────────────────────────────── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 200);
  camera.position.set(0, 5.5, 9);
  camera.lookAt(0, 0, 0);

  /* ── Sky ─────────────────────────────────────────────────────────── */
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(90, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x000d1a, side: THREE.BackSide })
  ));

  /* ── Water surface ───────────────────────────────────────────────── */
  const SEGS    = 80;
  const waterGeo = new THREE.PlaneGeometry(70, 70, SEGS, SEGS);
  const waterMat = new THREE.MeshPhongMaterial({
    color: 0x005599, specular: 0x55ccff, shininess: 260,
    transparent: true, opacity: 0.9, side: THREE.DoubleSide,
  });
  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.rotation.x = -Math.PI / 2;
  scene.add(waterMesh);

  const wavePos  = waterGeo.attributes.position;
  const waveBase = [];
  for (let i = 0; i < wavePos.count; i++) {
    waveBase.push({ x: wavePos.getX(i), y: wavePos.getY(i) });
  }

  /* ── Ocean floor ─────────────────────────────────────────────────── */
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(70, 70),
    new THREE.MeshPhongMaterial({ color: 0x000a15 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -22;
  floor.receiveShadow = true;
  scene.add(floor);

  /* ── Bubbles ─────────────────────────────────────────────────────── */
  const BC   = 600;
  const bGeo = new THREE.BufferGeometry();
  const bPos = new Float32Array(BC * 3);
  const bSpd = new Float32Array(BC);
  const bPhs = new Float32Array(BC);
  for (let i = 0; i < BC; i++) {
    bPos[i*3]   = (Math.random() - 0.5) * 28;
    bPos[i*3+1] = -(Math.random() * 22);
    bPos[i*3+2] = (Math.random() - 0.5) * 28;
    bSpd[i] = 0.007 + Math.random() * 0.02;
    bPhs[i] = Math.random() * Math.PI * 2;
  }
  bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  const bubbles = new THREE.Points(bGeo, new THREE.PointsMaterial({
    color: 0x88eeff, size: 0.11, transparent: true, opacity: 0.75, sizeAttenuation: true,
  }));
  scene.add(bubbles);

  /* ── Light shafts ────────────────────────────────────────────────── */
  const shafts = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    const h  = 10 + Math.random() * 10;
    const sh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 1.4 + Math.random(), h, 6, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x33aaff, transparent: true,
        opacity: 0.03 + Math.random() * 0.04,
        side: THREE.DoubleSide, depthWrite: false,
      })
    );
    sh.position.set((Math.random()-0.5)*20, -(h/2+0.5), (Math.random()-0.5)*20);
    sh.rotation.x = Math.PI;
    sh.rotation.z = (Math.random()-0.5)*0.35;
    shafts.add(sh);
  }
  scene.add(shafts);

  /* ── Reef / coral garden ─────────────────────────────────────────── */
  const coralGroup = new THREE.Group();
  const coralMats = [
    new THREE.MeshPhongMaterial({ color: 0xff5d73, emissive: 0x26000a, shininess: 70 }),
    new THREE.MeshPhongMaterial({ color: 0xffb703, emissive: 0x241600, shininess: 64 }),
    new THREE.MeshPhongMaterial({ color: 0x35d0ba, emissive: 0x00241d, shininess: 80 }),
    new THREE.MeshPhongMaterial({ color: 0x7c3aed, emissive: 0x130820, shininess: 76 }),
  ];
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x07131d, specular: 0x12354f, shininess: 24 });

  function addCoralBranch(root, depth, length, radius, mat) {
    const branch = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.55, radius, length, 7),
      mat
    );
    branch.position.y = length / 2;
    branch.castShadow = true;
    branch.receiveShadow = true;
    root.add(branch);

    if (depth <= 0) {
      const tip = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.45, 10, 8), mat);
      tip.position.y = length;
      tip.castShadow = true;
      root.add(tip);
      return;
    }

    for (let i = 0; i < 2; i++) {
      const child = new THREE.Group();
      child.position.y = length * (0.58 + i * 0.22);
      child.rotation.z = (i === 0 ? 1 : -1) * (0.42 + Math.random() * 0.28);
      child.rotation.y = Math.random() * Math.PI;
      root.add(child);
      addCoralBranch(child, depth - 1, length * (0.58 + Math.random() * 0.12), radius * 0.68, mat);
    }
  }

  for (let i = 0; i < 22; i++) {
    const cluster = new THREE.Group();
    const mat = coralMats[i % coralMats.length];
    const base = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.45 + Math.random() * 0.55, 0),
      rockMat
    );
    base.scale.y = 0.42;
    base.castShadow = true;
    base.receiveShadow = true;
    cluster.add(base);

    const stalks = 2 + Math.floor(Math.random() * 3);
    for (let s = 0; s < stalks; s++) {
      const stem = new THREE.Group();
      stem.position.set((Math.random() - 0.5) * 0.8, 0.15, (Math.random() - 0.5) * 0.8);
      stem.rotation.z = (Math.random() - 0.5) * 0.34;
      cluster.add(stem);
      addCoralBranch(stem, 2, 0.7 + Math.random() * 0.9, 0.06 + Math.random() * 0.05, mat);
    }

    cluster.position.set((Math.random() - 0.5) * 30, -22, (Math.random() - 0.5) * 30);
    cluster.rotation.y = Math.random() * Math.PI;
    coralGroup.add(cluster);
  }
  scene.add(coralGroup);

  /* ── Fish ────────────────────────────────────────────────────────── */
  const FC   = 120;
  const fGeo = new THREE.BufferGeometry();
  const fPos = new Float32Array(FC * 3);
  const fSpd = new Float32Array(FC);
  for (let i = 0; i < FC; i++) {
    fPos[i*3]   = (Math.random()-0.5)*30;
    fPos[i*3+1] = -(2+Math.random()*18);
    fPos[i*3+2] = (Math.random()-0.5)*30;
    fSpd[i] = 0.015 + Math.random() * 0.035;
  }
  fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  const fish = new THREE.Points(fGeo, new THREE.PointsMaterial({
    color: 0xffcc44, size: 0.18, transparent: true, opacity: 0.55, sizeAttenuation: true,
  }));
  scene.add(fish);

  /* ── Lighting ────────────────────────────────────────────────────── */
  scene.add(new THREE.AmbientLight(0x0a1a33, 2.2));
  const sun = new THREE.DirectionalLight(0xffd060, 3.5);
  sun.position.set(8, 16, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 60;
  sun.shadow.camera.left = -24;
  sun.shadow.camera.right = 24;
  sun.shadow.camera.top = 24;
  sun.shadow.camera.bottom = -24;
  scene.add(sun);
  const underGlow = new THREE.PointLight(0x0077cc, 2.5, 28);
  underGlow.position.set(0, -6, 0);
  scene.add(underGlow);
  const deepGlow = new THREE.PointLight(0x003366, 3, 20);
  deepGlow.position.set(0, -18, 0);
  scene.add(deepGlow);

  /* ── DOM refs ────────────────────────────────────────────────────── */
  const diverEl  = document.getElementById('diver-svg-wrap');
  const splashEl = document.getElementById('dive-splash');
  const cap1     = document.getElementById('dive-cap-1');
  const cap2     = document.getElementById('dive-cap-2');
  const cap3     = document.getElementById('dive-cap-3');
  const hint     = document.querySelector('.dive-scroll-hint');

  /* ── Helpers ─────────────────────────────────────────────────────── */
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const fade  = (v, a, b)   => clamp((v - a) / (b - a), 0, 1);

  const skyCol  = new THREE.Color(0x001828);
  const deepCol = new THREE.Color(0x00050e);

  /* ── Animation loop ──────────────────────────────────────────────── */
  let time = 0;

  function tick() {
    requestAnimationFrame(tick);
    time += 0.01;
    const p = scrollProgress;

    /* Waves */
    for (let i = 0; i < wavePos.count; i++) {
      const b = waveBase[i];
      wavePos.setZ(i,
        Math.sin(b.x * 0.55 + time * 1.1) * 0.34 +
        Math.sin(b.y * 0.42 + time * 0.8) * 0.24 +
        Math.sin((b.x + b.y) * 0.28 + time * 0.62) * 0.16 +
        Math.sin(b.x * 1.1  - b.y * 0.65 + time * 1.9) * 0.09
      );
    }
    wavePos.needsUpdate = true;
    waterGeo.computeVertexNormals();

    /* Bubbles rise */
    const bp = bGeo.attributes.position;
    for (let i = 0; i < BC; i++) {
      let y = bp.getY(i) + bSpd[i];
      const x = bp.getX(i) + Math.sin(time * 0.9 + bPhs[i]) * 0.005;
      if (y > 0.6) y = -(Math.random() * 22);
      bp.setX(i, x); bp.setY(i, y);
    }
    bp.needsUpdate = true;

    /* Fish drift */
    const fp = fGeo.attributes.position;
    for (let i = 0; i < FC; i++) {
      let fx = fp.getX(i) + fSpd[i];
      if (fx > 16) fx = -16;
      fp.setX(i, fx);
      fp.setY(i, fp.getY(i) + Math.sin(time*0.5+i)*0.003);
    }
    fp.needsUpdate = true;

    /* Shaft sway */
    shafts.rotation.y = Math.sin(time * 0.18) * 0.07;
    coralGroup.children.forEach((cluster, index) => {
      cluster.rotation.z = Math.sin(time * 0.8 + index) * 0.018;
    });

    /* Camera dive: above → deep */
    const tY = 5.5 - p * 24;
    const tZ = 9   - p * 5.5;
    camera.position.y += (tY - camera.position.y) * 0.06;
    camera.position.z += (tZ - camera.position.z) * 0.06;
    camera.lookAt(0, camera.position.y - 1.8, 0);

    /* Fog / background */
    const fogHex = new THREE.Color().lerpColors(skyCol, deepCol, clamp(p*2,0,1)).getHex();
    scene.fog = new THREE.FogExp2(fogHex, 0.036 + p * 0.046);
    renderer.setClearColor(fogHex);

    /* Water dissolves as camera passes through */
    waterMat.opacity = Math.max(0.08, 0.9 - clamp((p - 0.22) * 4.5, 0, 1) * 0.82);

    underGlow.intensity = 2.5 + p * 6;
    deepGlow.intensity  = 1   + p * 5;

    /* ── Diver animation (FEET-FIRST jump) ── */
    if (diverEl) {
      if (p < 0.10) {
        /* Phase 0: stand on dock (right side, slightly above center) */
        const t = p / 0.10;
        diverEl.style.opacity   = Math.min(t * 5, 1);
        /* Start upright on the "dock" edge, right side */
        diverEl.style.transform = `translate(68vw, 28vh) rotate(0deg) scale(0.85)`;
      } else if (p < 0.28) {
        /* Phase 1: jump arc — rise up and move left toward water */
        const t   = (p - 0.10) / 0.18;
        const ox  = 68 - t * 28;              /* 68vw → 40vw */
        const oy  = 28 - t * 16;              /* 28vh → 12vh (rising arc) */
        const rot = 0 + t * 12;               /* slight forward lean */
        const sc  = 0.85 + t * 0.15;          /* grow to full size */
        diverEl.style.opacity   = '1';
        diverEl.style.transform = `translate(${ox}vw, ${oy}vh) rotate(${rot}deg) scale(${sc})`;
      } else if (p < 0.46) {
        /* Phase 2: fall feet-first toward water surface */
        const t   = (p - 0.28) / 0.18;
        const ox  = 40;                        /* stay at 40vw */
        const oy  = 12 + t * 36;              /* 12vh → 48vh (falling) */
        const rot = 12 - t * 10;              /* lean back slightly during fall */
        diverEl.style.opacity   = '1';
        diverEl.style.transform = `translate(${ox}vw, ${oy}vh) rotate(${rot}deg) scale(1)`;
      } else if (p < 0.55) {
        /* Phase 3: entry into water — splash */
        const t = (p - 0.46) / 0.09;
        const oy = 48 + t * 18;
        diverEl.style.opacity   = clamp(1 - t * 1.2, 0, 1);
        diverEl.style.transform = `translate(40vw, ${oy}vh) rotate(2deg) scale(1)`;
      } else {
        diverEl.style.opacity = '0';
      }
    }

    /* Splash ring */
    if (splashEl) {
      const st = fade(p, 0.42, 0.50);
      const fo = 1 - fade(p, 0.52, 0.60);
      splashEl.style.opacity   = st * fo;
      splashEl.style.transform = `translate(-50%, -50%) scale(${0.4 + st * 2.8})`;
    }

    /* Captions */
    if (cap1) cap1.style.opacity = fade(p, 0.10, 0.22) * (1 - fade(p, 0.38, 0.46));
    if (cap2) cap2.style.opacity = fade(p, 0.50, 0.62) * (1 - fade(p, 0.78, 0.86));
    if (cap3) cap3.style.opacity = fade(p, 0.86, 0.96);

    if (hint) hint.style.opacity = clamp(1 - p * 12, 0, 1);

    renderer.render(scene, camera);
  }

  tick();

  /* ── Resize ──────────────────────────────────────────────────────── */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
