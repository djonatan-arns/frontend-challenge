import { IconButton } from '@/components/IconButton'
import brandIcon from '@/assets/brand.svg'

import './styles.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <IconButton
          icon={<img src={brandIcon} alt="" width={16} height={16} />}
          ariaLabel="Home"
        />
      </div>
    </header>
  )
}
