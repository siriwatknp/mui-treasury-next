---
to: packages/<%=name%>/src/theme-extended.ts
unless_exists: true
---
import { <%= Name %>ClassKey, <%= Name %>Props } from "./<%= Name %>";
// uncomment these lines if this style has @mui-treasury/theme-treasury as dependency
// <%= Name=h.toName(name) %>import { ExtendedThemeOutput } from "@mui-treasury/theme-treasury";

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme extends ExtendedThemeOutput {}
// }

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey {
    Mui<%= Name %>: <%= Name %>ClassKey;
  }
}

declare module "@material-ui/core/styles/props" {
  interface ComponentsPropsList {
    Mui<%= Name %>: <%= Name %>Props;
  }
}

