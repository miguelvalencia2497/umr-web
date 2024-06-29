import { getGroupAuthoritiesByCategory } from "@/app/api/groups";
import CheckboxField from "@/app/components/form/CheckboxField";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import {
  Accordion,
  AccordionItem,
  Heading,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButton,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { GroupAuthority, UserGroup } from "../../types";

type Props = { lng: string; group?: UserGroup };

const GroupSettings: React.FC<Props> = ({ lng, group, ...props }) => {
  const { t } = useTranslation(lng, "group");

  const { data: groupAssignAuthorities } = useQuery(["assignAuthorities"], () =>
    getGroupAuthoritiesByCategory("AP"),
  );
  const { data: groupViewAuthorities } = useQuery(["viewAuthorities"], () =>
    getGroupAuthoritiesByCategory("VPP"),
  );
  const { data: groupEditAuthorities } = useQuery(["editAuthorities"], () =>
    getGroupAuthoritiesByCategory("EPP"),
  );
  const { data: groupUploadAuthorities } = useQuery(["uploadAuthorities"], () =>
    getGroupAuthoritiesByCategory("UP"),
  );
  const { data: groupDomainAuthorities } = useQuery(["domainAuthorities"], () =>
    getGroupAuthoritiesByCategory("DP"),
  );
  const { data: groupPatientVerificationAuthorities } = useQuery(
    ["patientVerificationAuthorities"],
    () => getGroupAuthoritiesByCategory("PVP"),
  );

  return (
    <VStack align={"flex-start"}>
      <Heading as="h6" size="xs">
        {capitalize(t("settings"))}
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple width={"full"}>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("assigning_permissions"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("assigning_permissions_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel>
            <VStack my="4" gap="3" align={"flex-start"}>
              {groupAssignAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <CheckboxField
                      key={authority.id}
                      name={`authorities.${authority.id}`}
                      label={authority.authorityDescription}
                      checkboxProps={{
                        defaultChecked: group?.authorityIds.includes(
                          authority.id,
                        ),
                      }}
                      variant={"circular"}
                    />
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("view_patients_profile"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("view_patients_profile_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel>
            <VStack my="4" gap="3" align={"flex-start"}>
              {groupViewAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <>
                      <CheckboxField
                        key={authority.id}
                        name={`authorities.${authority.id}`}
                        label={authority.authorityDescription}
                        checkboxProps={{
                          defaultChecked: group?.authorityIds.includes(
                            authority.id,
                          ),
                        }}
                        variant={"circular"}
                      />
                      {authority.childStaffAuthorities?.length && (
                        <VStack
                          ml="8"
                          flexWrap={"wrap"}
                          height="160px"
                          width="100%"
                          justify={"flex-start"}
                          align={"flex-start"}
                        >
                          {authority.childStaffAuthorities?.map(
                            (childAuthority) => (
                              <CheckboxField
                                key={childAuthority.id}
                                name={`authorities.${childAuthority.id}`}
                                label={childAuthority.authorityDescription}
                                checkboxProps={{
                                  defaultChecked: group?.authorityIds.includes(
                                    authority.id,
                                  ),
                                }}
                                variant={"circular"}
                              />
                            ),
                          )}
                        </VStack>
                      )}
                    </>
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("edit_patients_profile"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("edit_patients_profile_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              {groupEditAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <>
                      <CheckboxField
                        key={authority.id}
                        name={`authorities.${authority.id}`}
                        label={authority.authorityDescription}
                        checkboxProps={{
                          defaultChecked: group?.authorityIds.includes(
                            authority.id,
                          ),
                        }}
                        variant={"circular"}
                      />
                      {authority.childStaffAuthorities?.length && (
                        <VStack
                          ml="8"
                          flexWrap={"wrap"}
                          justify={"flex-start"}
                          width="100%"
                          align={"flex-start"}
                        >
                          {authority.childStaffAuthorities?.map(
                            (childAuthority) => (
                              <CheckboxField
                                key={childAuthority.id}
                                name={`authorities.${childAuthority.id}`}
                                label={childAuthority.authorityDescription}
                                checkboxProps={{
                                  defaultChecked: group?.authorityIds.includes(
                                    authority.id,
                                  ),
                                }}
                                variant={"circular"}
                              />
                            ),
                          )}
                        </VStack>
                      )}
                    </>
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("upload_doc_to_patient"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("upload_doc_to_patient_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              {groupUploadAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <>
                      <CheckboxField
                        key={authority.id}
                        name={`authorities.${authority.id}`}
                        label={authority.authorityDescription}
                        checkboxProps={{
                          defaultChecked: group?.authorityIds.includes(
                            authority.id,
                          ),
                        }}
                        variant={"circular"}
                      />
                      {authority.childStaffAuthorities?.length && (
                        <VStack
                          ml="8"
                          flexWrap={"wrap"}
                          justify={"flex-start"}
                          align={"flex-start"}
                          width="100%"
                        >
                          {authority.childStaffAuthorities?.map(
                            (childAuthority) => (
                              <CheckboxField
                                key={childAuthority.id}
                                name={`authorities.${childAuthority.id}`}
                                label={childAuthority.authorityDescription}
                                checkboxProps={{
                                  defaultChecked: group?.authorityIds.includes(
                                    authority.id,
                                  ),
                                }}
                                variant={"circular"}
                              />
                            ),
                          )}
                        </VStack>
                      )}
                    </>
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("domain_permissions"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("domain_permissions_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              {groupDomainAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <>
                      <CheckboxField
                        key={authority.id}
                        name={`authorities.${authority.id}`}
                        label={authority.authorityDescription}
                        checkboxProps={{
                          defaultChecked: group?.authorityIds.includes(
                            authority.id,
                          ),
                        }}
                        variant={"circular"}
                      />
                      {authority.childStaffAuthorities?.length && (
                        <VStack
                          ml="8"
                          flexWrap={"wrap"}
                          width="100%"
                          justify={"flex-start"}
                          align={"flex-start"}
                        >
                          {authority.childStaffAuthorities?.map(
                            (childAuthority) => (
                              <CheckboxField
                                key={childAuthority.id}
                                name={`authorities.${childAuthority.id}`}
                                label={childAuthority.authorityDescription}
                                checkboxProps={{
                                  defaultChecked: group?.authorityIds.includes(
                                    authority.id,
                                  ),
                                }}
                                variant={"circular"}
                              />
                            ),
                          )}
                        </VStack>
                      )}
                    </>
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("patient_verification_permissions"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("patient_verification_permissions_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              {groupPatientVerificationAuthorities?.data?.data?.[0]?.childStaffAuthorities?.map(
                (authority: GroupAuthority) => {
                  return (
                    <>
                      <CheckboxField
                        key={authority.id}
                        name={`authorities.${authority.id}`}
                        label={authority.authorityDescription}
                        checkboxProps={{
                          defaultChecked: group?.authorityIds.includes(
                            authority.id,
                          ),
                        }}
                        variant={"circular"}
                      />
                      {authority.childStaffAuthorities?.length && (
                        <VStack
                          ml="8"
                          flexWrap={"wrap"}
                          width="100%"
                          justify={"flex-start"}
                          align={"flex-start"}
                        >
                          {authority.childStaffAuthorities?.map(
                            (childAuthority) => (
                              <CheckboxField
                                key={childAuthority.id}
                                name={`authorities.${childAuthority.id}`}
                                label={childAuthority.authorityDescription}
                                checkboxProps={{
                                  defaultChecked: group?.authorityIds.includes(
                                    authority.id,
                                  ),
                                }}
                                variant={"circular"}
                              />
                            ),
                          )}
                        </VStack>
                      )}
                    </>
                  );
                },
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
export default GroupSettings;
