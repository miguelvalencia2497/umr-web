export type GroupUser = {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  permissions: UserPermissions[];
  groupIds: number[];
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
  groupName: string;
  notes: string;
  authorities: GroupPermissions[];
  userCount: number;
};

export enum UserStatus {
  ACTIVE = "active",
  PENDING_ACTIVATION = "pending_activation",
  DEACTIVATED = "deactivated",
}
