---
to: stories/layout/<%=category%>/index.ts
inject: true
after: export default
skip_if: <%=name%>
---
  <%=name%>: React.lazy(() => import('./<%=name%>')),