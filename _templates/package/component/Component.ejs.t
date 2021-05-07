---
to: packages/<%=name%>/src/<%= h.toName(name) %>.tsx
unless_exists: true
---
import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  experimentalStyled as styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { SxProps } from "@material-ui/system";
import { get<%= nameCamel=h.toNameCamel(name) %>UtilityClass, <%= nameCamel %>Classes } from "./<%= nameCamel %>Classes";

export type <%=Name = h.toName(name)%>ClassKey = keyof typeof <%= nameCamel %>Classes;
export type <%=Name%>Classes = Partial<typeof <%= nameCamel %>Classes>;
export type <%=Name%>Props = {
  className?: string;
  classes?: <%=Name%>Classes;
};

const useUtilityClasses = (styleProps: <%=Name%>Props) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(
    slots,
    get<%=nameCamel%>UtilityClass,
    classes as Required<<%=Name%>Props["classes"]>
  );
};

const <%=Name%>Root = styled(
  "div",
  {},
  {
    name: "Jun<%=Name%>",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root,
  }
)<{ styleProps: <%=Name%>Props }>({});

interface <%= Name %>Component {
  <P extends { as?: React.ElementType }>(
    props: P extends { as: infer As }
      ? As extends keyof JSX.IntrinsicElements
        ? P & <%= Name %>Props & JSX.IntrinsicElements[As]
        : As extends React.ComponentType<infer AsProps>
        ? P & <%= Name %>Props & AsProps
        : PropsWithChildren<P & <%= Name %>Props>
      : PropsWithChildren<P & <%= Name %>Props>
  ): JSX.Element | null;
}

export const <%=Name%>: <%=Name%>Component = React.forwardRef<
  any,
  PropsWithChildren<<%=Name%>Props>
>(function <%=Name%>({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, <%=Name%>Props, "Jun<%=Name%>">({
    props: inProps,
    name: "Jun<%=Name%>",
  });
  const { ...other } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <<%=Name%>Root
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </<%=Name%>Root>
  );
});
