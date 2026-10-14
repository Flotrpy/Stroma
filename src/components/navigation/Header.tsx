import { Menu, Plus } from 'lucide-react'
import { Wordmark } from '../brand/Wordmark'
import { StatusDot } from '../ui/StatusDot'

interface HeaderProps {
  onOpenStudio: () => void
  onOpenMenu: () => void
}

export function Header({ onOpenStudio, onOpenMenu }: HeaderProps) {
  return (
    <header className="site-header">
      <Wordmark />
      <div className="site-header__status">
        <StatusDot label="All routes operational" />
      </div>
      <nav className="site-header__nav" aria-label="Primary navigation">
        <a href="#method">Method</a>
        <a href="#studio">Studio</a>
        <a href="#ledger">Ledger</a>
      </nav>
      <button className="site-header__launch" onClick={onOpenStudio}>
        New task <Plus size={16} aria-hidden="true" />
      </button>
      <button className="site-header__menu" onClick={onOpenMenu} aria-label="Open menu">
        <Menu aria-hidden="true" />
      </button>
    </header>
  )
}
