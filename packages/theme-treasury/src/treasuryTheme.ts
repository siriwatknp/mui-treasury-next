import {
  createMuiTheme,
  getContrastRatio,
  ThemeOptions,
} from "@material-ui/core/styles";

import {
  TreasuryColors,
  TreasuryThemeOptions,
  Swatches,
  TreasuryTheme,
  ExtendedThemeOutput,
} from "./types";
import treasuryColors from "./treasuryColors";

const getMainColor = (
  colors: TreasuryThemeOptions["colors"] = treasuryColors,
  key: keyof typeof treasuryColors
) => (colors[key] ?? treasuryColors[key])["500"];

export const getColor = (
  colors: Partial<TreasuryColors> | undefined,
  palette: keyof TreasuryColors | undefined,
  swatch: Swatches
) => (colors && palette ? colors?.[palette]?.[swatch] ?? "" : "");

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.54)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)",
    // Text hints.
    hint: "rgba(0, 0, 0, 0.38)",
  },
};

export const dark = {
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
};

export const createTreasuryTheme = (
  options?: TreasuryThemeOptions,
  ...args: object[]
) => {
  const { colors = treasuryColors } = options || {};
  const mergedColors = {
    ...treasuryColors,
    ...colors,
  };
  const placeholderColor =
    options?.palette?.type === "dark" ? dark.text.primary : light.text.primary;
  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background: string) {
    const contrastThreshold =
      options && options.palette ? options.palette.contrastThreshold ?? 3 : 3;
    return getContrastRatio(background, dark.text.primary) >= contrastThreshold
      ? dark.text.primary
      : light.text.primary;
  }
  const input: ExtendedThemeOutput & ThemeOptions = {
    ...options,
    treasury: {
      colors: mergedColors,
      getColor: (palette, swatch) =>
        getColor(mergedColors, palette, swatch) || placeholderColor,
      getContrastColor: (palette, swatch) =>
        getContrastText(
          getColor(mergedColors, palette, swatch) || placeholderColor
        ),
    },
    palette: {
      ...options?.palette,
      primary: {
        main: getMainColor(colors, "primary"),
      },
      secondary: {
        main: getMainColor(colors, "secondary"),
      },
      success: {
        main: getMainColor(colors, "success"),
      },
      warning: {
        main: getMainColor(colors, "warning"),
      },
      error: {
        main: getMainColor(colors, "error"),
      },
      info: {
        main: getMainColor(colors, "info"),
      },
      grey: colors.grey,
    },
  };
  return createMuiTheme(input, ...args) as TreasuryTheme;
};
