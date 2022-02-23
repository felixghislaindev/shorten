export interface ShortenUrl {
  id: string;
  newUrl: string;
  oldUrl: string;
}
export interface ShortenUrls {
  shortenUrls: ShortenUrl[];
}
export interface ShortenUrlVariables {
  url: string;
}
export interface shortenUrlData {
  createShortenUrl: ShortenUrl;
}
