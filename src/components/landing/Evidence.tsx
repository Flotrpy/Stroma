import { Check, ChevronRight } from 'lucide-react'
import { ledgerItems } from '../../data/ledger'
import { SectionLabel } from '../ui/SectionLabel'

export function Evidence() {
  return (
    <section className="evidence" id="ledger">
      <div className="evidence__heading">
        <SectionLabel index="03">The evidence ledger</SectionLabel>
        <h2>Every run leaves a receipt.</h2>
        <p>Preview data demonstrates how task history, model choice, savings, and verification stay inspectable.</p>
      </div>
      <div className="evidence__table" role="table" aria-label="Illustrative run history">
        <div className="evidence__row evidence__row--head" role="row">
          <span role="columnheader">Task</span>
          <span role="columnheader">Route</span>
          <span role="columnheader">Saved</span>
          <span role="columnheader">State</span>
        </div>
        {ledgerItems.map((item) => (
          <button className="evidence__row" role="row" key={item.id}>
            <span className="evidence__task" role="cell"><small>{item.id}</small>{item.title}</span>
            <span className="evidence__route" role="cell">{item.planner}<i>→</i>{item.executor}</span>
            <span className="evidence__saved" role="cell">{item.saved}</span>
            <span className={`evidence__state evidence__state--${item.status}`} role="cell">
              <Check size={13} aria-hidden="true" />{item.status}<ChevronRight size={16} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <p className="evidence__note">Illustrative product data. Live values appear only after a user-authorized run.</p>
    </section>
  )
}
