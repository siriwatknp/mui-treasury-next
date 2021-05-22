import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { SxProps } from "@material-ui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { subtractCalc } from "../utils/calc";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";

export type DrawerAnchor = "left" | "right";

export type FixedInsetSidebarConfig = {
  position: "fixed";
  width: number | string | Responsive<string | number>;
  top?: number | string | Responsive<string | number>;
  headerMagnetEnabled?: boolean;
};

export type AbsoluteInsetSidebarConfig = {
  position: "absolute";
  width: number | string | Responsive<string | number>;
  top?: number | string | Responsive<string | number>;
};

export type StickyInsetSidebarConfig = {
  position: "sticky";
  width: number | string | Responsive<string | number>;
  top?: number | string | Responsive<string | number>;
};

export type InsetSidebarConfig =
  | FixedInsetSidebarConfig
  | AbsoluteInsetSidebarConfig
  | StickyInsetSidebarConfig;

export type InsetSetupParams = {
  hidden?: Breakpoint[] | boolean;
} & InsetSidebarConfig;

export class InsetSidebarBuilder {
  readonly config: InsetSidebarConfig;
  readonly hidden: InsetSetupParams["hidden"];
  anchor?: DrawerAnchor;
  effectedBy: { header?: HeaderBuilder } = {};

  constructor({ hidden, ...props }: InsetSetupParams) {
    this.config = props;
    this.hidden = hidden;
  }

  getSxBody() {
    const { position, top = 0 } = this.config;
    const anchor = this.anchor;
    let bodySx: SxProps = {};
    if (position === "absolute") {
      bodySx = {
        position: "absolute" as const,
        top: top,
        width: "100%",
        overflow: "auto",
        height: this.effectedBy.header
          ? this.effectedBy.header.generateSxWithHidden({
              assignValue: (config) =>
                subtractCalc("100vh", config.height ?? 0),
              hiddenValue: "100vh",
            })
          : "100vh",
      };
    }
    if (position === "fixed") {
      bodySx = {
        position: "fixed" as const,
        top: top,
        width: "auto",
        height: "100%",
        overflowY: "auto",
        ...(anchor === "left" && {
          marginLeft: "-9999px",
          paddingLeft: "9999px",
          borderRight: "1px solid",
          borderColor: "divider",
        }),
        ...(anchor === "right" && {
          marginRight: "-9999px",
          paddingRight: "9999px",
          borderLeft: "1px solid",
          borderColor: "divider",
        }),
      };
    }
    if (position === "sticky") {
      bodySx = {
        position: "sticky",
        top: top,
        height: "auto",
      };
    }
    bodySx = {
      ...bodySx,
      display: "flex",
      flexDirection: "column",
    };
    return bodySx;
  }

  getSxRoot() {
    let hiddenConfig: Responsive<string> = {};
    if (this.hidden) {
      if (typeof this.hidden === "boolean") {
        hiddenConfig = { xs: "none" };
      } else {
        BREAKPOINT_KEYS.forEach((bp) => {
          const lastResultVal = pickNearestBreakpoint(hiddenConfig, bp);
          const isWithinHidden =
            Array.isArray(this.hidden) && this.hidden.includes(bp);
          if (isWithinHidden && lastResultVal !== "none") {
            hiddenConfig[bp] = "none";
          }

          if (!isWithinHidden && lastResultVal === "none") {
            hiddenConfig[bp] = "block";
          }
        });
      }
    }
    return {
      ...(Object.keys(hiddenConfig).length && { display: hiddenConfig }),
      width: this.config.width,
    };
  }
}
