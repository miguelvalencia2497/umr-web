import { capitalize } from "@/app/utils/string";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  value: string | JSX.Element;
};

const NameValuePair: React.FC<Props> = ({ name, value = "" }) => {
  return (
    <Box>
      <Text fontSize={"2xs"} color="primary.500">
        {capitalize(name)}
      </Text>

      {typeof value === "string" ? (
        <Text fontSize={"xs"} fontWeight={"bold"} color="primary.100">
          {value || "-"}
        </Text>
      ) : (
        value
      )}
    </Box>
  );
};

export default NameValuePair;
