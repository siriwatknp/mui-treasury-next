import React from "react";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { experimentalStyled } from "@material-ui/core/styles";

import { useLayoutCtx } from "../Root/Root";

const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "HeaderOffset", slot: "Root" }
)();

const Offset = () => {
  const { scheme } = useLayoutCtx();
  return <OffsetRoot sx={{ height: scheme.header?.getOffsetHeight() }} />;
};

export const Header = (props: AppBarProps) => {
  const { scheme } = useLayoutCtx();
  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        {...props}
        sx={{
          ...props.sx,
          ...scheme.header?.getSxProps(),
        }}
      />
      <Offset />
    </>
  );
};
