import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";

export class ResponsiveBuilder<T> {
  readonly config: Responsive<T>;
  readonly hidden?: boolean | Breakpoint[];

  constructor(params: {
    config: Responsive<T>;
    hidden?: boolean | Breakpoint[];
  }) {
    this.config = params.config;
    this.hidden = params.hidden;
  }

  isHidden(breakpoint: Breakpoint) {
    if (!this.hidden) return false;
    if (typeof this.hidden === "boolean" && this.hidden) return true;
    return this.hidden.includes(breakpoint);
  }

  getSxDisplay(appearance: string) {
    return generateSxWithHidden(
      this,
      () => appearance,
      () => "none"
    );
  }
}
