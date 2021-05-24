import { Responsive } from "./types";

export const flattenResponsive = <T>(value: Responsive<T>, force = false) => {
  if (Object.keys(value).length === 1 && force) {
    return Object.values(value)[0]!;
  }
  if (Object.keys(value).length === 1 && !!value.xs) {
    return value.xs;
  }
  if (Object.keys(value).length > 1) {
    let values = Object.values(value).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    if (values.length === 1) {
      return values[0]!;
    }
  }
  return value;
};
