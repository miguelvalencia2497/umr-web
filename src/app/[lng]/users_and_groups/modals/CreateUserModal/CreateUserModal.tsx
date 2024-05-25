"use client";
import BasicModal from "@/app/components/common/BasicModal/BasicModal";
import FormikWrapper from "@/app/components/form/FormikWrapper";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import {
  Box,
  Button,
  Divider,
  FormLabel,
  HStack,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ICreateUserForm } from "./types";
import { object as YupObject, string as YupString } from "yup";
import TextField from "@/app/components/form/TextField";
import { useQueryClient } from "react-query";
import { createUser } from "@/app/api/users";

type Props = {
  lng: string;
  isOpen: boolean;
  onClose: () => void;
};

const CreateUserModal: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "user");
  const queryClient = useQueryClient();

  const schema = YupObject().shape({
    firstName: YupString().required(),
    lastName: YupString().required(),
    prcNumber: YupString().required(),
    emailAddress: YupString().required(),
    mobileMumber: YupString(),
  });

  const DEFAULT_VALUES = {
    firstName: null,
    lastName: null,
    prcNumber: null,
    emailAddress: null,
    mobileNumber: null,
  };

  const handleSubmit = (values, actions) => {
    createUser({ ...values, groupIds: [], password: "test", domainId: 1 })
      .then(() => {
        queryClient.invalidateQueries("users");
        queryClient.invalidateQueries("userReports");
      })
      .finally(() => {
        props.onClose();
        actions.setSubmitting(false);
      });
  };

  return (
    <FormikWrapper<ICreateUserForm>
      initialValues={DEFAULT_VALUES}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={handleSubmit}
      render={(formikProps) => {
        return (
          <BasicModal
            title={capitalize(t("create_new_user"))}
            size="2xl"
            {...props}
            actions={
              <Button
                onClick={formikProps.submitForm}
                disabled={formikProps.isSubmitting}
              >
                {t("add_user")}
              </Button>
            }
          >
            <VStack gap={4} align={"flex-start"}>
              <HStack w="full">
                <VStack flex="1" align={"flex-start"} gap={0}>
                  <FormLabel>{capitalize(t("first_name"))}</FormLabel>
                  <TextField
                    name="firstName"
                    placeholder={capitalize(t("first_name"))}
                  />
                </VStack>
                <VStack flex="1" align={"flex-start"} gap={0}>
                  <FormLabel>{capitalize(t("last_name"))}</FormLabel>
                  <TextField
                    name="lastName"
                    placeholder={capitalize(t("last_name"))}
                  />
                </VStack>
              </HStack>
              <VStack align={"flex-start"} gap={0} w="full">
                <FormLabel>
                  {capitalize(t("prc_registration_number"))}
                </FormLabel>
                <TextField
                  name="prcNumber"
                  placeholder={capitalize(t("prc_registration_number"))}
                />
              </VStack>
              <VStack align={"flex-start"} gap={0} w="full">
                <FormLabel>{capitalize(t("email_address"))}</FormLabel>
                <TextField
                  name="emailAddress"
                  type="email"
                  placeholder={capitalize(t("email_address"))}
                />
              </VStack>
              <VStack align={"flex-start"} gap={0} w="full">
                <FormLabel>{capitalize(t("mobile_number"))}</FormLabel>
                <TextField
                  name="mobileNumber"
                  type="string"
                  placeholder={capitalize(t("0000000000"))}
                  inputLeft={
                    <>
                      <Text color={"primary.500"} fontSize={"12px"} ml="16px">
                        +63
                      </Text>
                      <Box mx="8px">
                        <Divider orientation="vertical" height="14px" />
                      </Box>
                    </>
                  }
                />
              </VStack>
              <Text fontSize={"12px"} color="primary.500" mb="6">
                {t("an_activation_email_will_be_sent")}
              </Text>
            </VStack>
          </BasicModal>
        );
      }}
    />
  );
};

export default CreateUserModal;
