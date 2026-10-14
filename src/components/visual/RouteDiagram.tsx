import { motion } from 'framer-motion'
import type { RunStage } from '../../types'

const stages: Array<{ id: RunStage; label: string; index: string }> = [
  { id: 'defining', label: 'Define', index: '01' },
  { id: 'routing', label: 'Route', index: '02' },
  { id: 'executing', label: 'Execute', index: '03' },
  { id: 'verifying', label: 'Verify', index: '04' },
]

const stageIndex: Record<RunStage, number> = {
  idle: -1,
  defining: 0,
  routing: 1,
  executing: 2,
  verifying: 3,
  complete: 4,
}

export function RouteDiagram({ stage }: { stage: RunStage }) {
  const current = stageIndex[stage]

  return (
    <div className="route-diagram" aria-label={`Current run stage: ${stage}`}>
      <div className="route-diagram__line" aria-hidden="true">
        <motion.span animate={{ scaleX: Math.max(0, current / 3) }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} />
      </div>
      {stages.map((item, index) => {
        const state = index < current ? 'done' : index === current ? 'active' : 'waiting'
        return (
          <div key={item.id} className={`route-diagram__step route-diagram__step--${state}`}>
            <span className="route-diagram__node" aria-hidden="true" />
            <span className="route-diagram__index">{item.index}</span>
            <span className="route-diagram__label">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
