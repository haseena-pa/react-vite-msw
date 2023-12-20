import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./app";

describe("App component", () => {
  it("testing the app component render", () => {
    render(<App />);
    const text = screen.getByText("First App");
    expect(text).toBeVisible();
  });
});
