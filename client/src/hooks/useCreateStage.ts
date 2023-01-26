import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { FormStageValues } from "../utils/types";

const mutation = gql`
  mutation createStage($title: String!) {
    createStage(title: $title)
  }
`;

export const useCreateStage = () =>
  useMutation<boolean, FormStageValues>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Stage created.", {
        type: "success",
      }),
    onError: () =>
      toast("Stage not created.", {
        type: "error",
      }),
  });
