import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('opens a new task from the primary action', () => {
    const onOpenStudio = vi.fn()
    render(<Header onOpenStudio={onOpenStudio} onOpenMenu={() => undefined} />)
    fireEvent.click(screen.getByRole('button', { name: /new task/i }))
    expect(onOpenStudio).toHaveBeenCalledOnce()
  })
})
