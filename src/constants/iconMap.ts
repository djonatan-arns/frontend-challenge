import type { ComponentType } from 'react'
import { Type, Braces, Binary, Image } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { FigmaListOrdered } from '@/components/icons/FigmaListOrdered'
import { FigmaToggleLeft } from '@/components/icons/FigmaToggleLeft'

export const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Type,
  Braces,
  Binary,
  Image,
  ListOrdered: FigmaListOrdered as ComponentType<LucideProps>,
  ToggleLeft: FigmaToggleLeft as ComponentType<LucideProps>,
}
