interface StatusDotProps {
  status?: 'live' | 'idle' | 'warning'
  label?: string
}

export function StatusDot({ status = 'live', label }: StatusDotProps) {
  return (
    <span className={`status-dot status-dot--${status}`} aria-label={label}>
      <span aria-hidden="true" />
      {label && <span className="status-dot__label">{label}</span>}
    </span>
  )
}
