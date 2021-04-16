import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getContentBasedScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
  //@ts-ignore
} from "@mui-treasury/mockup/layout";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const theme = createMuiTheme();
const standardScheme = getContentBasedScheme();

const ContentBased = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Root scheme={standardScheme}>
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
    </MuiThemeProvider>
  );
};

export default ContentBased;
