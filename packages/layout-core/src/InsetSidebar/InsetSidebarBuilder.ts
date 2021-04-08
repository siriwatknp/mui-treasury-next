import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { subtractCalc } from "../utils/calc";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";

export type DrawerAnchor = "left" | "right";

export type FixedInsetSidebarConfig = {
  position: "fixed";
  width: number | string;
  top?: number | string;
  headerMagnetEnabled?: boolean;
};

export type AbsoluteInsetSidebarConfig = {
  position: "absolute";
  width: number | string;
  top?: number | string;
};

export type StickyInsetSidebarConfig = {
  position: "sticky";
  width: number | string;
  top?: number | string;
};

export type InsetSidebarConfig =
  | FixedInsetSidebarConfig
  | AbsoluteInsetSidebarConfig
  | StickyInsetSidebarConfig;

type InsetSetupParams = {
  config: InsetSidebarConfig;
  hidden?: Breakpoint[] | boolean;
};

export class InsetSidebarBuilder {
  readonly _config: InsetSetupParams["config"];
  readonly _hidden: InsetSetupParams["hidden"];
  _anchor?: DrawerAnchor;
  _effectedBy: { header?: HeaderBuilder } = {};

  constructor(params: InsetSetupParams) {
    this._config = params.config;
    this._hidden = params.hidden;
  }

  getSxBody() {
    const { position, top = 0 } = this._config;
    const anchor = this._anchor;
    let bodySx = {};
    if (position === "absolute") {
      bodySx = {
        position: "absolute" as const,
        top: top,
        width: "100%",
        padding: "unset",
        margin: "unset",
        overflow: "auto",
        height: this._effectedBy.header
          ? generateSxWithHidden(
              {
                config: this._effectedBy.header._config,
                hidden: this._effectedBy.header._hidden,
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
        ...(anchor === "left" && { marginLeft: -999, paddingLeft: 999 }),
        ...(anchor === "right" && {
          marginRight: -999,
          paddingRight: 999,
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
    if (this._hidden) {
      if (typeof this._hidden === "boolean") {
        hiddenConfig = { display: { xs: "none" } };
      }
      if (Array.isArray(this._hidden)) {
        hiddenConfig = {
          display: generateSxWithHidden(
            { config: {}, hidden: this._hidden },
            () => "block",
            () => "none"
          ),
        };
      }
    }
    return { ...hiddenConfig, width: this._config.width };
  }
}
