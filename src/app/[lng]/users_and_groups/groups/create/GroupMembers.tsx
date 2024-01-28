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
} from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  lng: string;
};

const GroupMembers: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "group");
  const onSearch = (val: string) => {
    console.log("🚀 ~ val:", val);
  };

  const members = [];

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
          <Button>
            <Text fontWeight={700}>{t("add_members")}</Text>
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default GroupMembers;
