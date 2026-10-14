import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="mobile-menu__close" onClick={onClose} aria-label="Close menu">
            <X aria-hidden="true" />
          </button>
          <nav aria-label="Mobile navigation">
            {[
              ['Method', '#method'],
              ['Studio', '#studio'],
              ['Ledger', '#ledger'],
              ['Connections', '#connections'],
            ].map(([label, href], index) => (
              <motion.a
                href={href}
                onClick={onClose}
                key={label}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.06 }}
              >
                <span>{label}</span>
                <ArrowUpRight aria-hidden="true" />
              </motion.a>
            ))}
          </nav>
          <p>Frontier intelligence, applied once. Efficient execution, by default.</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
