import { IResolvers } from "@graphql-tools/utils";
import { connectDb } from "../database";
import { customAlphabet } from "nanoid";
import { ShortenUrl, Database } from "../lib/types";
import { ObjectId } from "mongodb";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0987654321", 8);
const prepare = (o: any) => {
  o._id = o._id.toString();
  return o;
};
export const resolvers: IResolvers = {
  Query: {
    shortenUrls: async (
      _root: undefined,
      // eslint-disable-next-line @typescript-eslint/ban-types
      _args: {},
      { db }: { db: Database }
    ) => {
      const result = await db.shortenUrls.find({}).toArray();
      return result.map((res) => ({ id: new ObjectId(res._id), ...res }));
    },
  },
  Mutation: {
    createShortenUrl: async (_root: undefined, { url }: { url: string }) => {
      const db = await connectDb();
      const shortUrl: ShortenUrl = {
        _id: new ObjectId(),
        newUrl: `https://pbid.io/${nanoid(8)}`,
        oldUrl: url,
      };
      try {
        const foundUrl = await db.shortenUrls.findOne({ oldUrl: url });
        if (foundUrl) {
          const { _id, oldUrl, ...other } = prepare(foundUrl);
          return { id: new ObjectId(_id), oldUrl, ...other };
        } else {
          const res = await db.shortenUrls.insertOne(shortUrl);
          const { _id, ...other } = prepare(
            await db.shortenUrls.findOne({ _id: res.insertedId })
          );
          return { id: new ObjectId(_id), ...other };
        }
      } catch (error) {
        return error.message;
      }
    },
  },
};
