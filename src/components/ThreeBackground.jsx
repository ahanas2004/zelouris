import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '../context/ThemeContext'
import * as THREE from 'three'

function StarField() {
  const { theme } = useTheme()
  const ref = useRef()
  
  const sphere = useMemo(() => {
    const count = 5000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 4
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
      ref.current.rotation.x -= delta / 40
      ref.current.rotation.y -= delta / 45
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme === 'dark' ? "#5b6ef5" : "#8b5cf6"}
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={theme === 'dark' ? 0.5 : 0.25}
        />
      </Points>
    </group>
  )
}

const ThreeBackground = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }} 
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <StarField />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreeBackground
