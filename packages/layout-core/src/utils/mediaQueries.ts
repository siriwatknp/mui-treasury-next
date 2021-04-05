import { Breakpoint, Theme } from "@material-ui/core/styles";
import { Responsive } from "./types";

export const toMediaQueries = (
  responsiveStyle:
    | Partial<Record<string, Responsive<string | number>>>
    | undefined,
  theme: Theme
) => {
  const { breakpoints } = theme;
  const result: Partial<
    Record<string, string | number | Record<string, string | number>>
  > = {};
  for (const cssPropName in responsiveStyle) {
    for (const key in responsiveStyle[cssPropName]) {
      const bp = key as Breakpoint;
      if (bp === "xs") {
        result[cssPropName] = responsiveStyle[cssPropName]?.[bp];
      } else {
        const mediaQueryValue = result[breakpoints.up(bp)];
        result[breakpoints.up(bp)] = {
          ...(typeof mediaQueryValue === "object" && mediaQueryValue),
          [cssPropName]: responsiveStyle[cssPropName]?.[bp]!,
        };
      }
    }
  }
  return result;
};
