import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import {
  DEFAULT_THEME,
  INITIAL_HEADER_HEIGHT,
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
} from "../utils/constant";
import { modifyObjectValues } from "../utils/modifyObjectValues";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import { createWidthInterface } from "../Width/WidthModel";
import { toValidCssValue } from "../utils/toValidCssValue";

type HeaderBreakpointConfig = {
  position: "relative" | "sticky" | "fixed";
  top?: number | string;
  layer?: number;
  clipped?:
    | boolean
    | Partial<Record<LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID, boolean>>;
  initialHeight?: number | string;
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
    this._config = modifyObjectValues(config, (value, key) => ({
      initialHeight: pickNearestBreakpoint(INITIAL_HEADER_HEIGHT, key),
      ...value,
    }));
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

  isHidden(breakpoint: Breakpoint) {
    if (!this._hidden) return false;
    if (typeof this._hidden === "boolean" && this._hidden) return true;
    return this._hidden.includes(breakpoint);
  }

  getHeight() {
    const result: Responsive<number | string> = {};
    const breakpoints = combineBreakpoints(
      this._config,
      Array.isArray(this._hidden) ? this._hidden : []
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      result[bp] = this.isHidden(bp) ? 0 : this._config[bp]?.initialHeight;
    }
    return {
      ...(Object.keys(result).length && { height: result }),
    };
  }

  getMarginEffect() {
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

  getWidth() {
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
            pickNearestBreakpoint(leftOccupiedSpace, bp)
          );
        }
      }

      let effectRight = createWidthInterface(0);
      if (rightEdgeSidebar) {
        if (!this.isClipped(RIGHT_EDGE_SIDEBAR_ID, bp)) {
          effectRight = createWidthInterface(
            pickNearestBreakpoint(rightOccupiedSpace, bp)
          );
        }
      }

      result[bp] = effectLeft.combine(effectRight).getStyle().width;
    }
    return {
      ...(Object.keys(result).length && { width: result }),
    };
  }

  getZIndex(theme = DEFAULT_THEME) {
    const result: Responsive<number> = {};
    for (const key in this._config) {
      const bp = key as Breakpoint;
      result[bp] = this.isAboveSomeEdgeSidebar(bp)
        ? theme.zIndex.drawer + 10 + (this._config[bp]?.layer ?? 0)
        : theme.zIndex.appBar;
    }
    return {
      ...(Object.keys(result).length && { zIndex: result }),
    };
  }

  getSxProps(theme = DEFAULT_THEME): object {
    return {
      ...this.getHeight(),
      ...this.getWidth(),
      ...this.getMarginEffect(),
      ...this.getZIndex(theme),
    };
  }
}
