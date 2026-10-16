import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RoutePreview } from './RoutePreview'

describe('RoutePreview', () => {
  it('shows access and cost before execution', () => {
    render(<RoutePreview plannerId="codex" executorId="groq" />)
    expect(screen.getByText('ChatGPT plan')).toBeInTheDocument()
    expect(screen.getByText('Free tier')).toBeInTheDocument()
    expect(screen.getByText(/review before run/i)).toBeInTheDocument()
    expect(screen.getByText('Fixes mistakes')).toBeInTheDocument()
  })
})
