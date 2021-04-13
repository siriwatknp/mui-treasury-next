import React, { CSSProperties } from "react";
import { useTheme, experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { FixedInsetSidebarConfig } from "./InsetSidebarBuilder";
import { useScrollY } from "../hooks/useScrollY";
import { useScreen } from "../hooks/useScreen";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";

const OffsetRoot = experimentalStyled(
  "div",
  {},
  { name: "InsetSidebarOffset", slot: "Root" }
)();

export const InsetOffset = ({
  headerMagnetEnabled,
}: Pick<FixedInsetSidebarConfig, "headerMagnetEnabled">) => {
  const { builder } = useLayoutCtx();
  const theme = useTheme();
  const screen = useScreen();

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(!headerMagnetEnabled);

  const { totalHeight, diffHeight } = HeadersCompiler([
    builder.header,
    builder.topHeader,
    builder.subheader,
  ]).getAllHeight();

  // header magnet feature
  const style: CSSProperties = {};
  if (headerMagnetEnabled) {
    const maxOffset =
      diffHeight && screen ? pickNearestBreakpoint(diffHeight, screen) : 0;
    style.marginTop = `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`;
  }

  return (
    <OffsetRoot
      className="EdgeHeaderOffset"
      sx={{
        height: totalHeight,
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.short,
        }),
      }}
      style={style}
    />
  );
};
