import { Button, HStack, Heading, VStack } from "@chakra-ui/react";
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

type Props = { lng: string };
const AdmingGroupsCreate: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "group");
  const router = useRouter();

  const schema = YupObject().shape({});

  const DEFAULT_VALUES = {};

  const handleSubmit = () => {};

  return (
    <AdminWrapper lng={lng}>
      <FormikWrapper
        initialValues={DEFAULT_VALUES}
        validationSchema={schema}
        validateOnChange={false}
        onSubmit={handleSubmit}
        render={() => (
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
                <Button onClick={() => {}}>
                  {capitalize(t("create_group"))}
                </Button>
              </HStack>
            </HStack>
            <HStack align={"flex-start"} w="full" mt="5">
              <VStack flex="5" gap="4">
                <Panel w="full">
                  <GroupDetails lng={lng} />
                </Panel>
                <Panel w="full">
                  <GroupMembers lng={lng} />
                </Panel>
              </VStack>
              <VStack flex="8">
                <Panel w="full">
                  <GroupSettings lng={lng} />
                </Panel>
              </VStack>
            </HStack>
          </>
        )}
      />
    </AdminWrapper>
  );
};

export default AdmingGroupsCreate;
