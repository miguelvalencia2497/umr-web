import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { UserGroup } from "../types";
import { defaultGroupsData } from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { capitalize, truncate } from "@/app/utils/string";

const GroupTable = () => {
  const [data, setData] = useState(() => [...defaultGroupsData]);

  const columnHelper = createColumnHelper<UserGroup>();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().name}</Text>
          <Text fontWeight="400">{truncate(info.getValue().address, 90)}</Text>
        </Box>
      ),
      header: () => <span>Group name</span>,
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
      header: () => <span>Permissions</span>,
    }),
    columnHelper.accessor((row) => row.users, {
      id: "users",
      cell: (info) => {
        return (
          <Text>
            {info.getValue().length}{" "}
            {info.getValue().length === 1 ? "member" : "members"}
          </Text>
        );
      },
      header: () => <span>Members</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => <>{">"}</>,
      header: () => "",
    }),
  ];

  return (
    <SimpleTable<UserGroup>
      data={data}
      columns={columns}
      onSearch={() => {}}
      inputSearchProps={{ placeholder: "Search group" }}
      onFilter={() => {}}
    />
  );
};

export default GroupTable;
