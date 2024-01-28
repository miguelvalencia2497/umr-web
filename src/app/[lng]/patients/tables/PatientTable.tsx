import { Patient, PatientStatus } from "../types";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";
import { defaultPatientsData } from "../utils";
import { createColumnHelper } from "@tanstack/react-table";
import { Badge, Box, HStack, Text, VStack } from "@chakra-ui/react";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { fullName, titleize } from "@/app/utils/string";
import Image from "next/image";
import { User } from "../../users_and_groups/types";

type Props = {
  lng: string;
};

const PatientTable: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "patient");
  const [data, setData] = useState(() => [...defaultPatientsData]);
  const columnHelper = createColumnHelper<Patient>();

  const getBadgeVariant = (status: PatientStatus) => {
    switch (status) {
      case PatientStatus.NEXT_IN_LINE_FOR_CONSULTATION:
        return "roundPrimary";
      case PatientStatus.IN_TRIAGE:
        return "roundWarning";
      default:
        return "roundOutline";
    }
  };

  const mobileColumns = [
    columnHelper.accessor((row) => row, {
      id: "uid",
      cell: (info) => (
        <HStack>
          <Box w="41px" height="41px" borderRadius="100px" overflow="hidden">
            <Image
              alt={info.getValue().img_url}
              src={info.getValue().img_url}
              width={100}
              height={100}
            />
          </Box>
          <VStack align={"flex-start"} gap={0}>
            <Text fontSize={"12px"}>
              {fullName({
                first_name: info.getValue().first_name,
                last_name: info.getValue().last_name,
              })}
            </Text>
            <Text fontSize={"10px"} color={"primary.700"} fontWeight={400}>
              UID: {info.getValue().uid}
            </Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "status",
      cell: (info) => (
        <VStack alignItems={"flex-end"}>
          <Badge variant={getBadgeVariant(info.getValue().status)} size="xs">
            {t(`${info.getValue().status}`)}
            {info.getValue().triage_with
              ? ` with ${titleize(
                  fullName({
                    first_name: info.getValue().triage_with?.firstName,
                    last_name: info.getValue().triage_with?.lastName,
                  }),
                )}`
              : ""}
          </Badge>
        </VStack>
      ),
    }),
  ];

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "uid",
      cell: (info) => (
        <HStack>
          <Box w="41px" height="41px" borderRadius="100px" overflow="hidden">
            <Image
              alt={info.getValue().img_url}
              src={info.getValue().img_url}
              width={100}
              height={100}
            />
          </Box>
          <VStack align={"flex-start"} gap={0}>
            <Text>
              {fullName({
                first_name: info.getValue().first_name,
                last_name: info.getValue().last_name,
              })}
            </Text>
            <Text fontSize={"10px"} color={"primary.700"} fontWeight={400}>
              UID: {info.getValue().uid}
            </Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "status",
      cell: (info) => (
        <VStack alignItems={"flex-end"}>
          <Badge variant={getBadgeVariant(info.getValue().status)}>
            {t(`${info.getValue().status}`)}
            {info.getValue().triage_with
              ? ` with ${titleize(
                  fullName({
                    first_name: info.getValue().triage_with?.firstName,
                    last_name: info.getValue().triage_with?.lastName,
                  }),
                )}`
              : ""}
          </Badge>
        </VStack>
      ),
    }),
  ];

  return (
    <SimpleTable
      data={data}
      columns={columns}
      mobileColumns={mobileColumns}
      hideHeaders={true}
      mt="0"
      w="full"
    />
  );
};

export default PatientTable;
