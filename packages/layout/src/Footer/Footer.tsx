import React from "react";
import cx from "clsx";
import { experimentalStyled } from "@material-ui/core/styles";
import { useLayoutCtx, PropsWithFunctionChildren } from "../Root/Root";
import { getContentSxProps } from "../Content/getContentSxProps";
import { FOOTER_ID } from "../utils/constant";

const FooterRoot = experimentalStyled(
  "footer",
  {},
  { name: "Footer", slot: "Root" }
)();

type FooterProps = Parameters<typeof FooterRoot>[0];

export const Footer = ({
  children,
  ...props
}: PropsWithFunctionChildren<FooterProps>) => {
  const ctx = useLayoutCtx();
  const { builder } = ctx;
  const sxProps = getContentSxProps(builder, FOOTER_ID);
  return (
    <FooterRoot
      {...props}
      className={cx("Footer", props.className)}
      sx={{ transition: "all 225ms", ...props.sx, ...sxProps }}
    >
      {typeof children === "function" ? children(ctx) : children}
    </FooterRoot>
  );
};
