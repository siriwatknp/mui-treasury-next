import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { getContentSxProps } from "../utils/getContentSxProps";
import { CONTENT_ID, CSS_TRANSITION } from "../utils/constant";

const ContentRoot = experimentalStyled(
  "main",
  {},
  { name: "Content", slot: "Root" }
)();

type ContentProps = Parameters<typeof ContentRoot>[0];

export const Content = (props: ContentProps) => {
  const { scheme } = useLayoutCtx();
  const sxProps = getContentSxProps(scheme, CONTENT_ID);
  return (
    <ContentRoot
      {...props}
      className={cx("Content", props.className)}
      sx={{ transition: CSS_TRANSITION, ...props.sx, ...sxProps }}
    />
  );
};
