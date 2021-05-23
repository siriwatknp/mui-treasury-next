import React from "react";
import cx from "clsx";
import { experimentalStyled, Theme } from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { DrawerAnchor } from "./InsetSidebarBuilder";
import { InsetOffset } from "./InsetOffset";

const InsetSidebarRoot = experimentalStyled(
  "div",
  {},
  {
    name: "AppInsetSidebar",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)({
  position: "relative",
  flexShrink: 0,
});
const InsetSidebarBody = experimentalStyled(
  "div",
  {},
  {
    name: "AppInsetSidebar",
    slot: "Body",
    overridesResolver: (props, styles) => styles.body,
  }
)({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});

type DivProps = JSX.IntrinsicElements["div"];
export type InsetSidebarClassKey = "root" | "body";
export interface InsetSidebarProps extends DivProps {
  anchor?: DrawerAnchor;
  BodyProps?: DivProps & { sx?: SxProps<Theme> };
  classes?: {
    root?: string;
    paper?: string;
  };
  sx?: SxProps<Theme>;
}

export const InsetSidebar = ({
  anchor,
  children,
  classes,
  BodyProps,
  ...props
}: PropsWithFunctionChildren<InsetSidebarProps>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;

  // anchor should be injected via InsetContainer
  const sidebar = builder[`${anchor!}InsetSidebar` as const];
  return (
    <InsetSidebarRoot
      {...props}
      className={cx(props?.className, classes?.root)}
      sx={{
        ...props?.sx,
        ...sidebar?.getSxRoot(),
      }}
    >
      <InsetSidebarBody
        {...BodyProps}
        className={cx(BodyProps?.className, classes?.paper)}
        sx={{
          ...BodyProps?.sx,
          ...sidebar?.getSxBody(),
        }}
      >
        {sidebar?.config.position === "fixed" && (
          <InsetOffset
            headerMagnetEnabled={sidebar.config.headerMagnetEnabled}
          />
        )}
        {typeof children === "function" ? children(ctx) : children}
      </InsetSidebarBody>
    </InsetSidebarRoot>
  );
};
