import { CheckboxProps } from "@chakra-ui/checkbox";
import { MdHelpOutline } from "react-icons/md";
import FieldWrapper, { IFieldWrapperProps } from "./FieldWrapper";
import { Box, Checkbox, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";

export type CheckboxFieldProps = IFieldWrapperProps & CheckboxProps;

export default function CheckboxField({
  label,
  labelProps,
  tooltipText,
  tooltipTextProps,
  onChange,
  ...props
}: CheckboxFieldProps): JSX.Element {
  return (
    <FieldWrapper {...props}>
      {(field, _, form, props) => {
        return (
          <Checkbox
            isChecked={Boolean(field.value)}
            {...(form.isSubmitting && { isDisabled: true })}
            {...field}
            {...props}
            onChange={(e) => {
              onChange?.(e);
              form.setFieldValue(props.name, e.target.checked);
            }}
          >
            <Flex alignItems="center" ml="2">
              <Text fontSize="sm" {...labelProps}>
                {label}
              </Text>
              {tooltipText && (
                <Tooltip
                  label={<Text>{tooltipText}</Text>}
                  hasArrow
                  placement="top"
                  textAlign="center"
                  zIndex={100}
                  {...tooltipTextProps}
                >
                  <Box as="span" ml="1" mt="-1px" position="relative"></Box>
                </Tooltip>
              )}
            </Flex>
          </Checkbox>
        );
      }}
    </FieldWrapper>
  );
}
