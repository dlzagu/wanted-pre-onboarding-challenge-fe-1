import { getTodoRequest } from "../../api/todoFetcher";
import { useQuery } from "react-query";
import { TodoListInitial } from "../../types/todo";

export default function useGetTodos(todoId: string) {
  return useQuery<TodoListInitial, Error>(["todo", todoId], () =>
    getTodoRequest(todoId)
  );
}
