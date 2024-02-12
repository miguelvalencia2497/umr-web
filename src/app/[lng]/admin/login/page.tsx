"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import bg from "../../../../../public/bg-login.png";
import LoginForm from "./form";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
import { Trans } from "react-i18next";
import useScreen from "@/app/hooks/useScreen";

type LoginProps = {
  params: { lng: string };
};

const Login: React.FC<LoginProps> = ({ params: { lng } }) => {
  const { isMobile, isTablet } = useScreen();
  const { t } = useTranslation(lng);
  return (
    <>
      <HStack>
        <Box w={{ base: "100%", md: "100%", lg: "40%" }} h="100vh">
          <LoginForm lng={lng} />
        </Box>
        {!isMobile && !isTablet && (
          <Flex
            w="60%"
            h="100vh"
            align="center"
            justify="center"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "left",
            }}
          >
            <VStack
              w="400px"
              h="full"
              align="flex-start"
              justify="center"
              textAlign="left"
            >
              <Box ml="10px">
                <Image
                  src="/logo-uhr.svg"
                  alt="uhr logo"
                  width={100}
                  height={100}
                />
              </Box>
              <Text
                fontFamily="montserrat"
                fontSize="24px"
                fontWeight="600"
                color="primary.700"
              >
                {t("universal_health_records")}
              </Text>
              <Text fontSize="16px" fontWeight="600" color="primary.700">
                <Trans
                  i18nKey="dynamic_space"
                  components={{
                    highlight: <Text as="span" color="primary.600" />,
                  }}
                />
              </Text>
            </VStack>
          </Flex>
        )}
      </HStack>
    </>
  );
};

export default Login;
