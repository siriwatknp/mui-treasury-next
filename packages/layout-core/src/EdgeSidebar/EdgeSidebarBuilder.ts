import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import {
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
  DEFAULT_THEME,
} from "../utils/constant";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";

export type PersistentBehavior = "fit" | "flexible" | "none";

export type DrawerAnchor = "left" | "right";
export type DrawerVariant = "temporary" | "persistent" | "permanent";

export type EdgeSidebarConfig =
  | PersistentSidebarConfig
  | PermanentSidebarConfig
  | TemporarySidebarConfig;

export interface CollapsibleSidebarConfig {
  collapsible?: boolean;
  collapsedWidth?: number | string;
  autoExpanded?: boolean;
  width: number | string;
  headerMagnetEnabled?: boolean;
}

export interface PermanentSidebarConfig extends CollapsibleSidebarConfig {
  variant: "permanent";
}

export interface PersistentSidebarConfig extends CollapsibleSidebarConfig {
  persistentBehavior: PersistentBehavior | Record<string, PersistentBehavior>;
  variant: "persistent";
}

export interface TemporarySidebarConfig {
  width: number | string;
  variant: "temporary";
}

export type EdgeSidebarSetupParams = {
  config: Responsive<EdgeSidebarConfig>;
  hidden?: boolean | Breakpoint[];
  autoCollapse?: Breakpoint;
};

export type SidebarState = {
  collapsed?: boolean;
  open?: boolean;
};
export class EdgeSidebarBuilder {
  _id: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID | "" = "";
  readonly _config: EdgeSidebarSetupParams["config"];
  readonly _hidden: EdgeSidebarSetupParams["hidden"];
  readonly _autoCollapse: EdgeSidebarSetupParams["autoCollapse"];
  _state?: SidebarState;
  _effectedBy: {
    header?: HeaderBuilder;
  } = {};

  constructor(params: EdgeSidebarSetupParams) {
    const { config, hidden = false, autoCollapse } = params;
    this._config = config;
    this._hidden = hidden;
    this._autoCollapse = autoCollapse;
  }

  setState(state: SidebarState) {
    this._state = state;
  }

  isHidden(breakpoint: Breakpoint) {
    if (!this._hidden) return false;
    if (typeof this._hidden === "boolean" && this._hidden) return true;
    return this._hidden.includes(breakpoint);
  }

  getOccupiedSpace() {
    const result: Responsive<number | string> = {};

    let prevHidden = false; // keep track of hidden in previous breakpoint
    for (const bp of BREAKPOINT_KEYS) {
      let breakpointConfig = this._config[bp];
      if (this.isHidden(bp)) {
        result[bp] = 0;
        prevHidden = true;
      } else {
        // if current breakpoint is not hidden but previous is hidden,
        // need to use config from nearest breakpoint
        if (prevHidden || breakpointConfig) {
          if (prevHidden) {
            prevHidden = false;
            breakpointConfig = pickNearestBreakpoint(this._config, bp);
          }
          if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
            if (bp !== "xs") {
              result[bp] = 0;
            }
            // do nothing for xs because temporary variant will be modal
          } else {
            if (process.env.NODE_ENV === "development") {
              if (!breakpointConfig?.collapsible && this._state?.collapsed) {
                console.warn(
                  `[Dev] at: ${bp}. the state of the sidebar is collapsed but the config is not set to { collapsible: true }. Check your config.`
                );
              }
            }
          }
          if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
            if (this._state?.open) {
              if (breakpointConfig.persistentBehavior !== "none") {
                result[bp] =
                  breakpointConfig.collapsible && this._state.collapsed
                    ? breakpointConfig.collapsedWidth
                    : breakpointConfig.width;
              }
            }
          }
          if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
            result[bp] =
              breakpointConfig.collapsible && this._state?.collapsed
                ? breakpointConfig.collapsedWidth
                : breakpointConfig.width;
          }
        }
      }
    }
    return result;
  }

  getZIndex(theme = DEFAULT_THEME) {
    const result: Responsive<number> = {};
    if (!this._effectedBy.header) return {};
    const breakpoints = combineBreakpoints(
      this._effectedBy.header._config,
      this._config
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      if (this._id) {
        const isClipped = this._effectedBy.header.isClipped(this._id, bp);
        const isAboveSomeEdgeSidebar = this._effectedBy.header.isAboveSomeEdgeSidebar(
          bp
        );
        result[bp] =
          theme.zIndex.drawer + (isAboveSomeEdgeSidebar && !isClipped ? 20 : 0);
      } else {
        console.warn(
          "Cannot find EdgeSidebar id. This might be an internal bug, please open an issue in github."
        );
      }
    }
    return result;
  }

  getWidth() {
    const result: Responsive<number | string> = {};
    for (const key in this._config) {
      const bp = key as Breakpoint;
      const breakpointConfig = this._config[bp];
      if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
        result[bp] = this._config[bp]?.width;
      } else {
        result[bp] =
          breakpointConfig?.collapsible && this._state?.collapsed
            ? breakpointConfig?.collapsedWidth
            : breakpointConfig?.width;
      }
    }
    return result;
  }

  getDrawerVariant() {
    const result: Responsive<DrawerVariant> = {};
    for (const key in this._config) {
      const bp = key as Breakpoint;
      const breakpointConfig = this._config[bp];
      result[bp] = breakpointConfig?.variant;
    }
    return result;
  }

  getSxProps(theme = DEFAULT_THEME) {
    return {
      width: this.getWidth(),
      zIndex: this.getZIndex(theme),
    };
  }

  static isPersistentConfig = (
    config?: EdgeSidebarConfig
  ): config is PersistentSidebarConfig => {
    return config?.variant === "persistent";
  };

  static isPermanentConfig = (
    config?: EdgeSidebarConfig
  ): config is PermanentSidebarConfig => {
    return config?.variant === "permanent";
  };

  static isTemporaryConfig = (
    config?: EdgeSidebarConfig
  ): config is TemporarySidebarConfig => {
    return config?.variant === "temporary";
  };
}
