import type { ReactNode } from 'react'
import './styles.css'

interface IconButtonProps {
  icon: ReactNode
  onClick?: () => void
  className?: string
}

export function IconButton({ icon, onClick, className }: IconButtonProps) {
  return (
    <button
      className={`icon-button${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  )
}
