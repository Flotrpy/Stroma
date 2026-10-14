const bars = [42, 58, 35, 72, 48, 84, 67, 92, 63, 78, 54, 88]

export function UsagePanel() {
  return (
    <section className="usage-panel">
      <header><span>Usage architecture</span><small>Illustrative / last 12 runs</small></header>
      <div className="usage-panel__metrics">
        <div><span>Frontier calls avoided</span><strong>38</strong><small>+12 this week</small></div>
        <div><span>Estimated quota retained</span><strong>86<sup>%</sup></strong><small>Against frontier-only routing</small></div>
        <div><span>Verification pass rate</span><strong>94<sup>%</sup></strong><small>First or second attempt</small></div>
      </div>
      <div className="usage-panel__chart" aria-label="Illustrative quota retained across twelve runs">
        <div className="usage-panel__axis"><span>100%</span><span>50%</span><span>0%</span></div>
        <div className="usage-panel__bars">
          {bars.map((height, index) => <span key={index} style={{ '--height': `${height}%` } as React.CSSProperties}><i>R{index + 1}</i></span>)}
        </div>
      </div>
    </section>
  )
}
