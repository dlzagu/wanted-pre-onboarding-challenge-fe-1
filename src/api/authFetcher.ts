import customAxios from "../util/customAxios";
import Storage from "../storage";
import { AuthFormInitial } from "../types/auth";

export async function authRegisterRequest(registerForm: AuthFormInitial) {
  const res = await customAxios.post("/users/create", registerForm, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { message } = res.data;
  return message;
}

export async function authLoginRequest(loginForm: AuthFormInitial) {
  const res = await customAxios.post("/users/login", loginForm, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { token, messagae } = res.data;
  Storage.setToken(token);
  return messagae;
}
