import React, { ReactNode } from "react";
import { experimentalStyled } from "@material-ui/core/styles";
import { DrawerAnchor } from "./EdgeSidebarBuilder";
import { useEdgeSidebar } from "./useEdgeSidebar";

const TriggerRoot = experimentalStyled("div", {}, { name: "Trigger" })();

export type TriggerProps = Parameters<typeof TriggerRoot>[0] & {
  anchor?: DrawerAnchor;
  display?: string;
  children?: (
    utils: Omit<ReturnType<typeof useEdgeSidebar>, "sxDisplay">
  ) => ReactNode;
};

export const Trigger = ({
  anchor,
  display,
  children,
  ...props
}: TriggerProps) => {
  const { sxDisplay, ...state } = useEdgeSidebar({ anchor, display });
  return (
    <TriggerRoot {...props} sx={{ display: sxDisplay, ...props.sx }}>
      {typeof children === "function" && children(state)}
    </TriggerRoot>
  );
};
