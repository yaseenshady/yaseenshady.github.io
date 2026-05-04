(function () {
  "use strict";

  if (!window.THREE) {
    return;
  }

  const wrapper = document.getElementById("dive-wrapper");
  const canvas = document.getElementById("ocean-canvas");
  if (!wrapper || !canvas) {
    return;
  }

  const { THREE } = window;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const fade = (value, start, end) => clamp((value - start) / (end - start || 1), 0, 1);
  const lerp = (start, end, t) => start + (end - start) * t;

  function createCapsule(radius, length, material) {
    if (THREE.CapsuleGeometry) {
      return new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 8, 16), material);
    }

    const group = new THREE.Group();
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, length, 16),
      material
    );
    const capTop = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16), material);
    const capBottom = capTop.clone();
    capTop.position.y = length / 2;
    capBottom.position.y = -length / 2;
    group.add(cylinder, capTop, capBottom);
    return group;
  }

  function createDiverGroup() {
    const diver = new THREE.Group();
    const wetsuit = new THREE.MeshStandardMaterial({ color: 0x121c2b, roughness: 0.76, metalness: 0.08 });
    const tankMaterial = new THREE.MeshStandardMaterial({ color: 0x3e78a8, roughness: 0.34, metalness: 0.26 });
    const finMaterial = new THREE.MeshStandardMaterial({ color: 0x08111b, roughness: 0.82, metalness: 0.04 });
    const accentMaterial = new THREE.MeshStandardMaterial({ color: 0x1a2f47, roughness: 0.62, metalness: 0.1 });
    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x8edcff,
      emissive: 0x1a5e89,
      emissiveIntensity: 0.32,
      transparent: true,
      opacity: 0.8,
      roughness: 0.14,
      metalness: 0.24,
    });

    const torso = createCapsule(0.16, 0.58, wetsuit);
    torso.rotation.z = Math.PI;
    torso.position.y = 0.06;

    const hips = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.18, 0.2), accentMaterial);
    hips.position.y = -0.34;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 18, 18), wetsuit);
    head.position.y = 0.52;

    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 16), tankMaterial);
    tank.position.set(0, 0.08, -0.18);
    tank.rotation.z = Math.PI;

    const regulator = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 10, 24), accentMaterial);
    regulator.position.set(0.02, 0.36, 0.14);
    regulator.rotation.x = Math.PI / 2;

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.12), visorMaterial);
    visor.position.set(0, 0.5, 0.12);
    visor.rotation.x = -0.08;

    const armGeometry = new THREE.CylinderGeometry(0.045, 0.05, 0.48, 10);
    const leftArm = new THREE.Mesh(armGeometry, wetsuit);
    const rightArm = leftArm.clone();
    leftArm.position.set(-0.22, 0.08, 0);
    rightArm.position.set(0.22, 0.08, 0);
    leftArm.rotation.z = 0.48;
    rightArm.rotation.z = -0.48;

    const legGeometry = new THREE.CylinderGeometry(0.052, 0.056, 0.54, 10);
    const leftLeg = new THREE.Mesh(legGeometry, wetsuit);
    const rightLeg = leftLeg.clone();
    leftLeg.position.set(-0.09, -0.72, 0);
    rightLeg.position.set(0.09, -0.72, 0);

    const finGeometry = new THREE.BoxGeometry(0.14, 0.03, 0.32);
    const leftFin = new THREE.Mesh(finGeometry, finMaterial);
    const rightFin = leftFin.clone();
    leftFin.position.set(-0.09, -1.02, 0.08);
    rightFin.position.set(0.09, -1.02, 0.08);
    leftFin.rotation.x = -0.14;
    rightFin.rotation.x = -0.14;

    diver.add(
      torso,
      hips,
      head,
      tank,
      regulator,
      visor,
      leftArm,
      rightArm,
      leftLeg,
      rightLeg,
      leftFin,
      rightFin
    );
    diver.scale.setScalar(1.18);

    return {
      group: diver,
      animate(time, swimStrength = 0.16) {
        leftArm.rotation.x = Math.sin(time * 3.8) * 0.08;
        rightArm.rotation.x = -Math.sin(time * 3.8) * 0.08;
        leftLeg.rotation.x = Math.sin(time * 4 + 0.6) * swimStrength;
        rightLeg.rotation.x = -Math.sin(time * 4 + 0.6) * swimStrength;
        leftFin.rotation.z = Math.sin(time * 4 + 0.6) * 0.08;
        rightFin.rotation.z = -Math.sin(time * 4 + 0.6) * 0.08;
      },
    };
  }

  function createBubbleField(count, spreadX, spreadY, spreadZ, size, color, opacity) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const sway = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * spreadX;
      positions[index * 3 + 1] = -Math.random() * spreadY;
      positions[index * 3 + 2] = (Math.random() - 0.5) * spreadZ;
      speeds[index] = 0.012 + Math.random() * 0.026;
      sway[index] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);

    return {
      points,
      update(time) {
        const positionAttr = geometry.attributes.position;
        for (let index = 0; index < count; index += 1) {
          const xIndex = index * 3;
          const yIndex = xIndex + 1;
          let y = positionAttr.getY(index) + speeds[index];
          if (y > 1.6) {
            y = -Math.random() * spreadY;
            positionAttr.setX(index, (Math.random() - 0.5) * spreadX);
            positionAttr.setZ(index, (Math.random() - 0.5) * spreadZ);
          }
          positionAttr.setY(index, y);
          positionAttr.setX(index, positionAttr.array[xIndex] + Math.sin(time * 0.8 + sway[index]) * 0.003);
        }
        positionAttr.needsUpdate = true;
      },
    };
  }

  function createCoralCluster(material, rockMaterial) {
    const cluster = new THREE.Group();
    const rock = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.5 + Math.random() * 0.5, 0),
      rockMaterial
    );
    rock.scale.y = 0.44;
    cluster.add(rock);

    const addBranch = (root, depth, length, radius) => {
      const branch = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.55, radius, length, 8),
        material
      );
      branch.position.y = length / 2;
      root.add(branch);

      if (depth <= 0) {
        const tip = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.25, 10, 10), material);
        tip.position.y = length;
        root.add(tip);
        return;
      }

      for (let index = 0; index < 2; index += 1) {
        const child = new THREE.Group();
        child.position.y = length * (0.6 + index * 0.18);
        child.rotation.z = (index === 0 ? 1 : -1) * (0.38 + Math.random() * 0.28);
        child.rotation.y = Math.random() * Math.PI;
        root.add(child);
        addBranch(child, depth - 1, length * (0.6 + Math.random() * 0.12), radius * 0.68);
      }
    };

    const stems = 2 + Math.floor(Math.random() * 3);
    for (let index = 0; index < stems; index += 1) {
      const stem = new THREE.Group();
      stem.position.set((Math.random() - 0.5) * 0.8, 0.16, (Math.random() - 0.5) * 0.8);
      stem.rotation.z = (Math.random() - 0.5) * 0.28;
      cluster.add(stem);
      addBranch(stem, 2, 0.72 + Math.random() * 0.92, 0.06 + Math.random() * 0.05);
    }

    return cluster;
  }

  function createFishField(count) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 28;
      positions[index * 3 + 1] = -(2 + Math.random() * 15);
      positions[index * 3 + 2] = (Math.random() - 0.5) * 26;
      speeds[index] = 0.008 + Math.random() * 0.02;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xffd670,
      size: 0.16,
      transparent: true,
      opacity: 0.56,
      depthWrite: false,
    });

    return {
      points: new THREE.Points(geometry, material),
      update(time) {
        const positionAttr = geometry.attributes.position;
        for (let index = 0; index < count; index += 1) {
          let x = positionAttr.getX(index) + speeds[index];
          if (x > 14) {
            x = -14;
          }
          positionAttr.setX(index, x);
          positionAttr.setY(index, positionAttr.getY(index) + Math.sin(time * 0.6 + index) * 0.0026);
        }
        positionAttr.needsUpdate = true;
      },
    };
  }

  let scrollProgress = 0;

  function readScroll() {
    const rect = wrapper.getBoundingClientRect();
    const totalScroll = wrapper.offsetHeight - window.innerHeight;
    scrollProgress = totalScroll <= 0 ? 0 : clamp(-rect.top / totalScroll, 0, 1);
  }

  window.addEventListener("scroll", readScroll, { passive: true });
  readScroll();

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.setClearColor(0x02070c, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 180);
  camera.position.set(0, 5.4, 9.6);
  camera.lookAt(0, 0, 0);

  scene.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(100, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0x031018, side: THREE.BackSide })
    )
  );

  const ambient = new THREE.AmbientLight(0x5f87a8, 1.42);
  const hemi = new THREE.HemisphereLight(0x9bd8ff, 0x031018, 1.5);
  const sun = new THREE.DirectionalLight(0xffefcc, 3.2);
  sun.position.set(10, 16, 6);
  const underGlow = new THREE.PointLight(0x1a82c7, 3.2, 30);
  underGlow.position.set(0, -6, 0);
  const deepGlow = new THREE.PointLight(0x053a62, 4.8, 36);
  deepGlow.position.set(0, -18, 0);
  scene.add(ambient, hemi, sun, underGlow, deepGlow);

  const waterGeometry = new THREE.PlaneGeometry(78, 78, 110, 110);
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x0b7ba8,
    emissive: 0x08293b,
    emissiveIntensity: 0.32,
    roughness: 0.12,
    metalness: 0.38,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
  });
  const water = new THREE.Mesh(waterGeometry, waterMaterial);
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  const waterPositions = waterGeometry.attributes.position;
  const waterBase = [];
  for (let index = 0; index < waterPositions.count; index += 1) {
    waterBase.push({
      x: waterPositions.getX(index),
      y: waterPositions.getY(index),
    });
  }

  const shimmer = new THREE.Mesh(
    new THREE.CircleGeometry(14, 48),
    new THREE.MeshBasicMaterial({
      color: 0x8fdcff,
      transparent: true,
      opacity: 0.12,
    })
  );
  shimmer.rotation.x = -Math.PI / 2;
  shimmer.position.y = 0.02;
  scene.add(shimmer);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(88, 88),
    new THREE.MeshStandardMaterial({
      color: 0x061018,
      roughness: 0.96,
      metalness: 0.04,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -22;
  scene.add(floor);

  const reef = new THREE.Group();
  const coralMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xff6b7f, emissive: 0x3a0912, emissiveIntensity: 0.18, roughness: 0.72 }),
    new THREE.MeshStandardMaterial({ color: 0xffb703, emissive: 0x3a2200, emissiveIntensity: 0.16, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0x35d0ba, emissive: 0x053e33, emissiveIntensity: 0.18, roughness: 0.68 }),
    new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x210836, emissiveIntensity: 0.16, roughness: 0.66 }),
  ];
  const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x08151d, roughness: 0.92, metalness: 0.06 });

  for (let index = 0; index < 26; index += 1) {
    const cluster = createCoralCluster(coralMaterials[index % coralMaterials.length], rockMaterial);
    cluster.position.set((Math.random() - 0.5) * 32, -22, (Math.random() - 0.5) * 30);
    cluster.rotation.y = Math.random() * Math.PI;
    reef.add(cluster);
  }
  scene.add(reef);

  const shafts = new THREE.Group();
  for (let index = 0; index < 10; index += 1) {
    const height = 12 + Math.random() * 12;
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 1.2 + Math.random() * 0.8, height, 6, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x56c3ff,
        transparent: true,
        opacity: 0.028 + Math.random() * 0.028,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    shaft.position.set((Math.random() - 0.5) * 18, -(height / 2 + 0.4), (Math.random() - 0.5) * 18);
    shaft.rotation.x = Math.PI;
    shaft.rotation.z = (Math.random() - 0.5) * 0.34;
    shafts.add(shaft);
  }
  scene.add(shafts);

  const bubbles = createBubbleField(700, 32, 24, 32, 0.12, 0xb9f2ff, 0.66);
  scene.add(bubbles.points);

  const fish = createFishField(140);
  scene.add(fish.points);

  const diver = createDiverGroup();
  diver.group.position.set(5, 4.2, 1.6);
  diver.group.rotation.z = 0.28;
  diver.group.rotation.y = -0.4;
  scene.add(diver.group);

  const diverBubbles = createBubbleField(56, 1.2, 6.5, 1.2, 0.085, 0xd8fbff, 0.62);
  diverBubbles.points.position.set(0, 0, 0);
  diver.group.add(diverBubbles.points);

  const divePath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(5, 4.2, 1.6),
    new THREE.Vector3(3.6, 5.4, 1),
    new THREE.Vector3(1.4, 3.2, 0.5),
    new THREE.Vector3(0.2, 0.6, 0.2),
    new THREE.Vector3(-0.4, -4.4, 0.8),
    new THREE.Vector3(-0.3, -9.2, 1.1),
    new THREE.Vector3(0.2, -13.4, 0.2),
  ]);

  const splashEl = document.getElementById("dive-splash");
  const cap1 = document.getElementById("dive-cap-1");
  const cap2 = document.getElementById("dive-cap-2");
  const cap3 = document.getElementById("dive-cap-3");
  const hint = document.querySelector(".dive-scroll-hint");

  const shallowColor = new THREE.Color(0x0a3852);
  const deepColor = new THREE.Color(0x01060a);
  let time = 0;

  function tick() {
    window.requestAnimationFrame(tick);
    time += 0.01;
    const progress = scrollProgress;

    for (let index = 0; index < waterPositions.count; index += 1) {
      const point = waterBase[index];
      waterPositions.setZ(
        index,
        Math.sin(point.x * 0.45 + time * 1.4) * 0.4 +
          Math.cos(point.y * 0.35 + time * 0.95) * 0.24 +
          Math.sin((point.x + point.y) * 0.28 + time * 1.8) * 0.12
      );
    }
    waterPositions.needsUpdate = true;
    waterGeometry.computeVertexNormals();

    shimmer.scale.setScalar(1 + Math.sin(time * 0.3) * 0.04);
    shimmer.material.opacity = 0.1 + Math.sin(time * 0.5) * 0.02;

    bubbles.update(time);
    diverBubbles.update(time * 1.2);
    fish.update(time);

    shafts.rotation.y = Math.sin(time * 0.18) * 0.08;
    reef.children.forEach((cluster, index) => {
      cluster.rotation.z = Math.sin(time * 0.7 + index) * 0.018;
    });

    const cameraY = lerp(5.4, -16.4, progress);
    const cameraZ = lerp(9.6, 4.2, progress);
    camera.position.y += (cameraY - camera.position.y) * 0.06;
    camera.position.z += (cameraZ - camera.position.z) * 0.06;
    camera.lookAt(0, camera.position.y - 1.7, 0);

    const fogColor = new THREE.Color().lerpColors(shallowColor, deepColor, clamp(progress * 1.5, 0, 1));
    scene.fog = new THREE.FogExp2(fogColor, 0.024 + progress * 0.056);
    renderer.setClearColor(fogColor);

    waterMaterial.opacity = Math.max(0.08, 0.92 - fade(progress, 0.22, 0.42) * 0.82);
    underGlow.intensity = 2.4 + progress * 6.2;
    deepGlow.intensity = 1.4 + progress * 6.8;

    const diverProgress = progress < 0.08 ? 0 : clamp((progress - 0.08) / 0.82, 0, 1);
    const diverPoint = divePath.getPointAt(diverProgress);
    const diverLookAt = divePath.getPointAt(clamp(diverProgress + 0.02, 0, 1));
    diver.group.position.copy(diverPoint);
    diver.group.lookAt(diverLookAt);
    diver.group.rotation.z += progress < 0.4 ? 0.1 : -Math.PI / 2;
    diver.group.rotation.y += progress < 0.4 ? 0.18 : 0;
    diver.group.scale.setScalar(lerp(1.26, 0.78, fade(progress, 0.4, 1)));
    diver.group.visible = progress > 0.02;
    diver.animate(time, progress > 0.48 ? 0.18 : 0.1);

    if (splashEl) {
      const splashStart = fade(progress, 0.32, 0.42);
      const splashFade = 1 - fade(progress, 0.44, 0.56);
      splashEl.style.opacity = String(splashStart * splashFade);
      splashEl.style.transform = `translate(-50%, -50%) scale(${0.45 + splashStart * 2.6})`;
    }

    if (cap1) {
      cap1.style.opacity = String(fade(progress, 0.08, 0.22) * (1 - fade(progress, 0.36, 0.44)));
    }
    if (cap2) {
      cap2.style.opacity = String(fade(progress, 0.5, 0.62) * (1 - fade(progress, 0.76, 0.86)));
    }
    if (cap3) {
      cap3.style.opacity = String(fade(progress, 0.84, 0.96));
    }
    if (hint) {
      hint.style.opacity = String(clamp(1 - progress * 12, 0, 1));
    }

    renderer.render(scene, camera);
  }

  tick();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    readScroll();
  });
})();
