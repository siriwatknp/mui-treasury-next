import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getShapeUtilityClass(slot: string) {
  return generateUtilityClass("TyShape", slot);
}

export const shapeClasses = generateUtilityClasses("TyShape", [
  "root",
  "circular",
  "text",
  "solid",
  "soft",
  "outlined",
  "size",
]);
