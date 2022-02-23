import { render, waitFor, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ShortenUrlClipboard } from "./shortenUrlClipboard";
describe("shortenUrlClipboard", () => {
  test("assert shorturl passed is displayed", async () => {
    render(<ShortenUrlClipboard shortenUrl="https://pbid.io/EnIW1stD" />);
    const res = await waitFor(
      () => screen.findByText("https://pbid.io/EnIW1stD"),
      {
        timeout: 3000,
      }
    );
    expect(res).toBeInTheDocument();
  });
});
