"use client";
import { Button, Heading, HStack } from "@chakra-ui/react";
import { UserGroup } from "../users_and_groups/types";
import StaffWrapper from "./StaffWrapper";
import { capitalize } from "@/app/utils/string";
import { useTranslation } from "@/app/i18n/client";
import GroupUserTable from "../users_and_groups/tables/GroupUserTable";

type Props = {
  group?: UserGroup;
  lng: string;
};
const StaffGroupUsers: React.FC<Props> = ({ group, lng }) => {
  const { t } = useTranslation(lng, "group");
  return (
    <StaffWrapper lng={lng}>
      <HStack w="full" justify={"space-between"} mt="30px">
        <Heading as="h4" size="md" fontWeight={700} color="primary.700">
          {capitalize(t("group_members"))} ({group?.members?.length})
        </Heading>
        <HStack>
          <Button variant={"outline"} onClick={() => {}}>
            {capitalize(t("select"))}
          </Button>
          <Button onClick={() => {}}>{capitalize(t("add_new_member"))}</Button>
        </HStack>
      </HStack>
      <GroupUserTable group={group} lng={lng} />
    </StaffWrapper>
  );
};

export default StaffGroupUsers;
