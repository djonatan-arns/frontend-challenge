import { CircleCheck } from 'lucide-react'

import type { PrimitiveNodeType } from '@/types'
import { ICON_MAP } from '@/constants/iconMap'
import { FilePreview } from '@/components/FilePreview'

import './styles.css'

const TYPE_ICON_MAP: Record<PrimitiveNodeType, string> = {
  string: 'Type',
  number: 'Binary',
  boolean: 'ToggleLeft',
  image: 'Image',
}

interface PropertyRowProps {
  icon?: string
  label: string
  type: PrimitiveNodeType
  value?: string | number | boolean
  fileName?: string
  fileSize?: string
  isLast?: boolean
}

export function PropertyRow({
  icon,
  label,
  type,
  value,
  fileName,
  fileSize,
  isLast,
}: PropertyRowProps) {
  const iconName = icon ?? TYPE_ICON_MAP[type]
  const LucideIcon = iconName ? ICON_MAP[iconName] : null

  const className = [
    'property-row',
    !isLast && 'property-row--bordered',
    type === 'image' && 'property-row--image',
    type === 'boolean' && 'property-row--boolean',
  ].filter(Boolean).join(' ')

  return (
    <div className={className}>
      <div className="property-row__key">
        {LucideIcon && (
          <LucideIcon size={16} color="var(--color-text-muted)" strokeWidth={1.5} />
        )}
        <span className="property-row__key-label">{label}</span>
      </div>
      <div className="property-row__value">
        {(type === 'string' || type === 'number') && (
          <span className="property-row__value-text">{String(value)}</span>
        )}
        {type === 'boolean' && value === true && (
          <CircleCheck size={16} color="var(--color-success)" strokeWidth={1.5} />
        )}
        {type === 'image' && fileName && fileSize && (
          <FilePreview fileName={fileName} fileSize={fileSize} />
        )}
      </div>
    </div>
  )
}
