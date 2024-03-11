import { useAuth } from "@/app/contexts/AuthContext";
import { useUser } from "@/app/contexts/UserContext";
import { useTranslation } from "@/app/i18n/client";
import { capitalize, fullName } from "@/app/utils/string";
import {
  Box,
  BoxProps,
  Button,
  Center,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = { lng: string } & BoxProps;

const AdminHeader: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng);
  const { login, logout } = useAuth();
  const user = useUser();

  const onSearch = (val: string) => {
    return;
  };
  return (
    <HStack {...props} justify={"space-between"}>
      <HStack>
        <Button variant="transparent" p={0}>
          <Box w={{ base: "28px", md: "40px" }}>
            <Image
              src={"/menu-burger.svg"}
              alt="menu-icon"
              width={100}
              height={100}
            />
          </Box>
        </Button>
        <Box display={{ base: "block", md: "none" }}>
          <Button variant="transparent" p={0}>
            <Box w="24px">
              <Image
                src={"/icon-search.svg"}
                alt="menu-icon"
                width={100}
                height={100}
              />
            </Box>
          </Button>
        </Box>
        <InputGroup width="320px" display={{ base: "none", md: "block" }}>
          <InputLeftElement>
            <Image alt="search" src="/icon-search.svg" width="20" height="20" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={"I'm looking for"}
            onChange={(e) => {
              let value = e?.target?.value;
              onSearch(value);
            }}
          />
        </InputGroup>
      </HStack>
      <HStack>
        <VStack
          display={{ base: "none", md: "block" }}
          align={"flex-end"}
          justify={"center"}
          gap={0}
          mr={2}
        >
          <Text color="primary.100" fontWeight={700} fontSize={"13px"}>
            {fullName({
              first_name: user?.firstName,
              last_name: user?.lastName,
            })}
          </Text>
          <Text fontSize={"12px"} color={"primary.700"}>
            EID: CBDE1234
          </Text>
        </VStack>
        <Box mr={{ base: 0, md: 3 }}>
          <Button variant={"transparent"} p={0}>
            <Box width={"30px"}>
              <Image
                src="/icon-avatar.svg"
                alt="icon-avatar"
                width={100}
                height={100}
              />
            </Box>
            <Box
              display={{ base: "inline-block", md: "none" }}
              fontSize={"20px"}
              ml={2}
            >
              <Menu>
                <MenuButton border="0">
                  <MdKeyboardArrowDown />
                </MenuButton>
                <MenuList>
                  <MenuItem>asd</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Button>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Menu>
            <MenuButton border="0">
              <MdKeyboardArrowDown />
            </MenuButton>
            <MenuList
              mt={4}
              borderRadius={"8px"}
              border="border: 1px solid"
              borderColor={"white.600"}
              backgroundColor={"white.400"}
              boxShadow={"0px 1px 18px 0px rgba(0, 0, 0, 0.16)"}
              mr="-35px"
              zIndex={999}
            >
              <Box
                width={"28px"}
                position={"absolute"}
                top={"0"}
                right="-2"
                zIndex={0}
              >
                <Image
                  src="/polygon.svg"
                  alt="arrow"
                  width={100}
                  height={100}
                />
              </Box>
              <Box p={3}>
                <Text fontSize={"12px"} color="primary.500">
                  {t("switch_to")}
                </Text>
              </Box>
              <MenuItem
                onClick={() => {
                  login?.("", "", () => {});
                }}
              >
                <HStack w="full" justify={"space-between"}>
                  <Text
                    fontSize={"12px"}
                    color="primary.700"
                    fontWeight={"500"}
                  >
                    {capitalize(t("patient_login"))}
                  </Text>
                  <Box width={"24px"}>
                    <Image
                      src="/icon-patient-avatar.svg"
                      alt="icon-patient-avatar"
                      width={100}
                      height={100}
                    />
                  </Box>
                </HStack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout?.();
                }}
              >
                <HStack w="full" justify={"space-between"}>
                  <Text
                    fontSize={"12px"}
                    color="primary.700"
                    fontWeight={"500"}
                  >
                    {capitalize(t("logout"))}
                  </Text>
                  <Box width={"20px"}>
                    <Image
                      src="/icon-logout.svg"
                      alt="icon-logout"
                      width={100}
                      height={100}
                    />
                  </Box>
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Center height={"30px"}>
          <Divider orientation="vertical" mx={2} borderColor={"white.600"} />
        </Center>
        <Box>
          <Button variant={"transparent"} p={0}>
            <Box width={"30px"}>
              <Image
                src="/icon-notification-unread.svg"
                alt="icon-avatar"
                width={100}
                height={100}
              />
            </Box>
          </Button>
        </Box>
      </HStack>
    </HStack>
  );
};

export default AdminHeader;
