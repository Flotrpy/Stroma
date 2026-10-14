import { Check, Copy, ShieldAlert } from 'lucide-react'
import { useState } from 'react'
import type { TaskContract } from '../../types'

export function TaskContractPanel({ contract }: { contract: TaskContract | null }) {
  const [copied, setCopied] = useState(false)

  if (!contract) {
    return (
      <aside className="contract-panel contract-panel--empty">
        <div className="contract-panel__heading"><span>Task contract</span><small>Awaiting definition</small></div>
        <div className="contract-panel__empty-mark" aria-hidden="true">{ }</div>
        <h3>Nothing is assumed.</h3>
        <p>The planner will define outcomes and checks here before an executor receives the task.</p>
      </aside>
    )
  }

  return (
    <aside className="contract-panel">
      <div className="contract-panel__heading">
        <span>Task contract</span>
        <button
          onClick={() => {
            void navigator.clipboard?.writeText(JSON.stringify(contract, null, 2))
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1200)
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <section>
        <span className="contract-panel__label">Intent</span>
        <h3>{contract.intent}</h3>
      </section>
      <section>
        <span className="contract-panel__label">Deliverables</span>
        <ol>{contract.deliverables.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>
      <section>
        <span className="contract-panel__label">Acceptance</span>
        <ul>{contract.acceptanceTests.map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul>
      </section>
      <div className="contract-panel__risk"><ShieldAlert size={15} aria-hidden="true" /><span>Risk</span><strong>{contract.risk}</strong></div>
    </aside>
  )
}
