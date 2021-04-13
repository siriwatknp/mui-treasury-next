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
  BodyProps?: Parameters<typeof InsetSidebarBody>[0];
  classes?: {
    root?: string;
    paper?: string;
  };
} & Parameters<typeof InsetSidebarRoot>[0];

export const InsetSidebar = ({
  anchor,
  children,
  classes,
  BodyProps,
  ...props
}: PropsWithChildren<InsetSidebarProps>) => {
  const { builder } = useLayoutCtx();

  // anchor should be injected via InsetContainer
  const sidebar = builder[`${anchor!}InsetSidebar` as const];
  return (
    <InsetSidebarRoot
      {...props}
      className={cx("InsetSidebar-root", props?.className, classes?.root)}
      sx={{
        position: "relative",
        flexShrink: 0,
        ...props?.sx,
        ...sidebar?.getSxRoot(),
      }}
    >
      <InsetSidebarBody
        {...BodyProps}
        className={cx(
          "InsetSidebar-body",
          BodyProps?.className,
          classes?.paper
        )}
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
