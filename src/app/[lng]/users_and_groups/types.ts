export type GroupUser = {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  permissions: UserPermissions[];
  groupIds: number[];
  status: UserStatus;
  prc_registration_number: string;
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
  authorityIds: number[];
  members: GroupUser[];
  membersCount: number;
};

export enum UserStatus {
  ACTIVE = "active",
  PENDING_ACTIVATION = "pending_activation",
  DEACTIVATED = "deactivated",
}

export type GroupAuthority = {
  id: number;
  active: boolean;
  authorityDescription: string;
  authorityName: string;
  childStaffAuthorities?: ChildStaffAuthority[];
};

export type ChildStaffAuthority = {
  id: number;
  active: boolean;
  authorityDescription: string;
  authorityName: string;
};
