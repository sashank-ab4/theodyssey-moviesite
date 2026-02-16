import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "../Components/Navbar";
describe("Navbar", () => {
  test("Renders Title Name", () => {
    render(<Navbar title="The Odyssey" />);
    expect(screen.getByText("The Odyssey")).toBeInTheDocument();
  });
  test("Opens Menu when clicked", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", {
      name: /Open-Menu/i,
    });
    expect(button).toBeInTheDocument();
  });
});
