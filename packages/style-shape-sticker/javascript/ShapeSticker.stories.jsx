import React from "react";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { Shape } from "@mui-treasury/component-shape";
import { useShapeStickerStyles } from "./ShapeSticker.styles";
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
};
export const Solid = (args) => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize} useStyles={useShapeStickerStyles}>
      <Add fontSize="large"/>
    </Shape>);
};
Solid.args = {
    fill: "solid",
};
export const Soft = (args) => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize} useStyles={useShapeStickerStyles}>
      <Add fontSize="large"/>
    </Shape>);
};
Soft.args = {
    palette: "primary",
    fill: "soft",
};
