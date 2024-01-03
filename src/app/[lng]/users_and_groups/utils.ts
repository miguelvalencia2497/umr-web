import { User, UserGroup, UserPermissions } from "./types";

export const defaultGroupsData: UserGroup[] = [
  {
    id: 1,
    name: "St. Luke’s Medical Center",
    address:
      "32nd Street corner 5th Avenue, Rizal Drive, Bonifacio Global City Taguig, Manila, 1634 Philippines",
    permissions: [],
    users: [],
  },
  {
    id: 2,
    name: "Ospital ng Makati",
    address: "Sampaguita St, Taguig, 1218 Metro Manila",
    permissions: [],
    users: [],
  },
  {
    id: 3,
    name: "The Medical City",
    address: "Ortigas Ave, Pasig, Metro Manila.",
    permissions: [],
    users: [],
  },
];

export const defaultUserData: User[] = [
  {
    id: 1,
    email: "tope.mabasa@email.com",
    firstName: "tope",
    lastName: "mabasa",
    status: "active",
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR],
  },
  {
    id: 2,
    email: "juwan.eugenio@email.com",
    firstName: "juwan",
    lastName: "eugenio",
    status: "pending_activation",
    groups: [defaultGroupsData[1], defaultGroupsData[2]],
    permissions: [UserPermissions.PHYSICIANS],
  },
  {
    id: 3,
    email: "gerald.cayabyab@email.com",
    firstName: "gerald",
    lastName: "cayabyab",
    status: "deactivated",
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 4,
    email: "alyssa.sison@email.com",
    firstName: "alyssa",
    lastName: "sison",
    status: "deactivated",
    groups: [defaultGroupsData[1]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 5,
    email: "allan.delacruz@email.com",
    firstName: "allan",
    lastName: "dela cruz",
    status: "deactivated",
    groups: [defaultGroupsData[0], defaultGroupsData[1], defaultGroupsData[2]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
  {
    id: 6,
    email: "migo.valencia@email.com",
    firstName: "migo",
    lastName: "valencia",
    status: "deactivated",
    groups: [defaultGroupsData[0]],
    permissions: [UserPermissions.ADMINISTRATOR, UserPermissions.PHYSICIANS],
  },
];
