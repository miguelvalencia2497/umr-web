import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type Props = {
  title?: string;
  children: any;
  actions?: any;
} & ModalProps;

const BasicModal: React.FC<Props> = ({
  title,
  children,
  actions,
  ...props
}) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {actions ? <ModalFooter>{actions}</ModalFooter> : null}
      </ModalContent>
    </Modal>
  );
};
export default BasicModal;
