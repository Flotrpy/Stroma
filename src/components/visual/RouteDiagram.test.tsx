import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RouteDiagram } from './RouteDiagram'

describe('RouteDiagram', () => {
  it('announces the active lifecycle stage', () => {
    render(<RouteDiagram stage="verifying" />)
    expect(screen.getByLabelText('Current run stage: verifying')).toBeInTheDocument()
  })
})
