import { Query as stageQuery, Mutation as stageMutation } from "./stage";
import { Query as taskQuery, Mutation as taskMutation } from "./task";

export const resolvers = {
  Query: {
    ...stageQuery,
    ...taskQuery,
  },
  Mutation: {
    ...stageMutation,
    ...taskMutation,
  },
};
