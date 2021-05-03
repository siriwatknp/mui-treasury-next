import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Add from "@material-ui/icons/Add";

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
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;

  return (
    <Square {...args} dynamicSize={parsedSize}>
      <Add fontSize="large" />
    </Square>
  );
};

export const Solid: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
  return (
    <Square {...args} dynamicSize={parsedSize}>
      <Add fontSize="large" />
    </Square>
  );
};
Solid.args = {
  variant: "solid",
};

export const Soft: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
  return (
    <Square {...args} dynamicSize={parsedSize}>
      <Add fontSize="large" />
    </Square>
  );
};
Soft.args = {
  variant: "soft",
  palette: "error",
};

export const Outlined: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
  return (
    <Square {...args} dynamicSize={parsedSize}>
      <Add fontSize="large" />
    </Square>
  );
};
Outlined.args = {
  variant: "outlined",
  palette: "error",
};

export const Round: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Square {...args} variant="outlined" dynamicSize={parsedSize}>
        <Add fontSize="large" />
      </Square>
      <Square {...args} variant="soft" dynamicSize={parsedSize}>
        <Add fontSize="large" />
      </Square>
      <Square {...args} variant="solid" dynamicSize={parsedSize}>
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
    <Box display="flex" alignItems="center" gap={2}>
      <Square {...args} dynamicSize={20}>
        <Add fontSize="small" />
      </Square>
      <Square {...args}>
        <Add />
      </Square>
      <Square {...args} dynamicSize={"3rem"}>
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

export const Theme: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
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
      <Square {...args} dynamicSize={parsedSize}>
        <Add fontSize="large" />
      </Square>
    </ThemeProvider>
  );
};
