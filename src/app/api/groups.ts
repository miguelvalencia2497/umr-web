import { AxiosResponse } from "axios";
import apiInstance from "./http-common";
import { GroupFormState } from "../[lng]/_staff/StaffGroupsCreate";

export const createGroup = (
  values: GroupFormState,
  domainName?: string,
): Promise<AxiosResponse> => {
  return apiInstance.post(`/staff/group`, {
    ...values,
    domainName: domainName,
  });
};

export const getGroupsByDomain = (
  domainId?: number,
): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/domain/${domainId}/group?page=1&pageSize=5`);
};

export const getGroupById = (id?: number): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/group/${id}`);
};

export const getGroupsUsers = (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/user?page=1&pageSize=5`);
};
