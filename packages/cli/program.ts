import commander from "commander";
import packageJson from "./package.json";

export type Params = {
  commands: {
    clone?: (
      sources: string[],
      options: { dir: string; template?: string },
      command: any
    ) => void | Promise<void>;
  };
};

function parseTemplate(value: string) {
  if (value !== "javascript") {
    throw new commander.InvalidOptionArgumentError(
      'only "javascript" is supported via template, pass nothing to use typescript template'
    );
  }
  return value;
}

export const createProgram = ({ commands: { clone } }: Params) => {
  const program = new commander.Command(packageJson.name).version(
    packageJson.version,
    "-v, --version",
    "output the current version"
  );

  program
    .command("clone <sources...>")
    .description("clone components/styles to your config directory")
    .option("-d, --dir [directory]", "destination directory", "mui-treasury")
    .option(
      "-t, --template [template]",
      "template of the files, typescript (default) | javascript",
      parseTemplate
    )
    .action((sources, options, command) => {
      clone?.(sources, options, command);
    });

  return program;
};
