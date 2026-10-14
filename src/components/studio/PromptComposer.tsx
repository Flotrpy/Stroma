import { ArrowUp, AtSign, Paperclip, SlidersHorizontal } from 'lucide-react'
import { examplePrompts } from '../../data/demo'

interface PromptComposerProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled?: boolean
}

export function PromptComposer({ value, onChange, onSubmit, disabled = false }: PromptComposerProps) {
  return (
    <div className="prompt-composer">
      <div className="prompt-composer__utility">
        <span>Describe the outcome</span>
        <span>{value.length} / 4,000</span>
      </div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="What needs to be true when the work is done?"
        rows={5}
        disabled={disabled}
        onKeyDown={(event) => {
          if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') onSubmit()
        }}
      />
      {!value && (
        <div className="prompt-composer__examples">
          <span>Try</span>
          {examplePrompts.slice(0, 2).map((prompt, index) => (
            <button key={prompt} onClick={() => onChange(prompt)}>{index + 1}. {prompt}</button>
          ))}
        </div>
      )}
      <div className="prompt-composer__toolbar">
        <div>
          <button aria-label="Attach context"><Paperclip size={17} aria-hidden="true" /></button>
          <button aria-label="Mention a source"><AtSign size={17} aria-hidden="true" /></button>
          <button aria-label="Task controls"><SlidersHorizontal size={17} aria-hidden="true" /></button>
        </div>
        <div>
          <span><kbd>⌘</kbd><kbd>↵</kbd></span>
          <button className="prompt-composer__submit" onClick={onSubmit} disabled={disabled || !value.trim()} aria-label="Define task">
            <ArrowUp size={19} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
