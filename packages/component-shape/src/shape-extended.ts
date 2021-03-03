import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";
import { ShapeClassKey, ShapeProps } from "./Shape";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme extends ExtendedThemeOutput {}
}

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiShape: ShapeClassKey;
  }
}

declare module "@material-ui/core/styles/props" {
  interface ComponentsPropsList {
    MuiShape: ShapeProps;
  }
}
