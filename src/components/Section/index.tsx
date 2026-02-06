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
          <User size={20} color="var(--color-text-primary)" />
          <span className="section__name">
            {name} ({count})
          </span>
        </div>
        <IconButton
          icon={
            expanded
              ? <ChevronUp size={16} color="var(--color-text-primary)" />
              : <ChevronDown size={16} color="var(--color-text-primary)" />
          }
          onClick={onToggle}
        />
      </div>
      {expanded && children}
    </div>
  )
}
