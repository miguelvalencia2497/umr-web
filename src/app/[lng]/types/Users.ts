export interface IAuthUser {
  token: string;
  created_at: number;
  expires_in: number;
  result: { user: IUser };
  role?: UserRole;
}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  user_roles: UserRole[];
}

export enum UserRole {
  ADMIN = "admin",
  STAFF = "staff",
  PATIENT = "patient",
}
