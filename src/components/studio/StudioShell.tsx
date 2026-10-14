import { useStromaStore } from '../../store/useStromaStore'
import { StudioRail } from '../navigation/StudioRail'
import { ConnectionsPage } from './ConnectionsPage'
import { LedgerPage } from './LedgerPage'
import { SettingsPage } from './SettingsPage'
import { StudioTopbar } from './StudioTopbar'
import { StudioWorkspace } from './StudioWorkspace'
import { UsagePage } from './UsagePage'

export function StudioShell() {
  const activeSection = useStromaStore((state) => state.activeSection)
  const setActiveSection = useStromaStore((state) => state.setActiveSection)
  const setCommandOpen = useStromaStore((state) => state.setCommandOpen)

  const content = {
    studio: <StudioWorkspace />,
    ledger: <LedgerPage />,
    connections: <ConnectionsPage />,
    usage: <UsagePage />,
    settings: <SettingsPage />,
  }[activeSection] ?? <StudioWorkspace />

  return (
    <section className="studio-shell" id="studio">
      <div className="studio-shell__frame">
        <StudioRail active={activeSection} onChange={setActiveSection} />
        <div className="studio-shell__body" id="studio-view" role="tabpanel" aria-label={`${activeSection} workspace`}>
          <StudioTopbar onCommand={() => setCommandOpen(true)} />
          {content}
        </div>
      </div>
    </section>
  )
}

