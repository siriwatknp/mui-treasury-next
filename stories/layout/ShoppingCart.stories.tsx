import React, { useEffect } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import CreditCard from "@material-ui/icons/CreditCard";
import Close from "@material-ui/icons/Close";
import {
  Root,
  Header,
  Content,
  Fullscreen,
  EdgeSidebar,
  InsetContainer,
  InsetSidebar,
  Footer,
  InsetAvoidingView,
} from "@mui-treasury/layout";
import {
  dailyShoppingTheme,
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
  // @ts-ignore
} from "@mui-treasury/mockup/brands/dailyShopping";

export default {
  title: "Layout/Demo App",
  parameters: {
    layout: "fullscreen",
  },
};

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: "#ffffff",
  },
  toolbar: {},
  edgeSidebarBody: {
    padding: "24px 0 40px 24px !important",
    background: "none",
    boxShadow: "none",
    right: 24,
  },
  sidebarBody: {
    padding: "24px 0 40px 24px !important",
    background: "none",
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: "none",
    boxShadow: "none",
  },
  container: {
    minHeight: 0,
    display: "flex",
  },
  content: {
    overflow: "auto",
  },
  footer: {
    border: "unset",
    position: "relative",
    backgroundColor: "#fff",
    "&:before": {
      content: '" "',
      position: "absolute",
      width: "100%",
      height: 24,
      top: 0,
      left: 0,
      transform: "translateY(-100%)",
      background: "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
    },
    [breakpoints.only("sm")]: {
      paddingRight: 64,
    },
    [breakpoints.up("md")]: {
      paddingBottom: 40,
    },
  },
  fab: {
    position: "fixed",
    bottom: 16,
    right: 16,
    color: "#2E3B4D",
    "& svg": {
      fontSize: 32,
      color: "#fff",
    },
    zIndex: 1500,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    [breakpoints.up("sm")]: {
      bottom: 40,
    },
    [breakpoints.up("md")]: {
      transform: "scale(0)",
    },
  },
  fabClose: {
    top: 8,
    right: 8,
    width: 48,
    height: 48,
  },
}));

export const ShoppingCart = (props: {}, context: any) => {
  useEffect(() => {
    context?.setTheme(dailyShoppingTheme);
  }, []);
  const styles = useStyles();
  return (
    <Fullscreen>
      <Root
        scheme={{
          header: {
            config: {
              xs: {
                position: "relative",
                height: 64,
              },
            },
          },
          rightInsetSidebar: {
            position: "absolute",
            width: "33%",
            hidden: ["xs", "sm"],
          },
          rightEdgeSidebar: {
            config: {
              xs: {
                variant: "temporary",
                width: "88%",
              },
            },
          },
        }}
      >
        {({ toggleRightSidebarOpen, state: { rightEdgeSidebar } }) => {
          return (
            <>
              <CssBaseline />
              <Fab
                className={cx(
                  styles.fab,
                  rightEdgeSidebar?.open && styles.fabClose
                )}
                color={"primary"}
                onClick={toggleRightSidebarOpen}
              >
                {rightEdgeSidebar?.open ? <Close /> : <CreditCard />}
              </Fab>
              <Header className={styles.header}>
                <Container>
                  <DailyHeader />
                </Container>
              </Header>
              <EdgeSidebar
                anchor="right"
                PaperProps={{ className: styles.edgeSidebarBody }}
              >
                <DailyCheckout />
              </EdgeSidebar>
              <Content>
                <InsetContainer
                  rightSidebar={
                    <InsetSidebar classes={{ paper: styles.sidebarBody }}>
                      <DailyCheckout />
                    </InsetSidebar>
                  }
                >
                  <DailyCart />
                </InsetContainer>
              </Content>
              <Footer>
                <Container>
                  <InsetAvoidingView className={styles.footer}>
                    <Box pb={3}>
                      <DailySummary />
                    </Box>
                  </InsetAvoidingView>
                </Container>
              </Footer>
            </>
          );
        }}
      </Root>
    </Fullscreen>
  );
};