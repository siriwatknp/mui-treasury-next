import { getPackageStats } from "package-build-stats";

(async function run() {
  try {
    const results = await getPackageStats(
      "@mui-treasury/layout@5.0.0-alpha.3",
      {
        client: "yarn",
      }
    );
    console.log("result", results);
  } catch (error) {
    console.log("error", error);
  }
})();
