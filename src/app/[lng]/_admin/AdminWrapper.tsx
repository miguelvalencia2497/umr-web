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
      <HStack>
        <SideNavigation lng={lng} flex="1" />
        <Box flex="6">{children}</Box>
      </HStack>
    </>
  );
};

export default AdminWrapper;
