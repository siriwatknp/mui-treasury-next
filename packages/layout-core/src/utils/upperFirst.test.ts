import upperFirst from "./upperFirst";

describe("upperFirst", () => {
  it("turn first letter to uppercase", () => {
    expect(upperFirst("left")).toEqual("Left");
    expect(upperFirst("right")).toEqual("Right");
  });
});
