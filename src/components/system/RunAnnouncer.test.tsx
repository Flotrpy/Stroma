import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useStromaStore } from '../../store/useStromaStore'
import { RunAnnouncer } from './RunAnnouncer'

describe('RunAnnouncer', () => {
  beforeEach(() => useStromaStore.setState({ stage: 'idle' }))

  it('announces verification completion', () => {
    useStromaStore.setState({ stage: 'complete' })
    render(<RunAnnouncer />)
    expect(screen.getByRole('status')).toHaveTextContent(/passed verification/i)
  })
})
