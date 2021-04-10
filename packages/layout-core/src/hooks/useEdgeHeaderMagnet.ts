import { useScreen } from "./useScreen";
import { EDGE_SIDEBAR_ID } from "../utils/constant";
import { useLayoutCtx } from "../Root/Root";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { useScrollY } from "./useScrollY";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";

export const useEdgeHeaderMagnet = (sidebarId: EDGE_SIDEBAR_ID) => {
  const { scheme } = useLayoutCtx();
  const screen = useScreen();

  const sidebarConfig = pickNearestBreakpoint(
    scheme[sidebarId]?.config,
    screen
  );
  const isMagnet =
    (EdgeSidebarBuilder.isPermanentConfig(sidebarConfig) ||
      EdgeSidebarBuilder.isPersistentConfig(sidebarConfig)) &&
    sidebarConfig?.headerMagnetEnabled;

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(!isMagnet);

  if (!isMagnet) return { marginTop: "" };

  // const height = scheme.header?.getClippedRelativeHeight(sidebarId);
  const height = HeadersCompiler([
    scheme.header,
    scheme.topHeader,
    scheme.subheader,
  ]).getClippedHeight(sidebarId).diffHeight;

  const maxOffset =
    height && screen ? pickNearestBreakpoint(height, screen) : 0;

  return {
    marginTop: `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`,
  }; // inline style
};
