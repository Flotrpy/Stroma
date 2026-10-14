import { ArrowUpRight } from 'lucide-react'

const principles = [
  ['01', 'No invisible routing', 'See the model, provider, policy, and reason before anything runs.'],
  ['02', 'No borrowed authority', 'A user’s account serves only that user and only the task they approved.'],
  ['03', 'No confident guessing', 'Acceptance checks determine completion. Model confidence does not.'],
  ['04', 'No artificial lock-in', 'Bring your provider, run locally, or export the task contract.'],
]

export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__statement">
        <span>Design position</span>
        <h2>AI infrastructure should feel less like magic—and more like an instrument.</h2>
      </div>
      <div className="manifesto__principles">
        {principles.map(([index, title, body]) => (
          <article key={index}>
            <span>{index}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <ArrowUpRight aria-hidden="true" size={18} />
          </article>
        ))}
      </div>
    </section>
  )
}
