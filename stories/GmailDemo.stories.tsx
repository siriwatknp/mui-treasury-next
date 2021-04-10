import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/icons/Menu";

import AppHeader from "./mockup/gmail/AppHeader";
import AppSidebar from "./mockup/gmail/AppSidebar";
import AppContent from "./mockup/gmail/AppContent";
import AppSubSidebar from "./mockup/gmail/AppSubSidebar";
import CustomTrigger from "./mockup/gmail/CustomTrigger";

import { Root, useLayoutCtx } from "../packages/layout-core/src/Root/Root";
import { HeaderBuilder } from "../packages/layout-core/src/Header/HeaderBuilder";
import { Header } from "../packages/layout-core/src/Header/Header";
import { EdgeSidebarBuilder } from "../packages/layout-core/src/EdgeSidebar/EdgeSidebarBuilder";
import { EdgeSidebar } from "../packages/layout-core/src/EdgeSidebar/EdgeSidebar";
import { Content } from "../packages/layout-core/src/Content/Content";

export default {
  title: "Layout/Demo App",
  parameters: {
    layout: "fullscreen",
  },
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

const CollapseTrigger = () => {
  const { toggleLeftSidebarCollapsed } = useLayoutCtx();
  return (
    <IconButton
      onClick={toggleLeftSidebarCollapsed}
      sx={{ marginLeft: -1.5, marginRight: 0.5 }}
    >
      <Menu />
    </IconButton>
  );
};

const useDrawerStyles = makeStyles(() => ({
  paper: {
    border: "none",
    overflow: "visible",
  },
}));

export const Gmail = () => {
  const drawerStyles = useDrawerStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root
        initialState={{
          leftEdgeSidebar: { collapsed: true },
          rightEdgeSidebar: { open: true },
        }}
        scheme={{
          header: new HeaderBuilder({
            config: {
              xs: {
                position: "fixed",
                clipped: true,
                height: 64,
              },
            },
          }),
          leftEdgeSidebar: new EdgeSidebarBuilder({
            config: {
              xs: {
                variant: "permanent",
                width: 256,
                collapsible: true,
                collapsedWidth: 72,
                uncollapsedOnHover: true,
              },
            },
          }),
          rightEdgeSidebar: new EdgeSidebarBuilder({
            config: {
              sm: {
                variant: "persistent",
                width: 56,
                persistentBehavior: "fit",
              },
            },
          }),
        }}
      >
        <Header>
          <AppHeader collapse={<CollapseTrigger />} />
        </Header>
        <EdgeSidebar anchor="left" classes={drawerStyles}>
          <AppSidebar />
        </EdgeSidebar>
        <EdgeSidebar anchor="right">
          <AppSubSidebar />
        </EdgeSidebar>
        <Content>
          <AppContent onTabIndexChange={() => {}} />
        </Content>
        <CustomTrigger />
      </Root>
    </ThemeProvider>
  );
};
