import apiInstance from "./http-common";
import { AxiosResponse } from "axios";

export const fetchPatients = async (): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/patient?page=1&pageSize=99`);
};
export const getPatientById = async (id: number): Promise<AxiosResponse> => {
  return apiInstance.get(`/staff/patient/${id}`);
};

export const createPatient = async (values): Promise<AxiosResponse> => {
  return apiInstance.post(`/staff/patient`, {
    ...values,
    password: "test",
    gender: "MALE",
    civilStatus: "MARRIED",
  });
};
