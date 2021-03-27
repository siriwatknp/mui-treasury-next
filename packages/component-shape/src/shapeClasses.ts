import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getShapeUtilityClass(slot: string) {
  return generateUtilityClass("MuiShape", slot);
}

export const shapeClasses = generateUtilityClasses("MuiShape", [
  "root",
  "circular",
  "text",
  "solid",
  "soft",
  "outlined",
  "size",
]);
