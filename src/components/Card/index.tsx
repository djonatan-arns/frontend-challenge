import type { ReactNode } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import * as icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { IconButton } from '@/components/IconButton'
import './styles.css'

interface CardProps {
  icon: string
  title: string
  value?: string
  expandable?: boolean
  expanded?: boolean
  onToggle?: () => void
  children?: ReactNode
  listIndex?: number
}

function getLucideIcon(name: string): React.ComponentType<LucideProps> | null {
  const icon = icons[name as keyof typeof icons]
  if (typeof icon === 'function') {
    return icon as React.ComponentType<LucideProps>
  }
  return null
}

export function Card({
  icon,
  title,
  value,
  expandable,
  expanded,
  onToggle,
  children,
  listIndex,
}: CardProps) {
  const LucideIcon = getLucideIcon(icon)

  return (
    <div className="card">
      <div className="card__header">
        {listIndex !== undefined && (
          <span className="card__index">{listIndex}</span>
        )}
        <div className="card__icon-container">
          <div className="card__icon-bg">
            {LucideIcon && (
              <LucideIcon size={16} color="var(--color-text-primary)" />
            )}
          </div>
        </div>
        <div className="card__content">
          <span className="card__label">{title}</span>
          {value && <span className="card__value">{value}</span>}
        </div>
        {expandable && (
          <IconButton
            icon={
              expanded
                ? <ChevronUp size={16} color="var(--color-text-muted)" />
                : <ChevronDown size={16} color="var(--color-text-muted)" />
            }
            onClick={onToggle}
          />
        )}
      </div>
      {expanded && children}
    </div>
  )
}
