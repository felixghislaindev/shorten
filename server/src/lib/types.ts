import { Collection, ObjectId } from "mongodb";
export interface ShortenUrl {
  _id: ObjectId;
  newUrl: string;
  oldUrl: string;
}

export interface Database {
  shortenUrls: Collection<ShortenUrl>;
}
