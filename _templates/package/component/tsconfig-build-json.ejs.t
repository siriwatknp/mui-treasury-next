---
to: packages/<%=name%>/tsconfig.build.json
unless_exists: true
---
{
  "extends": "../../tsconfig.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist",
  }
}
