import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

export declare type Props = BoxProps & {
  small?: boolean;
  noPadding?: boolean;
};

const ContentWrapper: React.FunctionComponent<Props> = ({
  small,
  noPadding,
  children,
  ...props
}): JSX.Element => {
  return (
    <Box
      boxSizing="border-box"
      mx={{ base: 0, md: "auto" }}
      pl={small || noPadding ? "0" : { base: "4", lg: "40" }}
      pr={small || noPadding ? "0" : { base: "4", lg: "40" }}
      w="full"
      pb={noPadding ? "0" : { base: 6, md: 8 }}
      pt={noPadding ? "0" : { base: 6, md: 8 }}
      maxWidth={{ base: "none", lg: small ? "70%" : "none" }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
