import { flattenResponsive } from "./flattenResponsive";

describe("flattenResponsive", () => {
  it("flatten if only xs field", () => {
    expect(flattenResponsive({ xs: "absolute" })).toEqual("absolute");
  });

  it("flatten if all value is the same", () => {
    expect(flattenResponsive({ xs: "absolute", md: "absolute" })).toEqual(
      "absolute"
    );
  });

  it("return same value if responsive (not only xs)", () => {
    expect(flattenResponsive({ md: "absolute" })).toEqual({ md: "absolute" });
    expect(flattenResponsive({ xs: "absolute", md: "relative" })).toEqual({
      xs: "absolute",
      md: "relative",
    });
  });
});
