"use client";
import useScreen from "@/app/hooks/useScreen";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  lng: string;
  children: ReactNode;
};

const Container: React.FC<Props> = ({ lng, children, ...props }) => {
  const { t } = useTranslation(lng, "nav");
  return (
    <Box
      h="100vh"
      backgroundColor="white.400"
      style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.08)" }}
      {...props}
    >
      <Flex h="100%" flexDirection="column">
        <VStack
          alignItems="flex-start"
          flex={1}
          w="full"
          pt="6"
          pr="2"
          pl="10"
          overflowY="auto"
        >
          <HStack px="2" my="3" ml="2">
            <Image
              src="/logo-uhr-admin.svg"
              alt="Admin Logo"
              width="30"
              height="30"
            />
            <Text fontSize="13px" color="primary.700" fontWeight="400">
              {capitalize(t("administrator"))}
            </Text>
          </HStack>
          <Box my="2">
            <Image
              src="/nav-divider.svg"
              alt="Divider"
              width="200"
              height="200"
            />
          </Box>
          {children}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Container;
