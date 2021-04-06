import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { EdgeSidebarOffsetCompiler } from "./EdgeSidebarOffsetCompiler";

describe("EdgeSidebarOffsetCompiler", () => {
  it("return empty if no header", () => {
    const compiler = EdgeSidebarOffsetCompiler({
      edgeSidebar: new EdgeSidebarBuilder({
        config: {
          md: {
            variant: "permanent",
            width: 256,
          },
        },
      }),
    });
    expect(compiler.getSxHeight()).toEqual({});
  });

  it("return correct offset height", () => {
    const compiler = EdgeSidebarOffsetCompiler({
      header: new HeaderBuilder({
        config: {
          xs: {
            position: "sticky",
            height: 56,
            clipped: true,
          },
        },
      }),
      edgeSidebar: new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
          },
        },
      }),
    });
    expect(compiler.getSxHeight()).toEqual({
      height: {
        xs: 56,
        sm: 56,
      },
    });
  });

  it("only has height if clipped", () => {
    const compiler = EdgeSidebarOffsetCompiler({
      header: new HeaderBuilder({
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
      }),
      edgeSidebar: new EdgeSidebarBuilder({
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
      }),
    });
    expect(compiler.getSxHeight()).toEqual({
      height: {
        xs: 56,
        sm: 56,
        md: 0,
        lg: 64,
      },
    });
  });
});
