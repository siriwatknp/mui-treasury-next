import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { DrawerAnchor } from "./InsetSidebarBuilder";
import { InsetOffset } from "./InsetOffset";

const InsetSidebarRoot = experimentalStyled("div")();
const InsetSidebarBody = experimentalStyled("div")();

export type InsetSidebarProps = {
  anchor?: DrawerAnchor;
  RootProps?: Parameters<typeof InsetSidebarRoot>[0];
  BodyProps?: Parameters<typeof InsetSidebarBody>[0];
};

export const InsetSidebar = ({
  anchor,
  children,
  RootProps,
  BodyProps,
}: PropsWithChildren<InsetSidebarProps>) => {
  const { scheme } = useLayoutCtx();

  // anchor should be injected via InsetContainer
  const sidebar = scheme[`${anchor!}InsetSidebar` as const];
  return (
    <InsetSidebarRoot
      {...RootProps}
      className={cx("InsetSidebar-root", RootProps?.className)}
      sx={{
        position: "relative",
        flexShrink: 0,
        ...RootProps?.sx,
        ...sidebar?.getSxRoot(),
      }}
    >
      <InsetSidebarBody
        {...BodyProps}
        className={cx("InsetSidebar-body", BodyProps?.className)}
        sx={{
          backgroundColor: "background.paper",
          ...BodyProps?.sx,
          ...sidebar?.getSxBody(),
        }}
      >
        {sidebar?.config.position === "fixed" && (
          <InsetOffset
            headerMagnetEnabled={sidebar.config.headerMagnetEnabled}
          />
        )}
        {children}
      </InsetSidebarBody>
    </InsetSidebarRoot>
  );
};
