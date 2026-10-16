import { CheckCircle2, RotateCcw, Square } from 'lucide-react'
import type { ReviewReport, RunStage } from '../../types'
import { RouteDiagram } from '../visual/RouteDiagram'

const labels: Record<RunStage, string> = {
  idle: 'Ready to define',
  defining: 'Defining task contract',
  routing: 'Evaluating execution pool',
  executing: 'Executor is working',
  verifying: 'Running acceptance checks',
  reviewing: 'Planner is reviewing the work',
  repairing: 'Planner is fixing findings',
  complete: 'Run verified',
}

interface RunSummaryProps {
  stage: RunStage
  review?: ReviewReport | null
  onReset: () => void
}

export function RunSummary({ stage, review, onReset }: RunSummaryProps) {
  const unreviewed = stage === 'complete' && review?.outcome === 'unreviewed' && review.findings.length > 0
  const fixed = review?.findings.filter((finding) => finding.resolved).length ?? 0

  return (
    <div className={`run-summary run-summary--${stage}`}>
      <div className="run-summary__head">
        <div>
          <span className="run-summary__eyebrow">Run state</span>
          <strong>{unreviewed ? 'Needs human review' : labels[stage]}</strong>
        </div>
        {stage === 'complete' ? <CheckCircle2 aria-hidden="true" /> : stage !== 'idle' ? <Square size={16} fill="currentColor" aria-hidden="true" /> : null}
      </div>
      <RouteDiagram stage={stage} />
      {stage === 'complete' && (
        <div className="run-summary__receipt">
          <div><span>Planner use</span><strong>{review ? `${review.plannerCalls} ${review.plannerCalls === 1 ? 'call' : 'calls'}` : '1 call'}</strong></div>
          <div><span>Executor use</span><strong>Free tier</strong></div>
          <div><span>Checks</span><strong>{review ? `${review.checksPassed} / ${review.checksTotal}` : '3 / 3'}</strong></div>
          <div><span>Planner fixes</span><strong>{fixed}</strong></div>
          <button onClick={onReset}><RotateCcw size={14} aria-hidden="true" /> New run</button>
        </div>
      )}
    </div>
  )
}
