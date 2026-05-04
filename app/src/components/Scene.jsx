import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Shaders ─────────────────────────────────────────────────────────── */
const ORB_VERT = /* glsl */`
  varying vec3 vNormal;
  uniform float uTime;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    float disp = sin(pos.x * 2.8 + uTime * 0.9) * cos(pos.y * 3.1 + uTime * 0.7) * 0.055
               + sin(pos.z * 2.5 + uTime * 1.1) * 0.038;
    pos += normal * disp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`
const ORB_FRAG = /* glsl */`
  varying vec3 vNormal;
  uniform float uTime;
  uniform vec3  uColor;
  void main() {
    float fresnel = pow(1.0 - clamp(vNormal.z, 0.0, 1.0), 2.4);
    float pulse   = 0.5 + 0.5 * sin(uTime * 1.7);
    vec3  edge    = uColor * (1.0 + pulse * 0.24);
    vec3  inner   = uColor * 0.06;
    gl_FragColor  = vec4(mix(inner, edge, fresnel), fresnel * 0.9 + 0.03);
  }
`
const CORE_VERT = /* glsl */`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const CORE_FRAG = /* glsl */`
  varying vec3 vNormal;
  uniform float uTime;
  uniform vec3  uColor;
  void main() {
    float pulse  = 0.5 + 0.5 * sin(uTime * 2.1);
    float center = 1.0 - clamp(vNormal.z, 0.0, 1.0);
    gl_FragColor = vec4(uColor * (0.5 + pulse * 0.22), center * (0.18 + pulse * 0.08));
  }
`

/* ── Node distribution (Fibonacci sphere) ───────────────────────────── */
function fibSphere(n, r) {
  const pts = []
  const gr  = (1 + Math.sqrt(5)) / 2
  for (let i = 0; i < n; i++) {
    const th  = Math.acos(1 - 2 * (i + 0.5) / n)
    const phi = 2 * Math.PI * i / gr
    pts.push(new THREE.Vector3(
      r * Math.sin(th) * Math.cos(phi),
      r * Math.sin(th) * Math.sin(phi),
      r * Math.cos(th)
    ))
  }
  return pts
}

/* ── Main orb + network component ──────────────────────────────────── */
function NeuralOrb() {
  const groupRef = useRef()
  const orbRef   = useRef()
  const coreRef  = useRef()

  /* Uniforms — stable references, mutated in useFrame */
  const orbUni = useMemo(() => ({
    uTime:  { value: 0 },
    uColor: { value: new THREE.Color('#ffd60a') },
  }), [])
  const coreUni = useMemo(() => ({
    uTime:  { value: 0 },
    uColor: { value: new THREE.Color('#ffd60a') },
  }), [])

  /* Network geometry */
  const { nodePosArr, linePosArr } = useMemo(() => {
    const nodes     = fibSphere(72, 2.0)
    const nodeArr   = new Float32Array(nodes.length * 3)
    const lineSegs  = []
    nodes.forEach((n, i) => {
      nodeArr[i*3] = n.x; nodeArr[i*3+1] = n.y; nodeArr[i*3+2] = n.z
      nodes.slice(i+1).forEach(m => {
        if (n.distanceTo(m) < 1.08) {
          lineSegs.push(n.x, n.y, n.z, m.x, m.y, m.z)
        }
      })
    })
    return { nodePosArr: nodeArr, linePosArr: new Float32Array(lineSegs) }
  }, [])

  /* Particle cloud */
  const cloudArr = useMemo(() => {
    const arr = new Float32Array(700 * 3)
    for (let i = 0; i < 700; i++) {
      const r   = 3.6 + Math.random() * 4.2
      const phi = Math.random() * Math.PI * 2
      const th  = Math.acos(2 * Math.random() - 1)
      arr[i*3]   = r * Math.sin(th) * Math.cos(phi)
      arr[i*3+1] = r * Math.sin(th) * Math.sin(phi)
      arr[i*3+2] = r * Math.cos(th)
    }
    return arr
  }, [])

  const cloudRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.elapsedTime
    orbUni.uTime.value  = t
    coreUni.uTime.value = t

    if (groupRef.current) {
      groupRef.current.rotation.y += (mouse.x * 0.4 - groupRef.current.rotation.y) * 0.04
      groupRef.current.rotation.x += (-mouse.y * 0.2 - groupRef.current.rotation.x) * 0.04
      groupRef.current.rotation.y += t * 0.012   /* slow auto-spin */
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y = -t * 0.025
      cloudRef.current.rotation.x =  t * 0.015
    }
  })

  return (
    <>
      {/* Outer drifting particle cloud */}
      <points ref={cloudRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={cloudArr} count={700} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#ffd60a" transparent opacity={0.28} sizeAttenuation />
      </points>

      <group ref={groupRef}>
        {/* Node–node connection lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" array={linePosArr} count={linePosArr.length / 3} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#ffd60a" transparent opacity={0.14} />
        </lineSegments>

        {/* Node dots */}
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" array={nodePosArr} count={nodePosArr.length / 3} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial size={0.055} color="#ffe066" transparent opacity={0.82} sizeAttenuation />
        </points>

        {/* Glass orb — outer fresnel shell */}
        <mesh ref={orbRef}>
          <sphereGeometry args={[1.5, 128, 128]} />
          <shaderMaterial
            uniforms={orbUni}
            vertexShader={ORB_VERT}
            fragmentShader={ORB_FRAG}
            transparent
            depthWrite={false}
          />
        </mesh>

        {/* Inner glow core */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[1.35, 64, 64]} />
          <shaderMaterial
            uniforms={coreUni}
            vertexShader={CORE_VERT}
            fragmentShader={CORE_FRAG}
            transparent
            depthWrite={false}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  )
}

/* ── Exported Canvas ──────────────────────────────────────────────────── */
export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 52 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} color="#ffd060" />
      <pointLight position={[5, 5, 4]}    intensity={3}   color="#ffd60a" />
      <pointLight position={[-5, -3, -5]} intensity={1.2} color="#ff9000" />
      <pointLight position={[0, -5, 3]}   intensity={1.8} color="#ffffff" />
      <NeuralOrb />
    </Canvas>
  )
}
