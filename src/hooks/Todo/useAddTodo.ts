import { useMutation, useQueryClient } from "react-query";
import useSetAlert from "../useSetAlert";
import { ErrorType } from "../../types/error";
import { addTodoRequest } from "../../api/todoFetcher";

export default function useAddTodo() {
  const { setAlertSuccess, setAlertError } = useSetAlert();
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodoRequest, {
    onSuccess: () => {
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
