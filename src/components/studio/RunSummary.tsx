import { CheckCircle2, RotateCcw, Square } from 'lucide-react'
import type { RunStage } from '../../types'
import { RouteDiagram } from '../visual/RouteDiagram'

const labels: Record<RunStage, string> = {
  idle: 'Ready to define',
  defining: 'Defining task contract',
  routing: 'Evaluating execution pool',
  executing: 'Executor is working',
  verifying: 'Running acceptance checks',
  complete: 'Run verified',
}

interface RunSummaryProps {
  stage: RunStage
  onReset: () => void
}

export function RunSummary({ stage, onReset }: RunSummaryProps) {
  return (
    <div className={`run-summary run-summary--${stage}`}>
      <div className="run-summary__head">
        <div>
          <span className="run-summary__eyebrow">Run state</span>
          <strong>{labels[stage]}</strong>
        </div>
        {stage === 'complete' ? <CheckCircle2 aria-hidden="true" /> : stage !== 'idle' ? <Square size={16} fill="currentColor" aria-hidden="true" /> : null}
      </div>
      <RouteDiagram stage={stage} />
      {stage === 'complete' && (
        <div className="run-summary__receipt">
          <div><span>Planner use</span><strong>1 call</strong></div>
          <div><span>Executor use</span><strong>Free tier</strong></div>
          <div><span>Checks</span><strong>3 / 3</strong></div>
          <button onClick={onReset}><RotateCcw size={14} aria-hidden="true" /> New run</button>
        </div>
      )}
    </div>
  )
}
