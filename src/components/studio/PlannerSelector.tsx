import { Check, ChevronDown } from 'lucide-react'
import { planners } from '../../data/models'
import type { PlannerId } from '../../types'

interface PlannerSelectorProps {
  value: PlannerId
  onChange: (id: PlannerId) => void
}

export function PlannerSelector({ value, onChange }: PlannerSelectorProps) {
  return (
    <fieldset className="planner-selector">
      <legend>Planning intelligence</legend>
      <div className="planner-selector__options">
        {planners.map((planner) => (
          <button
            type="button"
            key={planner.id}
            className={planner.id === value ? 'is-selected' : ''}
            onClick={() => onChange(planner.id)}
            aria-pressed={planner.id === value}
          >
            <span className={`planner-selector__logo planner-selector__logo--${planner.id}`}>
              {planner.id === 'codex' ? 'O' : planner.id === 'claude' ? 'A' : '—'}
            </span>
            <span className="planner-selector__copy">
              <strong>{planner.name}</strong>
              <small>{planner.model} · {planner.access}</small>
            </span>
            {planner.id === value ? <Check size={17} aria-hidden="true" /> : <ChevronDown size={15} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
