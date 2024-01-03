import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { UserGroup } from "../types";
import { defaultGroupsData } from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";

const GroupTable = () => {
  const [data, setData] = useState(() => [...defaultGroupsData]);

  const columnHelper = createColumnHelper<UserGroup>();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().name}</Text>
          <Text>{info.getValue().address}</Text>
        </Box>
      ),
      header: () => <span>Group name</span>,
    }),
    columnHelper.accessor((row) => row.permissions, {
      id: "permissions",
      cell: (info) => {
        return <Text>{info.getValue().length}</Text>;
      },
      header: () => <span>Permissions</span>,
    }),
    columnHelper.accessor((row) => row.users, {
      id: "users",
      cell: (info) => {
        return <Text>{info.getValue().length}</Text>;
      },
      header: () => <span>Users</span>,
    }),
  ];

  return <SimpleTable<UserGroup> data={data} columns={columns} />;
};

export default GroupTable;
