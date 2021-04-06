import { generateSxWithHidden } from "./generateSxWithHidden";

describe("generateSxWithHidden", () => {
  it("without hidden", () => {
    const result = generateSxWithHidden(
      {
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
      },
      (breakpointConfig) => breakpointConfig?.height
    );
    expect(result).toEqual({ xs: 100, lg: 40 });
  });

  it("undefined value will not be added to the result", () => {
    const result = generateSxWithHidden(
      {
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
      },
      (breakpointConfig) =>
        breakpointConfig.height > 80 ? breakpointConfig.height : undefined
    );
    expect(result).toEqual({ xs: 100 });
  });
  it("use nearest config for the next unhidden breakpoint", () => {
    const result = generateSxWithHidden(
      {
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
        hidden: ["sm"],
      },
      (breakpointConfig) => breakpointConfig?.height
    );
    expect(result).toEqual({
      xs: 100,
      sm: 0,
      md: 100,
      lg: 40,
    });
  });

  it("hidden is true", () => {
    const result = generateSxWithHidden(
      {
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
        hidden: true,
      },
      (breakpointConfig) => breakpointConfig?.height
    );
    expect(result).toEqual({ xs: 0 });
  });

  it("hidden on multiple breakpoints", () => {
    const result = generateSxWithHidden(
      {
        config: {
          xs: { height: 100 },
          sm: { height: 64 },
          lg: { height: 40 },
        },
        hidden: ["sm", "xl"],
      },
      (breakpointConfig) => breakpointConfig?.height
    );
    expect(result).toEqual({ xs: 100, sm: 0, md: 64, lg: 40, xl: 0 });
  });
});
