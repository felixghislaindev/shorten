import { render, waitFor, screen } from "@testing-library/react";
import { ShortUrlSection } from "./ShortUrlSection";
import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { gql } from "@apollo/client";
import { MockedProvider } from "@apollo/react-testing";
jest.mock("../../lib/api", () => ({
  server: {
    fetch: jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: {
          createShortenUrl: {
            id: "6212d5a231406bd9b12056a2",
            newUrl: "https://pbid.io/EnIW1stD",
            oldUrl:
              "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjm_ZiitI",
          },
        },
      })
    ),
  },
  useQuery: () => {
    return [
      {
        id: "6212d5a231406bd9b12056a2",
        newUrl: "https://pbid.io/EnIW1stD",
        oldUrl: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjm_ZiitI",
      },
    ];
  },
}));

const allShortenMocks = {
  request: {
    query: gql`
      query ShortenUrls {
        shortenUrls {
          id
          newUrl
          oldUrl
        }
      }
    `,
    variables: {},
  },
  result: {
    data: [
      {
        id: "6212d5a231406bd9b12056a2",
        newUrl: "https://pbid.io/EnIW1stD",
        oldUrl: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjm_ZiitI",
      },
    ],
  },
};
describe("Filter function", () => {
  test("it should show short urls", () => {
    // actual test
  });

  test("it should show short url", async () => {
    render(
      <MockedProvider mocks={[allShortenMocks]} addTypename={false}>
        <ShortUrlSection />
      </MockedProvider>
    );
    userEvent.type(
      screen.getByRole("textbox"),
      "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjm_ZiitI"
    );
    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByTestId("short-url")).toBeInTheDocument();
    });
  });
  test("it renders an empty search input on initial render", async () => {
    render(
      <MockedProvider mocks={[allShortenMocks]}>
        <ShortUrlSection />
      </MockedProvider>
    );
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
  test("it render error msg if url is invalid", async () => {
    render(
      <MockedProvider mocks={[allShortenMocks]}>
        <ShortUrlSection />
      </MockedProvider>
    );
    userEvent.type(screen.getByRole("textbox"), "htt://www.google.com");
    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.getByTestId("valid-url-error-msg")).toBeInTheDocument();
    });
  });
});
