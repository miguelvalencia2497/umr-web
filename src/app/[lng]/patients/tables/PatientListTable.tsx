import { Patient, PatientStatus } from "../types";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";
import { defaultPatientsData } from "../utils";
import { createColumnHelper } from "@tanstack/react-table";
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import SimpleTable from "@/app/components/common/Tables/SimpleTable";
import { fullName, titleize } from "@/app/utils/string";
import Image from "next/image";
import useScreen from "@/app/hooks/useScreen";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { fetchPatients } from "@/app/api/patients";

type Props = {
  lng: string;
};

const PatientListTable: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "patient");
  const [data, setData] = useState(() => [...defaultPatientsData]);
  const columnHelper = createColumnHelper<Patient>();
  const { isMobile } = useScreen();
  const router = useRouter();
  const { data: patients } = useQuery(["patients"], () => fetchPatients());
  console.log("🚀 ~ patients:", patients?.data.data);

  const mobileColumns = [
    columnHelper.accessor((row) => row, {
      id: "uid",
      cell: (info) => (
        <HStack>
          <VStack align={"flex-start"} gap={0}>
            <Text fontSize={"12px"}>
              {fullName({
                first_name: info.getValue().firstName,
                last_name: info.getValue().lastName,
              }) || "-"}
            </Text>
            <Text fontSize={"10px"} color={"primary.700"} fontWeight={400}>
              {info.getValue().emailAddress}
            </Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "date",
      cell: (info) => (
        <VStack align={"flex-start"} gap={0}>
          <Text>
            {info.getValue().last_visit_date}, {info.getValue().last_visit_time}
          </Text>
        </VStack>
      ),
    }),
  ];

  const columns = [
    columnHelper.accessor((row) => row, {
      id: "patient",
      header: () => <span>Patient</span>,
      cell: (info) => (
        <HStack>
          <VStack align={"flex-start"} gap={0}>
            <Text>
              {fullName({
                first_name: info.getValue().firstName || "",
                last_name: info.getValue().lastName || "",
              })}
            </Text>
            <Text fontSize={"10px"} color={"primary.700"} fontWeight={400}>
              {info.getValue().emailAddress}
            </Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "date",
      header: () => <span>Date and time of last visit</span>,
      cell: (info) => (
        <HStack>
          <VStack align={"flex-start"} gap={0}>
            <Text>
              {info.getValue().last_visit_date}
              {info.getValue().last_visit_time}
            </Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "latest_visit",
      header: () => <span>Latest visit</span>,
      cell: (info) => (
        <HStack>
          <VStack align={"flex-start"} gap={0}>
            <Text>{info.getValue().chief_complaint}</Text>
          </VStack>
        </HStack>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "action",
      header: () => null,
      cell: (info) => (
        <VStack align={"flex-end"} gap={0}>
          <Button
            variant={"transparent"}
            onClick={() => {
              router.push(`/patients/${info.getValue().id}`);
            }}
          >
            {">"}
          </Button>
        </VStack>
      ),
    }),
  ];

  return (
    <SimpleTable<Patient>
      data={patients?.data?.data}
      columns={columns}
      mobileColumns={mobileColumns}
      hideHeaders={isMobile}
      onSearch={() => {}}
      onFilter={() => {}}
      inputSearchProps={{ placeholder: "Search" }}
      mt="0"
      w="full"
    />
  );
};

export default PatientListTable;
