import { modifyObjectValues } from "./modifyObjectValues";

describe("modifyObjectValues", () => {
  it("able to append specified some fields", () => {
    const result = modifyObjectValues(
      { xs: { a: "a" }, lg: { b: "b" } },
      (value, key) => ({
        ...value,
        hidden: key === "lg",
      })
    );
    expect(result).toEqual({
      xs: { a: "a", hidden: false },
      lg: { b: "b", hidden: true },
    });
  });
});
