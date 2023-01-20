import { getTodosRequest } from "../../api/todoFetcher";
import { useQuery } from "react-query";
import { TodoListInitial } from "../../types/todo";

export default function useGetTodo() {
  return useQuery<TodoListInitial[], Error>(["todos"], getTodosRequest);
}
