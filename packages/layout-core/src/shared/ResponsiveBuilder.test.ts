import { ResponsiveBuilder } from "./ResponsiveBuilder";

describe("ResponsiveBuilder", () => {
  describe("getSxDisplay", () => {
    it("config start at xs", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: "anything",
          lg: "anything",
        },
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "block",
      });
    });
    it("config start at md", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
      });
    });

    it("hidden all", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: true,
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
      });
    });

    it("hidden some", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["lg"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
        lg: "none",
        xl: "block",
      });
    });

    it("hidden on valid breakpoint", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["md"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        lg: "block",
      });
    });

    it("hidden between valid breakpoint", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["sm", "lg"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
        lg: "none",
        xl: "block",
      });
    });
  });
});
