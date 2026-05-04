(function () {
  "use strict";

  if (!window.THREE || document.body.dataset.performance === "light") {
    return;
  }

  const sceneNodes = Array.from(document.querySelectorAll("[data-three-scene]"));
  if (sceneNodes.length === 0) {
    return;
  }

  const { THREE } = window;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const lerp = (start, end, t) => start + (end - start) * t;
  const smoothstep = (edge0, edge1, value) => {
    const x = clamp((value - edge0) / (edge1 - edge0 || 1), 0, 1);
    return x * x * (3 - 2 * x);
  };

  const sceneRegistry = {
    hero: buildHeroScene,
    guitar: buildGuitarScene,
    dj: buildDjScene,
    photo: buildPhotoScene,
    snow: buildSnowScene,
    code: buildCodeScene,
    "beyond-dive": buildBeyondDiveScene,
    "beyond-guitar": buildBeyondGuitarScene,
    "beyond-route": buildBeyondRouteScene,
    "beyond-dj": buildBeyondDjScene,
  };

  const activeInstances = [];
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const instance = activeInstances.find((item) => item.node === entry.target);
        if (instance) {
          instance.isVisible = entry.isIntersecting;
        }
      });
    },
    { rootMargin: "240px 0px 240px 0px", threshold: 0.01 }
  );

  function createRenderer(canvas, smallScene = false) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, smallScene ? 1.35 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = smallScene ? 1.14 : 1.28;
    if ("physicallyCorrectLights" in renderer) {
      renderer.physicallyCorrectLights = true;
    }
    return renderer;
  }

  function addLights(scene, options = {}) {
    const ambient = new THREE.AmbientLight(options.ambientColor || 0x9ab4cc, options.ambientIntensity || 1.2);
    const hemi = new THREE.HemisphereLight(
      options.skyColor || 0xe9f3ff,
      options.groundColor || 0x081016,
      options.hemiIntensity || 1.2
    );
    const key = new THREE.DirectionalLight(options.keyColor || 0xfff3d1, options.keyIntensity || 2.1);
    key.position.copy(options.keyPosition || new THREE.Vector3(4.5, 6.5, 5));
    const rim = new THREE.PointLight(options.rimColor || 0x6dc7ff, options.rimIntensity || 3.4, 26);
    rim.position.copy(options.rimPosition || new THREE.Vector3(-4, 2.6, -3.5));
    scene.add(ambient, hemi, key, rim);
    return { ambient, hemi, key, rim };
  }

  function createFloor(size, color, y = -1.45, metalness = 0.1, roughness = 0.88) {
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(size, size),
      new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = y;
    return floor;
  }

  function createDust(options = {}) {
    const count = options.count || 140;
    const spreadX = options.spreadX || 10;
    const spreadY = options.spreadY || 4.5;
    const spreadZ = options.spreadZ || 10;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * spreadX;
      positions[index * 3 + 1] = Math.random() * spreadY;
      positions[index * 3 + 2] = (Math.random() - 0.5) * spreadZ;
      speeds[index] = 0.16 + Math.random() * 0.38;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: options.color || 0xffffff,
      size: options.size || 0.035,
      transparent: true,
      opacity: options.opacity || 0.48,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);

    return {
      points,
      update(time) {
        const positionsAttr = geometry.attributes.position;
        for (let index = 0; index < count; index += 1) {
          const yIndex = index * 3 + 1;
          let y = positionsAttr.array[yIndex] + speeds[index] * 0.0045;
          if (y > spreadY) {
            y = 0;
          }
          positionsAttr.array[yIndex] = y;
          positionsAttr.array[index * 3] += Math.sin(time * 0.22 + index) * 0.0009;
        }
        positionsAttr.needsUpdate = true;
      },
    };
  }

  function createGlassFlowGroup(options = {}) {
    const group = new THREE.Group();
    const palette = options.palette || [0x8fdcff, 0xffd60a, 0xffffff];
    const count = options.count || 4;
    const drift = options.drift || 0.12;

    for (let index = 0; index < count; index += 1) {
      const color = palette[index % palette.length];
      const geometry =
        index % 2 === 0
          ? new THREE.IcosahedronGeometry(0.28 + index * 0.06, 2)
          : new THREE.SphereGeometry(0.24 + index * 0.05, 24, 24);
      const material = new THREE.MeshPhysicalMaterial({
        color,
        transmission: 0.92,
        transparent: true,
        opacity: 0.62,
        roughness: 0.08,
        metalness: 0.04,
        thickness: 1.4,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        ior: 1.14,
        emissive: color,
        emissiveIntensity: 0.06,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * (options.spreadX || 5),
        (Math.random() - 0.5) * (options.spreadY || 2.4) + (options.y || 1.1),
        -1.6 - Math.random() * (options.spreadZ || 2.8)
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData.basePosition = mesh.position.clone();
      mesh.userData.baseRotation = mesh.rotation.clone();
      mesh.userData.phase = Math.random() * Math.PI * 2;
      mesh.userData.speed = 0.45 + Math.random() * 0.5;
      group.add(mesh);
    }

    return {
      group,
      update(time, progress = 0.5) {
        group.children.forEach((mesh, index) => {
          const wobble = time * mesh.userData.speed + mesh.userData.phase;
          mesh.position.x = mesh.userData.basePosition.x + Math.sin(wobble) * drift * (1 + progress * 0.3);
          mesh.position.y = mesh.userData.basePosition.y + Math.cos(wobble * 0.8) * drift * 0.8;
          mesh.rotation.x = mesh.userData.baseRotation.x + wobble * 0.18;
          mesh.rotation.y = mesh.userData.baseRotation.y + wobble * 0.14;
          mesh.material.emissiveIntensity = 0.04 + Math.sin(wobble + index) * 0.01 + progress * 0.02;
        });
      },
    };
  }

  function createGradientTexture(stops) {
    const canvas = document.createElement("canvas");
    canvas.width = 768;
    canvas.height = 512;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    stops.forEach((stop) => gradient.addColorStop(stop.offset, stop.color));
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return new THREE.CanvasTexture(canvas);
  }

  function createPhotoTexture(theme) {
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 600;
    const context = canvas.getContext("2d");
    const palettes = {
      coast: ["#8ed4ff", "#2b6cb0", "#05121d"],
      city: ["#ffe8a3", "#ff9a62", "#130a12"],
      alpine: ["#f0fbff", "#89bde4", "#0b1723"],
    };
    const palette = palettes[theme] || palettes.coast;
    const sky = context.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, palette[0]);
    sky.addColorStop(0.55, palette[1]);
    sky.addColorStop(1, palette[2]);
    context.fillStyle = sky;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 0.82;
    context.fillStyle = "rgba(6, 10, 14, 0.52)";
    context.beginPath();
    context.moveTo(0, 420);
    context.lineTo(180, 250);
    context.lineTo(350, 390);
    context.lineTo(520, 210);
    context.lineTo(760, 405);
    context.lineTo(900, 278);
    context.lineTo(900, 600);
    context.lineTo(0, 600);
    context.closePath();
    context.fill();

    context.globalAlpha = 1;
    context.strokeStyle = "rgba(255,255,255,0.44)";
    context.lineWidth = 8;
    context.beginPath();
    context.moveTo(110, 470);
    context.bezierCurveTo(280, 420, 460, 450, 760, 320);
    context.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace || texture.colorSpace;
    return texture;
  }

  function createCodeTexture(colorA, colorB) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#06120f");
    gradient.addColorStop(1, "#020608");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "600 30px Menlo, Monaco, Consolas, monospace";
    context.textBaseline = "top";

    const lines = [
      ["const voice = compose(agent, context);", colorA],
      ["await route(provider).ship(voice);", colorB],
      ["state.sync({ repo, session, memory });", "#7dd3fc"],
      ["timeline.push('validated realistic renders');", "#f8f6ef"],
    ];

    lines.forEach(([text, color], index) => {
      context.fillStyle = color;
      context.fillText(text, 56, 80 + index * 88);
    });

    for (let index = 0; index < 18; index += 1) {
      context.fillStyle = index % 3 === 0 ? "rgba(134, 239, 172, 0.16)" : "rgba(125, 211, 252, 0.12)";
      context.fillRect(56, 440 + index * 14, 560 + (index % 4) * 80, 4);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace || texture.colorSpace;
    return texture;
  }

  function createStratBodyGeometry(depth) {
    const shape = new THREE.Shape();
    shape.moveTo(-1.15, -0.35);
    shape.bezierCurveTo(-1.45, 0.1, -1.28, 0.7, -0.75, 0.95);
    shape.bezierCurveTo(-0.46, 1.08, -0.12, 1.05, 0.08, 0.82);
    shape.bezierCurveTo(0.18, 1.16, 0.46, 1.28, 0.82, 1.18);
    shape.bezierCurveTo(1.15, 1.06, 1.25, 0.68, 1.08, 0.38);
    shape.bezierCurveTo(1.34, 0.1, 1.28, -0.34, 0.94, -0.54);
    shape.bezierCurveTo(1.06, -0.84, 0.96, -1.2, 0.64, -1.3);
    shape.bezierCurveTo(0.3, -1.38, 0.04, -1.22, -0.16, -0.9);
    shape.bezierCurveTo(-0.36, -1.22, -0.7, -1.34, -1.02, -1.18);
    shape.bezierCurveTo(-1.34, -1.02, -1.42, -0.62, -1.15, -0.35);

    return new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: 0.05,
      bevelThickness: 0.04,
      curveSegments: 28,
    });
  }

  function createRouteArc(material) {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.7, 0.15, 0.9),
      new THREE.Vector3(-1.2, 1.4, -0.3),
      new THREE.Vector3(0.2, 1.1, 0.4),
      new THREE.Vector3(1.7, 0.85, -0.25),
      new THREE.Vector3(3, 1.2, 0.5),
    ]);
    return {
      mesh: new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.04, 8, false), material),
      curve,
    };
  }

  function createMarker(color) {
    const marker = new THREE.Group();
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.06, 0.5, 12),
      new THREE.MeshStandardMaterial({ color: 0x101820, emissive: color, emissiveIntensity: 0.4 })
    );
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: color, emissiveIntensity: 1.25 })
    );
    pillar.position.y = 0.25;
    orb.position.y = 0.58;
    marker.add(pillar, orb);
    return { marker, orb };
  }

  function createDiverGroup(scale = 1) {
    const diver = new THREE.Group();
    const wetsuit = new THREE.MeshStandardMaterial({ color: 0x121a2a, roughness: 0.76, metalness: 0.08 });
    const tankMaterial = new THREE.MeshStandardMaterial({ color: 0x4075aa, roughness: 0.4, metalness: 0.25 });
    const finMaterial = new THREE.MeshStandardMaterial({ color: 0x07111d, roughness: 0.82 });
    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ad9ff,
      emissive: 0x1f6b9a,
      emissiveIntensity: 0.26,
      transparent: true,
      opacity: 0.82,
      roughness: 0.18,
      metalness: 0.25,
    });

    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.55, 8, 16), wetsuit);
    torso.rotation.z = Math.PI;
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.62, 16), tankMaterial);
    tank.position.set(0, 0.04, -0.18);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), wetsuit);
    head.position.y = 0.48;
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.14), visorMaterial);
    visor.position.set(0, 0.46, 0.12);
    visor.rotation.x = -0.08;

    const limbGeometry = new THREE.CylinderGeometry(0.05, 0.055, 0.46, 10);
    const upperArmLeft = new THREE.Mesh(limbGeometry, wetsuit);
    const upperArmRight = new THREE.Mesh(limbGeometry, wetsuit);
    upperArmLeft.position.set(-0.2, 0.14, 0);
    upperArmRight.position.set(0.2, 0.14, 0);
    upperArmLeft.rotation.z = 0.45;
    upperArmRight.rotation.z = -0.45;

    const legGeometry = new THREE.CylinderGeometry(0.055, 0.06, 0.52, 10);
    const legLeft = new THREE.Mesh(legGeometry, wetsuit);
    const legRight = new THREE.Mesh(legGeometry, wetsuit);
    legLeft.position.set(-0.09, -0.46, 0);
    legRight.position.set(0.09, -0.46, 0);

    const finGeometry = new THREE.BoxGeometry(0.13, 0.03, 0.28);
    const finLeft = new THREE.Mesh(finGeometry, finMaterial);
    const finRight = new THREE.Mesh(finGeometry, finMaterial);
    finLeft.position.set(-0.09, -0.76, 0.08);
    finRight.position.set(0.09, -0.76, 0.08);
    finLeft.rotation.x = -0.14;
    finRight.rotation.x = -0.14;

    diver.add(torso, tank, head, visor, upperArmLeft, upperArmRight, legLeft, legRight, finLeft, finRight);
    diver.scale.setScalar(scale);

    return {
      group: diver,
      animate(time, kick = 0.16) {
        upperArmLeft.rotation.x = Math.sin(time * 4.2) * 0.08;
        upperArmRight.rotation.x = -Math.sin(time * 4.2) * 0.08;
        legLeft.rotation.x = Math.sin(time * 4.2 + 0.6) * kick;
        legRight.rotation.x = -Math.sin(time * 4.2 + 0.6) * kick;
        finLeft.rotation.z = Math.sin(time * 4.2 + 0.6) * 0.08;
        finRight.rotation.z = -Math.sin(time * 4.2 + 0.6) * 0.08;
      },
    };
  }

  function createSnowboarder() {
    const rider = new THREE.Group();
    const fabric = new THREE.MeshStandardMaterial({ color: 0x1b2638, roughness: 0.82 });
    const helmet = new THREE.MeshStandardMaterial({ color: 0xdceeff, roughness: 0.42 });
    const boardMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd60a,
      emissive: 0x805400,
      emissiveIntensity: 0.18,
      roughness: 0.45,
      metalness: 0.15,
    });

    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.38, 8, 16), fabric);
    body.position.y = 0.48;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), helmet);
    head.position.y = 0.9;
    const board = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.05, 0.18), boardMaterial);
    board.position.y = 0.04;
    board.rotation.z = -0.04;

    const armLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.36, 8), fabric);
    const armRight = armLeft.clone();
    armLeft.position.set(-0.17, 0.56, 0);
    armRight.position.set(0.17, 0.56, 0);
    armLeft.rotation.z = 0.6;
    armRight.rotation.z = -0.75;

    const legLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.44, 8), fabric);
    const legRight = legLeft.clone();
    legLeft.position.set(-0.09, 0.18, 0);
    legRight.position.set(0.09, 0.18, 0);
    legLeft.rotation.z = 0.22;
    legRight.rotation.z = -0.2;

    rider.add(body, head, board, armLeft, armRight, legLeft, legRight);
    return { rider, board, armLeft, armRight };
  }

  function initInstance(node) {
    const type = node.dataset.threeScene;
    const builder = sceneRegistry[type];
    const canvas = node.querySelector("canvas");

    if (!builder || !canvas) {
      return null;
    }

    const isSmall = type.startsWith("beyond-");
    const renderer = createRenderer(canvas, isSmall);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(isSmall ? 34 : 42, 1, 0.1, 80);
    const context = builder({ THREE, scene, camera, isSmall, node });

    const instance = {
      node,
      type,
      scene,
      camera,
      renderer,
      context,
      isSmall,
      isVisible: type === "hero",
      sectionHost: node.closest("[data-scroll-scene]"),
      resize() {
        const width = node.clientWidth || 1;
        const height = node.clientHeight || 1;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        if (typeof context.onResize === "function") {
          context.onResize(width, height);
        }
      },
      progress(time) {
        if (type === "hero") {
          const rect = node.getBoundingClientRect();
          const total = Math.max(window.innerHeight + rect.height, 1);
          return clamp((window.innerHeight - rect.top) / total, 0, 1);
        }

        if (type.startsWith("beyond-")) {
          return prefersReducedMotion ? 0.5 : 0.5 + Math.sin(time * 0.0012 + node.offsetLeft * 0.003) * 0.22;
        }

        if (this.sectionHost) {
          const value = parseFloat(getComputedStyle(this.sectionHost).getPropertyValue("--scene-progress"));
          if (Number.isFinite(value)) {
            return clamp(value, 0, 1);
          }
        }

        return 0;
      },
      render(time, delta) {
        const progress = this.progress(time);
        context.update(progress, time * 0.001, delta * 0.001);
        renderer.render(scene, camera);
      },
    };

    instance.resize();
    node.dataset.sceneReady = "true";
    visibilityObserver.observe(node);
    return instance;
  }

  function addBackdrop(scene, colorTop, colorBottom) {
    const texture = createGradientTexture([
      { offset: 0, color: colorTop },
      { offset: 1, color: colorBottom },
    ]);
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 16),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.95 })
    );
    plane.position.set(0, 4.4, -8);
    scene.add(plane);
  }

  function buildHeroScene({ scene, camera }) {
    addBackdrop(scene, "#09161d", "#020507");
    addLights(scene, {
      ambientIntensity: 1.15,
      hemiIntensity: 1.45,
      keyIntensity: 2.45,
      rimIntensity: 4.5,
      keyPosition: new THREE.Vector3(4.6, 5.8, 4.2),
      rimPosition: new THREE.Vector3(-5.8, 2.4, -4.6),
    });

    const world = new THREE.Group();
    scene.add(world);

    const terrain = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 8, 90, 70),
      new THREE.MeshStandardMaterial({
        color: 0x162126,
        roughness: 0.96,
        metalness: 0.04,
      })
    );
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.set(0.8, -1.18, -0.6);
    const terrainPositions = terrain.geometry.attributes.position;
    for (let index = 0; index < terrainPositions.count; index += 1) {
      const x = terrainPositions.getX(index);
      const z = terrainPositions.getY(index);
      const coast = smoothstep(-6, -0.6, x);
      const height = Math.sin(z * 0.8) * 0.2 + Math.sin(x * 0.45) * 0.28;
      terrainPositions.setZ(index, coast * (0.18 + height));
    }
    terrainPositions.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
    world.add(terrain);

    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(7.8, 4.8, 60, 40),
      new THREE.MeshStandardMaterial({
        color: 0x0a6faa,
        emissive: 0x09324a,
        emissiveIntensity: 0.32,
        metalness: 0.48,
        roughness: 0.18,
        transparent: true,
        opacity: 0.88,
      })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.set(-2.8, -1.16, 0.3);
    const waterPositions = water.geometry.attributes.position;
    const waterBase = [];
    for (let index = 0; index < waterPositions.count; index += 1) {
      waterBase.push({
        x: waterPositions.getX(index),
        y: waterPositions.getY(index),
      });
    }
    world.add(water);

    const route = createRouteArc(
      new THREE.MeshStandardMaterial({
        color: 0xffe58a,
        emissive: 0xffb703,
        emissiveIntensity: 0.55,
        roughness: 0.22,
        metalness: 0.62,
      })
    );
    route.mesh.position.set(0, -0.25, -0.2);
    world.add(route.mesh);

    const routePulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 18, 18),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffd060,
        emissiveIntensity: 2.2,
        roughness: 0.24,
      })
    );
    world.add(routePulse);

    const monoliths = [];
    const monolithMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xb7dfff,
      transmission: 0.9,
      transparent: true,
      opacity: 0.5,
      roughness: 0.08,
      metalness: 0.04,
      thickness: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      ior: 1.14,
      emissive: 0x183f5a,
      emissiveIntensity: 0.08,
    });
    const screenMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2a4e68,
      emissive: 0x65c6ff,
      emissiveIntensity: 0.74,
      transmission: 0.82,
      transparent: true,
      opacity: 0.78,
      roughness: 0.12,
      metalness: 0.08,
      thickness: 0.8,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
    });

    [
      [-0.2, -0.3, -1.3],
      [1.15, -0.3, -2.3],
      [2.45, -0.24, -3.1],
    ].forEach(([x, y, z], index) => {
      const group = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.72, 2.1 + index * 0.2, 0.16), monolithMaterial);
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.46 + index * 0.16, 0.03), screenMaterial.clone());
      screen.position.z = 0.095;
      group.position.set(x, y, z);
      group.add(body, screen);
      monoliths.push({ group, screen });
      world.add(group);
    });

    const lens = new THREE.Group();
    const lensRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.86, 0.12, 24, 64),
      new THREE.MeshStandardMaterial({
        color: 0x101922,
        emissive: 0x1d4058,
        emissiveIntensity: 0.42,
        roughness: 0.26,
        metalness: 0.72,
      })
    );
    const lensGlass = new THREE.Mesh(
      new THREE.CircleGeometry(0.62, 40),
      new THREE.MeshStandardMaterial({
        color: 0x245b86,
        emissive: 0x4da6ff,
        emissiveIntensity: 0.36,
        transparent: true,
        opacity: 0.82,
        roughness: 0.08,
        metalness: 0.35,
      })
    );
    lensGlass.position.z = 0.05;
    lens.add(lensRing, lensGlass);
    lens.position.set(3.4, 0.82, -0.8);
    lens.rotation.y = -0.32;
    world.add(lens);

    const dust = createDust({ count: 110, spreadX: 10, spreadY: 4.8, spreadZ: 12, size: 0.03, color: 0xfdf4d7 });
    scene.add(dust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0x8fdcff, 0xffd60a, 0xf4f0e8],
      spreadX: 6,
      spreadY: 2.4,
      spreadZ: 3.4,
      y: 1.5,
      drift: 0.16,
    });
    glassFlow.group.position.set(1.8, 0.4, -0.8);
    scene.add(glassFlow.group);

    camera.position.set(1.1, 1.45, 6.8);
    camera.lookAt(0.4, 0.2, -1.2);

    return {
      update(progress, time) {
        world.rotation.y = -0.2 + progress * 0.18 + time * 0.05;
        lens.rotation.z = Math.sin(time * 0.8) * 0.06;
        monoliths.forEach((monolith, index) => {
          monolith.group.position.y = -0.32 + Math.sin(time * 0.8 + index) * 0.05;
          monolith.screen.material.emissiveIntensity = 0.45 + Math.sin(time * 1.1 + index) * 0.12;
        });

        for (let index = 0; index < waterPositions.count; index += 1) {
          const point = waterBase[index];
          waterPositions.setZ(
            index,
            Math.sin(point.x * 1.2 + time * 1.4) * 0.08 +
              Math.cos(point.y * 0.9 + time * 1.1) * 0.05
          );
        }
        waterPositions.needsUpdate = true;
        water.geometry.computeVertexNormals();

        const routeT = (time * 0.08) % 1;
        route.curve.getPointAt(routeT, routePulse.position);
        routePulse.position.y -= 0.25;
        routePulse.position.z -= 0.2;

        camera.position.x = lerp(1.6, 0.4, progress) + Math.sin(time * 0.25) * 0.12;
        camera.position.y = lerp(1.7, 1.3, progress);
        camera.position.z = lerp(7.2, 5.6, progress);
        camera.lookAt(0.4, 0.12, -1.5);
        dust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildGuitarScene({ scene, camera }) {
    addBackdrop(scene, "#13080b", "#030405");
    addLights(scene, {
      ambientIntensity: 1.05,
      hemiIntensity: 1.15,
      keyIntensity: 2.6,
      rimIntensity: 4.6,
      keyPosition: new THREE.Vector3(3.8, 5.4, 5.6),
      rimColor: 0xffb347,
      rimPosition: new THREE.Vector3(-4.2, 2.2, -4.4),
    });

    scene.add(createFloor(16, 0x0a0a0b, -1.42, 0.22, 0.68));

    const stageBack = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 8),
      new THREE.MeshStandardMaterial({
        color: 0x130d10,
        emissive: 0x2d0d0f,
        emissiveIntensity: 0.18,
        roughness: 0.94,
      })
    );
    stageBack.position.set(0, 2.3, -4.8);
    scene.add(stageBack);

    const amp = new THREE.Group();
    const ampBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 2.35, 1.1),
      new THREE.MeshStandardMaterial({ color: 0x111215, roughness: 0.82, metalness: 0.18 })
    );
    const speakerMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b0c0e,
      emissive: 0xffb703,
      emissiveIntensity: 0.08,
      roughness: 0.52,
      metalness: 0.06,
    });
    const speakerOne = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.22, 32), speakerMaterial);
    const speakerTwo = speakerOne.clone();
    speakerOne.rotation.x = Math.PI / 2;
    speakerTwo.rotation.x = Math.PI / 2;
    speakerOne.position.set(-0.48, 0.2, 0.56);
    speakerTwo.position.set(0.48, 0.2, 0.56);
    const ampHead = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.26, 0.32),
      new THREE.MeshStandardMaterial({ color: 0x202225, roughness: 0.4, metalness: 0.28 })
    );
    ampHead.position.set(0, 0.92, 0.38);
    amp.add(ampBody, speakerOne, speakerTwo, ampHead);
    amp.position.set(2.85, -0.2, -1.3);
    scene.add(amp);

    const guitar = new THREE.Group();
    const body = new THREE.Mesh(
      createStratBodyGeometry(0.22),
      new THREE.MeshStandardMaterial({
        color: 0xc53e1d,
        emissive: 0x3c0704,
        emissiveIntensity: 0.12,
        roughness: 0.28,
        metalness: 0.18,
      })
    );
    body.rotation.x = Math.PI / 2;
    body.rotation.z = -0.26;
    body.position.set(-1.42, -0.18, 0.2);

    const pickguard = new THREE.Mesh(
      new THREE.ExtrudeGeometry(
        (() => {
          const shape = new THREE.Shape();
          shape.moveTo(-0.72, -0.18);
          shape.bezierCurveTo(-0.42, -0.56, 0.18, -0.5, 0.52, -0.1);
          shape.bezierCurveTo(0.68, 0.18, 0.62, 0.48, 0.22, 0.72);
          shape.bezierCurveTo(-0.22, 0.94, -0.72, 0.76, -0.9, 0.28);
          return shape;
        })(),
        { depth: 0.05, bevelEnabled: false, curveSegments: 20 }
      ),
      new THREE.MeshStandardMaterial({ color: 0xf1ece4, roughness: 0.54, metalness: 0.12 })
    );
    pickguard.rotation.x = Math.PI / 2;
    pickguard.rotation.z = -0.26;
    pickguard.position.set(-1.2, -0.04, 0.31);

    const neck = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 3.8, 0.18),
      new THREE.MeshStandardMaterial({ color: 0xd1a16d, roughness: 0.64, metalness: 0.05 })
    );
    neck.rotation.z = -1.19;
    neck.position.set(0.6, 1.2, 0.18);

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.86, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x2c160c, roughness: 0.55, metalness: 0.04 })
    );
    head.rotation.z = -1.19;
    head.position.set(1.34, 2.98, 0.18);

    const pickups = [];
    [-0.72, -0.48, -0.24].forEach((offset, index) => {
      const pickup = new THREE.Mesh(
        new THREE.BoxGeometry(0.62, 0.12, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x0f1013, roughness: 0.38, metalness: 0.3 + index * 0.04 })
      );
      pickup.rotation.z = -0.26;
      pickup.position.set(-0.8 + index * 0.22, offset, 0.37);
      pickups.push(pickup);
      guitar.add(pickup);
    });

    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.8, -0.96, 0.18),
      new THREE.Vector3(0.25, -1.52, -0.2),
      new THREE.Vector3(1.72, -1.6, -0.6),
      new THREE.Vector3(2.64, -1.1, -0.48),
    ]);
    const cable = new THREE.Mesh(
      new THREE.TubeGeometry(cableCurve, 80, 0.05, 10, false),
      new THREE.MeshStandardMaterial({
        color: 0x0b0b0c,
        emissive: 0x8a5b1f,
        emissiveIntensity: 0.1,
        roughness: 0.74,
        metalness: 0.12,
      })
    );
    scene.add(cable);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.82, 0.02, 14, 48),
      new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.4 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(-1.18, -0.1, 0.24);

    guitar.add(body, pickguard, neck, head, ring);
    guitar.position.set(-1.1, 0.2, -0.2);
    scene.add(guitar);

    const dust = createDust({ count: 90, spreadX: 10, spreadY: 4, spreadZ: 9, size: 0.03, color: 0xffddaa });
    scene.add(dust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0xffd082, 0xff8f6b, 0xf7f2e8],
      spreadX: 4.8,
      spreadY: 2.1,
      spreadZ: 2.8,
      y: 1.5,
      drift: 0.12,
    });
    glassFlow.group.position.set(1.2, 0.4, -1.1);
    scene.add(glassFlow.group);

    camera.position.set(0.4, 1.2, 7);
    camera.lookAt(0.6, 0.2, -0.6);

    return {
      update(progress, time) {
        guitar.rotation.z = lerp(-0.62, -0.08, progress);
        guitar.position.x = lerp(-2.1, -0.85, progress);
        amp.rotation.y = lerp(-0.42, -0.18, progress);

        const pulse = (Math.sin(time * 8) * 0.5 + 0.5) * (0.25 + progress * 0.75);
        speakerOne.scale.setScalar(1 + pulse * 0.08);
        speakerTwo.scale.setScalar(1 + pulse * 0.1);
        speakerOne.material.emissiveIntensity = 0.06 + pulse * 0.2;
        speakerTwo.material.emissiveIntensity = 0.08 + pulse * 0.24;

        ring.scale.setScalar(0.76 + pulse * 0.78);
        ring.material.opacity = 0.12 + progress * 0.28 - pulse * 0.04;
        cable.material.emissiveIntensity = 0.08 + progress * 0.22;

        camera.position.x = lerp(0.8, 0.1, progress) + Math.sin(time * 0.25) * 0.06;
        camera.position.y = lerp(1.25, 0.92, progress);
        camera.position.z = lerp(7.4, 5.9, progress);
        camera.lookAt(0.6, 0.25, -0.8);
        dust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildDjScene({ scene, camera }) {
    addBackdrop(scene, "#10081a", "#030305");
    addLights(scene, {
      ambientIntensity: 0.98,
      hemiIntensity: 1.08,
      keyIntensity: 2.4,
      rimIntensity: 4.8,
      keyPosition: new THREE.Vector3(0.8, 5.6, 5.2),
      rimColor: 0x7dd3fc,
      rimPosition: new THREE.Vector3(-5.6, 2, -4.2),
    });

    scene.add(createFloor(16, 0x08080b, -1.42, 0.22, 0.66));

    const consoleGroup = new THREE.Group();
    const table = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 0.54, 3.2),
      new THREE.MeshStandardMaterial({ color: 0x0d0e12, roughness: 0.64, metalness: 0.32 })
    );
    consoleGroup.add(table);

    const platterMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b0c10,
      roughness: 0.26,
      metalness: 0.42,
      emissive: 0x111824,
      emissiveIntensity: 0.34,
    });
    const labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd60a,
      roughness: 0.32,
      metalness: 0.1,
      emissive: 0xd28c00,
      emissiveIntensity: 0.26,
    });

    const platters = [];
    [-1.7, 1.7].forEach((x, index) => {
      const platter = new THREE.Group();
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.08, 40), platterMaterial);
      const label = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.09, 28), labelMaterial);
      label.position.y = 0.045;
      platter.add(disc, label);
      platter.position.set(x, 0.28, 0);
      consoleGroup.add(platter);
      platters.push(platter);
      if (index === 1) {
        label.material = labelMaterial.clone();
        label.material.color.set(0x7dd3fc);
        label.material.emissive.set(0x174969);
      }
    });

    const mixer = new THREE.Mesh(
      new THREE.BoxGeometry(1.08, 0.36, 2.1),
      new THREE.MeshStandardMaterial({ color: 0x16161b, roughness: 0.48, metalness: 0.34 })
    );
    mixer.position.set(0, 0.28, 0);
    consoleGroup.add(mixer);

    const crossfader = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.12, 0.46),
      new THREE.MeshStandardMaterial({ color: 0xcfd7de, roughness: 0.32, metalness: 0.42 })
    );
    crossfader.position.set(0, 0.54, 0.62);
    consoleGroup.add(crossfader);

    const lightBars = [];
    [-3.2, -1.2, 1.2, 3.2].forEach((x, index) => {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 4.6, 0.14),
        new THREE.MeshStandardMaterial({
          color: index % 2 === 0 ? 0xffd60a : 0x7dd3fc,
          emissive: index % 2 === 0 ? 0x6e4e00 : 0x163b5f,
          emissiveIntensity: 0.8,
          roughness: 0.18,
          metalness: 0.42,
        })
      );
      bar.position.set(x, 1.4, -3.4);
      scene.add(bar);
      lightBars.push(bar);
    });

    consoleGroup.position.set(0, -0.72, -0.5);
    scene.add(consoleGroup);

    const dust = createDust({ count: 120, spreadX: 11, spreadY: 5, spreadZ: 8, size: 0.03, color: 0xf7f0c9 });
    scene.add(dust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0xffd60a, 0x7dd3fc, 0xf5f1ea],
      spreadX: 5.2,
      spreadY: 2.2,
      spreadZ: 2.6,
      y: 1.7,
      drift: 0.13,
    });
    glassFlow.group.position.set(0, 0.5, -1.8);
    scene.add(glassFlow.group);

    camera.position.set(0.3, 1.6, 7.2);
    camera.lookAt(0, 0, -0.4);

    return {
      update(progress, time) {
        platters[0].rotation.y = time * 3.8;
        platters[1].rotation.y = -time * 4.4;
        crossfader.position.x = lerp(-0.26, 0.28, progress);

        lightBars.forEach((bar, index) => {
          bar.scale.y = 0.85 + Math.sin(time * 2.2 + index) * 0.12 + progress * 0.12;
          bar.material.emissiveIntensity = 0.56 + Math.sin(time * 3.2 + index) * 0.16;
        });

        consoleGroup.rotation.y = lerp(-0.26, 0.2, progress);
        camera.position.x = lerp(-0.3, 0.55, progress);
        camera.position.y = lerp(1.8, 1.26, progress);
        camera.position.z = lerp(7.8, 5.8, progress);
        camera.lookAt(0, 0.02, -0.5);
        dust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildPhotoScene({ scene, camera }) {
    addBackdrop(scene, "#08111a", "#020508");
    addLights(scene, {
      ambientIntensity: 1.14,
      hemiIntensity: 1.26,
      keyIntensity: 2.55,
      rimIntensity: 4.1,
      keyPosition: new THREE.Vector3(2.8, 5.2, 5.6),
      rimColor: 0xa9d7ff,
      rimPosition: new THREE.Vector3(-4.6, 2.4, -4.2),
    });

    scene.add(createFloor(16, 0x080b10, -1.42, 0.18, 0.76));

    const cameraRig = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 1.5, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x1a1d22, roughness: 0.54, metalness: 0.26 })
    );
    const grip = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 1.18, 1.16),
      new THREE.MeshStandardMaterial({ color: 0x13161a, roughness: 0.82, metalness: 0.08 })
    );
    grip.position.set(1.42, -0.1, 0);
    const prism = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.44, 0.72, 4),
      new THREE.MeshStandardMaterial({ color: 0x20242a, roughness: 0.44, metalness: 0.22 })
    );
    prism.rotation.z = Math.PI / 4;
    prism.position.set(0, 0.95, -0.05);

    const lensOuter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.96, 0.84, 1.28, 42),
      new THREE.MeshStandardMaterial({ color: 0x0c1017, roughness: 0.34, metalness: 0.46 })
    );
    lensOuter.rotation.z = Math.PI / 2;
    lensOuter.position.set(-0.12, -0.02, 0.92);

    const lensGlass = new THREE.Mesh(
      new THREE.CircleGeometry(0.68, 42),
      new THREE.MeshStandardMaterial({
        color: 0x2a76b8,
        emissive: 0x1f66a1,
        emissiveIntensity: 0.28,
        transparent: true,
        opacity: 0.84,
        roughness: 0.12,
        metalness: 0.28,
      })
    );
    lensGlass.position.set(0, 0, 0.66);
    lensOuter.add(lensGlass);

    const apertureBlades = [];
    for (let index = 0; index < 6; index += 1) {
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.62, 0.02),
        new THREE.MeshStandardMaterial({ color: 0x08131d, roughness: 0.42, metalness: 0.12 })
      );
      blade.position.set(0, 0, 0.64);
      blade.rotation.z = (Math.PI * 2 * index) / 6;
      apertureBlades.push(blade);
      lensOuter.add(blade);
    }

    cameraRig.add(body, grip, prism, lensOuter);
    cameraRig.position.set(-0.5, -0.32, -0.2);
    scene.add(cameraRig);

    const photoTextures = [createPhotoTexture("coast"), createPhotoTexture("city"), createPhotoTexture("alpine")];
    const photoCards = photoTextures.map((texture, index) => {
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 1.22),
        new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.42,
          metalness: 0.08,
          emissive: 0x111417,
          emissiveIntensity: 0.12,
        })
      );
      frame.position.set(2.3 + index * 0.5, 0.8 - index * 0.28, -1.6 - index * 0.48);
      frame.rotation.y = -0.4 - index * 0.12;
      scene.add(frame);
      return frame;
    });

    const flash = new THREE.Mesh(
      new THREE.RingGeometry(1.12, 1.26, 42),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
    );
    flash.position.copy(cameraRig.position).add(new THREE.Vector3(0, -0.02, 1.7));
    scene.add(flash);

    const dust = createDust({ count: 85, spreadX: 10, spreadY: 4.6, spreadZ: 10, size: 0.03, color: 0xe8f7ff });
    scene.add(dust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0xcfe7ff, 0x7dd3fc, 0xffffff],
      spreadX: 5.4,
      spreadY: 2.3,
      spreadZ: 3,
      y: 1.8,
      drift: 0.11,
    });
    glassFlow.group.position.set(1.4, 0.4, -1.6);
    scene.add(glassFlow.group);

    camera.position.set(0.6, 1.4, 7.4);
    camera.lookAt(0.1, 0.2, -0.4);

    return {
      update(progress, time) {
        cameraRig.rotation.y = lerp(-0.48, 0.16, progress);
        cameraRig.rotation.x = -0.08 + Math.sin(time * 0.8) * 0.03;
        cameraRig.position.x = lerp(-0.95, -0.2, progress);

        apertureBlades.forEach((blade, index) => {
          blade.rotation.z = (Math.PI * 2 * index) / 6 + progress * 0.8 + Math.sin(time * 2.4) * 0.08;
        });

        photoCards.forEach((card, index) => {
          card.position.y = 0.8 - index * 0.28 + Math.sin(time * 0.9 + index) * 0.08;
          card.rotation.y = -0.4 - index * 0.12 + progress * 0.18;
        });

        const flashStrength = Math.max(0, 1 - Math.abs(progress - 0.56) * 9);
        flash.material.opacity = flashStrength * 0.38;
        flash.scale.setScalar(0.8 + flashStrength * 0.45);

        camera.position.x = lerp(0.9, 0.25, progress);
        camera.position.y = lerp(1.6, 1.12, progress);
        camera.position.z = lerp(7.8, 5.9, progress);
        camera.lookAt(0.3, 0.15, -0.7);
        dust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildSnowScene({ scene, camera }) {
    addBackdrop(scene, "#102131", "#04090e");
    addLights(scene, {
      ambientIntensity: 1.2,
      hemiIntensity: 1.4,
      keyIntensity: 2.8,
      rimIntensity: 4.2,
      keyPosition: new THREE.Vector3(4.2, 5.8, 4.8),
      rimColor: 0xbfe7ff,
      rimPosition: new THREE.Vector3(-5.5, 2.8, -4.6),
    });

    const mountain = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 10, 120, 80),
      new THREE.MeshStandardMaterial({
        color: 0xe7f5ff,
        roughness: 0.94,
        metalness: 0.04,
      })
    );
    mountain.rotation.x = -Math.PI / 2.18;
    mountain.position.set(1.2, -1.1, -1.5);
    const vertices = mountain.geometry.attributes.position;
    for (let index = 0; index < vertices.count; index += 1) {
      const x = vertices.getX(index);
      const y = vertices.getY(index);
      const ridge = Math.exp(-((x - 1.4) ** 2) / 10) * 1.1;
      const wave = Math.sin(x * 1.05) * 0.22 + Math.cos(y * 0.9) * 0.16;
      vertices.setZ(index, ridge + wave);
    }
    vertices.needsUpdate = true;
    mountain.geometry.computeVertexNormals();
    scene.add(mountain);

    const trailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.5, 0.9, 2),
      new THREE.Vector3(-2.2, 0.65, 1.2),
      new THREE.Vector3(0.2, 0.25, -0.2),
      new THREE.Vector3(2.6, -0.15, -1.5),
      new THREE.Vector3(4.6, -0.55, -2.6),
    ]);
    const trail = new THREE.Mesh(
      new THREE.TubeGeometry(trailCurve, 90, 0.06, 10, false),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xbcdff6,
        emissiveIntensity: 0.32,
        transparent: true,
        opacity: 0.72,
        roughness: 0.52,
      })
    );
    scene.add(trail);

    const snowboarder = createSnowboarder();
    scene.add(snowboarder.rider);

    const snowDust = createDust({ count: 160, spreadX: 12, spreadY: 6, spreadZ: 10, size: 0.04, color: 0xffffff, opacity: 0.56 });
    scene.add(snowDust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0xe8f5ff, 0xbfe7ff, 0xffffff],
      spreadX: 5.8,
      spreadY: 2.2,
      spreadZ: 2.8,
      y: 2,
      drift: 0.1,
    });
    glassFlow.group.position.set(1.2, 0.3, -2.2);
    scene.add(glassFlow.group);

    camera.position.set(0.8, 1.3, 7.2);
    camera.lookAt(0.2, 0, -1.1);

    return {
      update(progress, time) {
        trail.material.opacity = 0.24 + progress * 0.52;

        const riderPoint = trailCurve.getPointAt(progress);
        const nextPoint = trailCurve.getPointAt(clamp(progress + 0.02, 0, 1));
        snowboarder.rider.position.copy(riderPoint);
        snowboarder.rider.position.y += 0.14 + Math.sin(time * 9) * 0.03;
        snowboarder.rider.lookAt(nextPoint);
        snowboarder.rider.rotation.z = lerp(-0.38, 0.18, progress);
        snowboarder.board.rotation.y = Math.sin(time * 10) * 0.04;
        snowboarder.armLeft.rotation.x = Math.sin(time * 6) * 0.08;
        snowboarder.armRight.rotation.x = -Math.sin(time * 6) * 0.06;

        camera.position.x = lerp(-0.4, 1.1, progress);
        camera.position.y = lerp(1.8, 1.05, progress);
        camera.position.z = lerp(7.8, 5.4, progress);
        camera.lookAt(riderPoint.x + 1, riderPoint.y, riderPoint.z - 1.2);
        snowDust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildCodeScene({ scene, camera }) {
    addBackdrop(scene, "#07100d", "#020406");
    addLights(scene, {
      ambientIntensity: 1.02,
      hemiIntensity: 1.15,
      keyIntensity: 2.34,
      rimIntensity: 3.8,
      keyPosition: new THREE.Vector3(3.2, 4.6, 5.2),
      rimColor: 0x86efac,
      rimPosition: new THREE.Vector3(-4.5, 2.6, -4.2),
    });

    scene.add(createFloor(15, 0x050709, -1.44, 0.26, 0.72));

    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.2, 2.1),
      new THREE.MeshStandardMaterial({ color: 0x0e1113, roughness: 0.72, metalness: 0.22 })
    );
    desk.position.set(0, -0.7, -0.6);
    scene.add(desk);

    const monitorTexture = createCodeTexture("#86efac", "#f8f6ef");
    const monitorMaterial = new THREE.MeshStandardMaterial({
      map: monitorTexture,
      emissiveMap: monitorTexture,
      emissive: 0x4fb37c,
      emissiveIntensity: 0.45,
      roughness: 0.22,
      metalness: 0.28,
    });
    const monitors = [];
    [
      [-1.1, 0.4, -1.1, 0.08],
      [1.2, 0.58, -1.4, -0.06],
    ].forEach(([x, y, z, tilt]) => {
      const monitor = new THREE.Group();
      const screen = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.24, 0.12), monitorMaterial.clone());
      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.78, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x2a2d31, roughness: 0.42, metalness: 0.34 })
      );
      stand.position.y = -0.92;
      monitor.add(screen, stand);
      monitor.position.set(x, y, z);
      monitor.rotation.y = tilt;
      scene.add(monitor);
      monitors.push(monitor);
    });

    const keyboard = new THREE.Mesh(
      new THREE.BoxGeometry(1.68, 0.08, 0.62),
      new THREE.MeshStandardMaterial({ color: 0x111417, roughness: 0.56, metalness: 0.18 })
    );
    keyboard.position.set(0, -0.56, 0.1);
    scene.add(keyboard);

    const floatingPanels = [];
    [-2.7, -1.5, 1.7, 2.9].forEach((x, index) => {
      const panel = new THREE.Mesh(
        new THREE.PlaneGeometry(0.84, 0.42),
        new THREE.MeshStandardMaterial({
          color: index % 2 === 0 ? 0x7dd3fc : 0x86efac,
          emissive: index % 2 === 0 ? 0x16445f : 0x1f5b33,
          emissiveIntensity: 0.6,
          transparent: true,
          opacity: 0.36,
          side: THREE.DoubleSide,
        })
      );
      panel.position.set(x, 1.1 + (index % 2) * 0.34, -2.2 + index * 0.18);
      floatingPanels.push(panel);
      scene.add(panel);
    });

    const dust = createDust({ count: 120, spreadX: 11, spreadY: 5.8, spreadZ: 10, size: 0.03, color: 0xb7ffd6, opacity: 0.42 });
    scene.add(dust.points);
    const glassFlow = createGlassFlowGroup({
      palette: [0x86efac, 0x7dd3fc, 0xf5f8f4],
      spreadX: 5.4,
      spreadY: 2.6,
      spreadZ: 3.2,
      y: 1.9,
      drift: 0.12,
    });
    glassFlow.group.position.set(1.6, 0.4, -1.8);
    scene.add(glassFlow.group);

    camera.position.set(0.4, 1.35, 7.2);
    camera.lookAt(0, 0, -1);

    return {
      update(progress, time) {
        desk.position.z = lerp(-0.9, -0.5, progress);
        keyboard.position.y = -0.58 + Math.sin(time * 2.4) * 0.012;

        monitors.forEach((monitor, index) => {
          monitor.position.y = (index === 0 ? 0.42 : 0.6) + Math.sin(time * 1.3 + index) * 0.04;
          monitor.children[0].material.emissiveIntensity = 0.28 + progress * 0.62 + Math.sin(time * 1.8 + index) * 0.06;
        });

        floatingPanels.forEach((panel, index) => {
          panel.position.y = 1 + (index % 2) * 0.38 + Math.sin(time * 1.4 + index) * 0.12;
          panel.rotation.y = time * 0.24 + index * 0.26;
          panel.material.opacity = 0.16 + progress * 0.26;
        });

        camera.position.x = lerp(-0.2, 0.5, progress);
        camera.position.y = lerp(1.62, 1.12, progress);
        camera.position.z = lerp(7.8, 5.7, progress);
        camera.lookAt(0.1, 0.08, -1.2);
        dust.update(time);
        glassFlow.update(time, progress);
      },
    };
  }

  function buildBeyondDiveScene({ scene, camera }) {
    addBackdrop(scene, "#0a2532", "#02070c");
    addLights(scene, {
      ambientIntensity: 1,
      hemiIntensity: 1.18,
      keyIntensity: 2.1,
      rimIntensity: 3.6,
      keyPosition: new THREE.Vector3(2.8, 4.2, 4),
      rimColor: 0x6ad6ff,
      rimPosition: new THREE.Vector3(-3.8, 2.2, -2.8),
    });

    const floor = createFloor(8, 0x071118, -1.28, 0.16, 0.88);
    scene.add(floor);

    const coral = new THREE.Group();
    [0xff6b7f, 0xffb703, 0x35d0ba].forEach((color, index) => {
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.1, 0.92 - index * 0.12, 10),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.18, roughness: 0.74 })
      );
      stem.position.set(-0.9 + index * 0.24, -0.9 + index * 0.08, -0.4 + index * 0.18);
      stem.rotation.z = -0.2 + index * 0.18;
      coral.add(stem);
    });
    scene.add(coral);

    const diver = createDiverGroup(0.62);
    diver.group.position.set(0.5, 0.05, 0);
    diver.group.rotation.z = -0.22;
    scene.add(diver.group);

    const bubbles = createDust({ count: 36, spreadX: 4, spreadY: 2.8, spreadZ: 3, size: 0.04, color: 0xbaf2ff, opacity: 0.56 });
    bubbles.points.position.set(0.5, -0.2, 0.3);
    scene.add(bubbles.points);

    camera.position.set(0, 0.4, 5.2);
    camera.lookAt(0, 0, 0);

    return {
      update(progress, time) {
        diver.group.position.x = 0.45 + Math.sin(time * 0.9) * 0.16;
        diver.group.position.y = 0.02 + Math.sin(time * 1.1) * 0.08;
        diver.group.rotation.z = -0.18 + Math.sin(time * 1.2) * 0.08;
        diver.animate(time, 0.12);
        coral.rotation.z = Math.sin(time * 0.8) * 0.06;
        bubbles.update(time);
      },
    };
  }

  function buildBeyondGuitarScene({ scene, camera }) {
    addBackdrop(scene, "#14080a", "#030405");
    addLights(scene, {
      ambientIntensity: 0.96,
      hemiIntensity: 1.06,
      keyIntensity: 2,
      rimIntensity: 3.4,
    });

    scene.add(createFloor(7, 0x09090a, -1.25, 0.2, 0.72));

    const guitar = new THREE.Group();
    const body = new THREE.Mesh(
      createStratBodyGeometry(0.18),
      new THREE.MeshStandardMaterial({ color: 0xbf3b1f, roughness: 0.26, metalness: 0.16 })
    );
    body.rotation.x = Math.PI / 2;
    body.rotation.z = -0.42;
    const neck = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 2.1, 0.14),
      new THREE.MeshStandardMaterial({ color: 0xd29b5d, roughness: 0.62 })
    );
    neck.rotation.z = -1.12;
    neck.position.set(1.1, 1.12, 0.05);
    guitar.add(body, neck);
    guitar.position.set(-0.45, -0.2, 0.1);
    scene.add(guitar);

    const ampGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.8, 1.8),
      new THREE.MeshBasicMaterial({ color: 0xffc14d, transparent: true, opacity: 0.18 })
    );
    ampGlow.position.set(1.5, 0.1, -0.8);
    scene.add(ampGlow);

    camera.position.set(0, 0.3, 4.8);
    camera.lookAt(0, 0, 0);

    return {
      update(progress, time) {
        guitar.rotation.z = -0.12 + Math.sin(time * 1.4) * 0.08;
        ampGlow.material.opacity = 0.12 + (Math.sin(time * 4.6) * 0.5 + 0.5) * 0.12;
      },
    };
  }

  function buildBeyondRouteScene({ scene, camera }) {
    addBackdrop(scene, "#0b1016", "#020406");
    addLights(scene, {
      ambientIntensity: 1,
      hemiIntensity: 1.1,
      keyIntensity: 2,
      rimIntensity: 3.2,
      rimColor: 0x7dd3fc,
    });

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(1.55, 1.55, 0.16, 48),
      new THREE.MeshStandardMaterial({ color: 0x0b1015, roughness: 0.48, metalness: 0.34 })
    );
    scene.add(base);

    const grid = new THREE.Mesh(
      new THREE.TorusGeometry(1.42, 0.03, 12, 48),
      new THREE.MeshStandardMaterial({ color: 0x1b2934, emissive: 0x163045, emissiveIntensity: 0.3, roughness: 0.34 })
    );
    grid.rotation.x = Math.PI / 2;
    grid.position.y = 0.1;
    scene.add(grid);

    const route = createRouteArc(
      new THREE.MeshStandardMaterial({
        color: 0xffe58a,
        emissive: 0xffb703,
        emissiveIntensity: 0.46,
        roughness: 0.22,
        metalness: 0.56,
      })
    );
    route.mesh.position.y = 0.12;
    route.mesh.scale.setScalar(0.42);
    scene.add(route.mesh);

    const markers = [
      createMarker(0xffd60a),
      createMarker(0x7dd3fc),
      createMarker(0x86efac),
    ];
    const markerPositions = [
      new THREE.Vector3(-1.14, 0, 0.38),
      new THREE.Vector3(0.06, 0, 0.14),
      new THREE.Vector3(1.24, 0, 0.24),
    ];
    markers.forEach((item, index) => {
      item.marker.position.copy(markerPositions[index]);
      scene.add(item.marker);
    });

    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3c8, emissiveIntensity: 2, roughness: 0.18 })
    );
    scene.add(pulse);

    camera.position.set(0, 0.8, 6.2);
    camera.lookAt(0, 0.4, 0);

    return {
      update(progress, time) {
        const routeT = (time * 0.12) % 1;
        route.curve.getPointAt(routeT, pulse.position);
        pulse.position.multiplyScalar(0.42);
        pulse.position.y = 0.38;
        grid.rotation.z = time * 0.1;
        markers.forEach((marker, index) => {
          marker.orb.scale.setScalar(1 + Math.sin(time * 1.4 + index) * 0.08);
        });
      },
    };
  }

  function buildBeyondDjScene({ scene, camera }) {
    addBackdrop(scene, "#110714", "#030305");
    addLights(scene, {
      ambientIntensity: 0.94,
      hemiIntensity: 1.06,
      keyIntensity: 2.08,
      rimIntensity: 3.4,
      rimColor: 0x7dd3fc,
    });

    scene.add(createFloor(7, 0x09090c, -1.25, 0.22, 0.72));

    const table = new THREE.Mesh(
      new THREE.BoxGeometry(3.3, 0.32, 1.8),
      new THREE.MeshStandardMaterial({ color: 0x101116, roughness: 0.64, metalness: 0.28 })
    );
    scene.add(table);

    const left = new THREE.Mesh(
      new THREE.CylinderGeometry(0.58, 0.58, 0.08, 36),
      new THREE.MeshStandardMaterial({ color: 0x090a0f, roughness: 0.22, metalness: 0.42, emissive: 0x18202b, emissiveIntensity: 0.24 })
    );
    const right = left.clone();
    left.position.set(-0.95, 0.2, 0);
    right.position.set(0.95, 0.2, 0);
    scene.add(left, right);

    const mixer = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.22, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x17181d, roughness: 0.44, metalness: 0.24 })
    );
    mixer.position.set(0, 0.16, 0);
    scene.add(mixer);

    camera.position.set(0, 0.5, 5.2);
    camera.lookAt(0, 0, 0);

    return {
      update(progress, time) {
        left.rotation.y = time * 4;
        right.rotation.y = -time * 4.6;
        mixer.position.x = Math.sin(time * 1.2) * 0.08;
      },
    };
  }

  sceneNodes.forEach((node) => {
    const instance = initInstance(node);
    if (instance) {
      activeInstances.push(instance);
    }
  });

  if (activeInstances.length === 0) {
    return;
  }

  let lastTime = performance.now();

  function frame(now) {
    const delta = now - lastTime;
    lastTime = now;

    activeInstances.forEach((instance) => {
      if (instance.isVisible || instance.type === "hero") {
        instance.render(now, delta);
      }
    });

    window.requestAnimationFrame(frame);
  }

  window.addEventListener("resize", () => {
    activeInstances.forEach((instance) => instance.resize());
  });

  window.requestAnimationFrame(frame);
})();
