import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
export function getSquareUtilityClass(slot) {
  return generateUtilityClass("JunSquare", slot);
}
export const squareClasses = generateUtilityClasses("JunSquare", [
  "root",
  "none",
  "solid",
  "soft",
  "outlined",
  "round",
  "roundSolid",
  "roundSoft",
  ...Object.keys(treasuryPalette),
]);
