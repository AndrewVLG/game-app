import { FC, memo, useCallback, useState } from 'react'

import { Box, Button, SxProps, useTheme } from '@mui/material'

import {
  bottomElementIsActive,
  buttonStyle,
  elementStyle,
  topElementIsActive,
} from './menuButton.style'

interface Props {
  onClick?: () => void
  sx?: SxProps
}

export const MenuButton: FC<Props> = memo(({ sx = {}, onClick }) => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = useCallback(() => setIsHover(true), [])
  const handleMouseLeave = useCallback(() => setIsHover(false), [])

  const theme = useTheme()
  const style = { ...buttonStyle(theme), ...sx }
  return (
    <Button
      onClick={onClick && onClick}
      sx={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={isHover ? topElementIsActive : elementStyle}></Box>
      <Box sx={elementStyle}></Box>
      <Box sx={isHover ? bottomElementIsActive : elementStyle}></Box>
    </Button>
  )
})
