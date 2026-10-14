import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Wordmark } from '../brand/Wordmark'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 80 : 1150)
    return () => window.clearTimeout(timer)
  }, [reducedMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="intro-loader" exit={{ y: '-100%' }} transition={{ duration: .72, ease: [0.76, 0, 0.24, 1] }} aria-hidden="true">
          <Wordmark />
          <div className="intro-loader__signal"><span /></div>
          <div className="intro-loader__meta"><span>Initializing task intelligence</span><span>00—01</span></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
