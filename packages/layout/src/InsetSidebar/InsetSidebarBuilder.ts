import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { SxProps } from "@material-ui/system";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { subtractCalc } from "../utils/calc";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { ResponsiveBuilder } from "../shared/ResponsiveBuilder";
import { flattenResponsive } from "../utils/flattenResponsive";
import { toValidCssValue } from "../utils/toValidCssValue";

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

export type InsetSetupParams = {
  config: Responsive<InsetSidebarConfig>;
  hidden?: Breakpoint[] | boolean;
};

export class InsetSidebarBuilder extends ResponsiveBuilder<InsetSidebarConfig> {
  anchor?: DrawerAnchor;
  effectedBy: { header?: HeaderBuilder } = {};

  constructor(params: InsetSetupParams) {
    super(params);
  }

  getSxBody() {
    const anchor = this.anchor;
    const height: Responsive<number | string> = {};
    const { header } = this.effectedBy;
    if (header) {
      const { height: responsiveHeight } = header.getSxHeight();
      const breakpoints = this.mergeBreakpoints(responsiveHeight ?? []);
      for (const bp of breakpoints) {
        const insetConfig = pickNearestBreakpoint(this.config, bp);
        if (insetConfig?.position === "absolute") {
          const headerHeight = pickNearestBreakpoint(responsiveHeight, bp);
          height[bp] =
            headerHeight === 0 || headerHeight === "0px"
              ? "100vh"
              : subtractCalc("100vh", headerHeight);
        }
        if (insetConfig?.position === "fixed") height[bp] = "100%";
        if (insetConfig?.position === "sticky") height[bp] = "initial";
      }
    }
    return {
      height: flattenResponsive(height, true),
      width: flattenResponsive(
        this.generateSx((config) =>
          config.position === "fixed" ? "initial" : "100%"
        ),
        true
      ),
      position: flattenResponsive(
        this.generateSx((config) => config.position),
        true
      ),
      top: flattenResponsive(
        this.generateSx((config) => config.top ?? 0),
        true
      ),
      ...(anchor === "left" && {
        marginLeft: flattenResponsive(
          this.generateSx((config, bp) =>
            // TODO make it concise
            config.position === "fixed"
              ? "-9999px"
              : bp === "xs"
              ? undefined
              : "initial"
          ),
          true
        ),
        paddingLeft: flattenResponsive(
          this.generateSx((config, bp) =>
            // TODO make it concise
            config.position === "fixed"
              ? "9999px"
              : bp === "xs"
              ? undefined
              : "initial"
          ),
          true
        ),
      }),
      ...(anchor === "right" && {
        marginRight: flattenResponsive(
          this.generateSx((config, bp) =>
            // TODO make it concise
            config.position === "fixed"
              ? "-9999px"
              : bp === "xs"
              ? undefined
              : "initial"
          ),
          true
        ),
        paddingRight: flattenResponsive(
          this.generateSx((config, bp) =>
            // TODO make it concise
            config.position === "fixed"
              ? "9999px"
              : bp === "xs"
              ? undefined
              : "initial"
          ),
          true
        ),
      }),
    };
  }

  getSxRoot() {
    return {
      display: flattenResponsive(this.getSxDisplay("block")),
      width: flattenResponsive(
        this.generateSx((config) => toValidCssValue(config.width)),
        true
      ),
    };
  }
}
