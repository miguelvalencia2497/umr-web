import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { UserGroup } from "../types";
import { defaultGroupsData } from "../utils";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { capitalize, truncate } from "@/app/utils/string";
import useScreen from "@/app/hooks/useScreen";
import { useQuery } from "react-query";
import { getGroupAuthorities, getGroupsByDomain } from "@/app/api/groups";
import { useUser } from "@/app/contexts/UserContext";
import { useRouter } from "next/navigation";

const GroupTable = () => {
  const [data, setData] = useState(() => []);
  const columnHelper = createColumnHelper<UserGroup>();
  const { isMobile } = useScreen();
  const user = useUser();
  const router = useRouter();

  const { data: groups } = useQuery(["groups", user?.domainId], () =>
    getGroupsByDomain(user?.domainId),
  );
  const { data: groupAuthorities } = useQuery(["authorities"], () =>
    getGroupAuthorities(),
  );

  useEffect(() => {
    setData(groups?.data?.data);
  }, [groups]);

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().groupName}</Text>
          <Text fontWeight="400">
            {info.getValue().notes.length > 90
              ? truncate(info.getValue().notes, 90)
              : info.getValue().notes}
          </Text>
        </Box>
      ),
      header: () => <span>Group name</span>,
    }),
    columnHelper.accessor((row) => row.authorityIds, {
      id: "authorities",
      cell: (info) => {
        return info.getValue()?.map((authorityId, i) => (
          <>
            {info.getValue().length > 1 && i === info.getValue().length - 1
              ? "and "
              : ""}
            {
              groupAuthorities?.data?.data?.find(
                (obj) => obj.id === authorityId,
              ).authorityName
            }
            {i !== info.getValue().length - 1 ? ", " : ""}
          </>
        ));
      },
      header: () => <span>Permissions</span>,
    }),
    columnHelper.accessor((row) => row.membersCount, {
      id: "users",
      cell: (info) => {
        return (
          <Text>
            {info.getValue() || 0}{" "}
            {info.getValue() === 1 ? "member" : "members"}
          </Text>
        );
      },
      header: () => <span>Members</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => (
        <Button
          variant={"ghost"}
          onClick={() => {
            router.push(`users_and_groups/groups/${info.getValue().id}/edit`);
          }}
        >
          {">"}
        </Button>
      ),
      header: () => "",
    }),
  ];

  const mobileColumns = [
    columnHelper.accessor((row) => row, {
      id: "group_name",
      cell: (info) => (
        <Box>
          <Text>{info.getValue().groupName}</Text>
          <Text fontWeight="400">{truncate(info.getValue().notes, 40)}</Text>
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
