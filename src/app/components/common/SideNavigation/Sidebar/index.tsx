"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import Container from "./Container";
import { useAuth } from "@/app/contexts/AuthContext";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import Image from "next/image";

type Props = { lng: string; items: string[] };
const SideBar: React.FC<Props> = ({ lng, items, ...props }) => {
  const { t } = useTranslation(lng, "nav");

  const { logout } = useAuth();

  const renderItems = (items: string[]) => {
    return items.map((item, index) => {
      return (
        <Button
          variant="transparent"
          key={index}
          w="full"
          justifyContent="flex-start"
        >
          <Box mr="4">
            <Image
              src={`/nav-admin-${item}.svg`}
              alt={item}
              width="25"
              height="25"
            />
          </Box>
          <Text color="primary.500" fontSize="13px">
            {capitalize(t(item))}
          </Text>
        </Button>
      );
    });
  };

  return (
    <Container lng={lng} {...props}>
      {renderItems(items)}
      <Button size="xs" variant="transparent" onClick={() => logout?.()}>
        Temporary Logout
      </Button>
    </Container>
  );
};

export default SideBar;
