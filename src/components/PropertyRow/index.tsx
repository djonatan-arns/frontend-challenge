import type { ComponentType } from 'react'
import { Type, Binary, ToggleLeft, Image, CircleCheck } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { FilePreview } from '@/components/FilePreview'
import './styles.css'

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Type,
  Binary,
  ToggleLeft,
  Image,
}

const TYPE_ICON_MAP: Record<string, string> = {
  string: 'Type',
  number: 'Binary',
  boolean: 'ToggleLeft',
  image: 'Image',
}

interface PropertyRowProps {
  icon?: string
  label: string
  type: 'string' | 'number' | 'boolean' | 'image'
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

  return (
    <div className={`property-row${isLast ? '' : ' property-row--bordered'}`}>
      <div className="property-row__key">
        {LucideIcon && (
          <LucideIcon size={16} color="var(--color-text-muted)" />
        )}
        <span className="property-row__key-label">{label}</span>
      </div>
      <div className="property-row__value">
        {(type === 'string' || type === 'number') && (
          <span className="property-row__value-text">{String(value)}</span>
        )}
        {type === 'boolean' && value === true && (
          <CircleCheck size={16} color="var(--color-success)" />
        )}
        {type === 'image' && fileName && fileSize && (
          <FilePreview fileName={fileName} fileSize={fileSize} />
        )}
      </div>
    </div>
  )
}
