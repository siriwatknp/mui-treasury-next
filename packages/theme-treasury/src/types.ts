import { Overrides } from "@material-ui/core/styles/overrides";
import { ComponentsProps } from "@material-ui/core/styles/props";
import { ThemeOptions, Theme } from "@material-ui/core/styles";
import treasuryColors from "./treasuryColors";

export type ExtendThemeOverrides<T> = Overrides & T;
export type ExtendThemeProps<T> = ComponentsProps & T;

export type ExtendThemeOptions<
  ComponentThemeOverrides,
  ComponentThemeProps
> = Omit<ThemeOptions, "overrides" | "props"> & {
  overrides?: ExtendThemeOverrides<ComponentThemeOverrides>;
  props?: ExtendThemeProps<ComponentThemeProps>;
};

export type TreasuryColors = typeof treasuryColors;

export type Palette = keyof TreasuryColors;

export type Swatches =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type ExtendedThemeInput = {
  colors?: Partial<TreasuryColors>;
};

export type ExtendedThemeOutput = {
  treasury: ExtendedThemeInput & {
    getColor: (
      palette: keyof TreasuryColors | undefined,
      swatch: Swatches
    ) => string;
    getContrastColor: (
      palette: keyof TreasuryColors | undefined,
      swatch: Swatches
    ) => string;
  };
};

export type TreasuryTheme = Theme & ExtendedThemeOutput;

export type TreasuryThemeOptions = ThemeOptions & ExtendedThemeInput;
