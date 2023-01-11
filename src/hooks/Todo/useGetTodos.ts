import { getTodoRequest } from "../../api/todoFetcher";
import { useQuery } from "react-query";
import { TodoListInitial } from "../../types/todo";

export default function uesGetTodos() {
  return useQuery<TodoListInitial[], Error>(["todoList"], getTodoRequest);
}
