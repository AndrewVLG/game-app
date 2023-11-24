import { MenuIcon } from '../../assets/svg'
import { Button } from '../../UI'

export const Header = () => {
  return (
    <Button
      sx={{
        backgroundColor: 'none',
        stroke: '#000000',
        '&:hover': { stroke: 'red' },
      }}
    >
      <MenuIcon height="50px" width="50px" />
    </Button>
  )
}
