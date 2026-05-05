import axios from "axios";


export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://sanchar6t.com",
  headers: {
    "Content-Type": "application/json",
  },
});
