export const toValidCssValue = (value: string | number) =>
  typeof value === "number" ? `${value}px` : value;
