import React from "react";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { toValidCssValue } from "../utils/toValidCssValue";

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
  const { scheme } = useLayoutCtx();
  const sxProps: Record<string, string | number> = {
    marginLeft: "",
    marginRight: "",
  };
  if (
    scheme.leftInsetSidebar &&
    ["fixed", "absolute"].includes(scheme.leftInsetSidebar.config.position)
  ) {
    sxProps.marginLeft = toValidCssValue(scheme.leftInsetSidebar.config.width);
  }
  if (
    scheme.rightInsetSidebar &&
    ["fixed", "absolute"].includes(scheme.rightInsetSidebar.config.position)
  ) {
    sxProps.marginRight = toValidCssValue(
      scheme.rightInsetSidebar.config.width
    );
  }
  return <InsetAvoidingViewRoot {...props} sx={{ ...props.sx, ...sxProps }} />;
};
