import { FC, memo } from 'react'

import { Button as MUiButton, ButtonProps } from '@mui/material'

import { UIColor } from '../../../app/appTheme'

import { getButtonStyle } from './button.style'

interface Props extends Omit<ButtonProps, 'color'> {
  color?: UIColor
  dataTestId?: string
}

export const Button: FC<Props> = memo(
  ({ color = 'red', children, dataTestId, ...props }) => {
    const style = getButtonStyle(color)
    return (
      <MUiButton data-test-id={dataTestId} sx={style} {...props}>
        {children}
      </MUiButton>
    )
  }
)
