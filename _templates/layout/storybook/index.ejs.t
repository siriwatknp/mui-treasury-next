---
to: stories/layout/<%=category%>/index.ts
inject: true
after: Pages
skip_if: <%=name%>
---
  <%=name%>: React.lazy(() => import('./<%=name%>')),