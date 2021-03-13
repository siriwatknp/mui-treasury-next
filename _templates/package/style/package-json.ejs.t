---
to: packages/<%=name%>/package.json
unless_exists: true
---
{
  "name": "@mui-treasury/<%=name%>",
  "version": "0.0.0",
  "description": "mui-treasury | <%=name%>",
  "author": "siriwatknp <siriwatkunaporn@gmail.com>",
  "homepage": "https://github.com/siriwatknp/mui-treasury-next#readme",
  "license": "MIT",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/siriwatknp/mui-treasury-next.git"
  },
  "scripts": {
    "test": "jest --verbose",
    "compile-js": "rimraf javascript && tsc -p tsconfig.js.json",
    "compile-js:watch": "tsc -p tsconfig.js.json --watch",
    "clean": "rimraf dist",
    "build": "yarn clean && tsc -p tsconfig.build.json",
    "prepare-dist": "ts-node ../../scripts/prerelease.ts component",
    "prepublishOnly": "yarn build && yarn prepare-dist"
  },
  "bugs": {
    "url": "https://github.com/siriwatknp/mui-treasury-next/issues"
  }
}
