import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import {
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
  DEFAULT_THEME,
} from "../utils/constant";
import { generateSx } from "../utils/generateSx";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";
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
  uncollapsedOnHover?: boolean;
  /**
   * @deprecated autoExpanded will be remove in the next major version, use 'uncollapsedOnHover' instead
   */
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
    return generateSxWithHidden(
      {
        config: this._config,
        hidden: this._hidden,
      },
      (breakpointConfig, bp) => {
        if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
          if (bp !== "xs") {
            return 0;
          }
          // do nothing for xs because temporary variant will be modal
        }
        if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
          if (this._state?.open) {
            if (breakpointConfig.persistentBehavior !== "none") {
              return this.getFinalWidth(breakpointConfig);
            }
          }
        }
        if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
          return this.getFinalWidth(breakpointConfig);
        }
      }
    );
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
    return generateSx(this._config, (breakpointConfig, bp) =>
      EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)
        ? this._config[bp]?.width
        : this.getFinalWidth(breakpointConfig)
    );
  }

  getDrawerVariant() {
    return generateSx(this._config, "variant") as Responsive<DrawerVariant>;
  }

  getSxProps(theme = DEFAULT_THEME) {
    return {
      width: this.getWidth(),
      zIndex: this.getZIndex(theme),
    };
  }

  getFinalWidth = (config: CollapsibleSidebarConfig | undefined) => {
    return config?.collapsible && this._state?.collapsed
      ? config.collapsedWidth ?? config.width
      : config?.width;
  };

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
