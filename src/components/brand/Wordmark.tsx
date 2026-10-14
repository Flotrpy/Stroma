interface WordmarkProps {
  compact?: boolean
}

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <a className="wordmark" href="#top" aria-label="Stroma home">
      <svg className="wordmark__mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M3 10.5 16 3l13 7.5v11L16 29 3 21.5z" />
        <path d="m3 10.5 13 7.3 13-7.3M16 17.8V29" />
        <circle cx="16" cy="10.4" r="2.2" />
      </svg>
      {!compact && <span>Stroma</span>}
    </a>
  )
}
