#!/usr/bin/env node

import got from "got";
import fs from "fs";
import cpy from "cpy";
import chalk from "chalk";
import rimraf from "rimraf";
import * as tar from "tar";
import { Stream } from "stream";
import { promisify } from "util";
import { CloneOptions, createProgram } from "./program";

const pipeline = promisify(Stream.pipeline);

const TEMPLATE_FOLDER_MAP = {
  typescript: "src",
  javascript: "javascript",
};
const MUI_TREASURY_CONFIG_FILE = "mui-treasury.config.js";
const DEFAULT_CONFIG = {
  dir: "src/mui-treasury",
  template: "typescript",
  storybook: true,
  test: true,
} as const;
const CONFIG_FILE_TEMPLATE = `module.exports = {
  dir: "${DEFAULT_CONFIG.dir}",
  template: "${DEFAULT_CONFIG.template}",
  storybook: ${DEFAULT_CONFIG.storybook},
  test: ${DEFAULT_CONFIG.test},
};
`;

const cloneParams: {
  sources: string[];
  options: CloneOptions | undefined;
} = {
  sources: [],
  options: undefined,
};

function getConfigFile(overrides?: Partial<CloneOptions>) {
  try {
    const config: CloneOptions = require(`${process.cwd()}/${MUI_TREASURY_CONFIG_FILE}`);
    console.log(chalk.blue("using config from mui-treasury.config.js"));
    return { ...config, ...overrides };
  } catch (error) {
    console.log(chalk.blue("config file not found, use default config"));
    console.log(
      chalk.blue('{ dir: "src/mui-treasury", storybook: true, test: true }')
    );
  }
  return { ...DEFAULT_CONFIG, ...overrides };
}

function downloadAndExtractCode(
  root: string,
  sources: string[]
): Promise<void> {
  return pipeline(
    got.stream(
      "https://codeload.github.com/siriwatknp/mui-treasury-next/tar.gz/main"
    ),
    tar.extract(
      { cwd: root, strip: 2 },
      sources.map((src) => `mui-treasury-next-main/packages/${src}`)
    )
  );
}

// import checkForUpdate from "update-check";
// const update = checkForUpdate(packageJson).catch(() => null)

const program = createProgram({
  commands: {
    clone: (sources, options) => {
      cloneParams.sources = sources;
      cloneParams.options = options;
      if (cloneParams.options.dir && !cloneParams.options.dir.startsWith("/")) {
        cloneParams.options.dir = `/${cloneParams.options.dir}`;
      }
    },
    init: () => {
      fs.writeFile(MUI_TREASURY_CONFIG_FILE, CONFIG_FILE_TEMPLATE, function (
        err
      ) {
        if (err) throw err;
        console.log(chalk.green(`${MUI_TREASURY_CONFIG_FILE} is created! 🎉`));
      });
    },
  },
});

program.parse(process.argv);

async function runCloneCommand() {
  const config = getConfigFile(cloneParams.options);
  const TEMP = "/mui-treasury-tmp";
  const tempRoot = process.cwd() + TEMP;
  const actualRoot = process.cwd() + config.dir;
  if (!fs.existsSync(tempRoot)) {
    fs.mkdirSync(tempRoot, { recursive: true });
  }
  console.log(chalk.yellow('start cloning...'))
  await downloadAndExtractCode(tempRoot, cloneParams.sources);
  const excludedFiles = [
    ...(!config.storybook ? [`!${tempRoot}/**/*.stories.*`] : []),
    ...(!config.test ? [`!${tempRoot}/**/*.test.*`] : []),
  ];
  console.log(chalk.yellow('•'))
  await Promise.all(
    cloneParams.sources.map((module) =>
      cpy(
        [
          // default template is typescript (ts codes live in "src" folder)
          `${tempRoot}/${module}/${TEMPLATE_FOLDER_MAP[config.template]}/*`,
          ...excludedFiles,
        ],
        `${actualRoot}/${module}`
      )
    )
  );

  console.log(chalk.yellow('•'))
  // clean up temp folder
  rimraf(tempRoot, (error) => {
    if (error) throw error;
  });
  console.log(chalk.green('✅ cloned successfully!'))
}

if (cloneParams.sources.length) {
  runCloneCommand().catch((error) => {
    throw error;
  });
}
