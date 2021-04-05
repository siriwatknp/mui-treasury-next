import React from "react";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";

import { useLayoutCtx } from "../Root/Root";

export const Header = (props: AppBarProps) => {
  const { scheme } = useLayoutCtx();
  return (
    <AppBar
      color="default"
      elevation={0}
      {...props}
      sx={{
        ...props.sx,
        ...scheme.header?.getSxProps(),
      }}
    />
  );
};
