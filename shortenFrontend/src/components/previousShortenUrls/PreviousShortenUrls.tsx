import React from "react";
import { ShortenUrl } from "../../types";
export const PreviousShortenUrls = ({
  ShortenUrls,
}: {
  ShortenUrls: ShortenUrl[];
}) => {
  return (
    <div>
      {ShortenUrls.reverse().map((url, i) => (
        <div className="text-center" key={i}>
          <p className="text-white mb-2 text-lg">{url.newUrl}</p>
        </div>
      ))}
    </div>
  );
};
