import { Breakpoint } from "@material-ui/core/styles";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { Responsive } from "../utils/types";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";

export const EdgeSidebarOffsetCompiler = (modules: {
  edgeSidebar?: EdgeSidebarBuilder;
  header?: HeaderBuilder;
}) => {
  const { header, edgeSidebar } = modules;
  return {
    getSxHeight() {
      const result: Responsive<number | string> = {};
      if (header && edgeSidebar && edgeSidebar.id) {
        const clippedHeight = header?.getClippedHeight(edgeSidebar.id);
        const breakpoints = combineBreakpoints(
          edgeSidebar.config,
          clippedHeight
        );
        for (const key of breakpoints) {
          const bp = key as Breakpoint;
          result[bp] = pickNearestBreakpoint(clippedHeight, bp);
        }
      }
      return {
        ...(Object.keys(result).length > 0 && { height: result }),
      };
    },
  };
};
