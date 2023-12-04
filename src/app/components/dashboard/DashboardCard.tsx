import {
  Box,
  BoxProps,
  Fade,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { MdChevronRight, MdClose } from "react-icons/md";

type Props = {
  isDismissable?: boolean;
  boxProps?: BoxProps;
  children?: string | React.ReactElement;
  childrenWrapperProps?: BoxProps;
  onButtonClick?: () => void;
  buttonIcon?: ReactElement;
};

const DashboardCard: React.FC<Props> = ({
  isDismissable,
  boxProps,
  children,
  childrenWrapperProps,
  onButtonClick,
  buttonIcon,
}) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Fade in={isOpen} style={{ width: "100%" }} unmountOnExit={true}>
      <Box
        w="full"
        background="white.400"
        borderRadius="8px"
        border="1px solid #F0F0F0"
        p="17"
        {...boxProps}
      >
        <Flex
          flexDirection="row"
          gap="2"
          align="flex-end"
          {...childrenWrapperProps}
        >
          {children}
          {!!onButtonClick && (
            <IconButton
              isRound={true}
              backgroundColor="transparent"
              color={"primary.600"}
              border="1px solid #61A4AD"
              fontSize="20px"
              aria-label="dismiss"
              icon={buttonIcon ? buttonIcon : <MdChevronRight />}
              onClick={(e) => {
                e.preventDefault();
                onButtonClick?.();
              }}
              alignSelf="flex-end"
            />
          )}
        </Flex>

        <Box w="full" display="flex" justifyContent="flex-end">
          {isDismissable && (
            <IconButton
              isRound={true}
              backgroundColor="white.300"
              color={"primary.900"}
              fontSize="20px"
              aria-label="dismiss"
              icon={<MdClose />}
              onClick={(e) => {
                e.preventDefault();
                onToggle();
              }}
            />
          )}
        </Box>
      </Box>
    </Fade>
  );
};

export default DashboardCard;
