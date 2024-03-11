export interface IAuthUser {
  token: string;
  created_at: number;
  expires_in: number;
  result: { user: IUser };
}

export interface IUser {
  emailAddress: string;
  firstName: string;
  lastName: string;
  authorityNames: AuthNames[];
}

export enum AuthNames {
  ADMIN = "admin",
  STAFF = "staff",
  PATIENT = "patient",
}
