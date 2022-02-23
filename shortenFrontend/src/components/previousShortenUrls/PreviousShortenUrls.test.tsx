import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { PreviousShortenUrls } from "./PreviousShortenUrls";
import { ShortenUrl } from "../../types";
describe("shortenUrlClipboard", () => {
  const mocks: ShortenUrl[] = [
    {
      id: "35353553626",
      newUrl: "https://pbid.io/EnIW1stD",
      oldUrl: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjm_ZiitI",
    },
  ];
  render(<PreviousShortenUrls ShortenUrls={mocks} />);
  test("assert shorturl passed is displayed", async () => {});
});
