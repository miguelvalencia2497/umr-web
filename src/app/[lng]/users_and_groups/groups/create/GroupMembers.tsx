import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import {
  Box,
  Button,
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

type Props = {
  lng: string;
  selectedMembers: number[];
  handleAddMember: (id: number) => void;
  handleRemoveMember: (id: number) => void;
  handleClearAllMembers: () => void;
};

const GroupMembers: React.FC<Props> = ({
  lng,
  selectedMembers,
  handleAddMember,
  handleRemoveMember,
  handleClearAllMembers,
  ...props
}) => {
  const { t } = useTranslation(lng, "group");

  const onSearch = (val: string) => {
    console.log("🚀 ~ val:", val);
  };

  const members = [];

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
      {members.length ? (
        <></>
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
