"use client";

import {
  Box,
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import UserTable from "../users_and_groups/tables/UserTable";
import AdminWrapper from "./AdminWrapper";
import GroupTable from "../users_and_groups/tables/GroupTable";
import { useTranslation } from "@/app/i18n/client";
import TextField from "@/app/components/form/TextField";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

type Props = {
  lng: string;
};

const AdminUsersAndGroups: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <AdminWrapper lng={lng}>
      <Tabs
        position="relative"
        variant="unstyled"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <HStack justify={"space-between"} pt={6}>
          <Box>
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
          </Box>
          {tabIndex === 0 && (
            <HStack>
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                  _expanded={{
                    opacity: "0.3",
                  }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <HStack>
                    <Text fontSize={"13px"} mr="2">
                      More
                    </Text>
                    <MdKeyboardArrowDown />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-add-multiple.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"primary.700"}
                    >
                      Add multiple users{" "}
                    </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-deactivate.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"primary.700"}
                    >
                      Deactivate users
                    </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-delete.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>{" "}
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"error.400"}
                    >
                      Delete users
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button fontSize={"13px"} fontWeight={700}>
                Create new user
              </Button>
            </HStack>
          )}
          {tabIndex === 1 && (
            <HStack>
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="1px"
                  _expanded={{
                    opacity: "0.3",
                  }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <HStack>
                    <Text fontSize={"13px"} mr="2">
                      More
                    </Text>
                    <MdKeyboardArrowDown />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-add-multiple.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"primary.700"}
                    >
                      Add multiple groups{" "}
                    </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-deactivate.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"primary.700"}
                    >
                      Suspend groups
                    </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Box width="20px" mr="2">
                      <Image
                        src="/icon-delete.svg"
                        alt="deactivate"
                        width={100}
                        height={100}
                      />
                    </Box>{" "}
                    <Text
                      fontSize={"13px"}
                      fontWeight={400}
                      color={"error.400"}
                    >
                      Delete groups
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button fontSize={"13px"} fontWeight={700}>
                Create new group
              </Button>
            </HStack>
          )}
        </HStack>
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
