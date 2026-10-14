import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { RelayCore } from './RelayCore'

interface RelaySceneProps {
  active?: boolean
  reducedMotion?: boolean
}

export function RelayScene({ active = false, reducedMotion = false }: RelaySceneProps) {
  return (
    <div className="relay-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={3.2} color="#ffffff" />
        <pointLight position={[-3, -1, 2]} intensity={active ? 18 : 9} color="#d7ff64" />
        <Suspense fallback={null}>
          <RelayCore active={active} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  )
}
