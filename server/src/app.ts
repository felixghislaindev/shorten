// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import { connectDb } from "./database";

const app = express();
const startServer = async (app: Application) => {
  const db = await connectDb();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  await server.start();
  server.applyMiddleware({ app, path: "/api" });
  const port = process.env.PORT;
  // parsing request body with bodyParser
  app.listen(port, () => {
    console.log(`shorten api running on port: ${port}`);
  });
};
startServer(app);
