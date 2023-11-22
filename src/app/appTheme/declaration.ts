export type Variants = 'main' | 'light' | 'dark'
type Color = Record<Variants, string>

declare module '@mui/material/styles' {
  export interface PaletteOptions {
    green: Color
    red: Color
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    green: Color
    red: Color
  }
}
export {}
