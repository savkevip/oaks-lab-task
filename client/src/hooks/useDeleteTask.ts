import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const mutation = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(_id: $id)
  }
`;

export const useDeleteTask = () =>
  useMutation<boolean, { id?: string }>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Task deleted.", {
        type: "success",
      }),
    onError: () =>
      toast("Task not deleted.", {
        type: "error",
      }),
  });
