import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatusDot } from './StatusDot'

describe('StatusDot', () => {
  it('exposes its label to assistive technology', () => {
    render(<StatusDot label="All routes operational" />)
    expect(screen.getByLabelText('All routes operational')).toBeInTheDocument()
  })
})
