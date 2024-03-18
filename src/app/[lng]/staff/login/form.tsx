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
import { useState } from "react";
import { object as YupObject, string as YupString } from "yup";
import Image from "next/image";
import useScreen from "@/app/hooks/useScreen";
import { useAuth } from "@/app/contexts/AuthContext";
import { useTranslation } from "@/app/i18n/client";
import { capitalize, titleize } from "@/app/utils/string";
import FormikWrapper from "@/app/components/form/FormikWrapper";
import TextField from "@/app/components/form/TextField";
import { AuthNames } from "../../types/Users";

export type ILoginForm = {
  email: string;
  password: string;
};

const LoginForm: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { isMobile, isTablet, isLargeTablet } = useScreen();
  const { login } = useAuth();

  const schema = YupObject().shape({
    email: YupString(),
    password: YupString(),
  });

  const DEFAULT_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: ILoginForm) => {
    login?.(values.email, values.password, () => {}, AuthNames.STAFF);
  };

  return (
    <VStack
      h="full"
      align={{ base: "center", md: "center", lg: "flex-end" }}
      justify="center"
    >
      <VStack
        w={{ base: "90%", md: "90%", lg: "80%" }}
        px="10"
        py="20"
        align="center"
        justify="center"
        border="1px solid #E7E7E7"
        borderRadius="8px"
        backgroundColor="white.400"
        boxShadow="0px 2px 8px 0px rgba(0, 0, 0, 0.08)"
      >
        {(isMobile || isTablet || isLargeTablet) && (
          <Image src="/logo-uhr.svg" alt="uhr logo" width={100} height={100} />
        )}
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
