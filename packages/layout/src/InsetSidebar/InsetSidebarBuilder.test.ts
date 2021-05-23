import { HeaderBuilder } from "../Header/HeaderBuilder";
import { InsetSidebarBuilder } from "./InsetSidebarBuilder";

describe("InsetSidebarBuilder", () => {
  describe("Root", () => {
    it("provide width and hidden at some breakpoint", () => {
      expect(
        new InsetSidebarBuilder({
          position: "fixed",
          width: { sm: 200, md: 256 },
          hidden: ["xs"],
        }).getSxRoot()
      ).toEqual({
        display: {
          xs: "none",
          sm: "block",
        },
        width: {
          sm: 200,
          md: 256,
        },
      });
    });

    it("hidden some breakpoint", () => {
      expect(
        new InsetSidebarBuilder({
          position: "fixed",
          width: { sm: 200, md: 256 },
          hidden: ["xs", "sm", "xl"],
        }).getSxRoot()
      ).toEqual({
        display: {
          xs: "none",
          md: "block",
          xl: "none",
        },
        width: {
          sm: 200,
          md: 256,
        },
      });
    });
  });

  describe("Body", () => {
    it("absolute position involve header", () => {
      const sidebar = new InsetSidebarBuilder({
        position: "absolute",
        width: 256,
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        width: "100%",
        overflow: "auto",
        height: {
          xs: "calc(100vh - 56px)",
          md: "calc(100vh - 64px)",
          xl: "100vh",
        },
      });
    });

    it("fixed position", () => {
      const sidebar = new InsetSidebarBuilder({
        position: "fixed",
        width: 256,
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.anchor = "left";
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        height: "100%",
        overflowY: "auto",
        marginLeft: "-9999px",
        paddingLeft: "9999px",
        borderRight: "1px solid",
        borderColor: "divider",
      });
    });

    it("sticky position", () => {
      const sidebar = new InsetSidebarBuilder({
        position: "sticky",
        top: {
          xs: 56,
          md: 64,
        },
        width: 256,
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.anchor = "left";
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: {
          xs: 56,
          md: 64,
        },
      });
    });
  });
});
