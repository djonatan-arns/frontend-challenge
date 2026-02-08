import type { ReactNode } from 'react'
import './styles.css'

interface IconButtonProps {
  icon: ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
  ariaExpanded?: boolean
}

export function IconButton({ icon, onClick, className, ariaLabel, ariaExpanded }: IconButtonProps) {
  return (
    <button
      className={`icon-button${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    >
      {icon}
    </button>
  )
}
