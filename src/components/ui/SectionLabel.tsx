interface SectionLabelProps {
  index: string
  children: string
  tone?: 'dark' | 'light'
}

export function SectionLabel({ index, children, tone = 'dark' }: SectionLabelProps) {
  return (
    <div className={`section-label section-label--${tone}`}>
      <span>{index}</span>
      <span>{children}</span>
    </div>
  )
}
