import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { UserGroup } from "../types";
import { defaultGroupsData } from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { capitalize, truncate } from "@/app/utils/string";
import useScreen from "@/app/hooks/useScreen";
import { useQuery } from "react-query";
import { getGroupsByDomain } from "@/app/api/groups";

const GroupTable = () => {
  const [data, setData] = useState(() => [...defaultGroupsData]);
  const columnHelper = createColumnHelper<UserGroup>();
  const { isMobile } = useScreen();

  const {
    data: groups,
    error,
    isLoading,
  } = useQuery("user", getGroupsByDomain);

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().name}</Text>
          <Text fontWeight="400">
            {info.getValue().description.length > 90
              ? truncate(info.getValue().description, 90)
              : info.getValue().description}
          </Text>
        </Box>
      ),
      header: () => <span>Group name</span>,
    }),
    columnHelper.accessor((row) => row.permissions, {
      id: "permissions",
      cell: (info) => {
        return info.getValue().map((permission, i) => (
          <>
            {info.getValue().length > 1 && i === info.getValue().length - 1
              ? "and "
              : ""}
            {i === 0 ? capitalize(permission) : permission}
            {i !== info.getValue().length - 1 ? ", " : ""}
          </>
        ));
      },
      header: () => <span>Permissions</span>,
    }),
    columnHelper.accessor((row) => row.userCount, {
      id: "users",
      cell: (info) => {
        return (
          <Text>
            {info.getValue()} {info.getValue() === 1 ? "member" : "members"}
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

  const mobileColumns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().name}</Text>
          <Text fontWeight="400">
            {truncate(info.getValue().description, 40)}
          </Text>
        </Box>
      ),
      header: () => <span>Group name</span>,
    }),
  ];

  return (
    <SimpleTable<UserGroup>
      data={data}
      columns={columns}
      mobileColumns={mobileColumns}
      onSearch={() => {}}
      inputSearchProps={{ placeholder: "Search group" }}
      onFilter={() => {}}
      hideHeaders={isMobile}
    />
  );
};

export default GroupTable;
