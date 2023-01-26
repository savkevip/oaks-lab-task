import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { FormTaskValues } from "../utils/types";

const mutation = gql`
  mutation editTask(
    $id: ID!
    $title: String
    $isDone: Boolean
    $stageId: String
  ) {
    editTask(_id: $id, title: $title, isDone: $isDone, stageId: $stageId)
  }
`;

export const useEditTask = () =>
  useMutation<boolean, FormTaskValues & { id?: string }>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Task updated.", {
        type: "success",
      }),
    onError: () =>
      toast("Task not updated.", {
        type: "error",
      }),
  });
