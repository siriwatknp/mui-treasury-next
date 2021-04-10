import React, { useContext } from "react";
import cx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import { ModalProps } from "@material-ui/core/Modal";
import { useLayoutCtx } from "../Root/Root";
import { useScreen } from "../hooks/useScreen";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { useSidebarAutoCollapse } from "../hooks/useSidebarAutoCollapse";
import {
  CollapsibleSidebarConfig,
  EdgeSidebarConfig,
} from "./EdgeSidebarBuilder";
import { EDGE_SIDEBAR_EXPAND_DELAY } from "../utils/constant";
import { EdgeOffset } from "./EdgeOffset";

export type EdgeSidebarProps = { anchor: "left" | "right" } & Omit<
  DrawerProps,
  "anchor" | "variant"
>;

const SidebarContext = React.createContext<
  | undefined
  | {
      expanded: boolean;
      setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    }
>(undefined);

export const useSidebarCtx = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebarCtx must be called under <EdgeSidebar />");
  }
  return ctx;
};

const hasAutoExpanded = (
  config?: EdgeSidebarConfig
  // @ts-ignore
): config is CollapsibleSidebarConfig => {
  return (
    !!config &&
    (typeof (config as CollapsibleSidebarConfig).autoExpanded === "boolean" ||
      typeof (config as CollapsibleSidebarConfig).uncollapsedOnHover ===
        "boolean")
  );
};

export const EdgeSidebar = ({
  anchor,
  children,
  ...props
}: EdgeSidebarProps) => {
  if (!anchor) {
    throw new Error('Missing prop "anchor" on EdgeSidebar component');
  }
  const theme = useTheme();
  const screen = useScreen();
  const { scheme, state: layoutState, setOpen } = useLayoutCtx();
  const sidebarId = `${anchor}EdgeSidebar` as const;
  const edgeSidebar = scheme[sidebarId];
  const sidebarState = layoutState[sidebarId];
  const config = pickNearestBreakpoint(edgeSidebar?.config, screen);

  useSidebarAutoCollapse(sidebarId);

  // auto-expanded feature
  const [entered, setEntered] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const isMouseOverSidebar = React.useRef(false);
  const isAutoExpanded =
    hasAutoExpanded(config) &&
    (config.autoExpanded || config.uncollapsedOnHover);

  const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    props.PaperProps?.onMouseEnter?.(event);
    if (sidebarState?.collapsed && isAutoExpanded) {
      isMouseOverSidebar.current = true;
      setTimeout(() => {
        if (isMouseOverSidebar.current) {
          setExpanded(true);
        }
      }, EDGE_SIDEBAR_EXPAND_DELAY);
    }
  };
  const onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    props.PaperProps?.onMouseLeave?.(event);
    isMouseOverSidebar.current = false;
    setExpanded(false);
  };
  const onEntered = (...args: any[]) => {
    // @ts-ignore
    props.SlideProps?.onEntered?.(...args);
    setEntered(true);
  };
  const onExit = (...args: any[]) => {
    // @ts-ignore
    props.SlideProps?.onExit?.(...args);
    setEntered(false);
  };

  React.useEffect(() => {
    if (!sidebarState?.collapsed) {
      setExpanded(false);
    }
  }, [sidebarState?.collapsed]);
  // auto-expanded feature

  if (!screen) return null;
  if (!edgeSidebar || !edgeSidebar.id) return null;

  const responsiveVariant = edgeSidebar.getDrawerVariant();
  const variant = pickNearestBreakpoint(responsiveVariant, screen);
  if (!variant || edgeSidebar.isHidden(screen)) return null;

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <Drawer
        {...props}
        open={layoutState[sidebarId]?.open}
        anchor={anchor}
        variant={variant}
        onClose={(...args: Parameters<NonNullable<ModalProps["onClose"]>>) => {
          props.onClose?.(...args);
          setOpen(sidebarId, false);
        }}
        SlideProps={{
          ...props.SlideProps,
          onEntered,
          onExit,
        }}
        PaperProps={{
          ...props.PaperProps,
          className: cx("EdgeSidebar-paper", props.PaperProps?.className),
          style: {
            ...props.PaperProps?.style,
            ...(expanded && { width: config?.width }),
          },
          onMouseEnter,
          onMouseLeave,
          sx: {
            ...props.PaperProps?.sx,
            ...((entered || variant === "permanent") && {
              transition: theme.transitions.create(["all"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.leavingScreen,
              }),
              transitionProperty: "all !important",
            }),
            ...scheme[sidebarId]?.getSxProps(),
          },
        }}
      >
        {variant && variant !== "temporary" && (
          <EdgeOffset sidebarId={sidebarId} />
        )}
        {children}
      </Drawer>
    </SidebarContext.Provider>
  );
};
