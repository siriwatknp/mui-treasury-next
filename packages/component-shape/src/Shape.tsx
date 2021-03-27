import React, { Ref } from "react";
import cx from "clsx";
import { experimentalStyled as styled, Theme } from "@material-ui/core/styles";
import { Palette } from "@mui-treasury/theme-treasury";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import { deepmerge } from "@material-ui/utils";
import useThemeProps from "@material-ui/core/styles/useThemeProps";
import { OverrideProps } from "@material-ui/core/OverridableComponent";
import { InternalStandardProps } from "@material-ui/core";
import { getShapeUtilityClass, shapeClasses } from "./shapeClasses";

export type ShapeClassKey = keyof typeof shapeClasses;
export type ShapeClasses = Partial<typeof shapeClasses>;

export interface ShapeTypeMap<D extends React.ElementType = "div", P = {}> {
  props: P &
    InternalStandardProps<
      Omit<JSX.IntrinsicElements["div"], "ref"> & { ref?: Ref<HTMLDivElement> }
    > & {
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

      /**
       * Override or extend the styles applied to the component.
       */
      classes?: ShapeClasses;

      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx?: SxProps<Theme>;
    };
  defaultComponent: D;
}
export type ShapeProps<
  D extends React.ElementType = "div",
  P = {}
> = OverrideProps<ShapeTypeMap<D, P>, D>;

// todo: What is the type of styleProps?
// todo: cannot use type Record<string, object> for styles arg
const overridesResolver = (props: any, styles: string | object) => {
  const { styleProps } = props;

  return deepmerge(
    {
      // @ts-ignore
      ...styles[styleProps.fill],
      // @ts-ignore
      ...(styleProps.circular && styles.circular),
      // @ts-ignore
      ...(styleProps.outlined && styles.outlined),
      // @ts-ignore
    },
    // @ts-ignore
    styles.root || {}
  );
};

// todo: What is the type of styleProps?
const useUtilityClasses = (styleProps: any) => {
  const { fill, outlined, circular, classes } = styleProps;
  const slots = {
    root: ["root", fill, outlined, circular],
  };
  return composeClasses(slots, getShapeUtilityClass, classes);
};

const ShapeRoot = styled(
  "div",
  {},
  {
    name: "TyShape",
    slot: "Root",
    overridesResolver,
  }
)(function ({
  // todo: throw error if consumer does not use theme-treasury
  // @ts-ignore
  theme: { treasury, ...theme },
  styleProps: { circular, outlined, palette, fill, size },
}: {
  theme?: Theme;
  styleProps: ShapeProps;
}) {
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 24,
    minHeight: 24,
    verticalAlign: "middle",
    flexShrink: 0,
    borderRadius: theme.shape.borderRadius,
    ...(size && {
      minWidth: size,
      minHeight: size,
    }),
    ...(circular && {
      borderRadius: 100,
    }),
    ...(outlined && {
      border: "1px solid",
      borderColor: treasury.getColor(palette, "500"),
    }),
    ...(fill === "text" && {
      color: treasury.getColor(palette, "500"),
    }),
    ...(fill === "solid" && {
      color: "#fff",
      backgroundColor: treasury.getColor(palette, "500"),
    }),
    ...(fill === "soft" && {
      color: treasury.getColor(palette, "500"),
      backgroundColor: treasury.getColor(palette ?? "grey", "100"),
    }),
  };
});

export const Shape = React.forwardRef<any, ShapeProps>(function Shape(
  { children, ...inProps },
  ref
) {
  const {
    fill = "text",
    palette,
    circular,
    outlined,
    size,
    ...props
  } = useThemeProps({ props: inProps, name: "TyShape" }) as ShapeProps;

  const styleProps = {
    fill,
    palette,
    circular,
    outlined,
    size,
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <ShapeRoot
      ref={ref}
      {...props}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </ShapeRoot>
  );
});
