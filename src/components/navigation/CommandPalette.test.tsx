import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CommandPalette } from './CommandPalette'

describe('CommandPalette', () => {
  it('routes connection commands to the proper workspace', () => {
    const onNavigate = vi.fn()
    render(<CommandPalette open onClose={() => undefined} onNewTask={() => undefined} onNavigate={onNavigate} />)
    fireEvent.click(screen.getByRole('button', { name: /open connections/i }))
    expect(onNavigate).toHaveBeenCalledWith('connections')
  })

  it('filters commands by entered text', () => {
    render(<CommandPalette open onClose={() => undefined} onNewTask={() => undefined} onNavigate={() => undefined} />)
    fireEvent.change(screen.getByPlaceholderText(/type a command/i), { target: { value: 'privacy' } })
    expect(screen.getByRole('button', { name: /privacy/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /new task/i })).not.toBeInTheDocument()
  })
})
