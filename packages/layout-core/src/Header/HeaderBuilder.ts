import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import {
  DEFAULT_THEME,
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
} from "../utils/constant";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { createWidthInterface } from "../Width/WidthModel";
import { toValidCssValue } from "../utils/toValidCssValue";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";
import { generateSx } from "../utils/generateSx";

type HeaderBreakpointConfig = {
  position: "relative" | "sticky" | "fixed";
  height: number | string;
  top?: number | string;
  layer?: number;
  clipped?:
    | boolean
    | Partial<Record<LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID, boolean>>;
};
type HeaderSetupParams = {
  config: Responsive<HeaderBreakpointConfig>;
  hidden?: boolean | Breakpoint[];
};

export class HeaderBuilder {
  readonly _config: HeaderSetupParams["config"];
  readonly _hidden: HeaderSetupParams["hidden"];
  _effectedBy: {
    leftEdgeSidebar?: EdgeSidebarBuilder;
    rightEdgeSidebar?: EdgeSidebarBuilder;
  } = {};

  constructor(params: HeaderSetupParams) {
    const { config, hidden } = params;
    this._config = config;
    this._hidden = hidden;
  }

  isClipped(
    edgeSidebarId: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID,
    breakpoint: Breakpoint
  ) {
    const headerBreakpointConfig = pickNearestBreakpoint(
      this._config,
      breakpoint
    );
    if (
      typeof headerBreakpointConfig?.clipped === "boolean" &&
      headerBreakpointConfig.clipped
    ) {
      return true;
    }
    return (
      typeof headerBreakpointConfig?.clipped === "object" &&
      headerBreakpointConfig?.clipped[edgeSidebarId]
    );
  }

  isAboveSomeEdgeSidebar(breakpoint: Breakpoint) {
    const headerBreakpointConfig = pickNearestBreakpoint(
      this._config,
      breakpoint
    );
    if (!headerBreakpointConfig) return false;
    const { clipped } = headerBreakpointConfig;
    if (typeof clipped === "boolean") {
      return clipped;
    }
    return !!clipped?.leftEdgeSidebar || !!clipped?.rightEdgeSidebar;
  }

  getOffsetHeight() {
    return generateSxWithHidden(
      {
        config: this._config,
        hidden: this._hidden,
      },
      (breakpointConfig) =>
        breakpointConfig.position === "fixed" ? breakpointConfig.height : 0
    );
  }

  getClippedRelativeHeight(
    sidebarId: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID
  ) {
    return generateSxWithHidden(
      {
        config: this._config,
        hidden: this._hidden,
      },
      (breakpointConfig, bp) =>
        this.isClipped(sidebarId, bp) &&
        breakpointConfig.position === "relative"
          ? toValidCssValue(breakpointConfig.height)
          : "0px"
    );
  }

  getClippedHeight(sidebarId: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID) {
    return generateSxWithHidden(
      {
        config: this._config,
        hidden: this._hidden,
      },
      (breakpointConfig, bp) =>
        this.isClipped(sidebarId, bp) ? breakpointConfig?.height : 0
    );
  }

  getSxHeight() {
    const result = generateSxWithHidden(
      {
        config: this._config,
        hidden: this._hidden,
      },
      (breakpointConfig) => breakpointConfig.height
    );
    return {
      ...(Object.keys(result).length && { height: result }),
    };
  }

  getSxMarginHorizontal() {
    const marginLeft: Responsive<number | string> = {};
    const { leftEdgeSidebar, rightEdgeSidebar } = this._effectedBy;
    if (leftEdgeSidebar) {
      const occupiedSpace = leftEdgeSidebar?.getOccupiedSpace();
      for (const key in occupiedSpace) {
        const bp = key as Breakpoint;
        marginLeft[bp] = this.isClipped(LEFT_EDGE_SIDEBAR_ID, bp)
          ? 0
          : toValidCssValue(occupiedSpace[bp]!);
      }
    }
    const marginRight: Responsive<number | string> = {};
    if (rightEdgeSidebar) {
      const occupiedSpace = rightEdgeSidebar?.getOccupiedSpace();
      for (const key in occupiedSpace) {
        const bp = key as Breakpoint;
        marginRight[bp] = this.isClipped(RIGHT_EDGE_SIDEBAR_ID, bp)
          ? 0
          : toValidCssValue(occupiedSpace[bp]!);
      }
    }
    return {
      ...(Object.keys(marginLeft).length && { marginLeft }),
      ...(Object.keys(marginRight).length && { marginRight }),
    };
  }

  getSxWidth() {
    const result: Responsive<number | string> = {};
    const { leftEdgeSidebar, rightEdgeSidebar } = this._effectedBy;
    const leftOccupiedSpace = leftEdgeSidebar?.getOccupiedSpace() ?? {};
    const rightOccupiedSpace = rightEdgeSidebar?.getOccupiedSpace() ?? {};
    const breakpoints = combineBreakpoints(
      leftOccupiedSpace,
      rightOccupiedSpace
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      let effectLeft = createWidthInterface(0);
      if (leftEdgeSidebar) {
        if (!this.isClipped(LEFT_EDGE_SIDEBAR_ID, bp)) {
          effectLeft = createWidthInterface(
            leftEdgeSidebar.isFlexiblePersistent(bp, "header")
              ? 0
              : pickNearestBreakpoint(leftOccupiedSpace, bp)
          );
        }
      }

      let effectRight = createWidthInterface(0);
      if (rightEdgeSidebar) {
        if (!this.isClipped(RIGHT_EDGE_SIDEBAR_ID, bp)) {
          effectRight = createWidthInterface(
            rightEdgeSidebar.isFlexiblePersistent(bp, "header")
              ? 0
              : pickNearestBreakpoint(rightOccupiedSpace, bp)
          );
        }
      }

      result[bp] = effectLeft.combine(effectRight).getStyle().width;
    }
    return {
      ...(Object.keys(result).length && { width: result }),
    };
  }

  getSxZIndex(theme = DEFAULT_THEME) {
    const result = generateSx(this._config, (breakpointConfig, bp) =>
      this.isAboveSomeEdgeSidebar(bp)
        ? theme.zIndex.drawer + 10 + (breakpointConfig.layer ?? 0)
        : theme.zIndex.appBar
    );
    return {
      ...(Object.keys(result).length && { zIndex: result }),
    };
  }

  getSxProps(theme = DEFAULT_THEME): object {
    const sxTop = generateSx(this._config, "top");
    return {
      position: generateSx(this._config, "position"),
      ...(Object.keys(sxTop).length && { top: sxTop }),
      ...this.getSxHeight(),
      ...this.getSxWidth(),
      ...this.getSxMarginHorizontal(),
      ...this.getSxZIndex(theme),
    };
  }
}
