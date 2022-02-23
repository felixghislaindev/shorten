import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type ShortUrl {
    id: String
    newUrl: String
    oldUrl: String!
  }
  type Url {
    oldUrl: String!
  }
  type Query {
    shortenUrls: [ShortUrl!]!
  }
  type Mutation {
    createShortenUrl(url: String!): ShortUrl!
  }
`;
