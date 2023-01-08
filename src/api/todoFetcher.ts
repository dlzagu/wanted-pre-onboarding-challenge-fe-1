import customAxios from "../util/customAxios";
import { TodoFormInitial } from "../types/todo";
import Storage from "../storage";

export async function ItemAddRequest(todoForm: TodoFormInitial) {
  console.log(Storage.getToken(), "sdsd");
  const res = await customAxios.post("/todos", todoForm, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data;
}

export async function getTodoList() {
  const res = await customAxios.get("/todos", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data.data;
}

export async function itemDeleteRequest(todoId: string) {
  const res = await customAxios.delete(`/todos/${todoId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${Storage.getToken()}`,
    },
  });

  return res.data.data;
}
