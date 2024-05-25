"use client";
import { Button, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import StaffWrapper from "./StaffWrapper";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import { useRouter } from "next/navigation";
import { object as YupObject, string as YupString } from "yup";
import FormikWrapper from "@/app/components/form/FormikWrapper";
import Panel from "@/app/components/common/Panel/Panel";
import GroupDetails from "../users_and_groups/groups/create/GroupDetails";
import GroupMembers from "../users_and_groups/groups/create/GroupMembers";
import GroupSettings from "../users_and_groups/groups/create/GroupSettings";
import { createGroup, editGroup } from "@/app/api/groups";
import { useUser } from "@/app/contexts/UserContext";
import { UserGroup } from "../users_and_groups/types";
import { useState } from "react";
import { IUser } from "../types/Users";

type Props = { group?: UserGroup; lng: string };

export interface GroupFormState {
  groupName?: string;
  notes: string;
  staffIds: number[];
  authorities?: {};
}

const StaffGroupsCreate: React.FC<Props> = ({ group, lng }) => {
  const { t } = useTranslation(lng, "group");
  const router = useRouter();
  const user = useUser();
  const isEditMode = !!group;
  const [selectedMemberIds, setSelectedMemberIds] = useState<number[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<IUser[]>([]);

  const handleAddMember = (user: IUser) => {
    setSelectedMemberIds([...selectedMemberIds, user.id]);
    setSelectedMembers([...selectedMembers, user]);
  };

  const handleRemoveMember = (user: IUser) => {
    const updatedMemberIds = selectedMemberIds.filter((id) => id !== user.id);
    const updatedMembers = selectedMembers.filter(
      (member) => member.id !== user.id,
    );
    setSelectedMemberIds(updatedMemberIds);
    setSelectedMembers(updatedMembers);
  };

  const handleClearAllMembers = () => setSelectedMembers([]);

  const schema = YupObject().shape({
    groupName: YupString().required(),
    notes: YupString(),
  });

  const DEFAULT_VALUES = {
    id: 1,
    groupName: isEditMode ? group?.groupName : "",
    notes: isEditMode ? group?.notes : "",
    authorities: {},
    staffIds: [],
  };

  const handleSubmit = (values, actions) => {
    const action = isEditMode ? editGroup : createGroup;
    const authorityIds = Object.keys(values.authorities || {}).map((key) =>
      Number(key),
    );
    delete values.authorities;
    action(
      { ...values, staffIds: selectedMemberIds, authorityIds: authorityIds },
      user?.domainName,
    )
      .then((res) => {
        router.replace("/users_and_groups");
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <StaffWrapper lng={lng}>
      <FormikWrapper<GroupFormState>
        initialValues={DEFAULT_VALUES}
        validationSchema={schema}
        validateOnChange={false}
        onSubmit={handleSubmit}
        render={(formikProps) => {
          return (
            <>
              <HStack w="full" justify={"space-between"} mt="30px">
                <Heading as="h4" size="md" fontWeight={700} color="primary.700">
                  {isEditMode ? group?.groupName : capitalize(t("group_name"))}
                </Heading>
                <HStack>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      router.back();
                    }}
                    isDisabled={formikProps.isSubmitting}
                  >
                    {capitalize(t("cancel"))}
                  </Button>
                  <Button
                    onClick={formikProps.submitForm}
                    isDisabled={formikProps.isSubmitting}
                  >
                    {isEditMode
                      ? capitalize(t("save_and_exit"))
                      : capitalize(t("create_group"))}
                  </Button>
                </HStack>
              </HStack>
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                align={"flex-start"}
                w="full"
                mt="5"
                gap="4"
              >
                <VStack flex="5" gap="4" w="full">
                  <Panel w="full">
                    <GroupDetails lng={lng} />
                  </Panel>
                  <Panel w="full">
                    <GroupMembers
                      lng={lng}
                      group={group}
                      selectedMemberIds={selectedMemberIds}
                      selectedMembers={selectedMembers}
                      handleAddMember={handleAddMember}
                      handleRemoveMember={handleRemoveMember}
                      handleClearAllMembers={handleClearAllMembers}
                    />
                  </Panel>
                </VStack>
                <VStack flex="8" w="full">
                  <Panel w="full">
                    <GroupSettings lng={lng} group={group} />
                  </Panel>
                </VStack>
              </Flex>
            </>
          );
        }}
      />
    </StaffWrapper>
  );
};

export default StaffGroupsCreate;
