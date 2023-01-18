import { useMutation, useQueryClient } from "react-query";
import useSetAlert from "../useSetAlert";
import { ErrorType } from "../../types/error";
import { updateTodoRequest } from "../../api/todoFetcher";

export default function useUpdateTodo() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodoRequest, {
    onSuccess: () => {
      setAlertSuccess({ success: "수정성공" });
      queryClient.invalidateQueries(["todoList"]);
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
