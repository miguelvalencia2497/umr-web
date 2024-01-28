import { Box, BoxProps } from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  children: any;
} & BoxProps;

const Panel: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      borderRadius={"8px"}
      border="1px solid"
      borderColor={"primary.300"}
      background="white.400"
      padding={"16px"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Panel;
