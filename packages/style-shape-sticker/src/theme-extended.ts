import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { ShapeStickerClassKey } from "./shapeSticker.styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiShapeSticker: Extract<ShapeStickerClassKey, "text">;
  }
}
