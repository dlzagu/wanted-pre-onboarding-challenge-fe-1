import { useMutation, useQueryClient } from "react-query";
import useSetAlert from "./useSetAlert";
import { ErrorType } from "../types/error";
import { ItemAddRequest } from "../api/todoFetcher";

export default function useAddItem() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const queryClient = useQueryClient();

  const mutation = useMutation(ItemAddRequest, {
    onSuccess: (data) => {
      setAlertSuccess({ success: "작성성공" });
      queryClient.invalidateQueries(["todoList"]);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
