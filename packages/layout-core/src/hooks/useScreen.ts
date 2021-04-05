import React from "react";
import { debounce } from "@material-ui/core/utils";
import useTheme from "@material-ui/core/styles/useTheme";
// import { useWindowCtx } from "../contexts"
import { mapWidthToScreen } from "../utils/mapWidthToScreen";

function getWindowWidth(w: Window) {
  return typeof w === "object" ? w.innerWidth : undefined;
}

export const useScreen = () => {
  const { breakpoints } = useTheme();
  // const { iWindow } = useWindowCtx();
  const currentWindow = window;
  const getScreen = () =>
    mapWidthToScreen(getWindowWidth(currentWindow), breakpoints);

  const [screen, setScreen] = React.useState(getScreen());
  const updater = React.useRef(
    debounce(() => {
      setScreen(getScreen());
    }, 200)
  );

  React.useEffect(() => {
    if (typeof currentWindow !== "undefined") {
      currentWindow.addEventListener("resize", updater.current);
      return () => {
        currentWindow.removeEventListener("resize", updater.current);
      };
    }
  }, []);

  return screen;
};
