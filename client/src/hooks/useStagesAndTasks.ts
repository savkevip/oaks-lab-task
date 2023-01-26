import { gql, useQuery } from "@apollo/client";
import { Stage } from "../utils/types";

const query = gql`
  query stages {
    stages {
      _id
      title
      createdAt
      updatedAt
      tasks {
        _id
        title
        isDone
        createdAt
        updatedAt
      }
    }
  }
`;

export const useStagesAndTasks = () => useQuery<{ stages: Stage[] }>(query);
