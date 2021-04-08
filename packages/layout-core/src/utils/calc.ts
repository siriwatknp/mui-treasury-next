import { isNotNilOrEmpty } from "./isNilOrEmpty";
import { toValidCssValue } from "./toValidCssValue";

export const subtractCalc = (...args: (string | number)[]): string =>
  `calc(${args.filter(isNotNilOrEmpty).map(toValidCssValue).join(" - ")})`;

export const plusCalc = (...args: (string | number)[]): string =>
  `calc(${args.filter(isNotNilOrEmpty).map(toValidCssValue).join(" + ")})`;
