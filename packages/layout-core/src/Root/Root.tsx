import React, { PropsWithChildren } from "react";
import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { InsetSidebarBuilder } from "../InsetSidebar/InsetSidebarBuilder";
import {
  EDGE_SIDEBAR_ID,
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
} from "../utils/constant";

type SidebarState = {
  collapsed?: boolean;
  open?: boolean;
};

type State = {
  leftEdgeSidebar?: SidebarState;
  rightEdgeSidebar?: SidebarState;
};

type Scheme = {
  header?: HeaderBuilder;
  topHeader?: HeaderBuilder;
  subheader?: HeaderBuilder;
  leftEdgeSidebar?: EdgeSidebarBuilder;
  rightEdgeSidebar?: EdgeSidebarBuilder;
  leftInsetSidebar?: InsetSidebarBuilder;
  rightInsetSidebar?: InsetSidebarBuilder;
};

export type ContextValue = {
  state: State;
  scheme: Scheme;
  setOpen: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
  toggleLeftSidebarOpen: () => void;
  toggleLeftSidebarCollapsed: () => void;
  setCollapsed: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
  toggleRightSidebarOpen: () => void;
  toggleRightSidebarCollapsed: () => void;
};

const LayoutContext = React.createContext<ContextValue | undefined>(undefined);
LayoutContext.displayName = "LayoutContext";

export const useLayoutCtx = () => {
  const ctx = React.useContext(LayoutContext);
  if (!ctx) {
    throw new Error("useLayoutCtx must be rendered under LayoutProvider");
  }
  return ctx;
};

export const LayoutConsumer = LayoutContext.Consumer;

export type RootProps = {
  initialState?: State;
  scheme: ContextValue["scheme"];
};

const INITIAL_EDGE_SIDEBAR_STATE = { open: false, collapsed: false };

const setUpEdgeSidebar = (scheme: Scheme) => {
  const autoGenInitialState: State = {
    leftEdgeSidebar: {},
    rightEdgeSidebar: {},
  };
  if (scheme.leftEdgeSidebar) {
    scheme.leftEdgeSidebar.id = LEFT_EDGE_SIDEBAR_ID;
    autoGenInitialState.leftEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
  }
  if (scheme.rightEdgeSidebar) {
    scheme.rightEdgeSidebar.id = RIGHT_EDGE_SIDEBAR_ID;
    autoGenInitialState.rightEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
  }
  return autoGenInitialState;
};

const injectStateToEdgeSidebar = (scheme: Scheme, state: State) => {
  if (scheme.leftEdgeSidebar) {
    scheme.leftEdgeSidebar.setState(state.leftEdgeSidebar ?? {});
  }
  if (scheme.rightEdgeSidebar) {
    scheme.rightEdgeSidebar.setState(state.rightEdgeSidebar ?? {});
  }
};

export const Root = ({
  initialState: controlledInitialState,
  scheme,
  children,
}: React.PropsWithChildren<RootProps>) => {
  if (!scheme) {
    throw new Error(
      "Missing scheme! fixed by passing `scheme` to <Root scheme={scheme} />"
    );
  }
  const autoGenInitialState = setUpEdgeSidebar(scheme);
  const [leftState, setLeftState] = React.useState({
    ...autoGenInitialState.leftEdgeSidebar,
    ...controlledInitialState?.leftEdgeSidebar,
  });
  const [rightState, setRightState] = React.useState({
    ...autoGenInitialState.rightEdgeSidebar,
    ...controlledInitialState?.rightEdgeSidebar,
  });
  const setOpen = (id: EDGE_SIDEBAR_ID, value: boolean) => {
    function setter(state: SidebarState) {
      return state.open === value ? state : { ...state, open: value };
    }
    if (id === LEFT_EDGE_SIDEBAR_ID) {
      setLeftState(setter);
    }
    if (id === RIGHT_EDGE_SIDEBAR_ID) {
      setRightState(setter);
    }
  };
  const setCollapsed = (id: EDGE_SIDEBAR_ID, value: boolean) => {
    function setter(state: SidebarState) {
      return state.collapsed === value ? state : { ...state, collapsed: value };
    }
    if (id === LEFT_EDGE_SIDEBAR_ID) {
      setLeftState(setter);
    }
    if (id === RIGHT_EDGE_SIDEBAR_ID) {
      setRightState(setter);
    }
  };
  const toggleLeftSidebarOpen = () =>
    setLeftState((state) => ({ ...state, open: !state.open }));
  const toggleLeftSidebarCollapsed = () =>
    setLeftState((state) => ({ ...state, collapsed: !state.collapsed }));
  const toggleRightSidebarOpen = () =>
    setRightState((state) => ({ ...state, open: !state.open }));
  const toggleRightSidebarCollapsed = () =>
    setRightState((state) => ({ ...state, collapsed: !state.collapsed }));

  injectStateToEdgeSidebar(scheme, {
    leftEdgeSidebar: leftState,
    rightEdgeSidebar: rightState,
  });

  // assign Effect
  if (scheme.header) {
    scheme.header.effectedBy = {
      leftEdgeSidebar: scheme.leftEdgeSidebar,
      rightEdgeSidebar: scheme.rightEdgeSidebar,
    };
  }
  if (scheme.topHeader) {
    scheme.topHeader.effectedBy = {
      leftEdgeSidebar: scheme.leftEdgeSidebar,
      rightEdgeSidebar: scheme.rightEdgeSidebar,
    };
  }
  if (scheme.subheader) {
    scheme.subheader.effectedBy = {
      leftEdgeSidebar: scheme.leftEdgeSidebar,
      rightEdgeSidebar: scheme.rightEdgeSidebar,
    };
  }
  if (scheme.leftInsetSidebar) {
    scheme.leftInsetSidebar.anchor = "left";
    scheme.leftInsetSidebar.effectedBy = {
      header: scheme.header,
    };
  }
  if (scheme.rightInsetSidebar) {
    scheme.rightInsetSidebar.anchor = "right";
    scheme.rightInsetSidebar.effectedBy = {
      header: scheme.header,
    };
  }
  return (
    <LayoutContext.Provider
      value={{
        state: { leftEdgeSidebar: leftState, rightEdgeSidebar: rightState },
        scheme,
        setOpen,
        setCollapsed,
        toggleLeftSidebarOpen,
        toggleLeftSidebarCollapsed,
        toggleRightSidebarOpen,
        toggleRightSidebarCollapsed,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
