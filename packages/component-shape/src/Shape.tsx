import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { StyleRules, makeStyles } from "@material-ui/core/styles";
import {
  useThemeProps,
  Palette,
  TreasuryTheme,
} from "@mui-treasury/theme-treasury";

const MUI_SHAPE = "MuiShape";
const useStyles = makeStyles(
  ({ shape, treasury }: TreasuryTheme) => ({
    root: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: 24,
      minHeight: 24,
      verticalAlign: "middle",
      flexShrink: 0,
      borderRadius: shape.borderRadius,
    },
    circular: {
      borderRadius: 100,
    },
    text: ({ palette }: ShapeProps) => ({
      color: treasury.getColor(palette, "500"),
    }),
    solid: ({ palette }: ShapeProps) => ({
      color: "#fff",
      backgroundColor: treasury.getColor(palette, "500"),
    }),
    soft: ({ palette }: ShapeProps) => ({
      color: treasury.getColor(palette, "500"),
      backgroundColor: treasury.getColor(palette ?? "grey", "100"),
    }),
    outlined: ({ palette }: ShapeProps) => ({
      border: "1px solid",
      borderColor: treasury.getColor(palette, "500"),
    }),
    size: (props: ShapeProps) => ({
      minWidth: props.size,
      minHeight: props.size,
    }),
  }),
  { name: MUI_SHAPE }
);

export type ShapeClassKey = keyof ReturnType<typeof useStyles>;
export type ShapeClasses = Partial<Record<ShapeClassKey, string>>;
export type ShapeProps = {
  /**
   * Fill pattern. Use "primary" color, if "palette" prop is not specified
   */
  fill?: "text" | "solid" | "soft";

  /**
   * If `true`, create border around component
   */
  outlined?: boolean;

  /**
   * If `true`, this element has border-radius ⃝
   */
  circular?: boolean;

  /**
   * The color of the element, rely on @mui-treasury/theme-treasury
   */
  palette?: Palette;

  /**
   * Dynamic size of the element (number is px). Ex. 100 | "2rem"
   */
  size?: number | string;

  classes?: ShapeClasses;
};

export type ShapeThemeOverrides = {
  [MUI_SHAPE]: Partial<StyleRules<ShapeClassKey>>;
};
export type ShapeThemeProps = {
  [MUI_SHAPE]: Partial<ShapeProps>;
};

export const Shape = ({
  children,
  useStyles: useCustomStyles = () => ({}),
  ...externalProps
}: PropsWithChildren<ShapeProps> & {
  useStyles?: (props: ShapeProps) => ShapeClasses;
}) => {
  const {
    fill = "text",
    palette,
    circular,
    outlined,
    ...props
  } = useThemeProps(MUI_SHAPE, externalProps);
  const styles = useStyles({ ...props, palette });
  const customStyles = useCustomStyles?.({ ...props, palette });
  return (
    <div
      className={cx(
        styles.root,
        circular && styles.circular,
        outlined && styles.outlined,
        fill && styles[fill],
        props.size && styles.size,

        // custom styles from outside
        customStyles?.root,
        circular && customStyles?.circular,
        outlined && customStyles?.outlined,
        fill && customStyles?.[fill],
        props.size && customStyles?.size
      )}
    >
      {children}
    </div>
  );
};
