import React from "react";
import cx from "clsx";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { experimentalStyled } from "@material-ui/core/styles";

import { useLayoutCtx } from "../Root/Root";
import { CSS_TRANSITION } from "../utils/constant";

const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "HeaderOffset", slot: "Root" }
)();

const Offset = () => {
  const { scheme } = useLayoutCtx();
  return (
    <OffsetRoot
      className="HeaderOffset"
      sx={{ height: scheme.header?.getOffsetHeight(), flexShrink: 0 }}
    />
  );
};

export const Header = (props: AppBarProps) => {
  const { scheme } = useLayoutCtx();
  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        {...props}
        className={cx("Header", props.className)}
        sx={{
          transition: CSS_TRANSITION,
          ...props.sx,
          ...scheme.header?.getSxProps(),
        }}
      />
      <Offset />
    </>
  );
};
