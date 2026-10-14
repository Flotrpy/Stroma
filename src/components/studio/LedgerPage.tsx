import { CheckCircle2, ChevronRight, Clock3, Filter, Search } from 'lucide-react'
import { ledgerItems } from '../../data/ledger'

export function LedgerPage() {
  return (
    <main className="studio-page ledger-page">
      <header className="studio-page__header">
        <div><span>Evidence ledger</span><h2>Every run, accounted for.</h2></div>
        <p>Inspect the planner call, executor route, verification state, and retained quota for each task.</p>
      </header>
      <div className="studio-page__tools">
        <label><Search size={15} aria-hidden="true" /><input placeholder="Search runs" aria-label="Search runs" /></label>
        <button><Filter size={14} aria-hidden="true" />Filter</button>
      </div>
      <div className="ledger-page__list">
        {ledgerItems.map((item) => (
          <button key={item.id}>
            <span className="ledger-page__kind">{item.kind.slice(0, 1).toUpperCase()}</span>
            <span className="ledger-page__title"><small>{item.id} · {item.timestamp}</small><strong>{item.title}</strong></span>
            <span className="ledger-page__route"><small>Route</small>{item.planner} <i>→</i> {item.executor}</span>
            <span className="ledger-page__saved"><small>Retained</small>{item.saved}</span>
            <span className={`ledger-page__status ledger-page__status--${item.status}`}><CheckCircle2 size={14} />{item.status}</span>
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
      <footer className="studio-page__footnote"><Clock3 size={13} /> Preview history is stored only in this demo session.</footer>
    </main>
  )
}
