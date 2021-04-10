import { HeaderBuilder } from "../Header/HeaderBuilder";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";
import { Responsive } from "../utils/types";

export const getFixedInsetOffsetSxProps = (modules: {
  header?: HeaderBuilder;
  topHeader?: HeaderBuilder;
  subheader?: HeaderBuilder;
}) => {
  let result: Responsive<number | string> = {};
  result = HeadersCompiler([
    modules.header,
    modules.topHeader,
    modules.subheader,
  ]).getAllHeight().totalHeight;
  return {
    ...(Object.keys(result).length > 0 && { height: result }),
  };
};
