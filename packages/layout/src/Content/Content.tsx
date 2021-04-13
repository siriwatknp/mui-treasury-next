import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { getContentSxProps } from "./getContentSxProps";
import { CONTENT_ID, CSS_TRANSITION } from "../utils/constant";
import { useFullscreenCtx } from "../Fullscreen/FullscreenContext";

const ContentRoot = experimentalStyled(
  "main",
  {},
  { name: "Content", slot: "Root" }
)();

type ContentProps = Parameters<typeof ContentRoot>[0];

export const Content = (props: ContentProps) => {
  const { builder } = useLayoutCtx();
  const sxProps = getContentSxProps(builder, CONTENT_ID);
  const isFullscreen = useFullscreenCtx();
  return (
    <ContentRoot
      {...props}
      className={cx("Content", props.className)}
      sx={{
        transition: CSS_TRANSITION,
        ...(isFullscreen && { flexGrow: 1, minHeight: 0, display: "flex" }),
        ...props.sx,
        ...sxProps,
      }}
    />
  );
};
