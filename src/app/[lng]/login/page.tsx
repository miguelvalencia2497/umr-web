"use client";
import { Box, HStack } from "@chakra-ui/react";
import { useTranslation } from "@/app/i18n/client";
import LoginForm from "./form";
import useScreen from "../../hooks/useScreen";

type LoginProps = {
  params: { lng: string };
};

const Login: React.FC<LoginProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const { isMobile } = useScreen();
  return (
    <>
      <HStack>
        <Box w={["100%", "50%"]} h="100vh" px={["5", "10", "10", "40"]}>
          <LoginForm lng={lng} />
        </Box>
        {!isMobile && (
          <Box w="50%" h="100vh" py="20px" px="32px">
            <Box
              w="full"
              h="full"
              borderRadius="14px"
              backgroundColor="white.700"
              boxShadow="0px 0px 12px 0px rgba(0, 0, 0, 0.12);"
            ></Box>
          </Box>
        )}
      </HStack>
    </>
  );
};

export default Login;
