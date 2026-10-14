import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroLoader } from './IntroLoader'

describe('IntroLoader', () => {
  it('does not become a permanent interaction barrier', async () => {
    render(<IntroLoader />)
    expect(screen.getByText(/initializing task intelligence/i)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText(/initializing task intelligence/i)).not.toBeInTheDocument(), { timeout: 3000 })
  })
})
