import React from "react";
import cx from "clsx";
import Container, { ContainerProps } from "@material-ui/core/Container";
import {
  experimentalStyled as styled,
  Theme,
  unstable_useThemeProps as useThemeProps,
} from "@material-ui/core/styles";

const contentClassName = "AppInsetContainer-content";

const InsetContainerRoot = styled(
  Container,
  {},
  {
    name: "AppInsetContainer",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)({
  display: "flex",
  flexFlow: "row nowrap",
  flexGrow: 1,
  [`& .${contentClassName}`]: {
    flexGrow: 1,
    overflow: "auto",
  },
});

export type DivProps = JSX.IntrinsicElements["div"];

export type InsetContainerProps = {
  leftSidebar?: React.ReactElement;
  rightSidebar?: React.ReactElement;
  children: React.ReactElement;
} & Omit<ContainerProps, "children">;

export const InsetContainer = ({
  children,
  leftSidebar,
  rightSidebar,
  ...inProps
}: InsetContainerProps) => {
  const props = useThemeProps<Theme, ContainerProps, "AppInsetContainer">({
    props: inProps,
    name: "AppInsetContainer",
  });
  return (
    <InsetContainerRoot {...props}>
      {leftSidebar && React.cloneElement(leftSidebar, { anchor: "left" })}
      {React.cloneElement(children, {
        className: cx(children.props.className, contentClassName),
      })}
      {rightSidebar && React.cloneElement(rightSidebar, { anchor: "right" })}
    </InsetContainerRoot>
  );
};
