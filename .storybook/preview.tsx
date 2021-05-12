import React, { Suspense, useEffect, useState } from "react";
import { StoryContext } from "@storybook/react/types-6-0";

import { MuiThemeProvider } from "@material-ui/core/styles";
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createTreasuryTheme } from "@mui-treasury/theme-treasury";

const withThemeProvider = (Story: any, context: StoryContext) => {
  const mode = context.globals?.muiMode ?? "light";
  const [theme, setTheme] = useState(
    createTreasuryTheme({
      palette: {
        mode,
      },
    })
  );
  useEffect(() => {
    setTheme(
      createTreasuryTheme({
        palette: {
          mode,
        },
      })
    );
  }, [mode]);
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      }
    >
      <StyledEngineProvider injectFirst>
        {context.kind.startsWith("Layout") ? (
          <Story {...context} setTheme={setTheme} />
        ) : (
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Story {...context} setTheme={setTheme} />
          </MuiThemeProvider>
        )}
      </StyledEngineProvider>
    </Suspense>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: {
    viewports: {
      mobileM: {
        name: "Mobile M - xs",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      mobileL: {
        name: "Mobile L - xs",
        styles: {
          width: "425px",
          height: "926px",
        },
      },
      tablet: {
        name: "Tablet - sm",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      laptop: {
        name: "Laptop - md",
        styles: {
          width: "calc(100vh - 80px)",
          height: "1024px",
        },
      },
      laptopL: {
        name: "Laptop L - lg",
        styles: {
          width: "calc(100vh - 80px)",
          height: "1440px",
        },
      },
      monitor: {
        name: "Monitor - xl",
        styles: {
          width: "calc(100vh - 80px)",
          height: "1920px",
        },
      },
    },
  },
};
