import AdminHeader from "@/app/components/admin/AdminHeader";
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
        <SideNavigation lng={lng} />
        <Box ml="250px" px="6" py="8" w="full">
          <AdminHeader lng={lng} mb="4" />
          {children}
        </Box>
      </HStack>
    </>
  );
};

export default AdminWrapper;
