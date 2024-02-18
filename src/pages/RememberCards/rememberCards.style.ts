import { SxProps } from '@mui/material'

export const topContainerStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridColumn: '1 / 2',
  border: '2px solid red',
  borderRadius: '6px',
  backgroundColor: '#474a51',
}
export const bottomContainerStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gridColumn: '2 / 3',
  gridRow: '2 / 3',
  borderRadius: '6px',
  backgroundColor: '#474a51',
  position: 'relative',
  top: '-10px',
  left: '-7px',
}
export const buttonStyle = { height: '59px' }
