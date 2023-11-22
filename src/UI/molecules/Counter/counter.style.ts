import { UIColor } from 'app/appTheme'

import { Theme, SxProps } from '@mui/material'

export const counterWrapperStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '70px',
  height: '140px',
  fontSize: '50px',
  textAlign: 'center',
}
export const counterWindowStyle = (theme: Theme) => ({
  height: '70px',
  marginTop: '1px',
  marginBottom: '1px',
  overflow: 'hidden',
  borderRadius: '4px',
  backgroundColor: theme.palette.common.white,
  boxSizing: 'border-box',
})

export const getNumbersInsideCounterStyle =
  (offset: number, color: UIColor) => (theme: Theme) => ({
    position: 'relative',
    top: `${offset}px`,
    transition: 'top 0.3s',
    backgroundColor: theme.palette[color].light,
    color: theme.palette.common.white,
    userSelect: 'none',
  })
