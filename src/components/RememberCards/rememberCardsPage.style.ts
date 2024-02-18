import { CSSProperties } from 'react'

import { SxProps } from '@mui/material'

export const rememberCardsPageStyle: SxProps = {
  height: 'calc(100vh - 67px)',
  width: '100%',
  overflow: 'hidden',
}

export const cardsBlockStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  width: '100vw',
  height: '50%',
}

export const bottomBlockStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'end',
  width: '100vw',
  height: '50%',
}
