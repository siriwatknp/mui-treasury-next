import { createMuiTheme } from "@material-ui/core/styles";
import { toMediaQueries } from "./mediaQueries";

describe("MediaQueries", () => {
  const theme = createMuiTheme();

  it("return empty result if input is undefined", () => {
    expect(toMediaQueries(undefined, theme)).toEqual({});
  });
  it("return empty result", () => {
    expect(toMediaQueries({}, theme)).toEqual({});
  });

  it("return flat result for 'xs'", () => {
    expect(
      toMediaQueries(
        {
          marginLeft: {
            xs: 200,
          },
        },
        theme
      )
    ).toEqual({
      marginLeft: 200,
    });
  });

  it("return media query up for the rest breakpoints", () => {
    expect(
      toMediaQueries(
        {
          marginLeft: {
            sm: 200,
          },
        },
        theme
      )
    ).toEqual({
      "@media (min-width:600px)": {
        marginLeft: 200,
      },
    });
  });

  it("return media query up for the rest breakpoints", () => {
    expect(
      toMediaQueries(
        {
          marginLeft: {
            sm: 200,
          },
        },
        theme
      )
    ).toEqual({
      "@media (min-width:600px)": {
        marginLeft: 200,
      },
    });
  });

  it("combination of multiple css properties", () => {
    expect(
      toMediaQueries(
        {
          marginLeft: {
            xs: "64px",
            md: 200,
          },
          marginRight: {
            sm: "40px",
            md: 256,
            xl: 296,
          },
        },
        theme
      )
    ).toEqual({
      marginLeft: "64px",
      "@media (min-width:600px)": {
        marginRight: "40px",
      },
      "@media (min-width:960px)": {
        marginLeft: 200,
        marginRight: 256,
      },
      "@media (min-width:1920px)": {
        marginRight: 296,
      },
    });
  });
});
