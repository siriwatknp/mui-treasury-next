import { useScreen } from "./useScreen";
import { useLayoutCtx } from "../Root/Root";
import { useScrollY } from "./useScrollY";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";

// todo write test
export const useInsetHeaderMagnet = (disabled?: boolean) => {
  // this hook will run only for <InsetSidebar position="fixed" />
  const { scheme } = useLayoutCtx();
  const screen = useScreen();

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(disabled);

  if (disabled) return { marginTop: "" };

  const height = scheme.header?.getRelativeHeight();

  const maxOffset =
    height && screen ? pickNearestBreakpoint(height, screen) : 0;

  return {
    marginTop: `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`,
  }; // inline style
};
