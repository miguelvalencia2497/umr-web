"use client";
import AdminWrapper from "./AdminWrapper";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-admin.png";
import { capitalize, fullName, sentenceize } from "@/app/utils/string";
import { useTranslation } from "@/app/i18n/client";
import useScreen from "@/app/hooks/useScreen";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useUser } from "@/app/contexts/UserContext";
import Panel from "@/app/components/common/Panel/Panel";
import Image from "next/image";
import DividerDashed from "@/app/components/common/Divider/DividerDashed";
import PatientTable from "../patients/tables/PatientTable";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AssignedToFilters, PatientFilters } from "../patients/types";
import { useState } from "react";

type Props = {
  lng: string;
};

const AdminDashboard: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "dashboard");
  const { isMobile, isTablet } = useScreen();
  const user = useUser();
  const [appliedPatientFilter, setAppliedPatientFilter] =
    useState<PatientFilters>(PatientFilters.ALL_PATIENTS);
  const [appliedAssignedToFilter, setAppliedAssignedToFilter] =
    useState<AssignedToFilters>(AssignedToFilters.ASSIGNED_TO_ALL);

  const onSearch = (val: string) => {};

  return (
    <AdminWrapper lng={lng}>
      <VStack mt="8" alignItems="flex-start" gap="0">
        <Text fontSize="12px" color="primary.700">
          {sentenceize(t("welcome_back"))}!
        </Text>
        <Heading as="h2" size="lg" fontWeight="900" color="primary.700">
          {fullName({
            first_name: user?.first_name,
            last_name: user?.last_name,
          })}
        </Heading>
      </VStack>
      <NoticePanel
        title={sentenceize(t("im_a_reminder"))}
        subtitle={
          "More description to this reminder 2 lines truncated more info"
        }
        boxProps={{
          mt: "8px",
          background: "#5BC4D0",
          style: {
            backgroundImage: `url(${noticeBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPositionX: isMobile || isTablet ? "right" : "center",
            backgroundPositionY: "bottom",
          },
        }}
        onButtonClick={() => {
          console.log("asd");
        }}
      />
      <Panel mt="24px">
        <VStack w="full">
          <HStack justify={"space-between"} w="full">
            <Heading
              as="h4"
              fontSize="13px"
              fontWeight={700}
              color="primary.700"
            >
              {capitalize(t("patient_queue"))}
            </Heading>
            <Button onClick={() => {}}>
              <Text fontWeight={700} fontSize="13px">
                {capitalize(t("add_patient"))}
              </Text>
            </Button>
          </HStack>
          <InputGroup width="full" mt="16px">
            <InputLeftElement>
              <Image
                alt="search"
                src="/icon-search.svg"
                width="20"
                height="20"
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={capitalize(t("search_patient"))}
              onChange={(e) => {
                let value = e?.target?.value;
                onSearch(value);
              }}
            />
          </InputGroup>
          <HStack w="full" alignItems={"center"} justify={"flex-end"} mt="4">
            <Box width="20px">
              <Image
                src="/icon-filter.svg"
                alt="applied"
                width={100}
                height={100}
              />
            </Box>
            <Center height={"30px"}>
              <Divider
                orientation="vertical"
                mx={2}
                borderColor={"white.200"}
              />
            </Center>
            <Menu>
              <MenuButton px={4} py={2} transition="all 0.2s" border="0">
                <HStack>
                  <Text fontSize={"13px"} mr="2">
                    {capitalize(t(appliedPatientFilter))}
                  </Text>
                  <MdKeyboardArrowDown />
                </HStack>
              </MenuButton>
              <MenuList>
                {Object.values(PatientFilters).map((patientFilter, i) => {
                  return (
                    <>
                      <MenuItem
                        key={i}
                        onClick={() => setAppliedPatientFilter(patientFilter)}
                      >
                        <HStack w="full" justify={"space-between"}>
                          <Text
                            fontSize={"13px"}
                            fontWeight={400}
                            color={"primary.700"}
                          >
                            {capitalize(t(patientFilter))}
                          </Text>
                          {patientFilter === appliedPatientFilter ? (
                            <Box width="20px">
                              <Image
                                src="/icon-check.svg"
                                alt="applied"
                                width={100}
                                height={100}
                              />
                            </Box>
                          ) : (
                            ""
                          )}
                        </HStack>
                      </MenuItem>
                      {i === Object.keys(PatientFilters).length - 1 ? null : (
                        <MenuDivider />
                      )}
                    </>
                  );
                })}
              </MenuList>
            </Menu>
            <Center height={"30px"}>
              <Divider
                orientation="vertical"
                mx={2}
                borderColor={"white.200"}
              />
            </Center>
            <Menu>
              <MenuButton px={4} py={2} transition="all 0.2s" border="0">
                <HStack>
                  <Text fontSize={"13px"} mr="2">
                    {capitalize(t(appliedAssignedToFilter))}
                  </Text>
                  <MdKeyboardArrowDown />
                </HStack>
              </MenuButton>
              <MenuList>
                {Object.values(AssignedToFilters).map((assignedToFilter, i) => {
                  return (
                    <>
                      <MenuItem
                        key={i}
                        onClick={() =>
                          setAppliedAssignedToFilter(assignedToFilter)
                        }
                      >
                        <HStack w="full" justify={"space-between"}>
                          <Text
                            fontSize={"13px"}
                            fontWeight={400}
                            color={"primary.700"}
                          >
                            {capitalize(t(assignedToFilter))}
                          </Text>
                          {assignedToFilter === appliedAssignedToFilter ? (
                            <Box width="20px">
                              <Image
                                src="/icon-check.svg"
                                alt="applied"
                                width={100}
                                height={100}
                              />
                            </Box>
                          ) : (
                            ""
                          )}
                        </HStack>
                      </MenuItem>
                      {i ===
                      Object.keys(AssignedToFilters).length - 1 ? null : (
                        <MenuDivider />
                      )}
                    </>
                  );
                })}
              </MenuList>
            </Menu>
          </HStack>
          <DividerDashed />
          <PatientTable lng={lng} />
        </VStack>
      </Panel>
    </AdminWrapper>
  );
};

export default AdminDashboard;
