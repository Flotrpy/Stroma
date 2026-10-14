import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TaskModeSelector } from './TaskModeSelector'

describe('TaskModeSelector', () => {
  it('exposes the quota-saving behavior before a run', () => {
    const onChange = vi.fn()
    render(<TaskModeSelector value="auto" onChange={onChange} />)
    expect(screen.getByRole('radio', { name: /saver/i })).toHaveAttribute('aria-checked', 'true')
    fireEvent.click(screen.getByRole('radio', { name: /architect/i }))
    expect(onChange).toHaveBeenCalledWith('architect')
  })
})
