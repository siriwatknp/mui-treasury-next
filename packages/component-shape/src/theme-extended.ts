import { StyleRules } from "@material-ui/core/styles";
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { ShapeClassKey, ShapeProps } from "./Shape";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/components" {
  interface Components {
    TyShape?: {
      defaultProps?: Partial<ShapeProps>;
      styleOverrides?: Partial<StyleRules<ShapeClassKey>>;
    };
  }
}
