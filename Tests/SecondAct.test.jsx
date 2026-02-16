import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SecondAct from "../Components/SecondAct";

vi.mock("../Hooks/useMovieDetails", () => ({
  default: () => ({
    movie: {
      title: "The Odyssey",
      tagline: "An epic journey",
      genres: [],
      overview: "Test overview",
    },
    loading: false,
    error: null,
  }),
}));

describe("SecondAct", () => {
  test("Opens trailer modal when button clicked", async () => {
    render(<SecondAct />);

    const button = screen.getByRole("button", {
      name: /watch trailer/i,
    });

    await userEvent.click(button);

    const iframe = await screen.findByTitle("Movie Trailer");
    expect(iframe).toBeInTheDocument();
  });
});
