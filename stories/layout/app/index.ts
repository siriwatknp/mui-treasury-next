import React from "react";

export default {
  ShoppingCart: React.lazy(() => import("./ShoppingCart")),
  ReactJS: React.lazy(() => import("./ReactJS")),
  Messenger: React.lazy(() => import("./Messenger")),
  Gmail: React.lazy(() => import("./Gmail")),
};
