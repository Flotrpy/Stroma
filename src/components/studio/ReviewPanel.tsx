import { CheckCircle2, CircleAlert, Wrench } from 'lucide-react'
import type { ReviewReport, RunStage } from '../../types'

interface ReviewPanelProps {
  review: ReviewReport | null
  stage: RunStage
}

export function ReviewPanel({ review, stage }: ReviewPanelProps) {
  if (!review) {
    return (
      <aside className="review-panel review-panel--empty" aria-label="Planner review">
        <div className="contract-panel__heading"><span>Planner review</span><small>After execution</small></div>
        <p>When the executor finishes, the planner checks its work against the contract and fixes anything that fails.</p>
      </aside>
    )
  }

  const repaired = stage === 'complete'

  return (
    <aside className="review-panel" aria-label="Planner review">
      <div className="contract-panel__heading">
        <span>Planner review</span>
        <small>{review.reviewer}</small>
      </div>
      {review.findings.length === 0 ? (
        <p className="review-panel__clean"><CheckCircle2 size={14} aria-hidden="true" />No issues found. Executor output accepted as-is.</p>
      ) : (
        <ul className="review-panel__findings">
          {review.findings.map((finding) => {
            const state = !finding.resolved ? 'open' : repaired ? 'fixed' : 'found'
            return (
              <li key={finding.check} className={`review-panel__finding review-panel__finding--${state}`}>
                <span className="review-panel__state">
                  {state === 'fixed' ? <CheckCircle2 size={13} aria-hidden="true" /> : state === 'found' ? <Wrench size={13} aria-hidden="true" /> : <CircleAlert size={13} aria-hidden="true" />}
                  {state === 'fixed' ? 'Fixed by planner' : state === 'found' ? 'Repairing' : 'Open'}
                </span>
                <strong>{finding.check}</strong>
                <p><small>Issue</small>{finding.issue}</p>
                {(state !== 'found') && <p><small>{finding.resolved ? 'Fix' : 'Next step'}</small>{finding.fix}</p>}
              </li>
            )
          })}
        </ul>
      )}
    </aside>
  )
}
