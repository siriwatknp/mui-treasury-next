import { createProgram } from "./program";

describe("cli - program", function () {
  const mockClone = jest.fn();
  const DEFAULT_DIR = "mui-treasury";
  const program = createProgram({
    commands: {
      clone: mockClone,
    },
  });
  beforeEach(jest.clearAllMocks);
  describe("version", () => {
    it("can get version", () => {
      const helpInformation = program.helpInformation();

      expect(helpInformation.includes("-v, --version")).toBe(true);
      expect(helpInformation.includes("output the current version")).toBe(true);
    });
  });

  describe("clone", () => {
    it("require at least one source", () => {
      const mockListener = jest.fn();
      program.on("command:clone", mockListener);
      program.parse(["clone", "component-shape"], { from: "user" });
      expect(mockListener).toHaveBeenCalledWith(
        ["component-shape"],
        expect.anything()
      );
    });

    it("can provide multiple sources", () => {
      const mockListener = jest.fn();
      program.on("command:clone", mockListener);
      program.parse(
        ["clone", "component-shape", "style-shape-sticker", "style-shape-2"],
        { from: "user" }
      );
      expect(mockListener).toHaveBeenCalledWith(
        ["component-shape", "style-shape-sticker", "style-shape-2"],
        expect.anything()
      );
    });

    it("has default directory", () => {
      program.parse(["clone", "component-shape"], {
        from: "user",
      });
      expect(mockClone).toHaveBeenCalledWith(
        ["component-shape"],
        { dir: DEFAULT_DIR },
        expect.anything()
      );
    });

    it("use optional -d as destination directory", () => {
      program.parse(["clone", "component-shape", "-d", "temp"], {
        from: "user",
      });
      expect(mockClone).toHaveBeenCalledWith(
        ["component-shape"],
        { dir: "temp" },
        expect.anything()
      );
    });

    it("support only javascript template", () => {
      program.parse(["clone", "component-shape", "-t", "javascript"], {
        from: "user",
      });
      expect(mockClone).toHaveBeenCalledWith(
        ["component-shape"],
        expect.objectContaining({ template: "javascript" }),
        expect.anything()
      );
    });
  });
});
