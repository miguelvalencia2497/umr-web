export interface IAuthUser {
  token: string;
  created_at: number;
  expires_in: number;
  result: { user: IUser };
  role: AuthNames;
}

export interface IUser {
  emailAddress: string;
  firstName: string;
  lastName: string;
  authorityNames: AuthNames[];
}

export enum AuthNames {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  PATIENT = "PATIENT",
}
