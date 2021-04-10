import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { getEdgeOffsetSxProps } from "./getEdgeOffsetSxProps";

describe("getEdgeOffsetSxProps", () => {
  it("return empty if no header", () => {
    const result = getEdgeOffsetSxProps({
      edgeSidebar: new EdgeSidebarBuilder({
        config: {
          md: {
            variant: "permanent",
            width: 256,
          },
        },
      }),
    });
    expect(result).toEqual({});
  });

  it("return correct offset height", () => {
    const header = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
          clipped: true,
        },
      },
    });
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";
    header.effectedBy = { leftEdgeSidebar: edgeSidebar };
    const result = getEdgeOffsetSxProps({
      header,
      edgeSidebar,
    });
    expect(result).toEqual({
      height: {
        xs: "56px",
        sm: "56px",
      },
    });
  });

  it("only has height if clipped", () => {
    const header = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
          clipped: true,
        },
        md: {
          position: "fixed",
          height: 64,
        },
        lg: {
          position: "relative",
          height: 64,
          clipped: true,
        },
      },
    });
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
        lg: {
          variant: "persistent",
          width: 256,
          persistentBehavior: "fit",
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";

    const result = getEdgeOffsetSxProps({
      header,
      edgeSidebar,
    });
    expect(result).toEqual({
      height: {
        xs: "56px",
        sm: "56px",
        md: "0px",
        lg: "64px",
      },
    });
  });

  it("has zero height if clippped on another sidebar", () => {
    const header = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
          clipped: {
            rightEdgeSidebar: true,
          },
        },
      },
    });
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";
    header.effectedBy = { leftEdgeSidebar: edgeSidebar };
    const result = getEdgeOffsetSxProps({
      header,
      edgeSidebar,
    });
    expect(result).toEqual({
      height: { xs: "0px", sm: "0px" },
    });
  });

  describe("MultiHeaders", () => {
    it("has height of all clipped headers", () => {
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "sticky",
            height: 56,
            clipped: true,
          },
          md: {
            position: "fixed",
            height: 64,
          },
          lg: {
            position: "relative",
            height: 64,
            clipped: true,
          },
        },
      });
      const topHeader = new HeaderBuilder({
        config: { xs: { position: "relative", clipped: true, height: 20 } },
      });
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
          },
          lg: {
            variant: "persistent",
            width: 256,
            persistentBehavior: "fit",
          },
        },
      });
      edgeSidebar.id = "leftEdgeSidebar";

      const result = getEdgeOffsetSxProps({
        topHeader,
        header,
        edgeSidebar,
      });
      expect(result).toEqual({
        height: {
          xs: "calc(20px + 56px)",
          sm: "calc(20px + 56px)",
          md: "20px",
          lg: "calc(20px + 64px)",
        },
      });
    });
  });
});
