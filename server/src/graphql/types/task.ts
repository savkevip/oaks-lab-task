export const Task = `
  type Task {
    _id: ID!
    title: String!
    isDone: Boolean!
    stageId: String!
    createdAt: String!
    updatedAt: String
  }

  type Query {
    task(_id: ID!): Task!
  }

  type Mutation {
    createTask(title: String!, stageId: String!): Boolean!
    editTask(_id: ID!, title: String, stageId: String, isDone: Boolean): Boolean!
    deleteTask(_id: ID!): Boolean!
  }
`;
