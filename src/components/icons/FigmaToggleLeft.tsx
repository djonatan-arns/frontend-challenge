import toggleLeftSvg from '@/assets/ToggleLeft.svg'

interface IconProps {
  size?: number
}

export function FigmaToggleLeft({ size = 16 }: IconProps) {
  return <img src={toggleLeftSvg} alt="" width={size} height={size} />
}
