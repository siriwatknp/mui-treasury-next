import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { experimentalStyled, useTheme } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { InsetSidebarOffsetCompiler } from "./InsetSidebarOffsetCompiler";
import { useInsetHeaderMagnet } from "../hooks/useInsetHeaderMagnet";
import { DrawerAnchor, FixedInsetSidebarConfig } from "./InsetSidebarBuilder";

const InsetSidebarRoot = experimentalStyled("div")();
const InsetSidebarBody = experimentalStyled("div")();

export type InsetSidebarProps = {
  anchor?: DrawerAnchor;
  RootProps?: Parameters<typeof InsetSidebarRoot>[0];
  BodyProps?: Parameters<typeof InsetSidebarBody>[0];
};

const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "InsetSidebarOffset", slot: "Root" }
)();

const Offset = ({
  headerMagnetEnabled,
}: Pick<FixedInsetSidebarConfig, "headerMagnetEnabled">) => {
  const { scheme } = useLayoutCtx();
  const theme = useTheme();
  // header magnet feature
  const offsetStyle = useInsetHeaderMagnet(!headerMagnetEnabled);

  // header offset
  const offsetSx = InsetSidebarOffsetCompiler({
    header: scheme.header,
  }).getSxHeight();

  return (
    <OffsetRoot
      className="EdgeHeaderOffset"
      sx={{
        ...offsetSx,
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.short,
        }),
      }}
      style={offsetStyle}
    />
  );
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
        {sidebar?._config.position === "fixed" && (
          <Offset headerMagnetEnabled={sidebar._config.headerMagnetEnabled} />
        )}
        {children}
      </InsetSidebarBody>
    </InsetSidebarRoot>
  );
};
