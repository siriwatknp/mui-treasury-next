import React from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import { Circle } from "../shape";
import { Text, Word } from "../typography";

export const SideNavUserInfo = ({
  collapsed,
  ...props
}: { collapsed?: boolean } & BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        borderRadius: 1,
        bgcolor: "grey.50",
        p: 1.5,
        display: "flex",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <Circle sx={{ fontSize: collapsed ? 36 : 48, transition: "0.2s" }} />
      {!collapsed && (
        <Box sx={{ ml: 1.5 }}>
          <Word />
          <Word sx={{ height: 12, borderRadius: 2 }} />
        </Box>
      )}
    </Box>
  );
};
