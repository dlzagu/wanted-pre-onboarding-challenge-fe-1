import customAxios from "../util/customAxios";
import { AuthFormInitial } from "../types/auth";

export async function authRegisterRequest(registerForm: AuthFormInitial) {
  const res = await customAxios.post("/users/create", registerForm, {});
  const { message } = res.data;
  return message;
}

export async function authLoginRequest(loginForm: AuthFormInitial) {
  const res = await customAxios.post("/users/login", loginForm, {});
  const { messagae } = res.data;

  return messagae;
}
