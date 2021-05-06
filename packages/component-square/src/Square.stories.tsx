import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Add from "@material-ui/icons/Add";
import ButtonBase from "@material-ui/core/ButtonBase";

import {
  treasuryPalette,
  createTreasuryTheme,
} from "@mui-treasury/theme-treasury";

import { Square, SquareProps } from "./Square";

export default {
  title: "Component/Square",
  component: Square,
  argTypes: {
    palette: {
      control: {
        type: "select",
        options: Object.keys(treasuryPalette),
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Palette: Story<SquareProps> = (args) => {
  return (
    <Square {...args}>
      <Add fontSize="large" />
    </Square>
  );
};

export const Solid: Story<SquareProps> = (args) => {
  return (
    <Square {...args}>
      <Add fontSize="large" />
    </Square>
  );
};
Solid.args = {
  variant: "solid",
};

export const Soft: Story<SquareProps> = (args) => {
  return (
    <Square {...args}>
      <Add fontSize="large" />
    </Square>
  );
};
Soft.args = {
  variant: "soft",
  palette: "error",
};

export const Outlined: Story<SquareProps> = (args) => {
  return (
    <Square {...args}>
      <Add fontSize="large" />
    </Square>
  );
};
Outlined.args = {
  variant: "outlined",
  palette: "error",
};

export const Round: Story<SquareProps> = (args) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Square {...args} variant="outlined">
        <Add fontSize="large" />
      </Square>
      <Square {...args} variant="soft">
        <Add fontSize="large" />
      </Square>
      <Square {...args} variant="solid">
        <Add fontSize="large" />
      </Square>
    </Box>
  );
};
Round.args = {
  round: true,
};
Round.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

export const Sizes: Story<SquareProps> = (args) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Square {...args} sx={{ minWidth: 20, minHeight: 20 }}>
        <Add fontSize="small" />
      </Square>
      <Square {...args} sx={{ minWidth: 40, minHeight: 40 }}>
        <Add fontSize="large" />
      </Square>
    </Box>
  );
};
Sizes.args = {
  variant: "solid",
};
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const AsButton: Story<SquareProps> = (args) => {
  return (
    <Square
      {...args}
      as={ButtonBase}
      disabled
      sx={{
        width: 72,
      }}
    >
      <Add fontSize="large" />
    </Square>
  );
};
AsButton.args = {
  variant: "outlined",
  palette: "error",
};

export const Text: Story<SquareProps> = (args) => {
  return (
    <Square
      {...args}
      as={ButtonBase}
      sx={{
        padding: "0 12px",
      }}
    >
      Status
    </Square>
  );
};
Text.args = {
  variant: "solid",
  round: true,
};

export const Theme: Story<SquareProps> = (args) => {
  return (
    <ThemeProvider
      theme={createTreasuryTheme({
        palette: {
          primary: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
          },
        },
        components: {
          JunSquare: {
            defaultProps: {
              variant: "soft",
              palette: "primary",
            },
            styleOverrides: {
              soft: {
                border: "4px solid",
                borderColor: "currentColor",
              },
              outlined: {
                boxShadow: "0 1px 8px 0",
              },
            },
          },
        },
      })}
    >
      <Square {...args}>
        <Add fontSize="large" />
      </Square>
    </ThemeProvider>
  );
};
