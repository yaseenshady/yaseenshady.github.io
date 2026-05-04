import { memo, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei/core/Line";
import { MeshTransmissionMaterial } from "@react-three/drei/core/MeshTransmissionMaterial";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import * as THREE from "three";

const sectionThemes = [
  { accent: "#7dd3fc", rim: "#ffffff", position: [0, 0.1, 0], scale: 1.08, orbit: 0.3 },
  { accent: "#60a5fa", rim: "#a78bfa", position: [-1.9, 0.7, -0.4], scale: 0.98, orbit: 0.55 },
  { accent: "#a78bfa", rim: "#f8fafc", position: [1.7, 0.2, -0.7], scale: 0.92, orbit: 0.72 },
  { accent: "#86efac", rim: "#7dd3fc", position: [0.4, -0.35, -0.8], scale: 1.18, orbit: 0.86 },
  { accent: "#facc15", rim: "#60a5fa", position: [-1.35, -0.2, -0.5], scale: 0.94, orbit: 1.02 },
  { accent: "#7dd3fc", rim: "#86efac", position: [1.35, 0.12, -0.25], scale: 1.06, orbit: 1.18 },
  { accent: "#f8fafc", rim: "#a78bfa", position: [0, 0.78, 0.08], scale: 0.9, orbit: 1.34 }
];

const nodeVectors = [
  new THREE.Vector3(2.2, 0.25, 0.4),
  new THREE.Vector3(-2.15, -0.3, 0.4),
  new THREE.Vector3(0.4, 2.05, -0.2),
  new THREE.Vector3(-0.2, -2.1, 0.3),
  new THREE.Vector3(1.3, -1.35, -0.75),
  new THREE.Vector3(-1.55, 1.15, -0.55),
  new THREE.Vector3(1.45, 1.1, 0.92),
  new THREE.Vector3(-1.3, -1.15, 0.95)
];

function ParticleField({ color }) {
  const points = useRef();
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(220 * 3);
    for (let index = 0; index < 220; index += 1) {
      const radius = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.cos(phi) * 0.45;
      positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) {
      return;
    }
    points.current.rotation.y = state.clock.elapsedTime * 0.03;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.045} transparent opacity={0.55} depthWrite={false} />
    </points>
  );
}

