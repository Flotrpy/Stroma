import { Command, LockKeyhole, MoreHorizontal } from 'lucide-react'
import { StatusDot } from '../ui/StatusDot'

interface StudioTopbarProps {
  onCommand: () => void
}

export function StudioTopbar({ onCommand }: StudioTopbarProps) {
  return (
    <header className="studio-topbar">
      <div>
        <span className="studio-topbar__title">Task studio</span>
        <span className="studio-topbar__project">Untitled workspace / Preview</span>
      </div>
      <div className="studio-topbar__actions">
        <span className="studio-topbar__privacy"><LockKeyhole size={14} aria-hidden="true" />Local token vault</span>
        <StatusDot label="Ready" />
        <button className="studio-topbar__command" onClick={onCommand}>
          <Command size={15} aria-hidden="true" />
          <span>Command</span>
          <kbd>⌘ K</kbd>
        </button>
        <button aria-label="More options"><MoreHorizontal aria-hidden="true" /></button>
      </div>
    </header>
  )
}
