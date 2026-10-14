import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MobileMenu } from './MobileMenu'

describe('MobileMenu', () => {
  it('closes after a destination is chosen', () => {
    const onClose = vi.fn()
    render(<MobileMenu open onClose={onClose} />)
    fireEvent.click(screen.getByRole('link', { name: /studio/i }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
