import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { getThemeProps, useTheme } from '@material-ui/styles';
const MUI_SHAPE = "MuiShape";
const useStyles = makeStyles(({ treasury, ...theme }) => ({
    root: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 24,
        minHeight: 24,
        verticalAlign: "middle",
        flexShrink: 0,
        borderRadius: theme.shape.borderRadius,
    },
    circular: {
        borderRadius: 100,
    },
    text: ({ palette }) => ({
        color: treasury.getColor(palette, "500"),
    }),
    solid: ({ palette }) => ({
        color: "#fff",
        backgroundColor: treasury.getColor(palette, "500"),
    }),
    soft: ({ palette }) => ({
        color: treasury.getColor(palette, "500"),
        backgroundColor: treasury.getColor(palette ?? "grey", "100"),
    }),
    outlined: ({ palette }) => ({
        border: "1px solid",
        borderColor: treasury.getColor(palette, "500"),
    }),
    size: (props) => ({
        minWidth: props.size,
        minHeight: props.size,
    }),
}), { name: MUI_SHAPE });
export const Shape = ({ children, useStyles: useCustomStyles = () => ({}), ...externalProps }) => {
    const theme = useTheme();
    const { fill = "text", palette, circular, outlined, ...props } = getThemeProps({ name: MUI_SHAPE, props: externalProps, theme });
    const styles = useStyles({ ...props, palette });
    const customStyles = useCustomStyles?.({ ...props, palette });
    return (<div className={cx(styles.root, circular && styles.circular, outlined && styles.outlined, fill && styles[fill], props.size && styles.size, 
    // custom styles from outside
    customStyles?.root, circular && customStyles?.circular, outlined && customStyles?.outlined, fill && customStyles?.[fill], props.size && customStyles?.size)}>
      {children}
    </div>);
};
