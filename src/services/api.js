import axios from "axios";

const api = axios.create({
  baseURL: "https://case.nodelabs.dev/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true
});

export default api;