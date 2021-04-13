import React, { useEffect } from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/icons/Menu";

import AppHeader from "../../mockup/gmail/AppHeader";
import AppSidebar from "../../mockup/gmail/AppSidebar";
import AppContent from "../../mockup/gmail/AppContent";
import AppSubSidebar from "../../mockup/gmail/AppSubSidebar";
import CustomTrigger from "../../mockup/gmail/CustomTrigger";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  Content,
} from "@mui-treasury/layout";

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

const useDrawerStyles = makeStyles(() => ({
  paper: {
    border: "none",
    overflow: "visible",
  },
}));

export const Gmail = (props: {}, context: any) => {
  useEffect(() => {
    context?.setTheme(theme);
  }, []);
  const drawerStyles = useDrawerStyles();
  return (
    <Root
      initialState={{
        leftEdgeSidebar: { collapsed: true },
        rightEdgeSidebar: { open: true },
      }}
      scheme={{
        header: {
          config: {
            xs: {
              position: "fixed",
              clipped: true,
              height: 64,
            },
          },
        },
        leftEdgeSidebar: {
          config: {
            xs: {
              variant: "permanent",
              width: 256,
              collapsible: true,
              collapsedWidth: 72,
              uncollapsedOnHover: true,
            },
          },
        },
        rightEdgeSidebar: {
          config: {
            sm: {
              variant: "persistent",
              width: 56,
              persistentBehavior: "fit",
            },
          },
          hidden: ["md"],
        },
      }}
    >
      <Header>
        <AppHeader
          collapse={
            <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
              {(collapsed, setCollapsed) => (
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <Menu />
                </IconButton>
              )}
            </EdgeTrigger>
          }
        />
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
  );
};
