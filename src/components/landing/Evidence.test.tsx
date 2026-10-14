import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Evidence } from './Evidence'

describe('Evidence', () => {
  it('labels all marketing metrics as illustrative', () => {
    render(<Evidence />)
    expect(screen.getByText(/illustrative product data/i)).toBeInTheDocument()
  })
})
