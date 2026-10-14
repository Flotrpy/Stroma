import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { IntroLoader } from './IntroLoader'

describe('IntroLoader', () => {
  afterEach(() => vi.useRealTimers())

  it('does not become a permanent interaction barrier', () => {
    vi.useFakeTimers()
    render(<IntroLoader />)
    expect(screen.getByText(/initializing task intelligence/i)).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(2000))
    expect(screen.queryByText(/initializing task intelligence/i)).not.toBeInTheDocument()
  })
})
