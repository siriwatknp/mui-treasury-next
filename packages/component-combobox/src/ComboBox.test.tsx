import React from "react";
import { render } from "@testing-library/react";
import { ComboBox } from "./ComboBox";

describe("ComboBox", () => {
  it("renders without clash", () => {
    expect(() => render(<ComboBox />)).not.toThrow();
  });
});
