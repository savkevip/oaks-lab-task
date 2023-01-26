import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { FormStageValues } from "../utils/types";

const mutation = gql`
  mutation editStage($id: ID!, $title: String!) {
    editStage(_id: $id, title: $title)
  }
`;

export const useEditStage = () =>
  useMutation<boolean, FormStageValues & { id?: string }>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Stage updated.", {
        type: "success",
      }),
    onError: () =>
      toast("Stage not updated.", {
        type: "error",
      }),
  });
