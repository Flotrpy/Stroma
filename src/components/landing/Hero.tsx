import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ArrowButton } from '../ui/ArrowButton'
import { SectionLabel } from '../ui/SectionLabel'
import { RelayScene } from '../visual/RelayScene'

interface HeroProps {
  onEnterStudio: () => void
}

export function Hero({ onEnterStudio }: HeroProps) {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__copy">
        <SectionLabel index="00">The task intelligence layer</SectionLabel>
        <motion.h1
          initial={reducedMotion ? false : { y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Think <em>once.</em><br />
          Run light.
        </motion.h1>
        <motion.div
          className="hero__intro"
          initial={reducedMotion ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.65 }}
        >
          <span className="hero__rule" aria-hidden="true" />
          <p>Frontier intelligence defines the work. Efficient models execute it. Every hand-off is visible, bounded, and verified.</p>
        </motion.div>
        <motion.div
          className="hero__actions"
          initial={reducedMotion ? false : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.55 }}
        >
          <ArrowButton onClick={onEnterStudio}>Open task studio</ArrowButton>
          <button className="hero__watch" onClick={() => document.querySelector('#method')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play size={14} fill="currentColor" aria-hidden="true" />
            See the method
          </button>
        </motion.div>
      </div>
      <motion.div
        className="hero__visual"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <RelayScene reducedMotion={reducedMotion} />
        <div className="hero__visual-meta hero__visual-meta--top">
          <span>Relay core</span>
          <span>R.01</span>
        </div>
        <div className="hero__visual-meta hero__visual-meta--bottom">
          <span>Planner → Executor</span>
          <span>Live topology</span>
        </div>
      </motion.div>
      <a className="hero__scroll" href="#method">
        <span>Scroll to inspect</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
      <div className="hero__edition">System preview / 2026</div>
    </section>
  )
}
