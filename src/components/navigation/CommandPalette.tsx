import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  onNewTask: () => void
  onNavigate: (section: string) => void
}

const commands = [
  { label: 'Start a new task', hint: 'N', action: 'new' },
  { label: 'Open connections', hint: 'C', action: 'connections' },
  { label: 'Review usage ledger', hint: 'L', action: 'ledger' },
  { label: 'Toggle privacy mode', hint: 'P', action: 'privacy' },
]

export function CommandPalette({ open, onClose, onNewTask, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50)
    if (!open) setQuery('')
  }, [open])

  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <label className="command-palette__search">
              <Search aria-hidden="true" size={20} />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a command…" />
              <kbd>ESC</kbd>
            </label>
            <div className="command-palette__list">
              <span className="command-palette__eyebrow">Actions</span>
              {filtered.map((command) => (
                <button
                  key={command.action}
                  onClick={() => {
                    if (command.action === 'new') onNewTask()
                    if (command.action === 'connections') onNavigate('connections')
                    if (command.action === 'ledger') onNavigate('ledger')
                    if (command.action === 'privacy') onNavigate('settings')
                    onClose()
                  }}
                >
                  <span>{command.label}</span>
                  <span><kbd>{command.hint}</kbd><ArrowRight size={16} aria-hidden="true" /></span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
