import { gql, useQuery } from "@apollo/client";

import { Task } from "../utils/types";

const query = gql`
  query task($id: ID!) {
    task(_id: $id) {
      title
      isDone
      updatedAt
      createdAt
      stageId
    }
  }
`;

export const useTaskDetails = (taskId?: string) =>
  useQuery<{ task: Task }>(query, {
    variables: {
      id: taskId,
    },
    skip: !taskId,
    fetchPolicy: "network-only",
  });
