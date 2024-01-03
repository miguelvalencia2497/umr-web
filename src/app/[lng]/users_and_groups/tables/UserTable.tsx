import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { fullName } from "@/app/utils/string";
import { User } from "../types";
import { defaultUserData } from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";

const UserTable = () => {
  const [data, setData] = useState(() => [...defaultUserData]);

  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "user",
      cell: (info) => (
        <Box>
          <Text>
            {fullName({
              first_name: info.getValue().firstName,
              last_name: info.getValue().lastName,
            })}
          </Text>
          <Text>{info.getValue().email}</Text>
        </Box>
      ),
      header: () => <span>User</span>,
    }),
    columnHelper.accessor((row) => row.groups, {
      id: "groups",
      cell: (info) => {
        const groups = info.getValue();
        return (
          <Text>
            {groups?.[0]?.name}
            {groups?.length > 1 ? ` +${groups.length - 1} more` : ""}
          </Text>
        );
      },
      header: () => <span>Groups</span>,
    }),
    columnHelper.accessor((row) => row.permissions, {
      id: "permissions",
      cell: (info) => {
        return info.getValue().map((permission, i) => (
          <>
            {permission}
            {i !== info.getValue().length - 1 ? ", " : ""}
          </>
        ));
      },
      header: () => <span>Permissions</span>,
    }),
    columnHelper.accessor((row) => row.status, {
      id: "status",
      cell: (info) => (
        <>
          {info.getValue()} {">"}
        </>
      ),
      header: () => <span>Status</span>,
    }),
  ];

  return <SimpleTable<User> data={data} columns={columns} />;
};

export default UserTable;
