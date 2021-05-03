import React from "react";
import cx from "clsx";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import useThemeProps from "@material-ui/core/styles/useThemeProps";
import { getSquareUtilityClass } from "./squareClasses";
const overridesResolver = (props, styles) => {
  const { styleProps } = props;
  return {
    ...styles.root,
    ...styles[styleProps.variant],
    ...(styleProps.round && styles.round),
  };
};
const useUtilityClasses = (styleProps) => {
  const { variant, round, palette, classes } = styleProps;
  const slots = {
    root: ["root", round && "round", variant, palette],
  };
  return composeClasses(slots, getSquareUtilityClass, classes);
};
const SquareRoot = styled(
  "div",
  {},
  {
    name: "JunSquare",
    slot: "Root",
    overridesResolver,
  }
)(({ theme: { treasury, ...theme }, styleProps }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 24,
  minHeight: 24,
  verticalAlign: "middle",
  flexShrink: 0,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  ...(styleProps.dynamicSize && {
    minWidth: styleProps.dynamicSize,
    minHeight: styleProps.dynamicSize,
  }),
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
}));
export const Square = React.forwardRef(function Square(
  { children, ...inProps },
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunSquare",
  });
  const { variant = "none", palette, dynamicSize, round, ...other } = props;
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
