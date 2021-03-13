---
to: packages/<%=name%>/src/<%=h.toName(name)%>.test.tsx
unless_exists: true
---
<%= Name=h.toName(name) %>import React from "react";
import { render } from "@testing-library/react";
import { <%=Name%> } from "./<%=Name%>";

describe("<%= Name %>", () => {
  it("renders without clash", () => {
    expect(() => render(<<%= Name %> />)).not.toThrow()
  })
})
