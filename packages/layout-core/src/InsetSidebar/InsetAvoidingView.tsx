import React from "react";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import {
  toResponsiveCssValue,
  toValidCssValue,
} from "../utils/toValidCssValue";
import { Responsive } from "../utils/types";

const InsetAvoidingViewRoot = experimentalStyled(
  "div",
  {},
  { name: "InsetAvoidingView", slot: "Root" }
)({
  transition: "all 225ms",
});

export type InsetAvoidingViewProps = Parameters<
  typeof InsetAvoidingViewRoot
>[0];

export const InsetAvoidingView = (props: InsetAvoidingViewProps) => {
  const { builder } = useLayoutCtx();
  const sxProps: Record<
    string,
    string | number | Responsive<string | number>
  > = {
    marginLeft: "",
    marginRight: "",
  };
  if (
    builder.leftInsetSidebar &&
    ["fixed", "absolute"].includes(builder.leftInsetSidebar.config.position)
  ) {
    const width = builder.leftInsetSidebar.config.width;
    sxProps.marginLeft =
      typeof width === "object"
        ? toResponsiveCssValue(width)
        : toValidCssValue(width);
  }
  if (
    builder.rightInsetSidebar &&
    ["fixed", "absolute"].includes(builder.rightInsetSidebar.config.position)
  ) {
    const width = builder.rightInsetSidebar.config.width;
    sxProps.marginRight =
      typeof width === "object"
        ? toResponsiveCssValue(width)
        : toValidCssValue(width);
  }
  return <InsetAvoidingViewRoot {...props} sx={{ ...props.sx, ...sxProps }} />;
};
