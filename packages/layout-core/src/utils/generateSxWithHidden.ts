import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { BREAKPOINT_KEYS } from "./muiBreakpoints";
import { pickNearestBreakpoint } from "./pickNearestBreakpoint";
import { Responsive } from "./types";

export const generateSxWithHidden = <
  Config extends Partial<Record<string, any>>
>(
  builder: {
    config: Responsive<Config>;
    hidden?: Breakpoint[] | boolean;
  },
  getModuleValue: (
    breakpointConfig: Config,
    bp: Breakpoint
  ) => number | string | undefined,
  getHiddenValue: () => string | number = () => 0
) => {
  const { config, hidden } = builder;

  if (typeof hidden === "boolean" && hidden) {
    return { xs: getHiddenValue() };
  }

  function isHidden(breakpoint: Breakpoint) {
    if (!hidden) return false;
    if (typeof hidden === "boolean" && hidden) return true;
    return hidden.includes(breakpoint);
  }

  const result: Responsive<number | string> = {};
  let prevHidden = false; // keep track of hidden in previous breakpoint
  for (const bp of BREAKPOINT_KEYS) {
    let breakpointConfig = config[bp];
    if (isHidden(bp)) {
      result[bp] = getHiddenValue();
      prevHidden = true;
    } else {
      if (prevHidden || breakpointConfig) {
        if (prevHidden) {
          prevHidden = false;
          breakpointConfig = pickNearestBreakpoint(config, bp);
        }
        const value = getModuleValue(breakpointConfig!, bp);
        if (value !== undefined) {
          result[bp] = value;
        }
      }
    }
  }
  return result;
};
