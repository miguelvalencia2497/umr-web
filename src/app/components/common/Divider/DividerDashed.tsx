import { Box } from "@chakra-ui/react";
import dividerDashed from "../../../../../public/line-img-dashed.png";

const DividerDashed = () => {
  return (
    <Box
      w="full"
      height="2px"
      my="16px"
      style={{
        backgroundImage: `url(${dividerDashed.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
      }}
    ></Box>
  );
};
export default DividerDashed;
