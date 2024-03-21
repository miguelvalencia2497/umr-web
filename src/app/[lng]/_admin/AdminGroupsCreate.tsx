import { Button, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import AdminWrapper from "./AdminWrapper";
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
import { AuthNames } from "../types/Users";

type Props = { lng: string };
const AdmingGroupsCreate: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "group");
  const router = useRouter();

  const schema = YupObject().shape({});

  const DEFAULT_VALUES = {};

  const handleSubmit = (values, actions) => {
    createGroup({
      domain: "DOMAIN",
      groupName: values.group_name,
      description: values.notes,
      authorities: [AuthNames.ADMIN],
    })
      .then((res) => {
        console.log("🚀 ~ createGroup ~ res:", res);
      })
      .catch((error) => {
        console.log("🚀 ~ handleSubmit ~ error:", error);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <AdminWrapper lng={lng}>
      <FormikWrapper
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
                  {capitalize(t("create_group"))}
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
    </AdminWrapper>
  );
};

export default AdmingGroupsCreate;
