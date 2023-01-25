export const Stage = `
  type Stage {
    _id: ID!
    title: String!
    createdAt: String!
    tasks: [Task!]
    updatedAt: String
  }

  type Query {
    stages: [Stage!]!
    stage(_id: ID!): Stage!
  }

  type Mutation {
    createStage(title: String!): Boolean!
    editStage(_id: ID!, title: String!): Boolean!
    deleteStage(_id: ID!): Boolean!
  }
`;
