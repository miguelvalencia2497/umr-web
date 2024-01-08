import { User, UserGroup, UserPermissions, UserStatus } from "./types";

export const defaultGroupsData: UserGroup[] = [
  {
    id: 1,
    name: "St. Luke’s Medical Center",
    address:
      "32nd Street corner 5th Avenue, Rizal Drive, Bonifacio Global City Taguig, Manila, 1634 Philippines",
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
    users: [],
  },
  {
    id: 2,
    name: "Ospital ng Makati",
    address: "Sampaguita St, Taguig, 1218 Metro Manila",
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
    users: [],
  },
  {
    id: 3,
    name: "The Medical City",
    address: "Ortigas Ave, Pasig, Metro Manila.",
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
    users: [],
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
