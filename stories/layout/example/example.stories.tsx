import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";

const Pages = {
  MultipleHeaders: React.lazy(() => import("./MultipleHeaders")),
  RTL: React.lazy(() => import("./RTL")),
  InsetSidebarPosition: React.lazy(() => import("./InsetSidebarPosition")),
  ControlEdgeSidebar: React.lazy(() => import("./ControlEdgeSidebar")),
  RightEdgeSidebar: React.lazy(() => import("./RightEdgeSidebar")),
};

export default {
  title: "Layout/Example",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

const fileMapping: { [k: string]: string } = {};
const context = require.context("!raw-loader!./", false, /(?<!stories)\.tsx/);
context.keys().forEach((filename) => {
  fileMapping[filename] = context(filename).default;
});

const createStory = (name: keyof typeof Pages) => {
  const Component = Pages[name];
  function StoryComponent() {
    return <Component />;
  }
  StoryComponent.parameters = {
    docs: {
      source: {
        code: fileMapping[`./${name}.tsx`],
      },
    },
    backgrounds: {},
  };
  return StoryComponent;
};
export const ControlEdgeSidebar = createStory("ControlEdgeSidebar");
export const RightEdgeSidebar = createStory("RightEdgeSidebar");
export const InsetSidebarPosition = createStory("InsetSidebarPosition");
export const RightToLeft = createStory("RTL");
export const MultipleHeaders = createStory("MultipleHeaders");
