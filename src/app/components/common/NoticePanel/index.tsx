import {
  BoxProps,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

type Props = {
  title?: string;
  subtitle?: string;
  image?: string;
  onButtonClick?: () => void;
  boxProps?: BoxProps;
};

const NoticePanel: React.FC<Props> = ({
  title,
  subtitle,
  image,
  onButtonClick,
  boxProps,
}) => {
  return (
    <Flex
      w="full"
      backgroundColor="primary.600"
      color="white.300"
      alignItems="center"
      justifyContent="space-between"
      py="4"
      px="6"
      borderRadius="16"
      {...boxProps}
    >
      <VStack
        align={"flex-start"}
        justifyContent={"flex-start"}
        gap="0.5"
        pr="2"
      >
        <Heading as="h4" size="md" mb="0">
          {title}
        </Heading>
        {!!subtitle && <Text fontSize="12px">{subtitle}</Text>}
      </VStack>
      {!!onButtonClick && (
        <IconButton
          isRound={true}
          backgroundColor="primary.800"
          color={"white.200"}
          aria-label="continue"
          fontSize="20px"
          icon={<MdChevronRight />}
        />
      )}
    </Flex>
  );
};

export default NoticePanel;
