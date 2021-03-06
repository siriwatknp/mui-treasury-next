---
to: packages/<%=h.toNamePath(name)%>/package.json
unless_exists: true
---
{
  "name": "@mui-treasury/<%=h.changeCase.param(name)%>",
  "version": "0.1.0-alpha.0",
  "description": "mui-treasury | <%=h.changeCase.param(name)%>",
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
    "build": "yarn clean && yarn build:cjs && yarn build:esm && yarn build:types",
    "build:cjs": "cross-env NODE_ENV=production BABEL_ENV=cjs babel --config-file ../../babel-config.js --extensions \".js,.ts,.tsx\" ./src --out-dir ./dist --ignore \"**/*.test.ts,**/*.test.tsx,**/*.stories.tsx\"",
    "build:esm": "cross-env NODE_ENV=production BABEL_ENV=esm babel --config-file ../../babel-config.js --extensions \".js,.ts,.tsx\" ./src --out-dir ./dist/esm --ignore \"**/*.test.ts,**/*.test.tsx,**/*.stories.tsx\"",
    "build:types": "tsc -p tsconfig.build.json",
    "prepare-dist": "ts-node ../../scripts/prerelease.ts hook",
    "prepublishOnly": "yarn prepare-dist"
  },
  "bugs": {
    "url": "https://github.com/siriwatknp/mui-treasury-next/issues"
  },
  "peerDependencies": {
    "react": ">=16.8.0"
  }
}
