import React from "react";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { toValidCssValue } from "../utils/toValidCssValue";
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
    sxProps.marginLeft =
      typeof builder.leftInsetSidebar.config.width === "object"
        ? builder.leftInsetSidebar.config.width
        : toValidCssValue(builder.leftInsetSidebar.config.width);
  }
  if (
    builder.rightInsetSidebar &&
    ["fixed", "absolute"].includes(builder.rightInsetSidebar.config.position)
  ) {
    sxProps.marginRight =
      typeof builder.rightInsetSidebar.config.width === "object"
        ? builder.rightInsetSidebar.config.width
        : toValidCssValue(builder.rightInsetSidebar.config.width);
  }
  return <InsetAvoidingViewRoot {...props} sx={{ ...props.sx, ...sxProps }} />;
};
