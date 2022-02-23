import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/`;
export const connectDb = async (): Promise<Database> => {
  const client = await MongoClient.connect(url);
  const database = client.db("main");
  return { shortenUrls: database.collection("shorten_urls") };
};
