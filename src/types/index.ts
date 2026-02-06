export type NodeValueType = 'string' | 'number' | 'boolean' | 'image' | 'object' | 'array'

export interface NodeData {
  key: string
  type: NodeValueType
  value?: string | number | boolean
  fileName?: string
  fileSize?: string
  properties?: NodeData[]
  items?: NodeItem[]
}

export interface NodeItem {
  key: string
  type: 'string' | 'object'
  icon: string
  value?: string
  properties?: NodeData[]
}

export interface SectionData {
  name: string
  count: number
  nodes: CardData[]
}

export interface CardData {
  key: string
  type: NodeValueType
  icon: string
  value?: string
  content?: NodeData[]
  items?: NodeItem[]
}
