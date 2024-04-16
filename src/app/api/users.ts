import apiInstance from "./http-common";
import { AxiosResponse } from "axios";

export const fetchUsers = async (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/user?page=1&pageSize=5`);
};