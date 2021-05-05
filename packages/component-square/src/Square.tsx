import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { experimentalStyled as styled, Theme } from "@material-ui/core/styles";
import { Palette } from "@mui-treasury/theme-treasury";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import useThemeProps from "@material-ui/core/styles/useThemeProps";
import { getSquareUtilityClass, squareClasses } from "./squareClasses";

export type SquareClassKey = keyof typeof squareClasses;
export type SquareClasses = Partial<typeof squareClasses>;

export type SquareProps = {
  className?: string;
  /**
   * variant of the square, default to `none`
   */
  variant?: "none" | "solid" | "soft" | "outlined";

  /**
   * If `true`, this element has round shape
   */
  round?: boolean;

  /**
   * The color of the element, rely on @mui-treasury/theme-treasury
   */
  palette?: Palette;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: SquareClasses;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

const overridesResolver = (props: any, styles: Record<string, object>) => {
  const { styleProps } = props;

  return {
    ...styles.root,
    ...styles[styleProps.variant],
    ...(styleProps.round && styles.round),
  };
};

const useUtilityClasses = (styleProps: SquareProps) => {
  const { variant, round, palette, classes } = styleProps;
  const slots = {
    root: ["root", round && "round", variant, palette],
  };
  return composeClasses(
    slots,
    getSquareUtilityClass,
    classes as Required<SquareProps["classes"]>
  );
};

const SquareRoot = styled(
  "div",
  {},
  {
    name: "JunSquare",
    slot: "Root",
    overridesResolver,
  }
)(
  ({
    theme: { treasury, ...theme },
    styleProps,
  }: {
    theme: Theme;
    styleProps: SquareProps;
  }) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 24,
    minHeight: 24,
    verticalAlign: "middle",
    flexShrink: 0,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    ...(styleProps.round && {
      borderRadius: 100,
    }),
    color: treasury.getColor(styleProps.palette, "500"),
    ...(styleProps.variant === "outlined" && {
      "&:before": {
        display: "block",
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: theme.shape.borderRadius,
        boxShadow: `inset 0 0 0 1px ${treasury.getColor(
          styleProps.palette,
          "500"
        )}`,
        ...(styleProps.round && {
          borderRadius: 100,
        }),
      },
    }),
    ...(styleProps.variant === "solid" && {
      color: "#fff",
      backgroundColor: treasury.getColor(styleProps.palette, "500"),
    }),
    ...(styleProps.variant === "soft" && {
      color: treasury.getColor(styleProps.palette, "500"),
      backgroundColor: treasury.getColor(styleProps.palette ?? "grey", "100"),
    }),
  })
);

interface SquareComponent {
  <P extends { as?: React.ElementType }>(
    props: P extends { as: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & SquareProps & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & SquareProps & AsProps
        : PropsWithChildren<P & SquareProps>
      : PropsWithChildren<P & SquareProps>
  ): JSX.Element | null;
}

export const Square: SquareComponent = React.forwardRef<
  any,
  PropsWithChildren<SquareProps>
>(function Square({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, SquareProps, "JunSquare">({
    props: inProps,
    name: "JunSquare",
  });
  const { variant = "none", palette, round, ...other } = props;

  const styleProps = {
    variant,
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <SquareRoot
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </SquareRoot>
  );
});
