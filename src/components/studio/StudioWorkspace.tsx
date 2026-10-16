import { useStromaStore } from '../../store/useStromaStore'
import { useRunSimulation } from '../../hooks/useRunSimulation'
import { ConnectionPanel } from './ConnectionPanel'
import { ExecutorList } from './ExecutorList'
import { PlannerSelector } from './PlannerSelector'
import { PromptComposer } from './PromptComposer'
import { RunSummary } from './RunSummary'
import { ReviewPanel } from './ReviewPanel'
import { TaskContractPanel } from './TaskContractPanel'
import { UsagePanel } from './UsagePanel'
import { TaskModeSelector } from './TaskModeSelector'
import { RoutePreview } from './RoutePreview'
import { BudgetControl } from './BudgetControl'

export function StudioWorkspace() {
  const planner = useStromaStore((state) => state.planner)
  const executor = useStromaStore((state) => state.executor)
  const prompt = useStromaStore((state) => state.prompt)
  const taskMode = useStromaStore((state) => state.taskMode)
  const stage = useStromaStore((state) => state.stage)
  const contract = useStromaStore((state) => state.contract)
  const review = useStromaStore((state) => state.review)
  const setPlanner = useStromaStore((state) => state.setPlanner)
  const setExecutor = useStromaStore((state) => state.setExecutor)
  const setPrompt = useStromaStore((state) => state.setPrompt)
  const setTaskMode = useStromaStore((state) => state.setTaskMode)
  const resetRun = useStromaStore((state) => state.resetRun)
  const { start } = useRunSimulation()

  return (
    <div className="studio-workspace">
      <main className="studio-workspace__main">
        <div className="studio-workspace__intro">
          <span>New task</span>
          <h2>What should be <em>true</em> when the work is done?</h2>
          <p>Describe the result. Stroma will define the contract before choosing an executor.</p>
        </div>
        <TaskModeSelector value={taskMode} onChange={setTaskMode} />
        <PlannerSelector value={planner} onChange={setPlanner} />
        <RoutePreview plannerId={planner} executorId={executor} />
        <BudgetControl />
        <PromptComposer value={prompt} onChange={setPrompt} onSubmit={start} disabled={stage !== 'idle' && stage !== 'complete'} />
        <RunSummary stage={stage} review={review} onReset={resetRun} />
        <UsagePanel />
        <ConnectionPanel />
      </main>
      <div className="studio-workspace__side">
        <ExecutorList value={executor} onChange={setExecutor} />
        <TaskContractPanel contract={contract} />
        <ReviewPanel review={review} stage={stage} />
      </div>
    </div>
  )
}
