import { useScreen } from "./useScreen";
import { LEFT_EDGE_SIDEBAR_ID, RIGHT_EDGE_SIDEBAR_ID } from "../utils/constant";
import { useLayoutCtx } from "../Root/Root";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { useScrollY } from "./useScrollY";

export const useEdgeHeaderMagnet = (
  sidebarId: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID
): { marginTop: string } => {
  const { scheme } = useLayoutCtx();
  const screen = useScreen();

  const sidebarConfig = pickNearestBreakpoint(
    scheme[sidebarId]?._config,
    screen
  );
  const isMagnet =
    (EdgeSidebarBuilder.isPermanentConfig(sidebarConfig) ||
      EdgeSidebarBuilder.isPersistentConfig(sidebarConfig)) &&
    sidebarConfig?.headerMagnetEnabled;

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(!isMagnet);

  if (!isMagnet) return { marginTop: "" };

  const height = scheme.header?.getClippedRelativeHeight(sidebarId);

  const maxOffset = height && screen ? height[screen] : 0;

  return {
    marginTop: `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`,
  }; // inline style
};

export default useEdgeHeaderMagnet;
