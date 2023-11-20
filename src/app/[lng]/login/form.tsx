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
import TextField from "../../components/form/TextField";
import { useState } from "react";
import FormikWrapper from "../../components/form/FormikWrapper";
import { object as YupObject, string as YupString } from "yup";
import { useRouter } from "next/navigation";

export type ILoginForm = {
  email: string;
  password: string;
};

const LoginForm: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

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
    router.push("/dashboard");
    actions.setSubmitting(false);
    // });
  };

  return (
    <VStack h="full" align={["center", "flex-end"]} justify="center">
      <VStack
        w="80%"
        px="10"
        py="20"
        align="center"
        justify="center"
        border="1px solid #E7E7E7"
        borderRadius="8px"
        backgroundColor="white.400"
        boxShadow="0px 2px 8px 0px rgba(0, 0, 0, 0.08)"
      >
        <Text
          fontFamily={"montserrat"}
          color="primary.700"
          fontWeight="700"
          fontSize="24px"
          mb="40px"
        >
          {titleize(t("welcome_back"))}!
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
                  <Button
                    type="submit"
                    variant="solid"
                    w="full"
                    mt="40px"
                    isDisabled={formikProps.isSubmitting}
                  >
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
    </VStack>
  );
};
export default LoginForm;
