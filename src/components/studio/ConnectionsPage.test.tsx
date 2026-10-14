import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ConnectionsPage } from './ConnectionsPage'

describe('ConnectionsPage', () => {
  it('distinguishes API access from subscription access', () => {
    render(<ConnectionsPage />)
    expect(screen.getByText('ChatGPT plan')).toBeInTheDocument()
    expect(screen.getByText('API key')).toBeInTheDocument()
  })

  it('states that credentials are not collected in preview', () => {
    render(<ConnectionsPage />)
    expect(screen.getByText(/no credentials are collected/i)).toBeInTheDocument()
  })
})
