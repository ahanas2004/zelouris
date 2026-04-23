import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'

function StarField() {
  const { theme } = useTheme()
  const ref = useRef()
  
  const sphere = useMemo(() => {
    const arr = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.pow(Math.random(), 1/3)
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={theme === 'dark' ? "#5b6ef5" : "#3b4ed5"}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 1, -2]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, -1, -1]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#22d3ee" wireframe />
        </mesh>
      </Float>
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 1] }} 
          gl={{ alpha: true, antialias: true }}
          onError={(e) => console.error("Three.js Error:", e)}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <StarField />
          <FloatingShapes />
        </Canvas>
      </Suspense>
    </div>
  )
}
