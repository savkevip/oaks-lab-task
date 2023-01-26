import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const mutation = gql`
  mutation deleteStage($id: ID!) {
    deleteStage(_id: $id)
  }
`;

export const useDeleteStage = () =>
  useMutation<boolean, { id?: string }>(mutation, {
    refetchQueries: ["stages"],
    onCompleted: () =>
      toast("Stage deleted.", {
        type: "success",
      }),
    onError: () =>
      toast("Stage not deleted.", {
        type: "error",
      }),
  });
