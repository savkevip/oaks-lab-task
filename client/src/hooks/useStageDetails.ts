import { gql, useQuery } from "@apollo/client";

import { Stage } from "../utils/types";

const query = gql`
  query stage($id: ID!) {
    stage(_id: $id) {
      title
    }
  }
`;

export const useStageDetails = (stageId?: string) =>
  useQuery<{ stage: Stage }>(query, {
    variables: {
      id: stageId,
    },
    skip: !stageId,
    fetchPolicy: "network-only",
  });
