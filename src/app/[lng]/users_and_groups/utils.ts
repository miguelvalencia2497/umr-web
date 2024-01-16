import {
  GroupPermissions,
  User,
  UserGroup,
  UserPermissions,
  UserStatus,
} from "./types";

export const defaultGroupsData: UserGroup[] = [
  {
    id: 1,
    name: "Dermatologists",
    description: "Focuses on skin, hair, and nail health.",
    permissions: [
      GroupPermissions.VIEW,
      GroupPermissions.EDIT,
      GroupPermissions.UPLOAD,
    ],
    userCount: 300,
  },
  {
    id: 2,
    name: "Endocrinologists",
    description: "Deals with hormonal disorders and the endocrine system.",
    permissions: [GroupPermissions.VIEW, GroupPermissions.EDIT],
    userCount: 240,
  },
  {
    id: 3,
    name: "Pediatricians",
    description:
      "Specialize in providing medical care for infants, children, and adolescents.",
    permissions: [GroupPermissions.VIEW],
    userCount: 100,
  },
];

export const defaultUserData: User[] = [
  {
    id: 1,
    email: "tope.mabasa@email.com",
    firstName: "tope",
    lastName: "mabasa",
    status: UserStatus.ACTIVE,
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR],
  },
  {
    id: 2,
    email: "juwan.eugenio@email.com",
    firstName: "juwan",
    lastName: "eugenio",
    status: UserStatus.PENDING_ACTIVATION,
    groups: [defaultGroupsData[1], defaultGroupsData[2]],
    permissions: [UserPermissions.PHYSICIANS],
  },
  {
    id: 3,
    email: "gerald.cayabyab@email.com",
    firstName: "gerald",
    lastName: "cayabyab",
    status: UserStatus.DEACTIVATED,
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 4,
    email: "alyssa.sison@email.com",
    firstName: "alyssa",
    lastName: "sison",
    status: UserStatus.DEACTIVATED,
    groups: [defaultGroupsData[1]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 5,
    email: "allan.delacruz@email.com",
    firstName: "allan",
    lastName: "dela cruz",
    status: UserStatus.DEACTIVATED,
    groups: [defaultGroupsData[0], defaultGroupsData[1], defaultGroupsData[2]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 6,
    email: "migo.valencia@email.com",
    firstName: "migo",
    lastName: "valencia",
    status: UserStatus.DEACTIVATED,
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
];

export const mapUserStatusToColor = (status: UserStatus) => {
  switch (status) {
    case UserStatus.ACTIVE:
      return "primary.600";
    case UserStatus.PENDING_ACTIVATION:
      return "warning.200";
    case UserStatus.DEACTIVATED:
      return "gray.200";
    default:
      return "primary.600";
  }
};

export const mapUserStatusToIcon = (status: UserStatus) => {
  switch (status) {
    case UserStatus.ACTIVE:
      return "/icon-positive.svg";
    case UserStatus.PENDING_ACTIVATION:
      return "/icon-warning.svg";
    case UserStatus.DEACTIVATED:
      return "/icon-negative.svg";
    default:
      return "/icon-positive.svg";
  }
};
