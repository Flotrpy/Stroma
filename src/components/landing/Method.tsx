import { SectionLabel } from '../ui/SectionLabel'

const steps = [
  {
    index: '01',
    verb: 'Define',
    title: 'Turn intent into a contract.',
    body: 'Your chosen frontier model names the outcome, constraints, capabilities, and acceptance checks—without spending tokens on execution.',
    meta: 'One bounded call',
  },
  {
    index: '02',
    verb: 'Route',
    title: 'Match capability before cost.',
    body: 'Stroma filters by tools, context, privacy, and output requirements. Only then does it select the lightest viable executor.',
    meta: 'Explainable selection',
  },
  {
    index: '03',
    verb: 'Verify',
    title: 'Require evidence, not confidence.',
    body: 'Tests, schemas, citations, and deterministic checks decide whether the result ships, retries, or returns for expert review.',
    meta: 'Controlled escalation',
  },
]

export function Method() {
  return (
    <section className="method" id="method">
      <div className="method__heading">
        <SectionLabel index="01" tone="light">The operating method</SectionLabel>
        <h2>Intelligence belongs at the <em>decision point.</em></h2>
        <p>Not every token deserves frontier compute. Stroma spends it where judgment changes the outcome.</p>
      </div>
      <div className="method__steps">
        {steps.map((step) => (
          <article className="method-step" key={step.index}>
            <header>
              <span>{step.index}</span>
              <span>{step.verb}</span>
            </header>
            <div className="method-step__signal" aria-hidden="true"><span /></div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <footer>{step.meta}</footer>
          </article>
        ))}
      </div>
    </section>
  )
}
