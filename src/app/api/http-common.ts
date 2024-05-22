"use client";
import axios from "axios";

const token =
  global?.window !== undefined ? localStorage?.getItem("authToken") : "";
export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
});
