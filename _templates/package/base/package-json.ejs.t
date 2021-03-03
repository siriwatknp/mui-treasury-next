---
to: packages/<%=name%>/package.json
unless_exists: true
---
{
  "name": "@mui-treasury/<%=name%>",
  "version": "0.0.0-development.0",
  "description": "> TODO: description",
  "author": "siriwatknp <siriwatkunaporn@gmail.com>",
  "homepage": "https://github.com/siriwatknp/mui-treasury-next#readme",
  "license": "ISC",
  "main": "dist/index.js",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/siriwatknp/mui-treasury-next.git"
  },
  "scripts": {
    "test": "jest --verbose",
    "build": "rimraf dist && tsc -p tsconfig.build.json"
  },
  "bugs": {
    "url": "https://github.com/siriwatknp/mui-treasury-next/issues"
  },
  "peerDependencies": {
    "@material-ui/core": ">=4"
  }
}
