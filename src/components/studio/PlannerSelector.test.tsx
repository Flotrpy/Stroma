import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PlannerSelector } from './PlannerSelector'

describe('PlannerSelector', () => {
  it('reports and changes the selected planner', () => {
    const onChange = vi.fn()
    render(<PlannerSelector value="codex" onChange={onChange} />)
    expect(screen.getByRole('button', { name: /codex/i })).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(screen.getByRole('button', { name: /claude/i }))
    expect(onChange).toHaveBeenCalledWith('claude')
  })
})
