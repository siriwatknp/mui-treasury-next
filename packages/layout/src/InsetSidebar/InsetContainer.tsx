import React from "react";
import Container, { ContainerProps } from "@material-ui/core/Container";
import { useFullscreenCtx } from "../Fullscreen/FullscreenContext";
import { experimentalStyled } from "@material-ui/core";

const Div = experimentalStyled("div")({
  overflow: "auto",
  flexGrow: 1,
});

export type DivProps = Parameters<typeof Div>[0];

export type InsetContainerProps = {
  leftSidebar?: React.ReactElement;
  rightSidebar?: React.ReactElement;
  FullscreenWrapper?: React.ElementType;
} & ContainerProps;

export const InsetContainer = ({
  children,
  leftSidebar,
  rightSidebar,
  FullscreenWrapper = Div,
  ...props
}: InsetContainerProps) => {
  const isFullscreen = useFullscreenCtx();
  return (
    <Container
      {...props}
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        flexGrow: 1,
      }}
    >
      {leftSidebar && React.cloneElement(leftSidebar, { anchor: "left" })}
      {isFullscreen ? (
        <FullscreenWrapper>{children}</FullscreenWrapper>
      ) : (
        children
      )}
      {rightSidebar && React.cloneElement(rightSidebar, { anchor: "right" })}
    </Container>
  );
};
