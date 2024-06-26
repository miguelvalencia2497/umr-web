import StaffHeader from "@/app/components/admin/AdminHeader";
import SideNavigation from "@/app/components/common/SideNavigation/SideNavigation";
import { Box, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  lng: string;
  children?: ReactNode;
};
const StaffWrapper: React.FC<Props> = ({ lng, children, ...props }) => {
  return (
    <>
      <HStack align="flex-start">
        <SideNavigation lng={lng} flex="2" />
        <Box ml="250px" px="6" py="8" w="full">
          <StaffHeader lng={lng} mb="4" />
          {children}
        </Box>
      </HStack>
    </>
  );
};

export default StaffWrapper;
