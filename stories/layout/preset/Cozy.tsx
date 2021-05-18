import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getCozyScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from "../mockup";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const theme = createMuiTheme();
const scheme = getCozyScheme();

const Cozy = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root scheme={scheme}>
        {({ state }) => (
          <>
            <Header>
              <Box flex={1} display="flex" alignItems="center" px={2}>
                <EdgeTrigger
                  target={{ anchor: "left", field: "open" }}
                  sx={{ ml: -0.5, mr: 1 }}
                >
                  {(open, setOpen) => (
                    <IconButton onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowLeft /> : <Menu />}
                    </IconButton>
                  )}
                </EdgeTrigger>
                <HeaderMockUp />
              </Box>
            </Header>
            <EdgeSidebar anchor="left">
              <SidebarContent>
                <NavHeaderMockUp collapsed={state.leftEdgeSidebar?.collapsed} />
                <NavContentMockUp />
              </SidebarContent>
              <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                {(collapsed, setCollapsed) => (
                  <ButtonBase
                    onClick={() => setCollapsed(!collapsed)}
                    sx={{ flexGrow: 1, height: 48 }}
                  >
                    {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  </ButtonBase>
                )}
              </EdgeTrigger>
            </EdgeSidebar>
            <Content>
              <ContentMockUp />
            </Content>
            <Footer>
              <FooterMockUp />
            </Footer>
          </>
        )}
      </Root>
    </ThemeProvider>
  );
};

export default Cozy;
