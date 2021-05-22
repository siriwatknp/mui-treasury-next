import React from "react";

export default {
  MultipleHeaders: React.lazy(() => import("./MultipleHeaders")),
  RTL: React.lazy(() => import("./RTL")),
  InsetSidebarPosition: React.lazy(() => import("./InsetSidebarPosition")),
  ControlEdgeSidebar: React.lazy(() => import("./ControlEdgeSidebar")),
  RightEdgeSidebar: React.lazy(() => import("./RightEdgeSidebar")),
};
