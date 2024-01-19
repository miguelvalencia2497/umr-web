import { useUser } from "@/app/contexts/UserContext";
import { fullName } from "@/app/utils/string";
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
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {} & BoxProps;

const AdminHeader: React.FC<Props> = ({ ...props }) => {
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
              first_name: user?.first_name,
              last_name: user?.last_name,
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
              <MdKeyboardArrowDown />
            </Box>
          </Button>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <IconButton
            variant={"transparent"}
            aria-label="menu-dropdown"
            fontSize="20px"
            icon={<MdKeyboardArrowDown />}
          />
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
