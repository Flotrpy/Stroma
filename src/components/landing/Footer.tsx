import { ArrowUp, Github } from 'lucide-react'
import { Wordmark } from '../brand/Wordmark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Wordmark />
        <p>Define precisely.<br />Execute efficiently.</p>
        <a href="https://github.com/Flotrpy/Stroma" target="_blank" rel="noreferrer">
          <Github size={17} aria-hidden="true" /> Open source
        </a>
      </div>
      <div className="footer__word" aria-hidden="true">STROMA</div>
      <div className="footer__bottom">
        <span>© 2026 Stroma</span>
        <span>Product preview</span>
        <a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
