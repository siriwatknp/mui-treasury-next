import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getInsetOffsetSxProps } from "./getInsetOffsetSxProps";

describe("InsetOffsetCompiler", () => {
  it("return height of non relative header config", () => {
    expect(
      getInsetOffsetSxProps({
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
        }),
      })
    ).toEqual({
      height: {
        xs: "56px",
        sm: 0,
        lg: "64px",
      },
    });
  });
});
