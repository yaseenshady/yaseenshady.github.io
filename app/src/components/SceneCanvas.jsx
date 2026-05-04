import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralCore({ progress }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const haloRef = useRef();
  const lineRef = useRef();
  const panelRefs = useRef([]);

  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        radius: 1.9 + (index % 3) * 0.45,
        speed: 0.22 + index * 0.015,
        phase: index * 0.58,
        offset: (index % 4) * 0.38 - 0.58,
        scale: 0.09 + (index % 3) * 0.025,
      })),
    [],
  );

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(nodes.length * 6), 3),
    );
    return geometry;
  }, [nodes.length]);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(240);

    for (let index = 0; index < positions.length; index += 3) {
      positions[index] = (Math.random() - 0.5) * 12;
      positions[index + 1] = (Math.random() - 0.5) * 8;
      positions[index + 2] = (Math.random() - 0.5) * 8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    const pointer = state.pointer;
    const linePositions = lineGeometry.attributes.position.array;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      elapsed * 0.14 + progress * 1.8 + pointer.x * 0.2,
      0.04,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2 - 0.18 + progress * 0.16,
      0.04,
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      pointer.x * 0.55,
      0.05,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      pointer.y * 0.28 - progress * 0.4,
      0.05,
    );

    const pulse = 1 + Math.sin(elapsed * 1.8 + progress * 4) * 0.04 + progress * 0.12;
    coreRef.current.scale.setScalar(pulse);
    coreRef.current.rotation.y += delta * 0.12;
    haloRef.current.rotation.z += delta * 0.16;

    nodes.forEach((node, index) => {
      const angle = elapsed * node.speed + node.phase + progress * (index % 2 === 0 ? 0.9 : -0.7);
      const x = Math.cos(angle) * node.radius;
      const y = Math.sin(angle * 1.6) * 0.7 + node.offset;
      const z = Math.sin(angle) * node.radius * 0.6;

      const mesh = panelRefs.current[index];
      if (mesh) {
        mesh.position.set(x, y, z);
        mesh.scale.setScalar(node.scale * (1 + Math.sin(elapsed * 2 + index) * 0.18));
      }

      const i = index * 6;
      linePositions[i] = 0;
      linePositions[i + 1] = 0;
      linePositions[i + 2] = 0;
      linePositions[i + 3] = x;
      linePositions[i + 4] = y;
      linePositions[i + 5] = z;
    });

    lineGeometry.attributes.position.needsUpdate = true;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointer.x * 0.6, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      pointer.y * 0.32 + 0.12 - progress * 0.25,
      0.03,
    );
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 7.5 - progress * 1.1, 0.03);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.28, 8]} />
        <meshPhysicalMaterial
          color="#90f2ff"
          roughness={0.12}
          metalness={0.2}
          transmission={0.92}
          thickness={1.2}
          transparent
          opacity={0.94}
          clearcoat={1}
          clearcoatRoughness={0.06}
          emissive="#2cc5ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={haloRef} scale={1.9}>
        <torusGeometry args={[1.1, 0.03, 16, 120]} />
        <meshBasicMaterial color="#8a7dff" transparent opacity={0.42} />
      </mesh>

      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#7ce8ff" transparent opacity={0.26} />
      </lineSegments>

      <points geometry={particleGeometry}>
        <pointsMaterial color="#9fe9ff" size={0.035} transparent opacity={0.72} />
      </points>

      {nodes.map((node, index) => (
        <mesh
          key={node.phase}
          ref={(element) => {
            panelRefs.current[index] = element;
          }}
        >
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#ffffff" : "#9b8cff"}
            emissive={index % 2 === 0 ? "#6fe7ff" : "#8874ff"}
            emissiveIntensity={0.34}
            roughness={0.24}
            metalness={0.18}
          />
        </mesh>
      ))}

      <mesh position={[2.7, -1.2, -1.4]} rotation={[0.6, -0.46, -0.28]}>
        <planeGeometry args={[1.7, 1.05, 1, 1]} />
        <meshPhysicalMaterial
          color="#dff6ff"
          transparent
          opacity={0.16}
          roughness={0.1}
          transmission={0.96}
          thickness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[-2.5, 1.36, -1.1]} rotation={[-0.5, 0.42, 0.34]}>
        <planeGeometry args={[1.28, 0.84, 1, 1]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          roughness={0.08}
          transmission={0.9}
          thickness={0.7}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function SceneCanvas({ progress = 0 }) {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.2, 7.5], fov: 34 }}
      >
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 8, 18]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 3]} intensity={1.3} color="#c5f5ff" />
        <pointLight position={[-4, -3, 5]} intensity={0.7} color="#8f7cff" />
        <spotLight position={[0, 4, 6]} angle={0.45} intensity={1.5} penumbra={1} color="#7ce8ff" />
        <NeuralCore progress={progress} />
      </Canvas>
    </div>
  );
}
