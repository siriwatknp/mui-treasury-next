import { Breakpoint } from "@material-ui/core/styles";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { Responsive } from "../utils/types";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";

export const getEdgeOffsetSxProps = (modules: {
  topHeader?: HeaderBuilder;
  header?: HeaderBuilder;
  subheader?: HeaderBuilder;
  edgeSidebar?: EdgeSidebarBuilder;
}) => {
  const { header, topHeader, subheader, edgeSidebar } = modules;
  const result: Responsive<number | string> = {};
  if (edgeSidebar && edgeSidebar.id) {
    const clippedHeight = HeadersCompiler([
      topHeader,
      header,
      subheader,
    ]).getClippedHeight(edgeSidebar.id).totalHeight;
    const breakpoints = combineBreakpoints(edgeSidebar.config, clippedHeight);
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      result[bp] = pickNearestBreakpoint(clippedHeight, bp);
    }
  }
  return {
    ...(Object.keys(result).length > 0 && { height: result }),
  };
};
