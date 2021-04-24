import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Root,
  Header,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getStandardScheme,
} from "@mui-treasury/layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7d4709",
    },
    secondary: {
      main: "#fffaf2",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#7d4709",
            color: "#fff",
            "& svg": {
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "#95550b",
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 48,
        },
      },
    },
  },
});

const CustomTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Root scheme={getStandardScheme()}>
        <CssBaseline />
        <Header>
          <div>Header</div>
        </Header>
        <EdgeSidebar anchor="left">
          <SidebarContent>Sidebar</SidebarContent>
        </EdgeSidebar>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Root>
    </MuiThemeProvider>
  );
};

export default CustomTheme;
