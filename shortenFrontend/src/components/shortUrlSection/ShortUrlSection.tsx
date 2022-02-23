import React, { useState } from "react";
import { server, useQuery } from "../../lib/api";
import {
  ShortenUrls,
  ShortenUrl,
  shortenUrlData,
  ShortenUrlVariables,
} from "../../types";
import { ShortenUrlClipboard, PreviousShortenUrls } from "../../components";

export const ShortUrlSection = () => {
  const SHORTEN_URLS = `
  query ShortenUrls {
  shortenUrls {
    id
    newUrl
    oldUrl
  }
}
`;
  const SHORT_URL = `
 mutation CreateShortenUrl($url: String!) {
  createShortenUrl(url: $url) {
    id
    oldUrl
    newUrl
  }
}
`;
  const [shortUrl, setShortUrl] = useState<ShortenUrl | null>(null);
  const [url, setUrl] = useState("");
  const [validUrlErrorMsg, setValidUrlErrorMsg] = useState("");

  const { data, refetch } = useQuery<ShortenUrls>(SHORTEN_URLS);
  const allShortenUrls = data ? data.shortenUrls : null;
  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
  let shortenUrl = "";
  if (shortUrl) {
    shortenUrl = shortUrl.newUrl;
  }
  const fetchShort = async () => {
    const expression =
      // eslint-disable-next-line no-useless-escape
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    const isValidUrl = new RegExp(expression);

    if (url.match(isValidUrl)) {
      try {
        const { data } = await server.fetch<
          shortenUrlData,
          ShortenUrlVariables
        >({
          query: SHORT_URL,
          variables: {
            url,
          },
        });
        setShortUrl(data.createShortenUrl);
        refetch();
      } catch (error) {
        return getErrorMessage(error);
      }
    } else {
      setValidUrlErrorMsg("Please provide a valid url");
      setTimeout(() => {
        setValidUrlErrorMsg("");
      }, 3000);
    }
  };

  return (
    <div className="w-full text-center mb-6">
      <input
        className="px-4 py-2 w-4/12 rounded-tl-lg rounded-bl-lg 
         focus:outline-none focus:ring-blue-500 focus:ring-1"
        type="text"
        placeholder="Shorten your url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />

      <button
        className="bg-btn text-wite py-2 px-4 rounded-tr-lg rounded-br-lg font-medium text-md"
        onClick={() => fetchShort()}
      >
        Shorten URL
      </button>

      <div className="flex flex-col items-center justify-center mt-4 w-full">
        {validUrlErrorMsg && (
          <p
            data-testid="valid-url-error-msg"
            className={`text-white mb-2 ${
              validUrlErrorMsg ? "elementToFadeInAndOut " : ""
            }`}
          >
            {validUrlErrorMsg}
          </p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <ShortenUrlClipboard shortenUrl={shortenUrl} />
        <div className="PreviousShortenUrls">
          {allShortenUrls && (
            <PreviousShortenUrls ShortenUrls={allShortenUrls} />
          )}
        </div>
      </div>
    </div>
  );
};
