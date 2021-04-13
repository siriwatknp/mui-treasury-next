import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { Responsive } from "./types";

export const generateSx = <Config extends Partial<Record<string, any>>>(
  config: Responsive<Config>,
  getValue:
    | keyof Config
    | ((
        breakpointConfig: Config,
        bp: Breakpoint
      ) => string | number | undefined)
) => {
  const result: Responsive<number | string> = {};
  for (const key in config) {
    const bp = key as Breakpoint;
    const breakpointConfig = config[bp];

    const value =
      typeof getValue === "function"
        ? getValue(breakpointConfig!, bp)
        : breakpointConfig?.[getValue];

    if (value !== undefined) {
      result[bp] = value;
    }
  }
  return result;
};
