import { useTranslation } from "@/app/i18n/client";
import { capitalize, fullName } from "@/app/utils/string";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import AddMemberModal from "./AddMemberModal";
import { Dispatch, SetStateAction, useState } from "react";
import { UserGroup } from "../../types";

type Props = {
  lng: string;
  group: UserGroup;
  selectedMembers: number[];
  handleAddMember: (id: number) => void;
  handleRemoveMember: (id: number) => void;
  handleClearAllMembers: () => void;
};

const GroupMembers: React.FC<Props> = ({
  lng,
  group,
  selectedMembers,
  handleAddMember,
  handleRemoveMember,
  handleClearAllMembers,
  ...props
}) => {
  const { t } = useTranslation(lng, "group");
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log("🚀 ~ searchTerm:", searchTerm);

  const onSearch = (val: string) => {
    setSearchTerm(val.toLowerCase());
  };

  const members = group?.members?.filter(
    (member) =>
      member.emailAddress.toLowerCase().includes(searchTerm) ||
      member.firstName.toLowerCase().includes(searchTerm) ||
      member.lastName.toLowerCase().includes(searchTerm),
  );

  const addMemberModalState = useDisclosure();

  return (
    <Box>
      <HStack align={"center"} justify={"space-between"}>
        <Heading as="h6" size="xs">
          {capitalize(t("members"))}
        </Heading>
        <InputGroup width="160px" display={{ base: "none", md: "block" }}>
          <InputLeftElement>
            <Image alt="search" src="/icon-search.svg" width="20" height="20" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={t("search_user")}
            onChange={(e) => {
              let value = e?.target?.value;
              onSearch(value);
            }}
          />
        </InputGroup>
      </HStack>
      {members?.length ? (
        <VStack gap="6px" mt="16px">
          {group?.members?.map((member, i) => (
            <Box key={i} w="full">
              <Text fontSize={"12px"} fontWeight={700} color="primary.500">
                {fullName({
                  first_name: member.firstName,
                  last_name: member.lastName,
                })}
              </Text>
              <Text fontSize={"12px"} color="primary.500">
                {member.emailAddress}
              </Text>
              <Divider my="2" />
            </Box>
          ))}
        </VStack>
      ) : (
        <VStack gap="16px" mt="16px">
          <Box w="32px">
            <Image
              alt="members"
              src="/icon-union.svg"
              width={100}
              height={100}
            />
          </Box>
          <Text fontSize={"12px"} color="primary.500">
            {t("add_members_copy")}
          </Text>
        </VStack>
      )}
      <VStack w="full" mt="16px">
        <Button onClick={addMemberModalState.onOpen}>
          <Text fontWeight={700}>{t("add_members")}</Text>
        </Button>
      </VStack>
      <AddMemberModal
        {...addMemberModalState}
        selectedMembers={selectedMembers}
        addMember={handleAddMember}
        removeMember={handleRemoveMember}
        clearAllMembers={handleClearAllMembers}
      />
    </Box>
  );
};

export default GroupMembers;
