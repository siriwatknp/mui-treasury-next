---
to: packages/<%=name%>/src/index.ts
unless_exists: true
---
export * from "./<%=h.toName(name)%>";
