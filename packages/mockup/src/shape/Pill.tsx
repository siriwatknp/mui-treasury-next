import React from "react";
import Box, { BoxProps } from "@material-ui/core/Box";

export const Pill = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      width: 56,
      height: 24,
      backgroundColor: "grey.200",
      borderRadius: 5,
      ...props.sx,
    }}
  />
);
