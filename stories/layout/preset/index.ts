import React from "react";

export default {
  Standard: React.lazy(() => import("./Standard")),
  Fixed: React.lazy(() => import("./Fixed")),
  Cozy: React.lazy(() => import("./Cozy")),
  ContentBased: React.lazy(() => import("./ContentBased")),
};
