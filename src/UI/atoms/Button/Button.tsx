import { FC, memo } from 'react'

import { Button as MUiButton, ButtonProps } from '@mui/material'

import { UIColor } from '../../../app/appTheme'

import { getButtonStyle } from './button.style'

interface Props extends Omit<ButtonProps, 'color'> {
  color?: UIColor
}

export const Button: FC<Props> = memo(
  ({ color = 'red', children, ...props }) => {
    const style = getButtonStyle(color)
    return (
      <MUiButton sx={style} {...props}>
        {children}
      </MUiButton>
    )
  }
)
