import { useEffect, useRef, useState } from "react";
import { debounce } from "@material-ui/core/utils";
// import { useWindowCtx } from "../contexts"

function getScrollY(obj: Window) {
  return typeof obj === "object" ? obj.scrollY : undefined;
}

export const useScrollY = (disabled?: boolean) => {
  // const { iWindow } = useWindowCtx()
  const iWindow = window;
  const [scrollY, setScrollY] = useState(getScrollY(iWindow));
  const debounceScrollListener = useRef(
    debounce(() => {
      setScrollY(getScrollY(iWindow));
    }, 300)
  );
  useEffect(() => {
    if (!disabled) {
      iWindow.addEventListener("scroll", debounceScrollListener.current);
      return () => {
        iWindow.removeEventListener("scroll", debounceScrollListener.current);
      };
    }
  }, [disabled]);
  return scrollY;
};
