import { CircleDollarSign } from 'lucide-react'
import { useState } from 'react'

export function BudgetControl() {
  const [budget, setBudget] = useState(0)

  return (
    <div className="budget-control">
      <div><CircleDollarSign size={15} aria-hidden="true" /><span>Maximum executor spend</span></div>
      <label>
        <span>{budget === 0 ? 'Free only' : `$${budget.toFixed(2)}`}</span>
        <input aria-label="Maximum executor spend" type="range" min="0" max="1" step="0.05" value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
      </label>
    </div>
  )
}
