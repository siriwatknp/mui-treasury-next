#!/usr/bin/env node

import got from "got";
import fs from "fs";
import cpy from "cpy";
import rimraf from "rimraf";
import * as tar from "tar";
import { Stream } from "stream";
import { promisify } from "util";
import { createProgram } from "./program";

const pipeline = promisify(Stream.pipeline);

const cloneParams: {
  sources: string[];
  options: { dir?: string; template?: string };
} = {
  sources: [],
  options: {},
};

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
    },
  },
});

program.parse(process.argv);

(async function run() {
  const TEMP = "/mui-treasury-tmp";
  const tempRoot = process.cwd() + TEMP;
  const actualRoot = process.cwd() + `/${cloneParams.options.dir ?? ""}`;
  if (!fs.existsSync(tempRoot)) {
    fs.mkdirSync(tempRoot, { recursive: true });
  }
  await downloadAndExtractCode(tempRoot, cloneParams.sources);
  await Promise.all(
    cloneParams.sources.map((module) =>
      cpy(
        `${tempRoot}/${module}/${cloneParams.options.template ?? "src"}/*`,
        `${actualRoot}/${module}`
      )
    )
  );
  rimraf(tempRoot, (error) => {
    if (error) {
      console.log("error", error);
    }
  });
})();
