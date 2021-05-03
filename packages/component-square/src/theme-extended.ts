import { StyleRules } from "@material-ui/core/styles";
import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { SquareClassKey, SquareProps } from "./Square";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/components" {
  interface Components {
    JunSquare?: {
      defaultProps?: Partial<SquareProps>;
      styleOverrides?: Partial<StyleRules<SquareClassKey>>;
    };
  }
}
