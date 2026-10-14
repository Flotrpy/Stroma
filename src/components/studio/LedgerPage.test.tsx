import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LedgerPage } from './LedgerPage'

describe('LedgerPage', () => {
  it('labels preview retention honestly', () => {
    render(<LedgerPage />)
    expect(screen.getByText(/preview history is stored only/i)).toBeInTheDocument()
  })

  it('exposes every seeded run', () => {
    render(<LedgerPage />)
    expect(screen.getAllByText(/run-18/i)).toHaveLength(4)
  })
})
