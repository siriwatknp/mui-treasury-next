import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { Square, SquareProps } from "@mui-treasury/component-square";
import { useSquareStickerStyles } from "./SquareSticker.styles";

import Add from "@material-ui/icons/Add";

export default {
  title: "Component/Square/Sticker",
  component: Square,
  argTypes: {
    palette: {
      control: {
        type: "select",
        options: Object.keys(treasuryPalette),
      },
    },
    size: {
      control: "text",
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

export const Solid: Story<SquareProps> = (args) => {
  const parsedSize = args.dynamicSize
    ? Number(args.dynamicSize) || args.dynamicSize
    : undefined;
  const classes = useSquareStickerStyles({ palette: args.palette });
  return (
    <Square {...args} dynamicSize={parsedSize} classes={classes}>
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
  const classes = useSquareStickerStyles({ palette: args.palette });
  return (
    <Square {...args} dynamicSize={parsedSize} classes={classes}>
      <Add fontSize="large" />
    </Square>
  );
};
Soft.args = {
  palette: "primary",
  variant: "soft",
};
