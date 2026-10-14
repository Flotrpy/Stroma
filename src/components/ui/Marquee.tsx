const phrases = ['DEFINE', 'ROUTE', 'EXECUTE', 'VERIFY']

export function Marquee() {
  return (
    <div className="marquee" aria-label="Define, route, execute, verify">
      <div className="marquee__track" aria-hidden="true">
        {[...phrases, ...phrases].map((phrase, index) => (
          <span key={`${phrase}-${index}`}>
            {phrase}<i>↗</i>
          </span>
        ))}
      </div>
    </div>
  )
}
