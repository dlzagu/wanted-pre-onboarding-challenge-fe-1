import { useMutation, useQueryClient } from "react-query";
import useSetAlert from "./useSetAlert";
import { ErrorType } from "../types/error";
import { itemDeleteRequest } from "../api/todoFetcher";

export default function useDeleteItem() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const queryClient = useQueryClient();

  const mutation = useMutation(itemDeleteRequest, {
    onSuccess: () => {
      setAlertSuccess({ success: "삭제성공" });
      queryClient.invalidateQueries(["todoList"]);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
