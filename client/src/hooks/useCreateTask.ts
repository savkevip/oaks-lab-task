import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { FormTaskValues } from "../utils/types";

const mutation = gql`
  mutation createTask($title: String!, $stageId: String!) {
    createTask(title: $title, stageId: $stageId)
  }
`;

export const useCreateTask = () =>
  useMutation<boolean, FormTaskValues>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Task created.", {
        type: "success",
      }),
    onError: () =>
      toast("Task not created.", {
        type: "error",
      }),
  });
