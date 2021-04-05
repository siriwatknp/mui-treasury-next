import React from "react";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import { useLayoutCtx } from "../Root/Root";
import { useScreen } from "../hooks/useScreen";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { useSidebarAutoCollapse } from "../hooks/useSidebarAutoCollapse";

export type EdgeSidebarProps = { anchor: "left" | "right" } & Omit<
  DrawerProps,
  "anchor" | "variant"
>;

export const EdgeSidebar = ({
  anchor,
  children,
  ...props
}: EdgeSidebarProps) => {
  if (!anchor) {
    throw new Error('Missing prop "anchor" on EdgeSidebar component');
  }
  const screen = useScreen();
  const { scheme, state } = useLayoutCtx();
  const edgeSidebar = scheme[`${anchor}EdgeSidebar` as const];

  useSidebarAutoCollapse(edgeSidebar?._id || undefined);

  if (!screen) return null;
  if (!edgeSidebar || !edgeSidebar._id) return null;

  const responsiveVariant = edgeSidebar.getDrawerVariant();
  const variant = pickNearestBreakpoint(responsiveVariant, screen);
  if (!variant || edgeSidebar.isHidden(screen)) return null;
  return (
    <Drawer
      {...props}
      open={state[edgeSidebar._id]?.open}
      anchor={anchor}
      variant={variant}
      PaperProps={{
        ...props.PaperProps,
        sx: {
          ...props.PaperProps?.sx,
          ...scheme[`${anchor}EdgeSidebar` as const]?.getSxProps(),
        },
      }}
    >
      {children}
    </Drawer>
  );
};
