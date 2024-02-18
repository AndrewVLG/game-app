import { SxProps, Theme } from '@mui/material'

export const buttonStyle = (theme: Theme): SxProps => ({
  display: 'flex',
  flexDirection: 'column',
  height: '40px',
  width: '40px',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& div': {
    backgroundColor: theme.palette.common.white
  },
  '&:hover': {
    '& div': {
      backgroundColor: theme.palette.red.main
    }
  }
})

export const elementStyle: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  transition: 'all 0.5s',
  top: '0px',
}
export const topElementIsActive: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  top: '25px',
  transition: 'all 0.5s',
}
export const bottomElementIsActive: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  top: '-25px',
  transition: 'all 0.5s',
}
