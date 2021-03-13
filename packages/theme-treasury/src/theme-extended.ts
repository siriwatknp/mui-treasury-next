import { ExtendedThemeOutput, PaletteSwatches } from "./types";


declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor extends PaletteSwatches {}
}
