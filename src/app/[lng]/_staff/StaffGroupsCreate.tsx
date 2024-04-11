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
import { createGroup } from "@/app/api/groups";
import { useUser } from "@/app/contexts/UserContext";
import { UserGroup } from "../users_and_groups/types";

type Props = { group?: UserGroup; lng: string };

export interface GroupFormState {
  groupName?: string;
  notes: string;
}

const StaffGroupsCreate: React.FC<Props> = ({ group, lng }) => {
  const { t } = useTranslation(lng, "group");
  const router = useRouter();
  const user = useUser();
  const isEditMode = !!group;

  const schema = YupObject().shape({
    groupName: YupString().required(),
    notes: YupString(),
  });

  const DEFAULT_VALUES = {
    id: 1,
    groupName: isEditMode ? group?.groupName : "",
    notes: isEditMode ? group?.notes : "",
    authorities: [],
  };

  const handleSubmit = (values, actions) => {
    createGroup(values, user?.domainName)
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
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
        render={(formikProps) => (
          <>
            <HStack w="full" justify={"space-between"} mt="30px">
              <Heading as="h4" size="md" fontWeight={700} color="primary.700">
                {capitalize(t("group_name"))}
              </Heading>
              <HStack>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    router.back();
                  }}
                >
                  {capitalize(t("cancel"))}
                </Button>
                <Button onClick={formikProps.submitForm}>
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
                  <GroupMembers lng={lng} />
                </Panel>
              </VStack>
              <VStack flex="8" w="full">
                <Panel w="full">
                  <GroupSettings lng={lng} />
                </Panel>
              </VStack>
            </Flex>
          </>
        )}
      />
    </StaffWrapper>
  );
};

export default StaffGroupsCreate;
