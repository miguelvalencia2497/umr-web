"use client";

import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  VStack,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import Image from "next/image";
import navTail from "../../../../../public/nav-tail.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

interface Props {
  onClick: () => void;
  boxProps?: BoxProps;
  isActive?: boolean;
  children: React.ReactNode;
}

const Links = [
  "home",
  "documents",
  "immunizations",
  "privacy",
  "settings",
  "faqs",
];

const subLinks = {
  home: [
    "dashboard",
    "medical_histories",
    "consultations",
    "medical_test_results",
    "preview",
    "current_pregnancy",
  ],
};

const NavLink = (props: Props) => {
  const { onClick, isActive, children } = props;
  return (
    <Box
      as="button"
      onClick={(e) => {
        onClick();
      }}
      {...props.boxProps}
    >
      {typeof children === "string" ? (
        <Text
          w="max-content"
          color="primary.700"
          fontSize="13px"
          fontWeight={isActive ? "700" : "400"}
          _hover={{ fontWeight: "700" }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Box>
  );
};

type NavProps = { lng: string };

const Navbar: React.FC<NavProps> = ({ lng }) => {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation(lng, "nav");
  const [activeMainNav, setActiveMainNav] = useState<string | undefined>();
  const [activeSubNav, setActiveSubNav] = useState<string | undefined>(
    pathname.split("/").pop(),
  );

  return (
    <>
      <Box px="32px">
        <Flex w="full" h={16} alignItems={"center"}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <MdClose /> : <MdMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack w="full" justify="space-between">
            <Box flex="1">
              <Image src="/logo-nav.png" alt="" width={170} height={54} />
            </Box>
            <HStack
              flex="1"
              as={"nav"}
              spacing="10"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  onClick={() => {
                    activeMainNav === link
                      ? setActiveMainNav("")
                      : setActiveMainNav(link);
                  }}
                  isActive={activeMainNav === link}
                >
                  <Flex
                    h="65px"
                    align="center"
                    justify="center"
                    // border="1px solid black"
                    w="100px"
                    style={
                      activeMainNav === link
                        ? {
                            backgroundImage: `url(${navTail.src})`,
                            backgroundPositionX: "center",
                            backgroundPositionY: "bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                          }
                        : {}
                    }
                  >
                    <Text
                      w="max-content"
                      color="primary.700"
                      fontSize="13px"
                      fontWeight={activeMainNav === link ? "700" : "400"}
                      _hover={{ fontWeight: "700" }}
                    >
                      {capitalize(t(link))}
                    </Text>
                  </Flex>
                </NavLink>
              ))}
            </HStack>
            <Flex justify="flex-end" flex="1"></Flex>
          </HStack>
        </Flex>
        {!!activeMainNav && (
          <HStack
            w="full"
            as={"nav"}
            spacing="2"
            display={{ base: "none", md: "flex" }}
            align="center"
            justify="center"
            background="linear-gradient(270deg, rgba(192, 222, 229, 0.08) 0%, rgba(192, 222, 229, 0.50) 10.96%, rgba(192, 222, 229, 0.50) 87.63%, rgba(192, 222, 229, 0.05) 100%, rgba(192, 222, 229, 0.08) 100%);"
          >
            {subLinks[activeMainNav as keyof typeof subLinks]?.map((link) => (
              <NavLink
                key={link}
                onClick={() => {
                  setActiveSubNav(link);
                }}
                isActive={activeMainNav === link}
              >
                <Box
                  py="4"
                  px="6"
                  background={
                    activeSubNav === link
                      ? "rgba(192, 222, 229, 0.90);"
                      : "transparent"
                  }
                  borderRadius="4px"
                >
                  <Text
                    w="max-content"
                    color="primary.700"
                    fontSize="13px"
                    fontWeight={activeSubNav === link ? "700" : "400"}
                    _hover={{ fontWeight: "700" }}
                  >
                    {capitalize(t(link))}{" "}
                  </Text>
                </Box>
              </NavLink>
            ))}
          </HStack>
        )}

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
};

export default Navbar;
