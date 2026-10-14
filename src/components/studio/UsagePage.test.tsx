import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UsagePage } from './UsagePage'

describe('UsagePage', () => {
  it('qualifies savings as illustrative', () => {
    render(<UsagePage />)
    expect(screen.getByText(/no savings claim is made/i)).toBeInTheDocument()
  })
})
