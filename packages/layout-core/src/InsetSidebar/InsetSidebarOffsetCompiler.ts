import { HeaderBuilder } from "../Header/HeaderBuilder";
import { Responsive } from "../utils/types";

export const InsetSidebarOffsetCompiler = (modules: {
  header?: HeaderBuilder;
}) => {
  const { header } = modules;
  return {
    getSxHeight() {
      let result: Responsive<number | string> = {};
      if (header) {
        result = header?.getSxHeight()?.height ?? {};
      }
      return {
        ...(Object.keys(result).length > 0 && { height: result }),
      };
    },
  };
};
