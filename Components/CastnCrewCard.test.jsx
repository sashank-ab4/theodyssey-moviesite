import { render, screen } from "@testing-library/react";
import CastnCrewCard from "./CastnCrewCard";
import { describe, expect, test } from "vitest";

describe("CastnCrewCard", () => {
  test("renders actor name", () => {
    render(
      <CastnCrewCard name="Matt Damon" role="Odysseus" image="test.jpg" />,
    );
    expect(screen.getByText("Matt Damon")).toBeInTheDocument();
  });
  test("renders role correctly", () => {
    render(
      <CastnCrewCard name="Matt Damon" role="Odysseus" image="test.jpg" />,
    );
    expect(screen.getByText("Odysseus")).toBeInTheDocument();
  });
});
