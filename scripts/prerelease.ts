import { promises as fsp } from "fs";
import cpy from "cpy";
import { set } from "edit-package-json";

const PUBLISH_DIR = "dist";

type PackageType = "cli" | "theme" | "component" | "style";

async function run() {
  // ts-node  prerelease.ts  component
  // 0      | 1            | 2
  const packageType = process.argv[2] as PackageType;

  if (!packageType) {
    throw new Error("arg must not be undefined");
  }

  const file = await fsp.readFile("package.json", "utf8");

  if (packageType === "cli") {
    await Promise.resolve(
      set(file, "bin.mui-treasury", "index.js")
    ).then((result) => fsp.writeFile(`${PUBLISH_DIR}/package.json`, result));
  }
  if (["component", "style", "theme"].includes(packageType)) {
    await Promise.resolve(set(file, "main", "index.js"))
      .then((newFile) => set(newFile, "types", "index.d.ts"))
      .then((newFile) => newFile.replace("dependencies", "peerDependencies"))
      .then((result) => fsp.writeFile(`${PUBLISH_DIR}/package.json`, result));
  }
  await cpy(["README.md", "CHANGELOG.md"], PUBLISH_DIR);
}

run().catch((error) => {
  throw error;
});
