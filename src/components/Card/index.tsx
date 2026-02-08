import type { ReactNode, ComponentType } from 'react'
import { ChevronUp, ChevronDown, Type, Braces } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { FigmaListOrdered } from '@/components/icons/FigmaListOrdered'
import { IconButton } from '@/components/IconButton'
import './styles.css'

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Type,
  Braces,
  ListOrdered: FigmaListOrdered as ComponentType<LucideProps>,
}

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
  const LucideIcon = ICON_MAP[icon]

  return (
    <div className="card">
      <div className="card__header">
        {listIndex !== undefined && (
          <span className="card__index">{listIndex}</span>
        )}
        <div className="card__icon-container">
          <div className="card__icon-bg">
            {LucideIcon && (
              <LucideIcon size={16} color="var(--color-text-primary)" strokeWidth={1.5} />
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
                ? <ChevronUp size={16} color="var(--color-text-muted)" strokeWidth={1.5} />
                : <ChevronDown size={16} color="var(--color-text-muted)" strokeWidth={1.5} />
            }
            onClick={onToggle}
          />
        )}
      </div>
      {expanded && children}
    </div>
  )
}
