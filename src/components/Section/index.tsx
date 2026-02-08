import type { ReactNode } from 'react'
import { User, ChevronUp, ChevronDown } from 'lucide-react'
import { IconButton } from '@/components/IconButton'
import './styles.css'

interface SectionProps {
  name: string
  count: number
  expanded: boolean
  onToggle: () => void
  children: ReactNode
}

export function Section({ name, count, expanded, onToggle, children }: SectionProps) {
  return (
    <div className="section">
      <div className="section__title">
        <div className="section__info">
          <User size={20} color="var(--color-text-primary)" strokeWidth={1.5} />
          <span className="section__name">
            {name} <span className="section__count">({count})</span>
          </span>
        </div>
        <IconButton
          icon={
            expanded
              ? <ChevronUp size={16} color="var(--color-text-primary)" strokeWidth={1.5} />
              : <ChevronDown size={16} color="var(--color-text-primary)" strokeWidth={1.5} />
          }
          onClick={onToggle}
          ariaLabel={expanded ? 'Collapse section' : 'Expand section'}
          ariaExpanded={expanded}
        />
      </div>
      {expanded && children}
    </div>
  )
}
