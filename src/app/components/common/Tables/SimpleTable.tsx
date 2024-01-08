import {
  Box,
  BoxProps,
  Button,
  HStack,
  Input,
  InputProps,
  Table,
  TableContainer,
  Tbody,
  Td,
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
    onSearch?: any;
    onFilter?: any;
    inputSearchProps?: InputProps;
  },
) => JSX.Element = ({
  data,
  columns,
  onSearch,
  onFilter,
  inputSearchProps,
  ...props
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <VStack
      borderRadius="8px"
      border="1px solid #E7E7E7"
      background="white.400"
      mt="24px"
      p="0"
      spacing="0"
    >
      {!!onSearch || !!onFilter ? (
        <HStack w="40%" m="4" p="0" alignSelf="flex-end">
          {!!onSearch && (
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                let value = e?.target?.value;
                onSearch(value);
              }}
              {...inputSearchProps}
            />
          )}
          {!!onFilter && (
            <Button
              variant="outline"
              border="1px solid rgba(0, 91, 107, 0.30);"
              borderRadius="8px"
              color="primary.700"
              fontWeight="400"
              fontSize="12px"
              px="4"
            >
              <Box mr="2">
                <Image
                  alt="filter"
                  src="/icon-filter.svg"
                  width="40"
                  height="40"
                />
              </Box>
              Filter
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
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} px="0" fontWeight="400">
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
