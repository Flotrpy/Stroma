import { useState } from 'react'
import { Evidence } from './components/landing/Evidence'
import { Footer } from './components/landing/Footer'
import { Hero } from './components/landing/Hero'
import { Manifesto } from './components/landing/Manifesto'
import { Method } from './components/landing/Method'
import { Header } from './components/navigation/Header'
import { MobileMenu } from './components/navigation/MobileMenu'
import { CommandPalette } from './components/navigation/CommandPalette'
import { StudioShell } from './components/studio/StudioShell'
import { Marquee } from './components/ui/Marquee'
import { SkipLink } from './components/ui/SkipLink'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { useStromaStore } from './store/useStromaStore'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const commandOpen = useStromaStore((state) => state.commandOpen)
  const setCommandOpen = useStromaStore((state) => state.setCommandOpen)
  const setPrompt = useStromaStore((state) => state.setPrompt)
  const resetRun = useStromaStore((state) => state.resetRun)
  const setActiveSection = useStromaStore((state) => state.setActiveSection)
  useKeyboardShortcuts()

  const enterStudio = () => document.querySelector('#studio')?.scrollIntoView({ behavior: 'smooth' })
  const newTask = () => {
    setPrompt('')
    resetRun()
    enterStudio()
  }
  const navigateStudio = (section: string) => {
    setActiveSection(section)
    enterStudio()
  }

  return (
    <div className="app">
      <SkipLink />
      <Header onOpenStudio={newTask} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main-content">
        <Hero onEnterStudio={enterStudio} />
        <Marquee />
        <Method />
        <StudioShell />
        <Evidence />
        <Manifesto />
      </main>
      <Footer />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} onNewTask={newTask} onNavigate={navigateStudio} />
    </div>
  )
}
