import { Check, ShieldCheck, Timer } from 'lucide-react'
import { executors } from '../../data/models'
import type { ExecutorId } from '../../types'

interface ExecutorListProps {
  value: ExecutorId
  onChange: (id: ExecutorId) => void
}

export function ExecutorList({ value, onChange }: ExecutorListProps) {
  return (
    <div className="executor-list">
      <div className="executor-list__heading">
        <div><span>Execution pool</span><small>Capability-filtered</small></div>
        <button>Manage</button>
      </div>
      {executors.map((executor, index) => (
        <button
          className={`executor ${value === executor.id ? 'is-selected' : ''}`}
          key={executor.id}
          onClick={() => onChange(executor.id)}
          aria-pressed={value === executor.id}
        >
          <span className="executor__rank">0{index + 1}</span>
          <span className="executor__body">
            <strong>{executor.name}</strong>
            <small>{executor.provider}</small>
            <span className="executor__tags">{executor.strengths.slice(0, 2).map((strength) => <i key={strength}>{strength}</i>)}</span>
          </span>
          <span className="executor__metrics">
            <strong>{executor.cost}</strong>
            <small><Timer size={12} aria-hidden="true" />{executor.latency.toFixed(1)}s</small>
            <small><ShieldCheck size={12} aria-hidden="true" />{executor.status}</small>
          </span>
          <span className="executor__check">{value === executor.id && <Check size={14} aria-hidden="true" />}</span>
        </button>
      ))}
    </div>
  )
}
