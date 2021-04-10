import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { subtractCalc } from "../utils/calc";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";
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
    let bodySx = {};
    if (position === "absolute") {
      bodySx = {
        position: "absolute" as const,
        top: top,
        width: "100%",
        padding: "unset",
        margin: "unset",
        overflow: "auto",
        height: this.effectedBy.header
          ? generateSxWithHidden(
              {
                config: this.effectedBy.header.config,
                hidden: this.effectedBy.header.hidden,
              },
              (config) => subtractCalc("100vh", config.height ?? 0),
              () => "100vh"
            )
          : "100vh",
      };
    }
    if (position === "fixed") {
      bodySx = {
        position: "fixed" as const,
        top: top,
        width: "auto",
        height: "100%",
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
        margin: "unset",
        padding: "unset",
        height: "auto",
      };
    }
    return bodySx;
  }

  getSxRoot() {
    let hiddenConfig = {};
    if (this.hidden) {
      if (typeof this.hidden === "boolean") {
        hiddenConfig = { display: { xs: "none" } };
      }
      if (Array.isArray(this.hidden)) {
        hiddenConfig = {
          display: generateSxWithHidden(
            { config: {}, hidden: this.hidden },
            () => "block",
            () => "none"
          ),
        };
      }
    }
    return { ...hiddenConfig, width: this.config.width };
  }
}
