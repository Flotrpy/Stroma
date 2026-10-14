import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { demoContract } from '../../data/demo'
import { TaskContractPanel } from './TaskContractPanel'

describe('TaskContractPanel', () => {
  it('does not imply a task before planning occurs', () => {
    render(<TaskContractPanel contract={null} />)
    expect(screen.getByText('Nothing is assumed.')).toBeInTheDocument()
  })

  it('renders acceptance checks from the contract', () => {
    render(<TaskContractPanel contract={demoContract} />)
    expect(screen.getByText('Duplicate events are idempotent')).toBeInTheDocument()
  })
})
