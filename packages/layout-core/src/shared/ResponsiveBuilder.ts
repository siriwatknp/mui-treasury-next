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

  generateSxWithHidden(options: {
    assignValue: (
      breakpointConfig: T,
      bp: Breakpoint
    ) => number | string | undefined;
    hiddenValue?: string | number;
    /**
     * if true, will calculate from xs
     */
    strict?: boolean;
  }) {
    const { config, hidden } = this;
    const hiddenValue = options.hiddenValue;

    if (typeof hidden === "boolean" && hidden && hiddenValue !== undefined) {
      return { xs: hiddenValue };
    }

    const result: Responsive<number | string> = {};

    BREAKPOINT_KEYS.forEach((bp) => {
      const candidate = pickNearestBreakpoint(config, bp);
      const lastResultVal = pickNearestBreakpoint(result, bp);

      if (
        options.strict &&
        candidate === undefined &&
        lastResultVal === undefined &&
        hiddenValue !== undefined
      ) {
        // cannot find valid config and no result yet
        result[bp] = hiddenValue;
      }

      const isHidden = Array.isArray(hidden) && hidden.includes(bp);

      if (isHidden) {
        if (hiddenValue !== undefined && lastResultVal !== hiddenValue) {
          result[bp] = hiddenValue;
        }
      } else {
        if (candidate !== undefined) {
          const assignedValue = options.assignValue(candidate, bp);

          if (assignedValue !== undefined) {
            if (assignedValue !== hiddenValue) {
              result[bp] = assignedValue;

              if (assignedValue === lastResultVal) {
                delete result[bp];
              }
            }
          }
        }
      }
    });
    return result;
  }

  getSxDisplay(appearance: string) {
    return this.generateSxWithHidden({
      assignValue: () => appearance,
      hiddenValue: "none",
      strict: true,
    });
  }
}
