import type { SectionData } from '@/types'

const personProperties = [
  { key: 'Name', type: 'string' as const, value: 'John Doe' },
  { key: 'Age', type: 'number' as const, value: 34 },
  { key: 'Instagram', type: 'boolean' as const, value: true },
  {
    key: 'Picture',
    type: 'image' as const,
    fileName: 'filename.png',
    fileSize: '279.75 KB',
  },
]

export const sectionData: SectionData = {
  name: 'J. Doe',
  count: 3,
  nodes: [
    {
      key: 'Name',
      type: 'string',
      icon: 'Type',
      value: 'Jana Doe',
    },
    {
      key: 'Person',
      type: 'object',
      icon: 'Braces',
      content: personProperties,
    },
    {
      key: 'Random List',
      type: 'array',
      icon: 'ListOrdered',
      value: '2 items',
      items: [
        {
          key: 'Name',
          type: 'string',
          icon: 'Type',
          value: 'Jana Doe',
        },
        {
          key: 'Person',
          type: 'object',
          icon: 'Braces',
          properties: personProperties,
        },
      ],
    },
  ],
}
