import { MenuIcon } from '../../assets/svg'
import { Button } from '../../UI'

import { buttonStyle } from './header.style'

export const Header = () => {
  return (
    <Button
      sx={buttonStyle}
    >
      <MenuIcon height="50px" width="50px" />
    </Button>
  )
}
