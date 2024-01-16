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

export enum GroupPermissions {
  VIEW = "view",
  EDIT = "edit",
  UPLOAD = "upload",
}

export type UserGroup = {
  id: number;
  name: string;
  description: string;
  permissions: GroupPermissions[];
  userCount: number;
};

export enum UserStatus {
  ACTIVE = "active",
  PENDING_ACTIVATION = "pending_activation",
  DEACTIVATED = "deactivated",
}
