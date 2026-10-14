import { useStromaStore } from '../../store/useStromaStore'
import { StudioRail } from '../navigation/StudioRail'
import { StudioTopbar } from './StudioTopbar'
import { StudioWorkspace } from './StudioWorkspace'

export function StudioShell() {
  const activeSection = useStromaStore((state) => state.activeSection)
  const setActiveSection = useStromaStore((state) => state.setActiveSection)
  const setCommandOpen = useStromaStore((state) => state.setCommandOpen)

  return (
    <section className="studio-shell" id="studio">
      <div className="studio-shell__frame">
        <StudioRail active={activeSection} onChange={setActiveSection} />
        <div className="studio-shell__body">
          <StudioTopbar onCommand={() => setCommandOpen(true)} />
          <StudioWorkspace />
        </div>
      </div>
    </section>
  )
}
