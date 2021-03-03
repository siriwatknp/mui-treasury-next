import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { useShapeStickerStyles } from "./index";
import { Shape, ShapeProps } from "@mui-treasury/component-shape";

import Add from "@material-ui/icons/Add";

export default {
  title: "Component/Shape/Sticker",
  component: Shape,
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
    outlined: {
      table: {
        disable: true,
      },
    },
    circular: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Solid: Story<ShapeProps> = (args) => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize} useStyles={useShapeStickerStyles}>
      <Add fontSize="large" />
    </Shape>
  );
};
Solid.args = {
  fill: "solid",
};

export const Soft: Story<ShapeProps> = (args) => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize} useStyles={useShapeStickerStyles}>
      <Add fontSize="large" />
    </Shape>
  );
};
Soft.args = {
  palette: "primary",
  fill: "soft",
};
