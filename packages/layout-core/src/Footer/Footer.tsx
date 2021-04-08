import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx } from "../Root/Root";
import { getContentSxProps } from "../Content/getContentSxProps";
import { FOOTER_ID } from "../utils/constant";

const FooterRoot = experimentalStyled(
  "footer",
  {},
  { name: "Footer", slot: "Root" }
)();

type FooterProps = Parameters<typeof FooterRoot>[0];

export const Footer = (props: FooterProps) => {
  const { scheme } = useLayoutCtx();
  const sxProps = getContentSxProps(scheme, FOOTER_ID);
  return (
    <FooterRoot
      {...props}
      className={cx("Footer", props.className)}
      sx={{ transition: "all 225ms", ...props.sx, ...sxProps }}
    />
  );
};
