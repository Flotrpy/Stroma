import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { demoContract, demoExecution } from '../../data/demo'
import { reviewExecution } from '../../lib/review'
import { ReviewPanel } from './ReviewPanel'

describe('ReviewPanel', () => {
  const review = reviewExecution(demoContract, demoExecution, 'codex', () => 'Moved the dedupe lookup ahead of retries.')

  it('explains the review step before a run', () => {
    render(<ReviewPanel review={null} stage="idle" />)
    expect(screen.getByText(/planner checks its work/i)).toBeInTheDocument()
  })

  it('shows the planner fix once the run completes', () => {
    render(<ReviewPanel review={review} stage="complete" />)
    expect(screen.getByText('Fixed by planner')).toBeInTheDocument()
    expect(screen.getByText('Moved the dedupe lookup ahead of retries.')).toBeInTheDocument()
  })

  it('marks findings as in repair while the planner works', () => {
    render(<ReviewPanel review={review} stage="reviewing" />)
    expect(screen.getByText('Repairing')).toBeInTheDocument()
  })
})
