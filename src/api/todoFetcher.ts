import customAxios from "../util/customAxios";
import { TodoFormInitial } from "../types/todo";
import Storage from "../storage";

export async function addTodoRequest(todoForm: TodoFormInitial) {
  const res = await customAxios.post("/todos", todoForm, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data;
}

export async function getTodoRequest() {
  const res = await customAxios.get("/todos", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data.data;
}

export async function deleteTodoRequest(todoId: string) {
  const res = await customAxios.delete(`/todos/${todoId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data.data;
}
