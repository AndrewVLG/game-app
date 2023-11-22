import { Theme } from '@mui/material'

import { UIColor } from '../../../app/appTheme'

export const getButtonStyle = (color: UIColor) => (theme: Theme) => ({
  backgroundColor: theme.palette[color].light,
  color: theme.palette.common.white,
  svg: {
    fill: theme.palette.common.white,
  },
  '&:hover': {
    backgroundColor: theme.palette[color].dark,
  },
  '&:disabled': {
    svg: {
      fill: theme.palette.grey[600],
      color: theme.palette.grey[600],
    },
  },
})
