import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ExecutorList } from './ExecutorList'

describe('ExecutorList', () => {
  it('keeps the user in control of executor selection', () => {
    const onChange = vi.fn()
    render(<ExecutorList value="groq" onChange={onChange} />)
    fireEvent.click(screen.getByRole('button', { name: /local runtime/i }))
    expect(onChange).toHaveBeenCalledWith('local')
  })
})
