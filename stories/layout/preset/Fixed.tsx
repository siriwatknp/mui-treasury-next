import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getFixedScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockup,
  ContentMockup,
  FooterMockup,
  NavSidebarMockup,
} from "@mui-treasury/mockup/layout";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const theme = createTheme();
const scheme = getFixedScheme();

const Fixed = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root scheme={scheme}>
        <CssBaseline />
        <Header>
          <HeaderMockup
            trigger={
              <EdgeTrigger target={{ anchor: "left", field: "open" }}>
                {(open, setOpen) => (
                  <IconButton onClick={() => setOpen(!open)} edge="end">
                    {open ? <KeyboardArrowLeft /> : <Menu />}
                  </IconButton>
                )}
              </EdgeTrigger>
            }
          />
        </Header>
        <EdgeSidebar anchor="left">
          <SidebarContent>
            <NavSidebarMockup />
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
          <Container maxWidth="md" sx={{ py: 5 }}>
            <ContentMockup />
          </Container>
        </Content>
        <Footer>
          <FooterMockup />
        </Footer>
      </Root>
    </ThemeProvider>
  );
};

export default Fixed;
