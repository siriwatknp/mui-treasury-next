import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";

import Pages from "./example";

export default {
  title: "Layout/Example",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "fullscreen",
  },
} as Meta;

const fileMapping: { [k: string]: string } = {};
const context = require.context("!raw-loader!./example", false, /\.tsx$/);
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
export const CustomTheme = createStory("CustomTheme");