import useScreen from "@/app/hooks/useScreen";
import {
  Box,
  BoxProps,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";

const SimpleTable: <T>(
  props: BoxProps & {
    data: T[];
    columns: ColumnDef<T, any>[];
    mobileColumns: ColumnDef<T, any>[];
    onSearch?: any;
    onFilter?: any;
    inputSearchProps?: InputProps;
    hideHeaders?: boolean;
  },
) => JSX.Element | null = ({
  data,
  columns,
  mobileColumns,
  onSearch,
  onFilter,
  inputSearchProps,
  hideHeaders,
  ...props
}) => {
  const { isMobile } = useScreen();
  const cols = isMobile ? mobileColumns : columns;

  const table = useReactTable({
    data,
    columns: cols,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!cols) {
    return null;
  }

  return (
    <VStack
      borderRadius="8px"
      border="1px solid #E7E7E7"
      background="white.400"
      mt="24px"
      p="0"
      spacing="0"
      maxW={"100%"}
      {...props}
    >
      {!!onSearch || !!onFilter ? (
        <HStack
          w={{ base: "100%", md: "40%" }}
          m={{ base: "0", md: "4" }}
          p={{ base: "4", md: "0" }}
          alignSelf="flex-end"
        >
          {!!onSearch && (
            <InputGroup flex={6}>
              <InputLeftElement>
                <Image
                  alt="search"
                  src="/icon-search.svg"
                  width="20"
                  height="20"
                />
              </InputLeftElement>
              <Input
                type="text"
                placeholder={isMobile ? "" : "Search"}
                onChange={(e) => {
                  let value = e?.target?.value;
                  onSearch(value);
                }}
                {...inputSearchProps}
              />
            </InputGroup>
          )}
          {!!onFilter && (
            <Button
              variant="outline"
              border="1px solid rgba(0, 91, 107, 0.30);"
              borderRadius="8px"
              color="primary.700"
              fontWeight="400"
              fontSize="12px"
              px={{ base: "3", md: "4" }}
              flex={1}
            >
              <Box mr={{ base: "0", md: "2" }} w={isMobile ? "24px" : "20px"}>
                <Image
                  alt="filter"
                  src="/icon-filter.svg"
                  width={100}
                  height={100}
                />
              </Box>
              {!isMobile && <Text>Filter</Text>}
            </Button>
          )}
        </HStack>
      ) : null}
      <TableContainer w="100%" px="4">
        <Table
          variant="simple"
          color="primary.700"
          fontSize="12px"
          fontWeight="500"
        >
          {!hideHeaders && (
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th
                      key={header.id}
                      px="0"
                      fontWeight="400"
                      textTransform="initial"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
          )}
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} px="0">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default SimpleTable;
