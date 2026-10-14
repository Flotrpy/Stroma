import { ArrowRight, Eye, ShieldCheck, Zap } from 'lucide-react'
import { executors, planners } from '../../data/models'
import type { ExecutorId, PlannerId } from '../../types'

export function RoutePreview({ plannerId, executorId }: { plannerId: PlannerId; executorId: ExecutorId }) {
  const planner = planners.find((item) => item.id === plannerId)
  const executor = executors.find((item) => item.id === executorId)
  if (!planner || !executor) return null

  return (
    <section className="route-preview" aria-label="Proposed model route">
      <div className="route-preview__model"><small>Define</small><strong>{planner.name}</strong><span>{planner.access}</span></div>
      <ArrowRight className="route-preview__arrow" size={17} aria-hidden="true" />
      <div className="route-preview__model"><small>Execute</small><strong>{executor.name}</strong><span>{executor.cost}</span></div>
      <div className="route-preview__reasons">
        <span><Zap size={12} />{executor.latency.toFixed(1)}s median</span>
        <span><ShieldCheck size={12} />{executor.status}</span>
        <span><Eye size={12} />Review before run</span>
      </div>
    </section>
  )
}
