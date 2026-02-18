import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

type ComingSoonContextValue = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null)

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext)
  if (!ctx) throw new Error('useComingSoon must be used within ComingSoonProvider')
  return ctx
}

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const openModal = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement | null
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus()
    }
    triggerRef.current = null
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  // Focus into modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      ;(focusable || modalRef.current).focus()
    }
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeModal])

  const value: ComingSoonContextValue = { isOpen, openModal, closeModal }

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            aria-describedby="coming-soon-desc"
            ref={modalRef}
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/50"
              aria-hidden="true"
              onClick={closeModal}
            />
            <div
              className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-soft-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="coming-soon-title" className="text-2xl font-bold text-neutral-900 mb-2">
                Coming Soon
              </h2>
              <p id="coming-soon-desc" className="text-neutral-600 mb-6">
                SchoolBus is launching soon. Stay tuned for updates.
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-2xl bg-neutral-900 text-white px-5 py-2.5 font-semibold hover:bg-neutral-750 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </ComingSoonContext.Provider>
  )
}
