import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

// The central "Brain" or "Core" of the AI
function AICoreObject({ isMobile }) {
  const coreRef = useRef()

  useFrame((state) => {
    if (!coreRef.current) return
    coreRef.current.rotation.x = state.clock.elapsedTime * 0.1
    coreRef.current.rotation.y = state.clock.elapsedTime * 0.15
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={coreRef} args={[1, 128, 128]} scale={isMobile ? 1.5 : 2.5}>
        <MeshDistortMaterial
          color="#03030b"         // Deep, dark base
          emissive="#5b6ef5"      // Electric blue/purple glow
          emissiveIntensity={2}   // High intensity for Bloom to catch
          distort={0.4}           // Organic, shifting shape
          speed={1.5}             // Speed of distortion
          roughness={0.1}         // Very smooth, glass/liquid-like
          metalness={1}           // Highly reflective
          clearcoat={1}           // Extra glossy layer
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </Sphere>
      
      {/* Inner bright core for intense center glow */}
      <Sphere args={[0.8, 32, 32]} scale={isMobile ? 1.4 : 2.4}>
         <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </Sphere>
    </Float>
  )
}

// Swirling data particles around the core
function DataNebula({ count = 3000, isMobile }) {
  const pointsRef = useRef()

  // Generate random positions in a thick ring/sphere shape
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = (isMobile ? 2 : 3) + Math.random() * 4 // Spread out from the core
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [count, isMobile])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y -= delta * 0.05 // Slow rotation
    pointsRef.current.rotation.z -= delta * 0.02
  })

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Makes particles glow when they overlap
      />
    </Points>
  )
}

// Sparkles floating randomly in space
function DataSparks({ isMobile }) {
  return (
    <Sparkles 
      count={isMobile ? 100 : 300} 
      scale={isMobile ? 8 : 12} 
      size={isMobile ? 1 : 2} 
      speed={0.4} 
      opacity={0.8} 
      color="#22d3ee" 
    />
  )
}

export default function AICoreScene({ className, style }) {
  const isMobile = window.innerWidth <= 768

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', ...style }}>
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, isMobile ? 8 : 7], fov: 45 }} 
          gl={{ antialias: false, powerPreference: "high-performance", alpha: false }} // Alpha false helps with bloom blending over dark bg
          dpr={[1, 1.5]} // Limit pixel ratio for performance while keeping it sharp enough
        >
          <color attach="background" args={['#03030b']} /> {/* Match global deep background exactly */}
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
          <spotLight position={[-10, -10, -10]} intensity={2} color="#f472b6" />

          {/* The 3D Objects */}
          <AICoreObject isMobile={isMobile} />
          <DataNebula count={isMobile ? 1500 : 4000} isMobile={isMobile} />
          <DataSparks isMobile={isMobile} />

          {/* Post-Processing: The secret to the Active Theory / Lusion Look */}
          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={1.5} // Only glow the brightest parts (the emissive core and particles)
              mipmapBlur 
              intensity={1.5} 
            />
            <Noise opacity={0.035} /> {/* Subtle cinematic film grain */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} /> {/* Darken edges to focus on center */}
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  )
}
