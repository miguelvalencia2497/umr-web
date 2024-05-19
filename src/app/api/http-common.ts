import axios from "axios";
import { getTokenData } from "../contexts/AuthContext";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${getTokenData()}`,
    "Content-type": "application/json",
  },
});
