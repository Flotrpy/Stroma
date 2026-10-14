import { ExternalLink, KeyRound, Laptop, LockKeyhole, Plus } from 'lucide-react'
import { executors, planners } from '../../data/models'

export function ConnectionsPage() {
  return (
    <main className="studio-page connections-page">
      <header className="studio-page__header">
        <div><span>Provider connections</span><h2>Access without ambiguity.</h2></div>
        <p>Subscription access, API keys, and local runtimes are distinct. Stroma never disguises one as another.</p>
      </header>
      <section className="connections-page__section">
        <div className="connections-page__section-head"><span>Planning accounts</span><small>1 connected</small></div>
        <div className="connections-page__cards">
          {planners.slice(0, 2).map((planner) => (
            <article key={planner.id}>
              <div className={`connections-page__brand connections-page__brand--${planner.id}`}>{planner.id === 'codex' ? 'O' : 'A'}</div>
              <div><h3>{planner.name}</h3><p>{planner.model}</p></div>
              <span className={`connections-page__state connections-page__state--${planner.status}`}>{planner.status}</span>
              <dl><div><dt>Access</dt><dd>{planner.access}</dd></div><div><dt>Storage</dt><dd>Local vault</dd></div></dl>
              <button>{planner.status === 'connected' ? 'Manage' : 'Connect'} <ExternalLink size={13} /></button>
            </article>
          ))}
        </div>
      </section>
      <section className="connections-page__section">
        <div className="connections-page__section-head"><span>Execution providers</span><button><Plus size={13} />Add provider</button></div>
        <div className="connections-page__rows">
          {executors.map((executor) => (
            <article key={executor.id}>
              <span className="connections-page__key">{executor.id === 'local' ? <Laptop size={18} /> : <KeyRound size={18} />}</span>
              <div><h3>{executor.name}</h3><p>{executor.provider}</p></div>
              <div><small>Cost</small><strong>{executor.cost}</strong></div>
              <div><small>Privacy</small><strong>{executor.privacy}</strong></div>
              <span className={`connections-page__state connections-page__state--${executor.status}`}>{executor.status}</span>
            </article>
          ))}
        </div>
      </section>
      <footer className="studio-page__footnote"><LockKeyhole size={13} /> Provider secrets are represented for preview only; no credentials are collected.</footer>
    </main>
  )
}
