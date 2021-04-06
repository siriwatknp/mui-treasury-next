import { generateSx } from "./generateSx";

describe("generateSx", () => {
  it("getValue is keyof config", () => {
    const result = generateSx(
      {
        xs: {
          position: "relative",
          height: 56,
        },
        lg: {
          position: "sticky",
          height: 64,
        },
      },
      "height"
    );
    expect(result).toEqual({
      xs: 56,
      lg: 64,
    });
  });

  it("getValue is callback", () => {
    const result = generateSx(
      {
        xs: {
          position: "relative",
          height: 56,
        },
        lg: {
          position: "sticky",
          height: 64,
        },
      },
      (config) => config.height + 8
    );
    expect(result).toEqual({
      xs: 64,
      lg: 72,
    });
  });
});
