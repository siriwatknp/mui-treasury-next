---
to: packages/<%=name%>/src/<%=h.toName(name)%>.tsx
unless_exists: true
---
import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { getThemeProps, useTheme } from '@material-ui/styles';

<%= Name=h.toName(name) %>

const NAME = "Mui<%=Name%>";
const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { name: NAME }
);

export type <%=Name%>ClassKey = keyof ReturnType<typeof useStyles>;
export type <%=Name%>Classes = Partial<Record<<%=Name%>ClassKey, string>>;
export type <%=Name%>Props = {
  classes?: <%=Name%>Classes;
};

export const <%=Name%> = ({
  children,
  useStyles: useCustomStyles,
  ...externalProps
}: PropsWithChildren<<%=Name%>Props> & {
  useStyles?: (props: <%=Name%>Props) => <%=Name%>Classes;
}) => {
  const theme = useTheme();
  const props = getThemeProps({ name: NAME, props: externalProps, theme });
  const styles = useStyles(props);
  const customStyles = useCustomStyles?.(props);
  return (
    <div
      className={cx(styles.root)}
    >
      {children}
    </div>
  );
};
