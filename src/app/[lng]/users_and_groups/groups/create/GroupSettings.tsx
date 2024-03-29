import CheckboxField from "@/app/components/form/CheckboxField";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import {
  Accordion,
  AccordionItem,
  Heading,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButton,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";

type Props = { lng: string };

const GroupSettings: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "group");
  return (
    <VStack align={"flex-start"}>
      <Heading as="h6" size="xs">
        {capitalize(t("settings"))}
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple width={"full"}>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("view_patients_profile"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("view_patients_profile_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel>
            <VStack my="4" gap="3" align={"flex-start"}>
              <CheckboxField
                name="hmo_account_details"
                label={capitalize(t("hmo_account_details"))}
                variant={"circular"}
              />
              <CheckboxField
                name="dependents"
                label={capitalize(t("dependents"))}
                variant={"circular"}
              />
              <CheckboxField
                name="covid_records"
                label={capitalize(t("covid_records"))}
                variant={"circular"}
              />
              <CheckboxField
                name="consultations"
                label={capitalize(t("consultations"))}
                variant={"circular"}
              />
              <HStack ml="8" align={"flex-start"}>
                <VStack gap="3">
                  <CheckboxField
                    name="history_of_illness"
                    label={capitalize(t("history_of_illness"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="treatments_and_surgeries"
                    label={capitalize(t("treatments_and_surgeries"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="ob-gyne"
                    label={capitalize(t("ob-gyne"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="lab_results"
                    label={capitalize(t("lab_results"))}
                    variant={"circular"}
                  />
                </VStack>
                <VStack gap="3">
                  <CheckboxField
                    name="anaphylaxis_history"
                    label={capitalize(t("anaphylaxis_history"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="current_medication"
                    label={capitalize(t("current_medication"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="family_medical_history"
                    label={capitalize(t("family_medical_history"))}
                    variant={"circular"}
                  />
                </VStack>
              </HStack>
              <CheckboxField
                name="immunizations"
                label={capitalize(t("immunizations"))}
                variant={"circular"}
              />
              <CheckboxField
                name="child_immunizations"
                label={capitalize(t("child_immunizations"))}
                variant={"circular"}
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("patient_triage"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("patient_triage_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              <CheckboxField
                name="view_patient_queue"
                label={capitalize(t("view_patient_queue"))}
                variant={"circular"}
              />
              <CheckboxField
                name="add_patients_to_queue"
                label={capitalize(t("add_patients_to_queue"))}
                variant={"circular"}
              />
              <CheckboxField
                name="access_to_initial_assessment"
                label={capitalize(t("access_to_initial_assessment"))}
                variant={"circular"}
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("edit_patient_profile"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("edit_patient_profile_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack my="4" gap="3" align={"flex-start"}>
              <CheckboxField
                name="edit_hmo_account_details"
                label={capitalize(t("hmo_account_details"))}
                variant={"circular"}
              />
              <CheckboxField
                name="edit_dependents"
                label={capitalize(t("dependents"))}
                variant={"circular"}
              />
              <CheckboxField
                name="edit_covid_records"
                label={capitalize(t("covid_records"))}
                variant={"circular"}
              />
              <CheckboxField
                name="edit_consultations"
                label={capitalize(t("consultations"))}
                variant={"circular"}
              />
              <HStack ml="8" align={"flex-start"}>
                <VStack gap="3">
                  <CheckboxField
                    name="edit_history_of_illness"
                    label={capitalize(t("history_of_illness"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="edit_treatments_and_surgeries"
                    label={capitalize(t("treatments_and_surgeries"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="edit_ob-gyne"
                    label={capitalize(t("ob-gyne"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="edit_lab_results"
                    label={capitalize(t("lab_results"))}
                    variant={"circular"}
                  />
                </VStack>
                <VStack gap="3">
                  <CheckboxField
                    name="edit_anaphylaxis_history"
                    label={capitalize(t("anaphylaxis_history"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="edit_current_medication"
                    label={capitalize(t("current_medication"))}
                    variant={"circular"}
                  />{" "}
                  <CheckboxField
                    name="edit_family_medical_history"
                    label={capitalize(t("family_medical_history"))}
                    variant={"circular"}
                  />
                </VStack>
              </HStack>
              <CheckboxField
                name="edit_immunizations"
                label={capitalize(t("immunizations"))}
                variant={"circular"}
              />
              <CheckboxField
                name="edit_child_immunizations"
                label={capitalize(t("child_immunizations"))}
                variant={"circular"}
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={"0"}>
            <HStack justify={"space-between"} w="full">
              <VStack align={"flex-start"} gap="0" w="341px">
                <Heading as="h6" size="xs">
                  {capitalize(t("upload_doc_to_patient"))}
                </Heading>
                <Text textAlign={"left"} fontSize={"12px"}>
                  {t("upload_doc_to_patient_copy")}
                </Text>
              </VStack>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mt="4" gap="3">
              <CheckboxField
                name="upload_lab_results"
                label={capitalize(t("lab_results"))}
                variant={"circular"}
              />
              <CheckboxField
                name="med_records_notes"
                label={capitalize(t("med_records_notes"))}
                variant={"circular"}
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
export default GroupSettings;
