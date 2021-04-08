import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getFixedInsetOffsetSxProps } from "./getInsetOffsetSxProps";

describe("InsetOffsetCompiler", () => {
  it("return height of non relative header config", () => {
    expect(
      getFixedInsetOffsetSxProps({
        header: new HeaderBuilder({
          config: {
            xs: {
              height: 56,
              position: "fixed",
            },
            sm: {
              height: 64,
              position: "relative",
            },
            lg: {
              height: 64,
              position: "sticky",
            },
          },
          hidden: ["sm"],
        }),
      })
    ).toEqual({
      height: {
        xs: 56,
        sm: 0,
        md: 64,
        lg: 64,
      },
    });
  });
});
