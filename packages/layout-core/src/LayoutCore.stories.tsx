import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";

import { Root, useLayoutCtx } from "./Root/Root";
import { HeaderBuilder } from "./Header/HeaderBuilder";
import { Header } from "./Header/Header";
import { EdgeSidebarBuilder } from "./EdgeSidebar/EdgeSidebarBuilder";
import { EdgeSidebar } from "./EdgeSidebar/EdgeSidebar";

export default {
  title: "Layout",
  argTypes: {},
  args: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Trigger = () => {
  const { setCollapsed, state } = useLayoutCtx();
  return (
    <IconButton
      onClick={() =>
        setCollapsed("leftEdgeSidebar", !state.leftEdgeSidebar?.collapsed)
      }
      color="inherit"
    >
      <Menu />
    </IconButton>
  );
};

export const Development = () => {
  return (
    <Root
      scheme={{
        header: new HeaderBuilder({
          config: {
            xs: {
              position: "relative",
              height: 56,
              clipped: {
                leftEdgeSidebar: true,
              },
            },
            md: {
              position: "relative",
              height: 64,
              clipped: true,
            },
          },
        }),
        leftEdgeSidebar: new EdgeSidebarBuilder({
          config: {
            xs: {
              variant: "temporary",
              width: 256,
            },
            sm: {
              variant: "permanent",
              width: 256,
              collapsible: false,
              headerMagnetEnabled: true,
            },
            lg: {
              variant: "permanent",
              width: 256,
              collapsible: true,
              collapsedWidth: 80,
              autoExpanded: true,
            },
          },
          autoCollapse: "lg",
          // hidden: ["md"],
        }),
        rightEdgeSidebar: new EdgeSidebarBuilder({
          config: {
            xs: {
              variant: "persistent",
              width: 80,
              persistentBehavior: "fit",
            },
          },
          hidden: ["xs", "sm"],
        }),
      }}
      initialState={{ rightEdgeSidebar: { open: true } }}
    >
      <Header>
        <div>
          <Trigger />
        </div>
      </Header>
      <EdgeSidebar anchor="left">Hello</EdgeSidebar>
      <EdgeSidebar anchor="right">Hello</EdgeSidebar>
      <div style={{ height: 2000 }} />
    </Root>
  );
};