function GlassSatellites({ sceneStateRef }) {
  const group = useRef();
  const refs = useRef([]);

  useFrame((state, delta) => {
    const sectionIndex = sceneStateRef.current.sectionIndex || 0;
    const sectionProgress = sceneStateRef.current.sectionProgress || 0;
    const theme = sectionThemes[sectionIndex];

    refs.current.forEach((mesh, index) => {
      if (!mesh) {
        return;
      }

      const targetOpacity = sectionIndex > 0 ? 0.18 + index * 0.06 : 0.08;
      mesh.material.opacity = THREE.MathUtils.damp(mesh.material.opacity, targetOpacity, 4.5, delta);
      mesh.position.x = THREE.MathUtils.damp(
        mesh.position.x,
        (index - 1.5) * 1.8 + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.25,
        4,
        delta
      );
      mesh.position.y = THREE.MathUtils.damp(
        mesh.position.y,
        (index % 2 === 0 ? 1 : -1) * (0.7 + index * 0.18) + Math.cos(state.clock.elapsedTime * 0.7 + index) * 0.14,
        4,
        delta
      );
      mesh.rotation.z += delta * (0.08 + index * 0.02);
      mesh.material.color.lerp(new THREE.Color(theme.rim), 0.02 + sectionProgress * 0.02);
    });

    if (group.current) {
      group.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {[0, 1, 2, 3].map((item) => (
        <RoundedBox
          key={item}
          ref={(node) => {
            refs.current[item] = node;
          }}
          args={[1.1 + item * 0.22, 0.14, 0.9]}
          radius={0.16}
          smoothness={5}
          position={[0, 0, -2 - item * 0.22]}
        >
          <meshPhysicalMaterial
            color={item % 2 === 0 ? "#7dd3fc" : "#ffffff"}
            transparent
            opacity={0.12}
            roughness={0.08}
            metalness={0.05}
            transmission={0.94}
            thickness={1.6}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </RoundedBox>
      ))}
    </group>
  );
}

function SceneCluster({ sceneStateRef, reducedMotion }) {
  const root = useRef();
  const core = useRef();
  const halo = useRef();
  const nodeRefs = useRef([]);
  const { camera } = useThree();

  const connectionSets = useMemo(
    () => [
      [nodeVectors[0], nodeVectors[2]],
      [nodeVectors[1], nodeVectors[3]],
      [nodeVectors[4], nodeVectors[6]],
      [nodeVectors[5], nodeVectors[7]]
    ],
    []
  );

  useFrame((state, delta) => {
    const sectionIndex = sceneStateRef.current.sectionIndex || 0;
    const sectionProgress = sceneStateRef.current.sectionProgress || 0;
    const theme = sectionThemes[sectionIndex];
    const progress = sceneStateRef.current.progress || 0;
    const mouse = sceneStateRef.current.mouse || { x: 0, y: 0 };
    const damp = THREE.MathUtils.damp;

    if (root.current) {
      root.current.position.x = damp(root.current.position.x, theme.position[0] + (reducedMotion ? 0 : mouse.x * 0.8), 4, delta);
      root.current.position.y = damp(root.current.position.y, theme.position[1] + (reducedMotion ? 0 : -mouse.y * 0.6), 4, delta);
      root.current.position.z = damp(root.current.position.z, theme.position[2], 4, delta);
      const scale = damp(root.current.scale.x, theme.scale, 4.6, delta);
      root.current.scale.setScalar(scale);
      root.current.rotation.y += delta * (reducedMotion ? 0.05 : 0.18 + theme.orbit * 0.08);
      root.current.rotation.x = damp(root.current.rotation.x, reducedMotion ? 0.08 : mouse.y * 0.2 + progress * 0.12, 4, delta);
    }

    if (core.current) {
      core.current.rotation.x += delta * 0.18;
      core.current.rotation.y += delta * 0.22;
    }

    if (halo.current) {
      halo.current.rotation.z += delta * 0.12;
      halo.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.045);
    }

    nodeRefs.current.forEach((node, index) => {
      if (!node) {
        return;
      }
      const base = nodeVectors[index];
      const oscillation = reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.08;
      node.position.set(base.x, base.y + oscillation, base.z);
      node.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.08);
    });

    camera.position.x = damp(camera.position.x, reducedMotion ? 0 : mouse.x * 0.7, 4, delta);
    camera.position.y = damp(camera.position.y, reducedMotion ? 0 : -mouse.y * 0.4, 4, delta);
    camera.position.z = damp(camera.position.z, 10.5 - sectionIndex * 0.25 + Math.sin(progress * Math.PI) * 0.2, 4, delta);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <fog attach="fog" args={["#05070a", 9, 24]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 5]} intensity={2.2} color="#dff5ff" />
      <pointLight position={[-5, 1, -4]} intensity={18} distance={18} color="#60a5fa" />
      <pointLight position={[4, -2, 5]} intensity={16} distance={16} color="#a78bfa" />

      <group ref={root}>
        <mesh ref={halo}>
          <torusGeometry args={[2.2, 0.05, 32, 120]} />
          <meshBasicMaterial color="#7dd3fc" transparent opacity={0.24} />
        </mesh>

        <mesh ref={core}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshTransmissionMaterial
            transmission={0.98}
            thickness={1.2}
            roughness={0.08}
            chromaticAberration={0.03}
            anisotropicBlur={0.1}
            color="#9bd8ff"
            backside
            backsideThickness={0.3}
          />
        </mesh>

        <mesh scale={1.35}>
          <sphereGeometry args={[1.25, 48, 48]} />
          <meshBasicMaterial color="#7dd3fc" transparent opacity={0.08} />
        </mesh>

        {nodeVectors.map((position, index) => (
          <mesh
            key={`${position.x}-${position.y}-${position.z}`}
            ref={(node) => {
              nodeRefs.current[index] = node;
            }}
            position={position.toArray()}
          >
            <sphereGeometry args={[0.16, 20, 20]} />
            <MeshTransmissionMaterial
              transmission={0.96}
              thickness={0.8}
              roughness={0.04}
              color={index % 2 === 0 ? "#f8fafc" : "#7dd3fc"}
            />
          </mesh>
        ))}

        {nodeVectors.map((vector, index) => (
          <Line
            key={`core-${index}`}
            points={[[0, 0, 0], vector.toArray()]}
            color="#7dd3fc"
            transparent
            opacity={0.22}
            lineWidth={1}
          />
        ))}

        {connectionSets.map((points, index) => (
          <Line
            key={`pair-${index}`}
            points={points.map((point) => point.toArray())}
            color="#ffffff"
            transparent
            opacity={0.14}
            lineWidth={1}
          />
        ))}
      </group>

      <GlassSatellites sceneStateRef={sceneStateRef} />
      <ParticleField color="#7dd3fc" />
    </>
  );
}

function SceneCanvas({ sceneStateRef, reducedMotion }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10.5], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#05070a"]} />
        <SceneCluster sceneStateRef={sceneStateRef} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

export default memo(SceneCanvas);
