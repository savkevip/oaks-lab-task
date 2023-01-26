import { gql, useQuery } from "@apollo/client";

import { Stage, StageId } from "../utils/types";

const query = gql`
  query stage($id: ID!) {
    stage(_id: $id) {
      title
    }
  }
`;

export const useStageDetails = (stageId?: StageId) =>
  useQuery<{ stage: Stage }>(query, {
    variables: {
      id: stageId,
    },
    skip: !stageId,
    fetchPolicy: "network-only",
  });
