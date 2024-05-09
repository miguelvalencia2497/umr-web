import { CheckboxProps } from "@chakra-ui/checkbox";
import { MdHelpOutline } from "react-icons/md";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";
import { Box, Checkbox, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";

export type CheckboxFieldProps = FieldWrapperProps & CheckboxProps;

export default function CheckboxField({
  label,
  checkboxProps,
  ...props
}: CheckboxFieldProps): JSX.Element {
  return (
    <FieldWrapper {...props}>
      <Checkbox {...checkboxProps}>
        <Flex alignItems="center" ml="2">
          <Text fontSize="sm">{label}</Text>
        </Flex>
      </Checkbox>
    </FieldWrapper>
  );
}
