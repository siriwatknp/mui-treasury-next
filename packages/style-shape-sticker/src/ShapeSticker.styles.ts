import { fade } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { ShapeProps } from "@mui-treasury/component-shape";

export const useShapeStickerStyles = makeStyles(
  ({ treasury, ...theme }) => ({
    root: (props: Pick<ShapeProps, "palette">) => ({
      borderRadius: 100,
      boxShadow: `0 2px 8px 0 ${
        props?.palette
          ? fade(treasury.getColor(props?.palette, "500")!, 0.6)
          : "rgba(0,0,0,0.2)"
      }`,
      border: "4px solid",
      borderColor: theme.palette.background.paper,
    }),
    text: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
  {
    name: "MuiShapeSticker",
  }
);

export type ShapeStickerClassKey = keyof ReturnType<
  typeof useShapeStickerStyles
>;
export type ShapeStickerClasses = Partial<Record<ShapeStickerClassKey, string>>;
