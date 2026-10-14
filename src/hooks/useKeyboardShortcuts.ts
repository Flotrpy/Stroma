import { useEffect } from 'react'
import { useStromaStore } from '../store/useStromaStore'

export function useKeyboardShortcuts() {
  const setCommandOpen = useStromaStore((state) => state.setCommandOpen)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen(true)
      }

      if (event.key === 'Escape') {
        setCommandOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setCommandOpen])
}
