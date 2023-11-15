"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { capitalize, titleize } from "../../utils/string";
import { FormikHelpers } from "formik";
import { useTranslation } from "../../i18n/client";
import Image from "next/image";
import TextField from "../components/form/TextField";
import { useState } from "react";
import FormikWrapper from "../components/form/FormikWrapper";
import { object as YupObject, string as YupString } from "yup";

export type ILoginForm = {
  email: string;
  password: string;
};

const LoginForm: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const schema = YupObject().shape({
    email: YupString(),
    password: YupString(),
  });

  const DEFAULT_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: ILoginForm,
    actions: FormikHelpers<ILoginForm>,
  ) => {
    console.log("🚀 ~ file: form.tsx:39 ~ handleSubmit ~ values:", values);
    // login?.(values.email, values.password, () => {
    //   actions.setSubmitting(false);
    // });
  };

  return (
    <VStack h="full" align="center" justify="center">
      <Box w="70px" mb="16px">
        <Image src="/logo-uhr.svg" alt="" width={100} height={100} />
      </Box>
      <Text
        fontFamily={"montserratAlternates"}
        color="primary.700"
        fontWeight="600"
        fontSize="14px"
        mb="40px"
      >
        {titleize(t("universal_health_records"))}
      </Text>
      <Box w="full">
        <FormikWrapper<ILoginForm>
          initialValues={DEFAULT_VALUES}
          validationSchema={schema}
          onSubmit={handleSubmit}
          render={(formikProps) => {
            return (
              <>
                <Box w="full" mb="2">
                  <TextField
                    name="email"
                    type="email"
                    placeholder={capitalize(t("email_address"))}
                  />
                </Box>
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={capitalize(t("password"))}
                />
                <Flex w="full" justify="flex-start" mt="12px">
                  <Checkbox
                    onChange={(e) => {
                      setShowPassword(e.target.checked);
                    }}
                    variant="circular"
                  >
                    {capitalize(t("show_password"))}
                  </Checkbox>
                </Flex>
                <Button type="submit" variant="solid" w="full" mt="40px">
                  {capitalize(t("login"))}
                </Button>
              </>
            );
          }}
        />
      </Box>
      <Button variant="outline" fontWeight="400" w="full" mt="10px">
        {capitalize(t("create_account"))}
      </Button>
      <Link href="/forgot_password" mt="22px">
        {capitalize(t("forgot_password"))}
      </Link>
    </VStack>
  );
};
export default LoginForm;
