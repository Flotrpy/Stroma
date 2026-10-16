import { useStromaStore } from '../../store/useStromaStore'

const announcements = {
  idle: 'Task studio ready.',
  defining: 'Defining the task contract.',
  routing: 'Selecting a capable executor.',
  executing: 'The executor is working.',
  verifying: 'Running acceptance checks.',
  reviewing: 'The planner is reviewing the executor output.',
  repairing: 'The planner is fixing review findings.',
  complete: 'The run completed and passed verification.',
}

export function RunAnnouncer() {
  const stage = useStromaStore((state) => state.stage)
  return <div className="sr-only" role="status" aria-live="polite">{announcements[stage]}</div>
}
