"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { capitalize, fullName, titleize } from "@/app/utils/string";
import { GroupUser, UserGroup } from "../types";
import {
  defaultUserData,
  mapUserStatusToColor,
  mapUserStatusToIcon,
} from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import useScreen from "@/app/hooks/useScreen";
import { useQuery } from "react-query";
import { getGroupUsersByGroupId } from "@/app/api/groups";
import GroupUserModal from "../groups/[id]/users/GroupUserModal";

const GroupUserTable: React.FC<{ group?: UserGroup; lng: string }> = ({
  group,
  lng,
}) => {
  const { t } = useTranslation(lng, "group");
  const columnHelper = createColumnHelper<GroupUser>();
  const { isMobile } = useScreen();
  const [selectedUser, setSelectedUser] = useState<GroupUser | undefined>();
  const userModalState = useDisclosure();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "user",
      cell: (info) => (
        <Box>
          <Text fontWeight={700}>
            {titleize(
              fullName({
                first_name: info.getValue().firstName,
                last_name: info.getValue().lastName,
              }),
            )}
          </Text>
          <Text>{info.getValue().emailAddress}</Text>
        </Box>
      ),
      header: () => <span>{capitalize(t("name_and_email_address"))}</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "added_by",
      cell: (info) => <Text></Text>,
      header: () => <span>{capitalize(t("added_by"))}</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => (
        <HStack justify={"flex-end"} pr="4">
          <Button
            variant={"ghost"}
            onClick={() => {
              setSelectedUser(info.getValue());
              userModalState.onOpen();
            }}
          >
            {">"}
          </Button>
        </HStack>
      ),
      header: () => "",
    }),
  ];

  const mobileColumns = [
    columnHelper.accessor((row) => row, {
      id: "user",
      cell: (info) => (
        <VStack alignItems={"flex-start"}>
          <HStack>
            <Text>
              {titleize(
                fullName({
                  first_name: info.getValue().firstName,
                  last_name: info.getValue().lastName,
                }),
              )}
            </Text>
            <Image
              alt={info.getValue().status}
              src={mapUserStatusToIcon(info.getValue().status)}
              width={20}
              height={20}
            />
          </HStack>
          <HStack>
            <Image
              alt={info.getValue().status}
              src={"/icon-email.svg"}
              width={20}
              height={20}
            />
            <Text fontWeight="400" color="primary.500">
              {info.getValue().emailAddress}
            </Text>
          </HStack>
        </VStack>
      ),
      header: () => "",
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => <>{">"}</>,
      header: () => "",
    }),
  ];

  return (
    <>
      <SimpleTable<GroupUser>
        data={group?.members || []}
        columns={columns}
        mobileColumns={mobileColumns}
        onSearch={() => {}}
        inputSearchProps={{ placeholder: isMobile ? "Search" : "Search user" }}
        onFilter={() => {}}
        hideHeaders={isMobile}
      />
      <GroupUserModal
        {...userModalState}
        user={selectedUser}
        group={group}
        lng={lng}
      >
        {""}
      </GroupUserModal>
    </>
  );
};

export default GroupUserTable;
