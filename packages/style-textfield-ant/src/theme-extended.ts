import { TextfieldAntClassKey } from "./TextfieldAnt.styles";
// uncomment these lines if this style has @mui-treasury/theme-treasury as dependency
// TextfieldAntimport { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme extends ExtendedThemeOutput {}
// }

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    MuiTextfieldAnt: TextfieldAntClassKey;
  }
}
