"use client";

import { BoxProps } from "@chakra-ui/react";
import SideBar from "./Sidebar";
import useScreen from "@/app/hooks/useScreen";

type Props = { lng: string } & BoxProps;

const Links = [
  "dashboard",
  "users_and_groups",
  "patients",
  "notification",
  "reports",
];

const SideNavigation: React.FC<Props> = ({ ...props }) => {
  const { isMobile } = useScreen();
  if (isMobile) {
    return null;
  }

  return <SideBar items={Links} {...props} />;
};

export default SideNavigation;
