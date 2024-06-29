import {
  Badge,
  Box,
  Divider,
  FormLabel,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import StaffWrapper from "./StaffWrapper";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import useScreen from "@/app/hooks/useScreen";
import { defaultUserData } from "../users_and_groups/utils";
import { capitalize, fullName } from "@/app/utils/string";
import NameValuePair from "@/app/components/common/NameValuePair/NameValuePair";
import Panel from "@/app/components/common/Panel/Panel";
import DividerDashed from "@/app/components/common/Divider/DividerDashed";
import { MdAdd, MdChevronRight } from "react-icons/md";
import { useQuery } from "react-query";
import { getPatientById } from "@/app/api/patients";
import { Patient } from "../patients/types";

type Props = { lng: string };

const StaffPatientView: React.FC<Props> = ({ lng }) => {
  const router = useRouter();
  const { isMobile } = useScreen();
  const { id } = useParams();
  const { data: patientData } = useQuery<{ data: Patient }>(
    ["patient", id],
    () => {
      return getPatientById(Number(id));
    },
  );

  const user = patientData?.data;

  if (!user) return null;

  return (
    <StaffWrapper lng={lng}>
      <Box py={10}>
        <Grid templateColumns="3fr 5fr" gap="20px">
          <Box
            border="1px solid"
            borderColor={"primary.300"}
            backgroundColor={"white.700"}
            borderRadius={"8px"}
            p="16px"
          >
            <HStack>
              <Box width={"60px"}>
                <Image
                  src="/icon-patient-avatar.svg"
                  alt="icon-patient-avatar"
                  width={100}
                  height={100}
                />
              </Box>
              <VStack ml="4" align={"flex-start"}>
                <Heading size="sm">
                  {capitalize(
                    fullName({
                      first_name: user.firstName,
                      last_name: user.lastName,
                    }),
                  )}
                </Heading>
                <Text>Unique ID: {user.id}</Text>
              </VStack>
            </HStack>
            <HStack mt="4">
              <Badge variant={"roundPrimary"}>Non-urgent</Badge>
              <Badge variant={"roundOutline"}>Outpatient</Badge>
              <Badge variant={"roundWarningOutline"}>PWD</Badge>
            </HStack>
            <Box my={4}>
              <NameValuePair
                name="chief complaint"
                value="Fever and vomiting"
              />
            </Box>
            <Divider />
            <Box my="4">
              <Grid templateRows={"1fr 1fr"} templateColumns={"1fr 1fr"}>
                <NameValuePair name="age" value={user.age} />{" "}
                <NameValuePair name="date of birth" value={user.dateOfBirth} />{" "}
                <NameValuePair name="civil status" value={user.civilStatus} />{" "}
                <NameValuePair name="gender" value={user.gender} />{" "}
              </Grid>
            </Box>
            <Divider />
            <Box my="4">
              <VStack w="full" align="flex-start">
                <NameValuePair name="email address" value={user.emailAddress} />{" "}
                <NameValuePair name="mobile number" value={user.mobileNumber} />{" "}
                <NameValuePair name="home address" value={user.homeAddress} />{" "}
              </VStack>
            </Box>
            <Divider />
            <Box my="4">
              <NameValuePair
                name="Emergency contact person"
                value={
                  <Box>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"bold"}
                      color="primary.100"
                    >
                      -
                    </Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"bold"}
                      color="primary.100"
                    >
                      -
                    </Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"bold"}
                      color="primary.100"
                    >
                      -
                    </Text>
                  </Box>
                }
              />{" "}
            </Box>
            <Divider />
            <Box mt="4">
              <Grid templateColumns={"1fr 1fr"}>
                <NameValuePair name="HMO provider" value={user.hmoProvider} />
                <NameValuePair
                  name="HMO account no."
                  value={user.hmoAccountNumber}
                />
              </Grid>
            </Box>
          </Box>
          <Box>
            <HStack>
              <InputGroup flex={6}>
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
                  placeholder={isMobile ? "" : "Search"}
                  onChange={(e) => {
                    let value = e?.target?.value;
                    // onSearch(value);
                  }}
                />
              </InputGroup>
            </HStack>
            <Grid templateColumns={"1fr 1fr"} gap="10px" mt="10px">
              <Panel>
                <Heading color="primary.100" size={"xs"}>
                  History of past illnesses
                </Heading>
                <DividerDashed />
                <NameValuePair name="diagnosis" value={""} />
                <NameValuePair name="remarks" value={""} />
                <HStack w="full" justifyContent={"flex-end"}>
                  <Text fontSize="xs">View full details</Text>
                  <IconButton
                    isRound={true}
                    backgroundColor="transparent"
                    color={"primary.600"}
                    border="1px solid #61A4AD"
                    fontSize="14px"
                    aria-label="view history"
                    icon={<MdAdd />}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    alignSelf="flex-end"
                    size="sm"
                    ml="2"
                  />
                </HStack>
                <Divider my="2" />
                <HStack w="full" justifyContent={"flex-end"}>
                  <Text fontSize="xs">View history</Text>
                  <IconButton
                    isRound={true}
                    backgroundColor="transparent"
                    color={"primary.600"}
                    border="1px solid #61A4AD"
                    fontSize="14px"
                    aria-label="view history"
                    icon={<MdChevronRight />}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/patients/${id}/illnesses`);
                    }}
                    alignSelf="flex-end"
                    size="sm"
                    ml="2"
                  />
                </HStack>
              </Panel>
              <Panel>
                <Heading color="primary.100" size={"xs"}>
                  Personal and social history
                </Heading>
                <DividerDashed />
                <NameValuePair name="tobacco use" value={""} />
                <NameValuePair name="alchohol use" value={""} />
              </Panel>
              <Panel>
                <Heading color="primary.100" size={"xs"}>
                  Past medical history
                </Heading>
                <DividerDashed />
                <NameValuePair name="previous admission" value={""} />
                <NameValuePair name="attending physician" value={""} />
              </Panel>
              <Panel>
                <Heading color="primary.100" size={"xs"}>
                  Physical examination
                </Heading>
                <DividerDashed />
                <NameValuePair name="date and time taken" value={""} />
                <NameValuePair name="general survey" value={""} />
              </Panel>
              <Panel>
                <Heading color="primary.100" size={"xs"}>
                  Family medical history
                </Heading>
                <DividerDashed />
                <NameValuePair name="father" value={""} />
                <NameValuePair name="mother" value={""} />
              </Panel>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </StaffWrapper>
  );
};

export default StaffPatientView;
