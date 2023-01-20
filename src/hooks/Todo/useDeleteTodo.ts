import { useMutation, useQueryClient } from "react-query";
import useSetAlert from "../useSetAlert";
import { ErrorType } from "../../types/error";
import { deleteTodoRequest } from "../../api/todoFetcher";

export default function useDeleteTodo() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodoRequest, {
    onSuccess: () => {
      setAlertSuccess({ success: "삭제성공" });
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
