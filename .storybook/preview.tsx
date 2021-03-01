import React, { Suspense } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ExtendThemeProps,
  ExtendThemeOverrides,
  createTreasuryTheme,
} from "@mui-treasury/theme-treasury";
import {
  ShapeThemeProps,
  ShapeThemeOverrides,
} from "@mui-treasury/component-shape";

const withThemeProvider = (Story: any, context: any) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTreasuryTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
        props: {} as ExtendThemeProps<ShapeThemeProps>,
        overrides: {} as ExtendThemeOverrides<ShapeThemeOverrides>,
      }),
    [prefersDarkMode],
  );
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </MuiThemeProvider>
    </Suspense>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};
