import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SettingsPage } from './SettingsPage'

describe('SettingsPage', () => {
  it('lets users change route confirmation policy', () => {
    render(<SettingsPage />)
    const toggle = screen.getByRole('checkbox', { name: /preview every route/i })
    expect(toggle).toBeChecked()
    fireEvent.click(toggle)
    expect(toggle).not.toBeChecked()
  })
})
