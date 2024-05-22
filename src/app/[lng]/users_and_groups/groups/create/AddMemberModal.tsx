import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Checkbox, Input } from "@chakra-ui/react";
import { getGroupsUsers } from "@/app/api/groups";
import { IUser } from "@/app/[lng]/types/Users";
import { fullName } from "@/app/utils/string";
import { GroupUser } from "../../types";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMemberIds: number[];
  addMember: (user: IUser) => void;
  removeMember: (user: IUser) => void;
  users: IUser[];
  clearAllMembers: () => void;
}

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  selectedMemberIds,
  addMember,
  removeMember,
  clearAllMembers,
  users,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users?.filter(
    (user: IUser) =>
      user.emailAddress?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.middleName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCheckboxChange = (user: IUser, isChecked: boolean) => {
    if (isChecked) {
      addMember(user);
    } else {
      removeMember(user);
    }
  };

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Group Members</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            mb={4}
          />
          <VStack gap={4} align={"flex-start"}>
            {filteredUsers?.map((user: IUser) => (
              <Checkbox
                variant="circular"
                key={user.id}
                onChange={(e) => handleCheckboxChange(user, e.target.checked)}
                isChecked={selectedMemberIds.includes(user.id)}
              >
                <Text fontSize={"12px"} color="primary.700">
                  {user.emailAddress}
                </Text>
                <Text fontSize={"12px"} color="primary.700">
                  {fullName({
                    first_name: user.firstName,
                    last_name: user.lastName,
                  })}
                </Text>
              </Checkbox>
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            mr={3}
            onClick={clearAllMembers}
            variant={!selectedMemberIds.length ? "outline" : "solid"}
            disabled={!selectedMemberIds.length}
          >
            Unselect All Members
          </Button>
          <Button
            onClick={() => {
              props.onClose();
            }}
          >
            Add Users
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMemberModal;
