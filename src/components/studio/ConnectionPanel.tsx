import { Check, KeyRound, LockKeyhole, Plus } from 'lucide-react'
import { executors, planners } from '../../data/models'

export function ConnectionPanel() {
  return (
    <section className="connection-panel" id="connections">
      <header>
        <div><span>Connections</span><h2>Your models. Your authority.</h2></div>
        <p>Credentials remain in the local token vault. Stroma displays the access method before every request.</p>
      </header>
      <div className="connection-panel__grid">
        <div className="connection-panel__group">
          <span className="connection-panel__label">Planning</span>
          {planners.slice(0, 2).map((planner) => (
            <article key={planner.id}>
              <span className={`connection-panel__icon connection-panel__icon--${planner.id}`}>{planner.id === 'codex' ? 'O' : 'A'}</span>
              <div><strong>{planner.name}</strong><small>{planner.access}</small></div>
              <span className={`connection-panel__state connection-panel__state--${planner.status}`}><Check size={12} />{planner.status}</span>
            </article>
          ))}
        </div>
        <div className="connection-panel__group">
          <span className="connection-panel__label">Execution</span>
          {executors.map((executor) => (
            <article key={executor.id}>
              <span className="connection-panel__icon"><KeyRound size={17} /></span>
              <div><strong>{executor.name}</strong><small>{executor.cost}</small></div>
              <span className={`connection-panel__state connection-panel__state--${executor.status}`}><Check size={12} />{executor.status}</span>
            </article>
          ))}
          <button className="connection-panel__add"><Plus size={16} /> Add provider</button>
        </div>
      </div>
      <footer><LockKeyhole size={14} /> Secrets are encrypted locally and never rendered back into the interface.</footer>
    </section>
  )
}
