import { fade } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
export const useShapeStickerStyles = makeStyles(({ palette: MuiPalette, treasury }) => ({
    root: (props) => ({
        borderRadius: 100,
        boxShadow: `0 2px 8px 0 ${props?.palette
            ? fade(treasury.getColor(props?.palette, "500"), 0.6)
            : "rgba(0,0,0,0.2)"}`,
        border: "4px solid",
        borderColor: MuiPalette.background.paper,
    }),
    text: {
        backgroundColor: MuiPalette.background.paper,
    },
}), {
    name: "MuiShapeSticker",
});
