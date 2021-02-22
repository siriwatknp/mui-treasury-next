import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Text, TextProps } from "./typescript/Text";

export default {
  title: "Component/Text",
  component: Text,
} as Meta;

export const Variants: Story<TextProps> = (args) => {
  return <Text {...args} />;
};
Variants.args = {
  children: "Hello",
};
