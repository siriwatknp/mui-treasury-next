import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { combineBreakpoints } from "../utils/combineBreakpoints";
import {
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
  DEFAULT_THEME,
  HEADER_ID,
  CONTENT_ID,
  FOOTER_ID,
} from "../utils/constant";
import { generateSx } from "../utils/generateSx";
import { generateSxWithHidden } from "../utils/generateSxWithHidden";
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
  persistentBehavior:
    | PersistentBehavior
    | Partial<Record<HEADER_ID | CONTENT_ID | FOOTER_ID, PersistentBehavior>>;
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
  id?: LEFT_EDGE_SIDEBAR_ID | RIGHT_EDGE_SIDEBAR_ID;
  readonly config: EdgeSidebarSetupParams["config"];
  readonly hidden: EdgeSidebarSetupParams["hidden"];
  readonly autoCollapse: EdgeSidebarSetupParams["autoCollapse"];
  state?: SidebarState;
  effectedBy: {
    header?: HeaderBuilder;
  } = {};

  constructor(params: EdgeSidebarSetupParams) {
    const { config, hidden = false, autoCollapse } = params;
    this.config = config;
    this.hidden = hidden;
    this.autoCollapse = autoCollapse;
  }

  setState(state: SidebarState) {
    this.state = state;
  }

  isHidden(breakpoint: Breakpoint) {
    if (!this.hidden) return false;
    if (typeof this.hidden === "boolean" && this.hidden) return true;
    return this.hidden.includes(breakpoint);
  }

  isFlexiblePersistent(
    breakpoint: Breakpoint,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) {
    const config = pickNearestBreakpoint(this.config, breakpoint);
    return EdgeSidebarBuilder.isFlexiblePersistentConfig(config, id);
  }

  getOccupiedSpace(id?: HEADER_ID | CONTENT_ID | FOOTER_ID) {
    return generateSxWithHidden(this, (breakpointConfig, bp) => {
      if (EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)) {
        if (bp !== "xs") {
          return 0;
        }
        // do nothing for xs because temporary variant will be modal
      }
      if (EdgeSidebarBuilder.isPersistentConfig(breakpointConfig)) {
        if (
          this.state?.open &&
          !EdgeSidebarBuilder.isNonePersistentConfig(breakpointConfig, id)
        ) {
          return this.getFinalWidth(breakpointConfig);
        } else {
          return 0;
        }
      }
      if (EdgeSidebarBuilder.isPermanentConfig(breakpointConfig)) {
        return this.getFinalWidth(breakpointConfig);
      }
    });
  }

  getZIndex(theme = DEFAULT_THEME) {
    const result: Responsive<number> = {};
    if (!this.effectedBy.header) return {};
    const breakpoints = combineBreakpoints(
      this.effectedBy.header.config,
      this.config
    );
    for (const key of breakpoints) {
      const bp = key as Breakpoint;
      if (this.id) {
        const isClipped = this.effectedBy.header.isClipped(this.id, bp);
        const isAboveSomeEdgeSidebar = this.effectedBy.header.isAboveSomeEdgeSidebar(
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
    return generateSx(this.config, (breakpointConfig, bp) =>
      EdgeSidebarBuilder.isTemporaryConfig(breakpointConfig)
        ? this.config[bp]?.width
        : this.getFinalWidth(breakpointConfig)
    );
  }

  getDrawerVariant() {
    return generateSx(this.config, "variant") as Responsive<DrawerVariant>;
  }

  getSxProps(theme = DEFAULT_THEME) {
    return {
      width: this.getWidth(),
      zIndex: this.getZIndex(theme),
    };
  }

  getFinalWidth = (config: CollapsibleSidebarConfig | undefined) => {
    return config?.collapsible && this.state?.collapsed
      ? config.collapsedWidth ?? config.width
      : config?.width;
  };

  static isPersistentConfig = (
    config?: EdgeSidebarConfig
  ): config is PersistentSidebarConfig => {
    return config?.variant === "persistent";
  };

  static isNonePersistentConfig = (
    config?: EdgeSidebarConfig,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) => {
    return (
      !!config &&
      !!EdgeSidebarBuilder.isPersistentConfig(config) &&
      ((typeof config.persistentBehavior === "string" &&
        config.persistentBehavior === "none") ||
        (typeof config.persistentBehavior === "object" &&
          !!id &&
          config.persistentBehavior[id] === "none"))
    );
  };

  static isFlexiblePersistentConfig = (
    config?: EdgeSidebarConfig,
    id?: HEADER_ID | CONTENT_ID | FOOTER_ID
  ) => {
    return (
      !!config &&
      !!EdgeSidebarBuilder.isPersistentConfig(config) &&
      ((typeof config.persistentBehavior === "string" &&
        config.persistentBehavior === "flexible") ||
        (typeof config.persistentBehavior === "object" &&
          !!id &&
          config.persistentBehavior[id] === "flexible"))
    );
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
