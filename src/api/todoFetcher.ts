import customAxios from "../util/customAxios";
import { TodoFormInitial } from "../types/todo";

export async function addTodoRequest(todoForm: TodoFormInitial) {
  const res = await customAxios.post("/todos", todoForm, {});

  return res.data;
}

export async function getTodoRequest() {
  const { data } = await customAxios.get("/todos");

  return data.data;
}

export async function deleteTodoRequest(todoId: string) {
  const { data } = await customAxios.delete(`/todos/${todoId}`, {});

  return data.data;
}

export async function updateTodoRequest({
  todoForm,
  todoId,
}: {
  todoForm: TodoFormInitial;
  todoId: string;
}) {
  const res = await customAxios.put(`/todos/${todoId}`, todoForm, {});

  return res.data;
}
