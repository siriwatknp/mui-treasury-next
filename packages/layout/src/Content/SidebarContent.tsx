import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";

const SidebarContentRoot = experimentalStyled(
  "div",
  {},
  { name: "SidebarContent" }
)`
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
`;

type SidebarContentProps = Parameters<typeof SidebarContentRoot>[0];

export const SidebarContent = (props: SidebarContentProps) => {
  return (
    <SidebarContentRoot
      {...props}
      className={cx("SidebarContent", props.className)}
    />
  );
};
