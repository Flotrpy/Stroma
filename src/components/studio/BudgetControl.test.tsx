import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BudgetControl } from './BudgetControl'

describe('BudgetControl', () => {
  it('defaults to free-only execution', () => {
    render(<BudgetControl />)
    expect(screen.getByText('Free only')).toBeInTheDocument()
  })

  it('shows an exact ceiling when changed', () => {
    render(<BudgetControl />)
    fireEvent.change(screen.getByRole('slider'), { target: { value: '0.25' } })
    expect(screen.getByText('$0.25')).toBeInTheDocument()
  })
})
