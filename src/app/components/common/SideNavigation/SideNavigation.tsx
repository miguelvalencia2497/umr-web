"use client";

import { BoxProps } from "@chakra-ui/react";
import SideBar from "./Sidebar";

type Props = { lng: string } & BoxProps;

const Links = [
  "dashboard",
  "users_and_groups",
  "patients",
  "notification",
  "reports",
];

const SideNavigation: React.FC<Props> = ({ ...props }) => {
  return <SideBar items={Links} {...props} />;
};

export default SideNavigation;
