import React from "react";
import cx from "clsx";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { experimentalStyled } from "@material-ui/core/styles";

import { useLayoutCtx } from "../Root/Root";
import { CSS_TRANSITION } from "../utils/constant";

const Div = experimentalStyled("div")();
const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "HeaderOffset", slot: "Root" }
)();

const Offset = ({
  element,
}: {
  element: "header" | "topHeader" | "subheader";
}) => {
  const { builder } = useLayoutCtx();
  return (
    <OffsetRoot
      className="HeaderOffset"
      sx={{ height: builder[element]?.getOffsetHeight(), flexShrink: 0 }}
    />
  );
};

export const TopHeader = (props: Parameters<typeof Div>[0]) => {
  const { builder } = useLayoutCtx();
  return (
    <>
      <Div
        {...props}
        className={cx("TopHeader", props.className)}
        sx={{
          transition: CSS_TRANSITION,
          ...props.sx,
          ...builder.topHeader?.getSxProps(),
        }}
      />
      <Offset element="topHeader" />
    </>
  );
};

export const Subheader = (props: Parameters<typeof Div>[0]) => {
  const { builder } = useLayoutCtx();
  return (
    <>
      <Div
        {...props}
        className={cx("Subheader", props.className)}
        sx={{
          transition: CSS_TRANSITION,
          ...props.sx,
          ...builder.subheader?.getSxProps(),
        }}
      />
      <Offset element="subheader" />
    </>
  );
};

export const Header = (props: AppBarProps) => {
  const { builder } = useLayoutCtx();
  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        {...props}
        className={cx("Header", props.className)}
        sx={{
          transition: CSS_TRANSITION,
          flexDirection: "row",
          alignItems: "center",
          ...props.sx,
          ...builder.header?.getSxProps(),
        }}
      />
      <Offset element="header" />
    </>
  );
};
