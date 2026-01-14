import api from "../api";

export async function LoginRequest(payload) {
  const res = await api.post("/users/login", payload);
  return res.data;
}

export async function RegisterRequest(payload) {
  const res = await api.post("/users/register", payload);
  return res.data;
}

export async function LogoutRequest() {
  const res = await api.post("/users/logout");
  return res.data;
}

export async function GetProfileRequest() {
  const res = await api.get("/users/profile");
  return res.data;
}