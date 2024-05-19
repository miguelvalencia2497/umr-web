import { UserStatus } from "../users_and_groups/types";

export interface IAuthUser {
  token: string;
  created_at: number;
  expires_in: number;
  result: { user: IUser };
  role: AuthNames;
}

export interface IUser {
  id: number;
  emailAddress: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  mobileNumber: string;
  prefixName?: string;
  suffixName: string;
  prcNumber: string;
  status: UserStatus;
  groupIds: number[];
  domainId: number;
  domainName: string;
}

export enum AuthNames {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  PATIENT = "PATIENT",
}
