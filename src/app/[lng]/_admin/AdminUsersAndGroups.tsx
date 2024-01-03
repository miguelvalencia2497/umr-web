"use client";

import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UserTable from "../users_and_groups/tables/UserTable";
import AdminWrapper from "./AdminWrapper";
import GroupTable from "../users_and_groups/tables/GroupTable";

type Props = {
  lng: string;
};

const AdminUsersAndGroups: React.FC<Props> = ({ lng, ...props }) => {
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
          <TabPanel>
            <UserTable />
          </TabPanel>
          <TabPanel>
            <GroupTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AdminWrapper>
  );
};

export default AdminUsersAndGroups;
