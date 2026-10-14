import { Float, Line, MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

interface RelayCoreProps {
  active?: boolean
  reducedMotion?: boolean
}

function Orbit({ radius, tilt, speed, active }: { radius: number; tilt: number; speed: number; active: boolean }) {
  const group = useRef<THREE.Group>(null)
  const points = useMemo(() => {
    return Array.from({ length: 96 }, (_, index) => {
      const angle = (index / 95) * Math.PI * 2
      return new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    })
  }, [radius])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * speed * (active ? 1.7 : 1)
  })

  return (
    <group ref={group} rotation={[tilt, 0, tilt * 0.35]}>
      <Line points={points} color={active ? '#d7ff64' : '#77786f'} lineWidth={0.65} transparent opacity={active ? 0.8 : 0.35} />
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#d7ff64" />
      </mesh>
    </group>
  )
}

export function RelayCore({ active = false, reducedMotion = false }: RelayCoreProps) {
  const core = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!core.current || reducedMotion) return
    core.current.rotation.x += delta * 0.08
    core.current.rotation.y += delta * (active ? 0.2 : 0.1)
    core.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.08
  })

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.12} floatIntensity={reducedMotion ? 0 : 0.2}>
      <mesh ref={core} scale={1.15}>
        <torusKnotGeometry args={[0.83, 0.24, 180, 32, 2, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={256}
          thickness={0.35}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.15}
          temporalDistortion={reducedMotion ? 0 : 0.06}
          color={active ? '#d7ff64' : '#c9cabf'}
          roughness={0.18}
          transmission={0.92}
          ior={1.32}
        />
      </mesh>
      <Orbit radius={1.55} tilt={0.35} speed={0.12} active={active} />
      <Orbit radius={1.8} tilt={1.1} speed={-0.08} active={active} />
      <Orbit radius={2.05} tilt={-0.8} speed={0.05} active={active} />
      <Sparkles count={active ? 42 : 24} scale={4.5} size={1.25} speed={reducedMotion ? 0 : 0.22} color="#d7ff64" opacity={0.35} />
    </Float>
  )
}
