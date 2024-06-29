import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import StaffWrapper from "./StaffWrapper";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { capitalize } from "@/app/utils/string";
import TextField from "@/app/components/form/TextField";
import FormikWrapper from "@/app/components/form/FormikWrapper";
import { object as YupObject, string as YupString } from "yup";
import { createPatient } from "@/app/api/patients";

type Props = { lng: string };

const StaffPatientsCreate: React.FC<Props> = ({ lng }) => {
  const router = useRouter();
  const schema = YupObject().shape({
    verificationId: YupString(),
    patientId: YupString(),
    dateOfBirth: YupString(),
    firstName: YupString(),
    middleName: YupString(),
    lastName: YupString(),
    suffix: YupString(),
    hmoProvider: YupString(),
    hmoAccountNumber: YupString(),
  });

  return (
    <StaffWrapper lng={lng}>
      <Box px={10}>
        <FormikWrapper
          initialValues={{}}
          validationSchema={schema}
          validateOnChange={false}
          onSubmit={(values) => {
            createPatient(values).then(() => router.push("/patients"));
          }}
          render={(formikProps) => {
            return (
              <>
                <HStack
                  w="full"
                  align={"center"}
                  justify={"space-between"}
                  mt="10"
                >
                  <VStack alignItems={"flex-start"} color="primary.100">
                    <Heading size="md">Create new Patient</Heading>
                    <Text size="xs">
                      To verify the patient, please provide the following
                      information:{" "}
                    </Text>
                  </VStack>
                  <HStack>
                    <Button
                      fontSize={"13px"}
                      fontWeight={700}
                      onClick={() => router.push("/patients")}
                      variant={"outline"}
                    >
                      Cancel
                    </Button>

                    <Button
                      fontSize={"13px"}
                      fontWeight={700}
                      onClick={() => formikProps.submitForm()}
                    >
                      Create Patient
                    </Button>
                  </HStack>
                </HStack>
                <Grid templateColumns="1fr 1fr 1fr" gap="15px" mt="8">
                  <Box>
                    <FormLabel>{capitalize("Verification ID")}</FormLabel>
                    <TextField name="verificationId" disabled />
                  </Box>
                  <Box>
                    <FormLabel>{capitalize("Patient ID")}</FormLabel>
                    <TextField name="patientId" disabled />
                  </Box>
                  <Box>
                    <FormLabel>{capitalize("Date of Birth")}</FormLabel>
                    <TextField name="dateOfBirth" type="date" />
                  </Box>
                  <Box>
                    <FormLabel>{capitalize("First Name")}</FormLabel>
                    <TextField name="firstName" />
                  </Box>
                  <Box>
                    <FormLabel>{capitalize("Middle Name")}</FormLabel>
                    <TextField name="middleName" />
                  </Box>
                  <HStack>
                    <Box flex="6">
                      <FormLabel>{capitalize("Last Name")}</FormLabel>
                      <TextField name="lastName" />
                    </Box>
                    <Box flex="2">
                      <FormLabel>{capitalize("Suffix")}</FormLabel>
                      <TextField name="suffix" />
                    </Box>
                  </HStack>
                </Grid>
                <Divider my="30px" />
                <Grid templateColumns={"1fr 1fr"} gap="15px">
                  <Box>
                    <FormLabel>{capitalize("ID type")}</FormLabel>
                    <TextField name="hmoProvider" />
                  </Box>
                  <Box>
                    <FormLabel>{capitalize("ID number")}</FormLabel>
                    <TextField name="hmoAccountNumber" />
                  </Box>
                </Grid>
              </>
            );
          }}
        />
      </Box>
    </StaffWrapper>
  );
};

export default StaffPatientsCreate;
