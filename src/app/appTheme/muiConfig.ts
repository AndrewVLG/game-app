import { PaletteOptions, createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    green: {
      dark: '#185c10',
      main: '#006400',
      light: '#008000',
    },
    red: {
      dark: '#E7052b',
      main: '#FA0B33',
      light: '#FA0B33',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
})

export type UIColor = keyof Pick<PaletteOptions, 'red' | 'green'>
