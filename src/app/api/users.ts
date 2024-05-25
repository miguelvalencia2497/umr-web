import apiInstance from "./http-common";
import { AxiosResponse } from "axios";

export const fetchUsers = async (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/user?page=1&pageSize=5`);
};

export const fetchUserReports = async (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/domain/user/report`);
};

export const createUser = async (values): Promise<AxiosResponse> => {
  return apiInstance.post(`/staff/user/register`, {
    ...values,
  });
};
