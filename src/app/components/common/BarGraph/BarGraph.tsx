import { Box, BoxProps, HStack, Text, VStack } from "@chakra-ui/react";
import { IBarGraphData } from "./types";
import { pluralize, titleize } from "@/app/utils/string";

type Props = {
  type: string;
  data: IBarGraphData[];
  wrapperProps?: BoxProps;
};

const BarGraph: React.FC<Props> = ({ type, data, wrapperProps }) => {
  const total = data.reduce((sum, d) => {
    return sum + d.count;
  }, 0);

  return (
    <Box {...wrapperProps}>
      <VStack w="full" align={"flex-start"} gap="-25px">
        <HStack w="full" justify={"space-between"}>
          <HStack>
            {data.map((d, i) => (
              <Text
                display={"flex"}
                alignItems={"center"}
                key={i}
                color={d.color}
                fontWeight={400}
                fontSize={"14px"}
              >
                <Text as="span" fontSize="30px" mr="8px">
                  {"\u2022"}
                </Text>
                {titleize(`${d.count} ${d.title} ${pluralize(d.count, type)}`)}
              </Text>
            ))}
          </HStack>
          <Text
            color="primary.700"
            fontSize={"14px"}
            fontWeight={900}
          >{`${total} ${pluralize(total, type)}`}</Text>
        </HStack>
        <HStack w="full" gap="1px">
          {data.map((d, i) => (
            <Box
              key={i}
              flex={`${d.count}`}
              backgroundColor={d.color}
              height="6px"
              borderLeftRadius={i === 0 ? "100px" : "0"}
              borderRightRadius={i === data.length - 1 ? "100px" : "0"}
            ></Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};
export default BarGraph;
