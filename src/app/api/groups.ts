import { AxiosResponse } from "axios";
import apiInstance from "./http-common";

export const createGroup = (values): Promise<AxiosResponse> => {
  return apiInstance.post(`/staff/group`, values);
};

export const getGroupsByDomain = (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/domain/1/group?page=1&pageSize=5`);
};
