import { ApolloServer } from "apollo-server";

import { typeDefs } from "./types";
import { resolvers } from "./resolvers";

const port = process.env.PORT || 5050;

new ApolloServer({
  typeDefs,
  resolvers,
}).listen({ port });

console.log(`🚀  Server ready at port: ${port}`);
