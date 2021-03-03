import { createTreasuryTheme, getColor } from "./treasuryTheme";
import { treasuryPalette } from "./treasuryPalette";

describe("theme-treasury", () => {
  describe("createTreasuryTheme", () => {
    it("contains default colors if no args provided", () => {
      const theme = createTreasuryTheme();
      expect(theme).toMatchObject({
        treasury: {
          palette: treasuryPalette,
        },
      });
      expect(theme.palette.primary.main).toEqual(
        treasuryPalette.primary["500"]
      );
      expect(theme.palette.secondary.main).toEqual(
        treasuryPalette.secondary["500"]
      );
      expect(theme.palette.success.main).toEqual(
        treasuryPalette.success["500"]
      );
      expect(theme.palette.warning.main).toEqual(
        treasuryPalette.warning["500"]
      );
      expect(theme.palette.error.main).toEqual(treasuryPalette.error["500"]);
      expect(theme.palette.info.main).toEqual(treasuryPalette.info["500"]);
      expect(theme.palette.grey).toMatchObject(treasuryPalette.grey);
    });

    it("provide custom colors", () => {
      const primary = {
        50: "#fff",
        100: "#fff",
        200: "#fff",
        300: "#fff",
        400: "#fff",
        500: "#fff",
        600: "#fff",
        700: "#fff",
        800: "#fff",
        900: "#fff",
      };
      const theme = createTreasuryTheme({
        palette: {
          primary,
        },
      });
      expect(theme).toMatchObject({
        treasury: {
          palette: {
            ...treasuryPalette,
            primary,
          },
        },
      });
      expect(theme.palette.primary.main).toEqual(primary["500"]);
    });

    it("can getColor from theme", () => {
      const theme = createTreasuryTheme();
      expect(theme.treasury.getColor("primary", "100")).toEqual(
        treasuryPalette.primary["100"]
      );
    });

    it("can getContrastColor from theme", () => {
      const theme = createTreasuryTheme();
      expect(theme.treasury.getContrastColor(undefined, "500")).toEqual("#fff");
      expect(theme.treasury.getContrastColor("primary", "100")).toEqual(
        "rgba(0, 0, 0, 0.87)"
      );
    });
  });

  describe("getColor", () => {
    it("return empty string if colors | palette is undefined", () => {
      expect(getColor(undefined, undefined, "500")).toEqual("");
      expect(getColor(treasuryPalette, undefined, "500")).toEqual("");
      expect(getColor(undefined, "primary", "500")).toEqual("");
    });

    it("return the color", () => {
      expect(getColor(treasuryPalette, "primary", "500")).toEqual(
        treasuryPalette.primary["500"]
      );
    });
  });
});
