import React from "react";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import Edit from "@material-ui/icons/Edit";

import {
  MessengerSearch,
  ChatsHeader,
  ChatList,
  ConversationHead,
  ChatSettings,
  ChatBar,
  ChatDialog,
  // @ts-ignore
} from "@mui-treasury/mockup/brands/messenger";
import {
  Fullscreen,
  Root,
  Header,
  EdgeSidebar,
  Content,
  InsetContainer,
  InsetSidebar,
  InsetAvoidingView,
  Footer,
} from "@mui-treasury/layout";

export default {
  title: "Layout/Demo App",
  parameters: {
    layout: "fullscreen",
    muiTheme: responsiveFontSizes(
      createMuiTheme({
        palette: {
          primary: {
            main: "rgb(0, 153, 255)",
          },
          background: {
            default: "#fff",
          },
        },
        typography: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          body1: {
            fontSize: `${15 / 16}rem`,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "strong, b": {
                fontWeight: "bold",
              },
            },
          },
        },
      })
    ),
  },
};

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",
    backgroundColor: "#ffffff",
  },
  insetBody: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
    overflowY: "auto",
    backgroundColor: "#fff",
  },
  edit: {
    backgroundColor: "rgba(0,0,0,0.04)",
  },
}));

export const Messenger = () => {
  const styles = useStyles();
  return (
    <Fullscreen>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "relative",
                height: 60,
              },
            },
          },
          leftEdgeSidebar: {
            config: {
              xs: {
                variant: "permanent",
                width: "25%",
                collapsible: true,
                collapsedWidth: 80,
              },
            },
            autoCollapse: "sm",
          },
          rightInsetSidebar: {
            position: "absolute",
            width: "33%",
          },
        }}
      >
        {({ state: { leftEdgeSidebar } }) => (
          <>
            <CssBaseline />
            <Header className={styles.header}>
              <Toolbar disableGutters>
                <ConversationHead />
              </Toolbar>
            </Header>
            <EdgeSidebar anchor="left">
              {leftEdgeSidebar?.collapsed ? (
                <Box textAlign={"center"} my={1}>
                  <IconButton className={styles.edit}>
                    <Edit />
                  </IconButton>
                </Box>
              ) : (
                <>
                  <ChatsHeader />
                  <Box p={"4px 16px 12px"}>
                    <MessengerSearch />
                  </Box>
                </>
              )}
              <ChatList concise={leftEdgeSidebar?.collapsed} />
            </EdgeSidebar>
            <Content>
              <InsetContainer
                disableGutters
                rightSidebar={
                  <InsetSidebar BodyProps={{ className: styles.insetBody }}>
                    <ChatSettings />
                  </InsetSidebar>
                }
              >
                <ChatDialog />
              </InsetContainer>
            </Content>
            <Footer>
              <Container disableGutters>
                <InsetAvoidingView>
                  <Box display={"flex"} alignItems={"center"} p={1}>
                    <ChatBar concise={leftEdgeSidebar?.collapsed} />
                  </Box>
                </InsetAvoidingView>
              </Container>
            </Footer>
          </>
        )}
      </Root>
    </Fullscreen>
  );
};
