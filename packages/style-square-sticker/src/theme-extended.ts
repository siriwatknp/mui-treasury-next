import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { SquareStickerClassKey } from "./SquareSticker.styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    JunSquareSticker: SquareStickerClassKey;
  }
}
