import type { NodeData, NodeItem, PrimitiveNodeType } from '@/types'
import { PropertyRow } from '@/components/PropertyRow'
import { Card } from '@/components/Card'
import './styles.css'

const PRIMITIVE_TYPES = new Set<PrimitiveNodeType>(['string', 'number', 'boolean', 'image'])

function isPrimitiveNode(type: string): type is PrimitiveNodeType {
  return PRIMITIVE_TYPES.has(type as PrimitiveNodeType)
}

interface CardContentObjectProps {
  type: 'object'
  properties: NodeData[]
  items?: never
}

interface CardContentArrayProps {
  type: 'array'
  items: NodeItem[]
  properties?: never
  expandedCards: Record<string, boolean>
  onToggleCard: (key: string) => void
}

type CardContentProps = CardContentObjectProps | CardContentArrayProps

export function CardContent(props: CardContentProps) {
  if (props.type === 'object') {
    return (
      <div className="card-content card-content--object">
        {props.properties.filter(prop => isPrimitiveNode(prop.type)).map((prop, index, filtered) => (
          <PropertyRow
            key={prop.key}
            label={prop.key}
            type={prop.type as PrimitiveNodeType}
            value={prop.value}
            fileName={prop.fileName}
            fileSize={prop.fileSize}
            isLast={index === filtered.length - 1}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="card-content card-content--array">
      {props.items.map((item, index) => {
        const cardKey = `list-${item.key}-${index}`
        const isExpandable = item.type === 'object'
        const isExpanded = props.expandedCards[cardKey] ?? false

        return (
          <Card
            key={cardKey}
            icon={item.icon}
            title={item.key}
            value={item.type === 'string' ? item.value : undefined}
            listIndex={index + 1}
            expandable={isExpandable}
            expanded={isExpanded}
            onToggle={() => props.onToggleCard(cardKey)}
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
