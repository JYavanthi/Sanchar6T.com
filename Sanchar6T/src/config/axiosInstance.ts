import axios from "axios";


export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
    baseURL: "http://198.38.91.204:5001",
  headers: {
    "Content-Type": "application/json",
  },
});
