export interface IAuthUser {
  access_token: string;
  created_at: number;
  expires_in: number;
  result: { user: IUser };
}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  user_roles: UserRole[];
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
