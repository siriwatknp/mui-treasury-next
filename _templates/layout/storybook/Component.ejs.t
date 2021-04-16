---
to: stories/layout/<%=category%>/<%=name%>.tsx
unless_exists: true
---
import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Fullscreen,
  Root,
  Header,
  EdgeSidebar,
  SidebarContent,
  Content,
  InsetContainer,
  InsetSidebar,
  InsetAvoidingView,
  Footer,
} from "@mui-treasury/layout";

const theme = createMuiTheme();

const <%= name %> = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Root
        scheme={{
          header: {
            // header configuration goes here!
          },
          leftEdgeSidebar: {
            // left edge-sidebar configuration goes here!
          },
        }}
      >
        <CssBaseline />
        <Header>
          <div>Header</div>
        </Header>
        <EdgeSidebar anchor="left">
          <SidebarContent>
            Sidebar
          </SidebarContent>
        </EdgeSidebar>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default <%= name %>;
