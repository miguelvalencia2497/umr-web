import SideNavigation from "@/app/components/common/SideNavigation/SideNavigation";
import { Box, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  lng: string;
  children?: ReactNode;
};
const AdminWrapper: React.FC<Props> = ({ lng, children, ...props }) => {
  return (
    <>
      <HStack align="flex-start">
        <SideNavigation lng={lng} flex="2" />
        <Box flex="7" px="6" py="8">
          {children}
        </Box>
      </HStack>
    </>
  );
};

export default AdminWrapper;
