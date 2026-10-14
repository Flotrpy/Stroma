import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PromptComposer } from './PromptComposer'

describe('PromptComposer', () => {
  it('disables task definition until an outcome exists', () => {
    render(<PromptComposer value="" onChange={() => undefined} onSubmit={() => undefined} />)
    expect(screen.getByRole('button', { name: 'Define task' })).toBeDisabled()
  })

  it('submits with the keyboard shortcut', () => {
    const onSubmit = vi.fn()
    render(<PromptComposer value="Ship the verified result" onChange={() => undefined} onSubmit={onSubmit} />)
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', metaKey: true })
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})
