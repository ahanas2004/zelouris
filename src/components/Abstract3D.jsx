import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Sphere, TorusKnot, Icosahedron, Environment, ContactShadows, Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'
import * as THREE from 'three'

function StarField({ theme }) {
  const ref = useRef()
  const spherePositions = useMemo(() => {
    const count = 4000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 5
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 60
      ref.current.rotation.y -= delta / 65
    }
  })

  // Vibrant neon colors for both themes
  const particleColor = theme === 'dark' ? "#5b6ef5" : "#8b5cf6" // Deep blue vs Intense Violet
  const particleOpacity = theme === 'dark' ? 0.9 : 0.8 // Keep high opacity in both

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.03} // Slightly larger for better visibility in light theme
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={particleOpacity}
        />
      </Points>
    </group>
  )
}

function Scene({ type, theme, withStars }) {
  const config = useMemo(() => {
    const isDark = theme === 'dark'
    return {
      color: isDark ? '#5b6ef5' : '#8b5cf6',
      emissive: isDark ? '#22d3ee' : '#ffffff',
      roughness: 0.1,
      transmission: 1.0,
      thickness: 0.5,
      ior: 1.2,
      chromaticAberration: 0.02,
      anisotropy: 0.1,
      distortion: 0.5,
      distortionScale: 0.5,
      temporalDistortion: 0.1,
    }
  }, [theme])

  return (
    <>
      {withStars && <StarField theme={theme} />}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {type === 'sphere' && (
          <Sphere args={[1, 32, 32]} scale={1.5}>
            <MeshDistortMaterial
              color={config.color}
              speed={2}
              distort={0.4}
              radius={1}
              metalness={0.5}
              roughness={0.2}
            />
          </Sphere>
        )}
        
        {type === 'torus' && (
          <TorusKnot args={[1, 0.3, 128, 32]} scale={1.2}>
            <MeshTransmissionMaterial {...config} background={new THREE.Color(theme === 'dark' ? '#03030b' : '#fdfdff')} />
          </TorusKnot>
        )}

        {type === 'combo' && (
          <group>
             <TorusKnot position={[1.8, 0, 0]} args={[1, 0.3, 128, 32]} scale={1.3}>
                <MeshTransmissionMaterial {...config} background={new THREE.Color(theme === 'dark' ? '#03030b' : '#fdfdff')} />
             </TorusKnot>
             <Sphere position={[-1.8, -0.5, -1]} args={[1, 32, 32]} scale={1.1}>
                <MeshDistortMaterial color={config.color} speed={2} distort={0.4} radius={1} metalness={0.5} roughness={0.2} />
             </Sphere>
          </group>
        )}
        
        {type === 'icosahedron' && (
          <Icosahedron args={[1, 0]} scale={1.5}>
            <meshStandardMaterial color={config.color} wireframe emissive={config.emissive} emissiveIntensity={theme === 'dark' ? 1 : 0.2} />
          </Icosahedron>
        )}
      </Float>
      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
    </>
  )
}

export default function Abstract3D({ type = 'sphere', style, className, withStars = false }) {
  const { theme } = useTheme()

  return (
    <div className={className} style={{ 
      position: 'absolute', 
      inset: 0, 
      zIndex: 5, 
      pointerEvents: 'none', 
      ...style 
    }}>
      <Suspense fallback={null}>
        <Canvas 
          key={theme}
          camera={{ position: [0, 0, 7], fov: 45 }} 
          gl={{ 
            antialias: true, 
            alpha: true, 
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={theme === 'dark' ? 0.8 : 1.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={theme === 'dark' ? 3.5 : 2.5} />
          <pointLight position={[-10, -10, -10]} intensity={2} color={theme === 'dark' ? '#8b5cf6' : '#5b6ef5'} />
          <Scene type={type} theme={theme} withStars={withStars} />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  )
}
