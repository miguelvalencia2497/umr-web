"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { capitalize, fullName, titleize } from "@/app/utils/string";
import { GroupUser } from "../types";
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
import { getGroupsUsers } from "@/app/api/groups";

const UserTable: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "user");
  const [data, setData] = useState(() => [...defaultUserData]);
  const columnHelper = createColumnHelper<GroupUser>();
  const { isMobile } = useScreen();

  const { data: response } = useQuery("users", getGroupsUsers, {});

  useEffect(() => {
    setData(response?.data?.data || []);
  }, [response]);

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
      header: () => <span>{capitalize(t("name"))}</span>,
    }),
    columnHelper.accessor((row) => row.emailAddress, {
      id: "email_address",
      cell: (info) => <Text>{info.getValue()}</Text>,
      header: () => <span>{capitalize(t("email_address"))}</span>,
    }),
    columnHelper.accessor((row) => row.permissions, {
      id: "groupIds",
      cell: (info) => {
        return info.getValue()?.map((id, i) => (
          <>
            {capitalize(id)}
            {i !== info.getValue().length - 1 ? ", " : ""}
          </>
        ));
        return;
      },
      header: () => <span>{capitalize(t("groups"))}</span>,
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
            {t(`user_statuses.${info.getValue().toLowerCase()}`)}
          </Text>
        </HStack>
      ),
      header: () => <span>{capitalize(t("status"))}</span>,
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      cell: (info) => <>{">"}</>,
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
          <HStack>
            <Image
              alt={info.getValue().status}
              src={"/nav-admin-users_and_groups.svg"}
              width={20}
              height={20}
            />
            <Text fontWeight="400" color="primary.500">
              {info.getValue().groupIds?.map((id, i) => (
                <>
                  {id}
                  {i !== info.getValue().permissions?.length - 1 ? ", " : ""}
                </>
              ))}
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
    <SimpleTable<GroupUser>
      data={data}
      columns={columns}
      mobileColumns={mobileColumns}
      onSearch={() => {}}
      inputSearchProps={{ placeholder: isMobile ? "Search" : "Search user" }}
      onFilter={() => {}}
      hideHeaders={isMobile}
    />
  );
};

export default UserTable;
