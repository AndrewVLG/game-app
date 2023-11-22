import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@mui/material'

import { theme } from './muiConfig'

export const AppTheme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
