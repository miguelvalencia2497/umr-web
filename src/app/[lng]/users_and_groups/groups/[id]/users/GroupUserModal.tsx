"use client";
import { GroupUser, UserGroup } from "../../../types";
import BasicModal from "@/app/components/common/BasicModal/BasicModal";
import {
  Box,
  Button,
  Divider,
  HStack,
  ModalFooter,
  ModalProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { capitalize, fullName } from "@/app/utils/string";
import { useTranslation } from "@/app/i18n/client";
import { QueryClient, useQueryClient } from "react-query";
import { removeMembersFromGroup } from "@/app/api/groups";

type Props = ModalProps & {
  user?: GroupUser;
  group?: UserGroup;
  lng: string;
};
const GroupUserModal: React.FC<Props> = ({ user, group, lng, ...props }) => {
  const { t } = useTranslation(lng, "group");
  const queryClient = useQueryClient();

  const removeMember = () => {
    removeMembersFromGroup(group?.id, user?.id ? [user?.id] : [])
      .then(() => {
        queryClient.invalidateQueries("groupUsers");
      })
      .finally(() => {
        props.onClose();
      });
  };

  return (
    <BasicModal {...props}>
      <HStack>
        <HStack>
          <Box w="35px">
            <Image
              src="/icon-avatar.svg"
              alt="icon-avatar"
              width={100}
              height={100}
            />
          </Box>
          <VStack gap="0" align={"flex-start"} ml="4">
            <Text fontWeight={700}>
              {fullName({
                first_name: user?.firstName,
                last_name: user?.lastName,
              })}
            </Text>
            <Text fontSize="sm">
              {capitalize(t("unique_id"))}: {user?.id}
            </Text>
          </VStack>
        </HStack>
      </HStack>
      <Divider my="4" />
      <VStack gap={3}>
        <VStack w="full" align={"flex-start"} gap={0}>
          <Text fontSize={"xs"}>
            {capitalize(t("prc_registration_number"))}
          </Text>
          <Text fontSize={"xs"} fontWeight={600}>
            {user?.prc_registration_number || "-"}
          </Text>
        </VStack>
        <VStack w="full" align={"flex-start"} gap={0}>
          <Text fontSize={"xs"}>{capitalize(t("hospitals"))}</Text>
          <Text fontSize={"xs"} fontWeight={600}>
            {"-"}
          </Text>
        </VStack>
        <VStack w="full" align={"flex-start"} gap={0}>
          <Text fontSize={"xs"}>{capitalize(t("email_address"))}</Text>
          <Text fontSize={"xs"} fontWeight={600}>
            {user?.emailAddress || "-"}
          </Text>
        </VStack>
      </VStack>
      <ModalFooter p="0">
        <HStack w="full" justify={"flex-end"} py="4">
          <Button
            onClick={() => {
              props.onClose();
            }}
            size={"sm"}
            variant={"outline"}
          >
            {capitalize(t("go_back"))}
          </Button>
          <Button
            size={"sm"}
            backgroundColor="error.400"
            onClick={() => {
              removeMember();
            }}
          >
            {capitalize(t("remove_this_member_from_group"))}
          </Button>
        </HStack>
      </ModalFooter>
    </BasicModal>
  );
};

export default GroupUserModal;
