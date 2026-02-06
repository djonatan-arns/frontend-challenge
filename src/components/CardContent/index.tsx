import type { NodeData, NodeItem } from '@/types'
import { PropertyRow } from '@/components/PropertyRow'
import { Card } from '@/components/Card'
import './styles.css'

interface CardContentObjectProps {
  type: 'object'
  properties: NodeData[]
  items?: never
  expandedCards?: Record<string, boolean>
  onToggleCard?: (key: string) => void
}

interface CardContentArrayProps {
  type: 'array'
  items: NodeItem[]
  properties?: never
  expandedCards?: Record<string, boolean>
  onToggleCard?: (key: string) => void
}

type CardContentProps = CardContentObjectProps | CardContentArrayProps

export function CardContent({ type, properties, items, expandedCards, onToggleCard }: CardContentProps) {
  if (type === 'object' && properties) {
    return (
      <div className="card-content card-content--object">
        {properties.map((prop, index) => (
          <PropertyRow
            key={prop.key}
            label={prop.key}
            type={prop.type as 'string' | 'number' | 'boolean' | 'image'}
            value={prop.value}
            fileName={prop.fileName}
            fileSize={prop.fileSize}
            isLast={index === properties.length - 1}
          />
        ))}
      </div>
    )
  }

  if (type === 'array' && items) {
    return (
      <div className="card-content card-content--array">
        {items.map((item, index) => {
          const cardKey = `list-${item.key}-${index}`
          const isExpandable = item.type === 'object'
          const isExpanded = expandedCards?.[cardKey] ?? false

          return (
            <Card
              key={cardKey}
              icon={item.icon}
              title={item.key}
              value={item.type === 'string' ? item.value : undefined}
              listIndex={index + 1}
              expandable={isExpandable}
              expanded={isExpanded}
              onToggle={() => onToggleCard?.(cardKey)}
            >
              {isExpandable && item.properties && (
                <CardContent
                  type="object"
                  properties={item.properties}
                />
              )}
            </Card>
          )
        })}
      </div>
    )
  }

  return null
}
