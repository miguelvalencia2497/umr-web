export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  permissions: UserPermissions[];
  groups: UserGroup[];
  status: UserStatus;
};

export enum UserPermissions {
  PHYSICIANS = "physicians",
  ADMINISTRATOR = "administrator",
}

export type UserGroup = {
  id: number;
  name: string;
  address: string;
  permissions: UserPermissions[];
  users: User[];
};

export enum UserStatus {
  ACTIVE = "active",
  PENDING_ACTIVATION = "pending_activation",
  DEACTIVATED = "deactivated",
}
