import TextField from "@/app/components/form/TextField";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import { Box, FormLabel, Heading, VStack } from "@chakra-ui/react";

type Props = { lng: string };

const GroupDetails: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "group");
  return (
    <Box>
      <Heading as="h6" size="xs">
        {t("group_details")}
      </Heading>
      <VStack gap="4" pt="5">
        <VStack align={"flex-start"} gap={0} w="full">
          <FormLabel>{capitalize(t("group_name"))}</FormLabel>
          <TextField
            name="groupName"
            placeholder={capitalize(t("group_name"))}
          />
        </VStack>
        <VStack align={"flex-start"} gap={0} w="full">
          <FormLabel>{capitalize(t("notes"))}</FormLabel>
          <TextField
            textarea={true}
            name="notes"
            placeholder={capitalize(t("notes"))}
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default GroupDetails;
