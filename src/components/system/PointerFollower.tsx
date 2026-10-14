import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PointerFollower() {
  const x = useMotionValue(-30)
  const y = useMotionValue(-30)
  const smoothX = useSpring(x, { stiffness: 700, damping: 46 })
  const smoothY = useSpring(y, { stiffness: 700, damping: 46 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 5)
      y.set(event.clientY - 5)
      setActive(true)
    }
    const leave = () => setActive(false)
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  return <motion.div className="pointer-follower" style={{ x: smoothX, y: smoothY, opacity: active ? 1 : 0 }} aria-hidden="true" />
}
