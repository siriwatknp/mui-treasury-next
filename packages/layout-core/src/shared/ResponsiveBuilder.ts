import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";

export class ResponsiveBuilder<T> {
  readonly config: Responsive<T>;
  readonly hidden?: boolean | Breakpoint[];

  constructor(params: {
    config: Responsive<T>;
    hidden?: boolean | Breakpoint[];
  }) {
    this.config = params.config;
    this.hidden = params.hidden;
  }

  isHidden(breakpoint: Breakpoint) {
    if (!this.hidden) return false;
    if (typeof this.hidden === "boolean" && this.hidden) return true;
    return this.hidden.includes(breakpoint);
  }

  getSxDisplay(appearance: string) {
    let result: Responsive<string> = {};
    if (this.hidden === true) {
      return { xs: "none" };
    }
    BREAKPOINT_KEYS.forEach((bp) => {
      const candidate = pickNearestBreakpoint(this.config, bp);
      const lastResultVal = pickNearestBreakpoint(result, bp);

      if (!candidate && !lastResultVal) {
        // cannot find valid config and no result yet
        result[bp] = "none";
      }

      if (candidate) {
        const isWithinHidden =
          Array.isArray(this.hidden) && this.hidden.includes(bp);

        if (isWithinHidden && lastResultVal !== "none") {
          result[bp] = "none";
        }

        if (!isWithinHidden && lastResultVal === "none") {
          result[bp] = appearance;
        }
      }
    });
    return result;
  }
}
