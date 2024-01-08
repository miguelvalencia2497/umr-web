"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { capitalize, fullName, titleize } from "@/app/utils/string";
import { User } from "../types";
import {
  defaultUserData,
  mapUserStatusToColor,
  mapUserStatusToIcon,
} from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

const UserTable: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "user");
  const [data, setData] = useState(() => [...defaultUserData]);
  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "user",
      cell: (info) => (
        <Box>
          <Text>
            {titleize(
              fullName({
                first_name: info.getValue().firstName,
                last_name: info.getValue().lastName,
              }),
            )}
          </Text>
        </Box>
      ),
      header: () => <span>User</span>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email_address",
      cell: (info) => <Text>{info.getValue()}</Text>,
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor((row) => row.permissions, {
      id: "permissions",
      cell: (info) => {
        return info.getValue().map((permission, i) => (
          <>
            {capitalize(permission)}
            {i !== info.getValue().length - 1 ? ", " : ""}
          </>
        ));
      },
      header: () => <span>Groups</span>,
    }),
    columnHelper.accessor((row) => row.status, {
      id: "status",
      cell: (info) => (
        <HStack p="0">
          <Image
            alt={info.getValue()}
            src={mapUserStatusToIcon(info.getValue())}
            width={20}
            height={20}
          />
          <Text color={mapUserStatusToColor(info.getValue())}>
            {t(`user_statuses.${info.getValue()}`)}
          </Text>
        </HStack>
      ),
      header: () => <span>Status</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => <>{">"}</>,
      header: () => "",
    }),
  ];

  return (
    <SimpleTable<User>
      data={data}
      columns={columns}
      onSearch={() => {}}
      inputSearchProps={{ placeholder: "Search user" }}
      onFilter={() => {}}
    />
  );
};

export default UserTable;
