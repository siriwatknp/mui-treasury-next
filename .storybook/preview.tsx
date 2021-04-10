import React, { Suspense } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MuiThemeProvider } from "@material-ui/core/styles";
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTreasuryTheme } from "@mui-treasury/theme-treasury";

const withThemeProvider = (Story: any, context: any) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTreasuryTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        components: {
          TyShape: {
            defaultProps: {
              // it works!
              "aria-label": "Yeah!",
            },
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <Suspense fallback={<div>loading...</div>}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Story {...context} />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};
