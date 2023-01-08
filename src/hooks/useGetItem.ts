import { getTodoList } from "../api/todoFetcher";
import { useQuery } from "react-query";
import { TodoListInitial } from "../types/todo";

export default function useGetItem() {
  return useQuery<TodoListInitial[], Error>(["todoList"], getTodoList);
}
