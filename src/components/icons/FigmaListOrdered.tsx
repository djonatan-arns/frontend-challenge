import listOrderedSvg from '@/assets/ListOrdered.svg'

interface IconProps {
  size?: number
}

export function FigmaListOrdered({ size = 16 }: IconProps) {
  return <img src={listOrderedSvg} alt="" width={size} height={size} />
}
