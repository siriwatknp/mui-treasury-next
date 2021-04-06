import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "./HeaderBuilder";

describe("HeaderBuilder", () => {
  describe("Clipped on EdgeSidebar", () => {
    it("clipped is true", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", clipped: true, height: 56 },
        },
      });
      expect(header.isClipped("leftEdgeSidebar", "md")).toBeTruthy();
    });

    it("clipped is object of EdgeSidebar", () => {
      const header = new HeaderBuilder({
        config: {
          md: {
            position: "sticky",
            clipped: { leftEdgeSidebar: true },
            height: 56,
          },
        },
      });
      expect(header.isClipped("leftEdgeSidebar", "lg")).toBeTruthy();
    });
  });

  describe("ClippedHeight", () => {
    it("has correct clipped height", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56, clipped: true },
          md: { position: "sticky", height: 64 },
          lg: { position: "sticky", height: 64, clipped: true },
        },
        hidden: ["sm"],
      });
      expect(header.getClippedHeight()).toEqual({
        xs: 56,
        sm: 0,
        md: 0,
        lg: 64,
      });
    });

    it("clipped or hidden in some breakpoint", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56, clipped: true },
          xl: { position: "relative", height: 80, clipped: true },
        },
        hidden: ["sm"],
      });
      expect(header.getSxHeight()).toEqual({
        height: { xs: 56, sm: 0, md: 56, xl: 80 },
      });
    });
  });

  describe("Margin", () => {
    it("return empty if no edgeSidebar provided", () => {
      const header = new HeaderBuilder({
        config: { xs: { position: "sticky", height: 56 } },
      });
      header._effectedBy = {
        leftEdgeSidebar: undefined,
        rightEdgeSidebar: undefined,
      };
      expect(header.getSxMarginHorizontal()).toEqual({});
    });
    it("no margin if clipped", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", clipped: true, height: 56 },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar };
      expect(header.getSxMarginHorizontal()).toEqual({
        marginLeft: { sm: 0 },
      });
    });
    it("should have margin on the left", () => {
      const header = new HeaderBuilder({
        config: { xs: { position: "sticky", height: 56 } },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      leftEdgeSidebar.setState({ open: true, collapsed: false });
      header._effectedBy = {
        leftEdgeSidebar,
      };
      expect(header.getSxMarginHorizontal()).toEqual({
        marginLeft: { sm: "256px" },
      });
    });

    it("should have margin on the right", () => {
      const header = new HeaderBuilder({
        config: { xs: { position: "sticky", height: 56 } },
      });
      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      rightEdgeSidebar.setState({ open: true, collapsed: false });
      header._effectedBy = {
        rightEdgeSidebar,
      };
      expect(header.getSxMarginHorizontal()).toEqual({
        marginRight: { lg: "296px" },
      });
    });
  });

  describe("Width", () => {
    it("return empty width if no edgeSidebar", () => {
      const header = new HeaderBuilder({
        config: { xs: { position: "sticky", height: 56 } },
      });

      expect(header.getSxWidth()).toEqual({});
    });

    it("return fullWidth if clipped", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56, clipped: true },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: { sm: "100%" },
      });
    });

    it("only leftEdgeSidebar with non clipped", () => {
      const header = new HeaderBuilder({
        config: { xs: { position: "sticky", height: 56 } },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: { sm: "calc(100% - 256px)" },
      });
    });

    it("clipped left & non-clipped right edgeSidebars", () => {
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "sticky",
            height: 56,
            clipped: { leftEdgeSidebar: true },
          },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 80,
            collapsible: false,
          },
        },
      });

      header._effectedBy = { leftEdgeSidebar, rightEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: { sm: "calc(100% - 80px)" },
      });
    });

    it("EdgeSidebar hidden in some breakpoint", () => {
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "relative",
            height: 56,
          },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "temporary",
            width: 256,
          },
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: false,
          },
          lg: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
        hidden: ["md"],
      });
      header._effectedBy = { leftEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: {
          sm: "calc(100% - 256px)",
          md: "100%",
          lg: "calc(100% - 256px)",
        },
      });
    });

    it("left & right edgeSidebars", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56 },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 100,
          },
        },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 80,
            collapsible: false,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar, rightEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: {
          sm: "calc(100% - (256px + 80px))",
          lg: "calc(100% - (296px + 80px))",
        },
      });

      leftEdgeSidebar.setState({ open: true, collapsed: true });
      header._effectedBy = { leftEdgeSidebar, rightEdgeSidebar };
      expect(header.getSxWidth()).toEqual({
        width: {
          sm: "calc(100% - (80px + 80px))",
          lg: "calc(100% - (100px + 80px))",
        },
      });
    });
  });

  describe("Height", () => {
    it("get correct height if no height", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56 },
          md: { position: "relative", height: 64 },
        },
      });
      expect(header.getSxHeight()).toEqual({ height: { xs: 56, md: 64 } });
    });

    it("hidden in some breakpoint", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56 },
          xl: { position: "relative", height: 80 },
        },
        hidden: ["sm"],
      });
      expect(header.getSxHeight()).toEqual({
        height: { xs: 56, sm: 0, md: 56, xl: 80 },
      });
    });
  });

  describe("ZIndex", () => {
    it("has zIndex in between sidebars", () => {
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "sticky",
            height: 56,
            clipped: {
              rightEdgeSidebar: true,
            },
          },
          md: {
            position: "fixed",
            clipped: false,
            height: 64,
          },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "permanent",
            width: 80,
          },
        },
      });
      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "permanent",
            width: 80,
          },
        },
      });

      header._effectedBy = {
        leftEdgeSidebar,
        rightEdgeSidebar,
      };
      expect(header.getSxZIndex()).toEqual({
        zIndex: {
          xs: 1210,
          md: 1100,
        },
      });
    });
  });

  describe("Final CSS Properties", () => {
    it("Header with LeftEdgeSidebar", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56 },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: { variant: "temporary", width: 256 },
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: false,
            persistentBehavior: "none",
          },
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar };
      expect(header.getSxProps()).toEqual({
        height: {
          xs: 56,
        },
        width: {
          lg: "calc(100% - 296px)",
        },
        marginLeft: {
          lg: "296px",
        },
        zIndex: {
          xs: 1100,
        },
      });
    });
    it("Header with Left & Right EdgeSidebar", () => {
      const header = new HeaderBuilder({
        config: {
          xs: { position: "sticky", height: 56 },
        },
      });
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: { variant: "temporary", width: 256 },
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: false,
            persistentBehavior: "none",
          },
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          md: {
            variant: "permanent",
            width: 80,
            collapsible: false,
          },
        },
      });
      header._effectedBy = { leftEdgeSidebar, rightEdgeSidebar };

      expect(header.getSxProps()).toEqual({
        height: {
          xs: 56,
        },
        width: {
          md: "calc(100% - 80px)",
          lg: "calc(100% - (296px + 80px))",
        },
        marginLeft: {
          lg: "296px",
        },
        marginRight: {
          md: "80px",
        },
        zIndex: {
          xs: 1100,
        },
      });
      leftEdgeSidebar.setState({ open: true, collapsed: true });
      header._effectedBy = { leftEdgeSidebar, rightEdgeSidebar };

      expect(header.getSxProps()).toEqual({
        height: {
          xs: 56,
        },
        width: {
          md: "calc(100% - 80px)",
          lg: "calc(100% - (80px + 80px))",
        },
        marginLeft: {
          lg: "80px",
        },
        marginRight: {
          md: "80px",
        },
        zIndex: {
          xs: 1100,
        },
      });
    });
  });
});
