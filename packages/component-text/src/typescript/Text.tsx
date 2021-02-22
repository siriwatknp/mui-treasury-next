import React, { PropsWithChildren } from "react";

export type TextProps = {}

export const Text = ({ children }: PropsWithChildren<{}>) => {
  return <div>{children}</div>;
};
