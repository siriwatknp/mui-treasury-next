import React from "react";
import cx from "clsx";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { experimentalStyled } from "@material-ui/core/styles";

import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
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

export const TopHeader = ({
  children,
  ...props
}: PropsWithFunctionChildren<Parameters<typeof Div>[0]>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;
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
      >
        {typeof children === "function" ? children(ctx) : children}
      </Div>
      <Offset element="topHeader" />
    </>
  );
};

export const Subheader = ({
  children,
  ...props
}: PropsWithFunctionChildren<Parameters<typeof Div>[0]>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;
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
      >
        {typeof children === "function" ? children(ctx) : children}
      </Div>
      <Offset element="subheader" />
    </>
  );
};

export const Header = ({
  children,
  ...props
}: PropsWithFunctionChildren<AppBarProps>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        {...props}
        className={cx("Header", props.className)}
        sx={{
          flexDirection: "row",
          transition: CSS_TRANSITION,
          ...props.sx,
          ...builder.header?.getSxProps(),
        }}
      >
        {typeof children === "function" ? children(ctx) : children}
      </AppBar>
      <Offset element="header" />
    </>
  );
};
