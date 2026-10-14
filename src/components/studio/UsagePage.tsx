import { ArrowDownRight, ArrowUpRight, CircleDollarSign, Gauge, Leaf } from 'lucide-react'

const routes = [
  ['GPT-OSS 120B', '17', '44%', 'Free'],
  ['Gemini Flash', '12', '31%', 'Free'],
  ['Local Runtime', '7', '18%', 'Local'],
  ['Free Router', '3', '7%', 'Free'],
]

export function UsagePage() {
  return (
    <main className="studio-page usage-page">
      <header className="studio-page__header">
        <div><span>Usage architecture</span><h2>Spend intelligence where it matters.</h2></div>
        <p>These illustrative metrics show the comparison Stroma will calculate from user-authorized provider receipts.</p>
      </header>
      <div className="usage-page__summary">
        <article><Gauge /><span>Frontier calls</span><strong>8</strong><small><ArrowDownRight />38 avoided</small></article>
        <article><Leaf /><span>Quota retained</span><strong>86%</strong><small><ArrowUpRight />12% this week</small></article>
        <article><CircleDollarSign /><span>Executor cost</span><strong>$0.00</strong><small>Free and local routes</small></article>
      </div>
      <section className="usage-page__distribution">
        <header><div><span>Execution distribution</span><h3>39 completed runs</h3></div><small>Preview period</small></header>
        <div className="usage-page__stack" aria-label="Execution model distribution">
          <span style={{ width: '44%' }} /><span style={{ width: '31%' }} /><span style={{ width: '18%' }} /><span style={{ width: '7%' }} />
        </div>
        <div className="usage-page__routes">
          {routes.map(([model, runs, share, cost], index) => (
            <div key={model}><span><i data-index={index} />{model}</span><strong>{runs}</strong><span>{share}</span><span>{cost}</span></div>
          ))}
        </div>
      </section>
      <p className="usage-page__disclaimer">No savings claim is made until Stroma can compare an actual selected route against a user-defined frontier baseline.</p>
    </main>
  )
}
