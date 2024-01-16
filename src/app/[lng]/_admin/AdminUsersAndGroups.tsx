"use client";

import {
  Box,
  Button,
  HStack,
  Input,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import UserTable from "../users_and_groups/tables/UserTable";
import AdminWrapper from "./AdminWrapper";
import GroupTable from "../users_and_groups/tables/GroupTable";
import { useTranslation } from "@/app/i18n/client";
import TextField from "@/app/components/form/TextField";

type Props = {
  lng: string;
};

const AdminUsersAndGroups: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng);
  return (
    <AdminWrapper lng={lng}>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Users</Tab>
          <Tab>Groups</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="4px"
          bg="primary.700"
          borderRadius="5px"
        />
        <TabPanels>
          <TabPanel p="0" maxW={"100%"}>
            <UserTable lng={lng} />
          </TabPanel>
          <TabPanel p="0" maxW={"100%"}>
            <GroupTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AdminWrapper>
  );
};

export default AdminUsersAndGroups;
