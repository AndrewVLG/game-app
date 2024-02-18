import { SxProps } from '@mui/material'

export const buttonStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '40px',
  width: '40px',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const elementStyle: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  backgroundColor: '#000',
  transition: 'all 0.5s',
  top: '0px',
}
export const topElementIsActive: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  backgroundColor: '#000',
  top: '25px',
  transition: 'all 0.5s',
}
export const bottomElementIsActive: SxProps = {
  position: 'relative',
  height: '3px',
  width: '35px',
  backgroundColor: '#000',
  top: '-25px',
  transition: 'all 0.5s',
}
