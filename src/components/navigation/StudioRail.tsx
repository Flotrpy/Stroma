import { Activity, Cable, Gauge, Settings2, Sparkles } from 'lucide-react'
import { Wordmark } from '../brand/Wordmark'

const items = [
  { id: 'studio', label: 'Studio', icon: Sparkles },
  { id: 'ledger', label: 'Ledger', icon: Activity },
  { id: 'connections', label: 'Connections', icon: Cable },
  { id: 'usage', label: 'Usage', icon: Gauge },
]

interface StudioRailProps {
  active: string
  onChange: (id: string) => void
}

export function StudioRail({ active, onChange }: StudioRailProps) {
  return (
    <aside className="studio-rail">
      <Wordmark compact />
      <nav aria-label="Studio navigation">
        {items.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={active === id ? 'is-active' : ''}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={active === id ? 'page' : undefined}
          >
            <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <button className={active === 'settings' ? 'studio-rail__settings is-active' : 'studio-rail__settings'} onClick={() => onChange('settings')} aria-label="Settings" aria-current={active === 'settings' ? 'page' : undefined}>
        <Settings2 size={19} strokeWidth={1.6} aria-hidden="true" />
        <span>Settings</span>
      </button>
    </aside>
  )
}
