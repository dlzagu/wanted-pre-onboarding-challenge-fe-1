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
