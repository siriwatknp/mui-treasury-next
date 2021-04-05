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
    layout: "centered",
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
              // persistentBehavior: "none",
            },
            lg: {
              variant: "permanent",
              width: 256,
              collapsible: true,
              collapsedWidth: 80,
            },
          },
          hidden: ["md"],
        }),
        rightEdgeSidebar: new EdgeSidebarBuilder({
          config: {
            xs: {
              variant: "persistent",
              width: 80,
              persistentBehavior: "fit",
            },
          },
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
    </Root>
  );
};
