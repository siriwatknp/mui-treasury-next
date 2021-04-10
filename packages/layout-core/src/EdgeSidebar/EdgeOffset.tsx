import React from "react";
import {
  Breakpoint,
  experimentalStyled,
  useTheme,
} from "@material-ui/core/styles";
import { ClippableElement } from "../Header/HeaderBuilder";
import { useLayoutCtx } from "../Root/Root";
import { useScreen } from "../hooks/useScreen";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { useScrollY } from "../hooks/useScrollY";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";
import { CSSProperties } from "@material-ui/styles";
import { getEdgeOffsetSxProps } from "./getEdgeOffsetSxProps";

const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "EdgeSidebarOffset", slot: "Root" }
)();

export const EdgeOffset = ({ sidebarId }: { sidebarId: ClippableElement }) => {
  const { scheme } = useLayoutCtx();
  const theme = useTheme();
  const screen = useScreen();
  const edgeSidebar = scheme[sidebarId];
  const sidebarConfig = pickNearestBreakpoint(edgeSidebar?.config, screen);
  const headerMagnetEnabled =
    (EdgeSidebarBuilder.isPermanentConfig(sidebarConfig) ||
      EdgeSidebarBuilder.isPersistentConfig(sidebarConfig)) &&
    sidebarConfig?.headerMagnetEnabled;

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(!headerMagnetEnabled);

  const clippedHeaders = HeadersCompiler([
    scheme.header,
    scheme.topHeader,
    scheme.subheader,
  ]).getClippedHeight(sidebarId);

  // header magnet geature
  const style: CSSProperties = {};
  if (headerMagnetEnabled) {
    const maxOffset =
      clippedHeaders.diffHeight && screen
        ? pickNearestBreakpoint(clippedHeaders.diffHeight, screen)
        : 0;
    style.marginTop = `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`;
  }

  // header offset
  const sxProps = getEdgeOffsetSxProps(edgeSidebar, clippedHeaders.totalHeight);

  return (
    <OffsetRoot
      className="EdgeHeaderOffset"
      sx={{
        ...sxProps,
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.short,
        }),
      }}
      style={style}
    />
  );
};
