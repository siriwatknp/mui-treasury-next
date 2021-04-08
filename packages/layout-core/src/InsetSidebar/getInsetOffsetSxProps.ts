import { HeaderBuilder } from "../Header/HeaderBuilder";
import { Responsive } from "../utils/types";

export const getInsetOffsetSxProps = (modules: { header?: HeaderBuilder }) => {
  const { header } = modules;
  let result: Responsive<number | string> = {};
  if (header) {
    result = header?.getNonRelativeHeight();
  }
  return {
    ...(Object.keys(result).length > 0 && { height: result }),
  };
};
