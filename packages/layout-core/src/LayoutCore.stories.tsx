import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";

import { Root, useLayoutCtx } from "./Root/Root";
import { HeaderBuilder } from "./Header/HeaderBuilder";
import { Header } from "./Header/Header";
import { EdgeSidebarBuilder } from "./EdgeSidebar/EdgeSidebarBuilder";
import { EdgeSidebar } from "./EdgeSidebar/EdgeSidebar";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";

export default {
  title: "Layout",
  argTypes: {},
  args: {},
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Trigger = () => {
  const {
    toggleLeftSidebarCollapsed,
    toggleLeftSidebarOpen,
    state,
  } = useLayoutCtx();
  return (
    <>
      <Button onClick={toggleLeftSidebarOpen} color="inherit">
        {state.leftEdgeSidebar?.open ? "Close" : "Open"}
      </Button>
      <Button onClick={toggleLeftSidebarCollapsed} color="inherit">
        {state.leftEdgeSidebar?.collapsed ? "Uncollapse" : "Collapse"}
      </Button>
    </>
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
              position: "fixed",
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
              variant: "persistent",
              persistentBehavior: "flexible",
              width: 256,
              collapsible: true,
              collapsedWidth: 72,
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
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl
        rhoncus mattis. Enim neque volutpat ac tincidunt vitae. Purus viverra
        accumsan in nisl nisi. Amet venenatis urna cursus eget nunc scelerisque
        viverra. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Nam
        at lectus urna duis convallis convallis. Tincidunt lobortis feugiat
        vivamus at augue. Ac felis donec et odio pellentesque diam volutpat
        commodo sed.
        <br />
        <br />
        Et netus et malesuada fames ac. Et ultrices neque ornare aenean euismod
        elementum nisi. Sollicitudin ac orci phasellus egestas tellus rutrum
        tellus pellentesque. Sed risus pretium quam vulputate dignissim
        suspendisse in. Tortor aliquam nulla facilisi cras fermentum odio eu
        feugiat pretium. Urna duis convallis convallis tellus. Mattis aliquam
        faucibus purus in massa tempor nec feugiat. Imperdiet dui accumsan sit
        amet nulla facilisi. In ornare quam viverra orci sagittis eu volutpat
        odio. Et sollicitudin ac orci phasellus egestas tellus rutrum. Quam
        vulputate dignissim suspendisse in est ante. Orci sagittis eu volutpat
        odio facilisis mauris sit amet massa. Amet mattis vulputate enim nulla
        aliquet porttitor lacus luctus. Volutpat consequat mauris nunc congue
        nisi vitae suscipit tellus. Fermentum iaculis eu non diam. Non quam
        lacus suspendisse faucibus interdum posuere. In ornare quam viverra orci
        sagittis eu volutpat.
        <br />
        <br />
        Quis blandit turpis cursus in hac habitasse. Etiam non quam lacus
        suspendisse faucibus. Sit amet nulla facilisi morbi tempus iaculis urna
        id volutpat. Suspendisse ultrices gravida dictum fusce ut. Maecenas
        volutpat blandit aliquam etiam erat velit scelerisque in dictum.
        Pellentesque elit eget gravida cum. At lectus urna duis convallis.
        Aliquam id diam maecenas ultricies. Cursus turpis massa tincidunt dui
        ut. Sollicitudin nibh sit amet commodo nulla facilisi. Aliquet bibendum
        enim facilisis gravida. In dictum non consectetur a erat nam at lectus.
        Nunc faucibus a pellentesque sit amet porttitor eget dolor. Adipiscing
        diam donec adipiscing tristique risus nec feugiat. Ut diam quam nulla
        porttitor massa id. Lectus arcu bibendum at varius vel. In ante metus
        dictum at tempor commodo ullamcorper a. Consectetur libero id faucibus
        nisl tincidunt eget nullam non. Diam vel quam elementum pulvinar. Est
        ullamcorper eget nulla facilisi. Sit amet volutpat consequat mauris nunc
        congue nisi. Tellus elementum sagittis vitae et leo duis ut diam quam.
        <br />
        <br />
        Tellus mauris a diam maecenas sed enim ut sem. Euismod lacinia at quis
        risus sed. Tempor commodo ullamcorper a lacus vestibulum sed arcu non
        odio. Sapien et ligula ullamcorper malesuada proin. Vitae congue eu
        consequat ac felis donec et. Ut venenatis tellus in metus vulputate eu
        scelerisque. Aliquam vestibulum morbi blandit cursus. Felis imperdiet
        proin fermentum leo. Blandit aliquam etiam erat velit scelerisque in. A
        diam sollicitudin tempor id eu nisl. Tristique senectus et netus et
        malesuada fames. Vel pretium lectus quam id leo in vitae turpis massa.
        Leo a diam sollicitudin tempor id eu nisl nunc mi. Arcu felis bibendum
        ut tristique et egestas quis ipsum suspendisse. Urna duis convallis
        convallis tellus id interdum. Fames ac turpis egestas maecenas pharetra
        convallis.
        <br />
        <br />
        Proin fermentum leo vel orci. Aliquet enim tortor at auctor urna nunc id
        cursus. Leo vel orci porta non pulvinar neque laoreet suspendisse
        interdum. Imperdiet proin fermentum leo vel. Aenean et tortor at risus
        viverra adipiscing. Amet nisl purus in mollis nunc sed id semper risus.
        Nulla aliquet porttitor lacus luctus accumsan. Commodo viverra maecenas
        accumsan lacus vel facilisis volutpat est velit. Dolor magna eget est
        lorem. Tempus imperdiet nulla malesuada pellentesque elit. Amet
        consectetur adipiscing elit ut aliquam. Amet nulla facilisi morbi tempus
        iaculis. Phasellus faucibus scelerisque eleifend donec. Mi bibendum
        neque egestas congue quisque egestas. Pulvinar neque laoreet suspendisse
        interdum consectetur libero id faucibus. Amet justo donec enim diam
        vulputate ut pharetra. Enim sit amet venenatis urna. Velit aliquet
        sagittis id consectetur purus ut. Tortor at risus viverra adipiscing at
        in tellus integer.
      </Content>
      <Footer>Footer</Footer>
    </Root>
  );
};
