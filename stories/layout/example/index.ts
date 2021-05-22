import React from "react";

export default {
  RTL: React.lazy(() => import("./RTL")),
  InsetSidebarPosition: React.lazy(() => import("./InsetSidebarPosition")),
  ControlEdgeSidebar: React.lazy(() => import("./ControlEdgeSidebar")),
  RightEdgeSidebar: React.lazy(() => import("./RightEdgeSidebar")),
};
