import {
  Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import StaffWrapper from "./StaffWrapper";
import { MdKeyboardArrowDown } from "react-icons/md";
import PatientTable from "../patients/tables/PatientTable";
import PatientListTable from "../patients/tables/PatientListTable";
import { useRouter } from "next/navigation";

type Props = { lng: string };

const StaffPatients: React.FC<Props> = ({ lng }) => {
  const router = useRouter();
  return (
    <StaffWrapper lng={lng}>
      <HStack w="full" align={"center"} justify={"space-between"} mb="4">
        <Heading size="sm">My Patients</Heading>
        <HStack>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _expanded={{
                opacity: "0.3",
              }}
              _focus={{ boxShadow: "outline" }}
            >
              <HStack>
                <Text fontSize={"13px"} mr="2">
                  More
                </Text>
                <MdKeyboardArrowDown />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Text
                  fontSize={"13px"}
                  fontWeight={400}
                  color={"primary.700"}
                ></Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            fontSize={"13px"}
            fontWeight={700}
            onClick={() => router.push("/patients/create")}
          >
            Create Patient
          </Button>
        </HStack>
      </HStack>

      <PatientListTable lng={lng} />
    </StaffWrapper>
  );
};

export default StaffPatients;
