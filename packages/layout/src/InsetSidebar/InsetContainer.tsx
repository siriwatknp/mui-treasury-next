import React from "react";
import Container, { ContainerProps } from "@material-ui/core/Container";
import { experimentalStyled, Theme } from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { useFullscreenCtx } from "../Fullscreen/FullscreenContext";

const FullscreenWrapperRoot = experimentalStyled("div")({
  overflow: "auto",
  flexGrow: 1,
});

export type DivProps = JSX.IntrinsicElements["div"];

export type InsetContainerProps = {
  leftSidebar?: React.ReactElement;
  rightSidebar?: React.ReactElement;
  FullscreenWrapper?: React.ElementType;
  FullscreenWrapperProps?: DivProps & { sx?: SxProps<Theme> };
} & ContainerProps;

export const InsetContainer = ({
  children,
  leftSidebar,
  rightSidebar,
  FullscreenWrapper = FullscreenWrapperRoot,
  FullscreenWrapperProps,
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
        ...props.sx,
      }}
    >
      {leftSidebar && React.cloneElement(leftSidebar, { anchor: "left" })}
      {isFullscreen ? (
        <FullscreenWrapper {...FullscreenWrapperProps}>
          {children}
        </FullscreenWrapper>
      ) : (
        children
      )}
      {rightSidebar && React.cloneElement(rightSidebar, { anchor: "right" })}
    </Container>
  );
};
