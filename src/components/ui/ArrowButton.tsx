import { ArrowUpRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  quiet?: boolean
}

export function ArrowButton({ children, quiet = false, className = '', ...props }: ArrowButtonProps) {
  return (
    <button className={`arrow-button ${quiet ? 'arrow-button--quiet' : ''} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.7} />
    </button>
  )
}
